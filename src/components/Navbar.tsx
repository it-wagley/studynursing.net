"use client";

import React from "react";
import { GraduationCap, ArrowRight, Calculator, FileCheck, Shield, Building2, MapPin, BookMarked, Pill, Download } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openLeadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, openLeadModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab("passport")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center">
              StudyNursing<span className="text-emerald-600">.net</span>
            </div>
            <p className="text-[12px] text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
              Global Nurse Relocation OS & Exchange
            </p>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden 2xl:flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("passport")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "passport"
                ? "bg-emerald-600 text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Nurse Passport</span>
          </button>

          <button
            onClick={() => setActiveTab("universities")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "universities"
                ? "bg-emerald-600 text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Universities</span>
          </button>

          <button
            onClick={() => setActiveTab("drugs")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "drugs"
                ? "bg-teal-600 text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Pill className="w-3.5 h-3.5" />
            <span>Drug Library</span>
          </button>

          <button
            onClick={() => setActiveTab("corridors")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "corridors"
                ? "bg-emerald-600 text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Playbooks</span>
          </button>

          <button
            onClick={() => setActiveTab("dosage")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "dosage"
                ? "bg-emerald-600 text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Dosage Calc</span>
          </button>

          <button
            onClick={() => setActiveTab("nclex")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "nclex"
                ? "bg-purple-600 text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>NCLEX Cases</span>
          </button>

          <button
            onClick={() => setActiveTab("reference")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "reference"
                ? "bg-teal-600 text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Clinical Pocket Ref</span>
          </button>

          <button
            onClick={() => setActiveTab("vault")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "vault"
                ? "bg-emerald-600 text-white shadow-sm font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Study Vault</span>
          </button>

          <button
            onClick={() => setActiveTab("recruiter")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "recruiter"
                ? "bg-blue-600 text-white shadow-sm font-bold"
                : "text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>B2B Exchange</span>
          </button>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={openLeadModal}
            className="hidden sm:inline-flex items-center px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors"
          >
            Admissions PDF
          </button>
          <button
            onClick={() => setActiveTab("passport")}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-semibold rounded-lg shadow-sm shadow-emerald-600/20 transition-all"
          >
            <span>Nurse Passport</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Responsive Horizontal Tab Bar (Visible on < 2xl screens) */}
      <div className="2xl:hidden flex overflow-x-auto gap-2 p-2 px-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 text-xs">
        <button
          onClick={() => setActiveTab("passport")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "passport"
              ? "bg-emerald-600 text-white font-bold"
              : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          🪪 Nurse Passport
        </button>
        <button
          onClick={() => setActiveTab("universities")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "universities"
              ? "bg-emerald-600 text-white font-bold"
              : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          🎓 Universities
        </button>
        <button
          onClick={() => setActiveTab("drugs")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "drugs"
              ? "bg-teal-600 text-white font-bold"
              : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          💊 Drug Library
        </button>
        <button
          onClick={() => setActiveTab("corridors")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "corridors"
              ? "bg-emerald-600 text-white font-bold"
              : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          🗺️ Corridor Playbooks
        </button>
        <button
          onClick={() => setActiveTab("dosage")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "dosage"
              ? "bg-emerald-600 text-white font-bold"
              : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          🧮 Dosage Calc (Infinite)
        </button>
        <button
          onClick={() => setActiveTab("nclex")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "nclex"
              ? "bg-purple-600 text-white font-bold"
              : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          📋 NCLEX Cases
        </button>
        <button
          onClick={() => setActiveTab("reference")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "reference"
              ? "bg-teal-600 text-white font-bold"
              : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          📚 Clinical Reference
        </button>
        <button
          onClick={() => setActiveTab("vault")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "vault"
              ? "bg-emerald-600 text-white font-bold"
              : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          📥 Study Vault
        </button>
        <button
          onClick={() => setActiveTab("tutor")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "tutor"
              ? "bg-teal-600 text-white font-bold"
              : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          }`}
        >
          🤖 Florence AI
        </button>
        <button
          onClick={() => setActiveTab("recruiter")}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium ${
            activeTab === "recruiter"
              ? "bg-blue-600 text-white font-bold"
              : "bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300"
          }`}
        >
          💼 B2B Exchange
        </button>
      </div>
    </header>
  );
};
