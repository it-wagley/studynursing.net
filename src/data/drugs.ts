export interface DrugEntry {
  id: string;
  genericName: string;
  usBrandName: string;
  commonwealthBrandName: string;
  drugClass: string;
  system: "Cardiovascular" | "Endocrine" | "Respiratory" | "Infectious Disease" | "Anticoagulation" | "Neurology & Psych";
  indications: string;
  mechanismOfAction: string;
  blackBoxWarning: string;
  antidoteOrReversal?: string;
  nursingConsiderations: string[];
  memoryMnemonic: string;
}

export const DRUG_DATABASE: DrugEntry[] = [
  {
    id: "drug-furosemide",
    genericName: "Furosemide",
    usBrandName: "Lasix",
    commonwealthBrandName: "Frusemide / Lasix (AU/UK)",
    drugClass: "Loop Diuretic",
    system: "Cardiovascular",
    indications: "Acute pulmonary edema, Congestive Heart Failure, Hypertension, Renal failure fluid retention",
    mechanismOfAction: "Inhibits reabsorption of sodium and chloride in the thick ascending Loop of Henle, causing rapid diuresis.",
    blackBoxWarning: "Profound diuresis with water and electrolyte depletion (severe hypokalemia, hyponatremia, dehydration).",
    nursingConsiderations: [
      "Check Potassium (K+) level prior to administration; hold if K+ < 3.5 mEq/L.",
      "Check Blood Pressure; hold if systolic BP < 90-100 mmHg.",
      "Do NOT push faster than 20 mg/minute IV (rapid administration causes irreversible ototoxicity/tinnitus).",
      "Educate patient to consume potassium-rich foods (bananas, potatoes, spinach)."
    ],
    memoryMnemonic: "Furosemide: 'Furiously' peeing out potassium. Lasix lasts six hours."
  },
  {
    id: "drug-digoxin",
    genericName: "Digoxin",
    usBrandName: "Lanoxin",
    commonwealthBrandName: "Lanoxin / Sigmaxin (AU)",
    drugClass: "Cardiac Glycoside / Inotrope",
    system: "Cardiovascular",
    indications: "Heart Failure, Atrial Fibrillation, Paroxysmal Atrial Tachycardia",
    mechanismOfAction: "Inhibits sodium-potassium ATPase pump, increasing intracellular calcium. Results in positive inotropy (stronger contractions) and negative chronotropy (slower heart rate).",
    blackBoxWarning: "Narrow therapeutic window. Toxicity threshold > 2.0 ng/mL.",
    antidoteOrReversal: "Digoxin Immune Fab (DigiFab / Digibind)",
    nursingConsiderations: [
      "Must check Apical Pulse for 60 FULL seconds prior to administration; hold if HR < 60 bpm in adults (or < 90 in infants).",
      "Monitor serum potassium; Hypokalemia dramatically increases digoxin toxicity risk.",
      "Recognize early toxicity signs: Nausea, vomiting, anorexia, and visual changes (yellow/green halos around lights)."
    ],
    memoryMnemonic: "Digoxin: Dig a ditch if HR < 60 bpm. Halos in the sky = Digoxin toxicity!"
  },
  {
    id: "drug-lisinopril",
    genericName: "Lisinopril",
    usBrandName: "Zestril / Prinivil",
    commonwealthBrandName: "Prinivil / Lisinopril (AU/UK)",
    drugClass: "ACE Inhibitor (-pril)",
    system: "Cardiovascular",
    indications: "Hypertension, Heart Failure, Post-myocardial infarction kidney protection",
    mechanismOfAction: "Blocks Angiotensin Converting Enzyme, preventing conversion of Angiotensin I to the potent vasoconstrictor Angiotensin II.",
    blackBoxWarning: "Fetal toxicity: Strictly contraindicated in pregnancy (causes fetal renal failure and skull defects).",
    nursingConsiderations: [
      "Monitor for dry, hacking non-productive cough (caused by bradykinin accumulation).",
      "Watch for Angioedema (swelling of lips, face, tongue, airway) — immediate medical emergency!",
      "Monitor serum Potassium; causes hyperkalemia (avoid salt substitutes containing potassium).",
      "First-dose orthostatic hypotension: Instruct client to change positions slowly."
    ],
    memoryMnemonic: "-PRIL: P (Pregnancy danger), R (Renal check), I (Irritating dry cough), L (Lips swelling = Angioedema)."
  },
  {
    id: "drug-losartan",
    genericName: "Losartan",
    usBrandName: "Cozaar",
    commonwealthBrandName: "Cozaar (AU/UK)",
    drugClass: "Angiotensin II Receptor Blocker (ARB / -sartan)",
    system: "Cardiovascular",
    indications: "Hypertension, Diabetic nephropathy, Alternative for clients who develop ACE-inhibitor dry cough",
    mechanismOfAction: "Selectively blocks Angiotensin II from binding to the AT1 receptor, causing vasodilation and aldosterone suppression.",
    blackBoxWarning: "Fetal toxicity: Teratogenic in 2nd and 3rd trimesters.",
    nursingConsiderations: [
      "Does NOT break down bradykinin, therefore does NOT cause the persistent dry cough of ACE inhibitors.",
      "Monitor Potassium and Creatinine (hyperkalemia risk).",
      "Monitor BP for therapeutic reduction."
    ],
    memoryMnemonic: "-SARTAN: Spares the cough! Use when patient can't tolerate the ACE inhibitor cough."
  },
  {
    id: "drug-metoprolol",
    genericName: "Metoprolol (Tartrate & Succinate)",
    usBrandName: "Lopressor / Toprol XL",
    commonwealthBrandName: "Betaloc / Metoprolol (AU/UK)",
    drugClass: "Cardioselective Beta-1 Blocker (-lol)",
    system: "Cardiovascular",
    indications: "Angina pectoris, Hypertension, Heart failure, Tachyarrhythmias, Post-MI cardioprotection",
    mechanismOfAction: "Selectively antagonizes Beta-1 adrenergic receptors in cardiac tissue, decreasing heart rate, myocardial contractility, and cardiac output.",
    blackBoxWarning: "Abrupt cessation can cause rebound severe hypertension, myocardial infarction, or fatal arrhythmias. Must taper off.",
    nursingConsiderations: [
      "Hold if apical heart rate < 60 bpm or systolic BP < 90-100 mmHg.",
      "Can mask hypoglycemic tachycardia in diabetic clients (watch for diaphoresis instead).",
      "Use with caution in asthma/COPD (can cause bronchospasm at higher non-selective doses)."
    ],
    memoryMnemonic: "-LOL: Laughs at high BP and fast heart rate. Beta-1 affects 1 heart; Beta-2 affects 2 lungs."
  },
  {
    id: "drug-heparin",
    genericName: "Heparin Sodium (Unfractionated)",
    usBrandName: "Heparin",
    commonwealthBrandName: "Heparin (AU/UK)",
    drugClass: "Parenteral Anticoagulant",
    system: "Anticoagulation",
    indications: "Prophylaxis and treatment of DVT, Pulmonary Embolism, Acute Coronary Syndrome, Dialysis line flushing",
    mechanismOfAction: "Binds to and potentiates antithrombin III, inactivating Thrombin (Factor IIa) and Factor Xa.",
    blackBoxWarning: "Fatal hemorrhage risk; Heparin-Induced Thrombocytopenia (HIT).",
    antidoteOrReversal: "Protamine Sulfate (1 mg neutralizes ~100 units of Heparin)",
    nursingConsiderations: [
      "Monitor aPTT (Activated Partial Thromboplastin Time); therapeutic target is 1.5 to 2.5 times baseline (typically 60-80 seconds).",
      "Monitor Platelet count; a 50% drop from baseline suggests Heparin-Induced Thrombocytopenia (HIT) — stop infusion immediately!",
      "SubQ injection: Administer 2 inches away from umbilicus into abdominal fat; do NOT aspirate or massage site (prevents hematoma)."
    ],
    memoryMnemonic: "HEPARIN: H (Halts clots), E (Evaluate aPTT), P (Protamine is antidote), R (Risk of HIT thrombocytopenia)."
  },
  {
    id: "drug-warfarin",
    genericName: "Warfarin",
    usBrandName: "Coumadin / Jantoven",
    commonwealthBrandName: "Marevan / Coumadin (AU/UK)",
    drugClass: "Oral Vitamin K Antagonist",
    system: "Anticoagulation",
    indications: "DVT/PE treatment, Stroke prevention in Atrial Fibrillation, Mechanical heart valve anticoagulation",
    mechanismOfAction: "Interferes with hepatic synthesis of vitamin K-dependent clotting factors (II, VII, IX, X and protein C/S).",
    blackBoxWarning: "Major or fatal bleeding; contraindicated in pregnancy (Category X / Warfarin embryopathy).",
    antidoteOrReversal: "Vitamin K (Phytonadione) / Prothrombin Complex Concentrate (PCC)",
    nursingConsiderations: [
      "Monitor PT / INR regularly. Therapeutic INR is 2.0 to 3.0 (or 2.5 to 3.5 for mechanical prosthetic valves).",
      "Educate patient to maintain CONSISTENT dietary intake of Vitamin K (green leafy vegetables like kale, broccoli); do not drastically increase or decrease.",
      "Full anticoagulant effect takes 3 to 5 days; overlap with Heparin bridge therapy until INR is therapeutic."
    ],
    memoryMnemonic: "WARFARIN: War on Vitamin K. Take at 18:00 (evening). INR is the international rule."
  },
  {
    id: "drug-vancomycin",
    genericName: "Vancomycin",
    usBrandName: "Vancocin",
    commonwealthBrandName: "Vancocin / Vancomycin (AU/UK)",
    drugClass: "Glycopeptide Antibiotic",
    system: "Infectious Disease",
    indications: "Severe MRSA infections, C. difficile colitis (oral only), Endocarditis, Bone infections",
    mechanismOfAction: "Inhibits bacterial cell wall synthesis by binding to D-Ala-D-Ala terminals, blocking peptidoglycan polymerization.",
    blackBoxWarning: "Nephrotoxicity and Ototoxicity.",
    nursingConsiderations: [
      "Infuse slowly over AT LEAST 60 minutes (minimum 10 mg/min). Rapid infusion triggers 'Red Man Syndrome' (histamine flush, pruritus, hypotension).",
      "Monitor Trough levels 30 minutes before the 4th dose (therapeutic target typically 10-20 mcg/mL).",
      "Assess Serum Creatinine and BUN regularly. Assess hearing changes or ringing in ears (ototoxicity)."
    ],
    memoryMnemonic: "VANCO: V (Vascular irritation / Phlebitis), A (Assess trough levels), N (Nephrotoxicity), C (Check hearing), O (Over 60 min infusion)."
  },
  {
    id: "drug-metformin",
    genericName: "Metformin",
    usBrandName: "Glucophage / Fortamet",
    commonwealthBrandName: "Diabex / Diaformin / Metformin (AU/UK)",
    drugClass: "Biguanide Antidiabetic",
    system: "Endocrine",
    indications: "Type 2 Diabetes Mellitus (First-line agent), Polycystic Ovary Syndrome (PCOS)",
    mechanismOfAction: "Decreases hepatic glucose production, decreases intestinal absorption of glucose, and improves insulin sensitivity in peripheral tissues.",
    blackBoxWarning: "Lactic Acidosis (high mortality risk, exacerbated in renal impairment or iodinated contrast dye).",
    nursingConsiderations: [
      "CRITICAL RULE: Withhold Metformin 48 hours BEFORE and 48 hours AFTER procedures using IV iodinated radiopaque contrast dye to prevent acute renal failure and fatal lactic acidosis.",
      "Does NOT stimulate insulin secretion from beta cells, so it rarely causes hypoglycemia when used alone.",
      "Take with meals to minimize common gastrointestinal side effects (diarrhea, abdominal cramps)."
    ],
    memoryMnemonic: "METFORMIN: Stop Metformin for CT scan with Dye! Lactic acidosis hazard."
  },
  {
    id: "drug-levothyroxine",
    genericName: "Levothyroxine",
    usBrandName: "Synthroid / Levoxyl",
    commonwealthBrandName: "Eutrosig / Oroxine / Levothyroxine (AU/UK)",
    drugClass: "Synthetic Thyroid Hormone (T4)",
    system: "Endocrine",
    indications: "Hypothyroidism, Myxedema coma, TSH suppression in thyroid cancer",
    mechanismOfAction: "Converted into triiodothyronine (T3) in peripheral tissues, regulating basal metabolic rate, protein synthesis, and cellular oxygen consumption.",
    blackBoxWarning: "Should NOT be used for obesity or weight loss treatment.",
    nursingConsiderations: [
      "Must take in the MORNING on an EMPTY STOMACH with a full glass of water, AT LEAST 30 to 60 minutes before breakfast.",
      "Do NOT take within 4 hours of calcium, iron, or antacids (severely impairs absorption).",
      "Lifelong therapy; do not stop abruptly.",
      "Watch for signs of hyperthyroidism/toxicity: Tachycardia, palpitations, insomnia, heat intolerance, weight loss."
    ],
    memoryMnemonic: "LEVOTHYROXINE: Take 'Level 1' in morning, empty stomach, lifetime drug."
  }
];
