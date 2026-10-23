import React, { useState } from "react";
import { PageFurniture, PageFurnitureData } from "./PageFurniture";
import { DepthLabel } from "./DepthLabel";
import { CautionPanel } from "./CautionPanel";
import { ExternalLink } from "lucide-react";
import { UNREVIEWED } from "@/data/reviewers";

interface AustraliaPathwaysPageProps {
  onNavigate?: (path: string) => void;
}

const furnitureData: PageFurnitureData = {
  tier: "standard",
  reviewedAt: "2026-10-10",
  reviewer: UNREVIEWED,
  sources: [
    {
      label: "NMBA — Assessment Criteria for Internationally Qualified Nurses",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "AHPRA — Online Self-Check Portal",
      url: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives/Self-check.aspx",
      checkedAt: "2026-10-10",
    },
    {
      label: "Trans-Tasman Mutual Recognition Act 1997",
      url: "https://www.legislation.gov.au/Details/C2021C00424",
      checkedAt: "2026-10-10",
    },
  ],
};

interface CountryCriteria {
  id: string;
  name: string;
  qualificationsHeld: string;
  typicalStream: "Stream A" | "Stream B" | "Stream C" | "TTMRA Mutual Recognition";
  streamDescription: string;
  requiredAssessments: string[];
  publishedConsiderations: string[];
  officialSourceUrl: string;
}

