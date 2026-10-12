export interface NursePassportData {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  originCountry: string;
  currentLocation: string; // e.g. "Harare, Zimbabwe", "Nairobi, Kenya", "Dubai, UAE"
  targetCountry: "Australia" | "United States" | "United Kingdom" | "Canada" | "New Zealand";
  educationLevel: "Diploma in Nursing / GNM" | "Bachelor of Science in Nursing (BSN)" | "Master of Science in Nursing (MSN)";
  homeCouncilRegistered: boolean;
  yearsExperience: number;
  clinicalSpecialty: "ICU / Critical Care" | "Emergency / Trauma" | "Medical-Surgical" | "Pediatrics / NICU" | "Operating Theater / OR" | "Maternity / Midwifery" | "General Ward";
  englishStatus: "Not taken yet" | "Preparing / Booking test" | "Passed IELTS 7.0+ / OET B" | "Exempt (English medium degree)";
  credentialEvalStatus: "Not started" | "In progress (CGFNS / AHPRA / NNAS)" | "Completed & Verified";
  examStatus: "Starting prep" | "Enrolled in NCLEX/CBT review" | "ATT received / Exam scheduled" | "Passed NCLEX-RN / CBT";
}

export interface NRIScoreResult {
  totalScore: number; // 0 - 100
  tier: "Platinum (Placement Ready)" | "Gold (Exam Ready)" | "Silver (Prep Needed)" | "Bronze (Early Stage)";
  tierColor: string;
  breakdown: {
    education: { score: number; max: 25; feedback: string };
    experience: { score: number; max: 25; feedback: string };
    english: { score: number; max: 25; feedback: string };
    licensing: { score: number; max: 25; feedback: string };
  };
  recommendedNextSteps: {
    stepNumber: number;
    title: string;
    description: string;
    partnerHandoffType: "English Prep" | "NCLEX Review Provider" | "Credential Evaluator" | "Direct Hospital Recruiter";
  }[];
}

export function calculateNRI(data: NursePassportData): NRIScoreResult {
  let eduScore = 15;
  let eduFeedback = "Recognized nursing diploma.";
  if (data.educationLevel === "Bachelor of Science in Nursing (BSN)") {
    eduScore = 22;
    eduFeedback = "4-Year BSN degree matches international equivalency standard.";
  } else if (data.educationLevel === "Master of Science in Nursing (MSN)") {
    eduScore = 25;
    eduFeedback = "Postgraduate MSN degree strongly favored by university & hospital sponsors.";
  }
  if (!data.homeCouncilRegistered) {
    eduScore = Math.max(5, eduScore - 10);
    eduFeedback += " Note: Active registration with home nursing council is mandatory.";
  }

  let expScore = 10;
  let expFeedback = "Early career nurse.";
  if (data.yearsExperience >= 5) {
    expScore = 25;
    expFeedback = "5+ years of clinical bedside experience provides maximum visa immigration points.";
  } else if (data.yearsExperience >= 2) {
    expScore = 20;
    expFeedback = "2-4 years meets minimum direct hospital sponsorship threshold.";
  } else if (data.yearsExperience >= 1) {
    expScore = 15;
    expFeedback = "1 year clinical experience allows university bridging pathways.";
  }

  let engScore = 5;
  let engFeedback = "English benchmark required (OET B or IELTS 7.0).";
  if (data.englishStatus === "Passed IELTS 7.0+ / OET B" || data.englishStatus === "Exempt (English medium degree)") {
    engScore = 25;
    engFeedback = "English benchmark fully met. Zero language barrier.";
  } else if (data.englishStatus === "Preparing / Booking test") {
    engScore = 15;
    engFeedback = "Active preparation in progress.";
  }

  let licScore = 5;
  let licFeedback = "Credential verification and NCLEX prep not initiated.";
  if (data.examStatus === "Passed NCLEX-RN / CBT") {
    licScore = 25;
    licFeedback = "Licensing exam passed! High-priority recruitment candidate.";
  } else if (data.examStatus === "ATT received / Exam scheduled") {
    licScore = 20;
    licFeedback = "Authorization to Test received. Exam date imminent.";
  } else if (data.examStatus === "Enrolled in NCLEX/CBT review") {
    licScore = 15;
    licFeedback = "Active review coursework underway.";
  } else if (data.credentialEvalStatus === "In progress (CGFNS / AHPRA / NNAS)") {
    licScore = 10;
    licFeedback = "Credential file submitted to regulatory board.";
  }

  const totalScore = eduScore + expScore + engScore + licScore;

  let tier: NRIScoreResult["tier"] = "Bronze (Early Stage)";
  let tierColor = "text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-500/30";

  if (totalScore >= 85) {
    tier = "Platinum (Placement Ready)";
    tierColor = "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/30";
  } else if (totalScore >= 70) {
    tier = "Gold (Exam Ready)";
    tierColor = "text-teal-600 bg-teal-50 dark:bg-teal-950/40 border-teal-500/30";
  } else if (totalScore >= 50) {
    tier = "Silver (Prep Needed)";
    tierColor = "text-blue-600 bg-blue-50 dark:bg-blue-950/40 border-blue-500/30";
  }

  const steps: NRIScoreResult["recommendedNextSteps"] = [];

  if (engScore < 20) {
    steps.push({
      stepNumber: 1,
      title: "Score OET Grade B or IELTS 7.0",
      description: "Secure your English language certification required by AHPRA (AU), NMC (UK), or CGFNS (US).",
      partnerHandoffType: "English Prep"
    });
  }

  if (licScore < 20) {
    steps.push({
      stepNumber: steps.length + 1,
      title: "Initiate Credential Verification (CGFNS / AHPRA Self-Check)",
      description: "Verify your nursing school transcripts and clinical hours to receive your Authorization to Test (ATT).",
      partnerHandoffType: "Credential Evaluator"
    });

    steps.push({
      stepNumber: steps.length + 1,
      title: "Complete NextGen NCLEX-RN / CBT Review Program",
      description: "Enroll in an accredited 90-day review cohort with verified practice case studies.",
      partnerHandoffType: "NCLEX Review Provider"
    });
  }

  steps.push({
    stepNumber: steps.length + 1,
    title: `Direct Hospital Interview & ${data.targetCountry} Visa Sponsorship`,
    description: `Match with vetted international healthcare staffing partners hiring in ${data.targetCountry} with green card / work visa sponsorship.`,
    partnerHandoffType: "Direct Hospital Recruiter"
  });

  return {
    totalScore,
    tier,
    tierColor,
    breakdown: {
      education: { score: eduScore, max: 25, feedback: eduFeedback },
      experience: { score: expScore, max: 25, feedback: expFeedback },
      english: { score: engScore, max: 25, feedback: engFeedback },
      licensing: { score: licScore, max: 25, feedback: licFeedback }
    },
    recommendedNextSteps: steps
  };
}

