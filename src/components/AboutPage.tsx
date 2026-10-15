import React from "react";
import { CautionPanel } from "./CautionPanel";
import { ShieldCheck, BookOpen, Scale, FileText, CheckCircle2 } from "lucide-react";

interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 font-sans max-w-measure mx-auto">
      {/* Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <span className="text-eyebrow text-ink-60">About StudyNursing.net</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Editorial Charter</span>
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          What We Are and What We Are Not
        </h1>
        <p className="text-body-lg text-ink-70 leading-relaxed">
          StudyNursing.net is an independent reference publication and exam preparation hub for internationally qualified nurses. We explain official regulatory rules, document published standards, and provide free clinical tools.
        </p>
      </div>

      {/* The Core Distinction Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface border border-line rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-ink font-semibold">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
            <h2 className="font-serif text-heading-sm">What We Are</h2>
          </div>
          <ul className="space-y-2.5 text-body-sm text-ink-70 list-disc list-inside">
            <li>An independent publisher of primary-source regulatory information.</li>
            <li>A destination-neutral comparator of nursing assessment frameworks, official fees, and timelines.</li>
            <li>A provider of free, ungated clinical calculation, drug nomenclature, and exam study tools.</li>
            <li>A source of objective guidance on working conditions in the Arabian Gulf.</li>
          </ul>
        </div>

        <div className="bg-surface border border-line rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2 text-ink font-semibold">
            <ShieldCheck className="w-5 h-5 text-caution shrink-0" />
            <h2 className="font-serif text-heading-sm">What We Are Not</h2>
          </div>
          <ul className="space-y-2.5 text-body-sm text-ink-70 list-disc list-inside">
            <li>We are not a recruitment agency and we do not list jobs or place nurses with employers.</li>
            <li>We are not a migration agency or immigration law firm.</li>
            <li>We are not an education broker charging student placement commissions.</li>
            <li>We do not assess individual eligibility, evaluate qualifications, or review documents.</li>
          </ul>
        </div>
      </div>

      {/* The One Rule */}
      <section className="bg-paper-alt border border-line rounded-lg p-6 sm:p-7 space-y-3">
        <div className="flex items-center gap-2 text-ink font-semibold">
          <Scale className="w-5 h-5 text-accent shrink-0" />
          <h2 className="font-serif text-heading-md">The One Rule: Explain the Rule, Never Apply It to a Person</h2>
        </div>
        <p className="text-body-sm text-ink-70 leading-relaxed">
          Immigration and health regulatory frameworks around the world draw a sharp legal line between providing publicly available information and providing unlicensed migration assistance.
        </p>
        <p className="text-body-sm text-ink-70 leading-relaxed">
          Under New Zealand&apos;s <em>Immigration Advisers Licensing Act 2007</em> (which applies extraterritorially to offshore publishers) and Australian migration practice, publicly available information may be explained freely, as long as it is not interpreted or applied to an individual&apos;s specific personal circumstances.
        </p>
        <p className="text-body-sm text-ink-70 leading-relaxed">
          Therefore, StudyNursing.net publishes verified criteria, official fee schedules, and registration stages. We will never tell you &quot;you qualify for this visa&quot;, &quot;you should choose this pathway&quot;, or assess your personal CV.
        </p>
      </section>

      {/* Sourcing and Review Standards */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2 text-ink">
          <FileText className="w-5 h-5 text-accent shrink-0" />
          <h2 className="font-serif text-heading-md">Sourcing &amp; Clinical Review Standards</h2>
        </div>
        <p className="text-body-sm text-ink-70 leading-relaxed">
          Every regulatory claim on this site is traceable to an official primary source—such as AHPRA, the NMBA, the NMC UK, the Nursing Council of New Zealand, or the Singapore Nursing Board. We never cite secondary blogs, recruiter marketing materials, or unverified claims.
        </p>
        <p className="text-body-sm text-ink-70 leading-relaxed">
          Every guide page under our registration and Gulf sections displays its last-reviewed date, its primary source citations with direct links, and the credentials of the registered nurse who reviewed the content. Regulatory pages are reviewed on a structured schedule to maintain accuracy.
        </p>
      </section>

      {/* Commercial Independence */}
      <section className="space-y-4 pt-4 border-t border-line">
        <div className="flex items-center gap-2 text-ink">
          <BookOpen className="w-5 h-5 text-accent shrink-0" />
          <h2 className="font-serif text-heading-md">Commercial Independence</h2>
        </div>
        <p className="text-body-sm text-ink-70 leading-relaxed">
          Our destination comparison table is neutral because we take no placement revenue or employer commissions from any country or health board. Where commercial relationships exist—such as affiliate study preparation textbooks or postgraduate university placements—they are transparently disclosed on the relevant page.
        </p>
      </section>

      {/* Consumer Protection Notice */}
      <CautionPanel title="Consumer protection advisory">
        <p>
          Before engaging any commercial intermediary, migration agent, or education counselor, verify their active standing on the official national statutory register: Australia (OMARA), New Zealand (IAA), or the United Kingdom (OISC). Never pay recruitment fees for healthcare employment.
        </p>
      </CautionPanel>

      {/* Cross-Link */}
      <div className="pt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("/sources")}
          className="text-body-sm font-semibold text-accent hover:text-accent-dark underline"
        >
          View our primary sources directory →
        </button>
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("/compare")}
          className="text-body-sm font-semibold text-ink-70 hover:text-ink underline"
        >
          Compare destination pathways →
        </button>
      </div>
    </div>
  );
};
