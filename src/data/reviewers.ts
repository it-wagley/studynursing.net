import { ReviewerCredit } from "@/components/PageFurniture";

/**
 * The roster of registered nurses who clinically review pages on this site.
 *
 * RULES — these are not stylistic.
 *
 * 1. A name goes in here ONLY for a real, identifiable registered nurse who
 *    has actually read the page and holds current registration in the
 *    jurisdiction that page covers. An Australian RN does not review US,
 *    Canadian or Irish registration guidance.
 *
 * 2. Never invent a reviewer to satisfy a type or a validator. If no one has
 *    reviewed a page, set `reviewer: null` on it. That renders a visible
 *    "Not yet clinically reviewed" marker, which is an honest claim; a
 *    fabricated credential is not, and on a site that sells itself on
 *    independence it is the one failure that discredits everything else.
 *
 * 3. Declare each reviewer once, here, and reference them from pages. Earlier
 *    the credit was pasted literally into 19 files, so a single placeholder
 *    propagated everywhere unnoticed.
 *
 * The roster is intentionally empty. Add entries as reviewers are engaged:
 *
 *   export const REVIEWERS = {
 *     aPersonKey: { name: "…", country: "United Kingdom", credential: "RN, BSc" },
 *   } satisfies Record<string, ReviewerCredit>;
 */
export const REVIEWERS = {} satisfies Record<string, ReviewerCredit>;

/**
 * Explicit "nobody has reviewed this yet". Prefer this over a bare `null` in
 * page furniture so the intent reads as a decision rather than an omission.
 */
export const UNREVIEWED: ReviewerCredit | null = null;
