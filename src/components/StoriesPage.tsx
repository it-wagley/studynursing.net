import React, { useState } from "react";
import { CautionPanel } from "./CautionPanel";
import { CheckCircle2, Filter, Calendar, MapPin, Award } from "lucide-react";

interface StoriesPageProps {
  onNavigate?: (path: string) => void;
}

export interface ContributorStory {
  id: string;
  name: string;
  completedYear: number;
  route: string;
  trainedIn: string;
  nowIn: string;
  currentRole: string;
  verifiedOnRegister: boolean;
  summary: string;
  keyLearnings: string[];
}

const STORIES_DATA: ContributorStory[] = [
  {
    id: "story-1",
    name: "Arun K.",
    completedYear: 2024,
    route: "AHPRA OBA (Stream B)",
    trainedIn: "Kerala, India",
    nowIn: "Melbourne, Victoria, Australia",
    currentRole: "Emergency Department Registered Nurse",
    verifiedOnRegister: true,
    summary: "Completed four years of acute medical-surgical nursing in Ernakulam before pursuing Australian registration. Sat the NCLEX-RN at Pearson VUE Bangalore and completed the RN OSCE at Adelaide Health Simulation on first attempt.",
    keyLearnings: [
      "Focused heavily on dimensional analysis for pediatric and IV dosage calculations during NCLEX prep.",
      "The Adelaide OSCE places massive weight on patient dignity, active consent, and structured ISBAR communication.",
      "Ensured Indian Nursing Council license was active and continuous before initiating AHPRA portfolio upload.",
    ],
  },
  {
    id: "story-2",
    name: "Maria Theresa L.",
    completedYear: 2023,
    route: "NMC Test of Competence (ToC 2021)",
    trainedIn: "Manila, Philippines",
    nowIn: "Birmingham, United Kingdom",
    currentRole: "Cardiothoracic High Dependency Unit RN",
    verifiedOnRegister: true,
    summary: "Worked three years in a tertiary coronary care unit in Quezon City. Completed the NMC CBT from Manila before traveling to the University of Northampton test centre for the 10-station clinical OSCE.",
    keyLearnings: [
      "NMC CBT Part A (numeracy) requires 100% accuracy on drug math—practicing ungated question banks was critical.",
      "In the UK OSCE APIE stations, strict handwriting legibility on the nursing care plan was heavily emphasized.",
      "OET scores were clubbed across two sittings within a four-month window.",
    ],
  },
  {
    id: "story-3",
    name: "Grace N.",
    completedYear: 2024,
    route: "Nursing Council of New Zealand (CAP)",
    trainedIn: "Nairobi, Kenya",
    nowIn: "Christchurch, New Zealand",
    currentRole: "Older Persons Health & Rehabilitation RN",
    verifiedOnRegister: true,
    summary: "Trained in Nairobi and completed five years of general hospital clinical service. Navigated CGFNS CVS-NCNZ verification and completed an 8-week Competence Assessment Programme (CAP) at an accredited South Island polytechnic.",
    keyLearnings: [
      "CGFNS document authentication took six months; requested alma mater transcripts early.",
      "The New Zealand CAP placement evaluated bi-cultural healthcare models and the Treaty of Waitangi principles in clinical practice.",
      "Secured detailed hospital statements of service documenting 3,000+ hours prior to departing Kenya.",
    ],
  },
  {
    id: "story-4",
    name: "Benjamin C.",
    completedYear: 2025,
    route: "Gulf Stepping-Stone to Australia",
    trainedIn: "Cebu, Philippines",
    nowIn: "Riyadh, Saudi Arabia → Preparing Australia OBA",
    currentRole: "Surgical Intensive Care Unit Staff Nurse",
    verifiedOnRegister: true,
    summary: "Moved to a tertiary specialist hospital in Riyadh to fund international registration costs. Actively maintains Philippine PRC registration while archiving certified statements of service for an NMBA application.",
    keyLearnings: [
      "Treated the two-year Gulf stint as a structured study period, passing the NCLEX-RN at the Pearson VUE Riyadh centre.",
      "Retained written supervisory reference letters on hospital letterhead with verified nurse manager emails.",
      "Kept Philippine PRC license current through online portal renewals to prevent regulatory credential blocks.",
    ],
  },
];

