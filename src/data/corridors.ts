export interface MigrationCorridor {
  id: string;
  slug: string;
  originCountry: string;
  originFlag: string;
  destinationCountry: string;
  destinationFlag: string;
  headline: string;
  primaryTargetExam: string;
  regulatoryBoard: string;
  estimatedTimelineMonths: string;
  totalOfficialCostUSD: string;
  localCurrencyEstimate: string;
  averageStartingSalary: string;
  keySteps: {
    stepNumber: number;
    title: string;
    details: string;
    costUSD: string;
    timeline: string;
  }[];
  criticalPitfallsToAvoid: string[];
  visaType: string;
}

export const CORRIDOR_PLAYBOOKS: MigrationCorridor[] = [
  {
    id: "corr-ken-au",
    slug: "kenya-to-australia",
    originCountry: "Kenya",
    originFlag: "🇰🇪",
    destinationCountry: "Australia",
    destinationFlag: "🇦🇺",
    headline: "Kenya to Australia AHPRA OBA Registered Nurse Roadmap",
    primaryTargetExam: "NCLEX-RN (Pearson VUE) + OSCE (Adelaide)",
    regulatoryBoard: "AHPRA & NMBA (Nursing & Midwifery Board of Australia)",
    estimatedTimelineMonths: "9 to 14 Months",
    totalOfficialCostUSD: "$3,800 – $4,600 USD",
    localCurrencyEstimate: "~KES 490,000 – 600,000",
    averageStartingSalary: "AUD $82,000 – $98,000 / year (KSh ~7.5M – 9M)",
    visaType: "Subclass 482 (Employer Sponsored) / 189 / 190 Permanent Residency",
    keySteps: [
      {
        stepNumber: 1,
        title: "AHPRA Online Self-Check & Stream Classification",
        details: "Complete the free NMBA self-check. Kenyan BSN degrees fall under Stream B, qualifying for Outcomes-Based Assessment.",
        costUSD: "$430 AUD (Assessment Fee)",
        timeline: "Month 1"
      },
      {
        stepNumber: 2,
        title: "English Proficiency Benchmark",
        details: "Score OET Grade B (minimum 350 in each sub-test) or IELTS Academic 7.0 across all bands. Score clubbing allowed across 2 sittings within 6 months.",
        costUSD: "$390 USD",
        timeline: "Month 1 - 2"
      },
      {
        stepNumber: 3,
        title: "NCLEX-RN (Part 1 MCQ) in Nairobi / Global Pearson VUE",
        details: "Take the Next-Gen NCLEX-RN at the Pearson VUE authorized test center in Nairobi (Westlands) or Johannesburg. Pass score is valid for 10 years.",
        costUSD: "$200 USD + $150 International Scheduling",
        timeline: "Month 3 - 6"
      },
      {
        stepNumber: 4,
        title: "OSCE Clinical Examination (Part 2) in Adelaide",
        details: "Travel to Adelaide, South Australia on a visitor/business visa (subclass 600) to take the 10-station OSCE at the NMBA National Test Centre.",
        costUSD: "$4,000 AUD",
        timeline: "Month 7 - 10"
      },
      {
        stepNumber: 5,
        title: "Full AHPRA Registration & Visa Nomination",
        details: "Receive your unconditional Registered Nurse license and match with Australian state health services (NSW, Queensland, Victoria Health).",
        costUSD: "Visa fees covered by sponsors in many regional trusts",
        timeline: "Month 11 - 14"
      }
    ],
    criticalPitfallsToAvoid: [
      "Never pay informal agents in Nairobi KES 1,000,000+ for 'job guarantees'; AHPRA registrations must be submitted directly through your personal portal.",
      "Ensure your Nursing Council of Kenya (NCK) license has zero gaps in renewal verification.",
      "Do not book travel to Adelaide for OSCE before receiving official ATT and test date confirmation."
    ]
  },
  {
    id: "corr-zim-uk",
    slug: "zimbabwe-to-uk",
    originCountry: "Zimbabwe",
    originFlag: "🇿🇼",
    destinationCountry: "United Kingdom",
    destinationFlag: "🇬🇧",
    headline: "Zimbabwe to UK NHS Registered Nurse Relocation Playbook",
    primaryTargetExam: "NMC Test of Competence (CBT + UK OSCE)",
    regulatoryBoard: "Nursing and Midwifery Council (NMC UK)",
    estimatedTimelineMonths: "6 to 10 Months",
    totalOfficialCostUSD: "$1,600 – $2,200 USD (Often 100% Refunded by NHS Trusts)",
    localCurrencyEstimate: "~USD $1,800 total",
    averageStartingSalary: "GBP £28,407 – £34,581 (Band 5 RN)",
    visaType: "Health and Care Worker Visa (Skilled Worker Subclass)",
    keySteps: [
      {
        stepNumber: 1,
        title: "NMC Eligibility & Qualification Evaluation",
        details: "Open an online NMC account, upload your Zimbabwean nursing qualification, and request verification from the Nurses Council of Zimbabwe (NCZ).",
        costUSD: "£140 GBP (~$180 USD)",
        timeline: "Month 1"
      },
      {
        stepNumber: 2,
        title: "English Certification (OET / IELTS)",
        details: "OET Grade B (minimum 350 in reading, listening, speaking, 300 in writing) or IELTS Academic 7.0 (6.5 in writing).",
        costUSD: "$390 USD",
        timeline: "Month 2"
      },
      {
        stepNumber: 3,
        title: "Computer Based Test (CBT Part 1) in Harare",
        details: "Book through Pearson VUE in Harare. 115 multiple choice questions on UK nursing standards and drug calculation numeracy.",
        costUSD: "£83 GBP (~$110 USD)",
        timeline: "Month 3 - 4"
      },
      {
        stepNumber: 4,
        title: "NHS Trust Direct Video Interview & Job Offer",
        details: "Interview directly with NHS Foundation Trusts (London, Manchester, Birmingham, Leeds). Receive formal Certificate of Sponsorship (CoS).",
        costUSD: "$0 (Free direct recruitment)",
        timeline: "Month 5 - 6"
      },
      {
        stepNumber: 5,
        title: "Relocation to UK & Hospital Sponsored OSCE",
        details: "NHS Trusts typically provide free one-way flight, 1 to 3 months subsidized accommodation, and pay the £794 OSCE examination fee.",
        costUSD: "Sponsored by NHS Trust",
        timeline: "Month 7 - 10"
      }
    ],
    criticalPitfallsToAvoid: [
      "Avoid predatory 'recruitment brokers' charging $3,000 upfront fees; legitimate UK NHS recruiters are legally prohibited from charging candidates fees.",
      "Make sure police clearance certificates from CID Zimbabwe are authenticated within 6 months of visa submission."
    ]
  },
  {
    id: "corr-npl-au",
    slug: "nepal-to-australia",
    originCountry: "Nepal",
    originFlag: "🇳🇵",
    destinationCountry: "Australia",
    destinationFlag: "🇦🇺",
    headline: "Nepal to Australia Nursing Pathway (OBA vs 2-Year Master of Nursing)",
    primaryTargetExam: "AHPRA OBA (NCLEX) OR AHPRA-Accredited Degree",
    regulatoryBoard: "AHPRA / ANMAC",
    estimatedTimelineMonths: "8 to 14 Months (OBA) or 2 Years (Degree)",
    totalOfficialCostUSD: "$3,500 USD (OBA) or $34,000 AUD/yr (Study route)",
    localCurrencyEstimate: "~NPR 460,000 (OBA)",
    averageStartingSalary: "AUD $80,000 – $95,000 / year",
    visaType: "Subclass 500 (Student) -> 485 (Graduate) OR Subclass 482 / 189 / 190 PR",
    keySteps: [
      {
        stepNumber: 1,
        title: "Nepal Nursing Council (NNC) Verification",
        details: "Verify BSN from Tribhuvan University, Kathmandu University, or Pokhara University with NNC letter of good standing.",
        costUSD: "$50 USD",
        timeline: "Month 1"
      },
      {
        stepNumber: 2,
        title: "PTE Academic (65+) or IELTS (7.0+)",
        details: "PTE Academic is popular in Kathmandu; score 65 in all 4 communicative skills.",
        costUSD: "$200 USD",
        timeline: "Month 2"
      },
      {
        stepNumber: 3,
        title: "NCLEX-RN Pearson VUE in Kathmandu or New Delhi",
        details: "Pearson VUE test centers in Kathmandu or New Delhi administer the NCLEX-RN exam.",
        costUSD: "$350 USD",
        timeline: "Month 3 - 6"
      },
      {
        stepNumber: 4,
        title: "OSCE in Adelaide & State PR Nomination",
        details: "Complete Adelaide OSCE. Australia's regional states (Tasmania, South Australia, Western Australia) actively sponsor international RNs.",
        costUSD: "$4,000 AUD",
        timeline: "Month 7 - 11"
      }
    ],
    criticalPitfallsToAvoid: [
      "Ensure you have at least 1-2 years continuous clinical hospital experience in Nepal to maximize state sponsorship points.",
      "Beware of education consultancies in Putalisadak/Bagbazar misrepresenting bridging program entry dates."
    ]
  },
  {
    id: "corr-gulf-us",
    slug: "india-gulf-to-usa",
    originCountry: "India / Gulf (UAE/Saudi)",
    originFlag: "🇮🇳",
    destinationCountry: "United States",
    destinationFlag: "🇺🇸",
    headline: "Gulf & Indian Registered Nurses to USA Green Card (EB-3) Roadmap",
    primaryTargetExam: "Next-Generation NCLEX-RN (NGN)",
    regulatoryBoard: "State Boards of Nursing (New York / Illinois / Montana) & CGFNS",
    estimatedTimelineMonths: "12 to 20 Months",
    totalOfficialCostUSD: "$1,200 – $1,800 USD",
    localCurrencyEstimate: "~AED 4,500 – 6,500 or INR ~120,000",
    averageStartingSalary: "USD $75,000 – $115,000 / year (Plus Overtime & Night Shift)",
    visaType: "EB-3 Immigrant Visa (Permanent Resident Green Card)",
    keySteps: [
      {
        stepNumber: 1,
        title: "Select an Open US Board (No Social Security Number Required)",
        details: "Apply to New York State Board (NYSED), Illinois, or Montana which allow foreign nurses to test without an SSN.",
        costUSD: "$143 USD (NYSED fee)",
        timeline: "Month 1"
      },
      {
        stepNumber: 2,
        title: "CGFNS Credentials Evaluation Service (CES)",
        details: "CGFNS verifies university transcripts, clinical hours, and Indian/DHA/MOH registration.",
        costUSD: "$415 USD",
        timeline: "Month 2 - 4"
      },
      {
        stepNumber: 3,
        title: "NCLEX-RN ATT & Exam in Dubai, Riyadh, or India",
        details: "Take the NCLEX-RN at Pearson VUE centers in Dubai, Abu Dhabi, Mumbai, Chennai, Hyderabad, or Bangalore.",
        costUSD: "$350 USD",
        timeline: "Month 5 - 8"
      },
      {
        stepNumber: 4,
        title: "VisaScreen Certificate & Direct Hospital Employer Match",
        details: "Obtain ICHP VisaScreen and sign with a direct-hire hospital system or reputable international staffing partner.",
        costUSD: "$700 USD (Often covered by US sponsor)",
        timeline: "Month 9 - 12"
      },
      {
        stepNumber: 5,
        title: "USCIS I-140 Immigrant Petition & Consular Green Card Processing",
        details: "Hospital files EB-3 petition under Schedule A shortage designation. Relocate directly with green card in hand.",
        costUSD: "All attorney & petition fees paid by US employer",
        timeline: "Month 13 - 20"
      }
    ],
    criticalPitfallsToAvoid: [
      "Never sign with staffing agencies demanding 3-year lock-in contracts with excessive $30,000 breach penalty fees.",
      "Ensure English scores (IELTS 6.5 or TOEFL 83) are achieved before applying for the VisaScreen certificate."
    ]
  }
];
