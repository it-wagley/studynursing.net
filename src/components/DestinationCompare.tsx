import React, { useState } from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ArrowRight, Filter } from "lucide-react";
import { UNREVIEWED } from "@/data/reviewers";
import { DESTINATION_DATA } from "@/data/destinations";

interface DestinationCompareProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-10",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "NMBA — Australia Outcomes-Based Assessment",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives/Outcomes-based-assessment.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMC UK — Test of Competence 2021",
      url: "https://www.nmc.org.uk/registration/joining-the-register/toc/",
      checkedAt: "2026-10-10",
    },
    {
      label: "NCNZ — New Zealand Internationally Qualified Nurses",
      url: "https://www.nursingcouncil.org.nz/IQN",
      checkedAt: "2026-10-10",
    },
    {
      label: "SNB — Singapore Nursing Board Registration Guidelines",
      url: "https://www.healthprofessionals.gov.sg/snb",
      checkedAt: "2026-10-10",
    },
    {
      label: "NNAS — National Nursing Assessment Service (Canada)",
      url: "https://www.nnas.ca/",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMBI — Nursing and Midwifery Board of Ireland Overseas Applications",
      url: "https://www.nmbi.ie/Registration/Trained-outside-Ireland",
      checkedAt: "2026-10-10",
    },
    {
      label: "NCSBN — United States Licensure Requirements for Foreign Nurses",
      url: "https://www.ncsbn.org/licensure.page",
      checkedAt: "2026-10-10",
    },
  ],
};


