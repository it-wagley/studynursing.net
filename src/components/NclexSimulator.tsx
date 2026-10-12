"use client";

import React, { useState } from "react";
import { NCLEX_CASES, NclexCase } from "@/data/nclexCases";
import { FileCheck, Activity, Stethoscope, Info, Sparkles, ExternalLink } from "lucide-react";

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
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Multi-System NextGen NCLEX (NGN) QBank</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Clinical Judgment Unfolding Case Simulator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Simulate realistic hospital electronic health records (EHR) and CJMM decision models tested on both US NCLEX and Australia AHPRA OBA Part 1.
          </p>
        </div>
      </div>

      {/* Case Study Selector Bar */}
      <div className="flex flex-wrap gap-2.5">
        {NCLEX_CASES.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => handleSelectCase(idx)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
              selectedCaseIndex === idx
                ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-purple-300"
            }`}
          >
            <span>Case {idx + 1}: {c.clientName}</span>
            <span className={`text-[12px] px-2 py-0.5 rounded-full ${selectedCaseIndex === idx ? "bg-white/20 text-white" : "bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300"}`}>
              {c.category}
            </span>
          </button>
        ))}
      </div>

      {/* Main Split Layout: EHR Chart on Left, Question on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: The Electronic Health Record (EHR) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
          {/* Patient Banner */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                {currentCase.room}
              </span>
              <span className="text-[12px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold px-2 py-0.5 rounded">
                Allergy: {currentCase.allergies}
              </span>
            </div>
            <div className="font-extrabold text-base text-slate-900 dark:text-white">
              {currentCase.clientName} {currentCase.age > 0 ? `(${currentCase.age}y ${currentCase.gender})` : ""}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Admitting Dx:</strong> {currentCase.admitDiagnosis}
            </div>
          </div>

          {/* EHR Tab Bar */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setEhrTab("notes")}
              className={`pb-2 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
                ehrTab === "notes"
                  ? "border-purple-600 text-purple-600 dark:text-purple-400 font-bold"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Nurse&apos;s Notes</span>
            </button>
            <button
              onClick={() => setEhrTab("vitals")}
              className={`pb-2 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
                ehrTab === "vitals"
                  ? "border-purple-600 text-purple-600 dark:text-purple-400 font-bold"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Vital Signs</span>
            </button>
            <button
              onClick={() => setEhrTab("labs")}
              className={`pb-2 px-3 border-b-2 transition-all flex items-center gap-1.5 ${
                ehrTab === "labs"
                  ? "border-purple-600 text-purple-600 dark:text-purple-400 font-bold"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Lab Results</span>
            </button>
          </div>

          {/* EHR Tab Content */}
          <div className="text-xs min-h-[220px]">
            {ehrTab === "notes" && (
              <div className="space-y-3 font-mono bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                {currentCase.ehr.nursesNotes.map((n, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="font-bold text-slate-900 dark:text-white underline">
                      {n.time}:
                    </span>
                    <p className="leading-relaxed">{n.note}</p>
                  </div>
                ))}
              </div>
            )}

            {ehrTab === "vitals" && (
              <div className="space-y-3">
                {currentCase.ehr.vitals.map((v, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2"
                  >
                    <div className="font-bold text-slate-900 dark:text-white">Time: {v.time}</div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white dark:bg-slate-900 p-1.5 rounded border border-slate-200 dark:border-slate-800">
                        <div className="text-slate-400">BP</div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">{v.bp}</div>
                      </div>
                      <div className="bg-white dark:bg-slate-900 p-1.5 rounded border border-slate-200 dark:border-slate-800">
                        <div className="text-slate-400">HR</div>
                        <div className="font-bold text-amber-600">{v.hr}</div>
                      </div>
                      <div className="bg-white dark:bg-slate-900 p-1.5 rounded border border-slate-200 dark:border-slate-800">
                        <div className="text-slate-400">SpO2</div>
                        <div className="font-bold text-red-600">{v.spo2}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {ehrTab === "labs" && (
              <div className="space-y-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                      <th className="py-1.5">Lab Test</th>
                      <th className="py-1.5">Result</th>
                      <th className="py-1.5">Reference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono">
                    {currentCase.ehr.labs.map((lab, idx) => (
                      <tr key={idx} className={lab.flagged ? "bg-amber-50/50 dark:bg-amber-950/20" : ""}>
                        <td className="py-1.5 font-sans font-medium text-slate-800 dark:text-slate-200">
                          {lab.test}
                        </td>
                        <td className={`py-1.5 font-bold ${lab.flagged ? "text-red-600" : ""}`}>
                          {lab.value} {lab.flagged ? "▲" : ""}
                        </td>
                        <td className="py-1.5 text-slate-500">{lab.reference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: The CJMM Question & Options */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              {currentCase.question.cjmmSkill}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
              {currentCase.question.prompt}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              {currentCase.question.instruction}
            </p>
          </div>

          {/* Option Checkboxes */}
          <div className="space-y-2.5">
            {currentCase.question.options.map((opt) => {
              const isChecked = selectedOptions.includes(opt.id);
              let optionStyle =
                "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800";

              if (isSubmitted) {
                if (opt.correct) {
                  optionStyle = "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 font-semibold";
                } else if (isChecked && !opt.correct) {
                  optionStyle = "border-red-500 bg-red-50/60 dark:bg-red-950/30 text-red-900 dark:text-red-200";
                }
              } else if (isChecked) {
                optionStyle = "border-purple-500 bg-purple-50/60 dark:bg-purple-950/30 ring-1 ring-purple-500";
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => handleToggleOption(opt.id)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${optionStyle}`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    readOnly
                    className="mt-0.5 rounded text-purple-600 focus:ring-purple-500 w-4 h-4"
                  />
                  <div className="flex-1 text-slate-800 dark:text-slate-200 leading-relaxed">
                    {opt.text}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOptions.length === 0}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-600/20 transition-all"
              >
                Submit Clinical Judgment
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all"
              >
                Retry Case Study ↻
              </button>
            )}

            {isSubmitted && (
              <span className={`text-xs font-bold flex items-center gap-1.5 ${isAllCorrect ? "text-emerald-600" : "text-amber-600"}`}>
                {isAllCorrect ? "✓ 100% Correct Clinical Actions" : "⚠️ Partial / Incorrect Decisions"}
              </span>
            )}
          </div>

          {/* Evidence-Based Rationale (Displayed after submission) */}
          {isSubmitted && (
            <div className="p-5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-500/30 text-xs space-y-3 animate-in fade-in duration-200">
              <div className="font-bold text-purple-900 dark:text-purple-300 text-sm flex items-center gap-2">
                <Info className="w-4 h-4 text-purple-600" />
                <span>Evidence-Based Clinical Rationale:</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentCase.question.rationale}
              </p>
              <div className="pt-2 border-t border-purple-500/20 text-purple-800 dark:text-purple-300 font-semibold">
                💡 {currentCase.question.clinicalTakeaway}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Partner Prep Affiliate & Hospital Sponsorship Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-purple-200 text-[12px] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Ready for the Full 2,500+ Question CAT Exam?</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold">
            Accelerate Your NCLEX-RN / AHPRA OBA Pass Rate with Verified Review Cohorts
          </h4>
          <p className="text-xs text-purple-200">
            StudyNursing.net members receive exclusive 20% tuition vouchers with certified Pearson VUE prep providers or direct US/Australia hospital interview scheduling upon passing.
          </p>
        </div>

        <button
          onClick={() => alert("Partner prep discount voucher dispatched to your registered email.")}
          className="shrink-0 px-6 py-3 bg-white text-purple-950 hover:bg-purple-50 rounded-xl font-bold text-xs transition-all shadow-lg flex items-center gap-2"
        >
          <span>Claim 20% Prep Voucher</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
