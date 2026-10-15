import React, { useState } from "react";
import { CautionPanel } from "./CautionPanel";
import { GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

interface StudyPageProps {
  onNavigate?: (path: string) => void;
}

interface StudyOption {
  title: string;
  category: "Postgraduate Degree" | "Competence Assessment (CAP)" | "Exam Preparation";
  country: string;
  duration: string;
  audience: string;
  description: string;
}

const STUDY_OPTIONS: StudyOption[] = [
  {
    title: "Master of Nursing Practice (Pre-Registration / Graduate Entry)",
    category: "Postgraduate Degree",
    country: "Australia",
    duration: "2 Years Full-Time",
    audience: "Already-qualified nurses or degree holders seeking direct AHPRA registration",
    description: "An intensive two-year master's program accredited by ANMAC and approved by the NMBA. Includes 800+ hours of mandatory clinical placement in Australian hospital networks.",
  },
  {
    title: "Graduate Diploma in International Nursing / Bridging",
    category: "Postgraduate Degree",
    country: "United Kingdom",
    duration: "1 Year Full-Time",
    audience: "Overseas RNs seeking advanced clinical leadership and UK university qualification",
    description: "Postgraduate clinical study designed to transition international nursing diplomas to UK degree standing while preparing for the NMC Test of Competence.",
  },
  {
    title: "Competence Assessment Programme (CAP)",
    category: "Competence Assessment (CAP)",
    country: "New Zealand",
    duration: "6 to 12 Weeks",
    audience: "IQNs holding an official Nursing Council of New Zealand (NCNZ) Decision Letter",
    description: "Accredited polytechnic and university programs combining theoretical nursing modules with supervised clinical hospital placements to satisfy NCNZ registration conditions.",
  },
  {
    title: "Clinical OSCE Simulation & NextGen NCLEX Prep Courses",
    category: "Exam Preparation",
    country: "Australia / UK / Global Online",
    duration: "4 to 8 Weeks",
    audience: "Candidates preparing for the Adelaide RN OSCE, UK NMC OSCE, or Pearson VUE NCLEX",
    description: "Intensive hands-on simulation training with standardized patients, mock APIE stations, and clinical judgment test banks. Relationships with third-party providers disclosed.",
  },
];

export const StudyPage: React.FC<StudyPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryOfResidence: "",
    desiredIntake: "2027 Semester 1 (Feb/Mar)",
    studyInterest: "Postgraduate Master of Nursing (Australia)",
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.countryOfResidence || !formData.consent) {
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-10 font-sans max-w-measure mx-auto">
      {/* Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <span className="text-eyebrow text-ink-60">Higher Education</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Postgraduate &amp; Bridging</span>
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Study Pathways for Internationally Qualified Nurses
        </h1>
        <p className="text-body-lg text-ink-70 leading-relaxed">
          Postgraduate master&apos;s degrees, graduate diplomas, and New Zealand competence assessment programs (CAP) structured specifically for nurses who already hold a nursing diploma or bachelor&apos;s degree.
        </p>
      </div>

      {/* Scope Restriction Notice */}
      <div className="bg-paper-alt border border-line rounded-lg p-5 flex items-start gap-3">
        <GraduationCap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-body text-ink font-semibold block">
            Already-qualified nurses only
          </strong>
          <p className="text-body-sm text-ink-70 leading-relaxed">
            We do not publish school-leaver bachelor programs. All study options below are postgraduate programs or regulatory bridging courses designed for candidates with existing nursing education.
          </p>
        </div>
      </div>

      {/* Study Options Grid */}
      <section className="space-y-4">
        <h2 className="font-serif text-heading-md text-ink font-semibold">
          Accredited Study Pathways
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {STUDY_OPTIONS.map((opt) => (
            <div
              key={opt.title}
              className="bg-surface border border-line rounded-lg p-5 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line-soft pb-2">
                <div>
                  <span className="text-meta-sm font-mono text-accent uppercase tracking-wide block">
                    {opt.category} · {opt.country}
                  </span>
                  <h3 className="font-serif text-heading-sm text-ink font-semibold mt-0.5">
                    {opt.title}
                  </h3>
                </div>
                <span className="text-meta-sm font-medium bg-paper-alt px-2.5 py-1 rounded border border-line text-ink-70 self-start sm:self-auto">
                  {opt.duration}
                </span>
              </div>
              <p className="text-body-sm text-ink-70 leading-relaxed">
                {opt.description}
              </p>
              <div className="text-meta-sm text-ink-60 pt-1">
                <strong>Target candidate:</strong> {opt.audience}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Enquiry Form */}
      <section className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="font-serif text-heading-md text-ink font-semibold">
            Postgraduate Course Enquiries
          </h2>
          <p className="text-body-sm text-ink-70 leading-relaxed">
            Request official prospectuses and entry criteria from accredited university partners. We only collect contact details and course preferences; no documents are collected.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-accent-wash border border-accent/20 rounded-lg p-6 space-y-3">
            <div className="flex items-center gap-2 text-accent font-semibold text-heading-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Study Prospectus Request Submitted</span>
            </div>
            <p className="text-body text-ink-70 leading-relaxed">
              Thank you, {formData.fullName}. An admissions advisor from our accredited education partners will email course guides and intake details for <strong>{formData.studyInterest}</strong> directly to <strong>{formData.email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="studyName" className="text-label text-ink font-semibold block">
                  Full Name
                </label>
                <input
                  id="studyName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Priyah Nair"
                  className="w-full px-3.5 py-2.5 rounded border border-line bg-paper text-ink text-body-sm focus:outline-accent min-h-control"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="studyEmail" className="text-label text-ink font-semibold block">
                  Email Address
                </label>
                <input
                  id="studyEmail"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="priya@example.com"
                  className="w-full px-3.5 py-2.5 rounded border border-line bg-paper text-ink text-body-sm focus:outline-accent min-h-control"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="studyResidence" className="text-label text-ink font-semibold block">
                  Current Country of Residence
                </label>
                <input
                  id="studyResidence"
                  type="text"
                  required
                  value={formData.countryOfResidence}
                  onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                  placeholder="e.g. Singapore, UAE, India, Philippines"
                  className="w-full px-3.5 py-2.5 rounded border border-line bg-paper text-ink text-body-sm focus:outline-accent min-h-control"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="intake" className="text-label text-ink font-semibold block">
                  Desired Intake
                </label>
                <select
                  id="intake"
                  value={formData.desiredIntake}
                  onChange={(e) => setFormData({ ...formData, desiredIntake: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border border-line bg-paper text-ink text-body-sm focus:outline-accent min-h-control"
                >
                  <option value="2027 Semester 1 (Feb/Mar)">2027 Semester 1 (Feb / Mar)</option>
                  <option value="2027 Semester 2 (Jul/Aug)">2027 Semester 2 (Jul / Aug)</option>
                  <option value="2028 Intake">2028 Intake</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="interest" className="text-label text-ink font-semibold block">
                Program of Interest
              </label>
              <select
                id="interest"
                value={formData.studyInterest}
                onChange={(e) => setFormData({ ...formData, studyInterest: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded border border-line bg-paper text-ink text-body-sm focus:outline-accent min-h-control"
              >
                <option value="Postgraduate Master of Nursing (Australia)">Master of Nursing Practice (Australia - ANMAC Accredited)</option>
                <option value="Graduate Diploma in Nursing (UK)">Graduate Diploma / International Nursing (UK)</option>
                <option value="Competence Assessment Programme (New Zealand)">NZ Competence Assessment Programme (CAP)</option>
                <option value="Clinical OSCE Exam Preparation Course">OSCE Practical Preparation Simulation</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer text-body-sm text-ink-70">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-line text-accent focus:ring-accent"
                />
                <span>
                  I consent to StudyNursing.net forwarding my contact details to accredited educational institution partners for the selected study pathway. StudyNursing.net does not assess admissions eligibility.
                </span>
              </label>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-accent text-white hover:bg-accent-dark font-semibold text-body-sm transition-colors min-h-control"
              >
                <span>Request course prospectuses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Caution Panel */}
      <CautionPanel title="Educational placement disclaimer">
        <p>
          Enrolment in any university program or CAP course does not guarantee health registration or visa issuance. Prospective students must meet university academic entry requirements, English test floors, and health regulator professional standards independently.
        </p>
      </CautionPanel>

      {/* Cross-Link */}
      <div className="pt-4 border-t border-line flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("/compare")}
          className="text-body-sm font-semibold text-accent hover:text-accent-dark underline"
        >
          ← Compare all destinations
        </button>
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("/exams")}
          className="text-body-sm font-semibold text-ink-70 hover:text-ink underline"
        >
          Explore required examinations →
        </button>
      </div>
    </div>
  );
};
