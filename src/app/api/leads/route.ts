import { NextResponse } from "next/server";

export interface LeadSubmission {
  fullName: string;
  email: string;
  phone?: string;
  currentQualification: string;
  targetDestination: string;
  intakeYear?: string;
}

// In-memory or database store for leads
const leadsStore: LeadSubmission[] = [];

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.fullName || !data.email || !data.targetDestination) {
      return NextResponse.json(
        { error: "Full name, email, and target destination are required." },
        { status: 400 }
      );
    }

    leadsStore.push({
      ...data,
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully. Custom pathway guide sent.",
      downloadUrl: "/guides/StudyNursing_Overseas_Roadmap_2026.pdf"
    });
  } catch (error) {
    console.error("Leads API error:", error);
    return NextResponse.json({ error: "Failed to record lead." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ count: leadsStore.length, leads: leadsStore });
}
