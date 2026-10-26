import { DESTINATION_DATA } from "./destinations";

/**
 * The contract between the update-signup form and the route that receives it.
 *
 * Both sides import from here so they cannot drift apart. In particular the
 * consent sentence is declared once: the wording recorded against a submission
 * is then provably the wording the nurse was shown, rather than a paraphrase
 * written separately in the API and in the component.
 *
 * AGENTS.md § 4.2 — contact details and destination interest only. There is no
 * field here for qualifications, experience, test scores, visa status or
 * documents, and the route drops anything else it receives.
 */

/** The only thing the signup promises. Keep it a statement of fact. */
export const CONSENT_TEXT =
  "I agree to StudyNursing.net keeping my name and contact details so it can email me when the guide for this destination changes.";

/**
 * What a nurse may say she is interested in. Destination names come from the
 * single source of truth for destinations, so this list cannot name a country
 * the site does not cover.
 */
export const DESTINATION_OPTIONS: string[] = [
  ...DESTINATION_DATA.map((d) => d.country),
  "Working in the Gulf",
  "Still deciding",
];

/**
 * Length caps. Applied in the route, not only in the markup, because the route
 * is reachable without the form.
 */
export const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 32,
} as const;

export interface UpdateSignupBody {
  name: string;
  email: string;
  phone?: string;
  destination: string;
  consent: boolean;
  /** Hidden field. A real person leaves it empty; bots fill it in. */
  website?: string;
}
