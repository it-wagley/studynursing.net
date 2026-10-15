import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ArrowLeft, Clock, ShieldCheck, FileSpreadsheet, Building2 } from "lucide-react";

interface GulfTheWorkPageProps {
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
      label: "Saudi Central Board for Accreditation of Healthcare Institutions (CBAHI) — National Hospital Standards",
      url: "https://cbahi.gov.sa/",
      checkedAt: "2026-10-10",
    },
    {
      label: "Joint Commission International (JCI) — Hospital Accreditation Standards for Nursing Services",
      url: "https://www.jointcommissioninternational.org/",
      checkedAt: "2026-10-10",
    },
    {
      label: "Kingdom of Saudi Arabia Ministry of Health — Nursing Practice Regulations",
      url: "https://www.moh.gov.sa/",
      checkedAt: "2026-10-10",
    },
  ],
};

export const GulfTheWorkPage: React.FC<GulfTheWorkPageProps> = ({ onNavigate }) => {
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
          <span className="text-eyebrow text-ink-60">Clinical Environment</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">The Work</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          What Nursing in the Gulf Is Actually Like
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          Daily hospital reality in Saudi Arabia, the UAE, and neighboring states: nurse-to-patient ratios, rotating 12-hour shifts, healthcare systems, and clinical documentation standards.
        </p>
      </div>

      {/* Editorial Boundary Caution */}
      <CautionPanel title="Objective operational description">
        <p>
          We do not name specific hospital employers or evaluate job offers. Working conditions vary across public ministry facilities, specialized tertiary military hospitals, and commercial private clinics. The data below represents standard published staffing norms and accreditation standards across the region.
        </p>
      </CautionPanel>

      {/* Ratios Breakdown */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
              Nurse-to-Patient Staffing Ratios
            </h2>
          </div>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            Staffing ratios vary primarily by clinical acuity and institutional accreditation status (e.g., JCI or CBAHI accreditation):
          </p>
        </div>

        <div className="overflow-x-auto border border-line rounded-lg bg-surface max-w-measure">
          <table className="w-full text-left border-collapse text-body-sm">
            <thead>
              <tr className="bg-paper-alt border-b border-line text-ink font-semibold">
                <th className="p-3.5">Clinical Department</th>
                <th className="p-3.5">Tertiary / JCI Centres</th>
                <th className="p-3.5">Regional / Public MOH</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-ink-70">
              <tr>
                <td className="p-3.5 font-medium text-ink">Intensive Care (ICU / CCU)</td>
                <td className="p-3.5 tabular">1:1 (ventilated) to 1:2</td>
                <td className="p-3.5 tabular">1:2 to 1:3</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">Neonatal ICU (NICU)</td>
                <td className="p-3.5 tabular">1:1 (Level III) to 1:2</td>
                <td className="p-3.5 tabular">1:2 to 1:4</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">Emergency Department</td>
                <td className="p-3.5 tabular">1:1 (Resus) to 1:4 (Triage)</td>
                <td className="p-3.5 tabular">1:3 to 1:6</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">Medical-Surgical Wards</td>
                <td className="p-3.5 tabular">1:4 to 1:6</td>
                <td className="p-3.5 tabular">1:8 to 1:12</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">Operating Theatres</td>
                <td className="p-3.5 tabular">1 Scrub + 1 Circulator per room</td>
                <td className="p-3.5 tabular">1 Scrub + 1 Circulator per room</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Shift Patterns & Workload */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-accent" />
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            Shift Patterns & Weekly Hours
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-heading-sm text-ink font-semibold">12-Hour Shift Rotations</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Most acute hospital units operate 12-hour shifts: typically 07:00 to 19:30 (Day) and 19:00 to 07:30 (Night), including a 30-minute handover buffer. Nurses rotate between day and night shifts on monthly or fortnightly rosters.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-heading-sm text-ink font-semibold">44–48 Hour Work Weeks</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Standard statutory labor contracts in the Gulf specify 44 to 48 working hours per week. This equates to alternating rosters of 3 shifts one week (36 hours) and 4 shifts the next (48 hours), or continuous 4-shift weeks with overtime allocations.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Types */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-accent" />
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            Understanding Hospital Sectors
          </h2>
        </div>
        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">1. Ministry of Health (MOH) Public Hospitals</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              The primary healthcare safety net. These high-bed-count facilities serve general domestic populations with high prevalence of complex chronic metabolic disease, cardiovascular illness, and trauma. Charting systems range from hybrid paper records to regional EMR platforms.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">2. Tertiary Military, Security & Specialist Centres</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Specialist referral hospitals with advanced research mandates, organ transplant units, oncology centres, and Magnet-pathway nursing departments. They operate enterprise EHR systems (such as Epic or Cerner) and enforce strict international evidence-based protocols.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">3. Private Hospital Chains & Ambulatory Groups</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Commercial facilities serving insured expatriates and self-paying private patients. Fast bed turnover and customer satisfaction metrics govern operations. Staffing rosters are closely linked to seasonal patient occupancy.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Documentation Standards */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5 text-accent" />
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            Documentation & Professional Accountability
          </h2>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-3 max-w-measure">
          <p className="text-body-sm text-ink-70 leading-relaxed">
            All formal clinical documentation across Gulf hospitals is maintained in English. Nurses are held legally accountable for accurate recording:
          </p>
          <ul className="list-disc list-inside text-body-sm text-ink-70 space-y-2">
            <li><strong>Strict Controlled Drug Administration:</strong> Strict physical counts, biometric cabinet access, and double-witness signing for all narcotics. Discrepancies trigger mandatory administrative audits.</li>
            <li><strong>Incident & Variance Reporting:</strong> Occurrence Variance Reports (OVR) are used to report medication administration errors, patient falls, and clinical delays. Reporting is formally non-punitive under JCI criteria.</li>
            <li><strong>Nursing Care Plans:</strong> Daily individualized care planning following NANDA/NIC-NOC taxonomy or standard care pathways is mandatory in accredited facilities.</li>
          </ul>
        </div>
      </section>

      {/* Navigation Cross-Link */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Next: Contract Literacy & Legal Rights
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            Understand how basic salary affects your end-of-service gratuity, accommodation allowances, and statutory labor protections.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/gulf/contracts")}
            className="px-4 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors min-h-control"
          >
            Contract Guide
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
