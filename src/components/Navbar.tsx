"use client";

import React, { useState, useRef, useEffect } from "react";
import { DepthLabel, DepthTier } from "./DepthLabel";
import { ChevronDown, Menu, X } from "lucide-react";
import { DESTINATION_DATA } from "@/data/destinations";

export interface NavigationProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

/**
 * Nav copy lives here; the depth tier does NOT. It is read from
 * src/data/destinations.ts so the badge in the menu can never disagree with
 * the badge on the page it links to.
 */
const DESTINATIONS: Array<{ name: string; path: string; summary: string }> = [
  { name: "Australia", path: "/register/australia", summary: "AHPRA & NMBA outcomes-based assessment (OBA)" },
  { name: "United Kingdom", path: "/register/united-kingdom", summary: "NMC Test of Competence & overseas registration" },
  { name: "New Zealand", path: "/register/new-zealand", summary: "NCNZ requirements and scrutiny caveats" },
  { name: "Singapore", path: "/register/singapore", summary: "Singapore Nursing Board (SNB) registration" },
  { name: "Canada", path: "/register/canada", summary: "NNAS credentialing and provincial colleges" },
  { name: "Ireland", path: "/register/ireland", summary: "NMBI recognition and aptitude test" },
  { name: "United States", path: "/register/united-states", summary: "State boards of nursing & CGFNS requirements" },
];

const tierFor = (path: string): DepthTier =>
  DESTINATION_DATA.find((d) => d.path === path)?.tier ?? "overview";

const EXAMS: Array<{ name: string; path: string; summary: string }> = [
  { name: "NCLEX-RN", path: "/exams/nclex-rn", summary: "NextGen computer-adaptive test used in the US, Australia and Canada" },
  { name: "OSCE Assessments", path: "/exams/osce", summary: "Objective Structured Clinical Examination format and clinical stations" },
  { name: "English Language Tests", path: "/exams/english", summary: "Published minimum scores for IELTS Academic, OET Nursing and PTE" },
];

const TOOLS: Array<{ name: string; path: string; summary: string }> = [
  { name: "Dosage Calculation Practice", path: "/tools/dosage", summary: "Algorithmic practice problems with dimensional analysis" },
  { name: "NCLEX Case Studies", path: "/tools/nclex-cases", summary: "Unfolding clinical cases with full rationales" },
  { name: "US ↔ Commonwealth Drug Names", path: "/tools/drug-names", summary: "Generic and brand name translations (e.g. Paracetamol vs Acetaminophen)" },
  { name: "Clinical Pocket Reference", path: "/tools/clinical-reference", summary: "Emergency antidotes and mmol/L to mg/dL glucose converter" },
  { name: "Florence Study Tutor", path: "/tools/tutor", summary: "AI study companion for dosage math, pharmacology and NCLEX rationales" },
  { name: "Formula Sheets & Checklists", path: "/tools/downloads", summary: "Printable reference sheets for clinical math and document preparation" },
];

