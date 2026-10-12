"use client";

import React, { useState } from "react";
import { STUDY_VAULT_RESOURCES, VaultResource } from "@/data/studyVault";
import { Download, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export const StudyVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [downloadModalResource, setDownloadModalResource] = useState<VaultResource | null>(null);
  const [downloadEmail, setDownloadEmail] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const filteredResources =
    selectedCategory === "All"
      ? STUDY_VAULT_RESOURCES
      : STUDY_VAULT_RESOURCES.filter((r) => r.category === selectedCategory);

  const categories = ["All", "Cheat Sheets", "Immigration & Visas", "Licensing Exam Prep", "Clinical Pocket Guides"];

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmail) return;
    setIsSuccess(true);
  };

  const handleCloseModal = () => {
    setDownloadModalResource(null);
    setIsSuccess(false);
    setDownloadEmail("");
  };

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
            <Download className="w-3.5 h-3.5" />
            <span>Open Access International Nurse Vault</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Free Study Guides, Checklists & Formula Sheets
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Downloadable PDFs, official visa document checklists, and clinical pocket guides compiled for international nurses preparing for exams and relocation.
          </p>
        </div>

        <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 rounded-2xl text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white">100% Free Resources</div>
            <div className="text-[12px] text-emerald-700 dark:text-emerald-300">Shareable across cohort study groups</div>
          </div>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-2 rounded-xl font-medium transition-all ${
              selectedCategory === cat
                ? "bg-emerald-600 text-white font-bold shadow-sm"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  <span>{res.fileType} • {res.pagesCount}</span>
                </span>
                <span className="text-[12px] font-mono text-slate-400">{res.downloadsCount}</span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-snug">
                {res.title}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed">
                {res.summary}
              </p>

              <div className="text-[12px] text-slate-400">
                <strong>Audience:</strong> {res.targetAudience}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {res.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[12px] px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setDownloadModalResource(res)}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Free {res.fileType}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Download Email Capture Modal */}
      {downloadModalResource && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {!isSuccess ? (
              <>
                <div className="space-y-1">
                  <span className="text-[12px] font-bold text-emerald-600 uppercase tracking-wider">
                    Instant Free Download
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {downloadModalResource.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Enter your email to receive the direct PDF download link and join our international nurse cohort updates.
                  </p>
                </div>

                <form onSubmit={handleDownloadSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={downloadEmail}
                      onChange={(e) => setDownloadEmail(e.target.value)}
                      placeholder="nurse@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                    >
                      <span>Download PDF Now</span>
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Download Link Sent!
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>{downloadModalResource.title}</strong> has been prepared and dispatched to <strong>{downloadEmail}</strong>.
                </p>
                <button
                  onClick={handleCloseModal}
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
