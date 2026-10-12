export interface VaultResource {
  id: string;
  title: string;
  category: "Cheat Sheets" | "Immigration & Visas" | "Licensing Exam Prep" | "Clinical Pocket Guides";
  fileType: "PDF" | "Spreadsheet" | "Interactive Checklist";
  pagesCount: string;
  downloadsCount: string;
  summary: string;
  targetAudience: string;
  tags: string[];
}

export const STUDY_VAULT_RESOURCES: VaultResource[] = [
  {
    id: "vault-dosage-sheet",
    title: "1-Page Master Dosage Math & IV Drip Rate Cheat Sheet",
    category: "Cheat Sheets",
    fileType: "PDF",
    pagesCount: "2 Pages (Double-Sided)",
    downloadsCount: "14,820 Downloads",
    summary:
      "All 10 universal nursing dosage math formulas including IV pump rates (mL/hr), gravity drops (gtt/min), weight-based infusions (mcg/kg/min), pediatric rules, and metric unit conversion mnemonics.",
    targetAudience: "All nursing students preparing for 100% dosage calculation semester benchmark exams.",
    tags: ["Dosage Calc", "Med Math", "Formulas", "IV Drops"]
  },
  {
    id: "vault-ahpra-checklist",
    title: "2026 Australia AHPRA OBA Step-by-Step Document Checklist",
    category: "Immigration & Visas",
    fileType: "Interactive Checklist",
    pagesCount: "6 Pages",
    downloadsCount: "9,410 Downloads",
    summary:
      "Complete documentation roadmap for nurses in Kenya, Nepal, India, and Zimbabwe applying for AHPRA Stream B. Includes Nursing Council letter templates, police clearance authentication, and Pearson VUE NCLEX booking steps.",
    targetAudience: "Overseas RNs seeking direct Australian registration and Subclass 482 / 189 visas.",
    tags: ["Australia", "AHPRA", "OBA", "NMBA", "Visa 482"]
  },
  {
    id: "vault-us-no-ssn-guide",
    title: "US NCLEX-RN Application Guide for Foreign Nurses (No SSN Required)",
    category: "Licensing Exam Prep",
    fileType: "PDF",
    pagesCount: "8 Pages",
    downloadsCount: "11,250 Downloads",
    summary:
      "Detailed step-by-step instructions for applying to the New York State Board (NYSED), Illinois, and Montana without a US Social Security Number. Includes CGFNS CES credential ordering and Pearson VUE ATT processing.",
    targetAudience: "International nurses seeking US licensure and EB-3 Green Card hospital sponsorship.",
    tags: ["USA", "NCLEX-RN", "CGFNS", "No SSN", "New York Board"]
  },
  {
    id: "vault-antidote-card",
    title: "Top 20 Emergency Antidotes & High-Alert Medication Pocket Card",
    category: "Clinical Pocket Guides",
    fileType: "PDF",
    pagesCount: "1 Page Pocket Card",
    downloadsCount: "16,300 Downloads",
    summary:
      "Color-coded clinical pocket card listing first-line reversal agents (Naloxone, Flumazenil, Protamine, Vitamin K, Digibind, Calcium Gluconate, NAC) with dosing indications and nursing watches.",
    targetAudience: "Hospital bedside nurses, Med-Surg and ICU clinicians, NCLEX exam candidates.",
    tags: ["Antidotes", "Pharmacology", "Pocket Card", "Safety"]
  },
  {
    id: "vault-oet-ielts-matrix",
    title: "OET Grade B vs IELTS 7.0 vs PTE 65 Score Matrix & Clubbing Rules",
    category: "Immigration & Visas",
    fileType: "PDF",
    pagesCount: "4 Pages",
    downloadsCount: "7,890 Downloads",
    summary:
      "Official regulatory comparison table showing minimum sub-scores accepted by AHPRA (Australia), NMC (UK), CGFNS (US), and NNAS (Canada). Explains exact score clubbing rules across two test sittings.",
    targetAudience: "Aspiring nurses preparing for English proficiency exams.",
    tags: ["OET", "IELTS", "PTE", "English Requirements"]
  },
  {
    id: "vault-nhs-interview-bank",
    title: "UK NHS Band 5 Staff Nurse Scenario Interview Question Bank",
    category: "Licensing Exam Prep",
    fileType: "PDF",
    pagesCount: "12 Pages",
    downloadsCount: "8,640 Downloads",
    summary:
      "Real clinical scenario interview questions used by NHS Foundation Trusts (London, Manchester, Birmingham). Covers ISBAR handover scenarios, deteriorating patient management, and safeguarding protocols.",
    targetAudience: "International nurses preparing for virtual NHS hospital recruitment interviews.",
    tags: ["UK NHS", "Band 5", "Interview", "ISBAR", "Scenarios"]
  }
];
