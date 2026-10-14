import React from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";

interface OsceExamGuideProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "full",
  reviewedAt: "2026-10-10",
  reviewer: {
    name: "Sarah Jenkins",
    country: "Australia",
    credential: "RN, MN",
  },
  sources: [
    {
      label: "NMBA — RN OSCE Guidelines for Candidates",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives/Outcomes-based-assessment/Objective-structured-clinical-examination.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "Adelaide Health Simulation — AHPRA RN OSCE Candidate Information",
      url: "https://health.adelaide.edu.au/simulation/ahpra",
      checkedAt: "2026-10-10",
    },
    {
      label: "NMC UK — Test of Competence 2021: OSCE Candidate Information",
      url: "https://www.nmc.org.uk/registration/joining-the-register/toc/toc-2021/osce/",
      checkedAt: "2026-10-10",
    },
  ],
};

export const OsceExamGuide: React.FC<OsceExamGuideProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 font-sans">
      {/* Breadcrumb & Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/exams")}
            className="hover:text-accent underline"
          >
            Exams
          </button>
          <span>/</span>
          <span className="text-ink">OSCE Practical Guide</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="full" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Objective Structured Clinical Examination (OSCE)
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          The OSCE is a face-to-face practical examination testing whether an internationally qualified nurse demonstrates clinical skills, communication, and patient safety equivalent to an entry-level registered nurse in the destination country.
        </p>
      </div>

      {/* Caution Notice */}
      <CautionPanel title="Practical simulation notice">
        <p>
          OSCEs cannot be taken online or remotely. Candidates must travel in person to the designated national testing centre (such as Adelaide Health Simulation in Australia or university test sites in the UK). You must hold a valid visitor or examination visa to sit the test.
        </p>
      </CautionPanel>

      {/* Comparison Grid */}
      <div className="space-y-4">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Comparing Major Nursing OSCEs
        </h2>
        <div className="overflow-x-auto border border-line rounded-lg bg-surface">
          <table className="w-full text-left border-collapse text-body-sm">
            <thead>
              <tr className="bg-paper-alt border-b border-line text-ink font-semibold">
                <th className="p-4">Feature</th>
                <th className="p-4">Australia (AHPRA / NMBA)</th>
                <th className="p-4">United Kingdom (NMC)</th>
                <th className="p-4">New Zealand (NCNZ)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-ink-70">
              <tr>
                <td className="p-4 font-medium text-ink">Exam Name</td>
                <td className="p-4">RN OSCE (OBA Part 2)</td>
                <td className="p-4">NMC Test of Competence (ToC 21)</td>
                <td className="p-4">Competence Assessment / OSCE</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-ink">Test Location</td>
                <td className="p-4">Adelaide Health Simulation (Adelaide, SA)</td>
                <td className="p-4">5 Authorized UK University Test Centres</td>
                <td className="p-4">Designated NZ polytechnics / clinical centers</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-ink">Number of Stations</td>
                <td className="p-4 tabular-nums">10 stations (8 min + 2 min reading per station)</td>
                <td className="p-4 tabular-nums">10 stations (4 APIE + 4 Clinical + 2 Professional)</td>
                <td className="p-4 tabular-nums">Varies by CAP provider or direct OSCE</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-ink">Official Published Fee</td>
                <td className="p-4 font-semibold text-ink tabular-nums">AUD $4,000</td>
                <td className="p-4 font-semibold text-ink tabular-nums">£794 GBP</td>
                <td className="p-4 font-semibold text-ink tabular-nums">NZD $3,000–$6,000 (CAP/OSCE)</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-ink">Prerequisite Exam</td>
                <td className="p-4">NCLEX-RN (OBA Part 1)</td>
                <td className="p-4">CBT (Computer Based Test, Pearson VUE)</td>
                <td className="p-4">NCNZ credential check or CAP admission</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-ink">Core Station Areas</td>
                <td className="p-4">Physiological assessment, IV priming, medication administration, ANTT wound care, ISBAR handover</td>
                <td className="p-4">APIE (Assessment, Planning, Implementation, Evaluation), BLS, aseptic technique, sharps disposal</td>
                <td className="p-4">Cultural safety, physical assessment, medication safety, documentation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section: Common Clinical Stations Tested */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Typical OSCE Clinical Stations
        </h2>
        <p className="text-body text-ink-70 max-w-measure leading-relaxed">
          While each national regulator updates station blueprints periodically, the core clinical capabilities evaluated remain consistent across jurisdictions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-measure">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-semibold text-body text-ink">1. Aseptic Non-Touch Technique (ANTT)</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Performing a sterile wound dressing or central line dressing change without contaminating key parts or key sites. Hand hygiene and glove changes are rigorously checked.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-semibold text-body text-ink">2. Medication Administration & Safety</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Verifying medication orders against patient ID bands, checking allergies, calculating correct dosages, confirming expiration dates, and explaining purpose to the patient.
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-semibold text-body text-ink">3. Physiological Assessment & Vital Signs</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Comprehensive patient assessment (e.g. respiratory distress, post-op vitals, Glasgow Coma Scale) and calculating an Early Warning Score (Track & Trigger / National Early Warning Score).
            </p>
          </div>

          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <h3 className="font-semibold text-body text-ink">4. Structured Handover (ISBAR / SBAR)</h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Delivering a clear verbal handover to a medical officer or oncoming shift using <strong>Introduction, Situation, Background, Assessment, Recommendation</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Preparation Reality Check */}
      <section className="space-y-4 pt-4 border-t border-line">
        <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-normal">
          Preparation Timelines & Practical Realities
        </h2>
        <div className="text-body text-ink-70 space-y-4 max-w-measure leading-relaxed">
          <p>
            The OSCE is often the most stressful barrier for overseas-trained nurses. While qualified nurses know clinical care intuitively, the examination requires performing standard operating procedures strictly according to the destination country’s national clinical protocols:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Preparation Window:</strong> Most successful candidates spend 6 to 12 weeks practicing hands-on physical mock stations with specialized clinical mannequins.
            </li>
            <li>
              <strong>Verbalization:</strong> Examiners cannot read your mind. You must verbalize your actions (e.g., <em>“I am inspecting the ampoule for clarity and expiry date”</em>) while performing the physical task.
            </li>
            <li>
              <strong>Time Pressure:</strong> Australia allows 8 minutes per station with 2 minutes reading time. Time management is crucial; running out of time before completing the required documentation is a frequent cause of station failure.
            </li>
            <li>
              <strong>Retakes:</strong> In Australia, candidates who fail 1 to 3 stations may be offered a supplementary sitting for those specific stations; failing more requires resitting the full 10-station exam.
            </li>
          </ul>
        </div>
      </section>

      {/* Related Tools Links */}
      <div className="bg-paper-alt border border-line rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Brush up on drug math & international terminology
          </h3>
          <p className="text-body-sm text-ink-70 mt-1">
            Safe medication administration in the OSCE requires flawless dosage calculations and fluency with local drug brand names.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/tools/dosage")}
            className="px-4 py-2.5 rounded-md bg-ink text-paper hover:bg-ink-80 text-body-sm font-semibold transition-colors min-h-control"
          >
            Dosage Math
          </button>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/tools/drug-names")}
            className="px-4 py-2.5 rounded-md bg-paper border border-line text-ink hover:bg-line/40 text-body-sm font-semibold transition-colors min-h-control"
          >
            Drug Names
          </button>
        </div>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
