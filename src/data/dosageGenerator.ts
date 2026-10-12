import { DosageProblem } from "./dosageProblems";

// Helper for random numbers in range
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundTo(num: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

export function generateRandomProblem(category?: string): DosageProblem {
  const cat = category || ["IV Pump (mL/hr)", "Gravity Drip (gtt/min)", "Weight-Based (mcg/kg/min)", "Oral / Liquid"][getRandomInt(0, 3)];

  if (cat === "IV Pump (mL/hr)") {
    const isHeparin = Math.random() > 0.5;
    if (isHeparin) {
      const unitsPerHour = getRandomInt(8, 18) * 100; // 800 to 1800 units/hr
      const bagVolume = [250, 500][getRandomInt(0, 1)];
      const totalUnits = bagVolume === 250 ? 25000 : 25000;
      const concentration = totalUnits / bagVolume; // units/mL
      const rate = roundTo(unitsPerHour / concentration, 1);

      return {
        id: `gen-hep-${Date.now()}`,
        category: "IV Pump (mL/hr)",
        order: `Heparin sodium ${unitsPerHour.toLocaleString()} units/hr IV continuous infusion.`,
        supply: `Heparin ${totalUnits.toLocaleString()} units in ${bagVolume} mL D5W.`,
        question: "Calculate the electronic infusion pump flow rate in mL/hr (round to tenth if needed):",
        unit: "mL/hr",
        correctAnswer: rate,
        tolerance: 0.1,
        formula: "Rate (mL/hr) = Desired Units/hr ÷ Concentration (Units/mL)",
        steps: [
          `Desired infusion rate: ${unitsPerHour.toLocaleString()} units/hr.`,
          `Supply concentration: ${totalUnits.toLocaleString()} units ÷ ${bagVolume} mL = ${concentration} units/mL.`,
          `Calculation: ${unitsPerHour} ÷ ${concentration} = ${rate} mL/hr.`
        ],
        clinicalTip: "Always verify therapeutic aPTT or Anti-Xa levels every 6 hours when titrating Heparin infusions."
      };
    } else {
      // General IV fluid
      const volume = getRandomInt(5, 15) * 100; // 500 to 1500 mL
      const hours = [4, 6, 8, 10, 12, 24][getRandomInt(0, 5)];
      const rate = roundTo(volume / hours, 1);

      return {
        id: `gen-iv-${Date.now()}`,
        category: "IV Pump (mL/hr)",
        order: `Infuse ${volume} mL 0.9% Normal Saline IV over ${hours} hours.`,
        supply: `Normal Saline ${volume} mL IV infusion bag.`,
        question: `Calculate the IV pump rate in mL/hr (round to nearest tenth):`,
        unit: "mL/hr",
        correctAnswer: rate,
        tolerance: 0.1,
        formula: "Rate (mL/hr) = Total Volume (mL) ÷ Time (hr)",
        steps: [
          `Total prescribed volume: ${volume} mL.`,
          `Prescribed infusion duration: ${hours} hours.`,
          `Calculation: ${volume} ÷ ${hours} = ${rate} mL/hr.`
        ],
        clinicalTip: "Assess client lung sounds and peripheral edema before and during rapid crystalloid infusions."
      };
    }
  } else if (cat === "Gravity Drip (gtt/min)") {
    const volume = [250, 500, 1000][getRandomInt(0, 2)];
    const hours = [2, 4, 6, 8][getRandomInt(0, 3)];
    const dropFactor = [10, 15, 20, 60][getRandomInt(0, 3)];
    const totalMinutes = hours * 60;
    const rate = Math.round((volume * dropFactor) / totalMinutes);

    return {
      id: `gen-grav-${Date.now()}`,
      category: "Gravity Drip (gtt/min)",
      order: `Infuse ${volume} mL Lactated Ringer's IV over ${hours} hours via gravity drip tubing.`,
      supply: `Drop factor calibration: ${dropFactor} gtt/mL.`,
      question: "Calculate the gravity infusion rate in drops per minute (gtt/min). Round to nearest whole drop:",
      unit: "gtt/min",
      correctAnswer: rate,
      tolerance: 0.5,
      formula: "gtt/min = (Volume in mL × Drop Factor) ÷ Time in minutes",
      steps: [
        `Convert hours to minutes: ${hours} hr × 60 min = ${totalMinutes} minutes.`,
        `Calculate total drops: ${volume} mL × ${dropFactor} gtt/mL = ${(volume * dropFactor).toLocaleString()} drops.`,
        `Divide drops by minutes: ${(volume * dropFactor).toLocaleString()} ÷ ${totalMinutes} = ${roundTo((volume * dropFactor) / totalMinutes, 2)} gtt/min.`,
        `Round to nearest whole integer: ${rate} gtt/min.`
      ],
      clinicalTip: "Never leave drops as decimals on gravity lines because drops cannot be split in half."
    };
  } else if (cat === "Weight-Based (mcg/kg/min)") {
    const weight = getRandomInt(50, 95); // kg
    const mcgPerKg = getRandomInt(3, 10); // 3 to 10 mcg/kg/min
    const drug = "Dopamine";
    const totalMg = 400; // 400 mg
    const volume = 250; // mL
    const totalMcg = totalMg * 1000; // 400,000 mcg
    const concentration = totalMcg / volume; // 1,600 mcg/mL

    const dosePerMin = mcgPerKg * weight; // mcg/min
    const dosePerHr = dosePerMin * 60; // mcg/hr
    const rate = roundTo(dosePerHr / concentration, 1);

    return {
      id: `gen-wt-${Date.now()}`,
      category: "Weight-Based (mcg/kg/min)",
      order: `${drug} IV infusion at ${mcgPerKg} mcg/kg/min for an adult client weighing ${weight} kg.`,
      supply: `${drug} ${totalMg} mg in ${volume} mL D5W.`,
      question: "Calculate the infusion pump rate in mL/hr (round to nearest tenth):",
      unit: "mL/hr",
      correctAnswer: rate,
      tolerance: 0.1,
      formula: "mL/hr = (mcg/kg/min × Weight in kg × 60 min) ÷ Concentration (mcg/mL)",
      steps: [
        `Dose per minute: ${mcgPerKg} mcg × ${weight} kg = ${dosePerMin} mcg/min.`,
        `Dose per hour: ${dosePerMin} mcg/min × 60 min = ${dosePerHr.toLocaleString()} mcg/hr.`,
        `Supply concentration: ${totalMg} mg (${totalMcg.toLocaleString()} mcg) ÷ ${volume} mL = ${concentration} mcg/mL.`,
        `Calculate pump rate: ${dosePerHr.toLocaleString()} ÷ ${concentration} = ${rate} mL/hr.`
      ],
      clinicalTip: "Vasopressors require continuous arterial line or automated blood pressure monitoring every 5 to 15 minutes."
    };
  } else {
    // Oral / Liquid Pediatric
    const weight = getRandomInt(12, 28); // kg
    const mgPerKg = [10, 15, 20, 25][getRandomInt(0, 3)];
    const singleDoseMg = weight * mgPerKg;
    const supplyMg = 250;
    const supplyMl = 5;
    const volumeAdmin = roundTo((singleDoseMg / supplyMg) * supplyMl, 1);

    return {
      id: `gen-ped-${Date.now()}`,
      category: "Oral / Liquid",
      order: `Amoxicillin oral suspension ${mgPerKg} mg/kg per dose PO every 8 hours for a child weighing ${weight} kg.`,
      supply: `Amoxicillin suspension labeled ${supplyMg} mg / ${supplyMl} mL.`,
      question: "Calculate how many mL the nurse should administer per dose (round to nearest tenth):",
      unit: "mL",
      correctAnswer: volumeAdmin,
      tolerance: 0.1,
      formula: "mL = (Weight in kg × Dose in mg/kg ÷ Available mg) × Available mL",
      steps: [
        `Calculate total mg required: ${weight} kg × ${mgPerKg} mg/kg = ${singleDoseMg} mg per dose.`,
        `Supply ratio: ${supplyMg} mg per ${supplyMl} mL (concentration = ${supplyMg / supplyMl} mg/mL).`,
        `Calculate volume: ${singleDoseMg} mg ÷ ${supplyMg / supplyMl} mg/mL = ${volumeAdmin} mL.`
      ],
      clinicalTip: "For pediatric patients under 5 years of age, never use medicine cups or household spoons; use a calibrated oral syringe."
    };
  }
}
