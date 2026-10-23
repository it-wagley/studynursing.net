import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { UNREVIEWED } from "@/data/reviewers";

interface EnglishExamGuideProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-10",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "NMBA — English Language Skills Registration Standard",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-Standards/English-language-skills.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMC UK — Accepted English Language Tests",
      url: "https://www.nmc.org.uk/registration/joining-the-register/english-language-requirements/",
      checkedAt: "2026-10-10",
    },
    {
      label: "NCNZ — English Language Competence Policy",
      url: "https://www.nursingcouncil.org.nz/IQN/Competence_Assessment/English_Language_Requirements/NCNZ/IQN/English_Language_Requirements.aspx",
      checkedAt: "2026-10-10",
    },
  ],
};

export const EnglishExamGuide: React.FC<EnglishExamGuideProps> = ({ onNavigate }) => {
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
          <span className="text-ink">English Proficiency Benchmark</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          English Language Test Requirements
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          Health practitioner regulators require proof of English language proficiency to ensure patient safety. Below are the published minimum score standards, test-clubbing conditions, and validity periods for Australia, the United Kingdom, and New Zealand.
        </p>
      </div>

      {/* Validity Notice */}
      <CautionPanel title="Two-year validity policy">
        <p>
          English test results are typically valid for exactly <strong>two years</strong> from the test sitting date to the date your formal application is lodged with the regulator. If your results expire during credential verification or while waiting for an OSCE seat, you will be required to re-sit the examination.
        </p>
      </CautionPanel>

      {/* Comparison Score Table */}
      <div className="space-y-4">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Published Minimum Score Standards by Destination
        </h2>
        <div className="overflow-x-auto border border-line rounded-lg bg-surface">
          <table className="w-full text-left border-collapse text-body-sm">
            <thead>
              <tr className="bg-paper-alt border-b border-line text-ink font-semibold">
                <th className="p-4">Regulator</th>
                <th className="p-4">IELTS Academic</th>
                <th className="p-4">OET (Nursing)</th>
                <th className="p-4">PTE Academic</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-ink-70">
              <tr>
                <td className="p-4 font-semibold text-ink">
                  Australia<br />
                  <span className="text-meta-sm font-normal text-ink-60">NMBA / AHPRA</span>
                </td>
                <td className="p-4 tabular-nums">
                  <strong className="text-ink">7.0 Overall</strong><br />
                  7.0 in Listening, Reading, Speaking<br />
                  6.5 in Writing (if single sitting, or 7.0 across clubbed)
                </td>
                <td className="p-4 tabular-nums">
                  <strong className="text-ink">Grade B (350+)</strong><br />
                  Minimum 350 in Listening, Reading, Speaking, and Writing
                </td>
                <td className="p-4 tabular-nums">
                  <strong className="text-ink">65 Overall</strong><br />
                  Minimum 65 in all 4 communicative skills
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ink">
                  United Kingdom<br />
                  <span className="text-meta-sm font-normal text-ink-60">NMC</span>
                </td>
                <td className="p-4 tabular-nums">
                  <strong className="text-ink">7.0 Overall</strong><br />
                  7.0 in Reading, Listening, Speaking<br />
                  6.5 in Writing
                </td>
                <td className="p-4 tabular-nums">
                  <strong className="text-ink">Grade B (350+)</strong> in R, L, S<br />
                  Grade C+ (300+) in Writing
                </td>
                <td className="p-4 tabular-nums">
                  <strong className="text-ink">65 Overall</strong><br />
                  65 in Reading, Listening, Speaking<br />
                  58 in Writing
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ink">
                  New Zealand<br />
                  <span className="text-meta-sm font-normal text-ink-60">NCNZ</span>
                </td>
                <td className="p-4 tabular-nums">
                  <strong className="text-ink">7.0 Overall</strong><br />
                  7.0 in all components (6.5 in writing accepted under combined sittings)
                </td>
                <td className="p-4 tabular-nums">
                  <strong className="text-ink">Grade B (350+)</strong><br />
                  Minimum 350 in all 4 sub-tests
                </td>
                <td className="p-4 tabular-nums">
                  <strong className="text-ink">65 Overall</strong><br />
                  Minimum 65 in each communicative skill
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section: Test Clubbing Rules */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Test Clubbing: Combining Scores Across Two Sittings
        </h2>
        <div className="text-body text-ink-70 space-y-4 max-w-measure leading-relaxed">
          <p>
            Both Australia (NMBA) and the UK (NMC) allow candidates to combine scores from two test sittings, provided strict conditions are met:
          </p>

          <div className="bg-surface border border-line rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-body text-ink">AHPRA / NMBA Test Combining Rules:</h3>
            <ul className="list-disc pl-5 space-y-2 text-body-sm">
              <li>
                Both tests must be taken within <strong>6 months</strong> of each other.
              </li>
              <li>
                You must test using the <strong>exact same test type</strong> (you cannot combine an IELTS with an OET).
              </li>
              <li>
                <strong>Minimum score floors must be met in both sittings:</strong>
                <ul className="list-circle pl-5 mt-1 space-y-1 text-meta-sm">
                  <li><strong>IELTS:</strong> Overall minimum 7.0 in both tests; no component below 6.5 in either test.</li>
                  <li><strong>OET:</strong> Minimum C+ (300) in every sub-test in both sittings.</li>
                  <li><strong>PTE:</strong> Overall minimum 65 in both tests; no communicative skill below 58 in either test.</li>
                </ul>
              </li>
              <li>
                Across the two sittings combined, you must reach the full standard (e.g. 7.0 or B or 65) in every sub-skill.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Primary Language Pathway / Exemptions */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Exemptions: The Primary Language Pathway
        </h2>
        <div className="text-body text-ink-70 space-y-4 max-w-measure leading-relaxed">
          <p>
            Candidates who completed their education in recognized English-speaking countries may be exempt from submitting test scores:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Recognized Countries:</strong> Australia, Canada, New Zealand, Republic of Ireland, South Africa, United Kingdom, and the United States.
            </li>
            <li>
              <strong>Australia (NMBA Extended Education Pathway):</strong> Requires evidence of at least <strong>5 years continuous full-time education</strong> taught and assessed exclusively in English in a recognized country (e.g. secondary education + 3-year bachelor degree).
            </li>
            <li>
              <strong>Countries where English is an official language (e.g. India, Philippines, Malaysia, Singapore):</strong> Regulators do <strong>not</strong> grant exemptions based on English-medium instruction alone. Nurses trained in these jurisdictions must sit an approved standardized test.
            </li>
          </ul>
        </div>
      </section>

      {/* Exam Navigation Links */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Explore Cognitive & Clinical Examinations
          </h3>
          <p className="text-body-sm text-ink-70 mt-1">
            Read comprehensive guides on the computer-adaptive NCLEX-RN and hands-on OSCE clinical stations.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/exams/nclex-rn")}
            className="px-4 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors min-h-control"
          >
            NCLEX-RN Guide
          </button>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/exams/osce")}
            className="px-4 py-2.5 rounded-md bg-paper border border-line text-ink hover:bg-line/40 text-body-sm font-semibold transition-colors min-h-control"
          >
            OSCE Guide
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
