import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { UNREVIEWED } from "@/data/reviewers";

interface NewZealandRegisterPageProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-10",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "Nursing Council of New Zealand — Internationally Qualified Nurses Overview",
      url: "https://www.nursingcouncil.org.nz/IQN",
      checkedAt: "2026-10-10",
    },
    {
      label: "CGFNS International — Credential Verification Service for NCNZ (CVS-NCNZ)",
      url: "https://www.cgfns.org/professions/nurses/cvs-ncnz/",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMBA Australia — Position Statement on Trans-Tasman Mutual Recognition",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
      checkedAt: "2026-10-10",
    },
  ],
};

export const NewZealandRegisterPage: React.FC<NewZealandRegisterPageProps> = ({ onNavigate }) => {
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
          <span className="text-ink font-medium">New Zealand</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          New Zealand: Nursing Council (NCNZ) Registration
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          The Nursing Council of New Zealand (Te Kaunihera Tapuhi o Aotearoa) regulates nursing practice across New Zealand. Internationally qualified nurses must complete third-party credential verification and demonstrate clinical competence under New Zealand healthcare standards.
        </p>
      </div>

      {/* Caution Notice: Trans-Tasman Arbitrage & Regulatory Scrutiny */}
      <CautionPanel title="Trans-Tasman (TTMRA) scrutiny & immigration advice boundaries">
        <p className="space-y-2">
          <span>
            <strong>Trans-Tasman route scrutiny:</strong> Under the Trans-Tasman Mutual Recognition Act (TTMRA), nurses registered in New Zealand may apply for reciprocal recognition in Australia. However, both the NMBA in Australia and the NCNZ in New Zealand actively scrutinize qualifications to verify whether overseas applicants hold substantive equivalence. The NMBA reserves the right to require an Outcomes-Based Assessment (OBA) if equivalence standards are not satisfied.
          </span>
          <br className="my-1" />
          <span>
            <strong>Legal disclaimer:</strong> Under New Zealand&apos;s Immigration Advisers Licensing Act 2007 (s8), offshore immigration advice without a license is strictly prohibited. This page provides only publicly available regulatory criteria from official sources. We do not assess personal eligibility, recommend visa pathways, or evaluate individual documents.
          </span>
        </p>
      </CautionPanel>

      {/* Key Facts Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Regulator</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">NCNZ</div>
          <p className="text-meta-sm text-ink-60">Nursing Council of New Zealand</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Assessment Model</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">CGFNS + CAP / OSCE</div>
          <p className="text-meta-sm text-ink-60">CVS-NCNZ verification + Competency Assessment</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Published Fees</span>
          <div className="text-heading-sm font-serif font-semibold text-ink tabular">~NZD $5,000–$12,000</div>
          <p className="text-meta-sm text-ink-60">CGFNS + NCNZ app + CAP course/OSCE tuition</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Recency Standard</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">2,500 Hours</div>
          <p className="text-meta-sm text-ink-60">Registered clinical practice in prior 5 years</p>
        </div>
      </div>

      {/* The 4-Stage NCNZ Process */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            The Four Stages of New Zealand Registration
          </h2>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            The registration pathway requires credential verification through CGFNS prior to direct application to the Nursing Council:
          </p>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 1: CGFNS International Verification (CVS-NCNZ)</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">~$300 USD</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Create an account with CGFNS International for the Credentials Verification Service for the Nursing Council of New Zealand. CGFNS collects and authenticates primary-source nursing education transcripts, registration licenses, and identity records.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 2: Nursing Council Application & Evaluation</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">NZD $485</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Once CGFNS issues the verification report to NCNZ, the Council invites the candidate to apply online. NCNZ assesses the qualification against New Zealand educational equivalence, fitness to practise, and criminal history checks.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 3: Competency Assessment (CAP or OSCE)</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">NZD $3,000 – $9,000</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Candidates whose qualifications are not directly equivalent must complete a Competence Assessment Programme (CAP) at an accredited New Zealand polytechnic (typically 6–12 weeks of theory and clinical placement) or complete the Council&apos;s clinical OSCE evaluation.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 4: Registration & Annual Practising Certificate (APC)</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">NZD $200 – $300</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Upon successful completion of the competency requirement, the Council admits the nurse to the register and issues an Annual Practising Certificate, authorizing clinical practice across New Zealand district health boards and private hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* English Language Requirements Table */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Published English Language Standards (NCNZ)
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
                <td className="p-3.5 tabular">7.0 minimum</td>
                <td className="p-3.5 tabular font-semibold text-ink">7.0</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">OET (Nursing)</td>
                <td className="p-3.5 tabular">Grade B (350+)</td>
                <td className="p-3.5 tabular">Grade B (350+)</td>
                <td className="p-3.5 tabular font-semibold text-ink">Grade B</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">PTE Academic</td>
                <td className="p-3.5 tabular">65 minimum</td>
                <td className="p-3.5 tabular">65 minimum</td>
                <td className="p-3.5 tabular font-semibold text-ink">65</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-meta-sm text-ink-60 max-w-measure">
          Clubbing policy: NCNZ allows combining results from two sittings of the same test taken within a 12-month window, provided no individual score falls below IELTS 6.5, OET 300 (C+), or PTE 58.
        </p>
      </section>

      {/* Navigation Cross-Link */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Compare New Zealand with Australia & the UK
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            Review detailed timelines, fee structures, and clinical assessment formats across all recognized international destinations.
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
            onClick={() => onNavigate && onNavigate("/exams/english")}
            className="px-4 py-2.5 rounded-md bg-paper border border-line text-ink hover:bg-line/40 text-body-sm font-semibold transition-colors min-h-control"
          >
            English Guide
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
