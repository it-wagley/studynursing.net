import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ArrowLeft, AlertTriangle, Scale, CheckCircle2, ShieldAlert } from "lucide-react";

interface GulfContractsPageProps {
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
      label: "Kingdom of Saudi Arabia — Royal Decree No. M/51 (Saudi Labor Law)",
      url: "https://hrsd.gov.sa/en/labor-law",
      checkedAt: "2026-10-10",
    },
    {
      label: "UAE Ministry of Human Resources — Federal Decree-Law No. 33 of 2021",
      url: "https://www.mohre.gov.ae/en/laws-and-regulations/laws.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "International Labour Organization (ILO) — Fair Recruitment Standards",
      url: "https://www.ilo.org/global/topics/fair-recruitment/",
      checkedAt: "2026-10-10",
    },
  ],
};

export const GulfContractsPage: React.FC<GulfContractsPageProps> = ({ onNavigate }) => {
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
          <span className="text-eyebrow text-ink-60">Legal Framework</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Contracts</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Gulf Nursing Contracts: Literacy, Clauses & Statutory Rights
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          How healthcare employment contracts are structured under Saudi and UAE labor laws: basic salary versus allowances, end-of-service gratuity calculations, probation rules, and official labor authority protections.
        </p>
      </div>

      {/* Editorial Boundary Notice */}
      <CautionPanel title="The one rule: We explain the law, we never evaluate your individual contract">
        <p className="space-y-2">
          <span>
            This guide explains what standard contract clauses mean under official labor codes published by regional ministries. We do not review, assess, or offer legal opinions on any individual nurse&apos;s contract or offer letter. If you have a specific dispute, consult the relevant government labor dispute authority (e.g., Saudi MHRSD Qiwa / Labor Courts or UAE MOHRE Twafouq).
          </span>
        </p>
      </CautionPanel>

      {/* Basic Salary vs Total Package */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-accent" />
            <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
              Basic Salary vs. Total Package Allowances
            </h2>
          </div>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            In Gulf healthcare contracts, the headline monthly remuneration is almost always divided into distinct components. Understanding this split is critical because statutory benefits are tied to the basic wage:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <span className="text-label text-ink-40 uppercase tracking-label block">Core Wage</span>
            <strong className="text-body text-ink font-semibold block">Basic Salary (Asas)</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              The fundamental contracted figure. All statutory entitlements—including End-of-Service gratuity, overtime multipliers, and leave pay—are calculated solely on this amount.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <span className="text-label text-ink-40 uppercase tracking-label block">Accommodation</span>
            <strong className="text-body text-ink font-semibold block">Housing Provision</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Either employer-provided housing (in a dedicated hospital apartment or compound with utilities covered) or a cash housing allowance (typically 25% of basic salary).
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <span className="text-label text-ink-40 uppercase tracking-label block">Mobility</span>
            <strong className="text-body text-ink font-semibold block">Transport Allowance</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Either scheduled hospital shuttle bus services between staff accommodation and hospital facilities, or a monthly cash stipend (typically 10% of basic salary).
            </p>
          </div>
        </div>
      </section>

      {/* End of Service Gratuity */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="space-y-2">
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            End-of-Service Benefits (Gratuity / ESB)
          </h2>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            Expatriate nurses do not contribute to state pension schemes. Instead, domestic labor codes mandate a lump-sum End-of-Service Benefit (ESB) upon termination of service:
          </p>
        </div>

        <div className="overflow-x-auto border border-line rounded-lg bg-surface max-w-measure">
          <table className="w-full text-left border-collapse text-body-sm">
            <thead>
              <tr className="bg-paper-alt border-b border-line text-ink font-semibold">
                <th className="p-3.5">Jurisdiction</th>
                <th className="p-3.5">First 5 Years of Service</th>
                <th className="p-3.5">Subsequent Years (Year 6+)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-ink-70">
              <tr>
                <td className="p-3.5 font-medium text-ink">Saudi Arabia (Labour Law Art. 84)</td>
                <td className="p-3.5">15 days (half month) basic wage per year</td>
                <td className="p-3.5">30 days (full month) basic wage per year</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-ink">United Arab Emirates (Federal Law Art. 51)</td>
                <td className="p-3.5">21 days basic wage per year</td>
                <td className="p-3.5">30 days basic wage per year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-paper-alt border border-line rounded-lg p-4 max-w-measure text-meta-sm text-ink-70 space-y-1">
          <strong className="text-ink block">Resignation reduction rules (Saudi Art. 85):</strong>
          <p>
            If a nurse resigns voluntarily from a fixed-term contract: zero gratuity if service is under 2 years; one-third of the entitlement between 2 and 5 years; two-thirds between 5 and 10 years; full entitlement after 10 continuous years.
          </p>
        </div>
      </section>

      {/* Probation and Notice */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Probation Periods and Notice Obligations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-heading-sm text-ink font-semibold">Statutory Probation</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Standard statutory probation is 90 calendar days. Under Saudi labor law, probation may be extended up to a maximum of 180 days only by written mutual agreement after employment commences. During probation, either party may terminate without end-of-service gratuity.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-heading-sm text-ink font-semibold">Notice Periods</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Standard contract notice periods range from 30 to 90 days. Terminating without serving the contracted notice period exposes the employee to compensation claims equal to the wage for the unserved notice duration unless waived by the employer.
            </p>
          </div>
        </div>
      </section>

      {/* Prohibited Employer Practices */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-caution" />
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            Prohibited Practices Under Published Regional Laws
          </h2>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-2 text-ink font-semibold">
              <AlertTriangle className="w-4 h-4 text-caution shrink-0" />
              <span>Passport Retention is Prohibited</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Under Saudi Ministry of Human Resources Ministerial Decision No. 166 and UAE Federal Decree-Law No. 33 of 2021, employers are strictly prohibited from retaining an employee&apos;s passport or personal travel documents. Withholding personal identification documents without explicit written custody requests violates labor regulations and attracts statutory fines.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-2 text-ink font-semibold">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Employer Responsibility for Recruitment Fees</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Under both the International Labour Organization (ILO) General Principles on Fair Recruitment and domestic labor codes, employers must bear the costs of recruitment, entry work visas, medical testing in-country, and Iqama/residency card issuance. Deducting recruitment fees or visa issuance charges from a nurse&apos;s contracted salary violates labor standards.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cross-Link */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Next: The Reality of Tax-Free Money
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            Learn why gross tax-free income does not automatically equal savings, and how remittance spreads, local VAT, and inflation affect your bottom line.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/gulf/money")}
            className="px-4 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors min-h-control"
          >
            Money Reality
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
