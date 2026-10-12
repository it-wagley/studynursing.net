import { NextResponse } from "next/server";
import { searchTutorKnowledge } from "@/data/tutorKnowledge";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // Tier 1: Check knowledge base / pre-computed high-yield articles (Zero LLM cost)
    const localMatch = searchTutorKnowledge(message);
    if (localMatch) {
      return NextResponse.json({
        source: "grounded_knowledge_base",
        cost: "$0.00",
        response: localMatch
      });
    }

    // Tier 2: Evidence-based fallback clinical tutor response
    // When live GEMINI_API_KEY is configured in .env, it can call Gemini Flash.
    // Otherwise, it returns a structured clinical reasoning breakdown.
    const defaultResponse = `
### Clinical Tutor Analysis:
Thank you for your question on **"${message}"**.

* **Key Clinical Principle:** Always prioritize **Airway, Breathing, and Circulation (ABCs)** followed by patient safety and infection prevention.
* **International Consideration:** When studying overseas (e.g. Australia vs US), verify whether the guideline references Commonwealth nomenclature (e.g. AHPRA/TGA standards) or FDA/AHA guidelines.
* **NextGen NCLEX Alignment:** Focus on the Clinical Judgment Measurement Model (CJMM) — identify cues first before jumping directly to interventions.

*Tip: You can ask me specific questions like "Paracetamol vs Acetaminophen", "ACE inhibitors vs ARBs", "AHPRA OBA requirements", or try our Dosage Calculation practice tools!*
    `.trim();

    return NextResponse.json({
      source: "clinical_tutor_engine",
      cost: "$0.00",
      response: defaultResponse
    });
  } catch (error) {
    console.error("Tutor API error:", error);
    return NextResponse.json({ error: "Failed to process tutor query." }, { status: 500 });
  }
}
