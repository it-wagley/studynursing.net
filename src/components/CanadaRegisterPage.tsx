import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";

interface CanadaRegisterPageProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "overview",
  reviewedAt: "2026-10-10",
  reviewer: {
    name: "Sarah Jenkins",
    country: "Australia",
    credential: "RN, MN",
  },
  sources: [
    {
      label: "National Nursing Assessment Service (NNAS) — Application Guide",
      url: "https://www.nnas.ca/",
      checkedAt: "2026-10-10",
    },
    {
      label: "College of Nurses of Ontario (CNO) — Internationally Educated Nurses",
      url: "https://www.cno.org/en/become-a-nurse/new-applicants1/outside-canada/",
      checkedAt: "2026-10-10",
    },
    {
      label: "British Columbia College of Nurses and Midwives (BCCNM) — International Applications",
      url: "https://www.bccnm.ca/",
      checkedAt: "2026-10-10",
    },
  ],
};

export const CanadaRegisterPage: React.FC<CanadaRegisterPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 font-sans">
      {/* Breadcrumb & Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/compare")}
            className="hover:text-accent underline"
          >
            Compare
          </button>
          <span>/</span>
          <span className="text-eyebrow text-ink-60">Registration Guide</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Canada</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="overview" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Canada: NNAS & Provincial Nursing Colleges
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          Canada regulates nursing practice at the provincial and territorial level rather than through a single national nursing board. Internationally educated nurses (IENs) begin credential assessment with the National Nursing Assessment Service (NNAS).
        </p>
      </div>

      {/* Caution Notice: Provincial Variation & Overview Scope */}
      <CautionPanel title="Provincial jurisdiction notice (Overview tier)">
        <p className="space-y-2">
          <span>
            <strong>No single national license:</strong> There is no pan-Canadian nursing license. Passing the NNAS stage produces an Advisory Report that must be submitted to the individual regulatory college of your intended province (e.g., CNO in Ontario, BCCNM in British Columbia, or CRNA in Alberta). Each provincial body retains autonomous legal authority to require clinical competency exams (NCAS/SEC), bridging coursework, or direct NCLEX authorization.
          </span>
          <br className="my-1" />
          <span>
            <strong>Tier disclosure:</strong> This page provides orientation-level information. Consult the NNAS portal and your target province&apos;s regulatory college directly before committing application fees.
          </span>
        </p>
      </CautionPanel>

      {/* Key Facts Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Credential Body</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">NNAS</div>
          <p className="text-meta-sm text-ink-60">National Nursing Assessment Service</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Licensing Bodies</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">Provincial Colleges</div>
          <p className="text-meta-sm text-ink-60">CNO, BCCNM, CRNA, and territorial boards</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Cognitive Exam</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">NCLEX-RN</div>
          <p className="text-meta-sm text-ink-60">Adopted by Canadian provincial regulators</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Typical Timeline</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">12 to 24 Months</div>
          <p className="text-meta-sm text-ink-60">Governed by NNAS Advisory Report timelines</p>
        </div>
      </div>

      {/* The 4-Stage Canadian Process */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            The Canadian Provincial Registration Structure
          </h2>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            International registration in Canada consists of two distinct regulatory steps: national credential verification and provincial college registration:
          </p>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 1: NNAS Advisory Report Application</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">~$650 USD</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Create an online profile with the National Nursing Assessment Service. NNAS collects official university course syllabi, transcripts, registration verifications, and employment history from primary sources. NNAS prepares an Advisory Report evaluating whether curriculum content is &quot;Comparable&quot;, &quot;Somewhat Comparable&quot;, or &quot;Not Comparable&quot; to Canadian baccalaureate nursing education.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 2: Application to Target Provincial College</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">CAD $300 – $800</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Forward the NNAS Advisory Report to the regulatory college in the province where you intend to practise (e.g. Ontario, British Columbia, Alberta). The provincial college reviews the report against its jurisdictional registration requirements.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 3: Competency Assessment or Bridging (If Mandated)</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">CAD $1,500 – $2,500</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              If the provincial college determines there are curriculum or clinical hour variances, it may direct the applicant to complete a Substantially Equivalent Competency (SEC) assessment, a Nursing Community Assessment Service (NCAS) evaluation, or specific university bridging modules.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 4: NCLEX-RN & Jurisprudence Examination</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">CAD $360</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Candidates obtain Authorization to Test (ATT) from their provincial college and write the NCLEX-RN through Pearson VUE. Candidates must also complete the provincial college&apos;s online jurisprudence examination covering provincial healthcare laws and nursing ethics.
            </p>
          </div>
        </div>
      </section>

      {/* Language Requirements */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Accepted Language Testing Systems
        </h2>
        <div className="bg-surface border border-line rounded-lg p-5 max-w-measure space-y-2">
          <p className="text-body-sm text-ink-70 leading-relaxed">
            Canadian regulators accept specific healthcare-focused and academic English examinations:
          </p>
          <ul className="list-disc list-inside text-body-sm text-ink-70 space-y-1.5 pt-1">
            <li><strong>CELBAN:</strong> Canadian English Language Benchmark Assessment for Nurses (Speaking 8, Listening 10, Reading 8, Writing 7).</li>
            <li><strong>IELTS Academic:</strong> Speaking 7.0, Listening 7.5, Reading 6.5, Writing 7.0, Overall 7.0.</li>
            <li><strong>French Proficiency:</strong> Required or accepted by regulatory bodies in bilingual or Francophone jurisdictions (e.g., OIIQ in Quebec, NANB in New Brunswick).</li>
          </ul>
        </div>
      </section>

      {/* Cross-Link to Shared Spine */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Prepare for the NCLEX-RN
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            Canadian nursing boards use the NextGen NCLEX-RN. Learn how computer-adaptive testing functions and practice clinical judgment cases.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/exams/nclex-rn")}
            className="px-4 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors min-h-control"
          >
            NCLEX Guide
          </button>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/tools/nclex-cases")}
            className="px-4 py-2.5 rounded-md bg-paper border border-line text-ink hover:bg-line/40 text-body-sm font-semibold transition-colors min-h-control"
          >
            Case Studies
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
