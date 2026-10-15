import { NextResponse } from "next/server";
import { searchTutorKnowledge, checkRefusal } from "@/data/tutorKnowledge";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // Tier 1: Strict Regulatory & Immigration Refusal Filter (editorial-boundaries.md §5)
    const refusal = checkRefusal(message);
    if (refusal) {
      return NextResponse.json({
        source: "editorial_refusal_boundary",
        cost: "$0.00",
        response: refusal
      });
    }

    // Tier 2: Check Pre-Approved Study & Exam Preparation Corpus
    const localMatch = searchTutorKnowledge(message);
    if (localMatch) {
      return NextResponse.json({
        source: "grounded_study_corpus",
        cost: "$0.00",
        response: localMatch
      });
    }

    // Tier 3: General Clinical Study & Exam Preparation Reasoning
    const defaultResponse = `
### Academic Clinical Study Analysis:
Thank you for your study question on **"${message}"**.

* **Core Nursing Safety Principle:** Always prioritize **Airway, Breathing, and Circulation (ABCs)** followed by patient safety, infection prevention, and least-invasive interventions.
* **International Exam Strategy:** When preparing for Commonwealth exams (Australia / UK / NZ) vs the US NCLEX, note whether drug names follow Commonwealth nomenclature (e.g., Paracetamol, Adrenaline) or US FDA names (e.g., Acetaminophen, Epinephrine).
* **NextGen NCLEX Framework:** Align with the Clinical Judgment Measurement Model (CJMM)—carefully recognize vital sign and laboratory cues before selecting an action.

*Notice: Florence is a study and exam tutor only. Content is designed strictly for examination preparation and academic study. It does not constitute clinical advice for real patients or regulatory guidance.*
    `.trim();

    return NextResponse.json({
      source: "academic_study_engine",
      cost: "$0.00",
      response: defaultResponse
    });
  } catch (error) {
    console.error("Tutor API error:", error);
    return NextResponse.json({ error: "Failed to process tutor query." }, { status: 500 });
  }
}
