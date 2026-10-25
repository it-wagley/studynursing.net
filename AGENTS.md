# StudyNursing.net — build brief

Read this file before writing or changing any code in this repository. It is the
entry point. The three documents under `docs/` are binding, not reference.

| Document | What it governs |
| --- | --- |
| `docs/editorial-boundaries.md` | What the site may and may not say. Overrides everything else. |
| `docs/design-system.md` | Visual system, component contracts, states, accessibility. |
| `docs/information-architecture.md` | Routes, navigation, page templates, component triage. |

---

## 1. What this site is

An **information publisher** for internationally qualified nurses — people who
already hold a nursing qualification and are working out how to register and work
in another country.

Primary audiences, in order: nurses trained in Malaysia, India, the Philippines,
Nepal, Kenya and the Gulf.

The site is **not** an education agent, a recruiter, an employer, a migration
adviser, or a registered health practitioner. The operating entity is based in
Hong Kong.

This is not a positioning statement to put in marketing copy. It is a constraint
on what the software is allowed to do.

## 2. What this site is not — and why the previous build failed

An earlier prototype of this project shipped copy including "Direct qualification
files are now processing", "Zero Broker Scams", "Direct Verified Pathways",
"Connect directly with hospital sponsors", and a badge reading "12,450+ Passports
/ Active Nurse Network". It also contained a simulated employer portal offering
nurse candidate dossiers.

All of that was removed. None of it is to come back, in any wording.

That build did not fail because the tooling was weak. It failed because nothing
told it what it was not allowed to say, so it reached for the conventional
pattern — and the conventional pattern in this market is a recruitment funnel.
These documents exist to remove that default.

## 2b. The second failure — invented facts, October 2026

The build immediately before this one failed a different way, and it is the more
dangerous of the two because it reads as credible rather than salesy.

What shipped, all of it fictional:

- A named clinical reviewer, "Sarah Jenkins, RN, MN (Australia)", credited on
  **19 pages** — including the US, Canadian and Irish registration guides, which
  an Australian RN would not review.
- **Four invented nurses** on `/stories`, each flagged `verifiedOnRegister: true`
  under the heading "Verified Contributor Experiences".
- A sitewide footer reading "Reviewed quarterly by registered nurses · Last site
  audit: October 2026". Neither half was true.
- **9 of 63 cited primary sources returned 404**, and 13 more were stale. Six
  pages — the whole Gulf cluster and Ireland — had no working source at all.
- Of the first 12 figures checked against the regulators, **7 were wrong**,
  including a New Zealand recency standard stated as 2,500 hours in 5 years when
  the Council requires 1,800.
- Every page carried `checkedAt: "2026-10-10"` against sources nobody had opened.

**How the documents in this repository caused it.** Section 4.3 below used to
require a reviewer credit on every regulatory page, and `validatePageFurniture()`
threw if one was missing. A page could not compile without naming somebody, so a
name was produced and pasted into 19 files. A `checkedAt` field needs a date, so
a date appeared. A `sources` array needs URLs, so URLs appeared — one of them
repeating two path segments inside itself, which is not a shape a copied URL
takes. A page titled "Verified Contributor Experiences" needs contributors, so
contributors arrived.

Every one of those rules specified what the output must **look** like. None could
test whether anything was **true**. The scaffolding written to guarantee
integrity is precisely what manufactured the appearance of it.

So, the second rule, equal in force to the one below:

> **Never invent a value to satisfy a schema.**

If a required field has no true value, the honest state is the value. `reviewer`
accepts `null` and renders "Not yet clinically reviewed". A figure you cannot
verify is omitted, not estimated. A source you have not opened is not cited. A
validator that will not accept the honest state is a bug in the validator —
change it, do not feed it a plausible string.

A fabricated figure is worse than a missing one. A missing figure sends a nurse
to the regulator. A wrong one sends her to the wrong conclusion with confidence,
and on this site that can mean concluding she is ineligible when she is not.

## 3. The one rule

> **Explain the rule. Never apply it to a person.**

This governs every page, every component, every string, every API response.

Permitted: stating what a published requirement is, with a link to the regulator
that published it.

Not permitted: anything whose output changes depending on who is reading it —
eligibility determinations, recommended pathways, personal timelines, document
review, visa recommendations.

The test for any feature: **does the output change depending on the individual
using it?** If yes, it is out of scope, however useful it seems.

New Zealand's Immigration Advisers Licensing Act 2007 applies to advice given from
outside New Zealand, and its regulator draws the line at "interpreting that
information or applying immigration instructions to a particular person". That is
the strictest test in our scope, so we apply it everywhere. One rule, all
destinations.

## 4. Non-negotiables

