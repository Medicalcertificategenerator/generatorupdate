"use client";

import { useEffect, useRef } from "react";

export interface GamAdSlotProps {
  /**
   * The exact div ID that GAM will target – must be unique across every slot
   * currently rendered in the DOM. Use per-page suffixes (e.g. "…-home1",
   * "…-blog2") so navigating between pages never leaves a stale slot with the
   * same ID alive at the same time as the new slot.
   */
  divId: string;
  /** GAM ad unit path. Defaults to the display unit. */
  adUnitPath?: string;
  /**
   * Size mapping passed to googletag.defineSlot.
   * Accepts an array of [width, height] pairs or the string "fluid".
   * Default covers the most common IAB display sizes.
   */
  sizes?: GamSize;
  /** Reserve vertical space before the ad loads to eliminate CLS. */
  minHeight?: number;
  /** Optional extra Tailwind / CSS classes on the outer wrapper. */
  className?: string;
  /** Show a small "ADVERTISEMENT" label above the ad. */
  showLabel?: boolean;
}

/**
 * GAM size definition: an array of [w, h] pairs and/or "fluid" strings,
 * matching the shape googletag.defineSlot expects.
 */
type GamSize = ([number, number] | "fluid")[];

// Declare the global googletag namespace so TypeScript is happy.
// The actual object is injected by the GPT script loaded in layout.tsx.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window { googletag: any; }
}

const DEFAULT_SIZES: GamSize = [
  [728, 90],
  [300, 250],
  [336, 280],
  [250, 250],
  "fluid",
];

export function GamAdSlot({
  divId,
  adUnitPath = "/23289090478/display",
  sizes = DEFAULT_SIZES,
  minHeight = 280,
  className = "",
  showLabel = true,
}: GamAdSlotProps) {
  // Keep a ref to the slot so we can destroy only this slot on unmount.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slotRef = useRef<any>(null);

  useEffect(() => {
    // googletag.cmd is a queue — safe to push even before gpt.js has loaded.
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      try {
        // defineSlot returns null if the div doesn't exist in the DOM yet or
        // if a slot with this ID has already been defined (navigation race).
        // Guard both cases.
        const slot = window.googletag.defineSlot(adUnitPath, sizes, divId);
        if (!slot) return;

        slot.addService(window.googletag.pubads());
        slotRef.current = slot;

        // display() tells GPT to fetch and render this specific slot.
        // enableServices() is called once globally in the layout init script;
        // calling it again here is a no-op after the first call, but we still
        // guard it so isolated testing doesn't break.
        window.googletag.display(divId);
      } catch (err) {
        console.warn("[GamAdSlot] defineSlot error for", divId, err);
      }
    });

    return () => {
      // Destroy only this slot so other slots on the page are unaffected.
      window.googletag?.cmd?.push(() => {
        try {
          if (slotRef.current) {
            window.googletag.destroySlots([slotRef.current]);
            slotRef.current = null;
          }
        } catch {
          // Ignore cleanup errors (e.g. GPT already unloaded).
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divId, adUnitPath]); // sizes intentionally omitted – arrays are new refs every render

  return (
    <div
      className={`my-8 flex flex-col items-center justify-center w-full overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {showLabel && (
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/40 mb-1 font-mono select-none">
          Advertisement
        </span>
      )}
      {/*
        The id MUST exactly match divId.
        min-height is set inline (not via class) so it's present before GPT JS
        runs — this is what prevents CLS. Once GPT renders, the ad content
        fills the container naturally.
      */}
      <div
        id={divId}
        style={{
          minWidth: 250,
          minHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  );
}
