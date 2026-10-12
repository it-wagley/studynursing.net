"use client";

import React, { useState } from "react";
import { ANTIDOTE_DATABASE, LAB_VALUES_DATABASE, INFECTION_PRECAUTIONS } from "@/data/clinicalReference";
import { BookMarked, Search, ArrowRightLeft, AlertOctagon } from "lucide-react";

export const ClinicalReferenceHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"antidotes" | "labs" | "precautions">("antidotes");
  const [antidoteSearch, setAntidoteSearch] = useState<string>("");
  const [glucoseInput, setGlucoseInput] = useState<number>(100); // mg/dL
  const [isMgDl, setIsMgDl] = useState<boolean>(true);

  // Conversion math: mmol/L * 18 = mg/dL
  const convertedGlucose = isMgDl
    ? Math.round((glucoseInput / 18) * 10) / 10 // to mmol/L
    : Math.round(glucoseInput * 18); // to mg/dL

  const filteredAntidotes = ANTIDOTE_DATABASE.filter(
    (a) =>
      a.toxinOrDrug.toLowerCase().includes(antidoteSearch.toLowerCase()) ||
      a.antidote.toLowerCase().includes(antidoteSearch.toLowerCase())
  );

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
            <BookMarked className="w-3.5 h-3.5" />
            <span>High-Yield Clinical Reference Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Daily Clinical Pocket Reference & Lab Converter
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Essential board-tested emergency antidotes, normal vs critical lab ranges across Commonwealth (mmol/L) and US (mg/dL) standards, and infection control isolation rules.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab("antidotes")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "antidotes" ? "bg-teal-600 text-white font-bold shadow-sm" : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Emergency Antidotes
          </button>
          <button
            onClick={() => setActiveTab("labs")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "labs" ? "bg-teal-600 text-white font-bold shadow-sm" : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Lab Values & Converter
          </button>
          <button
            onClick={() => setActiveTab("precautions")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "precautions" ? "bg-teal-600 text-white font-bold shadow-sm" : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Infection Precautions
          </button>
        </div>
      </div>

      {/* TAB 1: EMERGENCY ANTIDOTES */}
      {activeTab === "antidotes" && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-rose-500" />
                <span>NCLEX & Clinical Board Emergency Antidotes</span>
              </h3>
              <p className="text-xs text-slate-500">Every single board exam tests these high-alert reversal agents.</p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search drug (e.g. Heparin, Tylenol)..."
                value={antidoteSearch}
                onChange={(e) => setAntidoteSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase tracking-wider text-[12px]">
                  <th className="py-2.5 px-3">Toxin / Medication</th>
                  <th className="py-2.5 px-3">Reversal Agent / Antidote</th>
                  <th className="py-2.5 px-3">Clinical Indication</th>
                  <th className="py-2.5 px-3">Key Nursing Watch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {filteredAntidotes.map((entry, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">
                      {entry.toxinOrDrug}
                    </td>
                    <td className="py-3 px-3 font-bold text-teal-600 dark:text-teal-400">
                      {entry.antidote}
                    </td>
                    <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                      {entry.clinicalIndication}
                    </td>
                    <td className="py-3 px-3 text-slate-500 italic">
                      {entry.nursingConsiderations}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: LAB VALUES & UNIT CONVERTER */}
      {activeTab === "labs" && (
        <div className="space-y-6">
          {/* Interactive Unit Converter Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider text-[12px] flex items-center gap-1.5">
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>Commonwealth (mmol/L) ⟷ US (mg/dL) Blood Glucose Converter</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                Australia, UK, and New Zealand use mmol/L; the US uses mg/dL. Standard formula: <strong>mmol/L × 18 = mg/dL</strong>.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <input
                type="number"
                value={glucoseInput}
                onChange={(e) => setGlucoseInput(parseFloat(e.target.value) || 0)}
                className="w-24 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm font-bold text-center"
              />
              <button
                onClick={() => setIsMgDl(!isMgDl)}
                className="px-2.5 py-1.5 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900"
              >
                {isMgDl ? "mg/dL ➔ mmol/L" : "mmol/L ➔ mg/dL"}
              </button>
              <div className="text-base font-extrabold text-teal-600">
                = {convertedGlucose} {isMgDl ? "mmol/L" : "mg/dL"}
              </div>
            </div>
          </div>

          {/* Master Lab Values Table */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase tracking-wider text-[12px]">
                  <th className="py-2 px-3">Laboratory Test</th>
                  <th className="py-2 px-3">US Reference</th>
                  <th className="py-2 px-3">International (AU / UK)</th>
                  <th className="py-2 px-3">Critical Panic Values</th>
                  <th className="py-2 px-3">Board Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {LAB_VALUES_DATABASE.map((lab, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">
                      {lab.testName}
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-200">
                      {lab.usNormalRange}
                    </td>
                    <td className="py-3 px-3 font-semibold text-teal-600">
                      {lab.intlNormalRange}
                    </td>
                    <td className="py-3 px-3 text-red-600 font-bold">
                      {lab.criticalLow} / {lab.criticalHigh}
                    </td>
                    <td className="py-3 px-3 text-slate-500 leading-relaxed max-w-xs">
                      {lab.clinicalSignificance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: INFECTION CONTROL & PRECAUTIONS */}
      {activeTab === "precautions" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INFECTION_PRECAUTIONS.map((prec, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider ${
                      prec.type === "Airborne"
                        ? "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300"
                        : prec.type === "Droplet"
                        ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                        : "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300"
                    }`}
                  >
                    {prec.type} Isolation
                  </span>
                  <span className="text-[12px] font-mono text-slate-400">High-Yield</span>
                </div>

                <div className="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 font-mono text-xs font-bold text-slate-900 dark:text-white">
                  Mnemonic: {prec.mnemonic}
                </div>

                <div className="space-y-1 text-xs">
                  <div className="font-bold text-slate-700 dark:text-slate-300">Diseases Covered:</div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-0.5">
                    {prec.diseases.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="font-bold text-slate-700 dark:text-slate-300">Mandatory PPE:</div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-0.5">
                    {prec.ppeRequired.map((ppe, i) => (
                      <li key={i}>{ppe}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200/40 text-[12px] text-slate-500">
                <strong>Room Placement:</strong> {prec.roomPlacement}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
