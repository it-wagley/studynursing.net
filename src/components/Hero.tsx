"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Award, Users, Shield } from "lucide-react";

interface HeroProps {
  onStartQuiz: () => void;
  onGetPassport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz, onGetPassport }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 text-center">
      {/* Background radial medical glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 text-xs font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>The Global Relocation Engine for Africa, Asia & Gulf Healthcare Workers</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          Elevate Your Nursing Career to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
            Australia, the US, the UK & Canada
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Empowering qualified nurses from Kenya, Zimbabwe, South Africa, Nepal, India, the Philippines, and the Middle East to bypass predatory middlemen, score their migration readiness, and connect directly with verified NCLEX providers and hospital sponsors.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onGetPassport}
            className="w-full sm:w-auto px-6 py-3.5 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2"
          >
            <Shield className="w-4 h-4" />
            <span>Generate Free Nurse Passport & NRI</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onStartQuiz}
            className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-sm rounded-xl transition-all"
          >
            Explore Country Pathways
          </button>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left text-xs">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900 dark:text-white">AHPRA & NMBA</div>
              <div className="text-slate-500 dark:text-slate-400">Australia OBA Stream</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <Award className="w-4 h-4 text-indigo-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900 dark:text-white">NextGen NCLEX</div>
              <div className="text-slate-500 dark:text-slate-400">US & Canadian Boards</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900 dark:text-white">Zero Broker Scams</div>
              <div className="text-slate-500 dark:text-slate-400">Direct Verified Pathways</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <Users className="w-4 h-4 text-sky-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900 dark:text-white">12,450+ Passports</div>
              <div className="text-slate-500 dark:text-slate-400">Active Nurse Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
