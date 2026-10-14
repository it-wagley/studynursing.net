"use client";

import React, { useState } from "react";
import { DOSAGE_PROBLEMS, DosageProblem } from "@/data/dosageProblems";
import { generateRandomProblem } from "@/data/dosageGenerator";
import { CheckCircle2, AlertCircle, RefreshCw, HelpCircle, ArrowRight } from "lucide-react";

export const DosageCalcEngine: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"quiz" | "solver">("quiz");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentProblem, setCurrentProblem] = useState<DosageProblem>(DOSAGE_PROBLEMS[0]);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showWorking, setShowWorking] = useState<boolean>(false);

  // Custom Solver State
  const [solverOrderDose, setSolverOrderDose] = useState<number>(250);
  const [solverSupplyDose, setSolverSupplyDose] = useState<number>(125);
  const [solverSupplyVolume, setSolverSupplyVolume] = useState<number>(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer) return;

    const parsed = parseFloat(userAnswer);
    const expected = currentProblem.correctAnswer;
    const tolerance = currentProblem.tolerance || 0.05;

    const correct = Math.abs(parsed - expected) <= tolerance;
    setIsCorrect(correct);
    setHasSubmitted(true);
  };

  const handleNextProblem = () => {
    setUserAnswer("");
    setHasSubmitted(false);
    setIsCorrect(false);
    setShowWorking(false);
    const nextCat = selectedCategory === "All" ? undefined : selectedCategory;
    const newProblem = generateRandomProblem(nextCat);
    setCurrentProblem(newProblem);
  };

  const categories = [
    "All",
    "IV Pump (mL/hr)",
    "Gravity Drip (gtt/min)",
    "Weight-Based (mcg/kg/min)",
    "Oral / Liquid",
  ];

  const calculatedResult =
    solverSupplyDose > 0
      ? Math.round(((solverOrderDose / solverSupplyDose) * solverSupplyVolume) * 100) / 100
      : 0;

  return (
    <div className="space-y-6 font-sans">
      
      {/* Educational Notice */}
      <div className="bg-caution-wash border border-caution/25 rounded-md p-4 text-meta text-caution-body">
        <strong>Examination preparation notice:</strong> This tool generates limitless clinical math questions for licensure exams. It provides step-by-step dimensional analysis proofs for study. Answers and scores are never tracked or saved.
      </div>

      {/* Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <div className="flex items-center gap-1.5 p-1 bg-paper-alt rounded-md border border-line text-body-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveMode("quiz")}
            className={`px-3.5 py-2 rounded-sm transition-colors min-h-control ${
              activeMode === "quiz"
                ? "bg-accent text-white font-bold shadow-sm"
                : "text-ink-70 hover:text-ink"
            }`}
          >
            Practice Problem Generator
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("solver")}
            className={`px-3.5 py-2 rounded-sm transition-colors min-h-control ${
              activeMode === "solver"
                ? "bg-accent text-white font-bold shadow-sm"
                : "text-ink-70 hover:text-ink"
            }`}
          >
            Clinical Formula Verifier
          </button>
        </div>

        {activeMode === "quiz" && (
          <div className="flex flex-wrap items-center gap-1.5 text-body-xs">
            <span className="text-meta text-ink-60 mr-1 font-medium">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  const newProblem = generateRandomProblem(cat === "All" ? undefined : cat);
                  setCurrentProblem(newProblem);
                  setUserAnswer("");
                  setHasSubmitted(false);
                  setShowWorking(false);
                }}
                className={`px-2.5 py-1.5 rounded-sm border transition-colors min-h-control ${
                  selectedCategory === cat
                    ? "bg-paper text-ink font-bold border-line-strong shadow-xs"
                    : "bg-surface text-ink-60 border-line hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {activeMode === "quiz" ? (
        /* QUIZ MODE */
        <div className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-6">
          
          {/* Problem Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line-soft pb-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-sm bg-accent-wash text-accent-dark text-label font-bold uppercase tracking-label">
                {currentProblem.category}
              </span>
              <span className="text-meta text-ink-60 font-medium">
                Problem ID: {currentProblem.id}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextProblem}
              className="inline-flex items-center gap-1.5 text-meta font-medium text-accent hover:underline min-h-control"
            >
              <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Generate another scenario</span>
            </button>
          </div>

          {/* Scenario Text */}
          <div className="space-y-4">
            <h3 className="font-serif text-heading-md text-ink font-semibold">
              Clinical Scenario
            </h3>
            <div className="bg-paper-alt border border-line-soft p-5 rounded-md space-y-2 text-body text-ink-80 leading-article">
              <p><strong>Provider Order:</strong> {currentProblem.order}</p>
              <p><strong>Available Supply:</strong> {currentProblem.supply}</p>
              <p className="font-semibold text-ink pt-1">{currentProblem.question}</p>
            </div>
          </div>

          {/* Answer Form */}
          <form onSubmit={handleSubmit} className="space-y-5 pt-2">
            <div className="space-y-2">
              <label htmlFor="user-answer" className="block text-body-sm font-semibold text-ink">
                Calculate the required dose:
              </label>
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <input
                    id="user-answer"
                    type="number"
                    step="any"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter numerical answer"
                    disabled={hasSubmitted}
                    required
                    className="w-56 px-3.5 py-3 bg-surface border border-line-strong rounded-md text-body font-mono text-ink tabular focus:outline-accent min-h-control"
                  />
                </div>
                <span className="text-body-sm font-medium text-ink-70">
                  {currentProblem.unit}
                </span>

                {!hasSubmitted ? (
                  <button
                    type="submit"
                    className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-md font-semibold text-body-sm transition-colors min-h-control"
                  >
                    Check answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextProblem}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-md font-semibold text-body-sm transition-colors min-h-control"
                  >
                    <span>Next question</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </form>

          {/* Answer Result & Dimensional Analysis */}
          {hasSubmitted && (
            <div
              className={`rounded-md p-5 border ${
                isCorrect
                  ? "bg-accent-wash/60 border-accent/30 text-ink"
                  : "bg-caution-wash border-caution/30 text-caution-body"
              } space-y-3`}
            >
              <div className="flex items-center gap-2 font-bold text-body">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <span className="text-accent-dark">Correct calculation</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-caution shrink-0" aria-hidden="true" />
                    <span className="text-caution-text">Calculation discrepancy</span>
                  </>
                )}
              </div>

              <p className="text-body-sm">
                Expected answer: <strong className="tabular font-mono">{currentProblem.correctAnswer} {currentProblem.unit}</strong>
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowWorking(!showWorking)}
                  className="inline-flex items-center gap-1.5 text-meta font-semibold text-accent hover:underline min-h-control"
                >
                  <HelpCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{showWorking ? "Hide formula proof" : "Show formula proof & working"}</span>
                </button>

                {showWorking && (
                  <div className="mt-3 p-4 bg-surface rounded border border-line space-y-3 text-body-xs font-mono tabular text-ink-80">
                    <div className="font-sans font-semibold text-ink text-meta uppercase tracking-eyebrow">
                      Formula & Step-by-Step Proof
                    </div>
                    <p className="font-sans text-body-sm font-semibold text-ink">
                      {currentProblem.formula}
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 font-mono text-body-xs text-ink leading-relaxed">
                      {currentProblem.steps.map((st, i) => (
                        <li key={i}>{st}</li>
                      ))}
                    </ol>
                    {currentProblem.clinicalTip && (
                      <p className="font-sans text-meta-sm text-ink-60 pt-2 border-t border-line/50">
                        <strong>Clinical Tip:</strong> {currentProblem.clinicalTip}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      ) : (
        /* SOLVER MODE */
        <div className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-6">
          <div className="border-b border-line-soft pb-3">
            <h3 className="font-serif text-heading-md text-ink font-semibold">
              Standard Formula Verifier: Desire over Have
            </h3>
            <p className="text-body-xs text-ink-60 mt-1">
              Verify basic oral and parenteral drug administrations using the foundational formula: (Desired Dose ÷ Available Supply) × Quantity Volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            <div className="space-y-2">
              <label htmlFor="solver-order" className="block text-body-sm font-semibold text-ink">
                1. Desired / Ordered dose:
              </label>
              <input
                id="solver-order"
                type="number"
                value={solverOrderDose}
                onChange={(e) => setSolverOrderDose(parseFloat(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 bg-surface border border-line-strong rounded-md text-body font-mono text-ink tabular focus:outline-accent min-h-control"
              />
              <span className="text-meta-sm text-ink-60 block">e.g. 250 mg</span>
            </div>

            <div className="space-y-2">
              <label htmlFor="solver-supply" className="block text-body-sm font-semibold text-ink">
                2. Supply on hand (Have):
              </label>
              <input
                id="solver-supply"
                type="number"
                value={solverSupplyDose}
                onChange={(e) => setSolverSupplyDose(parseFloat(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 bg-surface border border-line-strong rounded-md text-body font-mono text-ink tabular focus:outline-accent min-h-control"
              />
              <span className="text-meta-sm text-ink-60 block">e.g. 125 mg</span>
            </div>

            <div className="space-y-2">
              <label htmlFor="solver-vol" className="block text-body-sm font-semibold text-ink">
                3. Quantity / Volume:
              </label>
              <input
                id="solver-vol"
                type="number"
                value={solverSupplyVolume}
                onChange={(e) => setSolverSupplyVolume(parseFloat(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 bg-surface border border-line-strong rounded-md text-body font-mono text-ink tabular focus:outline-accent min-h-control"
              />
              <span className="text-meta-sm text-ink-60 block">e.g. 5 mL (or 1 tab)</span>
            </div>

          </div>

          <div className="p-5 bg-paper-alt rounded-md border border-line space-y-2">
            <div className="text-eyebrow text-ink-40">Calculated outcome</div>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-heading-lg font-bold text-ink tabular">
                {calculatedResult}
              </span>
              <span className="text-body-sm text-ink-70 font-medium">
                units / mL to administer
              </span>
            </div>
            <div className="text-meta-sm text-ink-60 font-mono pt-1">
              Proof: ({solverOrderDose} ÷ {solverSupplyDose}) × {solverSupplyVolume} = {calculatedResult}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
