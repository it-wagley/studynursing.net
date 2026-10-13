import React from "react";

export const UtilityBar: React.FC = () => {
  return (
    <div
      role="banner"
      aria-label="Publisher status notice"
      className="bg-paper-alt border-b border-line text-meta-sm text-ink-70 py-2 px-4 text-center font-normal tracking-tight"
    >
      <div className="max-w-container mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="font-medium text-ink">
          Independent information for internationally qualified nurses
        </span>
        <span className="hidden sm:inline text-line-strong" aria-hidden="true">
          ·
        </span>
        <span className="text-ink-60">
          We are not a migration agent, a recruiter, or an employer.
        </span>
      </div>
    </div>
  );
};
