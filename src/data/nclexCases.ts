export interface NclexCase {
  id: string;
  category: "Physiological Adaptation" | "Pharmacology" | "Management of Care & Priority";
  clientName: string;
  age: number;
  gender: string;
  room: string;
  allergies: string;
  admitDiagnosis: string;
  ehr: {
    nursesNotes: { time: string; note: string }[];
    vitals: { time: string; bp: string; hr: string; rr: string; temp: string; spo2: string }[];
    labs: { test: string; value: string; reference: string; flagged?: boolean }[];
  };
  question: {
    cjmmSkill: string;
    prompt: string;
    instruction: string;
    options: { id: string; text: string; correct: boolean }[];
    rationale: string;
    clinicalTakeaway: string;
  };
}

export const NCLEX_CASES: NclexCase[] = [
  {
    id: "case-1",
    category: "Physiological Adaptation",
    clientName: "Robert Martinez",
    age: 64,
    gender: "Male",
    room: "Bed 4B — Med-Surg Telemetry",
    allergies: "Penicillin (Hives / Angioedema)",
    admitDiagnosis: "Community-Acquired Pneumonia, Acute Dyspnea",
    ehr: {
      nursesNotes: [
        {
          time: "08:00",
          note: "Client admitted from Emergency Department with 3-day history of productive cough yielding rust-colored sputum, intermittent fever, and increasing shortness of breath on exertion."
        },
        {
          time: "08:30",
          note: "Assessed in room. Client sitting in high Fowler position, noticeably fatigued. Coarse crackles auscultated bilaterally in lower lung bases, right > left. Productive cough noted with thick brownish sputum. Skin is warm, pale, and diaphoretic."
        }
      ],
      vitals: [
        {
          time: "08:00",
          bp: "114/70 mmHg",
          hr: "108 bpm (Sinus tachycardia)",
          rr: "26 breaths/min",
          temp: "38.9°C (102.0°F)",
          spo2: "89% on Room Air"
        },
        {
          time: "08:30",
          bp: "108/66 mmHg",
          hr: "112 bpm",
          rr: "28 breaths/min",
          temp: "39.1°C (102.4°F)",
          spo2: "88% on Room Air"
        }
      ],
      labs: [
        { test: "White Blood Cells (WBC)", value: "16.4 × 10³/µL", reference: "4.5 – 11.0 × 10³/µL", flagged: true },
        { test: "Lactate", value: "2.4 mmol/L", reference: "0.5 – 2.0 mmol/L", flagged: true },
        { test: "Blood Urea Nitrogen (BUN)", value: "26 mg/dL", reference: "7 – 20 mg/dL", flagged: true },
        { test: "Serum Creatinine", value: "1.1 mg/dL", reference: "0.6 – 1.2 mg/dL", flagged: false }
      ]
    },
    question: {
      cjmmSkill: "Layer 3: Take Action (Clinical Priority)",
      prompt: "Based on the client's current clinical assessment and diagnostic findings, which 2 actions should the nurse prioritize performing FIRST?",
      instruction: "Select the two (2) priority nursing interventions.",
      options: [
        {
          id: "opt-1",
          text: "Apply supplemental oxygen via nasal cannula to titrate SpO2 between 92% – 96%",
          correct: true
        },
        {
          id: "opt-2",
          text: "Collect blood and sputum culture specimens prior to initiating ordered IV antibiotics",
          correct: true
        },
        {
          id: "opt-3",
          text: "Place client in a flat supine position to relieve musculoskeletal strain",
          correct: false
        },
        {
          id: "opt-4",
          text: "Administer high-dose oral antipyretic with 500 mL cold water immediately",
          correct: false
        },
        {
          id: "opt-5",
          text: "Administer intravenous Penicillin G as prescribed by the admitting resident",
          correct: false
        }
      ],
      rationale:
        "Priority 1 is Airway and Breathing: The client is hypoxemic (SpO2 88% on room air, RR 28), requiring immediate supplemental oxygen therapy. Priority 2 is obtaining microbiological specimens (blood and sputum cultures) BEFORE starting antimicrobial therapy to avoid sterility or false negative cultures. Flat supine positioning is contraindicated as it increases the work of breathing. Penicillin is strictly contraindicated due to the documented allergy (anaphylaxis risk).",
      clinicalTakeaway:
        "Remember the classic board rule: 'Cultures before Antimicrobials, Oxygen before Invasives'."
    }
  },
  {
    id: "case-2",
    category: "Pharmacology",
    clientName: "Evelyn Washington",
    age: 72,
    gender: "Female",
    room: "Room 312 — Cardiac Stepdown",
    allergies: "Sulfa drugs",
    admitDiagnosis: "Congestive Heart Failure exacerbation, Atrial Fibrillation",
    ehr: {
      nursesNotes: [
        {
          time: "06:30",
          note: "Night shift handoff: Client received IV Furosemide (Lasix) 40 mg at 22:00. Urine output 1,800 mL overnight."
        },
        {
          time: "07:15",
          note: "Morning assessment: Client complains of new-onset nausea, loss of appetite, and states, 'The lights in this room have strange yellow halos around them.' Apical pulse auscultated at 52 bpm, irregular."
        }
      ],
      vitals: [
        {
          time: "07:15",
          bp: "128/76 mmHg",
          hr: "52 bpm (Apical bradycardia)",
          rr: "18 breaths/min",
          temp: "36.8°C (98.2°F)",
          spo2: "96% on 2L NC"
        }
      ],
      labs: [
        { test: "Serum Digoxin", value: "2.6 ng/mL", reference: "0.5 – 2.0 ng/mL (Toxicity > 2.0)", flagged: true },
        { test: "Potassium (K+)", value: "3.1 mEq/L", reference: "3.5 – 5.0 mEq/L", flagged: true },
        { test: "Serum Creatinine", value: "1.4 mg/dL", reference: "0.6 – 1.2 mg/dL", flagged: true }
      ]
    },
    question: {
      cjmmSkill: "Layer 2: Analyze Cues & Recognize Complications",
      prompt: "The client is scheduled to receive morning oral Digoxin 0.125 mg and Furosemide 40 mg. Which actions should the nurse perform immediately?",
      instruction: "Select the two (2) correct priority actions.",
      options: [
        {
          id: "c2-opt-1",
          text: "Withhold the scheduled morning dose of Digoxin and notify the prescribing physician",
          correct: true
        },
        {
          id: "c2-opt-2",
          text: "Obtain a 12-lead ECG and initiate continuous cardiac telemetry monitoring",
          correct: true
        },
        {
          id: "c2-opt-3",
          text: "Administer the morning Digoxin with a full glass of whole milk to soothe gastrointestinal upset",
          correct: false
        },
        {
          id: "c2-opt-4",
          text: "Administer high-dose IV Potassium Chloride rapid bolus over 5 minutes",
          correct: false
        }
      ],
      rationale:
        "The client displays classic signs of Digoxin Toxicity: visual disturbances (yellow-green halos), nausea/anorexia, and bradycardia (apical HR 52 < 60 bpm). Furthermore, hypokalemia (K+ 3.1 mEq/L secondary to Furosemide diuresis) dramatically potentiates digoxin toxicity by allowing increased digoxin binding to cardiac ATPase receptors. Digoxin must be withheld and cardiac monitoring initiated due to high risk of fatal ventricular arrhythmias. IV Potassium must NEVER be given as a rapid bolus (causes cardiac arrest).",
      clinicalTakeaway:
        "High-Yield Rule: Hypokalemia increases Digoxin toxicity. Always check apical pulse for 60 full seconds (hold if < 60 bpm) and verify potassium."
    }
  },
  {
    id: "case-3",
    category: "Management of Care & Priority",
    clientName: "Morning Triage Assessment",
    age: 0,
    gender: "Unit Triage",
    room: "Med-Surg Unit — 4 Patient Assignment",
    allergies: "Various",
    admitDiagnosis: "Morning Patient Triage Prioritization",
    ehr: {
      nursesNotes: [
        {
          time: "07:00",
          note: "Day shift change of shift report received for 4 assigned clients on the floor."
        }
      ],
      vitals: [
        {
          time: "07:00",
          bp: "Client 1: 130/80 | Client 2: 90/50 | Client 3: 120/78 | Client 4: 140/90",
          hr: "Client 1: 78 | Client 2: 122 | Client 3: 84 | Client 4: 88",
          rr: "Client 1: 16 | Client 2: 28 | Client 3: 18 | Client 4: 18",
          temp: "Client 1: 37.0°C | Client 2: 38.8°C | Client 3: 36.9°C | Client 4: 37.2°C",
          spo2: "Client 1: 98% | Client 2: 91% | Client 3: 97% | Client 4: 96%"
        }
      ],
      labs: [
        { test: "Client 1", value: "Post-op Day 2 appendectomy requesting oral pain medication (pain 6/10)", reference: "Stable", flagged: false },
        { test: "Client 2", value: "Post-op Day 1 colon resection: BP 90/50, HR 122, restless, abdominal dressing saturated with bright red blood", reference: "Active Hemorrhage / Shock", flagged: true },
        { test: "Client 3", value: "Type 2 diabetic with morning blood glucose 145 mg/dL awaiting breakfast tray", reference: "Expected", flagged: false },
        { test: "Client 4", value: "Client with pneumonia scheduled for discharge instructions at 09:00", reference: "Discharge", flagged: false }
      ]
    },
    question: {
      cjmmSkill: "Layer 1: Prioritize Hypotheses (Triage Framework)",
      prompt: "After receiving the morning change-of-shift handover report, which client should the registered nurse assess FIRST?",
      instruction: "Select the single (1) highest priority client.",
      options: [
        {
          id: "c3-opt-2",
          text: "Client 2: The post-operative colon resection client with tachycardia (HR 122), hypotension (BP 90/50), and bright red surgical dressing saturation",
          correct: true
        },
        {
          id: "c3-opt-1",
          text: "Client 1: The post-operative appendectomy client reporting surgical site pain rating 6 out of 10",
          correct: false
        },
        {
          id: "c3-opt-3",
          text: "Client 3: The diabetic client with fasting morning blood glucose of 145 mg/dL awaiting breakfast",
          correct: false
        },
        {
          id: "c3-opt-4",
          text: "Client 4: The client awaiting morning discharge paperwork and home medication education",
          correct: false
        }
      ],
      rationale:
        "Client 2 exhibits cardinal signs of hypovolemic hemorrhagic shock (hypotension, compensatory tachycardia, tachypnea, restlessness, and active bleeding through dressing). This is an immediate life-threatening physiological instability under the ABC (Circulation) and Unstable vs. Stable prioritization framework. Pain (Client 1) and expected mild hyperglycemia (Client 3) are stable and secondary to acute hemorrhagic shock.",
      clinicalTakeaway:
        "Prioritization Rule: Unstable over Stable, Acute over Chronic, Actual bleeding over Expected pain."
    }
  }
];
