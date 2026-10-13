# Information architecture

Three parts: the route map, the page templates and the furniture they must
render, and the triage of the existing prototype components.

---

## 1. Structural principle

The site is organised by **stage of the reader's journey**, not by destination.

A nurse in Kuala Lumpur does not search "AHPRA OBA pathway". She searches "how to
work as a nurse abroad". The question of *where* comes months before the question
of *how*. A destination-first structure only catches readers who have already
decided, which is the smallest and latest slice of the market.

So the site has a **destination-neutral spine** that carries traffic, and
destination sections that convert attention into depth.

The exam content is shared, not duplicated per destination. NCLEX-RN serves both
the United States and Australia's OBA; OSCE-format assessment appears in several
systems; dosage, pharmacology and drug names are universal. Build once, link from
everywhere.

---

## 2. Route map

```
/                                   Home
/compare                            Compare destinations  ← highest-value page
│
├── SPINE (destination-neutral)
│   /exams                          Exams explained — index
│   /exams/nclex-rn                 NCLEX-RN
│   /exams/osce                     OSCE-format assessment
│   /exams/english                  IELTS / OET / PTE
│   /tools                          Practice tools — index
│   /tools/dosage                   Dosage calculation practice
│   /tools/nclex-cases              NCLEX case practice
│   /tools/drug-names               US ↔ Commonwealth drug names
│   /tools/clinical-reference       Antidotes, converters
│   /tools/downloads                Checklists and formula sheets
│
├── DESTINATIONS (registration pathways)
│   /register/australia             Tier: Full
│   /register/australia/pathways    The selector page
│   /register/united-kingdom        Tier: Standard
│   /register/new-zealand           Tier: Standard
│   /register/singapore             Tier: Standard
│   /register/canada                Tier: Overview
│   /register/ireland               Tier: Overview
│   /register/united-states         Tier: Overview
│
├── GULF (different in kind — see editorial-boundaries.md §4)
│   /gulf                           Working in the Gulf — index
│   /gulf/the-work                  What the job is actually like
│   /gulf/contracts                 Contract literacy
│   /gulf/money                     What tax-free actually nets
│   /gulf/adjusting                 Professional and cultural adjustment
│   /gulf/your-next-move            Doing a Gulf stint without damaging a later move
│
├── STUDY (for already-qualified nurses only)
│   /study                          Postgraduate and bridging options
│
├── STORIES
│   /stories                        Index, filterable by route and origin
│   /stories/[slug]                 Individual story
│
└── ABOUT
    /about                          What we are and what we are not
    /sources                        Primary sources index
    /advisers                       Introductions + verify-on-the-register line
```

### Navigation

Primary nav, five items:
`Compare` · `Exams` · `Practice tools` · `Register` · `Working in the Gulf`

`Register` opens a destination list with each destination's depth label shown in
the menu. `Stories` and `Study` live in the footer and in contextual links, not
the primary nav — they are supporting content, not entry points.

**The Gulf is a top-level item and is named differently on purpose.** It is
"Working in the Gulf", never "Gulf registration" or "Gulf pathway", because it is
a different kind of content and the nav should say so.

### Utility bar

A single persistent line above the header: *Independent information for
internationally qualified nurses · We are not a migration agent, a recruiter or an
employer.* This is the positioning statement and it is always visible.

---

## 3. Page furniture

Every page under `/register/*` and `/gulf/*` renders these four elements **from
the template**, sourced from page frontmatter. Not optional, not author-supplied
markup.

| Element | Source | If missing |
| --- | --- | --- |
| Source link(s) | `sources[]` in frontmatter | Build fails |
| Last-reviewed date | `reviewedAt` | Build fails |
| Reviewer credit | `reviewer.name`, `reviewer.country` | Build fails |
| Depth label | `tier`: `full` \| `standard` \| `overview` | Build fails |

Implement as a build-time check. A page that cannot name its reviewer and its
source does not ship — that is the whole credibility strategy expressed as a
lint rule.

Frontmatter shape:

```yaml
title: "Which registration pathway applies"
tier: full
reviewedAt: 2026-10-02
reviewer:
  name: "[Reviewer name]"
  country: "Australia"
  credential: "RN"
sources:
  - label: "Registration standard for internationally qualified RNs"
    url: "https://www.nursingmidwiferyboard.gov.au/..."
    checkedAt: 2026-10-02
```

Stories carry a different set:

```yaml
completedYear: 2024
route: "oba"
trainedIn: "Malaysia"
nowIn: "Victoria, Australia"
verifiedOnRegister: true
```

The "requirements change" notice renders from `completedYear` automatically. The
author cannot forget it because the author does not write it.

---

## 4. Page templates

