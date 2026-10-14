"use client";

import React, { useState } from "react";
import { NCLEX_CASES, NclexCase } from "@/data/nclexCases";
import { CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export const NclexSimulator: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [ehrTab, setEhrTab] = useState<"notes" | "vitals" | "labs">("notes");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const currentCase: NclexCase = NCLEX_CASES[selectedCaseIndex] || NCLEX_CASES[0];

  const handleSelectCase = (idx: number) => {
    setSelectedCaseIndex(idx);
    setSelectedOptions([]);
    setIsSubmitted(false);
    setEhrTab("notes");
  };

  const handleToggleOption = (id: string) => {
    if (isSubmitted) return;
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOptions([]);
    setIsSubmitted(false);
  };

  const correctOptionIds = currentCase.question.options
    .filter((o) => o.correct)
    .map((o) => o.id);

  const isAllCorrect =
    isSubmitted &&
    selectedOptions.length === correctOptionIds.length &&
    selectedOptions.every((id) => correctOptionIds.includes(id));

  return (
    <div className="space-y-6 font-sans">
      
      {/* Educational Notice */}
      <div className="bg-caution-wash border border-caution/25 rounded-md p-4 text-meta text-caution-body">
        <strong>Examination preparation notice:</strong> These unfolding case scenarios follow the NCSBN Clinical Judgment Measurement Model (CJMM) tested on both the US/Canada NCLEX-RN and Australia’s AHPRA OBA Part 1. They are educational simulations. Scores and answers are never tracked, stored, or reported.
      </div>

      {/* Case Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-line pb-4">
        <span className="text-meta text-ink-60 mr-2 font-medium">Select Unfolding Case:</span>
        {NCLEX_CASES.map((c, idx) => (
          <button
            key={c.id}
            type="button"
            onClick={() => handleSelectCase(idx)}
            className={`px-3.5 py-2 rounded-md text-body-xs font-semibold transition-colors min-h-control border ${
              selectedCaseIndex === idx
                ? "bg-accent text-white border-accent shadow-xs"
                : "bg-surface border-line text-ink-70 hover:bg-paper-alt hover:text-ink"
            }`}
          >
            Case {idx + 1}: {c.clientName}
          </button>
        ))}
      </div>

      {/* Patient Banner */}
      <div className="bg-surface border border-line rounded-lg p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-serif text-heading-md font-semibold text-ink">
              {currentCase.clientName}, Age {currentCase.age}
            </span>
            <span className="text-meta-sm px-2 py-0.5 rounded bg-paper-alt text-ink-70 border border-line">
              {currentCase.gender}
            </span>
          </div>
          <div className="text-body-xs text-ink-60">
            Admitting Diagnosis: <strong className="text-ink">{currentCase.admitDiagnosis}</strong>
          </div>
        </div>

        <div className="text-right text-meta-sm space-y-0.5 text-ink-60">
          <div>
            Room: <strong className="text-ink-80">{currentCase.room}</strong>
          </div>
          <div>
            Allergies: <span className="font-semibold text-caution-text">{currentCase.allergies}</span>
          </div>
        </div>
      </div>

      {/* Main Simulation Layout: EHR Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* Left Column: Electronic Health Record (EHR) */}
        <div className="bg-surface border border-line rounded-lg overflow-hidden shadow-xs">
          
          {/* EHR Tabs */}
          <div className="flex items-center border-b border-line bg-paper-alt">
            <button
              type="button"
              onClick={() => setEhrTab("notes")}
              className={`px-5 py-3 text-body-xs font-semibold border-b-2 transition-colors min-h-control ${
                ehrTab === "notes"
                  ? "border-accent text-accent-dark bg-surface"
                  : "border-transparent text-ink-60 hover:text-ink"
              }`}
            >
              Nurses&apos; Notes
            </button>
            <button
              type="button"
              onClick={() => setEhrTab("vitals")}
              className={`px-5 py-3 text-body-xs font-semibold border-b-2 transition-colors min-h-control ${
                ehrTab === "vitals"
                  ? "border-accent text-accent-dark bg-surface"
                  : "border-transparent text-ink-60 hover:text-ink"
              }`}
            >
              Vital Signs Log
            </button>
            <button
              type="button"
              onClick={() => setEhrTab("labs")}
              className={`px-5 py-3 text-body-xs font-semibold border-b-2 transition-colors min-h-control ${
                ehrTab === "labs"
                  ? "border-accent text-accent-dark bg-surface"
                  : "border-transparent text-ink-60 hover:text-ink"
              }`}
            >
              Laboratory Results
            </button>
          </div>

          {/* EHR Content Area */}
          <div className="p-6 text-body-xs leading-article min-h-[340px] text-ink-80 space-y-4">
            
            {ehrTab === "notes" && (
              <div className="space-y-3">
                <div className="text-eyebrow text-ink-40 border-b border-line-soft pb-1">
                  Clinical Progress Documentation
                </div>
                <div className="space-y-3">
                  {currentCase.ehr.nursesNotes.map((entry, idx) => (
                    <div key={idx} className="bg-paper-alt p-3.5 rounded border border-line-soft space-y-1">
                      <span className="font-mono text-meta-sm font-bold text-accent">
                        {entry.time}
                      </span>
                      <p className="text-body-xs text-ink leading-relaxed">
                        {entry.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {ehrTab === "vitals" && (
              <div className="space-y-3">
                <div className="text-eyebrow text-ink-40 border-b border-line-soft pb-1">
                  Recorded Vital Signs
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-body-xs">
                    <thead>
                      <tr className="border-b border-line text-ink-60 text-meta-sm">
                        <th className="py-2">Time</th>
                        <th className="py-2">BP</th>
                        <th className="py-2">HR</th>
                        <th className="py-2">RR</th>
                        <th className="py-2">Temp</th>
                        <th className="py-2">SpO2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line-soft tabular font-mono">
                      {currentCase.ehr.vitals.map((v, i) => (
                        <tr key={i}>
                          <td className="py-2.5 font-bold text-ink">{v.time}</td>
                          <td className="py-2.5 text-ink">{v.bp}</td>
                          <td className="py-2.5 text-ink">{v.hr}</td>
                          <td className="py-2.5 text-ink">{v.rr}</td>
                          <td className="py-2.5 text-ink">{v.temp}</td>
                          <td className="py-2.5 text-ink">{v.spo2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {ehrTab === "labs" && (
              <div className="space-y-3">
                <div className="text-eyebrow text-ink-40 border-b border-line-soft pb-1">
                  Laboratory Diagnostic Panel
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-body-xs">
                    <thead>
                      <tr className="border-b border-line text-ink-60 text-meta-sm">
                        <th className="py-2">Test Name</th>
                        <th className="py-2">Result</th>
                        <th className="py-2">Reference Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line-soft tabular font-mono">
                      {currentCase.ehr.labs.map((l, i) => (
                        <tr key={i} className={l.flagged ? "bg-caution-wash/50" : ""}>
                          <td className="py-2.5 font-sans font-medium text-ink">{l.test}</td>
                          <td className={`py-2.5 font-bold ${l.flagged ? "text-caution-text" : "text-ink"}`}>
                            {l.value} {l.flagged && "⚠️"}
                          </td>
                          <td className="py-2.5 text-ink-60">{l.reference}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Right Column: NextGen Question & Rationales */}
        <div className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-6">
          
          <div className="space-y-2 border-b border-line-soft pb-4">
            <span className="text-eyebrow text-accent font-bold">
              CJMM Step: {currentCase.question.cjmmSkill}
            </span>
            <h3 className="font-serif text-heading-md text-ink font-semibold">
              Clinical Decision Prompt
            </h3>
            <p className="text-body-sm text-ink-80 leading-relaxed pt-1">
              {currentCase.question.prompt}
            </p>
            <p className="text-meta-sm text-ink-60 italic">
              {currentCase.question.instruction}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentCase.question.options.map((option) => {
              const isSelected = selectedOptions.includes(option.id);
              let optionStyle = "border-line bg-surface hover:bg-paper-alt text-ink";

              if (isSubmitted) {
                if (option.correct) {
                  optionStyle = "border-accent bg-accent-wash/60 text-ink font-medium";
                } else if (isSelected && !option.correct) {
                  optionStyle = "border-caution/50 bg-caution-wash text-caution-body line-through";
                } else {
                  optionStyle = "border-line-soft opacity-60 bg-paper-alt";
                }
              } else if (isSelected) {
                optionStyle = "border-accent bg-accent-wash/40 text-ink font-medium";
              }

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleToggleOption(option.id)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-3.5 rounded-md border text-body-sm transition-colors min-h-control flex items-start gap-3 ${optionStyle}`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {}}
                    disabled={isSubmitted}
                    className="mt-1 h-4 w-4 rounded border-line-strong text-accent focus:ring-accent"
                    aria-label={option.text}
                  />
                  <span className="flex-1 leading-snug">{option.text}</span>
                </button>
              );
            })}
          </div>

          {/* Submission Controls */}
          <div className="pt-2 flex items-center gap-3">
            {!isSubmitted ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={selectedOptions.length === 0}
                className="px-6 py-3 bg-accent hover:bg-accent-dark disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-md font-semibold text-body-sm transition-colors min-h-control"
              >
                Submit Clinical Judgment
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-paper hover:bg-paper-alt text-ink border border-line-strong rounded-md font-semibold text-body-sm transition-colors min-h-control"
              >
                <RefreshCw className="w-4 h-4" aria-hidden="true" />
                <span>Retry this question</span>
              </button>
            )}
          </div>

          {/* Rationale Section */}
          {isSubmitted && (
            <div className="mt-5 p-5 bg-paper-alt border border-line rounded-md space-y-3">
              <div className="flex items-center gap-2 font-bold text-body-sm">
                {isAllCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <span className="text-accent-dark">Clinical judgment aligned</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-caution shrink-0" aria-hidden="true" />
                    <span className="text-caution-text">Review clinical rationale below</span>
                  </>
                )}
              </div>

              <div className="text-body-xs text-ink-80 leading-article space-y-2">
                <div className="font-semibold text-ink">Evidence-Based Rationale:</div>
                <p>{currentCase.question.rationale}</p>
              </div>

              {currentCase.question.clinicalTakeaway && (
                <div className="pt-2 border-t border-line/60 text-meta-sm text-ink-70">
                  <strong className="text-ink">Key Takeaway:</strong> {currentCase.question.clinicalTakeaway}
                </div>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
