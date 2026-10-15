import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ArrowLeft, TrendingDown, Landmark, Receipt } from "lucide-react";

interface GulfMoneyPageProps {
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
      label: "Saudi Central Bank (SAMA) — Monetary Policy & Exchange Peg Overview",
      url: "https://www.sama.gov.sa/en-US/EconomicReports/Pages/MonetaryAndBankingStatistics.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "Central Bank of the UAE — Pegged Exchange Rate Framework",
      url: "https://www.centralbank.ae/en/our-operations/monetary-policy/",
      checkedAt: "2026-10-10",
    },
    {
      label: "World Bank — Remittance Prices Worldwide Database",
      url: "https://remittanceprices.worldbank.org/",
      checkedAt: "2026-10-10",
    },
  ],
};

export const GulfMoneyPage: React.FC<GulfMoneyPageProps> = ({ onNavigate }) => {
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
          <span className="text-eyebrow text-ink-60">Financial Reality</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Money</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          The Money Reality: What Tax-Free Actually Nets
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          Zero personal income tax does not automatically translate into high savings. An objective breakdown of currency pegs, remittance spreads, local consumption taxes, and practical budgeting for overseas nurses.
        </p>
      </div>

      {/* Caution Panel */}
      <CautionPanel title="Financial information notice">
        <p>
          We do not provide personal financial, investment, or tax advice. Living costs, exchange rates, and bank transfer charges fluctuate. The figures below represent published central bank data and standard consumer price benchmarks.
        </p>
      </CautionPanel>

      {/* Currency Peg Framework */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-accent" />
            <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
              Currency Pegs to the US Dollar
            </h2>
          </div>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            The national currencies of most GCC states are formally pegged to the US Dollar (USD), providing exchange rate predictability against global currencies:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
            <span className="text-label text-ink-40 uppercase tracking-label block">Saudi Arabia</span>
            <div className="text-heading-sm font-serif font-semibold text-ink tabular">1 USD = 3.75 SAR</div>
            <p className="text-meta-sm text-ink-60">Pegged since June 1986</p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
            <span className="text-label text-ink-40 uppercase tracking-label block">United Arab Emirates</span>
            <div className="text-heading-sm font-serif font-semibold text-ink tabular">1 USD = 3.6725 AED</div>
            <p className="text-meta-sm text-ink-60">Pegged since November 1997</p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
            <span className="text-label text-ink-40 uppercase tracking-label block">Qatar</span>
            <div className="text-heading-sm font-serif font-semibold text-ink tabular">1 USD = 3.64 QAR</div>
            <p className="text-meta-sm text-ink-60">Pegged since July 2001</p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5 space-y-1">
            <span className="text-label text-ink-40 uppercase tracking-label block">Kuwait</span>
            <div className="text-heading-sm font-serif font-semibold text-ink tabular">Basket Peg</div>
            <p className="text-meta-sm text-ink-60">Pegged to undisclosed trade basket</p>
          </div>
        </div>
        <p className="text-meta-sm text-ink-60 max-w-measure">
          Strategic takeaway: Because SAR and AED are anchored to the US dollar, remittance variations back to your home country (in Philippine Pesos, Indian Rupees, Kenyan Shillings, or Egyptian Pounds) are governed by how your home currency fluctuates against the US dollar.
        </p>
      </section>

      {/* The Deductions from Gross Pay */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2">
          <Receipt className="w-5 h-5 text-accent" />
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            Where Does Tax-Free Pay Go?
          </h2>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">1. Remittance Fees & FX Spreads</strong>
              <span className="text-meta-sm text-ink-60 tabular">2% – 5% of monthly transfer</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              International remittance houses (e.g. Al Rajhi Tahweel, Lulu Exchange, Western Union) charge flat transfer fees (typically 15 to 35 SAR/AED per transaction) plus a currency conversion spread of 1% to 3% below the interbank mid-market rate. Over a 2-year contract, FX spreads can absorb several thousand dollars of capital.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">2. Value-Added Tax (VAT)</strong>
              <span className="text-meta-sm text-ink-60 tabular">5% to 15%</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              While individual earned income is untaxed, consumption is taxed. Saudi Arabia imposes a 15% standard VAT on goods, services, groceries, dining, and mobile communications. The UAE imposes a 5% VAT. Expatriates spending significant proportions of their salary domestically pay indirect tax on daily purchases.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">3. Mandatory Professional & Licensing Expenses</strong>
              <span className="text-meta-sm text-ink-60 tabular">~500 – 1,500 SAR/AED annually</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Nurses are responsible for maintaining professional licensure (e.g. SCFHS classification in Saudi Arabia; DHA or DOH license in the UAE). Requirements include continuous professional development (CPD/CME) course fees, BLS/ACLS recertification, and malpractice insurance where not fully covered by the employer.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <div className="flex items-center justify-between">
              <strong className="text-body text-ink font-semibold">4. Routine Telecom & Connectivity</strong>
              <span className="text-meta-sm text-ink-60 tabular">200 – 400 SAR/AED monthly</span>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Local mobile voice and data packages (STC, Mobily, Zain, e&amp;, du) combined with residential Wi-Fi subscriptions in staff accommodation form an ongoing non-discretionary monthly expense.
            </p>
          </div>
        </div>
      </section>

      {/* The Lifestyle Trap */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2">
          <TrendingDown className="w-5 h-5 text-caution" />
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            Avoiding the &quot;Lifestyle Inflation&quot; Pitfall
          </h2>
        </div>
        <div className="bg-surface border border-line rounded-lg p-5 space-y-3 max-w-measure">
          <p className="text-body-sm text-ink-70 leading-relaxed">
            The most common financial mistake international nurses make during a Gulf stint is lifestyle inflation. Air-conditioned mega-malls, ride-hailing convenience, international dining, and consumer electronics can rapidly erode savings potential.
          </p>
          <div className="bg-paper-alt border border-line rounded-md p-4 space-y-2 text-body-sm text-ink-70">
            <strong className="text-ink font-semibold block">Prudent savings discipline:</strong>
            <ul className="list-disc list-inside space-y-1">
              <li>Commit to a fixed percentage monthly savings target (e.g. 50% of basic salary) transferred to a secure offshore or home-country savings account on payday.</li>
              <li>Utilize institutional accommodation and hospital staff shuttles instead of taking private ride-hail taxis for daily hospital commutes.</li>
              <li>Budget specifically for international exam fees (e.g. saving ~$1,500–$2,000 USD to fund the NCLEX-RN or English testing).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation Cross-Link */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Next: Cultural & Professional Adjustment
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            Navigating multi-national nursing hierarchies, communication norms, patient family dynamics, and resolving workplace issues.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/gulf/adjusting")}
            className="px-4 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors min-h-control"
          >
            Adjustment Guide
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
