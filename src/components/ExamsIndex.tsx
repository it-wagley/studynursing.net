import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { ArrowRight, CheckCircle2, FileText, Globe, Stethoscope } from "lucide-react";
import { UNREVIEWED } from "@/data/reviewers";

interface ExamsIndexProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-10",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "NCSBN — NCLEX-RN Examination Overview",
      url: "https://www.ncsbn.org/nclex.page",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMBA — Outcomes-Based Assessment (OBA) for IQNMs",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives/Outcomes-based-assessment.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMC UK — Test of Competence 2021",
      url: "https://www.nmc.org.uk/registration/joining-the-register/toc/",
      checkedAt: "2026-10-10",
    },
  ],
};

export const ExamsIndex: React.FC<ExamsIndexProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-10 font-sans">
      {/* Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-eyebrow text-ink-60">Destination-Neutral Spine</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          International Nursing Examinations
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          The examinations required for international nursing registration are shared across destinations, not unique to one country. NCLEX-RN serves the United States, Australia, and Canada. The OSCE format tests practical competence in Australia, the United Kingdom, and New Zealand.
        </p>
      </div>

      {/* The 3 Core Exams */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* NCLEX-RN Card */}
        <div className="bg-surface border border-line rounded-lg p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-md bg-accent-wash text-accent-dark flex items-center justify-center">
              <FileText className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-meta text-ink-60 block font-medium">Cognitive Licensure Exam</span>
              <h2 className="font-serif text-heading-md text-ink font-semibold mt-1">
                NCLEX-RN
              </h2>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              The NextGen computer-adaptive test (CAT) measuring clinical judgment. Required by all 50 US State Boards, Australia (AHPRA OBA Part 1), and provincial nursing regulators in Canada.
            </p>
            <div className="pt-2 border-t border-line/60 space-y-1.5 text-meta-sm text-ink-60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>85–150 adaptive questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Administered by Pearson VUE worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Logit passing standard (not a %)</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleNav("/exams/nclex-rn")}
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-md bg-paper-alt hover:bg-line/40 border border-line text-body-sm font-semibold text-accent transition-colors min-h-control"
          >
            <span>Read NCLEX-RN Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* OSCE Card */}
        <div className="bg-surface border border-line rounded-lg p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-md bg-accent-wash text-accent-dark flex items-center justify-center">
              <Stethoscope className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-meta text-ink-60 block font-medium">Practical Clinical Stations</span>
              <h2 className="font-serif text-heading-md text-ink font-semibold mt-1">
                OSCE Assessments
              </h2>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Objective Structured Clinical Examinations evaluating hands-on patient assessment, aseptic technique, drug administration, and communication.
            </p>
            <div className="pt-2 border-t border-line/60 space-y-1.5 text-meta-sm text-ink-60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Australia: Adelaide Health Simulation (10 stations)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>UK: NMC Test of Competence (10 stations)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>New Zealand: NCNZ clinical assessment</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleNav("/exams/osce")}
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-md bg-paper-alt hover:bg-line/40 border border-line text-body-sm font-semibold text-accent transition-colors min-h-control"
          >
            <span>Read OSCE Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* English Language Tests Card */}
        <div className="bg-surface border border-line rounded-lg p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-md bg-accent-wash text-accent-dark flex items-center justify-center">
              <Globe className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <span className="text-meta text-ink-60 block font-medium">Standardized Benchmarks</span>
              <h2 className="font-serif text-heading-md text-ink font-semibold mt-1">
                English Language Tests
              </h2>
            </div>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Published minimum score requirements for IELTS Academic, OET Nursing, and PTE Academic across Australia (NMBA), the UK (NMC), and New Zealand (NCNZ).
            </p>
            <div className="pt-2 border-t border-line/60 space-y-1.5 text-meta-sm text-ink-60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>IELTS 7.0 / OET 350 (B) / PTE 65 comparisons</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Score clubbing (two sittings in 6 months)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Primary language education exemptions</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleNav("/exams/english")}
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-md bg-paper-alt hover:bg-line/40 border border-line text-body-sm font-semibold text-accent transition-colors min-h-control"
          >
            <span>Compare English Tests</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Free Practice Tools Link */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Prepare with free, ungated clinical tools
          </h3>
          <p className="text-body-sm text-ink-70 max-w-measure">
            Practice NextGen NCLEX unfolding case studies, med-math dosage calculations, and drug name translations without registering or creating an account.
          </p>
        </div>
        <button
          type="button"
          onClick={() => handleNav("/tools")}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-ink text-paper hover:bg-ink-80 text-body-sm font-semibold transition-colors shrink-0 min-h-control"
        >
          <span>Open Practice Tools</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
