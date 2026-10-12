export interface DosageProblem {
  id: string;
  category: "IV Pump (mL/hr)" | "Gravity Drip (gtt/min)" | "Weight-Based (mcg/kg/min)" | "Oral / Liquid";
  order: string;
  supply: string;
  question: string;
  unit: string;
  correctAnswer: number;
  tolerance?: number;
  formula: string;
  steps: string[];
  clinicalTip: string;
}

export const DOSAGE_PROBLEMS: DosageProblem[] = [
  {
    id: "dp-1",
    category: "IV Pump (mL/hr)",
    order: "Heparin sodium 1,200 units/hr IV continuous infusion.",
    supply: "Heparin 25,000 units in 500 mL D5W.",
    question: "At what rate in mL/hr will you program the electronic infusion pump?",
    unit: "mL/hr",
    correctAnswer: 24,
    formula: "Rate (mL/hr) = (Desired units/hr × Total Volume mL) ÷ Total Available Units",
    steps: [
      "Identify the order: 1,200 units per hour.",
      "Identify concentration: 25,000 units in 500 mL.",
      "Calculate unit ratio: 25,000 units ÷ 500 mL = 50 units/mL.",
      "Divide desired rate by concentration: 1,200 units/hr ÷ 50 units/mL = 24 mL/hr."
    ],
    clinicalTip:
      "Heparin is a high-alert medication. Always obtain an independent double-check from a second registered nurse prior to adjusting pump rates."
  },
  {
    id: "dp-2",
    category: "Gravity Drip (gtt/min)",
    order: "Infuse 1,000 mL Normal Saline 0.9% IV over 8 hours.",
    supply: "Macrodrip tubing with a drop factor of 15 gtt/mL.",
    question: "Calculate the gravity flow rate in drops per minute (gtt/min). Round to the nearest whole drop.",
    unit: "gtt/min",
    correctAnswer: 31,
    tolerance: 0.5,
    formula: "gtt/min = (Total Volume in mL × Drop Factor in gtt/mL) ÷ Time in minutes",
    steps: [
      "Convert infusion time to minutes: 8 hours × 60 minutes = 480 minutes.",
      "Multiply volume by drop factor: 1,000 mL × 15 gtt/mL = 15,000 gtt.",
      "Divide by minutes: 15,000 ÷ 480 = 31.25 gtt/min.",
      "Round to the nearest whole number: 31 gtt/min."
    ],
    clinicalTip:
      "Drops cannot be divided into fractions in gravity infusions. Standard nursing protocol requires rounding to the nearest whole integer."
  },
  {
    id: "dp-3",
    category: "Weight-Based (mcg/kg/min)",
    order: "Dopamine IV at 5 mcg/kg/min for a client weighing 70 kg.",
    supply: "Dopamine 400 mg in 250 mL D5W.",
    question: "Calculate the IV infusion pump rate in mL/hr. Round to the nearest tenth.",
    unit: "mL/hr",
    correctAnswer: 13.1,
    tolerance: 0.1,
    formula: "mL/hr = (mcg/kg/min × weight in kg × 60 min/hr) ÷ (Concentration in mcg/mL)",
    steps: [
      "Calculate total dose per minute: 5 mcg/kg/min × 70 kg = 350 mcg/min.",
      "Calculate total dose per hour: 350 mcg/min × 60 min = 21,000 mcg/hr.",
      "Convert supply to mcg: 400 mg = 400,000 mcg.",
      "Determine concentration: 400,000 mcg ÷ 250 mL = 1,600 mcg/mL.",
      "Calculate pump rate: 21,000 mcg/hr ÷ 1,600 mcg/mL = 13.125 mL/hr -> Round to 13.1 mL/hr."
    ],
    clinicalTip:
      "Dopamine is a potent inotrope/vasopressor. Regularly assess peripheral perfusion, blood pressure, and IV site patency to prevent extravasation."
  },
  {
    id: "dp-4",
    category: "Oral / Liquid",
    order: "Amoxicillin oral suspension 250 mg every 8 hours.",
    supply: "Amoxicillin oral suspension labeled 125 mg / 5 mL.",
    question: "How many mL will the nurse administer per dose?",
    unit: "mL",
    correctAnswer: 10,
    formula: "mL = (Desired dose × Available volume) ÷ Available dose",
    steps: [
      "Desired dose: 250 mg.",
      "Available concentration: 125 mg in 5 mL.",
      "Calculate: (250 mg ÷ 125 mg) × 5 mL = 2 × 5 mL = 10 mL."
    ],
    clinicalTip:
      "Shake liquid suspensions thoroughly before measuring. For pediatric administrations, use calibrated oral syringes rather than household teaspoons."
  }
];