const CRITERIA_BY_COUNTRY: Record<string, CountryCriteria> = {
  india: {
    id: "india",
    name: "India",
    qualificationsHeld: "BSc Nursing (4 years) or Post-Basic BSc Nursing",
    typicalStream: "Stream B",
    streamDescription: "Outcomes-Based Assessment (OBA) pathway: Cognitive examination (NCLEX-RN) followed by practical clinical examination (RN OSCE in Adelaide).",
    requiredAssessments: [
      "AHPRA Online Self-Check",
      "Orientation Part 1 (Online learning module)",
      "Primary Source Credential Verification (TrueProfile / DataFlow)",
      "NCLEX-RN Examination (Pearson VUE international test centre)",
      "Orientation Part 2",
      "RN OSCE Practical Clinical Examination (Adelaide Health Simulation)",
      "Formal Application for Registration (Form AGOS-40)",
    ],
    publishedConsiderations: [
      "Must be currently registered as a Registered Nurse with your State Nursing Council (SNC) and the Indian Nursing Council (INC).",
      "Degrees must demonstrate a minimum of 800 hours of supervised clinical placement during academic study.",
      "General Nursing and Midwifery (GNM) 3-year diplomas without degree completion historically fall under Stream C (requires upgrading via an Australian university).",
    ],
    officialSourceUrl: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
  },
  philippines: {
    id: "philippines",
    name: "Philippines",
    qualificationsHeld: "Bachelor of Science in Nursing (BSN, 4 years)",
    typicalStream: "Stream B",
    streamDescription: "Outcomes-Based Assessment (OBA) pathway: NCLEX-RN cognitive examination and Adelaide RN OSCE clinical stations.",
    requiredAssessments: [
      "AHPRA Online Self-Check",
      "Orientation Part 1 (Online module)",
      "Professional Regulation Commission (PRC) license and certificate of good standing verification",
      "TrueProfile / DataFlow academic transcript verification",
      "NCLEX-RN Examination (Pearson VUE Manila or overseas test centers)",
      "Orientation Part 2",
      "Adelaide Health Simulation RN OSCE (In-person in South Australia)",
      "Formal Application for Registration (Form AGOS-40)",
    ],
    publishedConsiderations: [
      "Must hold a current, active PRC Board of Nursing registration with no practice restrictions.",
      "Philippine BSN programs with required RLE (Related Learning Experience) hours satisfy the NMBA clinical placement volume benchmark.",
      "Recency of practice: Evidence of at least 450 hours of registered clinical practice within the last 5 years is mandatory prior to registration approval.",
    ],
    officialSourceUrl: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
  },
  malaysia: {
    id: "malaysia",
    name: "Malaysia",
    qualificationsHeld: "Diploma in Nursing (3 years) or Bachelor of Nursing (4 years)",
    typicalStream: "Stream B",
    streamDescription: "Bachelor holders typically enter Stream B (OBA). Diploma holders without degree conversion typically land in Stream C.",
    requiredAssessments: [
      "AHPRA Online Self-Check",
      "Orientation Part 1",
      "Malaysian Nursing Board (Lembaga Jururawat Malaysia - LJM) registration verification",
      "Primary Source Verification via TrueProfile",
      "NCLEX-RN Cognitive Assessment (for Stream B)",
      "Adelaide RN OSCE (for Stream B)",
      "Approved Australian degree conversion program (for Stream C diploma holders)",
    ],
    publishedConsiderations: [
      "Diploma in Nursing (Level 4 MQA) is not recognized as bachelor-equivalent and generally requires completing a university conversion or post-registration Bachelor of Nursing.",
      "Bachelor of Nursing degrees accredited by the Malaysian Qualifications Agency (MQA) are assessed individually for Stream B comparability.",
      "Evidence of English language proficiency must be demonstrated via IELTS, OET, or PTE; Malaysian English-medium instruction is not exempt.",
    ],
    officialSourceUrl: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
  },
  "united-kingdom": {
    id: "united-kingdom",
    name: "United Kingdom",
    qualificationsHeld: "BSc (Hons) Adult Nursing (or pre-registration Master)",
    typicalStream: "Stream A",
    streamDescription: "Direct registration pathway without the requirement to sit NCLEX-RN or OSCE examinations.",
    requiredAssessments: [
      "AHPRA Online Self-Check",
      "Orientation Part 1 (Online module)",
      "NMC UK registration and verification of good standing",
      "Primary Source Credential Verification (TrueProfile)",
      "Direct Application for Registration (Form AGOS-40)",
    ],
    publishedConsiderations: [
      "Applies to degree-level qualifications (BSc Honours) aligned with the UK NMC Future Nurse standards.",
      "Legacy Diploma in Higher Education (DipHE) qualifications may require individual transcript assessment and could be placed in Stream B or C.",
      "Applicants educated and registered in the UK qualify for the NMBA Primary Language Pathway English exemption if 5 years of continuous full-time study in English is verified.",
    ],
    officialSourceUrl: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
  },
  "new-zealand": {
    id: "new-zealand",
    name: "New Zealand",
    qualificationsHeld: "Bachelor of Nursing & current NCNZ Annual Practising Certificate",
    typicalStream: "TTMRA Mutual Recognition",
    streamDescription: "Trans-Tasman Mutual Recognition Act 1997 (TTMRA): Direct legal mutual recognition between New Zealand and Australia.",
    requiredAssessments: [
      "TTMRA Application Form directly with AHPRA",
      "Verification of current, unencumbered registration with Nursing Council of New Zealand (NCNZ)",
      "Identity verification check",
      "Payment of AHPRA application and registration fee",
    ],
    publishedConsiderations: [
      "Nurses holding full, unconditional registration with NCNZ are entitled to register in Australia under Commonwealth TTMRA legislation without sitting the OBA.",
      "Important Scrutiny Caveat: Applicants who completed an offshore pathway into New Zealand with the sole intent of transferring to Australia under TTMRA face heightened regulatory scrutiny regarding their true home jurisdiction practice experience.",
    ],
    officialSourceUrl: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
  },
  singapore: {
    id: "singapore",
    name: "Singapore",
    qualificationsHeld: "Diploma in Nursing (Nanyang/Ngee Ann) or BSc Nursing (NUS/SIT)",
    typicalStream: "Stream B",
    streamDescription: "Bachelor degrees generally enter Stream B (OBA). Poly diplomas typically enter Stream C unless paired with an accredited post-reg degree.",
    requiredAssessments: [
      "AHPRA Online Self-Check",
      "Orientation Part 1",
      "Singapore Nursing Board (SNB) registration verification",
      "Primary Source Credential Verification via TrueProfile",
      "NCLEX-RN (Pearson VUE Singapore)",
      "Adelaide RN OSCE",
    ],
    publishedConsiderations: [
      "Polytechnic 3-year diplomas without bachelor completion typically require an Australian university conversion degree (Stream C).",
      "Full degree graduates from the National University of Singapore (NUS) or Singapore Institute of Technology (SIT) are assessed as Stream B.",
      "Must provide evidence of English test scores (IELTS/OET/PTE); Singapore education does not qualify for the primary language exemption.",
    ],
    officialSourceUrl: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
  },
  nepal: {
    id: "nepal",
    name: "Nepal",
    qualificationsHeld: "BSc Nursing (4 years) or Post-Basic Bachelor of Nursing (PBN)",
    typicalStream: "Stream B",
    streamDescription: "Outcomes-Based Assessment (OBA) pathway: NCLEX-RN examination and Adelaide RN OSCE.",
    requiredAssessments: [
      "AHPRA Online Self-Check",
      "Orientation Part 1",
      "Nepal Nursing Council (NNC) license verification and good standing certificate",
      "TrueProfile / DataFlow primary source credential check",
      "NCLEX-RN Examination (Pearson VUE Kathmandu or regional center)",
      "Orientation Part 2",
      "RN OSCE at Adelaide Health Simulation (South Australia)",
      "Formal Registration Application (Form AGOS-40)",
    ],
    publishedConsiderations: [
      "Must hold active registration with the Nepal Nursing Council.",
      "Proficiency Certificate Level (PCL) 3-year diplomas without Post-Basic Bachelor completion fall under Stream C.",
      "Applicants must document minimum 450 hours of registered clinical practice within the last 5 years.",
    ],
    officialSourceUrl: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
  },
  kenya: {
    id: "kenya",
    name: "Kenya",
    qualificationsHeld: "Bachelor of Science in Nursing (BScN, 4 years)",
    typicalStream: "Stream B",
    streamDescription: "Outcomes-Based Assessment (OBA) pathway: Cognitive examination (NCLEX-RN) followed by Adelaide RN OSCE.",
    requiredAssessments: [
      "AHPRA Online Self-Check",
      "Orientation Part 1",
      "Nursing Council of Kenya (NCK) registration verification",
      "Primary Source Credential Verification (TrueProfile)",
      "NCLEX-RN Cognitive Examination (Pearson VUE Nairobi)",
      "Orientation Part 2",
      "RN OSCE at Adelaide Health Simulation",
      "Formal Application for Registration (Form AGOS-40)",
    ],
    publishedConsiderations: [
      "Must hold a valid, unencumbered practice license from the Nursing Council of Kenya.",
      "Kenya Registered Community Health Nurse (KRCHN) 3-year diplomas without bachelor completion fall into Stream C.",
      "Evidence of English language proficiency (IELTS Academic 7.0 / OET Grade B / PTE 65) is required.",
    ],
    officialSourceUrl: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
  },
  other: {
    id: "other",
    name: "Other Country of Training",
    qualificationsHeld: "Internationally qualified registered nursing qualification",
    typicalStream: "Stream B",
    streamDescription: "Assessed individually by the NMBA self-check algorithm against Australian Bachelor of Nursing equivalency standards.",
    requiredAssessments: [
      "AHPRA Online Self-Check on official portal",
      "Orientation Part 1",
      "National Nursing Licensing Body verification",
      "Primary Source Credential Verification via TrueProfile",
      "Stream Determination by AHPRA (Stream A, B, or C)",
      "Completion of prescribed assessments (OBA or study upgrade)",
    ],
    publishedConsiderations: [
      "NMBA assesses qualifications against published accreditation standards, clinical placement hour volumes (minimum 800 hours), and theoretical curriculum content.",
      "Only AHPRA can issue a legally binding stream determination.",
    ],
    officialSourceUrl: "https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives.aspx",
  },
};

