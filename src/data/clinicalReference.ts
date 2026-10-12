export interface AntidoteEntry {
  toxinOrDrug: string;
  antidote: string;
  clinicalIndication: string;
  nursingConsiderations: string;
}

export interface LabValueEntry {
  testName: string;
  category: "Electrolytes" | "Hematology" | "Coagulation" | "Renal & Metabolic" | "Cardiac";
  usNormalRange: string;
  intlNormalRange: string;
  criticalLow: string;
  criticalHigh: string;
  clinicalSignificance: string;
}

export interface InfectionPrecaution {
  type: "Airborne" | "Droplet" | "Contact" | "Standard";
  mnemonic: string;
  diseases: string[];
  ppeRequired: string[];
  roomPlacement: string;
}

export const ANTIDOTE_DATABASE: AntidoteEntry[] = [
  {
    toxinOrDrug: "Acetaminophen / Paracetamol (Tylenol)",
    antidote: "Acetylcysteine (Mucomyst / NAC)",
    clinicalIndication: "Acute overdose, elevated ALT/AST, ingestion > 4g in 24 hrs",
    nursingConsiderations: "Smells like rotten eggs; give with juice if oral. IV (Acetadote) preferred in acute toxicity within 8-10 hours."
  },
  {
    toxinOrDrug: "Opioids (Morphine, Fentanyl, Hydromorphone, Oxycodone)",
    antidote: "Naloxone (Narcan)",
    clinicalIndication: "Severe respiratory depression (RR < 8-10/min), pinpoint pupils, unresponsiveness",
    nursingConsiderations: "Short half-life! Naloxone may wear off before long-acting opioids; monitor for rebound respiratory arrest and acute withdrawal pain."
  },
  {
    toxinOrDrug: "Warfarin (Coumadin)",
    antidote: "Vitamin K (Phytonadione) / Prothrombin Complex Concentrate (PCC)",
    clinicalIndication: "INR > 5.0 with active bleeding or emergent surgery",
    nursingConsiderations: "Vitamin K takes 6-24 hrs to work; PCC / Fresh Frozen Plasma (FFP) works immediately in life-threatening hemorrhage."
  },
  {
    toxinOrDrug: "Heparin Sodium (Unfractionated)",
    antidote: "Protamine Sulfate",
    clinicalIndication: "Severe hemorrhage, dangerously elevated aPTT",
    nursingConsiderations: "Administer slow IV push; rapid infusion causes acute hypotension, bradycardia, and anaphylactoid reactions."
  },
  {
    toxinOrDrug: "Digoxin (Lanoxin)",
    antidote: "Digoxin Immune Fab (DigiFab / Digibind)",
    clinicalIndication: "Life-threatening arrhythmias, severe hyperkalemia, serum Digoxin > 2.0 ng/mL",
    nursingConsiderations: "Serum digoxin levels will falsely elevate post-administration; monitor telemetry and potassium rather than lab digoxin level."
  },
  {
    toxinOrDrug: "Benzodiazepines (Midazolam, Lorazepam, Diazepam)",
    antidote: "Flumazenil (Romazicon)",
    clinicalIndication: "Post-procedural respiratory depression or overdose",
    nursingConsiderations: "Caution in chronic benzodiazepine users: rapid reversal can precipitate severe, intractable seizures."
  },
  {
    toxinOrDrug: "Magnesium Sulfate",
    antidote: "Calcium Gluconate 10%",
    clinicalIndication: "Magnesium toxicity in preeclampsia (absent DTRs, RR < 12, oliguria)",
    nursingConsiderations: "Keep calcium gluconate at bedside whenever IV magnesium sulfate infusion is running. Administer slow IV."
  },
  {
    toxinOrDrug: "Potassium (Severe Hyperkalemia > 6.0 mEq/L)",
    antidote: "IV Calcium Gluconate (Cardiac membrane stabilization) + Regular Insulin with D50W + Sodium Zirconium / Kayexalate",
    clinicalIndication: "Peaked T-waves, widened QRS, risk of V-fib",
    nursingConsiderations: "Calcium gluconate does NOT lower potassium; it protects the myocardium. Insulin shifts K+ into cells within 15 minutes."
  }
];