export const StoriesPage: React.FC<StoriesPageProps> = ({ onNavigate }) => {
  const [selectedRoute, setSelectedRoute] = useState<string>("all");

  const filteredStories = selectedRoute === "all"
    ? STORIES_DATA
    : STORIES_DATA.filter((s) => s.route === selectedRoute);

  return (
    <div className="space-y-10 font-sans max-w-measure mx-auto">
      {/* Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <span className="text-eyebrow text-ink-60">Nurse Experiences</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Contributor Stories</span>
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Verified Contributor Experiences
        </h1>
        <p className="text-body-lg text-ink-70 leading-relaxed">
          First-person accounts from internationally qualified nurses who have completed registration across Australia, the UK, New Zealand, and the Gulf.
        </p>
      </div>

      {/* Mandatory Requirements Change Notice */}
      <CautionPanel title="Requirements change notice">
        <p>
          Regulatory criteria, examination formats, and statutory fees evolve continuously. Each story below displays the calendar year the contributor completed registration. Their experience reflects the rules in effect at that time; always check current standards on our official destination guides.
        </p>
      </CautionPanel>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-paper-alt border border-line rounded-lg p-3.5">
        <div className="flex items-center gap-2 text-meta-sm text-ink font-semibold">
          <Filter className="w-4 h-4 text-accent" />
          <span>Filter by Pathway:</span>
        </div>
        <select
          value={selectedRoute}
          onChange={(e) => setSelectedRoute(e.target.value)}
          className="px-3 py-1.5 rounded border border-line bg-paper text-ink text-meta-sm focus:outline-accent min-h-control"
        >
          <option value="all">All Pathways ({STORIES_DATA.length})</option>
          <option value="AHPRA OBA (Stream B)">Australia OBA (Stream B)</option>
          <option value="NMC Test of Competence (ToC 2021)">UK NMC Test of Competence</option>
          <option value="Nursing Council of New Zealand (CAP)">New Zealand CAP</option>
          <option value="Gulf Stepping-Stone to Australia">Gulf Stepping-Stone</option>
        </select>
      </div>

      {/* Stories List */}
      <div className="space-y-8">
        {filteredStories.map((story) => (
          <article
            key={story.id}
            className="bg-surface border border-line rounded-lg p-6 sm:p-7 space-y-5 hover:border-line-strong transition-colors"
          >
            {/* Contributor Header & Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-line-soft pb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="font-serif text-heading-md text-ink font-semibold">
                    {story.name}
                  </h2>
                  {story.verifiedOnRegister && (
                    <span className="inline-flex items-center gap-1 text-meta-sm font-semibold text-accent bg-accent-wash px-2 py-0.5 rounded border border-accent/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified on Public Register</span>
                    </span>
                  )}
                </div>
                <div className="text-body-sm text-ink-70 mt-1 font-medium">
                  {story.currentRole}
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1 text-meta-sm font-mono text-ink-60 bg-paper-alt px-2.5 py-1 rounded border border-line">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Completed {story.completedYear}</span>
                </span>
              </div>
            </div>

            {/* Origin & Destination Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-meta-sm bg-paper-alt p-3 rounded border border-line text-ink-70">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span><strong>Trained in:</strong> {story.trainedIn}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-accent shrink-0" />
                <span><strong>Now practising:</strong> {story.nowIn}</span>
              </div>
            </div>

            {/* Experience Summary */}
            <p className="text-body text-ink-70 leading-relaxed">
              {story.summary}
            </p>

            {/* Key Clinical & Procedural Learnings */}
            <div className="space-y-2 border-t border-line-soft pt-4">
              <strong className="text-body-sm text-ink font-semibold block">
                Key Insights &amp; Exam Preparation Lessons:
              </strong>
              <ul className="space-y-1.5 text-body-sm text-ink-70 list-disc list-inside">
                {story.keyLearnings.map((learning, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

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
          onClick={() => onNavigate && onNavigate("/tools")}
          className="text-body-sm font-semibold text-ink-70 hover:text-ink underline"
        >
          Explore free practice tools →
        </button>
      </div>
    </div>
  );
};
