import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ArrowRight, Briefcase, FileText, DollarSign, Users, Compass } from "lucide-react";

interface GulfHubProps {
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
      label: "Kingdom of Saudi Arabia Ministry of Human Resources — Labor Law Overview",
      url: "https://hrsd.gov.sa/en",
      checkedAt: "2026-10-10",
    },
    {
      label: "UAE Ministry of Human Resources and Emiratisation — Federal Decree-Law No. 33 of 2021",
      url: "https://www.mohre.gov.ae/en",
      checkedAt: "2026-10-10",
    },
    {
      label: "International Labour Organization (ILO) — General Principles & Operational Guidelines for Fair Recruitment",
      url: "https://www.ilo.org/global/topics/fair-recruitment/",
      checkedAt: "2026-10-10",
    },
  ],
};

const GULF_SECTIONS = [
  {
    path: "/gulf/the-work",
    title: "What the Job Is Actually Like",
    icon: Briefcase,
    description: "Realistic nurse-to-patient ratios, 12-hour rotating shift patterns, tertiary vs peripheral MOH facilities, and JCI electronic health record standards.",
  },
  {
    path: "/gulf/contracts",
    title: "Contract Literacy & Statutory Rights",
    icon: FileText,
    description: "Decoding basic salary vs total allowances, accommodation terms, end-of-service gratuity calculation, probation laws, and illegal passport retention.",
  },
  {
    path: "/gulf/money",
    title: "The Reality of Tax-Free Earnings",
    icon: DollarSign,
    description: "Why gross tax-free pay does not equal net savings. Remittance fees, currency peg stability (SAR/AED to USD), local VAT, and managing living costs.",
  },
  {
    path: "/gulf/adjusting",
    title: "Professional & Cultural Adjustment",
    icon: Users,
    description: "Navigating multi-national nursing hierarchies, communication norms, patient family dynamics, and institutional avenues for dispute resolution.",
  },
  {
    path: "/gulf/your-next-move",
    title: "Protecting Your Next Move (Australia, UK, NZ, CA)",
    icon: Compass,
    description: "How to use a Gulf contract as a stepping stone without damaging future international registration. Keeping home licenses active and securing service proofs.",
  },
];

export const GulfIndexPage: React.FC<GulfHubProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 font-sans">
      {/* Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <span className="text-eyebrow text-ink-60">Career Transition Guide</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Arabian Gulf</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Working in the Gulf: A Practical Guide for International Nurses
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          Hundreds of thousands of internationally qualified nurses work across Saudi Arabia, the United Arab Emirates, Qatar, Kuwait, and Oman. We examine what the job and contract are actually like, and how to protect your credentials for a future move.
        </p>
      </div>

      {/* Editorial Boundary Notice */}
      <CautionPanel title="Editorial scope: Information only, no recruitment or licensing assistance">
        <p className="space-y-2">
          <span>
            <strong>What we publish:</strong> We explain working conditions, statutory labor protections, contract clauses, and how to preserve your professional eligibility for later moves to Australia, the UK, New Zealand, or Canada.
          </span>
          <br className="my-1" />
          <span>
            <strong>What we do not publish:</strong> We do not publish licensing or registration processes (such as Prometric or DataFlow). We never list jobs, name individual employers, recommend recruitment agencies, or accept placement fees. We explain the rules and the reality of the work; we never recruit or place nurses.
          </span>
        </p>
      </CautionPanel>

      {/* Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GULF_SECTIONS.map((sec) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.path}
              className="bg-surface border border-line rounded-lg p-6 flex flex-col justify-between hover:border-line-strong transition-colors"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-md bg-accent-wash flex items-center justify-center text-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-heading-sm text-ink font-semibold">
                  {sec.title}
                </h2>
                <p className="text-body-sm text-ink-70 leading-relaxed">
                  {sec.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-line/60">
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate(sec.path)}
                  className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  <span>Read guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* The Stepping Stone Thesis */}
      <section className="bg-paper-alt border border-line rounded-lg p-6 sm:p-8 space-y-4 max-w-measure">
        <h2 className="font-serif text-heading-md text-ink font-semibold">
          The Gulf as a Career Stage
        </h2>
        <p className="text-body text-ink-70 leading-relaxed">
          For many nurses from the Philippines, India, Egypt, Jordan, and Kenya, a Gulf contract provides valuable acute clinical experience, exposure to tertiary medical technology, and the financial foundation to fund international registration exams such as the NCLEX-RN, OSCE, or English tests.
        </p>
        <p className="text-body text-ink-70 leading-relaxed">
          However, without deliberate planning, nurses can inadvertently jeopardize a future move. Regulators like the NMBA (Australia) and NMC (UK) strictly scrutinize continuous home registration, recency-of-practice hours, and verifiable institutional references. Every guide in this section is designed to help you navigate your current contract while keeping your future options uncompromised.
        </p>
      </section>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
