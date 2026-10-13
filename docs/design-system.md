# Design system

Derived from the approved artboards. Tokens live in `src/styles/tokens.css` and
are mapped in `tailwind.config.ts`. **Never write a raw hex value in a component.**

The rationale matters as much as the value. An agent that knows *why* amber is
reserved will not use it for a promotional banner.

---

## 1. Design intent

The site reads as a **reference publication**, not a lead-generation funnel.
Credibility is the product. Every visual decision serves that.

Concretely, this means the opposite of the previous prototype's idiom: no
sapphire-blue SaaS hero, no gradient washes, no badge wall, no card with a
coloured left border, no emoji, no Inter/Roboto/Arial.

Three signature moves carry the identity:

1. **Amber means time-sensitive.** It is never decorative. If a reader sees
   amber, something is dated, caveated or needs verifying.
2. **The boundary is visible design, not fine print.** "This page does not
   assess you" is a designed panel with real weight, equal to the content.
3. **Date stamps are first-class.** Review dates and story dates are prominent,
   not footnotes. Most competitors bury this; making it loud is differentiation.

---

## 2. Colour

### Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `--color-paper` | `#FBFAF7` | Page background. Warm off-white, never pure white. |
| `--color-paper-alt` | `#F2F0EA` | Alternating section bands, sidebar fills. |
| `--color-surface` | `#FFFFFF` | Cards and panels sitting on paper. |
| `--color-ink` | `#15201C` | Primary text, dark sections, footer. |
| `--color-ink-80` | `#27332E` | Long-form body copy. |
| `--color-ink-70` | `#3C4B45` | Secondary body copy. |
| `--color-ink-60` | `#4C5B55` | Supporting text, card body. |
| `--color-ink-40` | `#6B7A74` | Metadata, captions, labels. |
| `--color-line` | `#DED9CF` | Borders and rules. |
| `--color-line-soft` | `#EDE9E1` | Internal dividers inside cards. |
| `--color-line-strong` | `#C9C2B5` | Input and secondary-button borders. |
| `--color-accent` | `#0F5F52` | Primary action, links, active nav. |
| `--color-accent-dark` | `#0A4337` | Link hover, text on accent washes. |
| `--color-accent-wash` | `#E6EFEC` | Accent-tinted panels and badges. |
| `--color-accent-light` | `#8FD0BE` | Links and icons on ink backgrounds. |
| `--color-caution` | `#8A5A12` | Icons and rules on time-sensitive content. |
| `--color-caution-text` | `#6E480E` | Headings inside caution panels. |
| `--color-caution-body` | `#5C3D0D` | Body copy inside caution panels. |
| `--color-caution-wash` | `#F6EDDC` | Caution panel background. |
| `--color-ink-surface` | `#1D2B26` | Cards on ink backgrounds. |
| `--color-ink-border` | `#33443E` | Borders on ink backgrounds. |
| `--color-ink-muted` | `#9DB3AC` | Muted text on ink backgrounds. |
| `--color-ink-soft` | `#B9C7C2` | Secondary text on ink backgrounds. |

### Rules

- **Accent (teal) is for action and navigation.** Primary buttons, links, active
  states, the "most readers" emphasis. Clinical without being the clichéd medical
  blue.
- **Caution (amber) is reserved — this is the one rule not to break.** It marks
  content that is dated, caveated, or needs independent verification: review
  dates, "requirements change" notices, the "this page does not assess you"
  panel, and the New Zealand route caveats. Never use it for promotion, emphasis,
  warnings about form validation, or decoration.
- **No red/green pairing** for meaningful distinction. Colours that must be told
  apart also differ in lightness, not hue alone.
- All text combinations in this table meet 4.5:1 on their intended background.
  Verify any new pairing before adding it.

### Dark mode

Not in scope for launch. The palette is light-first by design — it is a reading
surface. If added later, invert through the ink scale rather than introducing new
hues, and keep the amber reservation intact.

---

## 3. Typography

Two families, loaded from Google Fonts.

| Family | Weights | Role |
| --- | --- | --- |
| **Newsreader** (serif) | 400, 500, 600 + italic 400 | Display, headings, pull quotes, large statistics |
| **Public Sans** (sans) | 400, 500, 600, 700 | Body, UI, navigation, labels, tables |

**Why these.** Newsreader is editorial rather than startup — authority without
stuffiness. Public Sans comes out of the US government design system, which is
thematically right for this site: plain, institutional, unexcited. Neither is an
AI-default typeface.

### Scale

