import { NextResponse } from "next/server";
import { NursePassportData, calculateNRI, SAMPLE_CANDIDATE_POOL, CandidateCard } from "@/data/passportModel";

const registeredPassports: Array<{
  data: NursePassportData;
  nri: ReturnType<typeof calculateNRI>;
  createdAt: string;
}> = [];

export async function POST(req: Request) {
  try {
    const data: NursePassportData = await req.json();

    if (!data.fullName || !data.email || !data.originCountry || !data.targetCountry) {
      return NextResponse.json(
        { error: "Required fields missing (Full name, email, origin, target destination)." },
        { status: 400 }
      );
    }

    const nriResult = calculateNRI(data);
    const candidateCode = `SN-${data.originCountry.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    registeredPassports.push({
      data,
      nri: nriResult,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      candidateCode,
      nri: nriResult,
      passport: {
        candidateCode,
        fullName: data.fullName,
        originCountry: data.originCountry,
        currentLocation: data.currentLocation,
        targetCountry: data.targetCountry,
        educationLevel: data.educationLevel,
        clinicalSpecialty: data.clinicalSpecialty,
        yearsExperience: data.yearsExperience,
        nriScore: nriResult.totalScore,
        tier: nriResult.tier
      }
    });
  } catch (error) {
    console.error("Passport API error:", error);
    return NextResponse.json({ error: "Failed to generate Nurse Passport." }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const targetCountry = searchParams.get("targetCountry");
  const specialty = searchParams.get("specialty");

  let candidates: CandidateCard[] = [...SAMPLE_CANDIDATE_POOL];

  if (targetCountry && targetCountry !== "All") {
    candidates = candidates.filter((c) => c.targetCountry === targetCountry);
  }

  if (specialty && specialty !== "All") {
    candidates = candidates.filter((c) => c.specialty === specialty);
  }

  return NextResponse.json({
    totalLiveCandidates: candidates.length + registeredPassports.length,
    candidates
  });
}
