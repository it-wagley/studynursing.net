import type { Config } from "tailwindcss";

/**
 * StudyNursing.net — Tailwind theme.
 *
 * Every value maps to a CSS custom property defined in src/styles/tokens.css.
 * That file is the single source of truth; this one only exposes it to Tailwind.
 *
 * Do not add literal hex values, px sizes or font names here. If you need a new
 * value, add the token first.
 *
 * See docs/design-system.md for rationale.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "var(--color-paper)",
          alt: "var(--color-paper-alt)",
        },
        surface: "var(--color-surface)",
        ink: {
          DEFAULT: "var(--color-ink)",
          80: "var(--color-ink-80)",
          70: "var(--color-ink-70)",
          60: "var(--color-ink-60)",
          40: "var(--color-ink-40)",
          surface: "var(--color-ink-surface)",
          border: "var(--color-ink-border)",
          muted: "var(--color-ink-muted)",
          soft: "var(--color-ink-soft)",
        },
        line: {
          DEFAULT: "var(--color-line)",
          soft: "var(--color-line-soft)",
          strong: "var(--color-line-strong)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          dark: "var(--color-accent-dark)",
          wash: "var(--color-accent-wash)",
          light: "var(--color-accent-light)",
        },
        /**
         * RESERVED for time-sensitive content only — review dates, "requirements
         * change" notices, the no-assessment panel, route caveats.
         * Never use for promotion, emphasis or decoration.
         */
        caution: {
          DEFAULT: "var(--color-caution)",
          text: "var(--color-caution-text)",
          body: "var(--color-caution-body)",
          wash: "var(--color-caution-wash)",
        },
      },

      fontFamily: {
        serif: "var(--font-serif)",
        sans: "var(--font-sans)",
      },

      fontSize: {
        "display-xl": ["var(--text-display-xl)", { lineHeight: "1.08", letterSpacing: "var(--tracking-display)", fontWeight: "500" }],
        "display-lg": ["var(--text-display-lg)", { lineHeight: "1.10", letterSpacing: "var(--tracking-display)", fontWeight: "500" }],
        "display-md": ["var(--text-display-md)", { lineHeight: "1.12", letterSpacing: "var(--tracking-display)", fontWeight: "500" }],
        "heading-xl": ["var(--text-heading-xl)", { lineHeight: "1.2", letterSpacing: "var(--tracking-heading)", fontWeight: "500" }],
        "heading-lg": ["var(--text-heading-lg)", { lineHeight: "var(--leading-heading)", fontWeight: "500" }],
        "heading-md": ["var(--text-heading-md)", { lineHeight: "var(--leading-heading)", fontWeight: "600" }],
        "heading-sm": ["var(--text-heading-sm)", { lineHeight: "var(--leading-heading)", fontWeight: "600" }],
        quote: ["var(--text-quote)", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "var(--leading-body)" }],
        body: ["var(--text-body)", { lineHeight: "var(--leading-article)" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "var(--leading-body)" }],
        "body-xs": ["var(--text-body-xs)", { lineHeight: "var(--leading-body)" }],
        meta: ["var(--text-meta)", { lineHeight: "1.5" }],
        "meta-sm": ["var(--text-meta-sm)", { lineHeight: "1.5" }],
        eyebrow: ["var(--text-meta-sm)", { letterSpacing: "var(--tracking-eyebrow)", fontWeight: "700" }],
        label: ["var(--text-label)", { letterSpacing: "var(--tracking-label)", fontWeight: "700" }],
      },

      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        10: "var(--space-10)",
        12: "var(--space-12)",
        14: "var(--space-14)",
        16: "var(--space-16)",
        18: "var(--space-18)",
        24: "var(--space-24)",
        "card": "var(--card-pad)",
        "gutter": "var(--grid-gutter)",
        "section": "var(--section-pad)",
        "section-sm": "var(--section-pad-sm)",
        "container": "var(--container-pad)",
        "container-sm": "var(--container-pad-sm)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },

      maxWidth: {
        container: "var(--container-max)",
        measure: "var(--measure-body)",
        lead: "var(--measure-lead)",
      },

      minHeight: {
        control: "var(--control-min)",      // 44px accessibility floor
        button: "var(--control-height)",    // 52px primary control
      },

      minWidth: {
        control: "var(--control-min)",
      },

      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
      },

      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
    },
  },
  plugins: [],
};

export default config;