| Token | Size / line-height | Family | Usage |
| --- | --- | --- | --- |
| `display-xl` | 60px / 1.08, 500, -0.02em | Newsreader | Home hero only |
| `display-lg` | 52px / 1.10, 500, -0.02em | Newsreader | Page H1 |
| `display-md` | 44px / 1.12, 500, -0.02em | Newsreader | Tool page H1 |
| `heading-xl` | 38px / 1.2, 500, -0.01em | Newsreader | Section H2 |
| `heading-lg` | 30px / 1.25, 500 | Newsreader | Sub-section H2 |
| `heading-md` | 26px / 1.25, 600 | Newsreader | Card and panel H2 |
| `heading-sm` | 24px / 1.25, 600 | Newsreader | Card H3 |
| `quote` | 23px / 1.5, 400 italic | Newsreader | Pull quotes |
| `body-lg` | 19px / 1.6, 400 | Public Sans | Hero sub-copy, article lead |
| `body` | 17px / 1.75, 400 | Public Sans | Article body |
| `body-sm` | 16px / 1.6, 400 | Public Sans | Card body, UI copy |
| `body-xs` | 15px / 1.6, 400 | Public Sans | Dense card body, list items |
| `meta` | 14px / 1.5, 400 | Public Sans | Metadata, breadcrumbs |
| `meta-sm` | 13px / 1.5, 400 | Public Sans | Captions, dates |
| `eyebrow` | 13px, 700, 0.1em, uppercase | Public Sans | Section eyebrows |
| `label` | 12px, 700, 0.08em, uppercase | Public Sans | Badges, table headers |

### Rules

- Measure caps at `44em` for body copy, `36em` for hero sub-copy.
- Tabular numerals (`font-variant-numeric: tabular-nums`) on all figures, dates
  and data tables.
- **Font loading must not block content.** Use `display=swap` and specify a
  matching fallback stack. A large share of this audience is on slow mobile
  connections; the page must be readable before the fonts arrive.

Fallback stacks:
```
--font-serif: Newsreader, Georgia, "Times New Roman", serif;
--font-sans: "Public Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
```

---

## 4. Spacing, radius, layout

4px base unit. Tokens: `space-1` (4px) through `space-24` (96px).

| Context | Value |
| --- | --- |
| Content container | `max-width: 1180px`, side padding 32px desktop / 20px mobile |
| Section padding (major) | 72px vertical |
| Section padding (minor) | 64px vertical |
| Card padding | 28px desktop, 19–22px mobile |
| Grid gutter | 24px |
| Card internal gap | 14px |

| Radius token | Value | Usage |
| --- | --- | --- |
| `radius-sm` | 4px | Badges, labels |
| `radius-md` | 6px | Buttons, inputs, nav items |
| `radius-lg` | 10px | Cards, panels |
| `radius-xl` | 12px | Large feature panels |

