import React from "react";
import { ClientApp } from "@/components/ClientApp";

/**
 * Only the routes listed in generateStaticParams() exist.
 *
 * Without this, Next renders ANY path through this catch-all, so
 * /register/germany and /this-does-not-exist both returned HTTP 200 with the
 * homepage. That is an unbounded set of duplicate pages for a site whose
 * strategy is organic search, and a visitor who mistypes a URL is told
 * nothing is wrong. Unknown paths now return a real 404.
 */
export const dynamicParams = false;

interface PageProps {
  params?: {
    slug?: string[];
  };
}

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["compare"] },
    { slug: ["exams"] },
    { slug: ["exams", "nclex-rn"] },
    { slug: ["exams", "osce"] },
    { slug: ["exams", "english"] },
    { slug: ["register"] },
    { slug: ["register", "australia"] },
    { slug: ["register", "australia", "pathways"] },
    { slug: ["register", "united-kingdom"] },
    { slug: ["register", "new-zealand"] },
    { slug: ["register", "singapore"] },
    { slug: ["register", "canada"] },
    { slug: ["register", "ireland"] },
    { slug: ["register", "united-states"] },
    { slug: ["gulf"] },
    { slug: ["gulf", "the-work"] },
    { slug: ["gulf", "contracts"] },
    { slug: ["gulf", "money"] },
    { slug: ["gulf", "adjusting"] },
    { slug: ["gulf", "your-next-move"] },
    { slug: ["tools"] },
    { slug: ["tools", "dosage"] },
    { slug: ["tools", "nclex-cases"] },
    { slug: ["tools", "drug-names"] },
    { slug: ["tools", "clinical-reference"] },
    { slug: ["tools", "tutor"] },
    { slug: ["about"] },
    { slug: ["sources"] },
    { slug: ["advisers"] },
    { slug: ["study"] },
    { slug: ["stories"] },
  ];
}

export default function CatchAllPage({ params }: PageProps) {
  const initialPath = params?.slug && params.slug.length > 0
    ? `/${params.slug.join("/")}`
    : "/";

  return <ClientApp initialPath={initialPath} />;
}
