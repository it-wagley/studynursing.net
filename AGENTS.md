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
   reviewer credit, and a depth label. See
   `docs/information-architecture.md` § Page furniture.
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
  `tailwind.config.ts`. **Do not write raw hex values in components.** If a value
  you need is not a token, add it to the token file with a comment explaining why.
- Server components by default. Client components only where interaction requires
  it — the practice tools and the pathway selector.
- No analytics, tag managers or third-party scripts without an explicit decision
  recorded in this file.

## 7. Definition of done

A page is not finished until all of these are true.

- [ ] Every factual claim links to a primary official source
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

Stop and ask rather than guessing. The failure mode in this project is a
confident, fluent page that quietly promises something we cannot deliver. A
question costs minutes; a wrong page costs the credibility the whole site is
built on.