| Template | Used by | Key elements |
| --- | --- | --- |
| `HomePage` | `/` | Hero, trust panel, sourced statistic, route cards, tools strip, stories, about band |
| `ComparePage` | `/compare` | Neutral destination table, per-destination depth labels, no recommendation anywhere |
| `PathwayPage` | `/register/[country]/pathways` | No-assessment panel, selector group, stage list, "what this will not do", sources |
| `GuidePage` | `/register/*`, `/gulf/*` | Furniture bar, prose, sidebar contents, sources |
| `ToolPage` | `/tools/*` | Tool component, ungated notice, sibling tool nav, exam-prep disclaimer |
| `StoryPage` | `/stories/[slug]` | Dated notice, facts sidebar, "what changed since", contributor note |
| `IndexPage` | section indexes | Card grid with depth labels |

### Notes on two of them

**ComparePage** is the site's most valuable page and the easiest to get wrong. It
compares what each destination *requires*, costs and takes in time — sourced, per
cell. It must not rank destinations, score them, or recommend one. No "best for"
column. The reader draws the conclusion.

**PathwayPage** leads with the no-assessment panel *above* the selector, never
below it. See the selector contract in `docs/design-system.md` §5.

---

## 5. Component triage

Against the existing prototype in `src/components/` and `src/data/`.

### Keep — no change needed

| Component | Note |
| --- | --- |
| `DosageCalcEngine.tsx` / `dosageGenerator.ts` | Best programmatic SEO asset. Expand the bank. |
| `NclexSimulator.tsx` / `nclexCases.ts` | Core. Now serves multiple destinations, not just Australia. |
| `PharmacologyCatalog.tsx` / `drugs.ts` | The sharpest differentiator. Expand hard. |
| `ClinicalReferenceHub.tsx` / `clinicalReference.ts` | Cheap to maintain, good link bait. |

### Change

| Component | What to do |
| --- | --- |
| `PathwayFinder.tsx` / `pathways.ts` | Rewrite to the selector contract. Shows published criteria per country of training. Never a determination. Data must now cover AU, UK, NZ, SG. |
| `CorridorPlaybooks.tsx` / `corridors.ts` | Convert from "migration playbooks" to country guides: how registration works for nurses trained in X. Process, timelines, costs, common failure points. No promises. |
| `NursePassportBuilder.tsx` / `passportModel.ts` | Remove the word "passport" everywhere. Becomes a **registration readiness checklist** — a document checklist against published requirements. No score. No output sent anywhere. |
| `UniversityDirectory.tsx` / `universities.ts` | Narrow to already-qualified nurses: Graduate Diploma, Master of Nursing, NZ competence assessment programmes, and a separately-labelled list of prep providers with relationships disclosed. **Delete all school-leaver Bachelor entries.** |
| `FlorenceAITutor.tsx` / `tutorKnowledge.ts` | Rescope to study tutor. Strip all regulatory content from the index. Implement the refusal behaviour in `editorial-boundaries.md` §5. |
| `StudyVault.tsx` / `studyVault.ts` | Keep the mechanism, change the job: this is the email list engine. Downloads stay genuinely valuable and ungated where a reader needs them. |
| `Hero.tsx`, `Navbar.tsx` | Rebuild to the new nav and the utility bar. The four-pillar menu is gone. |
| `LeadModal.tsx` | Rebuild to collect **contact details and destination only**. Remove any eligibility or qualification field. |
| `Footer.tsx` | Add the what-we-are-not statement and the sources link. |

### Remove

| Component | Reason |
| --- | --- |
| `RecruiterPortal.tsx` | Delete the file. Not shelved — deleted. |
| Any badge/stat component rendering unsourced numbers | Replaced by the trust panel and the one sourced statistic. |

### Add

| Component | Purpose |
| --- | --- |
| `PageFurniture.tsx` | Renders the four required elements. Used by every guide and pathway page. |
| `DepthLabel.tsx` | The tier badge. |
| `CautionPanel.tsx` | The reserved-amber panel. Single implementation so the reservation holds. |
| `DestinationCompare.tsx` | The `/compare` table. |
| `ContributorCard.tsx` | Story card with required date and placeholder behaviour. |
| `AdviserIntroForm.tsx` | Contact + destination only. Carries the verify-on-the-register line. |

---

## 6. Build order

Dependencies first, so the constraints exist before the pages that must obey them.

1. Tokens, Tailwind config, base layout, typography
2. `PageFurniture`, `DepthLabel`, `CautionPanel` + the build-time frontmatter check
3. Nav, utility bar, footer, home page
4. Practice tools — port the four keepers onto the new system
5. `/exams/*` — the shared spine
6. `/register/australia` + `PathwayPage` with the rewritten selector
7. `/compare`
8. Remaining destinations at their declared tiers
9. `/gulf/*`
10. `/stories`, `/study`, `/about`, `/advisers`
11. Florence, rescoped, last — it depends on knowing what is and is not in the
    content set

Steps 1 and 2 are the ones that make the rest hold. Do not reorder them.
