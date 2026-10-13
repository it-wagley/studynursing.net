import React from "react";
import { AlertCircle } from "lucide-react";

interface CautionPanelProps {
  title?: string;
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  id?: string;
}

/**
 * CautionPanel
 *
 * RESERVED for time-sensitive, caveated, or consumer-protection content:
 * - Review date notices
 * - Requirements change notices
 * - The "This page does not assess you" panel
 * - Route caveats (e.g. New Zealand to Australia scrutiny)
 *
 * Never use for marketing, promotions, or general emphasis.
 * See docs/design-system.md §2 and §5.
 */
export const CautionPanel: React.FC<CautionPanelProps> = ({
  title,
  children,
  icon = true,
  className = "",
  id,
}) => {
  return (
    <aside
      id={id}
      role="note"
      aria-label={title || "Important notice"}
      className={`rounded-lg bg-caution-wash border border-caution/25 p-5 sm:p-6 text-caution-body ${className}`}
    >
      <div className="flex items-start gap-3.5">
        {icon && (
          <AlertCircle
            className="w-5 h-5 text-caution shrink-0 mt-0.5"
            aria-hidden="true"
          />
        )}
        <div className="space-y-1.5 flex-1 min-w-0">
          {title && (
            <h3 className="font-serif text-heading-sm text-caution-text font-semibold tracking-tight">
              {title}
            </h3>
          )}
          <div className="text-body-sm leading-body text-caution-body space-y-2">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
};
