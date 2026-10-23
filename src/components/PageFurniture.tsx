import React from "react";
import { DepthLabel, DepthTier } from "./DepthLabel";
import { ExternalLink, CheckCircle, Clock, AlertCircle } from "lucide-react";

export interface SourceCitation {
  label: string;
  url: string;
  checkedAt: string;
}

export interface ReviewerCredit {
  name: string;
  country: string;
  credential?: string;
}

export interface PageFurnitureData {
  tier: DepthTier;
  reviewedAt: string;
  /**
   * The registered nurse who clinically reviewed this page, or `null` when
   * no one has yet. `null` is a valid, honest state and renders as a visible
   * "Not yet clinically reviewed" marker — never leave it out, and never
   * invent a name to satisfy the validator.
   *
   * Names live in src/data/reviewers.ts so each reviewer is declared once.
   */
  reviewer: ReviewerCredit | null;
  sources: SourceCitation[];
}

interface PageFurnitureProps {
  data: PageFurnitureData;
  className?: string;
}

/**
 * Enforces the non-negotiable page furniture contract at build/render time.
 * A regulatory or guide page that cannot name its reviewer and sources fails to compile.
 * See docs/information-architecture.md §3 and docs/AGENTS.md §4.
 */
export function validatePageFurniture(data: PageFurnitureData): void {
  if (!data) {
    throw new Error("PageFurniture: Missing required metadata object.");
  }
  if (!data.tier || !["full", "standard", "overview"].includes(data.tier)) {
    throw new Error(
      `PageFurniture: Invalid or missing 'tier'. Must be 'full', 'standard', or 'overview'. Got: ${data.tier}`
    );
  }
  if (!data.reviewedAt || typeof data.reviewedAt !== "string") {
    throw new Error("PageFurniture: Missing required 'reviewedAt' date string.");
  }
  // `reviewer` must be stated, but `null` is a legitimate answer. A page with
  // no clinical reviewer may still be fully sourced; what it may NOT do is
  // claim the "Fully reviewed" tier, which asserts review by a named nurse.
  if (data.reviewer !== null) {
    if (!data.reviewer.name || !data.reviewer.country) {
      throw new Error(
        "PageFurniture: 'reviewer' must be null or an object including 'name' and 'country'."
      );
    }
  } else if (data.tier === "full") {
    throw new Error(
      "PageFurniture: tier 'full' asserts review by a named registered nurse, " +
        "but 'reviewer' is null. Use tier 'standard' until a real reviewer is attached."
    );
  }
  if (!Array.isArray(data.sources) || data.sources.length === 0) {
    throw new Error(
      "PageFurniture: Missing required primary official 'sources' array (must contain at least one source)."
    );
  }
}

export const PageFurniture: React.FC<PageFurnitureProps> = ({ data, className = "" }) => {
  validatePageFurniture(data);

  return (
    <div
      role="region"
      aria-label="Editorial and verification metadata"
      className={`border-y border-line py-3.5 my-6 flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-meta text-ink-60 ${className}`}
    >
      {/* Reviewer and Tier */}
      <div className="flex flex-wrap items-center gap-3">
        <DepthLabel tier={data.tier} />
        
        {data.reviewer ? (
          <div className="flex items-center gap-1.5 font-medium text-ink-80">
            <CheckCircle className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            <span>
              Reviewed by{" "}
              <span className="font-semibold text-ink">
                {data.reviewer.name}
              </span>
              {data.reviewer.credential ? `, ${data.reviewer.credential}` : ""} ({data.reviewer.country})
            </span>
          </div>
        ) : (
          <div
            className="flex items-center gap-1.5 font-medium text-caution-text"
            title="No registered nurse has clinically reviewed this page. Verify against the primary sources listed below."
          >
            <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Not yet clinically reviewed</span>
          </div>
        )}
      </div>

      {/* Date stamp and Source jump link */}
      <div className="flex items-center gap-4 text-meta-sm">
        <div className="flex items-center gap-1.5 tabular text-ink-60">
          <Clock className="w-3.5 h-3.5 text-ink-40" aria-hidden="true" />
          <span>
            Last reviewed:{" "}
            <time dateTime={data.reviewedAt} className="font-medium text-ink-80">
              {data.reviewedAt}
            </time>
          </span>
        </div>

        <a
          href="#sources"
          className="inline-flex items-center gap-1 text-accent hover:text-accent-dark font-medium underline underline-offset-2"
        >
          <span>{data.sources.length} primary {data.sources.length === 1 ? "source" : "sources"}</span>
          <ExternalLink className="w-3 h-3 opacity-70" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
