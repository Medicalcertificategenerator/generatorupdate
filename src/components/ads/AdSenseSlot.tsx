"use client";

import { useEffect, useRef } from "react";

interface AdSenseSlotProps {
  slot: string;
  format?: "auto" | "autorelaxed" | "fluid" | "rectangle";
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AdSenseSlot({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style,
}: AdSenseSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    pushedRef.current = false;
  }, [slot]);

  useEffect(() => {
    if (!slot) return;

    let timeoutId: NodeJS.Timeout;

    const pushAd = () => {
      if (pushedRef.current) return;

      const container = containerRef.current;
      if (!container) return;

      const ins = container.querySelector("ins.adsbygoogle");
      if (!ins) return;

      // Check if AdSense script has already initialized this <ins> element
      const status = ins.getAttribute("data-adsbygoogle-status") || ins.getAttribute("data-ad-status");
      if (status) {
        pushedRef.current = true;
        return;
      }

      try {
        if (typeof window !== "undefined") {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      } catch (err) {
        console.error("[AdSense] push error:", err);
      }
    };

    // Small delay + animation frame ensures container layout & width (> 0) are computed
    timeoutId = setTimeout(() => {
      requestAnimationFrame(pushAd);
    }, 150);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [slot]);

  return (
    <div
      ref={containerRef}
      className={`w-full flex justify-center items-center my-6 overflow-hidden min-h-[90px] ${className}`}
    >
      <ins
        key={slot}
        className="adsbygoogle"
        style={style || { display: "block", width: "100%", textAlign: "center" }}
        data-ad-client="ca-pub-6410539899255473"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}

