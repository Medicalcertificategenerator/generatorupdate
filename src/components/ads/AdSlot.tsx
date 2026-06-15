"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  /** AdSense publisher ID, e.g. "ca-pub-XXXXXXXXXXXXXXXX" */
  adClient: string;
  /** AdSense ad slot ID, e.g. "1234567890" */
  adSlot: string;
  format?: "auto" | "fluid";
  layout?: "in-article" | "autorelaxed";
  fullWidthResponsive?: boolean;
  className?: string;
}

export function AdSlot({
  adClient,
  adSlot,
  format = "auto",
  layout,
  fullWidthResponsive = true,
  className = "",
}: AdSlotProps) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      // @ts-expect-error - adsbygoogle is injected by the AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (e) {
      // AdSense script may not be loaded yet (e.g. ad blocker) — fail silently
    }
  }, []);

  return (
    <div className={`ad-slot my-6 md:my-10 flex flex-col items-center ${className}`}>
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50 mb-1">
        Advertisement
      </span>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={adClient}
        data-ad-format={layout ? "fluid" : format}
        data-ad-layout={layout}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
        data-ad-slot={adSlot}
      />
    </div>
  );
}
