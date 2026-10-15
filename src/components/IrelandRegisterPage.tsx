import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";

interface IrelandRegisterPageProps {
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
      label: "NMBI — Trained Outside Ireland (Group 3 Assessment)",
      url: "https://www.nmbi.ie/Registration/Trained-outside-Ireland",
      checkedAt: "2026-10-10",
    },
    {
      label: "RCSI Faculty of Nursing & Midwifery — Overseas Aptitude Test",
      url: "https://www.rcsi.com/dublin/about/faculty-of-nursing-and-midwifery/overseas-aptitude-test",
      checkedAt: "2026-10-10",
    },
    {
      label: "Health Service Executive (HSE) Ireland — International Nursing Recruitment",
      url: "https://www.hse.ie/eng/staff/jobs/",
      checkedAt: "2026-10-10",
    },
  ],
};

export const IrelandRegisterPage: React.FC<IrelandRegisterPageProps> = ({ onNavigate }) => {
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
          <span className="text-ink font-medium">Republic of Ireland</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="overview" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Republic of Ireland: NMBI Overseas Registration
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          The Nursing and Midwifery Board of Ireland (Bord Altranais agus Cnáimhseachais na hÉireann - NMBI) regulates nursing and midwifery practice. Nurses trained outside the European Union / European Economic Area apply under the Group 3 pathway.
        </p>
      </div>

      {/* Caution Notice: Overview Tier Scope & Compensation Measures */}
      <CautionPanel title="Compensation measures & PTE notice (Overview tier)">
        <p className="space-y-2">
          <span>
            <strong>Compensation measures:</strong> Almost all non-EU/EEA applicants receive a decision letter from NMBI requiring a compensation measure. Candidates must either sit the RCSI Overseas Aptitude Test (theory test and practical OSCE in Dublin) or complete a 6–12 week supervised clinical adaptation placement in an approved Irish hospital.
          </span>
          <br className="my-1" />
          <span>
            <strong>English test restrictions:</strong> NMBI strictly recognizes IELTS Academic and OET (Nursing). Unlike the UK, Australia, and New Zealand, NMBI does not currently accept PTE Academic for nurse registration.
          </span>
        </p>
      </CautionPanel>

      {/* Key Facts Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Regulator</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">NMBI</div>
          <p className="text-meta-sm text-ink-60">Nursing & Midwifery Board of Ireland</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Assessment Model</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">Group 3 + RCSI / Adaptation</div>
          <p className="text-meta-sm text-ink-60">RCSI Aptitude Test (OSCE) or 6–12 wk hospital adaptation</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Published Fees</span>
          <div className="text-heading-sm font-serif font-semibold text-ink tabular">~€2,800 – €3,500 EUR</div>
          <p className="text-meta-sm text-ink-60">App €350, RCSI Test €2,800, Reg €145</p>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
          <span className="text-label text-ink-40 uppercase tracking-label block">Typical Timeline</span>
          <div className="text-heading-sm font-serif font-semibold text-ink">8 to 15 Months</div>
          <p className="text-meta-sm text-ink-60">From initial portal submission to registration</p>
        </div>
      </div>

      {/* The 4-Stage NMBI Process */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            The Four Stages of Irish Registration
          </h2>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            The overseas application follows a document-based evaluation followed by an in-country clinical competency verification:
          </p>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 1: MyNMBI Online Application & Document Upload</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">€350 EUR</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Create an account on the MyNMBI online portal and pay the overseas qualification assessment fee. Submit verified transcripts, clinical hour breakdowns (confirming medical, surgical, maternal/infant, mental health, and community hours), and certificates of good standing.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 2: NMBI Qualification Assessment & Decision Letter</strong>
              <span className="text-meta-sm font-mono text-ink-60">Review Phase</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              NMBI assesses whether the qualification meets Irish European-directive equivalent standards. For non-EU nurses, NMBI issues a Decision Letter specifying the required compensation measure to bridge curriculum gaps.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 3: Compensation Measure (RCSI Test or Adaptation)</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">~€2,800 EUR / Sponsored</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              The candidate undertakes one of two approved pathways:
              <br />
              <strong>1. RCSI Aptitude Test:</strong> Sitten at the Royal College of Surgeons in Ireland (Dublin), consisting of Part 1 (150-question computer theory test) and Part 2 (practical OSCE clinical stations).
              <br />
              <strong>2. Clinical Adaptation:</strong> A 6 to 12-week supervised placement in an accredited Irish acute hospital or nursing facility under an approved preceptor.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">Stage 4: Registration & PIN Issuance</strong>
              <span className="text-meta-sm font-mono text-ink-60 tabular">€145 EUR</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Upon successful completion of the RCSI test or adaptation assessment, the NMBI admits the nurse to the Register of Nurses and Midwives and issues an official NMBI PIN and Annual Retention Certificate.
            </p>
          </div>
        </div>
      </section>

      {/* English Standards Table */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Published English Language Standards (NMBI)
        </h2>
        <div className="overflow-x-auto border border-line rounded-lg bg-surface max-w-measure">
          <table className="w-full text-left border-collapse text-body-sm">
            <thead>
              <tr className="bg-paper-alt border-b border-line text-ink font-semibold">
                <th className="p-3.5">Test Type</th>
                <th className="p-3.5">Listening & Speaking</th>
                <th className="p-3.5">Reading & Writing</th>
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
                <td className="p-3.5 tabular">Grade C+ (300+) in Writing, B in Reading</td>
                <td className="p-3.5 tabular font-semibold text-ink">Grade B</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink text-ink-40">PTE Academic</td>
                <td colSpan={3} className="p-3.5 text-caution font-medium italic">
                  Not accepted for nurse registration by NMBI
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-meta-sm text-ink-60 max-w-measure">
          NMBI accepts test scores from a single sitting only. Results are valid for two years from the test date.
        </p>
      </section>

      {/* Cross-Link */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Clinical Practice & OSCE Assessment Guide
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            The RCSI Part 2 assessment utilizes an OSCE clinical station format. Review clinical station preparation and clinical math practice.
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
            onClick={() => onNavigate && onNavigate("/compare")}
            className="px-4 py-2.5 rounded-md bg-paper border border-line text-ink hover:bg-line/40 text-body-sm font-semibold transition-colors min-h-control"
          >
            Compare All
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
