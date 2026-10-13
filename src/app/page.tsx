"use client";

import React, { useState } from "react";
import { UtilityBar } from "@/components/UtilityBar";
import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/components/HomePage";
import { Footer } from "@/components/Footer";
import { DosageCalcEngine } from "@/components/DosageCalcEngine";
import { NclexSimulator } from "@/components/NclexSimulator";
import { PharmacologyCatalog } from "@/components/PharmacologyCatalog";
import { ClinicalReferenceHub } from "@/components/ClinicalReferenceHub";
import { StudyVault } from "@/components/StudyVault";
import { UniversityDirectory } from "@/components/UniversityDirectory";
import { CautionPanel } from "@/components/CautionPanel";
import { PageFurniture } from "@/components/PageFurniture";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>("/");

  const renderContent = () => {
    // 1. Home
    if (currentPath === "/") {
      return <HomePage onNavigate={setCurrentPath} />;
    }

    // 2. Practice tools
    if (currentPath === "/tools" || currentPath === "/tools/dosage") {
      return (
        <div className="space-y-6">
          <div className="border-b border-line pb-4">
            <span className="text-eyebrow text-ink-40">Practice Tool</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              Dosage Calculation Practice
            </h1>
            <p className="text-body-sm text-ink-60 mt-1">
              Free, ungated clinical math problems. Practice with dimensional analysis and formula verification. Answers are never scored, stored, or reported.
            </p>
          </div>
          <DosageCalcEngine />
        </div>
      );
    }

    if (currentPath === "/tools/nclex-cases") {
      return (
        <div className="space-y-6">
          <div className="border-b border-line pb-4">
            <span className="text-eyebrow text-ink-40">Practice Tool</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              NextGen NCLEX Clinical Cases
            </h1>
            <p className="text-body-sm text-ink-60 mt-1">
              Unfolding patient chart scenarios with clinical judgment questions and complete rationales.
            </p>
          </div>
          <NclexSimulator />
        </div>
      );
    }

    if (currentPath === "/tools/drug-names") {
      return (
        <div className="space-y-6">
          <div className="border-b border-line pb-4">
            <span className="text-eyebrow text-ink-40">Practice Tool</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              US ↔ Commonwealth Drug Names
            </h1>
            <p className="text-body-sm text-ink-60 mt-1">
              High-yield board pharmacology reference comparing US trade/generic names with Australian, UK, and Commonwealth equivalents.
            </p>
          </div>
          <PharmacologyCatalog />
        </div>
      );
    }

    if (currentPath === "/tools/clinical-reference") {
      return (
        <div className="space-y-6">
          <div className="border-b border-line pb-4">
            <span className="text-eyebrow text-ink-40">Practice Tool</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              Clinical Pocket Reference
            </h1>
            <p className="text-body-sm text-ink-60 mt-1">
              Emergency toxicological antidotes and blood glucose unit converter (mmol/L ↔ mg/dL).
            </p>
          </div>
          <ClinicalReferenceHub />
        </div>
      );
    }

    if (currentPath === "/tools/downloads") {
      return (
        <div className="space-y-6">
          <div className="border-b border-line pb-4">
            <span className="text-eyebrow text-ink-40">Resources</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              Formula Sheets & Checklists
            </h1>
            <p className="text-body-sm text-ink-60 mt-1">
              Free printable reference guides for dosage calculations and registration document preparation.
            </p>
          </div>
          <StudyVault />
        </div>
      );
    }

    // 3. Study / Bridging options
    if (currentPath === "/study") {
      return (
        <div className="space-y-6">
          <div className="border-b border-line pb-4">
            <span className="text-eyebrow text-ink-40">Postgraduate & Bridging</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              Nursing Study Options for Qualified Nurses
            </h1>
            <p className="text-body-sm text-ink-60 mt-1">
              Accredited Master of Nursing (Graduate Entry), conversion degrees, and bridging programmes for internationally qualified nurses.
            </p>
          </div>
          <UniversityDirectory onOpenLeadModal={() => {}} />
        </div>
      );
    }

    // 4. Register Australia (Full Tier Sample)
    if (currentPath === "/register/australia") {
      return (
        <article className="space-y-8 max-w-measure">
          <header className="space-y-3">
            <span className="text-eyebrow text-accent font-bold">Destination Guide</span>
            <h1 className="font-serif text-display-lg text-ink font-normal leading-tight">
              Registering as a nurse in Australia
            </h1>
            <p className="text-body-lg text-ink-70 leading-body">
              How the Nursing and Midwifery Board of Australia (NMBA) and AHPRA assess internationally qualified nurses and midwives (IQNMs).
            </p>

            <PageFurniture
              data={{
                tier: "full",
                reviewedAt: "2026-10-02",
                reviewer: {
                  name: "Sarah Jenkins",
                  country: "Australia",
                  credential: "RN, MNSc",
                },
                sources: [
                  {
                    label: "NMBA registration standard for international qualification assessment",
                    url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/International.aspx",
                    checkedAt: "2026-10-02",
                  },
                  {
                    label: "AHPRA Outcomes-Based Assessment (OBA) framework",
                    url: "https://www.nursingmidwiferyboard.gov.au/codes-guidelines-statements/faq/transition-to-a-new-assessment-model-for-internationally-qualified-nurses-and-midwives.aspx",
                    checkedAt: "2026-10-02",
                  },
                ],
              }}
            />
          </header>

          <CautionPanel title="This page does not assess your qualifications">
            <p>
              StudyNursing.net is an independent informational publisher. We explain published criteria from the NMBA and AHPRA. We do not assess your documents, verify qualifications, or guarantee pathway classification. Only the NMBA can issue a registration determination.
            </p>
          </CautionPanel>

          <div className="prose prose-neutral text-body text-ink-80 space-y-5 leading-article">
            <h2 className="font-serif text-heading-lg text-ink font-semibold mt-6">
              The Outcomes-Based Assessment (OBA) model
            </h2>
            <p>
              Since 2020, internationally qualified nurses whose qualification does not meet criteria for direct recognition undergo the Outcomes-Based Assessment (OBA) pathway.
            </p>
            <p>
              The OBA process consists of two stages:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Stage 1 (Cognitive Assessment):</strong> The Next Generation NCLEX-RN, a computer-adaptive theory examination testing clinical judgment.
              </li>
              <li>
                <strong>Stage 2 (Behavioural Assessment):</strong> The Objective Structured Clinical Examination (OSCE), administered in person in Adelaide, South Australia.
              </li>
            </ol>
            <p>
              Before sitting either exam, candidates complete the NMBA Self-Check online and submit required identification and qualification documents to AHPRA.
            </p>
          </div>

          <section id="sources" className="pt-8 border-t border-line space-y-3">
            <h3 className="font-serif text-heading-sm text-ink font-semibold">
              Primary official sources
            </h3>
            <ul className="space-y-2 text-body-xs text-ink-70 list-none p-0">
              <li className="flex items-baseline gap-2">
                <span className="text-accent" aria-hidden="true">→</span>
                <a
                  href="https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/International.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  NMBA International Nursing Registration Portal (AHPRA)
                </a>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent" aria-hidden="true">→</span>
                <a
                  href="https://www.nursingmidwiferyboard.gov.au/codes-guidelines-statements/faq/transition-to-a-new-assessment-model-for-internationally-qualified-nurses-and-midwives.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  NMBA OBA FAQs & Transition Framework
                </a>
              </li>
            </ul>
          </section>
        </article>
      );
    }

    // 5. Default Fallback / Compare Page
    return (
      <div className="space-y-6">
        <div className="border-b border-line pb-4">
          <span className="text-eyebrow text-ink-40">Destination Comparison</span>
          <h1 className="font-serif text-display-md text-ink font-normal mt-1">
            Compare Destination Requirements
          </h1>
          <p className="text-body-sm text-ink-60 mt-1 max-w-lead">
            Factual comparison of published examination, language, and clinical assessment standards across major destinations. We do not score, rank, or recommend any destination.
          </p>
        </div>

        <div className="overflow-x-auto border border-line rounded-lg bg-surface">
          <table className="w-full text-left text-body-xs text-ink-70 border-collapse">
            <thead className="bg-paper-alt border-b border-line text-label text-ink-60">
              <tr>
                <th scope="col" className="p-4 font-bold">Destination</th>
                <th scope="col" className="p-4 font-bold">Regulator</th>
                <th scope="col" className="p-4 font-bold">Assessment model</th>
                <th scope="col" className="p-4 font-bold">Theory exam</th>
                <th scope="col" className="p-4 font-bold">Practical exam</th>
                <th scope="col" className="p-4 font-bold">Language standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line-soft">
              <tr>
                <th scope="row" className="p-4 font-semibold text-ink">Australia</th>
                <td className="p-4">NMBA / AHPRA</td>
                <td className="p-4">Outcomes-Based Assessment (OBA)</td>
                <td className="p-4">NCLEX-RN</td>
                <td className="p-4">OSCE (Adelaide)</td>
                <td className="p-4">IELTS 7.0 / OET B / PTE 65</td>
              </tr>
              <tr>
                <th scope="row" className="p-4 font-semibold text-ink">United Kingdom</th>
                <td className="p-4">NMC</td>
                <td className="p-4">Test of Competence (ToC)</td>
                <td className="p-4">CBT</td>
                <td className="p-4">OSCE (UK centres)</td>
                <td className="p-4">IELTS 7.0 (writing 6.5) / OET B</td>
              </tr>
              <tr>
                <th scope="row" className="p-4 font-semibold text-ink">New Zealand</th>
                <td className="p-4">NCNZ</td>
                <td className="p-4">Competence Assessment (CAP / OSCE)</td>
                <td className="p-4">Theory exam</td>
                <td className="p-4">Clinical OSCE or CAP</td>
                <td className="p-4">IELTS 7.0 / OET B</td>
              </tr>
              <tr>
                <th scope="row" className="p-4 font-semibold text-ink">United States</th>
                <td className="p-4">State Boards / CGFNS</td>
                <td className="p-4">Credential evaluation + NCLEX</td>
                <td className="p-4">NCLEX-RN</td>
                <td className="p-4">None (State-specific)</td>
                <td className="p-4">TOEFL iBT / IELTS (State-specific)</td>
              </tr>
              <tr>
                <th scope="row" className="p-4 font-semibold text-ink">Canada</th>
                <td className="p-4">NNAS + Provincial Colleges</td>
                <td className="p-4">Advisory report + Substantially Equivalent</td>
                <td className="p-4">NCLEX-RN / REx-PN</td>
                <td className="p-4">Substantial equivalence assessment (SEC)</td>
                <td className="p-4">IELTS / CELBAN (Provincial)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-sans">
      <UtilityBar />
      <Navbar currentPath={currentPath} onNavigate={setCurrentPath} />
      <main id="main" className="flex-1 max-w-container w-full mx-auto px-container-sm sm:px-container py-section-sm">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPath} />
    </div>
  );
}