export const Navbar: React.FC<NavigationProps> = ({ currentPath = "/", onNavigate }) => {
  const [openMenu, setOpenMenu] = useState<"register" | "exams" | "tools" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleNavClick = (path: string) => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="bg-paper border-b border-line sticky top-0 z-30 transition-colors"
    >
      <div className="max-w-container mx-auto px-container-sm sm:px-container h-18 flex items-center justify-between">
        
        {/* Brand identity */}
        <a
          href="/"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              handleNavClick("/");
            }
          }}
          className="flex items-baseline gap-1.5 focus-visible:outline-accent py-2"
        >
          <span className="font-serif text-heading-md font-semibold text-ink tracking-tight">
            StudyNursing
          </span>
          <span className="text-body-xs font-sans font-semibold text-accent">
            .net
          </span>
        </a>

        {/* Desktop Primary Navigation (5 Items) */}
        <div className="hidden lg:flex items-center gap-1 font-sans text-body-sm">
          
          {/* 1. Compare */}
          <a
            href="/compare"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                handleNavClick("/compare");
              }
            }}
            className={`px-3.5 py-2.5 rounded-md transition-colors min-h-control inline-flex items-center ${
              currentPath === "/compare"
                ? "text-accent font-semibold bg-accent-wash"
                : "text-ink-70 hover:text-ink hover:bg-paper-alt"
            }`}
          >
            Compare
          </a>

          {/* 2. Exams */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === "exams"}
              aria-haspopup="true"
              onClick={() => setOpenMenu(openMenu === "exams" ? null : "exams")}
              className={`px-3.5 py-2.5 rounded-md transition-colors min-h-control inline-flex items-center gap-1 ${
                currentPath.startsWith("/exams") || openMenu === "exams"
                  ? "text-accent font-semibold bg-accent-wash"
                  : "text-ink-70 hover:text-ink hover:bg-paper-alt"
              }`}
            >
              <span>Exams</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${openMenu === "exams" ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {openMenu === "exams" && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-1.5 w-80 bg-surface border border-line rounded-lg p-2 shadow-sm z-40 space-y-1"
              >
                <div className="px-3 py-1.5 text-eyebrow text-ink-40 border-b border-line-soft">
                  Examinations explained
                </div>
                {EXAMS.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    role="menuitem"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        handleNavClick(item.path);
                      }
                    }}
                    className="block px-3 py-2 rounded-md hover:bg-paper-alt transition-colors"
                  >
                    <div className="font-semibold text-ink text-body-sm">{item.name}</div>
                    <div className="text-meta-sm text-ink-60 leading-snug">{item.summary}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 3. Practice Tools */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === "tools"}
              aria-haspopup="true"
              onClick={() => setOpenMenu(openMenu === "tools" ? null : "tools")}
              className={`px-3.5 py-2.5 rounded-md transition-colors min-h-control inline-flex items-center gap-1 ${
                currentPath.startsWith("/tools") || openMenu === "tools"
                  ? "text-accent font-semibold bg-accent-wash"
                  : "text-ink-70 hover:text-ink hover:bg-paper-alt"
              }`}
            >
              <span>Practice tools</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${openMenu === "tools" ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {openMenu === "tools" && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-1.5 w-88 bg-surface border border-line rounded-lg p-2 shadow-sm z-40 space-y-1"
              >
                <div className="px-3 py-1.5 text-eyebrow text-ink-40 border-b border-line-soft">
                  Free ungated study tools
                </div>
                {TOOLS.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    role="menuitem"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        handleNavClick(item.path);
                      }
                    }}
                    className="block px-3 py-2 rounded-md hover:bg-paper-alt transition-colors"
                  >
                    <div className="font-semibold text-ink text-body-sm">{item.name}</div>
                    <div className="text-meta-sm text-ink-60 leading-snug">{item.summary}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 4. Register (Destination List with Depth Labels) */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === "register"}
              aria-haspopup="true"
              onClick={() => setOpenMenu(openMenu === "register" ? null : "register")}
              className={`px-3.5 py-2.5 rounded-md transition-colors min-h-control inline-flex items-center gap-1 ${
                currentPath.startsWith("/register") || openMenu === "register"
                  ? "text-accent font-semibold bg-accent-wash"
                  : "text-ink-70 hover:text-ink hover:bg-paper-alt"
              }`}
            >
              <span>Register</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${openMenu === "register" ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {openMenu === "register" && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-1.5 w-96 bg-surface border border-line rounded-lg p-2 shadow-sm z-40 space-y-1"
              >
                <div className="px-3 py-1.5 text-eyebrow text-ink-40 border-b border-line-soft">
                  Registration pathways by destination
                </div>
                {DESTINATIONS.map((dest) => (
                  <a
                    key={dest.path}
                    href={dest.path}
                    role="menuitem"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        handleNavClick(dest.path);
                      }
                    }}
                    className="flex items-start justify-between gap-3 px-3 py-2.5 rounded-md hover:bg-paper-alt transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-ink text-body-sm">{dest.name}</div>
                      <div className="text-meta-sm text-ink-60 leading-snug">{dest.summary}</div>
                    </div>
                    <DepthLabel tier={tierFor(dest.path)} className="mt-0.5 shrink-0" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 5. Working in the Gulf */}
          <a
            href="/gulf"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                handleNavClick("/gulf");
              }
            }}
            className={`px-3.5 py-2.5 rounded-md transition-colors min-h-control inline-flex items-center ${
              currentPath.startsWith("/gulf")
                ? "text-accent font-semibold bg-accent-wash"
                : "text-ink-70 hover:text-ink hover:bg-paper-alt"
            }`}
          >
            Working in the Gulf
          </a>

        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-md text-ink-70 hover:text-ink hover:bg-paper-alt min-h-control min-w-control flex items-center justify-center border border-line"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-paper px-container-sm py-4 space-y-4 max-h-[80vh] overflow-y-auto">
          
          <div className="space-y-1">
            <a
              href="/compare"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  handleNavClick("/compare");
                }
              }}
              className="block px-3 py-2.5 rounded-md text-body-sm font-semibold text-ink hover:bg-paper-alt"
            >
              Compare destinations
            </a>
            <a
              href="/gulf"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  handleNavClick("/gulf");
                }
              }}
              className="block px-3 py-2.5 rounded-md text-body-sm font-semibold text-ink hover:bg-paper-alt"
            >
              Working in the Gulf
            </a>
          </div>

          <div className="pt-2 border-t border-line-soft">
            <div className="px-3 py-1 text-eyebrow text-ink-40">Destinations</div>
            <div className="space-y-1 mt-1">
              {DESTINATIONS.map((dest) => (
                <a
                  key={dest.path}
                  href={dest.path}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      handleNavClick(dest.path);
                    }
                  }}
                  className="flex items-center justify-between px-3 py-2 text-body-sm text-ink-70 hover:text-ink hover:bg-paper-alt rounded-md"
                >
                  <span>{dest.name}</span>
                  <DepthLabel tier={tierFor(dest.path)} />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-line-soft">
            <div className="px-3 py-1 text-eyebrow text-ink-40">Exams</div>
            <div className="space-y-1 mt-1">
              {EXAMS.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      handleNavClick(item.path);
                    }
                  }}
                  className="block px-3 py-2 text-body-sm text-ink-70 hover:text-ink hover:bg-paper-alt rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-line-soft">
            <div className="px-3 py-1 text-eyebrow text-ink-40">Practice tools</div>
            <div className="space-y-1 mt-1">
              {TOOLS.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      handleNavClick(item.path);
                    }
                  }}
                  className="block px-3 py-2 text-body-sm text-ink-70 hover:text-ink hover:bg-paper-alt rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      )}
    </nav>
  );
};
