"use client";

import { useEffect, useRef } from "react";

export interface GamAdSlotProps {
  /** The div ID for the ad slot */
  slotId: string;
  /** The GAM ad unit path (defaults to /23289090478/display) */
  adUnitPath?: string;
  /** Size definitions */
  sizes?: (string | number[])[];
  /** Minimum height container style (default 250px for CLS prevention) */
  minHeight?: string;
  /** Optional container class names */
  className?: string;
  /** Label to show subtle advertisement indicator */
  showLabel?: boolean;
}

const DEFAULT_SIZES = ["fluid", [300, 250], [336, 280], [250, 250]];

export function GamAdSlot({
  slotId,
  adUnitPath = "/23289090478/display",
  sizes = DEFAULT_SIZES,
  minHeight = "250px",
  className = "",
  showLabel = true,
}: GamAdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    win.googletag = win.googletag || { cmd: [] };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let slotObj: any = null;

    win.googletag.cmd.push(() => {
      if (!win.googletag) return;

      try {
        slotObj = win.googletag.defineSlot(adUnitPath, sizes, slotId);
        if (slotObj && typeof slotObj.addService === "function") {
          slotObj.addService(win.googletag.pubads());
        }
        win.googletag.enableServices();
        win.googletag.display(slotId);
      } catch (err) {
        console.warn("GAM AdSlot error:", err);
      }
    });

    return () => {
      if (win.googletag && slotObj) {
        win.googletag.cmd.push(() => {
          try {
            win.googletag?.destroySlots([slotObj]);
          } catch {
            // ignore cleanup errors
          }
        });
      }
    };
  }, [slotId, adUnitPath, sizes]);

  return (
    <div
      className={`my-8 flex flex-col items-center justify-center w-full overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {showLabel && (
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50 mb-1 font-sans select-none">
          ADVERTISEMENT
        </span>
      )}
      <div
        id={slotId}
        ref={containerRef}
        className="flex items-center justify-center min-w-[250px] min-h-[250px] transition-all"
        style={{ minWidth: "250px", minHeight }}
      />
    </div>
  );
}
