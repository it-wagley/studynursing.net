import React from "react";
import Link from "next/link";

/**
 * Shown for any path not listed in generateStaticParams().
 *
 * Deliberately plain: it does not mount ClientApp, because the client router
 * would treat the unknown path as a route and fall back to the homepage,
 * which is the behaviour this page exists to stop.
 */
export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-screen bg-paper text-ink font-sans flex items-center"
    >
      <div className="w-full max-w-measure mx-auto px-container-sm sm:px-container py-section space-y-7">
        <div className="space-y-3">
          <p className="text-eyebrow text-ink-60">Page not found</p>
          <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
            That page isn&rsquo;t here
          </h1>
          <p className="text-body-lg text-ink-70 leading-relaxed">
            The address may be mistyped, or the page may have been renamed. Nothing
            has gone wrong with your application or your registration.
          </p>
        </div>

        <div className="border-t border-line pt-6 space-y-4">
          <h2 className="font-serif text-heading-sm text-ink font-semibold">
            Where you probably meant to go
          </h2>
          <ul className="space-y-2.5 text-body-sm">
            <li>
              <Link href="/register" className="text-accent hover:text-accent-dark font-medium underline underline-offset-2">
                Registration guides
              </Link>
              <span className="text-ink-60"> &mdash; all seven destinations, with regulator and published fees</span>
            </li>
            <li>
              <Link href="/compare" className="text-accent hover:text-accent-dark font-medium underline underline-offset-2">
                Compare destinations
              </Link>
              <span className="text-ink-60"> &mdash; requirements side by side</span>
            </li>
            <li>
              <Link href="/exams" className="text-accent hover:text-accent-dark font-medium underline underline-offset-2">
                Examination guides
              </Link>
              <span className="text-ink-60"> &mdash; NCLEX-RN, OSCE and English tests</span>
            </li>
            <li>
              <Link href="/tools" className="text-accent hover:text-accent-dark font-medium underline underline-offset-2">
                Practice tools
              </Link>
              <span className="text-ink-60"> &mdash; free, no account required</span>
            </li>
            <li>
              <Link href="/" className="text-accent hover:text-accent-dark font-medium underline underline-offset-2">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
