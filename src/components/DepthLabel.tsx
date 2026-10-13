import React from "react";

export type DepthTier = "full" | "standard" | "overview";

interface DepthLabelProps {
  tier: DepthTier;
  className?: string;
}

export const DepthLabel: React.FC<DepthLabelProps> = ({ tier, className = "" }) => {
  if (tier === "full") {
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-sm text-label font-bold uppercase tracking-label bg-accent-wash text-accent-dark ${className}`}
        title="Fully reviewed against primary official sources by a named registered nurse"
      >
        Fully reviewed
      </span>
    );
  }

  if (tier === "standard") {
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-sm text-label font-bold uppercase tracking-label bg-paper-alt text-ink-70 border border-line ${className}`}
        title="Reviewed against primary official sources"
      >
        Reviewed
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-sm text-label font-bold uppercase tracking-label bg-caution-wash text-caution-text border border-caution/20 ${className}`}
      title="High-level orientation only. Verify with official primary sources."
    >
      Overview only
    </span>
  );
};