export const LAB_VALUES_DATABASE: LabValueEntry[] = [
  {
    testName: "Potassium (K+)",
    category: "Electrolytes",
    usNormalRange: "3.5 – 5.0 mEq/L",
    intlNormalRange: "3.5 – 5.0 mmol/L",
    criticalLow: "< 2.5 mEq/L",
    criticalHigh: "> 6.0 mEq/L",
    clinicalSignificance: "Highest priority electrolyte. Critical highs cause peaked T waves, V-fib; critical lows cause U-waves, muscle weakness, paralytic ileus."
  },
  {
    testName: "Sodium (Na+)",
    category: "Electrolytes",
    usNormalRange: "135 – 145 mEq/L",
    intlNormalRange: "135 – 145 mmol/L",
    criticalLow: "< 120 mEq/L",
    criticalHigh: "> 160 mEq/L",
    clinicalSignificance: "Governs fluid shifts and neurological stability. Rapid hyponatremia causes cerebral edema, seizures, coma. Correct slowly to avoid central pontine myelinolysis."
  },
  {
    testName: "Calcium (Total Ca2+)",
    category: "Electrolytes",
    usNormalRange: "8.5 – 10.5 mg/dL",
    intlNormalRange: "2.15 – 2.55 mmol/L",
    criticalLow: "< 6.5 mg/dL",
    criticalHigh: "> 13.0 mg/dL",
    clinicalSignificance: "Hypocalcemia causes tetany, positive Chvostek's (facial twitch) and Trousseau's (carpal spasm) signs, and prolonged QT interval."
  },
  {
    testName: "Blood Glucose (Fasting)",
    category: "Renal & Metabolic",
    usNormalRange: "70 – 100 mg/dL",
    intlNormalRange: "3.9 – 5.6 mmol/L",
    criticalLow: "< 50 mg/dL",
    criticalHigh: "> 400 mg/dL",
    clinicalSignificance: "US uses mg/dL; Commonwealth uses mmol/L. Rule: mmol/L × 18 = mg/dL. Hypoglycemia (< 70 mg/dL / < 3.9 mmol/L) is an immediate priority: cold, clammy, needs rule of 15."
  },
  {
    testName: "White Blood Cells (WBC)",
    category: "Hematology",
    usNormalRange: "4,500 – 11,000 /µL",
    intlNormalRange: "4.5 – 11.0 × 10⁹/L",
    criticalLow: "< 2,000 /µL (Neutropenia)",
    criticalHigh: "> 30,000 /µL",
    clinicalSignificance: "Leukopenia / Neutropenia requires neutropenic reverse isolation precautions (no fresh flowers, raw fruits, cooked food only)."
  },
  {
    testName: "Platelets",
    category: "Hematology",
    usNormalRange: "150,000 – 400,000 /µL",
    intlNormalRange: "150 – 400 × 10⁹/L",
    criticalLow: "< 50,000 /µL",
    criticalHigh: "> 1,000,000 /µL",
    clinicalSignificance: "Thrombocytopenia < 50,000 requires bleeding precautions (soft toothbrush, electric razor, no IM injections). < 20,000 poses spontaneous intracranial hemorrhage risk."
  },
  {
    testName: "INR (International Normalized Ratio)",
    category: "Coagulation",
    usNormalRange: "0.8 – 1.1 (Normal un-anticoagulated)",
    intlNormalRange: "2.0 – 3.0 (Therapeutic for Warfarin / DVT / PE / Afib)",
    criticalLow: "Sub-therapeutic",
    criticalHigh: "> 4.5",
    clinicalSignificance: "Standardized across all global laboratories. Therapeutic range for mechanical heart valves is 2.5 – 3.5. High INR requires withholding dose and administering Vitamin K."
  }
];

export const INFECTION_PRECAUTIONS: InfectionPrecaution[] = [
  {
    type: "Airborne",
    mnemonic: "MTV: Measles, TB, Varicella",
    diseases: ["Tuberculosis (TB)", "Measles (Rubeola)", "Varicella (Chickenpox / Disseminated Shingles)", "COVID-19 (during aerosol procedures)"],
    ppeRequired: ["N95 particulate respirator or PAPR", "Gown and gloves as per contact standard"],
    roomPlacement: "Private negative-pressure room with HEPA filtration (minimum 6-12 air exchanges/hr). Keep door closed at all times."
  },
  {
    type: "Droplet",
    mnemonic: "PIMP: Pertussis, Influenza, Meningitis, Pneumonia",
    diseases: ["Influenza", "Meningococcal Meningitis", "Pertussis (Whooping Cough)", "Rubella", "Mumps", "Diphtheria"],
    ppeRequired: ["Surgical mask when within 3 to 6 feet of client", "Face shield or goggles if spraying risk"],
    roomPlacement: "Private room preferred or cohort with client having same infection. Door may remain open."
  },
  {
    type: "Contact",
    mnemonic: "MRS. WEE: MRSA, RSV, Skin infections, Wound infections, Enteric (C. diff), Eye infections",
    diseases: ["Clostridioides difficile (C. diff)", "MRSA / VRE", "Rotavirus / Norovirus", "Scabies", "Lice", "Open draining wounds"],
    ppeRequired: ["Gloves and Gown upon entering room", "Soap & Water mandatory for C. diff (Alcohol does NOT kill spores)"],
    roomPlacement: "Private room or cohort. Dedicated equipment (stethoscope, BP cuff stays in room)."
  }
];
