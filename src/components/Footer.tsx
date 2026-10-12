"use client";

import React from "react";
import { GraduationCap, ShieldAlert } from "lucide-react";

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenLeadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenLeadModal }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-xs text-slate-500 dark:text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                StudyNursing<span className="text-emerald-600">.net</span>
              </span>
            </div>
            <p className="leading-relaxed">
              The premier global ecosystem for internationally qualified nurses and students pursuing RN registration in Australia, the US, the UK, and Canada.
            </p>
          </div>

          {/* Core Platform Tools */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[12px]">
              Platform Infrastructure
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectTab("passport")} className="hover:text-emerald-600 font-semibold text-emerald-700 dark:text-emerald-400">
                  🪪 Global Nurse Passport & NRI
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab("universities")} className="hover:text-emerald-600 font-semibold text-slate-700 dark:text-slate-300">
                  🎓 Accredited Degree Directory
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab("recruiter")} className="hover:text-blue-600 font-semibold text-blue-700 dark:text-blue-400">
                  💼 B2B Recruiter Talent Exchange
                </button>
              </li>
              <li>
                <button onClick={onOpenLeadModal} className="hover:text-emerald-600">
                  📄 2026 Nursing University List (PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Academic & Study Tools */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[12px]">
              Clinical Study Engines
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectTab("drugs")} className="hover:text-teal-600 font-semibold text-teal-700 dark:text-teal-400">
                  💊 Pharmacology Master Drug Library
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab("vault")} className="hover:text-emerald-600 font-semibold text-emerald-700 dark:text-emerald-400">
                  📥 Free Study Vault (Download PDFs)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab("dosage")} className="hover:text-emerald-600">
                  🧮 Dosage Calculation Infinite Solver
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab("nclex")} className="hover:text-purple-600">
                  📋 NextGen NCLEX (NGN) Case Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab("reference")} className="hover:text-teal-600">
                  📚 Clinical Pocket Reference & Converter
                </button>
              </li>
            </ul>
          </div>

          {/* Educational Regulatory Disclaimer */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[12px] flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
              <span>Important Disclaimer</span>
            </div>
            <p className="leading-relaxed text-slate-400">
              StudyNursing.net is an educational and candidate relocation infrastructure platform. We are an independent entity not directly affiliated with AHPRA, NMBA, NCSBN, or NMC. All practice materials are designed for study preparation and educational simulation.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © {new Date().getFullYear()} StudyNursing.net. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[12px]">
            <span>Empowering nurses across Zimbabwe, Kenya, South Africa, Nepal, India, the Philippines & the Middle East.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