export const AustraliaPathwaysPage: React.FC<AustraliaPathwaysPageProps> = ({ onNavigate }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("india");
  const criteria = CRITERIA_BY_COUNTRY[selectedCountry] || CRITERIA_BY_COUNTRY.india;

  return (
    <div className="space-y-10 font-sans">
      {/* Breadcrumb & Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate("/register/australia")}
            className="hover:text-accent underline"
          >
            Australia Guide
          </button>
          <span>/</span>
          <span className="text-ink font-medium">Published Pathway Criteria</span>
          <span className="text-line-strong">·</span>
          <DepthLabel tier="standard" />
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Australia Qualification Criteria Selector
        </h1>
        <p className="text-body-lg text-ink-70 max-w-lead leading-relaxed">
          Filter published Nursing and Midwifery Board of Australia (NMBA) qualification comparability criteria and typical assessment streams by country of initial nursing education.
        </p>
      </div>

      {/* MANDATORY CONTRACT RULE: Caution Panel MUST lead ABOVE the selector, never below it */}
      <CautionPanel
        id="no-assessment-panel"
        title="This tool filters published criteria. It does not assess you."
      >
        <p>
          The selector below filters the publicly available registration standards established by the Nursing and Midwifery Board of Australia (NMBA). It does not assess your individual academic transcript, determine your eligibility, verify your documents, or calculate migration points. Official determinations are made exclusively by AHPRA following formal application on their portal.
        </p>
      </CautionPanel>

      {/* Selector Group */}
      <section className="space-y-4">
        <div>
          <label className="text-body-sm font-semibold text-ink block mb-1">
            Select Country of Primary Nursing Qualification:
          </label>
          <span className="text-meta-sm text-ink-60">
            Filters published NMBA comparability rules for degrees awarded in this jurisdiction.
          </span>
        </div>

        {/* role="group" with aria-pressed on each toggle */}
        <div
          role="group"
          aria-label="Country of primary nursing qualification"
          className="flex flex-wrap gap-2.5 pt-1"
        >
          {Object.values(CRITERIA_BY_COUNTRY).map((c) => {
            const isSelected = selectedCountry === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCountry(c.id)}
                className={`px-4 py-2.5 rounded-md text-body-sm font-medium transition-all min-h-control ${
                  isSelected
                    ? "bg-accent text-white font-semibold shadow-sm"
                    : "bg-surface border border-line text-ink-70 hover:bg-paper-alt hover:text-ink"
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Filtered Results Container: aria-live="polite" */}
      <section
        aria-live="polite"
        className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-line">
          <div>
            <span className="text-eyebrow text-ink-60">Published NMBA Criteria</span>
            <h2 className="font-serif text-heading-md sm:text-heading-lg text-ink font-semibold mt-0.5">
              Qualifications Awarded in {criteria.name}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-meta-sm text-ink-60">Typical Stream:</span>
            <span
              className={`px-3 py-1 rounded text-body-xs font-bold uppercase tracking-label ${
                criteria.typicalStream === "Stream A" || criteria.typicalStream === "TTMRA Mutual Recognition"
                  ? "bg-accent-wash text-accent-dark"
                  : criteria.typicalStream === "Stream B"
                  ? "bg-accent text-white"
                  : "bg-paper-alt text-ink border border-line"
              }`}
            >
              {criteria.typicalStream}
            </span>
          </div>
        </div>

        {/* Qualification & Stream Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-meta font-semibold uppercase tracking-wider text-ink-60">
              Qualification Typically Assessed
            </h3>
            <p className="text-body text-ink font-medium">
              {criteria.qualificationsHeld}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-meta font-semibold uppercase tracking-wider text-ink-60">
              Assessment Stream Meaning
            </h3>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              {criteria.streamDescription}
            </p>
          </div>
        </div>

        {/* Standard Required Assessments */}
        <div className="space-y-3 pt-4 border-t border-line">
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Standard Assessment Sequence
          </h3>
          <p className="text-body-sm text-ink-70">
            Published stages established by AHPRA for applicants in this category:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-body-sm text-ink-80">
            {criteria.requiredAssessments.map((step, idx) => (
              <li key={idx} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Published Regulatory Considerations */}
        <div className="space-y-3 pt-4 border-t border-line">
          <h3 className="font-serif text-heading-sm text-ink font-semibold">
            Key Regulatory Considerations
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-body-sm text-ink-70 leading-relaxed">
            {criteria.publishedConsiderations.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Source Citation for Selection */}
        <div className="pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-meta-sm text-ink-60">
          <span>Official published standards: NMBA Internationally Qualified Nurses Guidelines</span>
          <a
            href={criteria.officialSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent hover:underline font-medium"
          >
            <span>Verify on AHPRA / NMBA Portal</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* "What this tool will not do" section */}
      <section className="bg-paper-alt border border-line rounded-lg p-6 space-y-4">
        <h2 className="font-serif text-heading-sm text-ink font-semibold">
          What this tool does not do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-body-sm text-ink-70 leading-relaxed">
          <div>
            <strong className="text-ink block">No Individual Assessment</strong>
            Only AHPRA possesses the legal authority to review your academic transcripts, syllabus breakdowns, and clinical hours log to issue a binding assessment stream.
          </div>
          <div>
            <strong className="text-ink block">No Registration Guarantee</strong>
            No educational agent, publisher, or recruiter can guarantee registration with the NMBA. Registration requires meeting all 5 mandatory registration standards.
          </div>
          <div>
            <strong className="text-ink block">No Immigration Advice</strong>
            Registration as a nurse is legally separate from obtaining an Australian visa. StudyNursing.net does not give migration assistance or visa advice.
          </div>
          <div>
            <strong className="text-ink block">No Document Verification</strong>
            All international documents must be verified through AHPRA’s official primary source verification partners (TrueProfile / DataFlow).
          </div>
        </div>
      </section>

      {/* Official Self-Check Action Banner */}
      <div className="bg-ink text-paper rounded-lg p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-label text-accent-light uppercase tracking-label font-bold">
            Official Regulatory Next Step
          </span>
          <h3 className="font-serif text-heading-md font-semibold text-paper">
            Complete the Free AHPRA Self-Check
          </h3>
          <p className="text-body-sm text-ink-muted max-w-measure">
            The NMBA Self-Check is free, takes approximately 10 minutes on the official AHPRA website, and determines your exact official assessment stream.
          </p>
        </div>
        <a
          href="https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/Internationally-Qualified-Nurses-and-Midwives/Self-check.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-white hover:bg-accent-light font-semibold text-body-sm transition-colors shrink-0 min-h-control"
        >
          <span>Launch AHPRA Self-Check</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Page Furniture */}
      <PageFurniture data={furnitureData} />
    </div>
  );
};
