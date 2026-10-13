import React from "react";
import { ExternalLink, ShieldAlert } from "lucide-react";

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-ink text-ink-muted border-t border-ink-border font-sans mt-auto">
      <div className="max-w-container mx-auto px-container-sm sm:px-container py-section-sm space-y-12">
        
        {/* Core Publisher Disclaimer & Consumer Protection */}
        <div className="bg-ink-surface border border-ink-border rounded-lg p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2 text-ink-soft font-semibold text-body-sm">
            <ShieldAlert className="w-4 h-4 text-accent-light shrink-0" aria-hidden="true" />
            <span>Independent reference publication notice</span>
          </div>
          <p className="text-body-xs leading-body text-ink-muted">
            StudyNursing.net is an independent information publisher for internationally qualified nurses. We are not an education agent, a recruitment agency, an employer, a migration adviser, or a registered health practitioner. We do not provide immigration advice, determine eligibility, or assess individual qualifications.
          </p>
          <p className="text-meta-sm leading-body text-ink-muted pt-1 border-t border-ink-border/60">
            <strong className="text-ink-soft">Consumer protection rule:</strong> Always verify any immigration or educational adviser on the official public register before paying fees:{" "}
            <a
              href="https://portal.mara.gov.au/search-the-register-of-migration-agents/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:underline inline-flex items-center gap-0.5"
            >
              Australia (OMARA) <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
            </a>{" "}
            ·{" "}
            <a
              href="https://www.iaa.govt.nz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:underline inline-flex items-center gap-0.5"
            >
              New Zealand (IAA) <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
            </a>{" "}
            ·{" "}
            <a
              href="https://www.gov.uk/find-an-immigration-adviser"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:underline inline-flex items-center gap-0.5"
            >
              UK (OISC) <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
            </a>
          </p>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-body-xs">
          
          {/* Col 1: Destinations */}
          <div className="space-y-3">
            <h4 className="text-eyebrow text-ink-soft font-bold tracking-eyebrow">
              Destinations
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <a href="/register/australia" onClick={(e) => handleNav(e, "/register/australia")} className="hover:text-ink-soft transition-colors">
                  Australia (AHPRA / NMBA)
                </a>
              </li>
              <li>
                <a href="/register/united-kingdom" onClick={(e) => handleNav(e, "/register/united-kingdom")} className="hover:text-ink-soft transition-colors">
                  United Kingdom (NMC)
                </a>
              </li>
              <li>
                <a href="/register/new-zealand" onClick={(e) => handleNav(e, "/register/new-zealand")} className="hover:text-ink-soft transition-colors">
                  New Zealand (NCNZ)
                </a>
              </li>
              <li>
                <a href="/register/singapore" onClick={(e) => handleNav(e, "/register/singapore")} className="hover:text-ink-soft transition-colors">
                  Singapore (SNB)
                </a>
              </li>
              <li>
                <a href="/register/canada" onClick={(e) => handleNav(e, "/register/canada")} className="hover:text-ink-soft transition-colors">
                  Canada (NNAS)
                </a>
              </li>
              <li>
                <a href="/register/ireland" onClick={(e) => handleNav(e, "/register/ireland")} className="hover:text-ink-soft transition-colors">
                  Ireland (NMBI)
                </a>
              </li>
              <li>
                <a href="/register/united-states" onClick={(e) => handleNav(e, "/register/united-states")} className="hover:text-ink-soft transition-colors">
                  United States (State Boards)
                </a>
              </li>
              <li className="pt-1">
                <a href="/compare" onClick={(e) => handleNav(e, "/compare")} className="text-accent-light font-semibold hover:underline">
                  Compare all destinations →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Exams & Tools */}
          <div className="space-y-3">
            <h4 className="text-eyebrow text-ink-soft font-bold tracking-eyebrow">
              Exams & Tools
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <a href="/exams/nclex-rn" onClick={(e) => handleNav(e, "/exams/nclex-rn")} className="hover:text-ink-soft transition-colors">
                  NCLEX-RN NextGen
                </a>
              </li>
              <li>
                <a href="/exams/osce" onClick={(e) => handleNav(e, "/exams/osce")} className="hover:text-ink-soft transition-colors">
                  OSCE Assessments
                </a>
              </li>
              <li>
                <a href="/exams/english" onClick={(e) => handleNav(e, "/exams/english")} className="hover:text-ink-soft transition-colors">
                  English Tests (IELTS / OET / PTE)
                </a>
              </li>
              <li>
                <a href="/tools/dosage" onClick={(e) => handleNav(e, "/tools/dosage")} className="hover:text-ink-soft transition-colors">
                  Dosage Calculation Practice
                </a>
              </li>
              <li>
                <a href="/tools/nclex-cases" onClick={(e) => handleNav(e, "/tools/nclex-cases")} className="hover:text-ink-soft transition-colors">
                  NCLEX Unfolding Cases
                </a>
              </li>
              <li>
                <a href="/tools/drug-names" onClick={(e) => handleNav(e, "/tools/drug-names")} className="hover:text-ink-soft transition-colors">
                  Drug Names (US ↔ Commonwealth)
                </a>
              </li>
              <li>
                <a href="/tools/clinical-reference" onClick={(e) => handleNav(e, "/tools/clinical-reference")} className="hover:text-ink-soft transition-colors">
                  Clinical Pocket Reference
                </a>
              </li>
              <li>
                <a href="/tools/downloads" onClick={(e) => handleNav(e, "/tools/downloads")} className="hover:text-ink-soft transition-colors">
                  Formula Sheets & Checklists
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Working in the Gulf */}
          <div className="space-y-3">
            <h4 className="text-eyebrow text-ink-soft font-bold tracking-eyebrow">
              Working in the Gulf
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <a href="/gulf/the-work" onClick={(e) => handleNav(e, "/gulf/the-work")} className="hover:text-ink-soft transition-colors">
                  What the job is actually like
                </a>
              </li>
              <li>
                <a href="/gulf/contracts" onClick={(e) => handleNav(e, "/gulf/contracts")} className="hover:text-ink-soft transition-colors">
                  Contract literacy & clauses
                </a>
              </li>
              <li>
                <a href="/gulf/money" onClick={(e) => handleNav(e, "/gulf/money")} className="hover:text-ink-soft transition-colors">
                  What tax-free actually nets
                </a>
              </li>
              <li>
                <a href="/gulf/adjusting" onClick={(e) => handleNav(e, "/gulf/adjusting")} className="hover:text-ink-soft transition-colors">
                  Professional & team adjustment
                </a>
              </li>
              <li>
                <a href="/gulf/your-next-move" onClick={(e) => handleNav(e, "/gulf/your-next-move")} className="hover:text-ink-soft transition-colors">
                  Stepping-stone planning
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: About & Standards */}
          <div className="space-y-3">
            <h4 className="text-eyebrow text-ink-soft font-bold tracking-eyebrow">
              Standards & About
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <a href="/about" onClick={(e) => handleNav(e, "/about")} className="hover:text-ink-soft transition-colors">
                  What we are and what we are not
                </a>
              </li>
              <li>
                <a href="/sources" onClick={(e) => handleNav(e, "/sources")} className="hover:text-ink-soft transition-colors">
                  Primary sources index
                </a>
              </li>
              <li>
                <a href="/advisers" onClick={(e) => handleNav(e, "/advisers")} className="hover:text-ink-soft transition-colors">
                  Licensed adviser introductions
                </a>
              </li>
              <li>
                <a href="/study" onClick={(e) => handleNav(e, "/study")} className="hover:text-ink-soft transition-colors">
                  Postgraduate & bridging study
                </a>
              </li>
              <li>
                <a href="/stories" onClick={(e) => handleNav(e, "/stories")} className="hover:text-ink-soft transition-colors">
                  Contributor stories
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-ink-border flex flex-wrap items-center justify-between gap-4 text-meta-sm text-ink-muted">
          <div>
            © {new Date().getFullYear()} StudyNursing.net. Governed by binding editorial boundaries.
          </div>
          <div className="tabular">
            Reviewed quarterly by registered nurses · Last site audit: October 2026
          </div>
        </div>

      </div>
    </footer>
  );
};
