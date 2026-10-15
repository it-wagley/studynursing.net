import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ArrowLeft, Users2, HeartHandshake, ShieldAlert } from "lucide-react";

interface GulfAdjustingPageProps {
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
      label: "Kingdom of Saudi Arabia — MHRSD Labor Dispute Resolution Procedure",
      url: "https://hrsd.gov.sa/en/labor-law",
      checkedAt: "2026-10-10",
    },
    {
      label: "UAE MOHRE — Individual Labor Dispute Settlement Regulations",
      url: "https://www.mohre.gov.ae/en/services/dispute-settlement.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "CBAHI — Patient Rights and Professional Ethics Standards",
      url: "https://cbahi.gov.sa/",
      checkedAt: "2026-10-10",
    },
  ],
};

export const GulfAdjustingPage: React.FC<GulfAdjustingPageProps> = ({ onNavigate }) => {
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
          <span className="text-eyebrow text-ink-60">Workplace Culture</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Adjusting</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Professional and Cultural Adjustment in the Gulf
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          How to thrive in multi-national clinical environments: communication tools, patient and family cultural norms, recognizing exploitative practices, and using official dispute resolution mechanisms.
        </p>
      </div>

      {/* Editorial Boundary Caution */}
      <CautionPanel title="Cultural and workplace guidance">
        <p>
          We do not characterize employers as &quot;good&quot; or &quot;bad&quot;. We provide practical guidance on navigating diverse hospital wards, adhering to statutory patient rights, and using published official labor dispute systems when issues arise.
        </p>
      </CautionPanel>

      {/* Multi-National Teams */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Users2 className="w-5 h-5 text-accent" />
            <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
              Navigating Multi-National Nursing Teams
            </h2>
          </div>
          <p className="text-body text-ink-70 max-w-measure leading-relaxed">
            A single hospital unit in Riyadh, Dubai, or Doha often employs nurses trained across ten or more countries (including India, the Philippines, Egypt, Jordan, South Africa, the UK, and Kenya). This diversity requires active communication adjustments:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-heading-sm text-ink font-semibold">Diverse Clinical Traditions</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Different countries train with varying degrees of physician deference or nursing autonomy. Standardized hospital clinical pathways and JCI protocols serve as the neutral arbiter. When practice standards clash, refer directly to the hospital&apos;s published clinical policies.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-serif text-heading-sm text-ink font-semibold">Structured Communication (ISBAR)</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Because English is spoken with multiple national accents, accredited hospitals mandate structured clinical communication: <strong>ISBAR</strong> (Identify, Situation, Background, Assessment, Recommendation). Structured handovers reduce misinterpretation between shift changes.
            </p>
          </div>
        </div>
      </section>

      {/* Patient & Family Dynamics */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-accent" />
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            Patient &amp; Family Care Culture
          </h2>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">Multi-Generational Family Presence</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              In Middle Eastern healthcare culture, illness is an event shared by the extended family. It is standard for multiple family members to remain at the bedside around the clock. Rather than viewing family members as an obstacle to workflow, high-performing nurses partner with the family spokesperson as an ally in patient care and comfort.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">Privacy, Modesty &amp; Gender Norms</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Observing bodily privacy (aurah) is paramount. Female patients must be attended by female nurses in obstetrics, gynecology, and female surgical wards. Male nurses are typically rostered to adult intensive care units, emergency departments, dialysis units, and operating rooms. Always ensure privacy curtains and appropriate draping are secured prior to physical assessments.
            </p>
          </div>
        </div>
      </section>

      {/* Identifying Exploitative Practices */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-caution" />
          <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
            Identifying Exploitation &amp; Official Dispute Avenues
          </h2>
        </div>

        <div className="space-y-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">Recognizing Unlawful Practices</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Be aware of actions that violate regional labor codes:
            </p>
            <ul className="list-disc list-inside text-body-sm text-ink-70 space-y-1.5 pt-1">
              <li>Demands to surrender your passport for &quot;safekeeping&quot; without your voluntary written request.</li>
              <li>Uncompensated mandatory overtime exceeding statutory weekly ceilings (48 hours).</li>
              <li>Refusal to issue an exit/re-entry visa for contracted annual leave.</li>
              <li>Threats to file fraudulent &quot;absconding&quot; (Huroob) reports to prevent a nurse from exercising statutory resignation notice.</li>
            </ul>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">Official Dispute Resolution Platforms</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              If an amicable resolution cannot be reached through the hospital Human Resources department, statutory escalation platforms exist:
            </p>
            <ul className="list-disc list-inside text-body-sm text-ink-70 space-y-1.5 pt-1">
              <li><strong>Saudi Arabia:</strong> File an individual labor claim via the <em>Qiwa</em> online portal or the Ministry of Human Resources customer care centre (19911). Cases proceed to the Amneh Amicable Settlement committee and, if unresolved, to the specialized Labor Courts.</li>
              <li><strong>United Arab Emirates:</strong> Submit an individual labor complaint via the <em>MOHRE</em> smartphone application or visit a certified <em>Twafouq</em> service centre for mediation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation Cross-Link */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Next: Protecting Your Next Career Move
          </h3>
          <p className="text-body-sm text-ink-70 mt-1 max-w-measure">
            How to document your practice hours and secure verifiable references before you resign, preserving your eligibility for Australia, the UK, NZ, or Canada.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/gulf/your-next-move")}
            className="px-4 py-2.5 rounded-md bg-accent text-white hover:bg-accent-dark text-body-sm font-semibold transition-colors min-h-control"
          >
            Next Move Guide
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
