import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ArrowRight } from "lucide-react";
import { UNREVIEWED } from "@/data/reviewers";

interface NclexExamGuideProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-10",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "NCSBN — NCLEX Test Plans & Pass Standard",
      url: "https://www.ncsbn.org/testplans.page",
      checkedAt: "2026-10-10",
    },
    {
      label: "Pearson VUE — NCLEX Candidate Bulletin",
      url: "https://www.pearsonvue.com/nclex",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMBA — Cognitive Assessment (NCLEX-RN) for IQNMs",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives/Outcomes-based-assessment.aspx",
      checkedAt: "2026-10-10",
    },
  ],
};

export const NclexExamGuide: React.FC<NclexExamGuideProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 font-sans">
      {/* Breadcrumb & Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/exams")}
            className="hover:text-accent underline"
          >
            Exams
          </button>
          <span>/</span>
          <span className="text-ink">NCLEX-RN Guide</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          NextGen NCLEX-RN Examination
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          The National Council Licensure Examination for Registered Nurses (NCLEX-RN) is a computer-adaptive test measuring entry-level clinical judgment. It serves as the primary cognitive examination for licensure in the United States, Australia (AHPRA OBA Part 1), and Canada.
        </p>
      </div>

      {/* Caution Notice */}
      <CautionPanel title="Examination authority notice">
        <p>
          StudyNursing.net is not affiliated with the National Council of State Boards of Nursing (NCSBN) or Pearson VUE. The NCLEX-RN is administered solely by Pearson VUE under contract with NCSBN. Always refer directly to the official NCSBN Candidate Bulletin for current scheduling policies, identification rules, and candidate testing requirements.
        </p>
      </CautionPanel>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Format</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">Computer Adaptive (CAT)</div>
          <p className="text-meta-sm text-ink-60">85 to 150 items, difficulty adjusts per response</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Time Limit</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">5 Hours Maximum</div>
          <p className="text-meta-sm text-ink-60">Includes introductory tutorial and optional breaks</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Passing Standard</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">Logit Passing Line</div>
          <p className="text-meta-sm text-ink-60">Not a percentage; 95% certainty of competence</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Delivery</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">Pearson VUE Centers</div>
          <p className="text-meta-sm text-ink-60">Authorized international testing facilities</p>
        </div>
      </div>

      {/* Section 1: Where the NCLEX is Used */}
      <section className="space-y-4">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Where NCLEX-RN Is Required
        </h2>
        <p className="text-body text-ink-70 max-w-measure leading-relaxed">
          While developed in the United States, the NCLEX-RN has been adopted internationally as a verified standard for cognitive clinical assessment:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-surface border border-line rounded-lg p-6 space-y-2">
            <h3 className="font-semibold text-body text-ink">United States</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Mandatory for licensure across all 50 State Boards of Nursing, the District of Columbia, and US territories. Administered following credential evaluation (e.g. CGFNS).
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-6 space-y-2">
            <h3 className="font-semibold text-body text-ink">Australia (AHPRA / NMBA)</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Serves as <strong>Part 1 (Cognitive Assessment)</strong> of the Outcomes-Based Assessment (OBA) for internationally qualified nurses in Stream B. Passing unlocks eligibility for the Adelaide RN OSCE.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-6 space-y-2">
            <h3 className="font-semibold text-body text-ink">Canada</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Adopted by provincial regulatory bodies (except Quebec) as the national licensing examination for registered nurses.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Computer Adaptive Testing (CAT) Explained */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          How Computer Adaptive Testing (CAT) Works
        </h2>
        <div className="text-body text-ink-70 space-y-4 max-w-measure leading-relaxed">
          <p>
            The NCLEX-RN does not use a fixed question paper. Instead, every candidate receives a personalized set of questions driven by an adaptive algorithm:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>First Question:</strong> Starts at a difficulty level below the passing standard.
            </li>
            <li>
              <strong>Correct Answer:</strong> The algorithm selects a slightly more difficult next question from its question pool.
            </li>
            <li>
              <strong>Incorrect Answer:</strong> The algorithm selects a slightly easier question.
            </li>
            <li>
              <strong>Stopping Rule:</strong> The computer stops when it has 95% statistical certainty that your true ability is either clearly above or clearly below the passing standard, or when the 150-question limit (or 5-hour time limit) is reached.
            </li>
          </ul>
          <p>
            This means you cannot skip questions, and you cannot return to previously answered questions. Minimum items: 85 (including 15 unscored pretest items). Maximum items: 150.
          </p>
        </div>
      </section>

      {/* Section 3: NextGen NCLEX (NGN) Item Types & CJMM */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          NextGen NCLEX Item Types & Clinical Judgment
        </h2>
        <p className="text-body text-ink-70 max-w-measure leading-relaxed">
          Since April 2023, the exam incorporates the NCSBN Clinical Judgment Measurement Model (CJMM). Rather than simple recall, candidates face realistic electronic health records (EHR) with 6 cognitive steps:
        </p>

        <div className="bg-surface border border-line rounded-lg p-6 space-y-4 max-w-measure">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-body-sm">
            <div className="p-3 bg-paper-alt rounded border border-line/60">
              <strong className="text-ink block">1. Recognize Cues</strong>
              <span className="text-ink-60 text-meta-sm">Identify relevant vital signs, lab findings, and assessment notes.</span>
            </div>
            <div className="p-3 bg-paper-alt rounded border border-line/60">
              <strong className="text-ink block">2. Analyze Cues</strong>
              <span className="text-ink-60 text-meta-sm">Connect patient symptoms to underlying pathophysiology.</span>
            </div>
            <div className="p-3 bg-paper-alt rounded border border-line/60">
              <strong className="text-ink block">3. Prioritize Hypotheses</strong>
              <span className="text-ink-60 text-meta-sm">Determine which condition or risk requires immediate nursing action.</span>
            </div>
            <div className="p-3 bg-paper-alt rounded border border-line/60">
              <strong className="text-ink block">4. Generate Solutions</strong>
              <span className="text-ink-60 text-meta-sm">Select evidence-based interventions while avoiding contraindications.</span>
            </div>
            <div className="p-3 bg-paper-alt rounded border border-line/60">
              <strong className="text-ink block">5. Take Action</strong>
              <span className="text-ink-60 text-meta-sm">Implement priority medications, provider orders, or emergency measures.</span>
            </div>
            <div className="p-3 bg-paper-alt rounded border border-line/60">
              <strong className="text-ink block">6. Evaluate Outcomes</strong>
              <span className="text-ink-60 text-meta-sm">Assess patient response to treatment and recognize clinical deterioration.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Registration, ATT & Fees */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Scheduling Process & Published Fees
        </h2>
        <div className="text-body text-ink-70 space-y-4 max-w-measure leading-relaxed">
          <p>
            Candidates cannot register directly with Pearson VUE without prior regulatory authorization:
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Regulatory Approval:</strong> Apply to your target nursing regulatory body (e.g. AHPRA in Australia or a US State Board).
            </li>
            <li>
              <strong>Authorization to Test (ATT):</strong> Once your qualifications and identity are verified, the regulator issues an ATT validity window (typically 90 days).
            </li>
            <li>
              <strong>Pearson VUE Booking:</strong> Create an account on Pearson VUE NCLEX candidate portal, pay the testing fee, and schedule your testing date at an authorized center.
            </li>
          </ol>

          <div className="bg-paper-alt border border-line rounded-lg p-5 space-y-3">
            <h3 className="font-semibold text-body text-ink">Official Published Fees (Subject to Regulator Updates)</h3>
            <div className="space-y-1.5 text-body-sm text-ink-70">
              <div className="flex justify-between py-1 border-b border-line/50">
                <span>Pearson VUE NCLEX-RN Base Registration Fee</span>
                <span className="font-semibold text-ink tabular-nums">$200.00 USD</span>
              </div>
              <div className="flex justify-between py-1 border-b border-line/50">
                <span>International Scheduling Surcharge (Outside US/Canada)</span>
                <span className="font-semibold text-ink tabular-nums">+$150.00 USD</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Rescheduling Fee (3+ business days before appointment)</span>
                <span className="font-semibold text-ink tabular-nums">$50.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link to Practice Tools */}
      <div className="bg-accent-wash/30 border border-accent/20 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-accent-dark font-semibold">
            Test your clinical judgment with free NextGen case studies
          </h3>
          <p className="text-body-sm text-ink-70 mt-1">
            Simulate EHR patient charts with nurses notes, vitals, labs, and CJMM rationales on our practice simulator.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("/tools/nclex-cases")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors shrink-0 min-h-control"
        >
          <span>Open NCLEX Simulator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
