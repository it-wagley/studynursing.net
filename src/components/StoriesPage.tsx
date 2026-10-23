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

/**
 * Published contributor accounts.
 *
 * EMPTY BY DESIGN. This page previously shipped four invented nurses, each
 * flagged `verifiedOnRegister: true` under the heading "Verified Contributor
 * Experiences". A fabricated testimonial asserting register verification is a
 * consumer-protection problem, not a placeholder.
 *
 * Add an entry ONLY for a real nurse who has given consent to publish, and set
 * `verifiedOnRegister` true only once their registration has actually been
 * checked on the regulator's public register. The earlier sample entries are
 * in git history if the shape is useful.
 */
const STORIES_DATA: ContributorStory[] = [];

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
          Contributor Experiences
        </h1>
        <p className="text-body-lg text-ink-70 leading-relaxed">
          First-person accounts from internationally qualified nurses who have completed registration. We publish an account only with the nurse&rsquo;s consent, and mark it as verified only once we have checked their registration on the regulator&rsquo;s own public register.
        </p>
      </div>

      {/* Mandatory Requirements Change Notice */}
      {STORIES_DATA.length > 0 && (
        <CautionPanel title="Requirements change notice">
          <p>
            Regulatory criteria, examination formats, and statutory fees evolve continuously. Each story below displays the calendar year the contributor completed registration. Their experience reflects the rules in effect at that time; always check current standards on our official destination guides.
          </p>
        </CautionPanel>
      )}

      {/* Filter Bar */}
      {STORIES_DATA.length > 0 && (
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
      )}

      {/* Empty state — no published accounts yet */}
      {STORIES_DATA.length === 0 && (
        <div className="bg-paper-alt border border-line rounded-lg p-7 sm:p-8 space-y-4 text-center">
          <h2 className="font-serif text-heading-md text-ink font-semibold">
            No contributor accounts published yet
          </h2>
          <p className="text-body-sm text-ink-70 max-w-measure mx-auto leading-relaxed">
            We would rather show nothing here than invent it. An account appears on this
            page only when a real nurse has agreed to share their route and we have checked
            their registration on the regulator&rsquo;s own public register.
          </p>
          <p className="text-body-sm text-ink-70 max-w-measure mx-auto leading-relaxed">
            If you registered abroad and would be willing to describe how you did it, we
            would like to hear from you. Nothing is published without your approval of the
            final wording, and you decide how much of your name appears.
          </p>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/about")}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-ink text-paper hover:bg-ink-80 text-body-sm font-semibold transition-colors min-h-control"
          >
            How we work with contributors
          </button>
        </div>
      )}

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
