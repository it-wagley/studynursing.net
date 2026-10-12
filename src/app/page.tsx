"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NursePassportBuilder } from "@/components/NursePassportBuilder";
import { UniversityDirectory } from "@/components/UniversityDirectory";
import { PharmacologyCatalog } from "@/components/PharmacologyCatalog";
import { CorridorPlaybooks } from "@/components/CorridorPlaybooks";
import { PathwayFinder } from "@/components/PathwayFinder";
import { DosageCalcEngine } from "@/components/DosageCalcEngine";
import { NclexSimulator } from "@/components/NclexSimulator";
import { ClinicalReferenceHub } from "@/components/ClinicalReferenceHub";
import { StudyVault } from "@/components/StudyVault";
import { FlorenceAITutor } from "@/components/FlorenceAITutor";
import { RecruiterPortal } from "@/components/RecruiterPortal";
import { LeadModal } from "@/components/LeadModal";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("passport");
  const [isLeadModalOpen, setIsLeadModalOpen] = useState<boolean>(false);
  const [selectedLeadCountry, setSelectedLeadCountry] = useState<string>("au");

  const openLeadModalWithCountry = (countryId?: string) => {
    if (countryId) setSelectedLeadCountry(countryId);
    setIsLeadModalOpen(true);
  };

  const handlePartnerHandoff = (partnerType: string) => {
    if (partnerType === "Direct Hospital Recruiter") {
      setActiveTab("recruiter");
    } else if (partnerType === "NCLEX Review Provider") {
      setActiveTab("nclex");
    } else {
      openLeadModalWithCountry();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors selection:bg-sky-500/20 selection:text-sky-900 dark:selection:text-sky-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-sky-900 border-b border-sky-800/40 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
          2026 Global Nurse Relocation Initiative
        </span>
        <span>AHPRA OBA (Australia) & NextGen NCLEX (US/Canada) direct qualification files are now processing.</span>
      </div>

      {/* Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openLeadModal={() => openLeadModalWithCountry()}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 space-y-12">
        {/* Hero Section */}
        {activeTab === "passport" && (
          <Hero
            onStartQuiz={() => setActiveTab("corridors")}
            onGetPassport={() => {
              const el = document.getElementById("passport-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        )}

        {/* Tab View 0: Global Nurse Passport & NRI Engine (FLAGSHIP CORE) */}
        {activeTab === "passport" && (
          <div id="passport-section">
            <NursePassportBuilder onPartnerHandoff={handlePartnerHandoff} />
          </div>
        )}

        {/* Tab View 1: Accredited University & Nursing Degree Directory */}
        {activeTab === "universities" && (
          <UniversityDirectory onOpenLeadModal={openLeadModalWithCountry} />
        )}

        {/* Tab View 2: High-Yield Pharmacology Master Drug Library */}
        {activeTab === "drugs" && <PharmacologyCatalog />}

        {/* Tab View 3: High-Intent Migration Corridor Playbooks */}
        {activeTab === "corridors" && (
          <CorridorPlaybooks onSelectPassport={() => setActiveTab("passport")} />
        )}

        {/* Tab View 4: Dosage Calculation Practice Tool & Infinite Generator */}
        {activeTab === "dosage" && <DosageCalcEngine />}

        {/* Tab View 5: Multi-System NextGen NCLEX Simulator */}
        {activeTab === "nclex" && <NclexSimulator />}

        {/* Tab View 6: High-Yield Clinical Reference Hub & Converter */}
        {activeTab === "reference" && <ClinicalReferenceHub />}

        {/* Tab View 7: Free Study Vault & Resource Download Center */}
        {activeTab === "vault" && <StudyVault />}

        {/* Tab View 8: General Overseas Pathways Navigator */}
        {activeTab === "pathways" && (
          <PathwayFinder onOpenLeadModal={openLeadModalWithCountry} />
        )}

        {/* Tab View 9: Florence AI Tutor */}
        {activeTab === "tutor" && <FlorenceAITutor />}

        {/* Tab View 10: B2B Recruiter / Institutional Exchange */}
        {activeTab === "recruiter" && <RecruiterPortal />}
      </main>

      {/* Global Lead Capture Modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        defaultCountry={selectedLeadCountry}
      />

      {/* Footer */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenLeadModal={() => openLeadModalWithCountry()}
      />
    </div>
  );
}
