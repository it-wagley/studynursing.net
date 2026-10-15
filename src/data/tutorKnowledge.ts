/**
 * Florence AI Tutor Corpus
 * 
 * STRICT EDITORIAL BOUNDARY (editorial-boundaries.md §5):
 * Florence is a study and exam tutor only. Its corpus contains NO regulatory content at all.
 * Excluded from the index entirely: registration pathways, AHPRA and NMBA process,
 * NMC process, ANMAC, the self-check, OBA eligibility, English test requirements,
 * visas, immigration, Gulf employment, fees, timelines, country guides.
 */

export interface TutorKnowledgeSnippet {
  id: string;
  triggerPhrases: string[];
  title: string;
  category: "Dosage Calculation" | "Pharmacology" | "Drug Nomenclature" | "Clinical Reference" | "Exam Technique";
  content: string;
  tags: string[];
}

export const TUTOR_KNOWLEDGE_BASE: TutorKnowledgeSnippet[] = [
  {
    id: "dosage-dimensional-analysis",
    triggerPhrases: ["dosage", "dimensional analysis", "formula", "med math", "drip rate", "gtt/min", "iv calculation"],
    title: "Dosage Calculation: Dimensional Analysis & Drip Rates",
    category: "Dosage Calculation",
    content: `
### Dimensional Analysis & Clinical Math Principles:

#### 1. Universal Formula Method:
$$\\text{Dose Administered} = \\frac{\\text{Desired Dose (Order)}}{\\text{Supply on Hand}} \\times \\text{Vehicle (Quantity / Volume)}$$

#### 2. IV Flow Rate (mL/hr):
$$\\text{Rate (mL/hr)} = \\frac{\\text{Total Volume (mL)}}{\\text{Infusion Time (hours)}}$$

#### 3. IV Drip Rate (gtt/min):
$$\\text{Drip Rate (gtt/min)} = \\frac{\\text{Volume (mL)} \\times \\text{Drop Factor (gtt/mL)}}{\\text{Time in Minutes}}$$
* *Rule:* Drops cannot be split—always round drops per minute to the nearest whole integer.

#### 4. Safety Decimals:
* **Always use a leading zero:** Write \`0.5 mg\`, never \`.5 mg\`.
* **Never use a trailing zero:** Write \`5 mg\`, never \`5.0 mg\` (prevents 10-fold overdose errors).
`,
    tags: ["dosage", "math", "clinical", "safety"]
  },
  {
    id: "drug-nomenclature-commonwealth-us",
    triggerPhrases: ["drug names", "au vs us", "commonwealth vs us", "paracetamol", "acetaminophen", "adrenaline", "epinephrine"],
    title: "US vs Commonwealth Nursing Drug Nomenclature",
    category: "Drug Nomenclature",
    content: `
### US FDA vs Commonwealth (TGA / BNF) Drug Nomenclature:

| Generic Class | Commonwealth (AU, UK, NZ) | United States (US FDA) | Clinical Note |
|---|---|---|---|
| Analgesic / Antipyretic | **Paracetamol** | **Acetaminophen** (Tylenol) | Max adult daily dose: 4g (4,000 mg). Antidote: Acetylcysteine (NAC). |
| Sympathomimetic | **Adrenaline** | **Epinephrine** | First-line agent for anaphylaxis (0.3–0.5 mg IM 1:1,000). |
| Vasopressor | **Noradrenaline** | **Norepinephrine** (Levophed) | First-line vasopressor for septic shock resuscitation. |
| Bronchodilator (SABA) | **Salbutamol** | **Albuterol** | Short-acting beta-2 agonist; monitor for tachycardia and tremor. |
| Loop Diuretic | **Frusemide** (historical) | **Furosemide** (Lasix) | Loop diuretic; watch for hypokalemia (K+ < 3.5 mmol/L) and ototoxicity. |
| Anticholinergic | **Hyoscine** | **Scopolamine** | Used for motion sickness and palliative terminal respiratory secretions. |
`,
    tags: ["pharmacology", "nomenclature", "international", "nclex"]
  },
  {
    id: "pharmacology-ace-vs-arbs",
    triggerPhrases: ["ace inhibitors", "arbs", "pril", "sartan", "hypertension", "cough", "angioedema"],
    title: "ACE Inhibitors (-pril) vs ARBs (-sartan)",
    category: "Pharmacology",
    content: `
### RAAS Antihypertensives: ACE Inhibitors vs. ARBs

#### 1. ACE Inhibitors (End in '-pril': Lisinopril, Enalapril, Ramipril)
* **Mechanism:** Inhibits Angiotensin Converting Enzyme, blocking conversion of Angiotensin I to Angiotensin II.
* **Side Effects:**
  * **Dry Hacking Cough:** Caused by buildup of **bradykinin** in pulmonary airways.
  * **Angioedema:** Rapid swelling of lips, tongue, or pharynx (Life-threatening airway emergency).
  * **Hyperkalemia:** Potassium retention.
  * First-dose orthostatic hypotension.

#### 2. Angiotensin II Receptor Blockers / ARBs (End in '-sartan': Losartan, Valsartan)
* **Mechanism:** Directly binds and blocks Angiotensin II Type 1 receptors on vascular smooth muscle.
* **Key Distinction:** Because ARBs **do not inhibit kinase II**, they **do not prevent bradykinin degradation**. Thus, ARBs **do not cause the dry hacking cough**!
* **NCLEX / Exam Tip:** When a patient develops a persistent cough on Lisinopril, providers typically switch them to an ARB like Losartan. Both drug classes are teratogenic (contraindicated in pregnancy).
`,
    tags: ["pharmacology", "cardiology", "nclex", "mnemonics"]
  },
  {
    id: "pharmacology-anticoagulation-reversals",
    triggerPhrases: ["anticoagulant", "heparin", "warfarin", "antidotes", "protamine", "vitamin k", "inr", "aptt"],
    title: "Anticoagulants: Monitoring & Emergency Reversal",
    category: "Pharmacology",
    content: `
### Anticoagulation Nursing Essentials:

#### 1. Unfractionated Heparin (IV / SC)
* **Monitoring Parameter:** Activated Partial Thromboplastin Time (**aPTT**). Therapeutic target: 1.5 to 2.5 times the baseline control (typically 60–80 seconds).
* **Specific Antidote:** **Protamine Sulfate** (binds heparin to form a stable, inactive salt).
* **Safety Alert:** Monitor platelets for Heparin-Induced Thrombocytopenia (HIT)—a >50% platelet drop triggers immediate cessation.

#### 2. Warfarin (Oral)
* **Monitoring Parameter:** International Normalized Ratio (**INR**). Therapeutic target: 2.0 to 3.0 (2.5 to 3.5 for mechanical prosthetic heart valves).
* **Specific Antidote:** **Vitamin K1 (Phytonadione)** + Prothrombin Complex Concentrate (PCC) for acute severe hemorrhage.
* **Dietary Education:** Consistent dietary intake of green leafy vegetables (Vitamin K); do not suddenly increase or restrict.
`,
    tags: ["pharmacology", "hematology", "antidotes", "safety"]
  },
  {
    id: "clinical-reference-antidotes",
    triggerPhrases: ["antidote", "naloxone", "narcan", "flumazenil", "digoxin", "digibind", "calcium gluconate"],
    title: "High-Yield Clinical Antidotes & Reversals",
    category: "Clinical Reference",
    content: `
### Emergency Antidote Reference Table:

| Toxic Substance / Medication | Specific Antidote | Clinical Monitoring Priorities |
|---|---|---|
| **Opioids** (Morphine, Fentanyl, Oxycodone) | **Naloxone** (Narcan) | Short half-life (30–90 min); patient may re-enter respiratory depression as naloxone wears off. |
| **Benzodiazepines** (Midazolam, Lorazepam) | **Flumazenil** | Monitor for seizure precipitation, especially in chronic benzodiazepine users. |
| **Digoxin** | **Digoxin Immune Fab** (DigiFab) | Watch for hypokalemia, yellow-green visual halos, bradycardia (apical pulse < 60 bpm). |
| **Magnesium Sulfate** (Toxemia / Eclampsia) | **Calcium Gluconate 10%** | Administer for loss of deep tendon reflexes (DTRs) or respiratory rate < 12/min. |
| **Acetaminophen / Paracetamol** | **Acetylcysteine** (NAC) | Restores hepatic glutathione stores; most effective within 8 hours of ingestion. |
`,
    tags: ["antidotes", "emergency", "safety", "pharmacology"]
  },
  {
    id: "nclex-cjmm-framework",
    triggerPhrases: ["cjmm", "clinical judgment", "nextgen nclex", "unfolding case", "ngn", "prioritization"],
    title: "NextGen NCLEX: Clinical Judgment Measurement Model (CJMM)",
    category: "Exam Technique",
    content: `
### The 6 Cognitive Steps of the NCSBN CJMM:

1. **Recognize Cues:** Identify relevant vs irrelevant clinical data, vital sign trends, and laboratory abnormalities.
2. **Analyze Cues:** Link recognized cues to underlying patient pathophysiology and determine which concerns are most concerning.
3. **Prioritize Hypotheses:** Determine which client issue is most urgent using ABCs, Maslow's hierarchy, and stable vs unstable frameworks.
4. **Generate Solutions:** Identify evidence-based nursing interventions and identify medications/actions that are contraindicated.
5. **Take Action:** Safely administer priority interventions, communicate with the healthcare team (ISBAR), and implement safety precautions.
6. **Evaluate Outcomes:** Compare actual patient response against expected outcomes to evaluate whether interventions improved patient status.
`,
    tags: ["nclex", "cjmm", "exam-prep", "clinical-judgment"]
  }
];

