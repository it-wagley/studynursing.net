import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { UNREVIEWED } from "@/data/reviewers";

interface UkRegisterPageProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-10",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "NMC UK — Joining the Register: Trained Outside the UK",
      url: "https://www.nmc.org.uk/registration/joining-the-register/register-nurse-midwife/",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMC UK — Test of Competence 2021 Overview",
      url: "https://www.nmc.org.uk/registration/joining-the-register/toc/",
      checkedAt: "2026-10-10",
    },
    {
      label: "UK Department of Health & Social Care — Code of Practice for International Recruitment",
      url: "https://www.gov.uk/government/publications/code-of-practice-for-the-international-recruitment-of-health-and-social-care-personnel",
      checkedAt: "2026-10-10",
    },
  ],
};

export const UkRegisterPage: React.FC<UkRegisterPageProps> = ({ onNavigate }) => {
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
          <span className="text-ink font-medium">United Kingdom</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          United Kingdom: NMC Overseas Registration
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          The Nursing and Midwifery Council (NMC) regulates nurses and midwives across England, Wales, Scotland, and Northern Ireland. Internationally qualified nurses qualify via the Test of Competence (ToC 2021) pathway.
        </p>
      </div>

      {/* Caution Notice: WHO Red List & Recruitment Boundaries */}
      <CautionPanel title="Recruitment code & sponsorship notice">
        <p>
          The UK strictly enforces the Department of Health & Social Care Code of Practice for International Recruitment. Active recruitment is banned from countries on the WHO health workforce support and safeguards list (the &quot;red list&quot;). Individual direct applications are permitted, but no UK recruiter or NHS trust may actively recruit from red-list nations.
        </p>
      </CautionPanel>

      {/* Key Facts Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Regulator</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">NMC UK</div>
          <p className="text-meta-sm text-ink-60">National Nursing & Midwifery Council</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Assessment Model</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">Test of Competence</div>
          <p className="text-meta-sm text-ink-60">ToC 2021: CBT (theory) + OSCE (clinical)</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Published Fees</span>
          <div className="text-heading-sm font-serif font-semibold text-ink tabular">~£1,170 GBP</div>
          <p className="text-meta-sm text-ink-60">Eval £140, CBT £83, OSCE £794, Reg £153</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Typical Timeline</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">6 to 12 Months</div>
          <p className="text-meta-sm text-ink-60">Governed by OSCE testing slot availability</p>
        </div>
      </div>

      {/* The 5-Stage NMC Process */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            The Five Stages of UK Registration
          </h2>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            The NMC processes overseas registration in structured phases. Candidates can complete the online evaluation and CBT from their home country before travelling to the UK for the clinical OSCE:
          </p>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 1: Eligibility and Qualification Check</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">£140 GBP</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Submit your qualification details, registration authority verification from your home country, and confirm you hold a license leading to practice as an adult/general nurse.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 2: Computer-Based Test (CBT)</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">£83 GBP</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Sitting the Test of Competence Part 1 at an authorized Pearson VUE test centre worldwide. Comprises Part A (Numeracy / Drug Calculations: 15 questions) and Part B (Clinical Theory: 100 questions).
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 3: Evidence Submission & English Language</strong>
              <span className="text-meta-sm font-mono text-ink-60">Verification</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Upload documentary evidence meeting the NMC English standard (IELTS Academic 7.0 / OET Grade B / PTE Academic 65), police clearances from all countries of adult residence, and health declarations.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 4: Objective Structured Clinical Examination (OSCE)</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">£794 GBP</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              10 clinical stations conducted in-person at one of 5 designated UK university centres (University of Northampton, Oxford Brookes, Ulster University, Leeds Teaching Hospitals, or Northumbria University). Includes 4 APIE stations (Assessment, Planning, Implementation, Evaluation) and 6 clinical skill / professional values stations.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 5: Registration & PIN Issuance</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">£153 GBP</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Payment of the registration fee and addition to the NMC register. You receive a unique NMC PIN authorizing practice as a Registered Nurse in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* English Language Requirements Table */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Published English Language Standards (NMC)
        </h2>
        <div className="overflow-x-auto border border-line rounded-lg bg-surface max-w-measure">
          <table className="w-full text-left border-collapse text-body-sm">
            <thead>
              <tr className="bg-paper-alt border-b border-line text-ink font-semibold">
                <th className="p-3.5">Test Type</th>
                <th className="p-3.5">Listening, Reading, Speaking</th>
                <th className="p-3.5">Writing</th>
                <th className="p-3.5">Overall</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-ink-70">
              <tr>
                <td className="p-3.5 font-medium text-ink">IELTS Academic</td>
                <td className="p-3.5 tabular">7.0 minimum</td>
                <td className="p-3.5 tabular">6.5 minimum</td>
                <td className="p-3.5 tabular font-semibold text-ink">7.0</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">OET (Nursing)</td>
                <td className="p-3.5 tabular">Grade B (350+)</td>
                <td className="p-3.5 tabular">Grade C+ (300+)</td>
                <td className="p-3.5 tabular font-semibold text-ink">Grade B</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">PTE Academic</td>
                <td className="p-3.5 tabular">65 minimum</td>
                <td className="p-3.5 tabular">58 minimum</td>
                <td className="p-3.5 tabular font-semibold text-ink">65</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-meta-sm text-ink-60 max-w-measure">
          Score combining: NMC permits combining two test sittings taken within 6 months, provided neither test falls below the prescribed floors (IELTS 6.5 across all components; OET C+ across all components; PTE 58 across all components).
        </p>
      </section>

      {/* Cross-Link to Shared Spine */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Prepare for the UK OSCE & Drug Calculations
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            NMC CBT Part A and the UK OSCE require precise clinical numeracy. Practice with our free dosage engine and review the OSCE guide.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/exams/osce")}
            className="px-4 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors min-h-control"
          >
            OSCE Guide
          </button>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/tools/dosage")}
            className="px-4 py-2.5 rounded-md bg-paper border border-line text-ink hover:bg-line/40 text-body-sm font-semibold transition-colors min-h-control"
          >
            Dosage Practice
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
