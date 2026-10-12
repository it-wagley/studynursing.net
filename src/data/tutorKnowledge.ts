export interface TutorKnowledgeSnippet {
  id: string;
  triggerPhrases: string[];
  title: string;
  category: "Terminology" | "Pharmacology" | "Pathway" | "Med-Math";
  content: string;
  tags: string[];
}

export const TUTOR_KNOWLEDGE_BASE: TutorKnowledgeSnippet[] = [
  {
    id: "au-us-drugs",
    triggerPhrases: ["au vs us", "drug names", "paracetamol", "acetaminophen", "australia medication"],
    title: "Australia vs United States Drug Terminology",
    category: "Terminology",
    content: `
### Key Medication Term Differences (Commonwealth vs US):
* **Paracetamol (AU / UK / NZ)** = **Acetaminophen (US / Tylenol)**. Max daily adult dose: 4,000 mg (4g) / 24 hours. Antidote for overdose: *Acetylcysteine (NAC)*.
* **Adrenaline (AU / UK)** = **Epinephrine (US)**. Primary drug for anaphylaxis and cardiac arrest.
* **Noradrenaline (AU / UK)** = **Norepinephrine / Levophed (US)**. First-line vasopressor for septic shock.
* **Salbutamol (AU / UK)** = **Albuterol (US)**. Short-acting beta-2 agonist (SABA) bronchodilator.
* **Frusemide (historical AU / UK)** = **Furosemide / Lasix (US & modern AU)**. Loop diuretic (watch for hypokalemia).

### Lab Units Comparison:
* **Blood Glucose:** Australia & UK measure in **mmol/L** (Normal fasting: 4.0 – 7.0 mmol/L). The US measures in **mg/dL** (Normal fasting: 70 – 100 mg/dL). *(Conversion formula: mmol/L × 18 = mg/dL)*.
* **Electrolytes:** Potassium (K+) and Sodium (Na+) use mmol/L in AU/UK and mEq/L in US, but numerical values are equivalent (e.g., K+ 3.5 – 5.0 is standard in both).
`,
    tags: ["pharmacology", "australia", "terminology", "international"]
  },
  {
    id: "ace-vs-arbs",
    triggerPhrases: ["ace inhibitors", "arbs", "pril", "sartan", "hypertension mnemonic"],
    title: "ACE Inhibitors (-pril) vs ARBs (-sartan)",
    category: "Pharmacology",
    content: `
### Renin-Angiotensin-Aldosterone System (RAAS) Blockers:

#### 1. ACE Inhibitors (End in '-pril': Lisinopril, Enalapril, Ramipril)
* **Mechanism:** Blocks Angiotensin Converting Enzyme, preventing Angiotensin I from converting to Angiotensin II.
* **Hallmark Side Effects:**
  * **Dry hacking cough:** Caused by buildup of **bradykinin** in pulmonary airways.
  * **Angioedema:** Rapid swelling of lips, tongue, and throat (Medical Emergency! Never re-administer).
  * **Hyperkalemia:** Potassium retention (monitor K+ levels).
  * First-dose orthostatic hypotension.

#### 2. ARBs - Angiotensin Receptor Blockers (End in '-sartan': Losartan, Valsartan)
* **Mechanism:** Competitively blocks Angiotensin II Type 1 receptors directly.
* **Why switch from ACE to ARB?** Because ARBs **do NOT prevent bradykinin breakdown**, they **DO NOT cause the persistent dry cough**!
* **Nursing Tip:** If a patient is prescribed an ACE inhibitor and cannot tolerate the dry nagging cough, the provider will switch them to an ARB. Both cause hyperkalemia and are teratogenic (contraindicated in pregnancy).
`,
    tags: ["pharmacology", "cardiology", "nclex", "mnemonics"]
  },
  {
    id: "ahpra-oba-overview",
    triggerPhrases: ["ahpra", "oba", "osce", "australia nclex", "adelaide"],
    title: "AHPRA Outcomes-Based Assessment (OBA) Pathway Guide",
    category: "Pathway",
    content: `
### Australia's OBA Pathway for Internationally Qualified RNs (IQRNs):
The Nursing and Midwifery Board of Australia (NMBA) uses an Outcomes-Based Assessment model consisting of two key stages:

1. **Self-Check & Stream Classification:**
   * **Stream A:** Qualifications substantially equivalent to an Australian degree (mostly UK, Ireland, Canada, US). Direct registration.
   * **Stream B:** Qualifications relevant but not directly equivalent (e.g. Philippines, India, Nepal, Nigeria). Must complete OBA.

2. **Stage 1 — NCLEX-RN (MCQ Exam):**
   * Testing administered by Pearson VUE globally.
   * Tests clinical knowledge, safety, and decision-making identical to the US NCLEX-RN standard.

3. **Stage 2 — OSCE (Objective Structured Clinical Examination):**
   * Held in person at the NMBA National Test Centre in **Adelaide, South Australia**.
   * Consists of 10 clinical stations testing communication, infection control, clinical handovers (ISBAR), medication administration, and emergency response.

4. **English Language Requirement:**
   * Minimum IELTS 7.0 across all sub-bands, or OET Grade B (350+), or PTE Academic 65. Score clubbing permitted within a 6-month window under specific NMBA guidelines.
`,
    tags: ["australia", "ahpra", "licensing", "international"]
  },
  {
    id: "dosage-calc-principles",
    triggerPhrases: ["dosage", "formula", "dimensional analysis", "iv drip rate", "med math"],
    title: "Core Dimensional Analysis & Med-Math Rules",
    category: "Med-Math",
    content: `
### Golden Rules for Nursing Dosage Math:
1. **Never use trailing zeros:** Write \`5 mg\`, NEVER \`5.0 mg\` (prevents 10x overdose misreads).
2. **Always use leading zeros:** Write \`0.5 mg\`, NEVER \`.5 mg\`.
3. **Drops per minute (gtt/min):** Always round to the nearest whole number (drops cannot be divided).
4. **Milliliters per hour (mL/hr):** Usually rounded to the nearest tenth (e.g., 24.5 mL/hr) or whole number depending on your hospital's infusion pump specifications.
5. **Universal Formula:**
   $$\\text{Rate} = \\frac{\\text{Desired Dose}}{\\text{Available Dose}} \\times \\text{Quantity / Volume}$$
`,
    tags: ["math", "dosage", "clinical", "safety"]
  }
];

export function searchTutorKnowledge(query: string): string | null {
  const normalized = query.toLowerCase();
  for (const item of TUTOR_KNOWLEDGE_BASE) {
    if (item.triggerPhrases.some(phrase => normalized.includes(phrase))) {
      return item.content;
    }
  }
  return null;
}
