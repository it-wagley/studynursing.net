import type { Metadata } from "next";

/**
 * Fonts are self-hosted via Fontsource, deliberately NOT `next/font/google`.
 *
 * `next/font/google` fetches the font CSS from fonts.googleapis.com at BUILD
 * time. That makes every build depend on a live network call: it fails outright
 * offline, behind a proxy, or in CI, and on Next 14 it also throws
 * "Cannot read properties of null" when Google's CSS payload changes shape.
 *
 * Self-hosting removes the build-time network call entirely and ships the
 * woff2 from our own origin, which also matters for the slow-connection
 * audience this site is built for. See docs/design-system.md.
 *
 * Family names registered by these packages — "Newsreader Variable" and
 * "Public Sans Variable" — are the first entries in the --font-serif and
 * --font-sans stacks in src/styles/tokens.css.
 */
import "@fontsource-variable/newsreader";
import "@fontsource-variable/public-sans";
import "../styles/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyNursing.net — Independent Information for Internationally Qualified Nurses",
  description:
    "Independent information for internationally qualified nurses comparing destinations, understanding registration criteria, and preparing for exams. Not a migration agent, recruiter, or employer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-paper text-ink antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
