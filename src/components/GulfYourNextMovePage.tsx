import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ArrowLeft } from "lucide-react";

interface GulfYourNextMovePageProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-10",
  reviewer: {
    name: "Sarah Jenkins",
    country: "Australia",
    credential: "RN, MN",
  },
  sources: [
    {
      label: "NMBA Australia — Registration Standard: Recency of Practice",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-Standards/Recency-of-practice.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMC UK — Joining the Register: Practice Hours & Verifications",
      url: "https://www.nmc.org.uk/registration/joining-the-register/",
      checkedAt: "2026-10-10",
    },
    {
      label: "Nursing Council of New Zealand — Competence and Practice Hours Standard",
      url: "https://www.nursingcouncil.org.nz/IQN",
      checkedAt: "2026-10-10",
    },
  ],
};

export const GulfYourNextMovePage: React.FC<GulfYourNextMovePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 font-sans">
      {/* Breadcrumb & Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/gulf")}
            className="hover:text-accent underline inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Working in the Gulf</span>
          </button>
          <span>/</span>
          <span className="text-eyebrow text-ink-60">Career Transition</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Your Next Move</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Protecting Your Next Move: From the Gulf to Australia, UK, NZ or Canada
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          How to ensure your 2–3 year stint in the Gulf strengthens rather than jeopardizes your future international registration. Four essential procedural rules for internationally qualified nurses.
        </p>
      </div>

      {/* Editorial Boundary Notice */}
      <CautionPanel title="Stepping-stone strategy notice">
        <p>
          We do not guarantee visa sponsorship, registration, or placement in any country. The regulatory standards below are published rules from official health regulators (AHPRA, NMC, NCNZ, NNAS). Following these steps preserves your evidentiary audit trail.
        </p>
      </CautionPanel>

      {/* Core Rules Grid */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            The Four Credential Preservation Rules
          </h2>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            International regulators require primary-source verification of your qualifications, clinical hours, and professional standing. Prevent common administrative roadblocks by adhering to these four principles:
          </p>
        </div>

        <div className="space-y-6 max-w-measure">
          
          {/* Rule 1 */}
          <div className="bg-surface border border-line rounded-lg p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-accent-wash flex items-center justify-center text-accent font-semibold text-meta-sm shrink-0">
                1
              </div>
              <h3 className="font-serif text-heading-sm text-ink font-semibold">
                Never Let Your Home Country Registration Lapse
              </h3>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              <strong>The pitfall:</strong> Because nurses hold a local professional classification (e.g. SCFHS in Saudi Arabia, DHA in Dubai), many allow their baseline registration in India (State Nursing Council), the Philippines (PRC), Kenya, or Nigeria to expire.
            </p>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              <strong>The regulatory consequence:</strong> Health regulators in Australia (NMBA) and the UK (NMC) require continuous, unencumbered registration in your country of initial training. If your home registration lapses, the regulator will halt processing until your home council certifies you in good standing—a process that can take months from abroad.
            </p>
            <div className="bg-paper-alt border border-line rounded p-3 text-meta-sm text-ink-70">
              <span className="font-medium text-ink">Action:</span> Renew your home registration online or via authorized family power-of-attorney well before its expiry date.
            </div>
          </div>

          {/* Rule 2 */}
          <div className="bg-surface border border-line rounded-lg p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-accent-wash flex items-center justify-center text-accent font-semibold text-meta-sm shrink-0">
                2
              </div>
              <h3 className="font-serif text-heading-sm text-ink font-semibold">
                Meticulously Document Recency-of-Practice Hours
              </h3>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Western regulators enforce strict mathematical clinical recency thresholds within the preceding 5 years:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-paper-alt p-3 rounded border border-line text-meta-sm">
                <span className="text-ink font-semibold block">Australia (NMBA)</span>
                <span className="text-ink-60">Minimum 450 hours</span>
              </div>
              <div className="bg-paper-alt p-3 rounded border border-line text-meta-sm">
                <span className="text-ink font-semibold block">New Zealand (NCNZ)</span>
                <span className="text-ink-60">Minimum 2,500 hours</span>
              </div>
              <div className="bg-paper-alt p-3 rounded border border-line text-meta-sm">
                <span className="text-ink font-semibold block">Canada (NNAS)</span>
                <span className="text-ink-60">Minimum 1,125 hours</span>
              </div>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed pt-1">
              Before leaving your hospital employer, request a comprehensive <strong>Certificate of Employment / Statement of Service</strong> on official hospital letterhead specifying: exact start and end dates, full-time contracted weekly hours (e.g. 48 hrs/wk), unit name, bed count, and detailed clinical duties stamped by Nursing Administration.
            </p>
          </div>

          {/* Rule 3 */}
          <div className="bg-surface border border-line rounded-lg p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-accent-wash flex items-center justify-center text-accent font-semibold text-meta-sm shrink-0">
                3
              </div>
              <h3 className="font-serif text-heading-sm text-ink font-semibold">
                Secure Verifiable Supervisory References Before Resigning
              </h3>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Expatriate nurse managers in Gulf hospitals frequently relocate or complete contracts. Attempting to track down a former supervisor two years after departure often leads to dead ends and bounced emails.
            </p>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Obtain reference letters signed by your Nurse Unit Manager (NUM) or Clinical Nurse Educator. Ensure the letter documents their official hospital email address (e.g. <code>@hospital.org</code>, never personal free webmail), their professional registration number, and their contact telephone number.
            </p>
          </div>

          {/* Rule 4 */}
          <div className="bg-surface border border-line rounded-lg p-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-accent-wash flex items-center justify-center text-accent font-semibold text-meta-sm shrink-0">
                4
              </div>
              <h3 className="font-serif text-heading-sm text-ink font-semibold">
                Archive All DataFlow &amp; Verification Reports
              </h3>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              When you obtained your Gulf license, the DataFlow Group conducted primary source verification (PSV) of your nursing degree, transcripts, and initial licenses. Download and preserve your final DataFlow report and report reference number.
            </p>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              While destination regulators (like CGFNS or AHPRA) conduct independent primary-source verifications, holding your verified dossier provides immediate documentary proof should discrepancies or archive delays arise with your alma mater.
            </p>
          </div>

        </div>
      </section>

      {/* Cross-Link to Destination Comparison */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Ready to Compare Destination Pathways?
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            Explore our neutral comparison table comparing exam structures, published fees, and processing timelines for Australia, the UK, NZ, Singapore, Canada, Ireland, and the US.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/compare")}
            className="px-4 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors min-h-control"
          >
            Compare Table
          </button>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/exams/nclex-rn")}
            className="px-4 py-2.5 rounded-md bg-paper border border-line text-ink hover:bg-line/40 text-body-sm font-semibold transition-colors min-h-control"
          >
            NCLEX Guide
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
