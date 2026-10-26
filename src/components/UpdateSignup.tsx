"use client";

import React, { useId, useState } from "react";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";
import {
  CONSENT_TEXT,
  DESTINATION_OPTIONS,
  FIELD_LIMITS,
} from "@/data/leadForm";

/**
 * Update signup.
 *
 * This replaces a modal that offered a "Free Overseas Nursing Roadmap &
 * University List", collected the nurse's qualification, and then told her a
 * copy had been dispatched to her email. There was no PDF in the repository and
 * no email was ever sent.
 *
 * So the offer here is the one thing the site can actually honour: the figures
 * on these pages go out of date, and we will write when the guide she is
 * reading changes. No download, no assessment, no "personalised" anything —
 * what she gets back does not depend on who she is (AGENTS.md § 3), and the
 * only fields are contact details and destination interest (§ 4.2).
 */

interface UpdateSignupProps {
  /** Preselects the dropdown. Must be one of DESTINATION_OPTIONS. */
  destination?: string;
  onNavigate?: (path: string) => void;
}

type Status = "idle" | "submitting" | "done" | "error";

export const UpdateSignup: React.FC<UpdateSignupProps> = ({
  destination,
  onNavigate,
}) => {
  const uid = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [target, setTarget] = useState(
    destination && DESTINATION_OPTIONS.includes(destination)
      ? destination
      : "Still deciding",
  );
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const submitting = status === "submitting";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          destination: target,
          consent,
          website,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        // The old modal checked `res.ok` and did nothing when it was false, so
        // a failed submission showed the success screen regardless.
        setStatus("error");
        setMessage(
          data.error ??
            "We could not save your details just now. Please try again in a few minutes.",
        );
        return;
      }

      setStatus("done");
    } catch {
      setStatus("error");
      setMessage(
        "That did not reach us — check your connection and try again.",
      );
    }
  };

  if (status === "done") {
    return (
      <section
        className="bg-paper-alt border border-line rounded-lg p-6 sm:p-8"
        aria-labelledby={`${uid}-done`}
      >
        <div className="flex items-start gap-3 max-w-measure" role="status">
          <CheckCircle2
            className="w-5 h-5 text-accent shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div className="space-y-2">
            <h2
              id={`${uid}-done`}
              className="font-serif text-heading-sm text-ink font-semibold"
            >
              Your details are with us
            </h2>
            <p className="text-body-sm text-ink-70 leading-body">
              We will email {email} when the{" "}
              {target === "Still deciding" ? "destination guides" : `${target} guide`}{" "}
              changes — a corrected fee, a new English benchmark, a regulator
              reworking a route. Nothing else, and you can reply to any of those
              emails to be taken off the list.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="bg-paper-alt border border-line rounded-lg p-6 sm:p-8 space-y-6"
      aria-labelledby={`${uid}-heading`}
    >
      <div className="space-y-2 max-w-lead">
        <div className="inline-flex items-center gap-1.5 text-eyebrow text-ink-40 font-bold">
          <Mail className="w-3.5 h-3.5" aria-hidden="true" />
          <span>When this changes</span>
        </div>
        <h2
          id={`${uid}-heading`}
          className="font-serif text-heading-lg text-ink font-normal"
        >
          Be told when the figures move
        </h2>
        <p className="text-body text-ink-70 leading-body">
          Registration fees, English benchmarks and assessment routes change
          without announcement, and a figure that was right last year can cost
          you money this year. Leave your details and we will write when the
          guide for your destination is corrected or updated.
        </p>
        <p className="text-body-sm text-ink-60 leading-body">
          We are an information publisher, not an agent, recruiter or migration
          adviser. We will not assess your eligibility, recommend a route for
          you, or pass your details to an employer.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor={`${uid}-name`}
              className="block text-label text-ink font-bold"
            >
              Your name
            </label>
            <input
              id={`${uid}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              maxLength={FIELD_LIMITS.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
              className="w-full min-h-control bg-paper border border-line rounded-md px-3 py-2.5 text-body-sm text-ink placeholder:text-ink-40 transition-colors duration-fast hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-alt disabled:opacity-60"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor={`${uid}-email`}
              className="block text-label text-ink font-bold"
            >
              Email
            </label>
            <input
              id={`${uid}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              maxLength={FIELD_LIMITS.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              className="w-full min-h-control bg-paper border border-line rounded-md px-3 py-2.5 text-body-sm text-ink placeholder:text-ink-40 transition-colors duration-fast hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-alt disabled:opacity-60"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor={`${uid}-phone`}
              className="block text-label text-ink font-bold"
            >
              Phone or WhatsApp{" "}
              <span className="text-ink-40 font-normal">(optional)</span>
            </label>
            <input
              id={`${uid}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              maxLength={FIELD_LIMITS.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={submitting}
              className="w-full min-h-control bg-paper border border-line rounded-md px-3 py-2.5 text-body-sm text-ink placeholder:text-ink-40 transition-colors duration-fast hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-alt disabled:opacity-60"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor={`${uid}-destination`}
              className="block text-label text-ink font-bold"
            >
              Which guide
            </label>
            <select
              id={`${uid}-destination`}
              name="destination"
              required
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              disabled={submitting}
              className="w-full min-h-control bg-paper border border-line rounded-md px-3 py-2.5 text-body-sm text-ink transition-colors duration-fast hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-alt disabled:opacity-60"
            >
              {DESTINATION_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/*
          Honeypot. Hidden from sight and from assistive technology, kept out of
          the tab order, and never shown to a person — so anything in it came
          from a script.
        */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${uid}-website`}>Website</label>
          <input
            id={`${uid}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id={`${uid}-consent`}
            name="consent"
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={submitting}
            className="mt-0.5 w-5 h-5 shrink-0 rounded-sm border border-line-strong accent-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-alt disabled:opacity-60"
          />
          <label
            htmlFor={`${uid}-consent`}
            className="text-body-sm text-ink-70 leading-body"
          >
            {CONSENT_TEXT}{" "}
            <a
              href="/privacy"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("/privacy");
                }
              }}
              className="text-accent hover:text-accent-dark underline underline-offset-2"
            >
              What we do with it
            </a>
          </label>
        </div>

        {status === "error" && (
          <div
            role="alert"
            className="flex items-start gap-2.5 bg-caution-wash border border-caution rounded-md p-4"
          >
            <AlertCircle
              className="w-4 h-4 text-caution-text shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-body-sm text-caution-body leading-body">
              {message}
            </p>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-5 py-3 min-h-control rounded-md bg-ink text-paper text-body-sm font-semibold transition-colors duration-fast hover:bg-ink-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-alt disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>{submitting ? "Sending…" : "Email me when it changes"}</span>
          </button>
          <p className="text-meta text-ink-60" aria-live="polite">
            {submitting ? "Sending your details…" : "No attachment, no download, no newsletter."}
          </p>
        </div>
      </form>
    </section>
  );
};
