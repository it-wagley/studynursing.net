"use client";

import React, { useState, useEffect } from "react";
import { CandidateCard, SAMPLE_CANDIDATE_POOL } from "@/data/passportModel";
import { Building2, Filter, ArrowUpRight, CheckCircle } from "lucide-react";

export const RecruiterPortal: React.FC = () => {
  const [candidates, setCandidates] = useState<CandidateCard[]>(SAMPLE_CANDIDATE_POOL);
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [selectedCandidateForLead, setSelectedCandidateForLead] = useState<CandidateCard | null>(null);
  const [isSuccessUnlocked, setIsSuccessUnlocked] = useState<boolean>(false);

  useEffect(() => {
    let filtered = [...SAMPLE_CANDIDATE_POOL];
    if (selectedCountry !== "All") {
      filtered = filtered.filter((c) => c.targetCountry === selectedCountry);
    }
    if (selectedSpecialty !== "All") {
      filtered = filtered.filter((c) => c.specialty.includes(selectedSpecialty));
    }
    setCandidates(filtered);
  }, [selectedCountry, selectedSpecialty]);

  const handleUnlockCandidate = (candidate: CandidateCard) => {
    setSelectedCandidateForLead(candidate);
    setIsSuccessUnlocked(false);
  };

  return (
    <section className="space-y-8">
      {/* Recruiter Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
            <Building2 className="w-3.5 h-3.5" />
            <span>B2B Institutional Pipeline & Employer Exchange</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Vetted Global Nurse Candidate Exchange
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Access scored, English-verified, and NCLEX-ready international nurses from Kenya, Zimbabwe, South Africa, Nepal, India, and the Gulf seeking hospital placement in Australia, the US, and the UK.
          </p>
        </div>

        {/* B2B Valuation Metric Badges */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 dark:bg-blue-950/40 border border-blue-500/20 rounded-xl text-xs">
            <div className="font-bold text-blue-700 dark:text-blue-300">Active Talent Pool</div>
            <div className="text-slate-500 text-[12px]">12,450+ Scored Passports</div>
          </div>
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 rounded-xl text-xs">
            <div className="font-bold text-emerald-700 dark:text-emerald-300">Average CPL Value</div>
            <div className="text-slate-500 text-[12px]">$250 – $500 per nurse</div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-wrap gap-4 items-center justify-between text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
            <Filter className="w-3.5 h-3.5 text-blue-600" />
            <span>Filter By Destination:</span>
          </div>
          {["All", "Australia", "United States", "United Kingdom", "Canada"].map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedCountry === country
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100"
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-700 dark:text-slate-300">Specialty:</span>
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200"
          >
            <option value="All">All Specialties</option>
            <option value="ICU">ICU / Critical Care</option>
            <option value="Emergency">Emergency / Trauma</option>
            <option value="Medical-Surgical">Med-Surg</option>
            <option value="Operating Theater">Operating Theater (OR)</option>
            <option value="Pediatrics">Pediatrics / NICU</option>
          </select>
        </div>
      </div>

      {/* Candidate Pipeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((cand) => (
          <div
            key={cand.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5 relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                  {cand.candidateCode}
                </span>
                <div className="font-extrabold text-base text-slate-900 dark:text-white mt-0.5">
                  {cand.education}
                </div>
                <div className="text-xs text-slate-500">
                  {cand.originCountry} • Currently in {cand.currentBase}
                </div>
              </div>

              {/* NRI Score badge */}
              <div className="text-right">
                <div className="text-xs text-slate-400">NRI Score</div>
                <div className="text-xl font-black text-emerald-600">
                  {cand.nriScore}<span className="text-xs text-slate-400">/100</span>
                </div>
              </div>
            </div>

            {/* Candidate Specs */}
            <div className="space-y-2 text-xs border-y border-slate-100 dark:border-slate-800 py-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Clinical Specialty:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{cand.specialty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Bedside Experience:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{cand.yearsExperience} Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">English Benchmark:</span>
                <span className="font-semibold text-emerald-600">{cand.englishStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Licensing Exam:</span>
                <span className="font-semibold text-purple-600">{cand.examStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Target Destination:</span>
                <span className="font-bold text-slate-900 dark:text-white">{cand.targetCountry}</span>
              </div>
            </div>

            {/* Action Bottom */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <span className="text-[12px] font-mono text-slate-400">
                {cand.leadValueEstimate}
              </span>
              <button
                onClick={() => handleUnlockCandidate(cand)}
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm shadow-blue-600/20"
              >
                <span>Request Introduction</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recruiter Intake Modal */}
      {selectedCandidateForLead && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {!isSuccessUnlocked ? (
              <>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Institutional Employer Handoff
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Unlock Candidate File: {selectedCandidateForLead.candidateCode}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Target: {selectedCandidateForLead.targetCountry} • {selectedCandidateForLead.specialty} ({selectedCandidateForLead.yearsExperience} yrs exp)
                  </p>
                </div>

                <div className="p-3.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-500/20 rounded-xl text-xs space-y-1 text-blue-900 dark:text-blue-200">
                  <div className="font-bold">Monetization Verification:</div>
                  <p className="text-[12px] leading-relaxed">
                    Recruitment agencies and NCLEX prep centers purchase qualified files via API / CRM feed at <strong>{selectedCandidateForLead.leadValueEstimate}</strong>.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Recruitment Agency / Institution Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Avant Healthcare / Medacs / NHS Trust"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Official Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="recruiter@hospitalgroup.com"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedCandidateForLead(null)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsSuccessUnlocked(true)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    Submit Candidate Lead Request
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Introduction Request Dispatched
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Candidate file <strong>{selectedCandidateForLead.candidateCode}</strong> has been tagged in our pipeline router. The recruiter packet has been dispatched.
                </p>
                <button
                  onClick={() => setSelectedCandidateForLead(null)}
                  className="px-5 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
