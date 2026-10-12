"use client";

import React, { useState } from "react";
import { UNIVERSITY_PROGRAMS } from "@/data/universities";
import { GraduationCap, Search, ChevronRight, Sparkles, Filter } from "lucide-react";

interface UniversityDirectoryProps {
  onOpenLeadModal: (countryId?: string) => void;
}

export const UniversityDirectory: React.FC<UniversityDirectoryProps> = ({ onOpenLeadModal }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [selectedDegreeLevel, setSelectedDegreeLevel] = useState<string>("All");

  const filteredPrograms = UNIVERSITY_PROGRAMS.filter((uni) => {
    const matchesSearch =
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.degreeTitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCountry = selectedCountry === "All" || uni.country === selectedCountry;
    const matchesDegree = selectedDegreeLevel === "All" || uni.degreeLevel === selectedDegreeLevel;

    return matchesSearch && matchesCountry && matchesDegree;
  });

  return (
    <section className="space-y-8">
      {/* Directory Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Accredited Global Degree Directory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Accredited Nursing Degrees in Australia, US, UK & Canada
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Explore 27 pre-registration Masters, accelerated BSNs, and conversion degrees. Compare official tuition fees, intake months, clinical hours, and post-study work visa rights.
          </p>
        </div>

        <div className="flex items-center gap-2 p-3 bg-sky-50 dark:bg-sky-950/40 border border-sky-500/20 rounded-2xl text-xs">
          <Sparkles className="w-4 h-4 text-sky-600" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white">Independent Program Database</div>
            <div className="text-[12px] text-sky-700 dark:text-sky-300">Verified 2026 tuition fees, entry criteria & visa rights</div>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search university name, city, or degree title (e.g. Sydney, Deakin, Master of Nursing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Country Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {["All", "Australia", "United States", "United Kingdom", "Canada"].map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-3 py-2 rounded-xl font-medium transition-all ${
                  selectedCountry === country
                    ? "bg-sky-600 text-white font-bold shadow-sm"
                    : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {country === "Australia" ? "🇦🇺 Australia" : country === "United States" ? "🇺🇸 USA" : country === "United Kingdom" ? "🇬🇧 UK" : country === "Canada" ? "🇨🇦 Canada" : "All Countries"}
              </button>
            ))}
          </div>
        </div>

        {/* Degree Level Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="text-[12px] uppercase font-bold text-slate-400 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Degree Level:</span>
          </span>
          {[
            { label: "All Degrees", val: "All" },
            { label: "Master of Nursing (Pre-Reg)", val: "Master of Nursing (Pre-Reg)" },
            { label: "Bachelor Conversion", val: "Bachelor Conversion" },
            { label: "Accelerated BSN (USA/Canada)", val: "Accelerated BSN" },
            { label: "Standard Bachelor", val: "Standard Bachelor" }
          ].map((item) => (
            <button
              key={item.val}
              onClick={() => setSelectedDegreeLevel(item.val)}
              className={`px-2.5 py-1 rounded-lg text-[12px] font-semibold transition-all ${
                selectedDegreeLevel === item.val
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPrograms.map((prog) => (
          <div
            key={prog.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5 relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                  <span className="text-lg">{prog.countryFlag}</span>
                  <span>{prog.country} • {prog.city}</span>
                </span>
                <span className="text-[12px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                  {prog.accreditation}
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
                {prog.name}
              </h3>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {prog.degreeTitle}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                {prog.overview}
              </p>
            </div>

            {/* Spec Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs border-y border-slate-100 dark:border-slate-800 py-3">
              <div className="space-y-0.5">
                <span className="text-[12px] text-slate-400 uppercase font-bold">Annual Tuition</span>
                <div className="font-extrabold text-slate-900 dark:text-white">{prog.annualTuitionLocal}</div>
                <div className="text-[12px] text-sky-600 dark:text-sky-400 font-medium">{prog.annualTuitionUSD}</div>
              </div>

              <div className="space-y-0.5">
                <span className="text-[12px] text-slate-400 uppercase font-bold">Duration & Intake</span>
                <div className="font-bold text-slate-800 dark:text-slate-200">{prog.duration}</div>
                <div className="text-[12px] text-slate-500">Intakes: {prog.intakeMonths}</div>
              </div>

              <div className="space-y-0.5">
                <span className="text-[12px] text-slate-400 uppercase font-bold">English Minimum</span>
                <div className="font-semibold text-slate-800 dark:text-slate-200">{prog.englishReq}</div>
              </div>

              <div className="space-y-0.5">
                <span className="text-[12px] text-slate-400 uppercase font-bold">Clinical Placements</span>
                <div className="font-semibold text-slate-800 dark:text-slate-200">{prog.clinicalHours}</div>
              </div>
            </div>

            {/* Visa & Scholarship Highlights */}
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/40 text-[12px] space-y-1">
              <div>
                <strong className="text-slate-700 dark:text-slate-300">Post-Study Work Visa:</strong>{" "}
                <span className="text-sky-600 dark:text-sky-400 font-semibold">{prog.postStudyVisa}</span>
              </div>
              <div>
                <strong className="text-slate-700 dark:text-slate-300">Scholarship:</strong>{" "}
                <span className="text-slate-600 dark:text-slate-400">{prog.scholarshipAvailable}</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <span className="text-[12px] text-slate-400">
                Popular with nurses in {prog.popularForOrigins.slice(0, 3).join(", ")}
              </span>
              <button
                onClick={() => onOpenLeadModal(prog.country.toLowerCase())}
                className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>Check Eligibility & Apply</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
