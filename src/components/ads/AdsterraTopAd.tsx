"use client";

import { AdsterraBanner } from "./AdsterraBanner";

export interface AdsterraTopAdProps {
  placementId?: string;
  className?: string;
  showLabel?: boolean;
}

export function AdsterraTopAd({
  placementId = "universal_top_ad",
  className = "",
  showLabel = true,
}: AdsterraTopAdProps) {
  return (
    <div
      data-placement-id={placementId}
      className={`w-full flex flex-col items-center justify-center pt-3 pb-1 px-4 max-w-7xl mx-auto ${className}`}
    >
      <AdsterraBanner
        unit="responsive-hero"
        placementId={placementId}
        showLabel={showLabel}
        className="my-2 md:my-3"
      />
    </div>
  );
}