export const DestinationCompare: React.FC<DestinationCompareProps> = ({ onNavigate }) => {
  const [activeHighlight, setActiveHighlight] = useState<string>("all");

  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-10 font-sans">
      {/* Breadcrumb & Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <span className="text-eyebrow text-ink-60">Comparative Reference</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">All Destinations</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Compare International Registration Pathways
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          A neutral, side-by-side comparison of regulatory authorities, mandatory examinations, published fees, and official timelines for internationally qualified registered nurses across seven key jurisdictions.
        </p>
      </div>

      {/* Mandatory Caution Panel: Neutrality Rule */}
      <CautionPanel
        title="Comparing published criteria, not personal fit"
      >
        <p>
          This table compares published regulatory standards, testing formats, and official government fees. It does not rank destinations, calculate migration points, or recommend which country you should choose. Costs reflect published regulatory fees only and do not include airfare, accommodation, visa application charges, or relocation expenses.
        </p>
      </CautionPanel>

      {/* Focus Filters Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-paper-alt border border-line rounded-lg p-4">
        <div className="flex items-center gap-2 text-body-xs font-semibold text-ink">
          <Filter className="w-4 h-4 text-accent" aria-hidden="true" />
          <span>Table View Filter:</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-body-xs">
          <button
            type="button"
            onClick={() => setActiveHighlight("all")}
            className={`px-3 py-1.5 rounded-sm border transition-colors min-h-control ${
              activeHighlight === "all"
                ? "bg-accent text-white font-semibold border-accent"
                : "bg-surface text-ink-70 border-line hover:bg-paper"
            }`}
          >
            All Columns
          </button>
          <button
            type="button"
            onClick={() => setActiveHighlight("exams")}
            className={`px-3 py-1.5 rounded-sm border transition-colors min-h-control ${
              activeHighlight === "exams"
                ? "bg-accent text-white font-semibold border-accent"
                : "bg-surface text-ink-70 border-line hover:bg-paper"
            }`}
          >
            Exams Required
          </button>
          <button
            type="button"
            onClick={() => setActiveHighlight("costs")}
            className={`px-3 py-1.5 rounded-sm border transition-colors min-h-control ${
              activeHighlight === "costs"
                ? "bg-accent text-white font-semibold border-accent"
                : "bg-surface text-ink-70 border-line hover:bg-paper"
            }`}
          >
            Fees & Timeline
          </button>
          <button
            type="button"
            onClick={() => setActiveHighlight("english")}
            className={`px-3 py-1.5 rounded-sm border transition-colors min-h-control ${
              activeHighlight === "english"
                ? "bg-accent text-white font-semibold border-accent"
                : "bg-surface text-ink-70 border-line hover:bg-paper"
            }`}
          >
            English Standards
          </button>
        </div>
      </div>

      {/* Responsive Comparison Table */}
      <div className="overflow-x-auto border border-line rounded-lg bg-surface shadow-xs">
        <table className="w-full text-left border-collapse text-body-xs min-w-[980px]">
          <thead>
            <tr className="bg-paper-alt border-b border-line text-ink font-semibold">
              <th scope="col" className="p-4 w-44 sticky left-0 bg-paper-alt z-10 border-r border-line shadow-xs">
                Destination & Tier
              </th>
              <th scope="col" className="p-4 w-52">
                Regulator & Model
              </th>
              {(activeHighlight === "all" || activeHighlight === "exams") && (
                <>
                  <th scope="col" className="p-4 w-56">
                    Cognitive Examination
                  </th>
                  <th scope="col" className="p-4 w-56">
                    Practical Examination
                  </th>
                </>
              )}
              {(activeHighlight === "all" || activeHighlight === "english") && (
                <th scope="col" className="p-4 w-60">
                  English Language Standard
                </th>
              )}
              {(activeHighlight === "all" || activeHighlight === "costs") && (
                <>
                  <th scope="col" className="p-4 w-60">
                    Published Regulatory Fees
                  </th>
                  <th scope="col" className="p-4 w-48">
                    Typical Stated Timeline
                  </th>
                </>
              )}
              <th scope="col" className="p-4 w-52">
                Recency Requirement
              </th>
              <th scope="col" className="p-4 w-28 text-right">
                Guide Link
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/60 text-ink-70 leading-relaxed">
            {DESTINATION_DATA.map((row) => (
              <tr key={row.country} className="hover:bg-paper-alt/40 transition-colors">
                
                {/* Destination Sticky Column */}
                <th
                  scope="row"
                  className="p-4 font-serif font-bold text-ink sticky left-0 bg-surface z-10 border-r border-line hover:bg-paper-alt/40"
                >
                  <div className="text-body font-semibold text-ink">{row.country}</div>
                  <div className="mt-1">
                    <DepthLabel tier={row.tier} />
                  </div>
                </th>

                {/* Regulator */}
                <td className="p-4">
                  <strong className="text-ink block">{row.regulator}</strong>
                  <span className="text-meta-sm text-ink-60 block mt-1">{row.primaryAssessment}</span>
                </td>

                {/* Cognitive Exam */}
                {(activeHighlight === "all" || activeHighlight === "exams") && (
                  <td className="p-4">
                    {row.cognitiveExam}
                  </td>
                )}

                {/* Practical Exam */}
                {(activeHighlight === "all" || activeHighlight === "exams") && (
                  <td className="p-4">
                    {row.practicalExam}
                  </td>
                )}

                {/* English Standard */}
                {(activeHighlight === "all" || activeHighlight === "english") && (
                  <td className="p-4">
                    {row.englishBenchmark}
                  </td>
                )}

                {/* Published Fees */}
                {(activeHighlight === "all" || activeHighlight === "costs") && (
                  <td className="p-4 tabular text-ink font-medium">
                    {row.publishedFees}
                  </td>
                )}

                {/* Typical Timeline */}
                {(activeHighlight === "all" || activeHighlight === "costs") && (
                  <td className="p-4 tabular text-ink font-medium">
                    {row.typicalTimeline}
                  </td>
                )}

                {/* Recency Standard */}
                <td className="p-4 text-meta-sm">
                  {row.recencyStandard}
                </td>

                {/* Action Link */}
                <td className="p-4 text-right">
                  {row.path === "/register/australia" ? (
                    <button
                      type="button"
                      onClick={() => handleNav(row.path)}
                      className="inline-flex items-center gap-1 text-accent hover:underline font-semibold text-meta min-h-control"
                    >
                      <span>Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  ) : (
                    <span className="text-meta-sm text-ink-40">
                      Overview (Step 8)
                    </span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Clarification Band: The Three Questions */}
      <section className="bg-paper-alt border border-line rounded-lg p-6 sm:p-7 space-y-3">
        <h2 className="font-serif text-heading-sm text-ink font-semibold">
          How to read this comparison table
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-body-sm text-ink-70 leading-relaxed">
          <div>
            <strong className="text-ink block">1. Sourced per cell</strong>
            Every requirement, score, fee, and timeline is extracted directly from the published policies of the respective regulatory authorities listed in the sources below.
          </div>
          <div>
            <strong className="text-ink block">2. No ranking or scoring</strong>
            We never rank destinations or publish &quot;best for&quot; conclusions. Factors like family ties, language familiarity, and registration costs differ for every nurse.
          </div>
          <div>
            <strong className="text-ink block">3. Registration vs Migration</strong>
            Holding registration credentials makes you eligible to practice as a nurse; it does not automatically grant a work visa or permanent residency in any country.
          </div>
        </div>
      </section>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
