import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ArrowRight } from "lucide-react";
import { UNREVIEWED } from "@/data/reviewers";

interface AustraliaRegisterPageProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-10",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "NMBA — Outcomes-Based Assessment (OBA) Overview",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives/Outcomes-based-assessment.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "AHPRA — Schedule of Fees for Nurses and Midwives",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Fees.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMBA — Registration Standards for Registered Nurses",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-Standards.aspx",
      checkedAt: "2026-10-10",
    },
  ],
};

export const AustraliaRegisterPage: React.FC<AustraliaRegisterPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 font-sans">
      {/* Breadcrumb & Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <span className="text-eyebrow text-ink-60">Registration Guide</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Australia</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Registering as a Nurse in Australia
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          The Nursing and Midwifery Board of Australia (NMBA) and the Australian Health Practitioner Regulation Agency (AHPRA) regulate nursing practice across all Australian states and territories under an Outcomes-Based Assessment (OBA) framework.
        </p>
      </div>

      {/* Primary Action Card: Pathway Selector */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-label text-accent font-bold uppercase tracking-label">
            Interactive Reference Filter
          </span>
          <h2 className="font-serif text-heading-md text-ink font-semibold">
            Filter Published Criteria by Country of Training
          </h2>
          <p className="text-body-sm text-ink-70 max-w-measure">
            See the published qualification comparability, typical assessment stream (Stream A, B, or C), and examination requirements based on where you completed your initial nursing degree.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("/register/australia/pathways")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-white hover:bg-accent-dark font-semibold text-body-sm transition-colors shrink-0 min-h-control"
        >
          <span>Open Pathway Selector</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* The 3-Stream Assessment Framework */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            The NMBA Three-Stream Assessment Model
          </h2>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            When an internationally qualified nurse completes the free online Self-Check on AHPRA’s portal, the system assigns them to one of three published streams based on qualification comparability:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stream A */}
          <div className="bg-surface border border-line rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-label text-ink-60 uppercase tracking-label font-bold">Stream A</span>
              <span className="text-meta-sm px-2 py-0.5 rounded bg-accent-wash text-accent-dark font-semibold">
                Direct Registration
              </span>
            </div>
            <h3 className="font-serif text-heading-sm text-ink font-semibold">
              Substantially Equivalent
            </h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Qualifications recognized by the NMBA as substantially equivalent to an Australian Bachelor of Nursing. Typically includes bachelor-level degrees from the UK, Republic of Ireland, New Zealand, Canada, and the United States.
            </p>
            <div className="pt-2 border-t border-line/60 text-meta-sm text-ink-60 space-y-1">
              <div>✓ Complete Orientation Part 1</div>
              <div>✓ Direct application (no NCLEX or OSCE)</div>
            </div>
          </div>

          {/* Stream B */}
          <div className="bg-surface border-2 border-accent rounded-lg p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-label text-accent uppercase tracking-label font-bold">Stream B</span>
              <span className="text-meta-sm px-2 py-0.5 rounded bg-accent text-white font-semibold">
                OBA Required
              </span>
            </div>
            <h3 className="font-serif text-heading-sm text-ink font-semibold">
              Relevant Qualifications
            </h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Qualifications relevant to registered nursing that do not meet full equivalence. Applies to most 4-year bachelor degrees from India, the Philippines, Nepal, and Kenya.
            </p>
            <div className="pt-2 border-t border-line/60 text-meta-sm text-ink-70 space-y-1">
              <div>1. Orientation Part 1 (Online)</div>
              <div>2. NCLEX-RN (Cognitive Exam)</div>
              <div>3. RN OSCE in Adelaide (Practical Exam)</div>
            </div>
          </div>

          {/* Stream C */}
          <div className="bg-surface border border-line rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-label text-ink-60 uppercase tracking-label font-bold">Stream C</span>
              <span className="text-meta-sm px-2 py-0.5 rounded bg-paper-alt text-ink-60 font-semibold border border-line">
                Upgrade Required
              </span>
            </div>
            <h3 className="font-serif text-heading-sm text-ink font-semibold">
              Non-Equivalent
            </h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Qualifications that do not meet NMBA educational standards (e.g. 3-year diploma programs without bachelor conversion).
            </p>
            <div className="pt-2 border-t border-line/60 text-meta-sm text-ink-60 space-y-1">
              <div>Requires enrolling in an approved Australian qualification (e.g. 2-year Bachelor conversion or entry-level Master).</div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Mandatory Registration Standards */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          The Five Mandatory Registration Standards
        </h2>
        <p className="text-body text-ink-70 max-w-measure leading-relaxed">
          Regardless of your stream, every applicant must provide documentary evidence meeting the five national standards before registration is granted:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-4 space-y-1.5">
            <strong className="text-body-sm text-ink block font-semibold">1. English Language Skills</strong>
            <p className="text-body-xs text-ink-70">
              IELTS Academic 7.0 (all components), OET Nursing Grade B (350+ in all components), or PTE Academic 65. Test clubbing permitted within 6 months.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-4 space-y-1.5">
            <strong className="text-body-sm text-ink block font-semibold">2. Recency of Practice</strong>
            <p className="text-body-xs text-ink-70">
              Minimum <strong>450 hours</strong> of registered nursing practice within the five years immediately preceding your application date.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-4 space-y-1.5">
            <strong className="text-body-sm text-ink block font-semibold">3. Criminal History Check</strong>
            <p className="text-body-xs text-ink-70">
              International criminal history check via an AHPRA-approved vendor (e.g. Fit2Work) for every country where you lived for 12+ consecutive months over the age of 18.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-4 space-y-1.5">
            <strong className="text-body-sm text-ink block font-semibold">4. Continuing Professional Development (CPD)</strong>
            <p className="text-body-xs text-ink-70">
              Commitment to completing minimum 20 hours of CPD annually relevant to your scope of practice.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-4 space-y-1.5 sm:col-span-2">
            <strong className="text-body-sm text-ink block font-semibold">5. Professional Indemnity Insurance (PII)</strong>
            <p className="text-body-xs text-ink-70">
              Declaration that you will hold appropriate PII cover (either through your employer, a union such as ANMF, or an individual policy) once practicing.
            </p>
          </div>
        </div>
      </section>

      {/* Official Published Fees Breakdown */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Published Regulatory Costs & Realistic Budget
        </h2>
        <p className="text-body text-ink-70 max-w-measure leading-relaxed">
          The costs below are the official, published fees charged directly by AHPRA, testing providers, and simulation centres. All figures in Australian Dollars (AUD) unless noted:
        </p>

        <div className="bg-surface border border-line rounded-lg overflow-x-auto max-w-measure">
          <table className="w-full text-left border-collapse text-body-sm">
            <thead>
              <tr className="bg-paper-alt border-b border-line text-ink font-semibold">
                <th className="p-3.5">Stage / Requirement</th>
                <th className="p-3.5">Payable To</th>
                <th className="p-3.5 text-right">Published Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-ink-70">
              <tr>
                <td className="p-3.5">AHPRA Self-Check</td>
                <td className="p-3.5">AHPRA Portal</td>
                <td className="p-3.5 text-right font-semibold text-accent">FREE</td>
              </tr>
              <tr>
                <td className="p-3.5">Primary Source Verification</td>
                <td className="p-3.5">TrueProfile / DataFlow</td>
                <td className="p-3.5 text-right tabular-nums">~$300 – $500 AUD</td>
              </tr>
              <tr>
                <td className="p-3.5">AHPRA Assessment Fee (Orientation Part 1)</td>
                <td className="p-3.5">AHPRA</td>
                <td className="p-3.5 text-right tabular-nums font-semibold text-ink">$410 AUD</td>
              </tr>
              <tr>
                <td className="p-3.5">NCLEX-RN Registration</td>
                <td className="p-3.5">Pearson VUE</td>
                <td className="p-3.5 text-right tabular-nums">$200 USD (~$310 AUD)</td>
              </tr>
              <tr>
                <td className="p-3.5">International NCLEX Test Scheduling</td>
                <td className="p-3.5">Pearson VUE</td>
                <td className="p-3.5 text-right tabular-nums">$150 USD (~$230 AUD)</td>
              </tr>
              <tr>
                <td className="p-3.5">RN OSCE (OBA Part 2)</td>
                <td className="p-3.5">Adelaide Health Simulation</td>
                <td className="p-3.5 text-right tabular-nums font-semibold text-ink">$4,000 AUD</td>
              </tr>
              <tr>
                <td className="p-3.5">Initial Registration Application Fee</td>
                <td className="p-3.5">AHPRA</td>
                <td className="p-3.5 text-right tabular-nums">$332 AUD</td>
              </tr>
              <tr>
                <td className="p-3.5">International Criminal History Check</td>
                <td className="p-3.5">Fit2Work</td>
                <td className="p-3.5 text-right tabular-nums">~$160 – $250 AUD</td>
              </tr>
              <tr className="bg-paper-alt font-bold text-ink">
                <td className="p-3.5">Estimated Total Regulatory Fees (Stream B)</td>
                <td className="p-3.5">Excludes travel & visas</td>
                <td className="p-3.5 text-right tabular-nums text-accent-dark">~$5,750 – $6,050 AUD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Migration Notice */}
      <CautionPanel title="Registration versus migration advice">
        <p>
          Obtaining AHPRA registration does not grant a visa or work rights in Australia. Migration decisions are governed separately by the Department of Home Affairs. StudyNursing.net does not give migration advice. Anyone seeking visa assistance should consult a registered migration agent listed on the official Register of Migration Agents (OMARA).
        </p>
      </CautionPanel>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
