"use client";

import React, { useState } from "react";
import { ANTIDOTE_DATABASE, LAB_VALUES_DATABASE, INFECTION_PRECAUTIONS } from "@/data/clinicalReference";
import { Search, ArrowRightLeft } from "lucide-react";

export const ClinicalReferenceHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"antidotes" | "labs" | "precautions">("antidotes");
  const [antidoteSearch, setAntidoteSearch] = useState<string>("");
  const [glucoseInput, setGlucoseInput] = useState<number>(100);
  const [isMgDl, setIsMgDl] = useState<boolean>(true);

  // Conversion formula: mmol/L * 18 = mg/dL
  const convertedGlucose = isMgDl
    ? Math.round((glucoseInput / 18) * 10) / 10
    : Math.round(glucoseInput * 18);

  const filteredAntidotes = ANTIDOTE_DATABASE.filter(
    (a) =>
      a.toxinOrDrug.toLowerCase().includes(antidoteSearch.toLowerCase()) ||
      a.antidote.toLowerCase().includes(antidoteSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 font-sans">
      
      {/* Educational Notice */}
      <div className="bg-caution-wash border border-caution/25 rounded-md p-4 text-meta text-caution-body">
        <strong>Examination preparation notice:</strong> This pocket reference covers critical values, reversal agents, and isolation standards frequently tested in international nursing licensure exams. It is not clinical protocol guidance for active patient care.
      </div>

      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-center gap-1.5 p-1 bg-paper-alt rounded-md border border-line text-body-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("antidotes")}
            className={`px-3.5 py-2 rounded-sm transition-colors min-h-control ${
              activeTab === "antidotes"
                ? "bg-surface text-ink shadow-sm font-bold border border-line"
                : "text-ink-60 hover:text-ink"
            }`}
          >
            Emergency Antidotes
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("labs")}
            className={`px-3.5 py-2 rounded-sm transition-colors min-h-control ${
              activeTab === "labs"
                ? "bg-surface text-ink shadow-sm font-bold border border-line"
                : "text-ink-60 hover:text-ink"
            }`}
          >
            Lab Values & Unit Converter
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("precautions")}
            className={`px-3.5 py-2 rounded-sm transition-colors min-h-control ${
              activeTab === "precautions"
                ? "bg-surface text-ink shadow-sm font-bold border border-line"
                : "text-ink-60 hover:text-ink"
            }`}
          >
            Infection Precautions
          </button>
        </div>
      </div>

      {/* TAB 1: EMERGENCY ANTIDOTES */}
      {activeTab === "antidotes" && (
        <div className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line-soft pb-4">
            <div>
              <h3 className="font-serif text-heading-md text-ink font-semibold">
                High-Alert Toxicity & Reversal Agents
              </h3>
              <p className="text-body-xs text-ink-60 mt-1">
                Frequently tested reversal agents across NCLEX, NMC, and AHPRA examinations.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-ink-40" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search toxin or antidote..."
                value={antidoteSearch}
                onChange={(e) => setAntidoteSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-paper border border-line-strong rounded-md text-body-xs text-ink focus:outline-accent min-h-control"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-body-xs">
              <thead>
                <tr className="border-b border-line text-label text-ink-60 bg-paper-alt">
                  <th scope="col" className="p-3 font-bold">Toxin / Medication</th>
                  <th scope="col" className="p-3 font-bold">Specific Reversal Agent</th>
                  <th scope="col" className="p-3 font-bold">Clinical Indication</th>
                  <th scope="col" className="p-3 font-bold">Nursing Priority Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line-soft">
                {filteredAntidotes.map((row, idx) => (
                  <tr key={idx} className="hover:bg-paper-alt/40 transition-colors">
                    <td className="p-3.5 font-semibold text-ink">{row.toxinOrDrug}</td>
                    <td className="p-3.5 font-bold text-accent">{row.antidote}</td>
                    <td className="p-3.5 text-ink-70 leading-relaxed">{row.clinicalIndication}</td>
                    <td className="p-3.5 text-ink-60 text-meta-sm leading-relaxed">{row.nursingConsiderations}</td>
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
          
          {/* Blood Glucose Converter */}
          <div className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-4">
            <div className="border-b border-line-soft pb-3">
              <h3 className="font-serif text-heading-md text-ink font-semibold">
                Blood Glucose Unit Converter: US (mg/dL) ↔ Commonwealth (mmol/L)
              </h3>
              <p className="text-body-xs text-ink-60 mt-1">
                US nursing exams test blood glucose in mg/dL (normal 70–100 mg/dL), while Australian, UK, and Commonwealth systems record values in mmol/L (normal 4.0–7.8 mmol/L).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 items-center">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="glucose-input" className="text-body-sm font-semibold text-ink">
                    Input value:
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsMgDl(!isMgDl)}
                    className="inline-flex items-center gap-1 text-meta text-accent hover:underline font-medium min-h-control"
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Switch to {isMgDl ? "mmol/L to mg/dL" : "mg/dL to mmol/L"}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id="glucose-input"
                    type="number"
                    value={glucoseInput}
                    onChange={(e) => setGlucoseInput(parseFloat(e.target.value) || 0)}
                    className="w-40 px-3.5 py-2.5 bg-paper border border-line-strong rounded-md text-body font-mono text-ink tabular focus:outline-accent min-h-control"
                  />
                  <span className="text-body-sm font-semibold text-ink-70">
                    {isMgDl ? "mg/dL" : "mmol/L"}
                  </span>
                </div>
              </div>

              {/* Conversion Result */}
              <div className="p-4 bg-paper-alt rounded-md border border-line space-y-1">
                <div className="text-eyebrow text-ink-40">Converted clinical value</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-heading-lg font-bold text-ink tabular">
                    {convertedGlucose}
                  </span>
                  <span className="text-body-sm font-semibold text-accent">
                    {isMgDl ? "mmol/L" : "mg/dL"}
                  </span>
                </div>
                <div className="text-meta-sm text-ink-60 tabular font-mono">
                  Conversion factor: 1 mmol/L = 18.0182 mg/dL
                </div>
              </div>

            </div>
          </div>

          {/* Normal vs Critical Lab Ranges Table */}
          <div className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-4">
            <div className="border-b border-line-soft pb-3">
              <h3 className="font-serif text-heading-md text-ink font-semibold">
                Electrolytes, Coagulation & Hematology Reference Standards
              </h3>
              <p className="text-body-xs text-ink-60 mt-1">
                Both standard and critical cutoff values requiring immediate nursing intervention.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-body-xs">
                <thead>
                  <tr className="border-b border-line text-label text-ink-60 bg-paper-alt">
                    <th scope="col" className="p-3 font-bold">Diagnostic Test</th>
                    <th scope="col" className="p-3 font-bold">US Normal Range</th>
                    <th scope="col" className="p-3 font-bold">Intl / Commonwealth Range</th>
                    <th scope="col" className="p-3 font-bold text-caution-text">Critical Low</th>
                    <th scope="col" className="p-3 font-bold text-caution-text">Critical High</th>
                    <th scope="col" className="p-3 font-bold">Clinical Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line-soft font-mono text-body-xs">
                  {LAB_VALUES_DATABASE.map((lab, idx) => (
                    <tr key={idx} className="hover:bg-paper-alt/40 transition-colors">
                      <td className="p-3.5 font-sans font-semibold text-ink">{lab.testName}</td>
                      <td className="p-3.5 text-ink tabular">{lab.usNormalRange}</td>
                      <td className="p-3.5 text-ink tabular">{lab.intlNormalRange}</td>
                      <td className="p-3.5 text-caution-text font-bold tabular">{lab.criticalLow}</td>
                      <td className="p-3.5 text-caution-text font-bold tabular">{lab.criticalHigh}</td>
                      <td className="p-3.5 font-sans text-ink-70 leading-relaxed text-meta-sm">{lab.clinicalSignificance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* TAB 3: INFECTION ISOLATION PRECAUTIONS */}
      {activeTab === "precautions" && (
        <div className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-6">
          <div className="border-b border-line-soft pb-3">
            <h3 className="font-serif text-heading-md text-ink font-semibold">
              CDC & Hospital Transmission-Based Infection Precautions
            </h3>
            <p className="text-body-xs text-ink-60 mt-1">
              Isolation protocols, required personal protective equipment (PPE), and private room criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INFECTION_PRECAUTIONS.map((p, idx) => (
              <div key={idx} className="bg-paper-alt border border-line rounded-md p-5 space-y-3">
                <div className="space-y-1">
                  <span className="text-label uppercase tracking-label text-accent font-bold">
                    Isolation Category
                  </span>
                  <h4 className="font-serif text-heading-sm font-semibold text-ink">
                    {p.type}
                  </h4>
                </div>

                <div className="space-y-2 text-body-xs">
                  <div>
                    <strong className="text-ink font-semibold">Required PPE:</strong>
                    <p className="text-ink-70 mt-0.5">{p.ppeRequired.join(", ")}</p>
                  </div>

                  <div>
                    <strong className="text-ink font-semibold">Key Pathogens / Diseases:</strong>
                    <p className="text-ink-70 mt-0.5">{p.diseases.join(", ")}</p>
                  </div>

                  <div className="pt-1 border-t border-line-soft text-meta-sm text-ink-60">
                    <strong className="text-ink font-semibold">Room Placement:</strong> {p.roomPlacement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
