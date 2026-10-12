"use client";

import React, { useState } from "react";
import { CORRIDOR_PLAYBOOKS, MigrationCorridor } from "@/data/corridors";
import { MapPin, Clock, ShieldAlert, ArrowRight } from "lucide-react";

interface CorridorPlaybooksProps {
  onSelectPassport: () => void;
}

export const CorridorPlaybooks: React.FC<CorridorPlaybooksProps> = ({ onSelectPassport }) => {
  const [selectedCorridorId, setSelectedCorridorId] = useState<string>("corr-ken-au");

  const currentCorridor: MigrationCorridor =
    CORRIDOR_PLAYBOOKS.find((c) => c.id === selectedCorridorId) || CORRIDOR_PLAYBOOKS[0];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>High-Intent Relocation Blueprints</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Country-to-Country Migration Playbooks
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Detailed, unedited step-by-step guides for the highest-volume international nursing migration corridors. Real costs in local currencies, timelines, and pitfalls.
          </p>
        </div>
      </div>

      {/* Corridor Selector Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {CORRIDOR_PLAYBOOKS.map((corridor) => {
          const isSelected = corridor.id === selectedCorridorId;
          return (
            <button
              key={corridor.id}
              onClick={() => setSelectedCorridorId(corridor.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-32 ${
                isSelected
                  ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-md ring-2 ring-emerald-500/20"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{corridor.originFlag} ➔ {corridor.destinationFlag}</span>
                <span className="text-[12px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900 px-2 py-0.5 rounded">
                  {corridor.destinationCountry}
                </span>
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  {corridor.originCountry} to {corridor.destinationCountry}
                </div>
                <div className="text-[12px] text-slate-500 truncate">{corridor.primaryTargetExam}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Corridor Deep-Dive Blueprint */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
        {/* Corridor Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentCorridor.originFlag} ➔ {currentCorridor.destinationFlag}</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {currentCorridor.headline}
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Regulatory Board: <strong>{currentCorridor.regulatoryBoard}</strong> • Primary Visa: <strong>{currentCorridor.visaType}</strong>
            </p>
          </div>

          <button
            onClick={onSelectPassport}
            className="shrink-0 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Start This Pathway via Nurse Passport</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="text-[12px] uppercase font-bold text-slate-400">Total Official Cost</span>
            <div className="font-bold text-slate-900 dark:text-white">{currentCorridor.totalOfficialCostUSD}</div>
            <div className="text-[12px] text-emerald-600 font-semibold">{currentCorridor.localCurrencyEstimate}</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="text-[12px] uppercase font-bold text-slate-400">Realistic Timeline</span>
            <div className="font-bold text-slate-900 dark:text-white">{currentCorridor.estimatedTimelineMonths}</div>
            <div className="text-[12px] text-slate-500">From filing to flight</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="text-[12px] uppercase font-bold text-slate-400">Average Starting Pay</span>
            <div className="font-bold text-emerald-600">{currentCorridor.averageStartingSalary}</div>
            <div className="text-[12px] text-slate-500">Excluding night allowances</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
            <span className="text-[12px] uppercase font-bold text-slate-400">Target Licensing Exam</span>
            <div className="font-bold text-purple-600">{currentCorridor.primaryTargetExam}</div>
            <div className="text-[12px] text-slate-500">Pearson VUE Center</div>
          </div>
        </div>

        {/* Chronological Steps */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Chronological Step-by-Step Execution Plan:
          </h4>

          <div className="space-y-3">
            {currentCorridor.keySteps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {step.stepNumber}
                  </span>
                  <div className="space-y-1">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                      {step.title}
                    </h5>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-left sm:text-right pl-9 sm:pl-0">
                  <div className="font-bold text-emerald-600">{step.costUSD}</div>
                  <div className="text-[12px] text-slate-400 flex items-center sm:justify-end gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{step.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Pitfalls Warnings */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3 text-xs">
          <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 text-sm">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Predatory Middlemen & Broker Warnings for {currentCorridor.originCountry}:</span>
          </div>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            {currentCorridor.criticalPitfallsToAvoid.map((pitfall, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">⚠️</span>
                <span>{pitfall}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
