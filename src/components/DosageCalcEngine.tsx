"use client";

import React, { useState } from "react";
import { DOSAGE_PROBLEMS, DosageProblem } from "@/data/dosageProblems";
import { generateRandomProblem } from "@/data/dosageGenerator";
import { Calculator, CheckCircle2, AlertCircle, RefreshCw, Lightbulb, ShieldAlert, Award, Sparkles, Download } from "lucide-react";

export const DosageCalcEngine: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"quiz" | "solver">("quiz");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentProblem, setCurrentProblem] = useState<DosageProblem>(DOSAGE_PROBLEMS[0]);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

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
    setScore((prev) => ({
      correct: correct ? prev.correct + 1 : prev.correct,
      total: prev.total + 1
    }));
  };

  const handleNextProblem = () => {
    setUserAnswer("");
    setHasSubmitted(false);
    setIsCorrect(false);
    // Generate an infinite algorithmic problem on the fly
    const nextCat = selectedCategory === "All" ? undefined : selectedCategory;
    const newProblem = generateRandomProblem(nextCat);
    setCurrentProblem(newProblem);
  };

  const categories = ["All", "IV Pump (mL/hr)", "Gravity Drip (gtt/min)", "Weight-Based (mcg/kg/min)", "Oral / Liquid"];

  // Solver calculations
  const calculatedResult =
    solverSupplyDose > 0
      ? Math.round(((solverOrderDose * solverSupplyVolume) / solverSupplyDose) * 100) / 100
      : 0;

  return (
    <section className="space-y-6">
      {/* Module Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
            <Calculator className="w-3.5 h-3.5" />
            <span>Infinite Academic Med-Math Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Dosage Calculation Trainer & Live Solver
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Algorithmic problem generator producing limitless practice scenarios with step-by-step dimensional analysis proofs.
          </p>
        </div>

        {/* Dual Mode Switcher */}
        <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveMode("quiz")}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeMode === "quiz"
                ? "bg-emerald-600 text-white font-bold shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            Practice Quiz (Infinite)
          </button>
          <button
            onClick={() => setActiveMode("solver")}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeMode === "solver"
                ? "bg-emerald-600 text-white font-bold shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            Live Formula Calculator
          </button>
        </div>
      </div>

      {activeMode === "quiz" ? (
        /* QUIZ MODE */
        <div className="space-y-6">
          {/* Category Pills & Generate CTA */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setUserAnswer("");
                    setHasSubmitted(false);
                    const newProb = generateRandomProblem(cat === "All" ? undefined : cat);
                    setCurrentProblem(newProb);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Score Counter */}
            <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 px-3.5 py-1.5 rounded-xl text-xs">
              <Award className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">
                  Score: {score.correct} / {score.total}
                </span>
                <span className="text-[12px] text-emerald-700 dark:text-emerald-300 ml-2">
                  {score.total > 0 ? `${Math.round((score.correct / score.total) * 100)}% Pass Rate` : "Practice Mode"}
                </span>
              </div>
            </div>
          </div>

          {/* Main Problem Interface */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between text-xs border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                Problem Type: {currentProblem.category}
              </span>
              <button
                onClick={handleNextProblem}
                className="flex items-center gap-1.5 text-emerald-600 font-bold hover:underline"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Generate New Problem 🎲</span>
              </button>
            </div>

            {/* Clinical Scenario Box */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Physician Order & Supply:
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                <span className="text-slate-500 dark:text-slate-400">Order:</span> {currentProblem.order}
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                <span className="text-slate-500 dark:text-slate-400">Available:</span> {currentProblem.supply}
              </div>
              <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300 pt-2 border-t border-slate-200 dark:border-slate-700/40">
                {currentProblem.question}
              </div>
            </div>

            {/* Input & Form Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Calculated Answer ({currentProblem.unit}):
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="any"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder={`e.g. ${currentProblem.correctAnswer}`}
                      disabled={hasSubmitted}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      disabled={hasSubmitted || !userAnswer}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shrink-0 transition-all"
                    >
                      Check
                    </button>
                  </div>
                </div>

                {/* Live Feedback */}
                {hasSubmitted && (
                  <div
                    className={`p-4 rounded-xl flex items-start gap-3 border text-xs ${
                      isCorrect
                        ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/30 text-emerald-800 dark:text-emerald-200"
                        : "bg-red-50 dark:bg-red-950/40 border-red-500/30 text-red-800 dark:text-red-200"
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-bold text-sm">
                        {isCorrect ? "Correct Calculation!" : "Incorrect — Review Mathematical Proof"}
                      </div>
                      <div className="mt-1">
                        Expected Answer:{" "}
                        <strong>
                          {currentProblem.correctAnswer} {currentProblem.unit}
                        </strong>
                      </div>
                    </div>
                  </div>
                )}

                {hasSubmitted && (
                  <button
                    type="button"
                    onClick={handleNextProblem}
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold transition-all"
                  >
                    Generate Next Algorithmic Problem 🎲
                  </button>
                )}
              </form>

              {/* Formula Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2 text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>Dimensional Analysis Rule</span>
                </span>
                <div className="font-mono bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs">
                  {currentProblem.formula}
                </div>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Every step is computed automatically using dimensional unit cancellation.
                </p>
              </div>
            </div>

            {/* Step-by-Step Breakdown */}
            {hasSubmitted && (
              <div className="p-5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/30 space-y-3 text-xs animate-in fade-in duration-200">
                <div className="font-bold text-emerald-800 dark:text-emerald-300 text-sm">
                  Step-by-Step Mathematical Proof:
                </div>
                <ol className="list-decimal list-inside space-y-1.5 font-mono text-slate-700 dark:text-slate-300">
                  {currentProblem.steps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>

                <div className="pt-3 mt-3 border-t border-emerald-500/20 flex items-start gap-2 text-slate-600 dark:text-slate-400">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">Clinical Safety Watch:</strong>{" "}
                    {currentProblem.clinicalTip}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* LIVE FORMULA CALCULATOR MODE */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Live Clinical Dosage Calculator (Universal Oral & Liquid)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Enter your clinical order numbers to generate an immediate step-by-step formula solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Prescribed Order (Dose Desired)
              </label>
              <input
                type="number"
                value={solverOrderDose}
                onChange={(e) => setSolverOrderDose(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 dark:text-white"
              />
              <span className="text-[12px] text-slate-400">e.g. 500 mg</span>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Supply on Hand (Dose Available)
              </label>
              <input
                type="number"
                value={solverSupplyDose}
                onChange={(e) => setSolverSupplyDose(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 dark:text-white"
              />
              <span className="text-[12px] text-slate-400">e.g. 250 mg</span>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Vehicle Volume / Units (mL or Tabs)
              </label>
              <input
                type="number"
                value={solverSupplyVolume}
                onChange={(e) => setSolverSupplyVolume(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 dark:text-white"
              />
              <span className="text-[12px] text-slate-400">e.g. 5 mL or 1 tablet</span>
            </div>
          </div>

          {/* Instant Computed Result Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-emerald-800 dark:text-emerald-300">
                Calculated Amount to Administer:
              </span>
              <span className="text-3xl font-black text-emerald-600">
                {calculatedResult} <span className="text-sm font-normal text-slate-500">units / mL</span>
              </span>
            </div>

            <div className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
              Formula: (Desired ÷ Have) × Quantity = ({solverOrderDose} ÷ {solverSupplyDose}) × {solverSupplyVolume} = {calculatedResult}
            </div>
          </div>
        </div>
      )}

      {/* Free Cheat Sheet Lead Capture Hook */}
      <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="font-bold text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Download 1-Page Master Dosage Math & IV Drip Cheat Sheet (PDF)</span>
          </div>
          <p className="text-xs text-slate-400">
            Contains all 10 universal nursing formulas, pediatric weight tables, and metric unit conversion mnemonics.
          </p>
        </div>
        <button
          onClick={() => alert("Dosage Calculation Master Cheat Sheet (PDF) dispatched to your email!")}
          className="shrink-0 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Free PDF</span>
        </button>
      </div>
    </section>
  );
};
