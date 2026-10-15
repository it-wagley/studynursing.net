import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";

interface SingaporeRegisterPageProps {
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
      label: "Singapore Nursing Board — Guidelines for Registration/Enrolment of Foreign-Trained Nurses",
      url: "https://www.healthprofessionals.gov.sg/snb",
      checkedAt: "2026-10-10",
    },
    {
      label: "Ministry of Health Singapore — Healthcare Professional Information",
      url: "https://www.moh.gov.sg/",
      checkedAt: "2026-10-10",
    },
    {
      label: "Singapore Ministry of Manpower — Employment Pass & S Pass Guidelines",
      url: "https://www.mom.gov.sg/passes-and-permits",
      checkedAt: "2026-10-10",
    },
  ],
};

export const SingaporeRegisterPage: React.FC<SingaporeRegisterPageProps> = ({ onNavigate }) => {
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
          <span className="text-ink font-medium">Singapore</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Singapore: Singapore Nursing Board (SNB) Registration
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          The Singapore Nursing Board (SNB) is the statutory regulatory body governing nurses and midwives in Singapore under the Nurses and Midwives Act. Registration for foreign-trained nurses operates on an employer-sponsored model.
        </p>
      </div>

      {/* Caution Notice: Mandatory Employer Sponsorship Model */}
      <CautionPanel title="Mandatory hospital offer & sponsorship requirement">
        <p className="space-y-2">
          <span>
            <strong>No independent self-application:</strong> The SNB does not accept direct registration applications from individual foreign-trained nurses without a verified job offer. An eligible Singapore healthcare institution (such as a public hospital cluster or licensed private medical centre) must formally sponsor and submit the application to the SNB on the candidate&apos;s behalf.
          </span>
          <br className="my-1" />
          <span>
            <strong>Editorial boundary:</strong> We do not recruit, introduce, or place candidates with employers or hospital clusters. Beware of commercial intermediaries claiming to offer direct registration without an institutional sponsor.
          </span>
        </p>
      </CautionPanel>

      {/* Key Facts Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Regulator</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">SNB</div>
          <p className="text-meta-sm text-ink-60">Singapore Nursing Board</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Assessment Model</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">Exam + Preceptorship</div>
          <p className="text-meta-sm text-ink-60">SNB Licensure Exam + 3–6 month hospital preceptorship</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Published Fees</span>
          <div className="text-heading-sm font-serif font-semibold text-ink tabular">~SGD $300–$500</div>
          <p className="text-meta-sm text-ink-60">App $70, Exam $100, Reg $200 (often employer-paid)</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Recency Standard</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">1–3 Years Current</div>
          <p className="text-meta-sm text-ink-60">Acute inpatient hospital nursing experience</p>
        </div>
      </div>

      {/* The 4-Stage SNB Process */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            The Four Stages of Singapore Registration
          </h2>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            Because SNB registration is intrinsically linked to hospital sponsorship, the process follows an institutional recruitment and regulatory sequence:
          </p>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 1: Institutional Offer & Employer Submission</strong>
              <span className="text-meta-sm font-mono text-ink-60">Sponsor Milestone</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              The foreign-trained nurse secures an offer of employment from an eligible Singapore healthcare employer (e.g. SingHealth, National Healthcare Group, National University Health System, or an approved private acute hospital). The employer submits the registration application directly to the SNB.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 2: SNB Document Review & Exam Eligibility</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">SGD $70</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              The SNB reviews verified educational transcripts, clinical hours, licensing authority verification from the country of origin, and identity documents to determine eligibility to sit the licensure examination.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 3: SNB Licensure Examination</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">SGD $100</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Candidates sit the SNB Registered Nurse Licensure Examination. The examination tests nursing theory, clinical judgment, Singapore pharmacology standards, and medical-surgical knowledge. Sittings take place in Singapore or at designated regional venues.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 4: Provisional Registration & Clinical Preceptorship</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">SGD $200</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Upon passing the exam and arrival in Singapore on an approved work pass (such as an Employment Pass or S Pass), the nurse receives provisional registration. The nurse completes a mandatory 3 to 6-month preceptorship under a senior clinical mentor before full registration is conferred.
            </p>
          </div>
        </div>
      </section>

      {/* English Language Requirements */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Language Proficiency Benchmarks
        </h2>
        <div className="bg-surface border border-line rounded-lg p-5 max-w-measure space-y-2">
          <p className="text-body-sm text-ink-70 leading-relaxed">
            Where the candidate&apos;s pre-licensure nursing education was not conducted with English as the sole medium of instruction, the SNB and public healthcare employers typically require:
          </p>
          <ul className="list-disc list-inside text-body-sm text-ink-70 space-y-1.5 pt-1">
            <li><strong>IELTS Academic:</strong> Minimum overall band score of 6.5 to 7.0, with no sub-score below 6.5.</li>
            <li><strong>OET (Nursing):</strong> Minimum Grade B across all communicative subtests.</li>
            <li><strong>Verification of Medium of Instruction:</strong> Official letter from the granting university confirming English as the institutional medium of teaching and clinical practice.</li>
          </ul>
        </div>
      </section>

      {/* Navigation Cross-Link */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Evaluate Destination Pathways
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            See how Singapore&apos;s employer-sponsored model compares to independent assessment regimes in Australia, the UK, and New Zealand.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/compare")}
            className="px-4 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors min-h-control"
          >
            Compare Destinations
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