/**
 * Structural Refusal Filter
 * 
 * Intercepts regulatory, immigration, fee, timeline, or personal eligibility queries
 * before any model reasoning or knowledge retrieval can occur.
 */
export function checkRefusal(query: string): string | null {
  const q = query.toLowerCase();

  // Pattern list for regulatory, visa, immigration, fee, and personal eligibility topics
  const regulatoryKeywords = [
    "ahpra", "nmba", "nmc", "ncnz", "snb", "nnas", "nmbi", "state board",
    "oba", "stream a", "stream b", "anmac", "self-check", "self check",
    "visa", "subclass", "pr ", "permanent resid", "green card", "eb3", "eb-3",
    "sponsorship", "points", "migration agent", "mara", "iaa", "oisc",
    "cost to register", "how much fee", "how long will it take", "timeline",
    "prometric", "dataflow", "gulf job", "hiring in saudi", "hiring in uae",
    "can i register", "am i eligible", "evaluate my", "my cv", "my qualification",
    "my patient has", "dose for my"
  ];

  const matched = regulatoryKeywords.some(keyword => q.includes(keyword));

  if (matched) {
    return `### Editorial Boundary Notice: Study & Exam Tutor Only

I am **Florence**, a dedicated study and exam preparation tutor. Under StudyNursing.net's strict editorial charter, **I do not provide regulatory determinations, visa advice, timeline estimates, fees, or evaluate individual eligibility**.

#### Where to Find Official Regulatory Criteria:
* **Australia (NMBA / AHPRA):** Review our [Australia Registration Guide](/register/australia) or visit [ahpra.gov.au](https://www.ahpra.gov.au/).
* **United Kingdom (NMC):** Review our [UK Registration Guide](/register/united-kingdom) or visit [nmc.org.uk](https://www.nmc.org.uk/).
* **New Zealand (NCNZ):** Review our [New Zealand Guide](/register/new-zealand) or visit [nursingcouncil.org.nz](https://www.nursingcouncil.org.nz/).
* **All Jurisdictions:** Explore our neutral [Destination Comparison Table](/compare).

#### How I Can Help You Study:
You can ask me about:
* **Dosage Calculations:** Dimensional analysis, IV drop rates (gtt/min), pediatric body-weight calculations.
* **Pharmacology Mechanisms:** ACE inhibitors vs ARBs, beta-blockers, emergency antidotes.
* **Drug Nomenclature:** US vs Commonwealth brand and generic conversions (e.g. Paracetamol vs Acetaminophen).
* **NextGen NCLEX Strategy:** Clinical Judgment Measurement Model (CJMM) unfolding cases and prioritization.`;
  }

  return null;
}

export function searchTutorKnowledge(query: string): string | null {
  const normalized = query.toLowerCase();
  for (const item of TUTOR_KNOWLEDGE_BASE) {
    if (item.triggerPhrases.some(phrase => normalized.includes(phrase))) {
      return item.content;
    }
  }
  return null;
}