export interface CandidateCard {
  id: string;
  candidateCode: string; // e.g. "SN-KEN-8921"
  originCountry: string;
  currentBase: string;
  targetCountry: string;
  specialty: string;
  yearsExperience: number;
  education: string;
  nriScore: number;
  tier: string;
  englishStatus: string;
  examStatus: string;
  leadValueEstimate: string; // e.g. "$350 CPL"
}

export const SAMPLE_CANDIDATE_POOL: CandidateCard[] = [
  {
    id: "cand-1",
    candidateCode: "SN-KEN-9104",
    originCountry: "Kenya",
    currentBase: "Nairobi, Kenya",
    targetCountry: "Australia",
    specialty: "ICU / Critical Care",
    yearsExperience: 5,
    education: "Bachelor of Science in Nursing (BSN)",
    nriScore: 92,
    tier: "Platinum (Placement Ready)",
    englishStatus: "OET Grade B (All sub-tests 360+)",
    examStatus: "Passed NCLEX-RN (Pearson VUE)",
    leadValueEstimate: "$450 Qualified Lead"
  },
  {
    id: "cand-2",
    candidateCode: "SN-ZIM-4421",
    originCountry: "Zimbabwe",
    currentBase: "Harare, Zimbabwe",
    targetCountry: "United Kingdom",
    specialty: "Emergency / Trauma",
    yearsExperience: 4,
    education: "Bachelor of Science in Nursing (BSN)",
    nriScore: 88,
    tier: "Platinum (Placement Ready)",
    englishStatus: "IELTS 7.5 (Speaking 8.0)",
    examStatus: "Passed NMC CBT Part 1",
    leadValueEstimate: "$400 Qualified Lead"
  },
  {
    id: "cand-3",
    candidateCode: "SN-NPL-7312",
    originCountry: "Nepal",
    currentBase: "Kathmandu, Nepal",
    targetCountry: "Australia",
    specialty: "Medical-Surgical",
    yearsExperience: 3,
    education: "Bachelor of Science in Nursing (BSN)",
    nriScore: 78,
    tier: "Gold (Exam Ready)",
    englishStatus: "PTE Academic 68",
    examStatus: "ATT received / Exam booked for Nov 2026",
    leadValueEstimate: "$300 Review + Placement Lead"
  },
  {
    id: "cand-4",
    candidateCode: "SN-IND-1854",
    originCountry: "India (Kerala)",
    currentBase: "Dubai, UAE (Gulf Nurse)",
    targetCountry: "United States",
    specialty: "Operating Theater / OR",
    yearsExperience: 6,
    education: "Bachelor of Science in Nursing (BSN)",
    nriScore: 94,
    tier: "Platinum (Placement Ready)",
    englishStatus: "OET Grade B Verified",
    examStatus: "Passed NCLEX-RN (NY State Board)",
    leadValueEstimate: "$500 Direct Hospital Placement Lead"
  },
  {
    id: "cand-5",
    candidateCode: "SN-ZAF-6209",
    originCountry: "South Africa",
    currentBase: "Johannesburg, South Africa",
    targetCountry: "Canada",
    specialty: "Pediatrics / NICU",
    yearsExperience: 4,
    education: "Bachelor of Science in Nursing (BSN)",
    nriScore: 82,
    tier: "Gold (Exam Ready)",
    englishStatus: "Exempt (English medium degree)",
    examStatus: "NNAS Advisory Report Issued",
    leadValueEstimate: "$350 Qualified Lead"
  }
];
