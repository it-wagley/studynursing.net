import { DepthTier } from "@/components/DepthLabel";

/**
 * The seven registration destinations, as published criteria.
 *
 * Single source of truth: both the /register index and the /compare table
 * read from here, so a regulator, fee or depth tier can never say one thing
 * on the hub and another in the comparison.
 *
 * `tier` is the editorial depth claim and must match the reviewer state on
 * the destination's own page. See docs/information-architecture.md §3.
 */
export interface DestinationRow {
  country: string;
  tier: DepthTier;
  path: string;
  regulator: string;
  primaryAssessment: string;
  cognitiveExam: string;
  practicalExam: string;
  englishBenchmark: string;
  publishedFees: string;
  typicalTimeline: string;
  recencyStandard: string;
}

export const DESTINATION_DATA: DestinationRow[] = [
  {
    country: "Australia",
    tier: "standard",
    path: "/register/australia",
    regulator: "NMBA / AHPRA",
    primaryAssessment: "Stream B: Outcomes-Based Assessment (OBA) or Stream A (Direct for UK/NZ/US/CA/IE)",
    cognitiveExam: "NCLEX-RN (Pearson VUE, $200 USD base + $150 USD intl)",
    practicalExam: "RN OSCE at Adelaide Health Simulation (AUD $4,000)",
    englishBenchmark: "IELTS 7.0 all bands / OET B (350 all) / PTE 65 all. Clubbing permitted within 6 months.",
    publishedFees: "~$5,750 – $6,050 AUD (Self-check free; AHPRA assessment $410; NCLEX ~$540; OSCE $4,000; registration $332)",
    typicalTimeline: "9–18 months for Stream B candidates",
    recencyStandard: "Minimum 450 hours registered practice in previous 5 years",
  },
  {
    country: "United Kingdom",
    tier: "standard",
    path: "/register/united-kingdom",
    regulator: "Nursing and Midwifery Council (NMC)",
    primaryAssessment: "Test of Competence (ToC 2021): CBT cognitive test followed by OSCE clinical stations",
    cognitiveExam: "Test of Competence CBT (Pearson VUE, £83 GBP)",
    practicalExam: "NMC OSCE at 5 UK university test centres (£794 GBP)",
    englishBenchmark: "IELTS 7.0 (R, L, S) & 6.5 (W) / OET B (R, L, S) & C+ (W) / PTE 65 (R, L, S) & 58 (W)",
    publishedFees: "~£1,100 – £1,400 GBP (Eval £140; CBT £83; OSCE £794; Registration fee £153)",
    typicalTimeline: "6–12 months depending on OSCE test slot availability",
    recencyStandard: "Current, unencumbered registration in home country of training",
  },
  {
    country: "New Zealand",
    tier: "standard",
    path: "/register/new-zealand",
    regulator: "Nursing Council of New Zealand (NCNZ)",
    primaryAssessment: "TruMerit document verification (Step 1), then application to the Nursing Council; a competence assessment (theory exam plus clinical OSCE) where required",
    cognitiveExam: "TruMerit credentials verification (fee not published on the Council's IQN page)",
    practicalExam: "Competence assessment: theory exam and clinical OSCE, required for all enrolled nurses and some registered nurses",
    englishBenchmark: "IELTS 7.0 all bands / OET B (350 all bands) / PTE 65 all bands",
    publishedFees: "~NZD $4,500 – $7,500 (CGFNS + NCNZ application + polytechnic CAP tuition)",
    typicalTimeline: "8–14 months",
    recencyStandard: "1,800 hours post-registration practice; the Council's self-assessment references 1,800 hours in the last 10 years",
  },
  {
    country: "Singapore",
    tier: "standard",
    path: "/register/singapore",
    regulator: "Singapore Nursing Board (SNB)",
    primaryAssessment: "Hospital job offer sponsorship required prior to sitting SNB Licensure Examination",
    cognitiveExam: "SNB RN Licensure Examination (conducted in Singapore / regional centres)",
    practicalExam: "Competency verification during mandatory hospital preceptorship",
    englishBenchmark: "Employer-specified assessment; IELTS Academic 6.5–7.0 if non-English curriculum",
    publishedFees: "~SGD $300 – $500 (Most fees subsidized or reimbursed by hiring public healthcare clusters)",
    typicalTimeline: "4–9 months from interview and hospital offer",
    recencyStandard: "Minimum 1–3 years current acute inpatient hospital experience",
  },
  {
    country: "Canada",
    tier: "overview",
    path: "/register/canada",
    regulator: "National Nursing Assessment Service (NNAS) & Provincial Colleges",
    primaryAssessment: "NNAS Advisory Report followed by individual provincial college credential review and NCLEX",
    cognitiveExam: "NCLEX-RN (recognized nationally by provincial nursing regulators)",
    practicalExam: "Substantially Equivalent Competency (SEC) assessment if mandated by target province",
    englishBenchmark: "IELTS Academic 7.0 (S 7.0, L 7.5, R 6.5, W 7.0) or CELBAN (S 8.0, L 7.5, R 6.5, W 7.0)",
    publishedFees: "NNAS Expedited Service $750 CAD, plus provincial college fees and NCLEX",
    typicalTimeline: "12–24 months (NNAS advisory report typically takes 6–10 months)",
    recencyStandard: "Minimum 1,125 hours within previous 5 years (varies slightly by province)",
  },
  {
    country: "Republic of Ireland",
    tier: "overview",
    path: "/register/ireland",
    regulator: "Nursing and Midwifery Board of Ireland (NMBI)",
    primaryAssessment: "Group 3 (Overseas) qualification assessment followed by RCSI Aptitude Test or clinical adaptation",
    cognitiveExam: "RCSI Faculty of Nursing Part 1 (Theory computer test)",
    practicalExam: "RCSI Part 2 (OSCE-style clinical assessment) or 6-week hospital adaptation placement",
    englishBenchmark: "IELTS 7.0 (L, S, R) & 6.5 (W) / OET B (L, S, R) & C+ (W)",
    publishedFees: "~€2,800 – €3,500 EUR (NMBI app €350; RCSI test €2,800; adaptation often employer-sponsored)",
    typicalTimeline: "8–15 months",
    recencyStandard: "Active practice within the past 3 years; continuous professional registration",
  },
  {
    country: "United States",
    tier: "overview",
    path: "/register/united-states",
    regulator: "Individual State Boards of Nursing (50 state regulatory boards)",
    primaryAssessment: "Credential evaluation (CGFNS CES or Josef Silny) followed by State Board approval and NCLEX",
    cognitiveExam: "NCLEX-RN (Pearson VUE, $200 USD base + $150 USD intl scheduling)",
    practicalExam: "None required for initial licensure by US State Boards",
    englishBenchmark: "Varies by State Board (typically IELTS Academic 6.5 with 7.0 spoken, or TOEFL iBT 83)",
    publishedFees: "~$1,200 – $2,000 USD (CGFNS CES ~$400–$500; State Board ~$100–$300; NCLEX $350)",
    typicalTimeline: "9–18 months for initial state licensure (Immigrant visa scheduling runs separately)",
    recencyStandard: "Varies by individual State Board of Nursing rules",
  },
];
