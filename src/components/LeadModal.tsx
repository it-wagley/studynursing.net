"use client";

import React, { useState } from "react";
import { X, CheckCircle, Download, Sparkles, ShieldCheck } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCountry?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, defaultCountry = "au" }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("Registered Nurse (BSN) in Home Country");
  const [destination, setDestination] = useState(defaultCountry);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          currentQualification: qualification,
          targetDestination: destination
        })
      });

      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFullName("");
    setEmail("");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2026 Admissions & Registration Guide</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Free Overseas Nursing Roadmap & University List
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Receive our comprehensive PDF breaking down accredited Australian & US nursing universities, AHPRA OBA requirements, and scholarship opportunities.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Maria Santos"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maria@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+61 400 000 000"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Your Current Nursing Qualification
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white"
                >
                  <option value="Registered Nurse (BSN) in Home Country">
                    Registered Nurse (BSN / GNM) in Home Country
                  </option>
                  <option value="High School Graduate (Seeking Bachelor's Abroad)">
                    High School Graduate (Seeking Bachelor of Nursing Abroad)
                  </option>
                  <option value="Non-Nursing Degree (Seeking Graduate Entry / Master's)">
                    Non-Nursing Bachelor&apos;s Degree (Seeking Graduate Entry / Master&apos;s)
                  </option>
                  <option value="Other Healthcare Professional">
                    Other Healthcare Professional (Midwife, Physio, etc.)
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Target Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-emerald-500 text-slate-900 dark:text-white"
                >
                  <option value="au">🇦🇺 Australia (AHPRA OBA / Subclass 500 / 485)</option>
                  <option value="us">🇺🇸 United States (NCLEX-RN / CGFNS / EB-3)</option>
                  <option value="uk">🇬🇧 United Kingdom (NMC CBT / OSCE)</option>
                  <option value="ca">🇨🇦 Canada (NNAS / Express Entry)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? "Generating Custom Guide..." : "Get Free Pathway Guide & University List"}</span>
                <Download className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[12px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Free • No spam • Official university admissions data</span>
              </div>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-full mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Roadmap Successfully Generated!
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
              We have prepared your personalized roadmap for <strong>{fullName}</strong>. A copy has been dispatched to <strong>{email}</strong>.
            </p>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-left space-y-1">
              <div className="font-bold text-slate-800 dark:text-slate-200">Next Steps:</div>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                <li>Check your inbox for the 2026 University Application Checklist.</li>
                <li>Practice our free Dosage Calculation trainer to prep for admissions math.</li>
                <li>Ask Florence AI any questions about English exams (IELTS vs OET).</li>
              </ul>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold"
            >
              Back to StudyNursing.net
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
