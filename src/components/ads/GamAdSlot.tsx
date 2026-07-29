"use client";

import { useEffect, useRef, useState } from "react";

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

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window { googletag: any; }
}

// ---------------------------------------------------------------------------
// Global microtask batch refresh queue.
// Aggregates multiple React slots mounting within 50ms into a single SRA
// googletag.pubads().refresh([...]) call.
// IMPORTANT: We track slot IDs so that destroyed slots can be removed before
// the timer fires — preventing refresh() on a destroyed slot which causes
// isEmpty=true and collapses the container.
// ---------------------------------------------------------------------------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const refreshQueue = new Map<string, any>(); // divId → slot
let refreshTimer: ReturnType<typeof setTimeout> | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function queueSlotForRefresh(divId: string, slot: any) {
  refreshQueue.set(divId, slot);
  if (refreshTimer) clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    flushRefreshQueue();
  }, 50);
}

function flushRefreshQueue(retryCount = 0) {
  if (refreshQueue.size === 0) return;

  if (!window.googletag?.pubads) {
    // gpt.js not ready yet — retry shortly instead of silently dropping.
    if (retryCount < 5) {
      setTimeout(() => flushRefreshQueue(retryCount + 1), 100);
    } else {
      console.warn("[GamAdSlot] googletag.pubads never became ready — dropping queued refresh.");
      refreshQueue.clear();
    }
    return;
  }

  const slotsToRefresh = [...refreshQueue.values()];
  refreshQueue.clear();
  try {
    window.googletag.pubads().refresh(slotsToRefresh);
  } catch (err) {
    console.warn("[GamAdSlot] Batch refresh error:", err);
  }
}

function removeFromRefreshQueue(divId: string) {
  refreshQueue.delete(divId);
}

export function GamAdSlot({
  divId,
  adUnitPath = "/23289090478/display",
  sizes,
  minHeight = 280,
  className = "",
  showLabel = false,
}: GamAdSlotProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slotRef = useRef<any>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsEmpty(false);
    setIsRendered(false);

    window.googletag = window.googletag || { cmd: [] };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let renderListener: any = null;

    window.googletag.cmd.push(() => {
      try {
        const gt = window.googletag;
        if (!gt || !gt.defineSlot) return;

        // Responsive size mapping:
        // Desktop (>= 1024px): 728x90, 970x90, 300x250, 336x280, fluid
        // Tablet (>= 768px):   728x90, 300x250, 336x280, fluid
        // Mobile (< 768px):    300x250, 320x100, 320x50, 336x280, fluid
        const slotSizes: GamSize = sizes || [
          [728, 90],
          [970, 90],
          [300, 250],
          [336, 280],
          [320, 100],
          [320, 50],
          "fluid",
        ];

        const slot = gt.defineSlot(adUnitPath, slotSizes, divId);
        if (!slot) return;

        // Only apply the responsive breakpoint mapping when the caller is
        // using the default multi-size slot. Fixed single-size slots (the
        // new rectangle/box units) must request exactly what was configured
        // in Ad Manager at every breakpoint.
        if (!sizes) {
          const mapping = gt.sizeMapping()
            .addSize([1024, 0], [[728, 90], [970, 90], [300, 250], [336, 280], "fluid"])
            .addSize([768, 0], [[728, 90], [300, 250], [336, 280], "fluid"])
            .addSize([0, 0], [[300, 250], [320, 100], [320, 50], [336, 280], "fluid"])
            .build();
          slot.defineSizeMapping(mapping);
        }

        slot.setCollapseEmptyDiv(true, true);
        slot.addService(gt.pubads());
        slotRef.current = slot;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        renderListener = (event: any) => {
          if (event.slot === slot) {
            setIsRendered(true);
            setIsEmpty(!!event.isEmpty);
          }
        };

        gt.pubads().addEventListener("slotRenderEnded", renderListener);

        // Register div with GPT (disableInitialLoad() means this won't fetch yet)
        gt.display(divId);

        // Queue for batched SRA refresh – keyed by divId so cleanup can cancel
        queueSlotForRefresh(divId, slot);
      } catch (err) {
        console.warn("[GamAdSlot] defineSlot error for", divId, err);
      }
    });

    return () => {
      // Remove from the pending refresh queue immediately so we never call
      // refresh() on a slot that has already been destroyed.
      removeFromRefreshQueue(divId);

      window.googletag?.cmd?.push(() => {
        try {
          const gt = window.googletag;
          if (renderListener && gt?.pubads) {
            gt.pubads().removeEventListener("slotRenderEnded", renderListener);
          }
          if (slotRef.current && gt?.destroySlots) {
            gt.destroySlots([slotRef.current]);
            slotRef.current = null;
          }
        } catch {
          // Ignore cleanup errors
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divId, adUnitPath]);

  if (isEmpty) {
    return null;
  }

  return (
    <div
      className={`my-6 md:my-8 flex flex-col items-center justify-center w-full overflow-hidden transition-all duration-300 ${className}`}
      style={{ minHeight: isRendered ? undefined : minHeight }}
      data-ad-status={isRendered ? (isEmpty ? "no-fill" : "filled") : "pending"}
    >
      {showLabel && (
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/40 mb-1 font-mono select-none">
          Advertisement
        </span>
      )}
      <div
        id={divId}
        className="w-full flex items-center justify-center max-w-full overflow-hidden"
        style={{
          minHeight: isRendered ? undefined : minHeight,
        }}
      />
    </div>
  );
}
