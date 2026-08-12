"use client";

import { AdsterraBanner, AdsterraUnit } from "./AdsterraBanner";

export interface ContentAdBreakProps {
  unit?: AdsterraUnit;
  placementId?: string;
  className?: string;
  showLabel?: boolean;
}

export function ContentAdBreak({
  unit = "300x250",
  placementId,
  className = "",
  showLabel = true,
}: ContentAdBreakProps) {
  return (
    <div
      data-placement-id={placementId}
      className={`my-8 md:my-10 max-w-4xl mx-auto px-4 ${className}`}
    >
      <AdsterraBanner
        unit={unit}
        placementId={placementId}
        showLabel={showLabel}
      />
    </div>
  );
}
