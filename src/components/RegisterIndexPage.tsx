import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { UpdateSignup } from "./UpdateSignup";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { DESTINATION_DATA } from "@/data/destinations";
import { ArrowRight, Landmark, ClipboardCheck, Clock } from "lucide-react";
import { UNREVIEWED } from "@/data/reviewers";

interface RegisterIndexPageProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-23",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "NMBA — Australia Outcomes-Based Assessment",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives/Outcomes-based-assessment.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMC UK — Joining the Register: Trained Outside the UK",
      url: "https://www.nmc.org.uk/registration/joining-the-register/register-nurse-midwife/",
      checkedAt: "2026-10-10",
    },
    {
      label: "NCNZ — New Zealand Internationally Qualified Nurses",
      url: "https://www.nursingcouncil.org.nz/IQN",
      checkedAt: "2026-10-10",
    },
    {
      label: "NNAS — National Nursing Assessment Service (Canada)",
      url: "https://www.nnas.ca/",
      checkedAt: "2026-10-10",
    },
  ],
};

export const RegisterIndexPage: React.FC<RegisterIndexPageProps> = ({ onNavigate }) => {
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
          <span className="text-eyebrow text-ink-60">Registration Guides</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">All Destinations</span>
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Where You Can Register as an Overseas Nurse
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          Seven destinations recognise internationally qualified nurses through a published registration route. Each guide sets out the regulator, the assessment, the examinations and the official fees — as the regulator publishes them, with the date each source was last checked.
        </p>
      </div>

      {/* Neutrality boundary */}
      <CautionPanel title="We publish criteria; we do not assess you">
        <p>
          These guides explain what each regulator requires. They do not tell you which destination you qualify for, rank one country against another, or predict an outcome for your circumstances. Only the regulator named on each page can determine your eligibility, and requirements change without notice — always verify against the primary source linked on the page before paying any fee.
        </p>
      </CautionPanel>

      {/* Destination cards */}
      <div className="space-y-5">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="font-serif text-heading-lg text-ink font-medium">
            Choose a destination
          </h2>
          <button
            type="button"
            onClick={() => handleNav("/compare")}
            className="text-body-sm font-semibold text-accent hover:text-accent-dark underline underline-offset-2 min-h-control inline-flex items-center gap-1.5"
          >
            <span>Compare all seven side by side</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {DESTINATION_DATA.map((d) => (
            <div
              key={d.path}
              className="bg-surface border border-line rounded-lg p-6 flex flex-col justify-between gap-6"
            >
              <div className="space-y-4 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-heading-sm text-ink font-semibold">
                    {d.country}
                  </h3>
                  <DepthLabel tier={d.tier} className="shrink-0 mt-0.5" />
                </div>

                <dl className="space-y-3 text-body-xs">
                  <div className="flex gap-2.5">
                    <Landmark className="w-4 h-4 text-ink-40 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="min-w-0">
                      <dt className="text-meta-sm text-ink-40">Regulator</dt>
                      <dd className="text-ink-80 font-medium">{d.regulator}</dd>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <ClipboardCheck className="w-4 h-4 text-ink-40 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="min-w-0">
                      <dt className="text-meta-sm text-ink-40">Cognitive examination</dt>
                      <dd className="text-ink-70">{d.cognitiveExam}</dd>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <Clock className="w-4 h-4 text-ink-40 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="min-w-0">
                      <dt className="text-meta-sm text-ink-40">Typical timeline</dt>
                      <dd className="text-ink-70 tabular">{d.typicalTimeline}</dd>
                    </div>
                  </div>
                </dl>

                <div className="pt-3 border-t border-line/60">
                  <span className="text-meta-sm text-ink-40 block">Published regulatory fees</span>
                  <span className="text-body-sm text-ink font-medium tabular">{d.publishedFees}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleNav(d.path)}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-md bg-paper-alt hover:bg-line/40 border border-line text-body-sm font-semibold text-accent transition-colors min-h-control"
              >
                <span>Read the {d.country} guide</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* What the depth labels mean */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 sm:p-7 space-y-4">
        <h2 className="font-serif text-heading-sm text-ink font-semibold">
          What the labels on each guide mean
        </h2>
        <p className="text-body-sm text-ink-70 max-w-measure">
          Every page states how far it has been checked. We publish the label even when it is unflattering, because a guide that looks authoritative while resting on an unverified source is worse than one that admits its limits.
        </p>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
          <div className="space-y-2">
            <dt><DepthLabel tier="full" /></dt>
            <dd className="text-body-xs text-ink-70">
              Checked line by line against the regulator&rsquo;s own published criteria by a named registered nurse holding current registration in that country.
            </dd>
          </div>
          <div className="space-y-2">
            <dt><DepthLabel tier="standard" /></dt>
            <dd className="text-body-xs text-ink-70">
              Checked against the regulator&rsquo;s published criteria, with every figure traced to a primary source and dated.
            </dd>
          </div>
          <div className="space-y-2">
            <dt><DepthLabel tier="overview" /></dt>
            <dd className="text-body-xs text-ink-70">
              Orientation only. The route is described at a high level and has not had a full source-by-source check. Verify everything against the regulator before acting.
            </dd>
          </div>
        </dl>
      </div>

      {/* Exams cross-link */}
      <div className="bg-surface border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1 min-w-0">
          <h2 className="font-serif text-heading-sm text-ink font-semibold">
            The examinations are shared across destinations
          </h2>
          <p className="text-body-sm text-ink-70 max-w-measure">
            NCLEX-RN serves the United States, Australia and Canada. The OSCE format is used in Australia, the United Kingdom and Ireland. Read the exam guides once rather than per country.
          </p>
        </div>
        <button
          type="button"
          onClick={() => handleNav("/exams")}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-ink text-paper hover:bg-ink-80 text-body-sm font-semibold transition-colors shrink-0 min-h-control"
        >
          <span>Examination guides</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <UpdateSignup onNavigate={onNavigate} />

      <PageFurniture data={furnitureData} />
    </div>
  );
};
