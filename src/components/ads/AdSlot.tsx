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
    /* Outer wrapper: full width, vertically spaced */
    <div className={`ad-slot-wrapper w-full my-6 md:my-10 ${className}`}>
      {/* Inner container: centred, max-width matches site content column */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <span
          style={{
            display: "block",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            opacity: 0.45,
            marginBottom: "4px",
            textAlign: "center",
          }}
        >
          Advertisement
        </span>

        {/* AdSense unit — display:block + text-align:center is the canonical
            AdSense recommendation for responsive centred ads */}
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{
            display: "block",
            textAlign: "center",
            width: "100%",
            minWidth: 0,
          }}
          data-ad-client={adClient}
          data-ad-format={layout ? "fluid" : format}
          data-ad-layout={layout}
          data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
          data-ad-slot={adSlot}
        />
      </div>
    </div>
  );
}
