import { NextResponse } from "next/server";
import {
  CONSENT_TEXT,
  DESTINATION_OPTIONS,
  FIELD_LIMITS,
} from "@/data/leadForm";

/**
 * Update-signup capture. One job: hand the enquiry to the CRM and keep nothing
 * here.
 *
 * What this route replaced, and must never become again
 * ----------------------------------------------------
 * The previous version pushed every submission into a module-level array and
 * served it on `GET /api/leads` with no authentication. Two separate faults:
 * the names, emails and phone numbers of every nurse who had used the form
 * were readable by anyone who typed the URL, and they were lost anyway, since a
 * serverless function's memory does not survive a cold start and is not shared
 * between instances. There is deliberately no GET handler now, and nothing is
 * held in this process between requests.
 *
 * It also answered every submission with
 * `downloadUrl: "/guides/StudyNursing_Overseas_Roadmap_2026.pdf"` — a file that
 * has never existed in this repository — while the form told the nurse a copy
 * had been emailed to her. Nothing was sent. This route makes no claim about
 * anything being delivered, and the form it serves offers no download.
 *
 * AGENTS.md § 4.2 — contact details and destination interest only. The body is
 * destructured field by field below, so a future form cannot quietly start
 * collecting qualifications, test scores, work history or visa status by adding
 * an input: anything not named here is dropped rather than forwarded.
 *
 * Durability
 * ----------
 * If the CRM call fails, the submission is NOT written anywhere — the nurse is
 * told plainly that it did not save, which is the honest outcome, rather than
 * being shown a success screen over a lost lead. A durable queue (Supabase, or
 * Vercel KV) is the next step if volume ever makes a dropped submission likely.
 */

/** Inbound webhook on the CRM. Set in the Vercel project, never committed. */
const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;

/**
 * https only, so contact details are never posted in clear text — except to
 * localhost outside production, which is how this route is tested against a
 * stub receiver.
 */
function usableWebhook(url: string | undefined): url is string {
  if (!url) return false;
  if (url.startsWith("https://")) return true;
  return (
    process.env.NODE_ENV !== "production" &&
    /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//.test(url)
  );
}

/** The CRM gets 8s to answer; Vercel's default function ceiling is 10s. */
const WEBHOOK_TIMEOUT_MS = 8_000;

/**
 * Deliberately permissive: one @, a dot in the domain, no spaces. Stricter
 * patterns reject valid addresses, and the only real test of an address is
 * whether mail to it arrives.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Expected a JSON body." }, { status: 400 });
  }

  const input = (body ?? {}) as Record<string, unknown>;

  // Hidden field. A browser leaves it empty; a form-filling bot does not.
  // Answered 200 so the bot has no signal to retry differently.
  if (clean(input.website, 200) !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clean(input.name, FIELD_LIMITS.name);
  const email = clean(input.email, FIELD_LIMITS.email).toLowerCase();
  const phone = clean(input.phone, FIELD_LIMITS.phone);
  const destination = clean(input.destination, 64);
  const consent = input.consent === true;

  const invalid: string[] = [];
  if (name.length < 1) invalid.push("name");
  if (!EMAIL.test(email)) invalid.push("email");
  if (!DESTINATION_OPTIONS.includes(destination)) invalid.push("destination");
  if (!consent) invalid.push("consent");

  if (invalid.length > 0) {
    return NextResponse.json(
      { error: "Some details were missing or invalid.", fields: invalid },
      { status: 400 },
    );
  }

  if (!usableWebhook(WEBHOOK_URL)) {
    // Deployment fault, not the nurse's. Logged without her details.
    console.error(
      "[leads] LEAD_WEBHOOK_URL is unset or not https — submission refused, nothing stored",
    );
    return NextResponse.json(
      {
        error:
          "Signups are not connected yet, so your details were not saved. Please try again later.",
      },
      { status: 503 },
    );
  }

  /**
   * Flat keys: the CRM's inbound webhook maps incoming JSON field by field, and
   * nested objects make that mapping fiddly. `consentText` travels with the
   * record so what she agreed to is stored alongside when she agreed to it.
   */
  const payload = {
    name,
    email,
    phone,
    destination,
    consent: true,
    consentText: CONSENT_TEXT,
    consentAt: new Date().toISOString(),
    source: "studynursing.net",
    form: "destination-guide-updates",
  };

  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: abort.signal,
      cache: "no-store",
    });

    if (!res.ok) {
      // Destination and status only. Never the submitted contact details.
      console.error(`[leads] CRM rejected the submission: HTTP ${res.status}`);
      return NextResponse.json(
        {
          error:
            "We could not save your details just now. Please try again in a few minutes.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const reason = err instanceof Error ? err.name : "unknown error";
    console.error(`[leads] CRM unreachable (${reason}) — nothing stored`);
    return NextResponse.json(
      {
        error:
          "We could not save your details just now. Please try again in a few minutes.",
      },
      { status: 502 },
    );
  } finally {
    clearTimeout(timer);
  }
}