These are build requirements, not content guidelines. A page that breaks one of
them is a bug.

1. **No feature that assesses, scores, ranks or qualifies a user.** Selection
   inputs may filter published information. They may never produce a verdict
   about the person.
2. **No collection of qualifications, test scores, work history, visa status or
   documents.** Not in forms, not in local storage, not in analytics. Contact
   details and destination interest only.
3. **Every regulatory page renders four pieces of furniture**, enforced by the
   page template, not left to the author: a source link, a last-reviewed date, a
   reviewer **state**, and a depth label. See
   `docs/information-architecture.md` § Page furniture.

   The reviewer state is a named registered nurse **or** `null`, which renders a
   visible "Not yet clinically reviewed" marker. `null` is a legitimate, honest
   answer and is the correct one today. A reviewer must hold current
   registration in the jurisdiction the page covers — an Australian RN does not
   review Canadian registration guidance. Names live in `src/data/reviewers.ts`,
   declared once, never pasted into a page file.

   A page with no reviewer may not claim the `full` ("Fully reviewed") depth
   tier, which asserts review by a named nurse. The validator enforces this.
4. **No registration number is displayed anywhere on the site.** Not ours, not a
   partner's.
5. **No job listings, employer names, agency lists, or "who is hiring" content.**
6. **The AI tutor's index contains no regulatory content.** See
   `docs/editorial-boundaries.md` § Florence.
7. **Contributor stories render a completion date and a "requirements change"
   notice.** Both come from the template, not the content.

## 5. Banned strings

Do not generate these, or paraphrases that carry the same promise. This list is
not exhaustive; it is a sample of the failure mode.

```
direct pathway            verified pathway         guaranteed registration
hospital sponsor          sponsorship available    job placement
we place nurses           files processing         fast-track your migration
zero broker scams         easiest route            best way to get to Australia
trusted by N nurses       N+ nurses helped         success rate
```

Any numeral describing our own reach, user count or outcomes is banned unless it
is sourced, cited and dated on the page.

## 6. Stack and conventions

- Next.js 14, App Router, TypeScript, Tailwind CSS, Lucide icons
- Design tokens are defined once in `src/styles/tokens.css` and mapped in
  `tailwind.config.js`. **Do not write raw hex values in components.** If a value
  you need is not a token, add it to the token file with a comment explaining why.
- Server components by default. Client components only where interaction requires
  it — the practice tools and the pathway selector.
- No analytics, tag managers or third-party scripts without an explicit decision
  recorded in this file.
- **Fonts are self-hosted** via `@fontsource-variable/*`, imported in
  `src/app/layout.tsx`. Do not reintroduce `next/font/google`: it fetches from
  Google at build time, which makes every build depend on a network call and
  fails outright offline, behind a proxy, or in CI. It is what stopped this
  project building at all for weeks.
- Only the routes in `generateStaticParams()` exist. `dynamicParams = false`, so
  an unknown path returns a real 404 instead of silently rendering the homepage.

## 7. Definition of done

A page is not finished until all of these are true.

- [ ] Every factual claim links to a primary official source, **and that page was
      opened and read** — not inferred, not reconstructed from memory
- [ ] Every fee, hour count, score threshold and timeline was copied from the
      regulator's own page in the same sitting, with the figure visible on screen
- [ ] `checkedAt` is the date a human actually opened that source. If no one did,
      the field is wrong — omit the citation instead
- [ ] No reviewer name appears unless that person exists, has read the page, and
      is registered in the jurisdiction it covers
- [ ] Source link, last-reviewed date, reviewer credit and depth label all render
- [ ] No string on the page implies an outcome, a promise, or our own authority
- [ ] No input collects anything beyond contact details and destination
- [ ] All interaction states are implemented: default, hover, focus-visible,
      active, disabled, loading, empty, error
- [ ] Keyboard reachable in a sensible order; focus visible at all times
- [ ] Text contrast ≥ 4.5:1 (≥ 3:1 at 24px and above); touch targets ≥ 44px
- [ ] Renders correctly at 360px width with no horizontal scroll
- [ ] Readable with a slow connection and no web fonts loaded

## 8. When something here is unclear

Stop and ask rather than guessing. This project has two failure modes and both
produce confident, fluent pages: one quietly promises something we cannot
deliver, the other states something that is not true. Neither looks wrong on the
screen. That is what makes them expensive.

A question costs minutes. A wrong page costs the credibility the whole site is
built on — and this site has no other asset.

See `docs/source-audit.md` and `docs/figure-audit.md` for what was found in
October 2026 and what remains unverified. Roughly 150 live figures have never
been checked against a regulator. Treat every one as unverified until someone
opens the page.
