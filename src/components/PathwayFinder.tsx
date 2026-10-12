"use client";

import React, { useState } from "react";
import { COUNTRY_PATHWAYS } from "@/data/pathways";
import { Globe, BookOpen, Clock, ChevronRight } from "lucide-react";

interface PathwayFinderProps {
  onOpenLeadModal: (countryId?: string) => void;
}

export const PathwayFinder: React.FC<PathwayFinderProps> = ({ onOpenLeadModal }) => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>("au");

  const currentCountry =
    COUNTRY_PATHWAYS.find((c) => c.id === selectedCountryId) || COUNTRY_PATHWAYS[0];

  return (
    <section id="pathways-section" className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
            <Globe className="w-3.5 h-3.5" />
            <span>Interactive Overseas Navigator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Choose Your Target Nursing Destination
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Compare regulatory boards, licensing exams, student visa requirements, and direct registration pathways for internationally qualified nurses.
          </p>
        </div>
      </div>

      {/* Country Selection Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {COUNTRY_PATHWAYS.map((country) => {
          const isSelected = country.id === selectedCountryId;
          return (
            <button
              key={country.id}
              onClick={() => setSelectedCountryId(country.id)}
              className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between h-36 ${
                isSelected
                  ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-md ring-2 ring-emerald-500/20"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex items-start justify-between w-full">
                <span className="text-3xl">{country.flag}</span>
                <span
                  className={`text-[12px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {country.tag}
                </span>
              </div>
              <div>
                <div className="font-bold text-base text-slate-900 dark:text-white">
                  {country.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  {country.licensingBody}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Current Selection Deep-Dive Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 sm:p-8 space-y-8">
        {/* Country Header Details */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentCountry.flag}</span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Nursing in {currentCountry.name}
              </h3>
              <span className="bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded-full">
                {currentCountry.licensingBody}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentCountry.overview}
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal(currentCountry.id)}
            className="shrink-0 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Get {currentCountry.name} University List</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Essential Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="text-[12px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              Exam Requirement
            </span>
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              {currentCountry.examRequired}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="text-[12px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              English Scores
            </span>
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              {currentCountry.englishReq}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="text-[12px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              Visa Pathway
            </span>
            <div className="text-xs font-bold text-slate-900 dark:text-white">
              {currentCountry.visaType}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="text-[12px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              Post-Study Work
            </span>
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {currentCountry.postStudyWork}
            </div>
          </div>
        </div>

        {/* Concrete Pathways Breakdown */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Available Study & Registration Streams:</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentCountry.pathways.map((pw, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {pw.duration}
                    </span>
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                    {pw.title}
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <strong className="text-slate-700 dark:text-slate-300">Target:</strong>{" "}
                    {pw.targetAudience}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pw.details}
                  </p>
                </div>

                <button
                  onClick={() => onOpenLeadModal(currentCountry.id)}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-center"
                >
                  View Eligibility Criteria
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
