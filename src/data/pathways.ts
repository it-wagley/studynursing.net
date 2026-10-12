export interface PathwayCountry {
  id: string;
  name: string;
  flag: string;
  popularFor: string;
  tag: string;
  visaType: string;
  licensingBody: string;
  examRequired: string;
  englishReq: string;
  averageTuition: string;
  postStudyWork: string;
  overview: string;
  pathways: {
    title: string;
    targetAudience: string;
    duration: string;
    details: string;
  }[];
}

export const COUNTRY_PATHWAYS: PathwayCountry[] = [
  {
    id: "au",
    name: "Australia",
    flag: "🇦🇺",
    popularFor: "Permanent Residency pathways & high starting salaries",
    tag: "Top Choice",
    visaType: "Student Visa (Subclass 500) -> Temporary Graduate (485)",
    licensingBody: "AHPRA (NMBA)",
    examRequired: "NCLEX-RN + OSCE (Outcomes-Based Assessment / OBA)",
    englishReq: "IELTS 7.0 (all bands) or OET B (all sub-tests) or PTE 65",
    averageTuition: "AUD $32,000 – $42,000 / year",
    postStudyWork: "2 to 4 years post-study work rights",
    overview:
      "Australia is one of the highest-paying and most welcoming destinations for international nurses. Qualified overseas RNs can gain registration via the Outcomes-Based Assessment (OBA) pathway, or complete an accredited 2-year graduate-entry Bachelor or Master of Nursing Practice.",
    pathways: [
      {
        title: "AHPRA Outcomes-Based Assessment (OBA)",
        targetAudience: "Nurses already holding a BSN and active RN license in their home country.",
        duration: "6 – 12 months",
        details:
          "Take the NCLEX-RN at an authorized Pearson VUE center globally, followed by the Objective Structured Clinical Examination (OSCE) in Adelaide."
      },
      {
        title: "Bachelor of Nursing (Graduate Entry / Conversion)",
        targetAudience: "Graduates with an existing degree in a health-related science.",
        duration: "2 years full-time",
        details:
          "Fast-track degree recognized by AHPRA with direct registration upon graduation and Subclass 485 post-study work visa eligibility."
      },
      {
        title: "Master of Nursing Practice (Pre-Registration)",
        targetAudience: "Bachelor degree holders seeking postgraduate qualification and direct RN accreditation.",
        duration: "2 years full-time",
        details:
          "Accredited by ANMAC & AHPRA with mandatory 800+ hours of Australian hospital clinical placements."
      }
    ]
  },
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    popularFor: "High demand, travel nursing & advanced practice careers",
    tag: "High Demand",
    visaType: "F-1 Student Visa / EB-3 Immigrant Visa (Schedule A)",
    licensingBody: "State Boards of Nursing (BON)",
    examRequired: "Next-Generation NCLEX-RN (NGN)",
    englishReq: "TOEFL iBT (83+ total, 26 speaking) or IELTS Academic (6.5)",
    averageTuition: "USD $25,000 – $48,000 / year",
    postStudyWork: "1 to 3 years OPT (STEM extension available in select programs)",
    overview:
      "The US healthcare system has severe nursing shortages. Overseas registered nurses can directly petition for US licensure through open State Boards (like New York, Illinois, Montana) with CGFNS credential evaluation, followed by EB-3 Green Card employer sponsorship.",
    pathways: [
      {
        title: "Direct Foreign RN Licensure via State Board & CGFNS",
        targetAudience: "Overseas RNs with 4-year BSN degrees.",
        duration: "9 – 18 months",
        details:
          "Complete CES credential evaluation, obtain Authorization to Test (ATT), pass the NCLEX-RN, and secure VisaScreen certificate for green card sponsorship."
      },
      {
        title: "Accelerated BSN (ABSN) in the USA",
        targetAudience: "International students with a non-nursing Bachelor's degree.",
        duration: "12 – 18 months",
        details:
          "Intensive university program in the US culminating in BSN degree and immediate eligibility for US NCLEX-RN."
      }
    ]
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    popularFor: "NHS sponsorship packages & subsidized relocation",
    tag: "Fast Track",
    visaType: "Health and Care Worker Visa / Student Visa",
    licensingBody: "Nursing and Midwifery Council (NMC)",
    examRequired: "NMC CBT + OSCE (Test of Competence)",
    englishReq: "IELTS 7.0 (6.5 in writing) or OET Grade B",
    averageTuition: "GBP £16,000 – £28,000 / year",
    postStudyWork: "2-year Graduate Route Visa or Direct NHS Sponsorship",
    overview:
      "The UK National Health Service (NHS) actively recruits international nurses. Through the Test of Competence, international RNs take a computer-based test in their home country, travel to the UK for the clinical OSCE, and receive immediate NHS band-5 RN registration.",
    pathways: [
      {
        title: "NMC Test of Competence (CBT + UK OSCE)",
        targetAudience: "Trained nurses with overseas registration.",
        duration: "4 – 8 months",
        details:
          "Pass the CBT Part 1 online. NHS Trusts often cover flights, visa fees, and the OSCE test center fee in the UK."
      },
      {
        title: "BSc / MSc Nursing in the UK",
        targetAudience: "School leavers and graduates seeking an internationally renowned British qualification.",
        duration: "2 – 3 years",
        details:
          "50% university theory and 50% NHS clinical placements. Eligible for the 2-year UK Graduate visa upon completion."
      }
    ]
  },
  {
    id: "ca",
    name: "Canada",
    flag: "🇨🇦",
    popularFor: "Express Entry Healthcare Stream & high quality of life",
    tag: "High Quality of Life",
    visaType: "Study Permit -> Post-Graduation Work Permit (PGWP)",
    licensingBody: "Provincial Nursing Regulators (via NNAS)",
    examRequired: "NCLEX-RN + Provincial Jurisprudence Exam",
    englishReq: "CELBAN (Canadian English Language Benchmark) or IELTS 7.0",
    averageTuition: "CAD $22,000 – $38,000 / year",
    postStudyWork: "Up to 3-year PGWP with Express Entry PR points",
    overview:
      "Canada evaluates foreign nurses through the National Nursing Assessment Service (NNAS). Recent provincial reforms (such as British Columbia and Ontario expedited pathways) have made Canadian licensing faster than ever for internationally educated nurses (IENs).",
    pathways: [
      {
        title: "NNAS Assessment to Provincial Licensure",
        targetAudience: "Experienced international registered nurses.",
        duration: "8 – 14 months",
        details:
          "NNAS advisory report followed by provincial regulatory evaluation and NCLEX-RN testing."
      },
      {
        title: "Post-Graduate Nursing Certificate / Practical Nursing",
        targetAudience: "International nurses seeking a Canadian credential and PGWP work permit.",
        duration: "1 – 2 years",
        details:
          "Combines Canadian clinical orientation, pharmacology bridging, and up to 3 years of open work authorization."
      }
    ]
  }
];
