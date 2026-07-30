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
    if (pushedRef.current) return;

    try {
      if (typeof window !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch (err) {
      console.error("[AdSense] push error:", err);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full flex justify-center items-center my-6 overflow-hidden min-h-[90px] ${className}`}
    >
      <ins
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
