"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  GraduationCap, 
  ArrowRight, 
  Calculator, 
  FileCheck, 
  Shield, 
  Building2, 
  MapPin, 
  BookMarked, 
  Pill, 
  Download, 
  ChevronDown, 
  Stethoscope, 
  Compass, 
  Bot, 
  Menu, 
  X 
} from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openLeadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, openLeadModal }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isRelocationActive = ["passport", "corridors", "pathways"].includes(activeTab);
  const isClinicalActive = ["nclex", "dosage", "drugs", "reference"].includes(activeTab);
  const isResourcesActive = ["vault", "tutor"].includes(activeTab);
  const isUniversitiesActive = activeTab === "universities";
  const isRecruiterActive = activeTab === "recruiter";

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" ref={dropdownRef}>
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleSelectTab("passport")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center">
              StudyNursing<span className="text-sky-600">.net</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block font-medium">
              Global Healthcare Relocation & Qualification OS
            </p>
          </div>
        </div>

        {/* Desktop 4-Pillar Grouped Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-slate-100/90 dark:bg-slate-800/70 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold">
          
          {/* Pillar 1: Relocation & Passport */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "relocation" ? null : "relocation")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                isRelocationActive
                  ? "bg-sky-600 text-white shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/50"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Relocation & Passport</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === "relocation" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "relocation" && (
              <div className="absolute left-0 top-full mt-2 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleSelectTab("passport")}
                  className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all ${
                    activeTab === "passport" ? "bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <Shield className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">Nurse Passport & NRI</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Score 0–100 readiness for AU, US, UK, CA</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelectTab("corridors")}
                  className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all ${
                    activeTab === "corridors" ? "bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">Migration Playbooks</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Kenya, Zimbabwe, Nepal & India roadmaps</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelectTab("pathways")}
                  className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all ${
                    activeTab === "pathways" ? "bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <Compass className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">Overseas Pathways Navigator</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Compare AHPRA OBA, NCLEX & NMC rules</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Pillar 2: Clinical & Boards Hub */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "clinical" ? null : "clinical")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                isClinicalActive
                  ? "bg-sky-600 text-white shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/50"
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Clinical & Boards Hub</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === "clinical" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "clinical" && (
              <div className="absolute left-0 top-full mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleSelectTab("nclex")}
                  className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all ${
                    activeTab === "nclex" ? "bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <FileCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">NextGen NCLEX EHR Simulator</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">CJMM clinical unfolding case studies</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelectTab("dosage")}
                  className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all ${
                    activeTab === "dosage" ? "bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <Calculator className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">Infinite Dosage Calculation Engine</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Pediatric, IV infusion & algorithmic problems</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelectTab("drugs")}
                  className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all ${
                    activeTab === "drugs" ? "bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <Pill className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">Pharmacology & Brand Translator</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">US vs Commonwealth drug names & warnings</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelectTab("reference")}
                  className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all ${
                    activeTab === "reference" ? "bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <BookMarked className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">Emergency Pocket Reference</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Antidotes & mmol/L to mg/dL glucose converter</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Pillar 3: Universities */}
          <button
            onClick={() => handleSelectTab("universities")}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
              isUniversitiesActive
                ? "bg-sky-600 text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/50"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Universities</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${isUniversitiesActive ? "bg-white/20 text-white" : "bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300"}`}>
              27
            </span>
          </button>

          {/* Pillar 4: Resources & AI */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "resources" ? null : "resources")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                isResourcesActive
                  ? "bg-sky-600 text-white shadow-sm font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/50"
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resources & AI</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "resources" && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleSelectTab("vault")}
                  className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all ${
                    activeTab === "vault" ? "bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <Download className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">Free Study Vault</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">PDF math formulas, AHPRA checklists & guides</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelectTab("tutor")}
                  className={`w-full text-left p-2.5 rounded-xl flex items-start gap-2.5 transition-all ${
                    activeTab === "tutor" ? "bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <Bot className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">Florence AI Clinical Tutor</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Grounded clinical RAG study mentor</div>
                  </div>
                </button>
              </div>
            )}
          </div>

        </nav>

        {/* Right CTA Area: B2B Exchange + Primary Passport Action */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={openLeadModal}
            className="hidden md:inline-flex items-center px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            Admissions PDF
          </button>

          <button
            onClick={() => handleSelectTab("recruiter")}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
              isRecruiterActive
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900/60 hover:bg-blue-50 dark:hover:bg-blue-950/40"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>For Employers</span>
          </button>

          <button
            onClick={() => handleSelectTab("passport")}
            className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md shadow-sky-600/20 transition-all"
          >
            <span>Nurse Passport</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Categorized & Spacious) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-6 space-y-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2">
          
          {/* Group 1: Relocation & Passport */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Relocation & Passport</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              <button
                onClick={() => handleSelectTab("passport")}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === "passport" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>🪪 Nurse Passport & NRI Calculator</span>
                <span className="text-[10px] opacity-75">Flagship</span>
              </button>
              <button
                onClick={() => handleSelectTab("corridors")}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === "corridors" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>🗺️ Migration Corridor Playbooks</span>
                <span className="text-[10px] opacity-75">5 Corridors</span>
              </button>
              <button
                onClick={() => handleSelectTab("pathways")}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === "pathways" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>🧭 Overseas Pathways Navigator</span>
                <span className="text-[10px] opacity-75">Rules</span>
              </button>
            </div>
          </div>

          {/* Group 2: Clinical & Boards Hub */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Clinical & Boards Hub</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              <button
                onClick={() => handleSelectTab("nclex")}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === "nclex" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>📋 NextGen NCLEX EHR Simulator</span>
                <span className="text-[10px] opacity-75">CJMM</span>
              </button>
              <button
                onClick={() => handleSelectTab("dosage")}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === "dosage" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>🧮 Infinite Dosage Calc Engine</span>
                <span className="text-[10px] opacity-75">Algorithmic</span>
              </button>
              <button
                onClick={() => handleSelectTab("drugs")}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === "drugs" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>💊 Pharmacology & Brand Translator</span>
                <span className="text-[10px] opacity-75">Top 50</span>
              </button>
              <button
                onClick={() => handleSelectTab("reference")}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === "reference" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>📚 Emergency Pocket Reference</span>
                <span className="text-[10px] opacity-75">Antidotes</span>
              </button>
            </div>
          </div>

          {/* Group 3: Universities & Degrees */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Degrees & Academics</span>
            </div>
            <button
              onClick={() => handleSelectTab("universities")}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                activeTab === "universities" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              }`}
            >
              <span>🎓 27 Accredited Global Universities (AU, US, UK, CA)</span>
              <span className="text-[10px] opacity-75 font-bold">2026</span>
            </button>
          </div>

          {/* Group 4: Study Vault & Florence AI */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" />
              <span>Resources & Mentorship</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              <button
                onClick={() => handleSelectTab("vault")}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === "vault" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>📥 Free Study Vault Downloads</span>
                <span className="text-[10px] opacity-75">PDFs</span>
              </button>
              <button
                onClick={() => handleSelectTab("tutor")}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                  activeTab === "tutor" ? "bg-sky-600 text-white font-bold" : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                }`}
              >
                <span>🤖 Florence AI Clinical Mentor</span>
                <span className="text-[10px] opacity-75">Free</span>
              </button>
            </div>
          </div>

          {/* Group 5: Recruiter Portal */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => handleSelectTab("recruiter")}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between ${
                activeTab === "recruiter" ? "bg-blue-600 text-white" : "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60"
              }`}
            >
              <span>💼 For Healthcare Employers & Recruiters</span>
              <span className="text-[10px] font-mono">B2B</span>
            </button>
          </div>

        </div>
      )}

      {/* Quick Pillar Strip for Mobile / Tablet (< lg) */}
      <div className="lg:hidden flex items-center justify-between gap-1 px-4 py-2 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200/80 dark:border-slate-800 text-xs overflow-x-auto">
        <button
          onClick={() => handleSelectTab("passport")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium transition-all ${
            isRelocationActive ? "bg-sky-600 text-white font-bold" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          🧭 Relocation
        </button>
        <button
          onClick={() => handleSelectTab("nclex")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium transition-all ${
            isClinicalActive ? "bg-sky-600 text-white font-bold" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          🩺 Clinical Hub
        </button>
        <button
          onClick={() => handleSelectTab("universities")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium transition-all ${
            isUniversitiesActive ? "bg-sky-600 text-white font-bold" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          🎓 Universities
        </button>
        <button
          onClick={() => handleSelectTab("vault")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium transition-all ${
            isResourcesActive ? "bg-sky-600 text-white font-bold" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          📥 Resources
        </button>
      </div>

    </header>
  );
};
