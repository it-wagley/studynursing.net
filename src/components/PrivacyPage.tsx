import React from "react";
import { CautionPanel } from "./CautionPanel";
import { CONSENT_TEXT } from "@/data/leadForm";

/**
 * What happens to a nurse's details.
 *
 * The signup form collects a name, an email address and optionally a phone
 * number from nurses in the UK, Ireland, Canada and the EEA among others, so a
 * page saying where those details go is a requirement, not a courtesy. The
 * consent checkbox links here.
 *
 * TWO VALUES ARE MISSING and only the publisher can supply them: the legal
 * entity that operates the site, and an address for data requests. They are not
 * guessed here — naming the wrong company in a privacy notice is worse than
 * admitting the page is unfinished (AGENTS.md § 2b: never invent a value to
 * satisfy a schema). Fill PUBLISHER in and the notice below disappears.
 */
const PUBLISHER = {
  /** Registered name of the operating entity, e.g. "Example Limited". */
  legalName: "",
  /** Address for access, correction and deletion requests. */
  contactEmail: "",
};

const publisherPublished =
  PUBLISHER.legalName !== "" && PUBLISHER.contactEmail !== "";

/** Named so the copy and the CRM cannot drift apart. */
const CRM_NAME = "GoHighLevel";

interface PrivacyPageProps {
  onNavigate?: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div className="space-y-10 font-sans max-w-measure mx-auto">
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <span className="text-eyebrow text-ink-60">Standards</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Your details</span>
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          What we do with your details
        </h1>
        <p className="text-body-lg text-ink-70 leading-relaxed">
          This site collects contact details in one place only: the form that
          asks whether you would like to be emailed when a destination guide
          changes. This page says what is collected there, where it goes, and how
          to be removed.
        </p>
      </div>

      {!publisherPublished && (
        <CautionPanel title="This page is not finished">
          <p>
            The operating entity&apos;s registered name and an address for data
            requests have not been published yet. Until they are, this notice is
            incomplete — and the signup form should not be collecting details
            from anyone in the meantime.
          </p>
        </CautionPanel>
      )}

      <section className="space-y-4">
        <h2 className="font-serif text-heading-md text-ink font-semibold">
          What we collect
        </h2>
        <p className="text-body text-ink-70 leading-article">
          Your name, your email address, optionally a phone or WhatsApp number,
          and which destination guide you want to hear about. That is the whole
          list.
        </p>
        <p className="text-body text-ink-70 leading-article">
          We do not ask for, and the form cannot accept, your qualifications,
          your years of experience, your English test scores, your registration
          or licensing status, your visa status, or any document. This is a
          deliberate constraint on what the software is allowed to do, not just
          a current choice of fields — the server drops those values if anything
          sends them.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-heading-md text-ink font-semibold">
          What we use it for
        </h2>
        <p className="text-body text-ink-70 leading-article">
          One thing: emailing you when the guide you asked about changes. A
          corrected fee, a revised English benchmark, a regulator altering a
          route.
        </p>
        <p className="text-body text-ink-70 leading-article">
          We do not sell your details, and we do not pass them to employers,
          recruiters, hospitals, universities or migration advisers. If that
          ever changes, it will be because you were asked first, on a page like
          this one, and agreed.
        </p>
        <div className="bg-paper-alt border border-line rounded-lg p-5">
          <p className="text-meta text-ink-60 mb-1.5">
            The sentence you agree to on the form:
          </p>
          <p className="text-body-sm text-ink italic leading-body">
            &ldquo;{CONSENT_TEXT}&rdquo;
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-heading-md text-ink font-semibold">
          Where it is stored
        </h2>
        <p className="text-body text-ink-70 leading-article">
          Submissions are passed straight to {CRM_NAME}, the customer
          relationship system the publisher uses, and are not stored on this
          website. The website keeps no database of enquiries and no copy of
          what you sent.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-heading-md text-ink font-semibold">
          Cookies and tracking
        </h2>
        <p className="text-body text-ink-70 leading-article">
          There are none. The site runs no analytics, no tag manager, no
          advertising pixels and no third-party scripts. The practice tools —
          dosage calculations, the NCLEX cases, the drug reference, the study
          tutor — need no account, no email address, and record no answers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-heading-md text-ink font-semibold">
          Getting your details removed
        </h2>
        <p className="text-body text-ink-70 leading-article">
          Reply to any email we send you and ask. You can also ask for a copy of
          what is held about you, or for it to be corrected.
        </p>
        {publisherPublished ? (
          <p className="text-body text-ink-70 leading-article">
            Requests go to{" "}
            <a
              href={`mailto:${PUBLISHER.contactEmail}`}
              className="text-accent hover:text-accent-dark underline underline-offset-2"
            >
              {PUBLISHER.contactEmail}
            </a>
            , and the publisher of record is {PUBLISHER.legalName}.
          </p>
        ) : (
          <p className="text-body text-ink-60 leading-article">
            An address for these requests has not been published yet. See the
            notice at the top of this page.
          </p>
        )}
      </section>

      <section className="space-y-4 border-t border-line pt-8">
        <h2 className="font-serif text-heading-md text-ink font-semibold">
          What this page is not
        </h2>
        <p className="text-body text-ink-70 leading-article">
          It is a plain description of how one form works, written by the people
          who built it. It has not been reviewed by a lawyer, and it is not a
          statement of compliance with any particular country&apos;s data
          protection law.
        </p>
        <p className="text-body-sm text-ink-60 leading-body">
          Related:{" "}
          <a
            href="/about"
            onClick={(e) => handleNav(e, "/about")}
            className="text-accent hover:text-accent-dark underline underline-offset-2"
          >
            what we are and what we are not
          </a>
          .
        </p>
      </section>
    </div>
  );
};
