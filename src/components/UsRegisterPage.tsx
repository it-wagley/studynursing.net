import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { UNREVIEWED } from "@/data/reviewers";

interface UsRegisterPageProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "overview",
  reviewedAt: "2026-10-10",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "NCSBN — United States Licensure by Examination",
      url: "https://www.ncsbn.org/licensure.page",
      checkedAt: "2026-10-10",
    },
    {
      label: "CGFNS International — Credentials Evaluation Service (CES) & VisaScreen",
      url: "https://www.cgfns.org/",
      checkedAt: "2026-10-10",
    },
    {
      label: "US Department of State — Monthly Visa Bulletin (Employment-Based Preferences)",
      url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
      checkedAt: "2026-10-10",
    },
  ],
};

export const UsRegisterPage: React.FC<UsRegisterPageProps> = ({ onNavigate }) => {
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
          <span className="text-ink font-medium">United States</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="overview" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          United States: State Boards of Nursing & NCLEX-RN
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          The United States regulates nursing practice through 50 state and territorial Boards of Nursing under the National Council of State Boards of Nursing (NCSBN). Foreign-educated nurses qualify for licensure by examination via credential evaluation and the NCLEX-RN.
        </p>
      </div>

      {/* Caution Notice: State Variations & Visa Retrogression */}
      <CautionPanel title="State board autonomy & visa retrogression notice (Overview tier)">
        <p className="space-y-2">
          <span>
            <strong>50 autonomous state boards:</strong> There is no federal nursing license in the United States. You apply to a specific State Board of Nursing (e.g., Texas, New York, Illinois). Each state sets its own rules regarding prerequisite credentials, Social Security Number (SSN) requirements, and English language test exemptions.
          </span>
          <br className="my-1" />
          <span>
            <strong>Licensure vs. Visa retrogression:</strong> Passing the NCLEX-RN grants state licensure eligibility, but does not grant a visa or work authorization. Permanent resident immigrant visas (EB-3) are subject to annual statutory caps and retrogression published monthly in the US Department of State Visa Bulletin. Wait times vary significantly by country of birth.
          </span>
        </p>
      </CautionPanel>

      {/* Key Facts Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Regulators</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">50 State Boards</div>
          <p className="text-meta-sm text-ink-60">NCSBN umbrella organization</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Cognitive Exam</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">NCLEX-RN</div>
          <p className="text-meta-sm text-ink-60">Computer-adaptive test (Pearson VUE)</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Published Fees</span>
          <div className="text-heading-sm font-serif font-semibold text-ink tabular">~$1,200 – $2,000 USD</div>
          <p className="text-meta-sm text-ink-60">CES ~$450, State Board ~$150, NCLEX $350</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Practical Clinical Exam</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">None Required</div>
          <p className="text-meta-sm text-ink-60">US licensing relies solely on the NCLEX-RN</p>
        </div>
      </div>

      {/* The 4-Stage US Process */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            The Four Stages of US Licensure by Examination
          </h2>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            Obtaining a US registered nurse license involves credential verification, state board authorization, and passing the computer-adaptive NCLEX-RN:
          </p>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 1: Foreign Credential Evaluation (CES)</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">~$450 USD</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Order a Credentials Evaluation Service (CES) Professional Report through CGFNS International (or an alternative approved evaluator such as Josef Silny &amp; Associates, depending on the target state). Primary source transcripts and licenses are evaluated to confirm equivalence to a US nursing degree.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 2: State Board of Nursing Application</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">$100 – $350 USD</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Submit an application for licensure by examination to the chosen State Board of Nursing. Provide criminal history background checks (FBI fingerprint cards) and verify meeting state-specific prerequisites (such as English language proficiency or SSN alternatives).
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 3: Authorization to Test (ATT) & NCLEX-RN</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">$350 USD</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Once the State Board approves eligibility, Pearson VUE issues an Authorization to Test (ATT) valid for 90 days. The candidate books and sits the NextGen NCLEX-RN at an authorized domestic or international Pearson VUE professional test centre ($200 USD domestic fee + $150 USD international scheduling fee).
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 4: Licensure Conferred & VisaScreen Certificate</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">~$700 USD (VisaScreen)</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Upon passing the NCLEX-RN, the State Board issues an active Registered Nurse license. To pursue permanent employment immigration (EB-3 visa), the nurse must subsequently obtain a CGFNS VisaScreen Certificate (verifying license validity, education, and English language test scores) for submission to US Citizenship and Immigration Services (USCIS).
            </p>
          </div>
        </div>
      </section>

      {/* English Standards for VisaScreen */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          English Proficiency Standards (CGFNS VisaScreen & State Boards)
        </h2>
        <div className="overflow-x-auto border border-line rounded-lg bg-surface max-w-measure">
          <table className="w-full text-left border-collapse text-body-sm">
            <thead>
              <tr className="bg-paper-alt border-b border-line text-ink font-semibold">
                <th className="p-3.5">Examination</th>
                <th className="p-3.5">Speaking Requirement</th>
                <th className="p-3.5">Overall Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-ink-70">
              <tr>
                <td className="p-3.5 font-medium text-ink">IELTS Academic</td>
                <td className="p-3.5 tabular">7.0 minimum</td>
                <td className="p-3.5 tabular font-semibold text-ink">6.5</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">TOEFL iBT</td>
                <td className="p-3.5 tabular">26 minimum</td>
                <td className="p-3.5 tabular font-semibold text-ink">83</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">OET (Nursing)</td>
                <td className="p-3.5 tabular">Grade B (350+) or 300+ (state dependent)</td>
                <td className="p-3.5 tabular font-semibold text-ink">Grade B</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">PTE Academic</td>
                <td className="p-3.5 tabular">50 minimum</td>
                <td className="p-3.5 tabular font-semibold text-ink">55</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-meta-sm text-ink-60 max-w-measure">
          Exemption rule: Nurses whose entry-level nursing education was conducted in Australia, Canada (except Quebec), Ireland, New Zealand, the United Kingdom, or the United States, with English textbooks and instruction, are typically exempt from English testing for VisaScreen.
        </p>
      </section>

      {/* Cross-Link to Shared Spine */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Prepare for the US NCLEX-RN
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            Explore our NextGen NCLEX guide covering CAT scoring algorithms, Clinical Judgment Measurement Model (CJMM) unfolding cases, and drug name differences.
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
            onClick={() => onNavigate && onNavigate("/tools/drug-names")}
            className="px-4 py-2.5 rounded-md bg-paper border border-line text-ink hover:bg-line/40 text-body-sm font-semibold transition-colors min-h-control"
          >
            Drug Names
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
