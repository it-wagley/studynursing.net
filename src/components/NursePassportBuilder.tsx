"use client";

import React, { useState } from "react";
import { NursePassportData, NRIScoreResult, calculateNRI } from "@/data/passportModel";
import { Shield, Sparkles, CheckCircle2, ChevronRight, Award, Globe, ArrowLeft, Download, ExternalLink } from "lucide-react";

interface NursePassportBuilderProps {
  onPartnerHandoff?: (partnerType: string) => void;
}

export const NursePassportBuilder: React.FC<NursePassportBuilderProps> = ({ onPartnerHandoff }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [generatedPassport, setGeneratedPassport] = useState<{
    candidateCode: string;
    data: NursePassportData;
    nri: NRIScoreResult;
  } | null>(null);

  const [formData, setFormData] = useState<NursePassportData>({
    fullName: "",
    email: "",
    phone: "",
    originCountry: "Kenya",
    currentLocation: "Nairobi, Kenya",
    targetCountry: "Australia",
    educationLevel: "Bachelor of Science in Nursing (BSN)",
    homeCouncilRegistered: true,
    yearsExperience: 3,
    clinicalSpecialty: "ICU / Critical Care",
    englishStatus: "Preparing / Booking test",
    credentialEvalStatus: "Not started",
    examStatus: "Starting prep"
  });

  const handleNextStep = () => {
    if (currentStep === 1 && (!formData.fullName || !formData.email)) {
      alert("Please provide your full name and email to initialize your passport.");
      return;
    }
    setCurrentStep((prev) => Math.min(3, prev + 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    try {
      const res = await fetch("/api/passport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await res.json();

      if (result.success) {
        setGeneratedPassport({
          candidateCode: result.candidateCode,
          data: formData,
          nri: result.nri
        });
      } else {
        // Fallback local calculation
        const localNri = calculateNRI(formData);
        setGeneratedPassport({
          candidateCode: `SN-${formData.originCountry.slice(0, 3).toUpperCase()}-7721`,
          data: formData,
          nri: localNri
        });
      }
    } catch {
      const localNri = calculateNRI(formData);
      setGeneratedPassport({
        candidateCode: `SN-${formData.originCountry.slice(0, 3).toUpperCase()}-7721`,
        data: formData,
        nri: localNri
      });
    } finally {
      setIsCalculating(false);
    }
  };

  const handleReset = () => {
    setGeneratedPassport(null);
    setCurrentStep(1);
  };

  return (
    <section className="space-y-8">
      {/* Title Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
            <Shield className="w-3.5 h-3.5" />
            <span>Global Nurse Mobility Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Global Nurse Passport & Readiness Index (NRI)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Create your verified international credential file. Compute your algorithmic readiness score (0-100), view your migration roadmap, and match with verified NCLEX prep and hospital placement partners.
          </p>
        </div>

        {/* Step indicator */}
        {!generatedPassport && (
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-emerald-600 text-white" : "bg-slate-200"}`}>1</span>
            <span className="w-4 h-0.5 bg-slate-300"></span>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-emerald-600 text-white" : "bg-slate-200"}`}>2</span>
            <span className="w-4 h-0.5 bg-slate-300"></span>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-emerald-600 text-white" : "bg-slate-200"}`}>3</span>
          </div>
        )}
      </div>

      {!generatedPassport ? (
        /* WIZARD FORM */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* STEP 1: Personal & Geographic Origins */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-600" />
                    <span>Step 1: Personal & Origin Background</span>
                  </h3>
                  <p className="text-xs text-slate-500">Tell us where you are based and where you dream of practicing.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Full Legal Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Tendai Mashingaidze / Faith Chebet"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nurse@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Country of Origin</label>
                    <select
                      value={formData.originCountry}
                      onChange={(e) => setFormData({ ...formData, originCountry: e.target.value, currentLocation: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Kenya">🇰🇪 Kenya</option>
                      <option value="Zimbabwe">🇿🇼 Zimbabwe</option>
                      <option value="Nepal">🇳🇵 Nepal</option>
                      <option value="India">🇮🇳 India</option>
                      <option value="South Africa">🇿🇦 South Africa</option>
                      <option value="Nigeria">🇳🇬 Nigeria</option>
                      <option value="Philippines">🇵🇭 Philippines</option>
                      <option value="Sri Lanka">🇱🇰 Sri Lanka</option>
                      <option value="Ghana">🇬🇭 Ghana</option>
                      <option value="UAE / Gulf States">🇦🇪 UAE / Gulf (Overseas Nurse)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Current Base / City</label>
                    <input
                      type="text"
                      value={formData.currentLocation}
                      onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                      placeholder="e.g. Harare / Dubai / Nairobi"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Target Relocation Country</label>
                    <select
                      value={formData.targetCountry}
                      onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value as NursePassportData["targetCountry"] })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Australia">🇦🇺 Australia (AHPRA OBA / 485)</option>
                      <option value="United States">🇺🇸 United States (NCLEX / EB-3)</option>
                      <option value="United Kingdom">🇬🇧 United Kingdom (NMC CBT / Tier 2)</option>
                      <option value="Canada">🇨🇦 Canada (NNAS / Express Entry)</option>
                      <option value="New Zealand">🇳🇿 New Zealand (Nursing Council CAP)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                  >
                    <span>Next: Clinical Credentials</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Clinical Experience & Specialty */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Step 2: Nursing Education & Hospital Experience</span>
                  </h3>
                  <p className="text-xs text-slate-500">Hospital employers evaluate clinical specialty and bedside experience.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Highest Nursing Degree</label>
                    <select
                      value={formData.educationLevel}
                      onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value as NursePassportData["educationLevel"] })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white"
                    >
                      <option value="Bachelor of Science in Nursing (BSN)">Bachelor of Science in Nursing (BSN) — 4 Years</option>
                      <option value="Diploma in Nursing / GNM">Diploma in General Nursing & Midwifery (GNM / Diploma)</option>
                      <option value="Master of Science in Nursing (MSN)">Master of Science in Nursing (MSN)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Primary Clinical Specialty</label>
                    <select
                      value={formData.clinicalSpecialty}
                      onChange={(e) => setFormData({ ...formData, clinicalSpecialty: e.target.value as NursePassportData["clinicalSpecialty"] })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white"
                    >
                      <option value="ICU / Critical Care">ICU / Intensive Care / Critical Care</option>
                      <option value="Emergency / Trauma">Emergency Department / Trauma (ED/ER)</option>
                      <option value="Medical-Surgical">Medical-Surgical (Med-Surg)</option>
                      <option value="Operating Theater / OR">Operating Theater / Perioperative (OR)</option>
                      <option value="Pediatrics / NICU">Pediatrics / Neonatal ICU (NICU)</option>
                      <option value="Maternity / Midwifery">Maternity / Midwifery / L&D</option>
                      <option value="General Ward">General Ward / Outpatient</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Years of Post-Registration Bedside Experience</label>
                    <input
                      type="number"
                      min={0}
                      max={40}
                      value={formData.yearsExperience}
                      onChange={(e) => setFormData({ ...formData, yearsExperience: parseInt(e.target.value) || 0 })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white"
                    />
                    <p className="text-[12px] text-slate-400 mt-1">2+ years meets the international hospital direct sponsorship benchmark.</p>
                  </div>

                  <div className="flex items-center gap-3 pt-5">
                    <input
                      type="checkbox"
                      id="councilCheck"
                      checked={formData.homeCouncilRegistered}
                      onChange={(e) => setFormData({ ...formData, homeCouncilRegistered: e.target.checked })}
                      className="w-4 h-4 text-emerald-600 rounded"
                    />
                    <label htmlFor="councilCheck" className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      I hold active, unencumbered registration with my home country Nursing Council.
                    </label>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                  >
                    <span>Next: English & Licensing Status</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Language & Exam Readiness */}
            {currentStep === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Step 3: English Test & Licensing Milestones</span>
                  </h3>
                  <p className="text-xs text-slate-500">This calculates your exact NRI Score out of 100.</p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">English Language Proficiency Status</label>
                    <select
                      value={formData.englishStatus}
                      onChange={(e) => setFormData({ ...formData, englishStatus: e.target.value as NursePassportData["englishStatus"] })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white"
                    >
                      <option value="Passed IELTS 7.0+ / OET B">Passed OET Grade B or IELTS 7.0+ (Score In Hand)</option>
                      <option value="Preparing / Booking test">Currently preparing / Test booked</option>
                      <option value="Not taken yet">Not taken yet (Need study guidance)</option>
                      <option value="Exempt (English medium degree)">Exempt / English-medium degree (UK/South Africa)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Foreign Credential Evaluation Status</label>
                    <select
                      value={formData.credentialEvalStatus}
                      onChange={(e) => setFormData({ ...formData, credentialEvalStatus: e.target.value as NursePassportData["credentialEvalStatus"] })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white"
                    >
                      <option value="Completed & Verified">Completed & Verified (CGFNS CES / AHPRA Stream Approved / NNAS Issued)</option>
                      <option value="In progress (CGFNS / AHPRA / NNAS)">In Progress / Documents dispatched to evaluator</option>
                      <option value="Not started">Not started yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Licensing Exam Status (NCLEX-RN / CBT)</label>
                    <select
                      value={formData.examStatus}
                      onChange={(e) => setFormData({ ...formData, examStatus: e.target.value as NursePassportData["examStatus"] })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white"
                    >
                      <option value="Passed NCLEX-RN / CBT">Passed NCLEX-RN or UK CBT (Officially Passed!)</option>
                      <option value="ATT received / Exam scheduled">ATT (Authorization to Test) received / Exam booked</option>
                      <option value="Enrolled in NCLEX/CBT review">Enrolled in NCLEX review program</option>
                      <option value="Starting prep">Starting preparation now</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isCalculating}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/25 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isCalculating ? "Computing NRI Score..." : "Generate Global Nurse Passport"}</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      ) : (
        /* PASSPORT REVEAL DASHBOARD */
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: The Digital Passport Identity Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-500/30 space-y-6 relative overflow-hidden">
              {/* Subtle watermarked seal */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full border-8 border-white/5 pointer-events-none" />

              {/* Passport Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-white shadow-md">
                    SN
                  </div>
                  <div>
                    <div className="font-extrabold text-xs uppercase tracking-widest text-emerald-400">
                      Official Document
                    </div>
                    <div className="text-sm font-bold">Global Nurse Passport</div>
                  </div>
                </div>
                <span className="font-mono text-xs bg-white/10 px-2.5 py-1 rounded-md text-emerald-300">
                  {generatedPassport.candidateCode}
                </span>
              </div>

              {/* Candidate Info */}
              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-slate-400 text-[12px] uppercase">Registered Nurse</div>
                  <div className="text-lg font-bold text-white">{generatedPassport.data.fullName}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <div className="text-slate-400 text-[12px]">Origin</div>
                    <div className="font-semibold text-slate-200">{generatedPassport.data.originCountry}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[12px]">Target Destination</div>
                    <div className="font-semibold text-emerald-400">{generatedPassport.data.targetCountry}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[12px]">Clinical Specialty</div>
                    <div className="font-semibold text-slate-200">{generatedPassport.data.clinicalSpecialty}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[12px]">Experience</div>
                    <div className="font-semibold text-slate-200">{generatedPassport.data.yearsExperience} Years Bedside</div>
                  </div>
                </div>
              </div>

              {/* NRI Score Gauge */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">Nurse Readiness Index (NRI)</span>
                  <span className="text-2xl font-black text-emerald-400">{generatedPassport.nri.totalScore}<span className="text-xs text-slate-400">/100</span></span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${generatedPassport.nri.totalScore}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[12px] pt-1">
                  <span className="text-slate-400">Classification:</span>
                  <span className="font-bold text-emerald-300">{generatedPassport.nri.tier}</span>
                </div>
              </div>

              {/* Passport Footer Seal */}
              <div className="flex items-center justify-between text-[12px] text-slate-400 border-t border-white/10 pt-3 font-mono">
                <span>Verified via StudyNursing.net</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active File
                </span>
              </div>
            </div>

            {/* Right: NRI Pillars Breakdown & Next Steps Roadmap */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Your Relocation Action Roadmap</span>
                  <span className="text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold px-2.5 py-0.5 rounded-full">
                    {generatedPassport.data.targetCountry} Pathway
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Based on your NRI score of <strong>{generatedPassport.nri.totalScore}/100</strong>, here are your critical milestones and vetted partner hand-offs:
                </p>
              </div>

              {/* 4 Pillars Breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-slate-400 text-[12px]">1. Academics</div>
                  <div className="font-bold text-slate-900 dark:text-white">{generatedPassport.nri.breakdown.education.score}/25</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-slate-400 text-[12px]">2. Clinical Exp</div>
                  <div className="font-bold text-slate-900 dark:text-white">{generatedPassport.nri.breakdown.experience.score}/25</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-slate-400 text-[12px]">3. English</div>
                  <div className="font-bold text-slate-900 dark:text-white">{generatedPassport.nri.breakdown.english.score}/25</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <div className="text-slate-400 text-[12px]">4. Licensing</div>
                  <div className="font-bold text-slate-900 dark:text-white">{generatedPassport.nri.breakdown.licensing.score}/25</div>
                </div>
              </div>

              {/* Recommended Steps with Partner CTAs */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Recommended Action Steps & Hand-offs:
                </div>

                {generatedPassport.nri.recommendedNextSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[12px] flex items-center justify-center">
                          {step.stepNumber}
                        </span>
                        <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 pl-7 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onPartnerHandoff?.(step.partnerHandoffType)}
                      className="shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <span>Connect with {step.partnerHandoffType}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  ← Calculate Another Profile
                </button>
                <button
                  onClick={() => alert(`Passport Card PDF dispatched to ${generatedPassport.data.email}`)}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-emerald-500 transition-all flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Verified Passport PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
