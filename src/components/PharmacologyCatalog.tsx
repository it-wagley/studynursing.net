"use client";

import React, { useState } from "react";
import { DRUG_DATABASE } from "@/data/drugs";
import { Search, ChevronDown, AlertTriangle, Lightbulb } from "lucide-react";

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

  const systems = [
    "All",
    "Cardiovascular",
    "Anticoagulation",
    "Infectious Disease",
    "Endocrine",
  ];

  return (
    <div className="space-y-6 font-sans">
      
      {/* Educational Notice */}
      <div className="bg-caution-wash border border-caution/25 rounded-md p-4 text-meta text-caution-body">
        <strong>Examination preparation notice:</strong> This pharmacology cross-reference is designed for nurses translating medication nomenclature between US (FDA / USP) and Commonwealth (TGA / BNF) nursing examinations. It is an educational reference, not clinical prescribing advice.
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-surface border border-line rounded-lg p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-ink-40" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search medication by generic or brand name (e.g. Furosemide, Lasix, Paracetamol, Metformin)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-paper border border-line-strong rounded-md text-body-xs text-ink placeholder:text-ink-40 focus:outline-accent min-h-control"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-body-xs">
            {systems.map((sys) => (
              <button
                key={sys}
                type="button"
                onClick={() => setSelectedSystem(sys)}
                className={`px-3 py-2 rounded-md transition-colors min-h-control border ${
                  selectedSystem === sys
                    ? "bg-accent text-white font-semibold border-accent"
                    : "bg-surface text-ink-70 border-line hover:bg-paper-alt"
                }`}
              >
                {sys}
              </button>
            ))}
          </div>

        </div>

        <div className="text-meta-sm text-ink-40">
          Showing {filteredDrugs.length} high-yield medications across US and Commonwealth curricula
        </div>
      </div>

      {/* Drug List Accordion Cards */}
      <div className="space-y-3">
        {filteredDrugs.map((drug) => {
          const isExpanded = expandedDrugId === drug.id;

          return (
            <div
              key={drug.id}
              className="bg-surface border border-line rounded-lg overflow-hidden transition-colors"
            >
              {/* Header Bar */}
              <button
                type="button"
                onClick={() => setExpandedDrugId(isExpanded ? null : drug.id)}
                className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-paper-alt/50 transition-colors"
                aria-expanded={isExpanded}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-heading-md font-semibold text-ink">
                      {drug.genericName}
                    </span>
                    <span className="text-label uppercase tracking-label px-2 py-0.5 rounded-sm bg-accent-wash text-accent-dark font-bold">
                      {drug.system}
                    </span>
                  </div>
                  <div className="text-body-xs text-ink-60">
                    Class: <span className="text-ink-80 font-medium">{drug.drugClass}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {/* Brand Comparison Badges */}
                  <div className="flex flex-wrap items-center gap-2 text-meta-sm tabular">
                    <span className="px-2.5 py-1 rounded bg-paper-alt text-ink-70 border border-line-soft">
                      US Brand: <strong className="text-ink">{drug.usBrandName}</strong>
                    </span>
                    <span className="px-2.5 py-1 rounded bg-paper-alt text-ink-70 border border-line-soft">
                      Commonwealth: <strong className="text-ink">{drug.commonwealthBrandName}</strong>
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-ink-40 transition-transform shrink-0 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>

              {/* Expanded Clinical Details */}
              {isExpanded && (
                <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-line-soft space-y-5 text-body-xs leading-article">
                  
                  {/* Mechanism & Indications Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3">
                    <div className="space-y-1 bg-paper-alt p-4 rounded border border-line-soft">
                      <div className="text-eyebrow text-ink-40">Primary Indications</div>
                      <div className="text-ink-80 font-medium">{drug.indications}</div>
                    </div>
                    <div className="space-y-1 bg-paper-alt p-4 rounded border border-line-soft">
                      <div className="text-eyebrow text-ink-40">Mechanism of Action</div>
                      <div className="text-ink-80">{drug.mechanismOfAction}</div>
                    </div>
                  </div>

                  {/* Black Box / High-Alert Warning */}
                  {drug.blackBoxWarning && (
                    <div className="rounded-md bg-caution-wash border border-caution/30 p-4 text-caution-body flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-caution shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="space-y-1">
                        <strong className="text-caution-text text-body-sm font-semibold">
                          High-Alert Nursing Consideration & Warning:
                        </strong>
                        <p className="text-body-xs">{drug.blackBoxWarning}</p>
                      </div>
                    </div>
                  )}

                  {/* High-Yield Nursing Mnemonic */}
                  {drug.memoryMnemonic && (
                    <div className="rounded-md bg-surface border border-accent/30 p-4 text-ink flex items-start gap-3">
                      <Lightbulb className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="space-y-1">
                        <span className="text-eyebrow text-accent font-bold">
                          Board Memory Anchor
                        </span>
                        <p className="text-body-xs text-ink-80 font-mono">
                          {drug.memoryMnemonic}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Clinical Monitoring Rules */}
                  <div className="space-y-2 pt-1">
                    <div className="text-eyebrow text-ink-40">Nursing Assessment & Monitoring</div>
                    <ul className="list-disc pl-5 space-y-1 text-ink-70 text-body-xs">
                      {drug.nursingConsiderations.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Reversal / Antidote */}
                  {drug.antidoteOrReversal && (
                    <div className="text-meta-sm text-accent-dark bg-accent-wash/50 p-2.5 rounded border border-accent/20">
                      <strong>Reversal / Antidote:</strong> {drug.antidoteOrReversal}
                    </div>
                  )}

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
