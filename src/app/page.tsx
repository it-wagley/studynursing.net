"use client";

import React, { useState } from "react";
import { UtilityBar } from "@/components/UtilityBar";
import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/components/HomePage";
import { Footer } from "@/components/Footer";
import { DestinationCompare } from "@/components/DestinationCompare";
import { DosageCalcEngine } from "@/components/DosageCalcEngine";
import { NclexSimulator } from "@/components/NclexSimulator";
import { PharmacologyCatalog } from "@/components/PharmacologyCatalog";
import { ClinicalReferenceHub } from "@/components/ClinicalReferenceHub";
import { ExamsIndex } from "@/components/ExamsIndex";
import { NclexExamGuide } from "@/components/NclexExamGuide";
import { OsceExamGuide } from "@/components/OsceExamGuide";
import { EnglishExamGuide } from "@/components/EnglishExamGuide";
import { AustraliaRegisterPage } from "@/components/AustraliaRegisterPage";
import { AustraliaPathwaysPage } from "@/components/AustraliaPathwaysPage";
import { UkRegisterPage } from "@/components/UkRegisterPage";
import { NewZealandRegisterPage } from "@/components/NewZealandRegisterPage";
import { SingaporeRegisterPage } from "@/components/SingaporeRegisterPage";
import { CanadaRegisterPage } from "@/components/CanadaRegisterPage";
import { IrelandRegisterPage } from "@/components/IrelandRegisterPage";
import { UsRegisterPage } from "@/components/UsRegisterPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>("/");

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    // 1. Home
    if (currentPath === "/") {
      return <HomePage onNavigate={handleNavigate} />;
    }

    // 2. Compare Destinations (Step 7)
    if (currentPath === "/compare") {
      return <DestinationCompare onNavigate={handleNavigate} />;
    }

    // 3. Exam Spine Routes (Step 5)
    if (currentPath === "/exams") {
      return <ExamsIndex onNavigate={handleNavigate} />;
    }
    if (currentPath === "/exams/nclex-rn") {
      return <NclexExamGuide onNavigate={handleNavigate} />;
    }
    if (currentPath === "/exams/osce") {
      return <OsceExamGuide onNavigate={handleNavigate} />;
    }
    if (currentPath === "/exams/english") {
      return <EnglishExamGuide onNavigate={handleNavigate} />;
    }

    // 4. Registration Destination Guides (Step 6 & 8)
    if (currentPath === "/register" || currentPath === "/register/australia") {
      return <AustraliaRegisterPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/register/australia/pathways") {
      return <AustraliaPathwaysPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/register/united-kingdom") {
      return <UkRegisterPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/register/new-zealand") {
      return <NewZealandRegisterPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/register/singapore") {
      return <SingaporeRegisterPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/register/canada") {
      return <CanadaRegisterPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/register/ireland") {
      return <IrelandRegisterPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/register/united-states") {
      return <UsRegisterPage onNavigate={handleNavigate} />;
    }

    // 5. Practice Tools (Step 4 keepers)
    if (currentPath === "/tools" || currentPath === "/tools/dosage") {
      return (
        <div className="space-y-6">
          <div className="border-b border-line pb-4">
            <span className="text-eyebrow text-ink-60">Practice Tool</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              Dosage Calculation Practice
            </h1>
            <p className="text-body-sm text-ink-70 mt-1">
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
            <span className="text-eyebrow text-ink-60">Practice Tool</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              NextGen NCLEX Unfolding Case Simulator
            </h1>
            <p className="text-body-sm text-ink-70 mt-1">
              Interactive electronic health record (EHR) charts evaluating clinical judgment across multiple patient scenarios.
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
            <span className="text-eyebrow text-ink-60">Practice Tool</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              US ↔ Commonwealth Drug Name Cross-Reference
            </h1>
            <p className="text-body-sm text-ink-70 mt-1">
              Translating pharmacology nomenclature between US FDA standards and Commonwealth (TGA / BNF) nursing examinations.
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
            <span className="text-eyebrow text-ink-60">Practice Tool</span>
            <h1 className="font-serif text-display-md text-ink font-normal mt-1">
              Clinical Reference & Conversions Hub
            </h1>
            <p className="text-body-sm text-ink-70 mt-1">
              Emergency antidotes, international laboratory reference ranges, and infection control isolation standards.
            </p>
          </div>
          <ClinicalReferenceHub />
        </div>
      );
    }

    // Default Fallback
    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-sans transition-colors">
      {/* 1. Persistent Top Utility Bar */}
      <UtilityBar />

      {/* 2. Primary 5-Item Navigation */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* 3. Main Content Container */}
      <main id="main" className="flex-1 max-w-container mx-auto w-full px-container-sm sm:px-container py-section-sm">
        {renderContent()}
      </main>

      {/* 4. Reference Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
