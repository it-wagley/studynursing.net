import React from "react";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { UpdateSignup } from "./UpdateSignup";
import { ArrowRight, CheckCircle2, FileText, Calculator, Pill, BookOpen, ShieldCheck } from "lucide-react";

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="space-y-section font-sans">
      
      {/* 1. Hero Section */}
      <section className="pt-6 sm:pt-10 space-y-6">
        <div className="max-w-lead space-y-4">
          <div className="text-eyebrow text-accent font-bold uppercase tracking-eyebrow">
            Reference publication for overseas nurses
          </div>
          <h1 className="font-serif text-display-lg sm:text-display-xl text-ink font-normal leading-tight tracking-tight">
            How to register and practise as a nurse abroad.
          </h1>
          <p className="text-body-lg text-ink-70 leading-body">
            Independent, sourced criteria for internationally qualified nurses. We explain the official rules, compare requirements across destinations, and provide free exam practice. We do not place, recruit, or assess applicants.
          </p>
        </div>

        {/* Primary Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/compare"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/compare");
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-md font-semibold text-body-sm transition-colors min-h-button shadow-sm"
          >
            <span>Compare destinations</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="/tools"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/tools");
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-paper hover:bg-paper-alt text-ink border border-line-strong rounded-md font-semibold text-body-sm transition-colors min-h-button"
          >
            Practice tools
          </a>
        </div>
      </section>

      {/* 2. Trust Panel & Sourced Foundation */}
      <section className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-ink text-body-sm">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span>Primary sources only</span>
            </div>
            <p className="text-body-xs text-ink-60 leading-body">
              Factual claims are sourced to the regulator that published them: AHPRA, NMBA, NMC, NCNZ, SNB or NNAS. Never competitor blogs or restatements.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-ink text-body-sm">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span>Review status, stated plainly</span>
            </div>
            <p className="text-body-xs text-ink-60 leading-body">
              Every regulatory page states how far it has been checked. A page is credited to a named nurse only when one registered in that country has reviewed it, and says so plainly when none has yet.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-ink text-body-sm">
              <FileText className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span>Explain, never apply</span>
            </div>
            <p className="text-body-xs text-ink-60 leading-body">
              We publish official criteria. We do not interpret documents, predict outcomes, or tell you which pathway applies to your specific circumstance.
            </p>
          </div>

        </div>

        {/* Sourced Statistic */}
        <div className="pt-6 border-t border-line-soft flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-meta-sm">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-heading-md font-semibold text-ink tabular">
              1 in 5
            </span>
            <span className="text-ink-70">
              practising nurses in Australia and the United Kingdom received their initial qualification abroad.
            </span>
          </div>
          <span className="text-ink-40 text-meta-sm shrink-0">
            Source: WHO State of the World&apos;s Nursing Report & NMBA Annual Report 2025
          </span>
        </div>
      </section>

      {/* 3. Key Destination Pathways */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-line pb-4">
          <div>
            <div className="text-eyebrow text-ink-40">Registration pathways</div>
            <h2 className="font-serif text-heading-xl text-ink font-normal">
              Explore by destination
            </h2>
          </div>
          <a
            href="/compare"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/compare");
            }}
            className="text-accent hover:text-accent-dark font-semibold text-body-sm underline underline-offset-4"
          >
            Compare all requirements table →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Australia */}
          <div className="bg-surface border border-line rounded-lg p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-serif text-heading-md text-ink font-semibold">Australia</span>
                <DepthLabel tier="standard" />
              </div>
              <p className="text-body-xs text-ink-60 leading-body">
                Governed by the Nursing and Midwifery Board of Australia (NMBA) and AHPRA. Most overseas-trained nurses complete the Outcomes-Based Assessment (OBA), consisting of NCLEX-RN and a clinical OSCE.
              </p>
            </div>
            <div className="pt-3 border-t border-line-soft flex items-center justify-between text-meta-sm">
              <span className="text-ink-40">Reviewed quarterly</span>
              <a
                href="/register/australia"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("/register/australia");
                }}
                className="text-accent font-semibold hover:underline"
              >
                View guide →
              </a>
            </div>
          </div>

          {/* United Kingdom */}
          <div className="bg-surface border border-line rounded-lg p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-serif text-heading-md text-ink font-semibold">United Kingdom</span>
                <DepthLabel tier="standard" />
              </div>
              <p className="text-body-xs text-ink-60 leading-body">
                Governed by the Nursing and Midwifery Council (NMC). Requires a two-part Test of Competence: the computer-based CBT followed by an objective clinical examination (OSCE) sat in the UK.
              </p>
            </div>
            <div className="pt-3 border-t border-line-soft flex items-center justify-between text-meta-sm">
              <span className="text-ink-40">Reviewed 2026</span>
              <a
                href="/register/united-kingdom"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("/register/united-kingdom");
                }}
                className="text-accent font-semibold hover:underline"
              >
                View guide →
              </a>
            </div>
          </div>

          {/* New Zealand */}
          <div className="bg-surface border border-line rounded-lg p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-serif text-heading-md text-ink font-semibold">New Zealand</span>
                <DepthLabel tier="standard" />
              </div>
              <p className="text-body-xs text-ink-60 leading-body">
                Overseen by the Nursing Council of New Zealand (NCNZ). Requires verification through CGFNS, followed by theoretical examination and a Competence Assessment Programme (CAP).
              </p>
            </div>
            <div className="pt-3 border-t border-line-soft flex items-center justify-between text-meta-sm">
              <span className="text-caution-text font-medium">Under active policy review</span>
              <a
                href="/register/new-zealand"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("/register/new-zealand");
                }}
                className="text-accent font-semibold hover:underline"
              >
                View guide →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Time-Sensitive Caution Panel */}
      <CautionPanel
        title="Notice on policy changes and trans-Tasman recognition"
      >
        <p>
          The Nursing Council of New Zealand and Australian regulatory bodies are actively reviewing assessment rules for internationally qualified nurses. Guidance on using trans-Tasman mutual recognition as an alternate entry pathway is time-sensitive and subject to legislative amendment. Always verify current standards against published official notices before committing to application fees.
        </p>
      </CautionPanel>

      {/* 5. Destination-Neutral Practice Tools */}
      <section className="space-y-6">
        <div className="border-b border-line pb-4">
          <div className="text-eyebrow text-ink-40">Shared study tools</div>
          <h2 className="font-serif text-heading-xl text-ink font-normal">
            Free exam preparation
          </h2>
          <p className="text-body-sm text-ink-60 mt-1 max-w-lead">
            Ungated clinical math, unfolding case studies, and pharmacology translations. Free to use without accounts, email gating, or tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <a
            href="/tools/dosage"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/tools/dosage");
            }}
            className="bg-surface border border-line hover:border-accent rounded-lg p-5 space-y-3 transition-colors block group"
          >
            <Calculator className="w-5 h-5 text-accent" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-heading-sm text-ink group-hover:text-accent font-semibold">
                Dosage calculations
              </h3>
              <p className="text-body-xs text-ink-60 mt-1">
                Randomized IV rates, weight-based calculations and dimensional analysis.
              </p>
            </div>
          </a>

          <a
            href="/tools/nclex-cases"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/tools/nclex-cases");
            }}
            className="bg-surface border border-line hover:border-accent rounded-lg p-5 space-y-3 transition-colors block group"
          >
            <FileText className="w-5 h-5 text-accent" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-heading-sm text-ink group-hover:text-accent font-semibold">
                NCLEX case studies
              </h3>
              <p className="text-body-xs text-ink-60 mt-1">
                Unfolding EHR clinical judgment cases with rationale explanations.
              </p>
            </div>
          </a>

          <a
            href="/tools/drug-names"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/tools/drug-names");
            }}
            className="bg-surface border border-line hover:border-accent rounded-lg p-5 space-y-3 transition-colors block group"
          >
            <Pill className="w-5 h-5 text-accent" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-heading-sm text-ink group-hover:text-accent font-semibold">
                Drug name translations
              </h3>
              <p className="text-body-xs text-ink-60 mt-1">
                US generic and brand names cross-referenced with UK and Commonwealth equivalents.
              </p>
            </div>
          </a>

          <a
            href="/tools/clinical-reference"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/tools/clinical-reference");
            }}
            className="bg-surface border border-line hover:border-accent rounded-lg p-5 space-y-3 transition-colors block group"
          >
            <BookOpen className="w-5 h-5 text-accent" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-heading-sm text-ink group-hover:text-accent font-semibold">
                Pocket reference
              </h3>
              <p className="text-body-xs text-ink-60 mt-1">
                Emergency antidotes table and blood glucose unit converter (mmol/L ↔ mg/dL).
              </p>
            </div>
          </a>

        </div>
      </section>

      {/* 6. Working in the Gulf Feature (Different in Kind) */}
      <section className="bg-paper-alt border border-line rounded-lg p-6 sm:p-8 space-y-4">
        <div className="space-y-2">
          <div className="text-eyebrow text-ink-40 font-bold">Career stepping stone</div>
          <h2 className="font-serif text-heading-lg text-ink font-normal">
            Working as a nurse in the Gulf
          </h2>
          <p className="text-body text-ink-70 max-w-lead leading-body">
            We do not publish Gulf licensing processes or job listings. We explain what hospital practice is actually like, how to evaluate contract clauses before signing, and how to maintain documentation so a Gulf stint supports later registration elsewhere.
          </p>
        </div>

        <div className="pt-2 flex items-center gap-4">
          <a
            href="/gulf"
            onClick={(e) => {
              e.preventDefault();
              handleNav("/gulf");
            }}
            className="inline-flex items-center gap-1.5 text-accent hover:text-accent-dark font-semibold text-body-sm underline underline-offset-4"
          >
            <span>Read Gulf contract & practice guides</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* 7. Update signup — the only place the site asks for contact details */}
      <UpdateSignup onNavigate={onNavigate} />

    </div>
  );
};
