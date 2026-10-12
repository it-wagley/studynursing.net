"use client";

import React, { useState } from "react";
import { DRUG_DATABASE } from "@/data/drugs";
import { Pill, Search, Sparkles, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";

export const PharmacologyCatalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSystem, setSelectedSystem] = useState<string>("All");
  const [expandedDrugId, setExpandedDrugId] = useState<string | null>("drug-furosemide");

  const filteredDrugs = DRUG_DATABASE.filter((drug) => {
    const matchesSearch =
      drug.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.usBrandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.commonwealthBrandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.drugClass.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSystem = selectedSystem === "All" || drug.system === selectedSystem;

    return matchesSearch && matchesSystem;
  });

  const systems = ["All", "Cardiovascular", "Anticoagulation", "Infectious Disease", "Endocrine"];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <Pill className="w-3.5 h-3.5" />
            <span>High-Yield Board Pharmacology Library</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Top 50 Board Medications & Brand Translators
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Translate US vs Commonwealth (Australia/UK) brand names, review high-alert black box warnings, and master memorable mnemonics for the NextGen NCLEX and AHPRA OBA.
          </p>
        </div>

        <div className="flex items-center gap-2 p-3 bg-teal-50 dark:bg-teal-950/40 border border-teal-500/20 rounded-2xl text-xs">
          <Sparkles className="w-4 h-4 text-teal-600" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white">Dual-Standard Nomenclature</div>
            <div className="text-[12px] text-teal-700 dark:text-teal-300">US FDA & Commonwealth TGA aligned</div>
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
              placeholder="Search drug (e.g. Furosemide, Lasix, Digoxin, Heparin, Metformin)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            {systems.map((sys) => (
              <button
                key={sys}
                onClick={() => setSelectedSystem(sys)}
                className={`px-3 py-2 rounded-xl font-medium transition-all ${
                  selectedSystem === sys
                    ? "bg-teal-600 text-white font-bold shadow-sm"
                    : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100"
                }`}
              >
                {sys}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Drug Cards Grid */}
      <div className="space-y-4">
        {filteredDrugs.map((drug) => {
          const isExpanded = expandedDrugId === drug.id;
          return (
            <div
              key={drug.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm transition-all overflow-hidden"
            >
              {/* Card Header (Click to toggle) */}
              <div
                onClick={() => setExpandedDrugId(isExpanded ? null : drug.id)}
                className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      {drug.genericName}
                    </span>
                    <span className="text-[12px] font-bold px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                      {drug.drugClass}
                    </span>
                    <span className="text-[12px] text-slate-400 hidden sm:inline">
                      • {drug.system}
                    </span>
                  </div>

                  {/* Brand Comparison Row */}
                  <div className="text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span>
                      <strong className="text-slate-800 dark:text-slate-200">🇺🇸 US Brand:</strong> {drug.usBrandName}
                    </span>
                    <span>
                      <strong className="text-slate-800 dark:text-slate-200">🇦🇺/🇬🇧 Commonwealth:</strong> {drug.commonwealthBrandName}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <span className="text-xs font-semibold text-teal-600">
                    {isExpanded ? "Hide Details" : "View Clinical Card"}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Expanded Card Details */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 space-y-5 border-t border-slate-100 dark:border-slate-800 pt-5 text-xs animate-in fade-in duration-200">
                  {/* Indications & Mechanism */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                      <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide text-[12px]">
                        Clinical Indications
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {drug.indications}
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                      <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide text-[12px]">
                        Mechanism of Action
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {drug.mechanismOfAction}
                      </p>
                    </div>
                  </div>

                  {/* Black Box Warning Alert */}
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-500/30 rounded-2xl text-xs flex items-start gap-3 text-red-900 dark:text-red-200">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold uppercase tracking-wider text-[12px] text-red-700 dark:text-red-400">
                        Critical Black Box Warning & Adverse Effects:
                      </span>
                      <p className="mt-0.5 leading-relaxed font-semibold">
                        {drug.blackBoxWarning}
                      </p>
                    </div>
                  </div>

                  {/* Nursing Considerations Checklist */}
                  <div className="space-y-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[12px]">
                      Essential Nursing Considerations & Patient Teaching:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-600 dark:text-slate-400">
                      {drug.nursingConsiderations.map((item, idx) => (
                        <li key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 flex items-start gap-2">
                          <span className="text-teal-600 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Memory Mnemonic Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-teal-500/10 border border-amber-500/20 flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[12px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>High-Yield Board Memory Trick</span>
                      </span>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">
                        {drug.memoryMnemonic}
                      </div>
                    </div>

                    {drug.antidoteOrReversal && (
                      <div className="shrink-0 text-right">
                        <span className="text-[12px] text-slate-400 uppercase font-bold">Specific Antidote</span>
                        <div className="font-black text-rose-600 dark:text-rose-400">
                          {drug.antidoteOrReversal}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