**Breakpoints.** Mobile-first. `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.

Layout uses flex-wrap over media queries where possible: a content/sidebar pair is
a wrapping row with content at `flex: 999 1 560px; min-width: 0` and sidebar at
`flex: 1 1 280px`. This stacks naturally on narrow screens without breakpoint
management.

---

## 5. Component contracts

A contract is a rule, not a description. It survives a refactor; a screenshot
does not.

### Button

| Variant | Appearance |
| --- | --- |
| Primary | `--color-accent` background, white text, `radius-md`, min-height 52px |
| Secondary | `--color-paper` background, `--color-ink` text, 1px `--color-line-strong` border |
| Quiet | Text only in `--color-accent`, 12px vertical padding to reach target size |

States, all required:

| State | Treatment |
| --- | --- |
| Default | As above |
| Hover | Primary → `--color-accent-dark`. Secondary → `--color-paper-alt`. 120ms ease-out. |
| Focus-visible | 2px `--color-accent` outline, 2px offset. Never removed. |
| Active | Translate Y 1px |
| Disabled | 40% opacity, `cursor: not-allowed`, `aria-disabled` |
| Loading | Spinner replaces label, width held, `aria-busy="true"` |

Minimum touch target 44×44px everywhere, including icon-only buttons.

### Card

`--color-surface` background, 1px `--color-line`, `radius-lg`, 28px padding.
Emphasis variant uses a 2px `--color-accent` border with padding reduced to 27px
so the box size is unchanged.

Cards are not clickable as a whole. The link inside is the target. Do not wrap a
card in an anchor and nest buttons inside it.

### Caution panel

`--color-caution-wash` background, `radius-lg`, 22–24px padding, optional
`--color-caution` icon. Heading in `--color-caution-text`, body in
`--color-caution-body`.

**Used only for:** last-reviewed notices, "requirements change" notices, the
no-assessment statement, and route caveats. Never for marketing.

### Page furniture bar

Renders on every regulatory page, from the template. Reviewer avatar and name,
reviewer registration country, last-reviewed date, depth label, and a jump link
to sources. See `docs/information-architecture.md` § Page furniture.

### Depth label

A small badge stating how maintained the page is. Three variants: *Fully
reviewed*, *Reviewed*, *Overview only*. The third uses the caution palette.

This is the component that makes a breadth strategy honest. It is required, not
optional.

### Selector group (pathway country picker)

A group of toggle buttons that filters which published information is shown.

**Contract — this is the one most at risk of being "improved" into a bug:**

- It shows published criteria for the selection. It **never** outputs a
  determination about the user.
- It **never** collects qualifications, experience, test scores or history.
- It is **not** a quiz, a wizard, an eligibility checker, or a multi-step form,
  and must not be refactored into one.
- Nothing is persisted, transmitted or recorded.
- Implement as `role="group"` with `aria-pressed` on each toggle. The result
  region is `aria-live="polite"`.

If a future ticket asks for "a quick eligibility check", that ticket is out of
scope. Escalate rather than build it.

### Practice tool

Client component. Generated question, labelled input, reveal-working action.
Answers are never scored, stored or reported. No account, no gate, no email wall.

### Contributor card

Avatar, name, trained-in, now-in, route tag, completion year. The year is
required and renders from structured data, not prose.

Where a contributor is not yet recruited, render a visible placeholder
(`[Contributor name]`). **Do not generate plausible names, quotes or photographs
to fill the layout.** An empty slot is correct; an invented testimonial is a
boundary breach.

---

## 6. States and edge cases

The artboards show default states only. All of these are required.

| Case | Treatment |
| --- | --- |
| Empty — no stories yet | Honest line explaining contributors are being recruited, with an invitation to contribute. Not a fake card. |
| Empty — no search results | State what was searched, offer the nearest category. Never "no results" alone. |
| Loading — tool question | Skeleton at the question block's height; no layout shift. |
| Loading — page | Server-render; avoid client spinners on content pages. |
| Error — tool fails | Inline message plus a retry affordance. The page remains usable. |
| Error — form submission | Message adjacent to the field, `aria-describedby`, focus moved to it. Never colour alone. |
| Long text | Headings wrap, never truncate. Card bodies clamp at 4 lines with the full text on the destination page. |
| Translated / longer strings | All layouts tolerate +40% string length. No fixed-width buttons. |
| Slow connection | Content readable before fonts load. No layout shift on font swap. Images lazy-loaded below the fold. |
| Missing reviewer | The page does not publish. This is a build-time check, not a runtime fallback. |

---

## 7. Motion

Restrained by intent. This is a reading surface.

| Element | Trigger | Animation | Duration | Easing |
| --- | --- | --- | --- | --- |
| Button | Hover | Background colour | 120ms | ease-out |
| Link | Hover | Colour | 120ms | ease-out |
| Selector toggle | Press | Background and border | 120ms | ease-out |
| Reveal panel | Click | Height and opacity | 180ms | ease-out |
| Focus ring | Focus | None — instant | 0ms | — |

Respect `prefers-reduced-motion: reduce` — disable all non-essential transitions.

---

## 8. Accessibility

Non-negotiable, and checked in the definition of done.

- Real semantic elements: `<button>`, `<a href>`, `<input>` + `<label>`,
  `<table>` with `<th scope>`. Never `role`/`onClick` on a `div` or `span`.
- One `<h1>` per page. Heading levels never skip.
- Focus visible at all times. Never `outline: none` without a replacement.
- Focus order follows reading order. Skip-to-content link as the first focusable
  element.
- Icon-only controls carry `aria-label`. Decorative SVG carries
  `aria-hidden="true"`; meaningful SVG carries `role="img"` and a label.
- Text contrast ≥ 4.5:1, or ≥ 3:1 at 24px and above.
- Touch targets ≥ 44×44px.
- Live regions (`aria-live="polite"`) on the pathway result and on tool feedback.
- Tables used for data only, never layout. Wide tables scroll inside an
  `overflow-x: auto` container with the container focusable.
- The site must be fully usable at 200% browser zoom and at 360px width.

---

## 9. What not to do

A list of the specific regressions most likely to happen.

- Re-theming to blue, or introducing a second accent colour
- Using amber for anything promotional
- Gradient backgrounds, glassmorphism, or coloured left-border cards
- Emoji anywhere in the interface
- Swapping Newsreader or Public Sans for Inter, Roboto or Arial
- Hard-coded hex values in components
- Fake avatars, generated names, or stock-photo nurses
- Any badge displaying a number we have not sourced and cited
- Turning the pathway selector into a quiz or eligibility checker
- Removing the depth label, review date or source link "for a cleaner look"
