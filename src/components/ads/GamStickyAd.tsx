"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * GamStickyAd — Bottom-docked sticky/anchor ad unit.
 *
 * Uses googletag.defineOutOfPageSlot with the BOTTOM_ANCHOR format so GAM
 * handles the sticky positioning natively (the way Google requires for
 * anchor ads). This means we do NOT render our own fixed <div>; GAM injects
 * its own iframe/layer into the page.
 *
 * If the network/line-item doesn't have a bottom-anchor creative, GAM will
 * silently not render — which is fine (no layout impact).
 *
 * The dismiss button hides this React component so destroySlots() is called
 * and the GAM anchor layer is removed from the page.
 *
 * Mounted once globally in app/layout.tsx.
 */
export function GamStickyAd() {
  const [dismissed, setDismissed] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slotRef = useRef<any>(null);

  useEffect(() => {
    if (dismissed) return;

    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      try {
        const gt = window.googletag;

        // defineOutOfPageSlot with BOTTOM_ANCHOR is how GAM anchor ads work.
        // It returns null when the format is not supported (e.g. on amp pages
        // or in environments where anchor ads are not allowed) — guard that.
        const slot = gt.defineOutOfPageSlot(
          "/23289090478/sticky",
          gt.enums.OutOfPageFormat.BOTTOM_ANCHOR
        );

        if (!slot) {
          // Anchor format not supported in this context — bail silently.
          return;
        }

        slot.addService(gt.pubads());
        slotRef.current = slot;
        gt.display(slot);

        // disableInitialLoad() is set globally in layout.tsx, so display()
        // alone will NOT fetch a creative — we must explicitly refresh().
        gt.pubads().refresh([slot]);
      } catch (err) {
        console.warn("[GamStickyAd] Error defining anchor slot:", err);
      }
    });

    return () => {
      window.googletag?.cmd?.push(() => {
        try {
          if (slotRef.current) {
            window.googletag.destroySlots([slotRef.current]);
            slotRef.current = null;
          }
        } catch {
          // Ignore cleanup errors.
        }
      });
    };
  }, [dismissed]);

  if (dismissed) return null;

  /**
   * We render a minimal dismiss button above the GAM-injected anchor layer.
   * GAM's BOTTOM_ANCHOR already positions itself at the bottom — we just need
   * a dismiss control overlaid on top of it so users can close it.
   *
   * z-index is 39 (below modals at 50+, above normal content).
   */
  return (
    <button
      onClick={() => setDismissed(true)}
      aria-label="Close sticky advertisement"
      title="Close advertisement"
      style={{
        position: "fixed",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 56px)",
        right: 12,
        zIndex: 39,
        background: "hsl(var(--background) / 0.9)",
        border: "1px solid hsl(var(--border))",
        borderRadius: "50%",
        width: 28,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backdropFilter: "blur(4px)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <X style={{ width: 14, height: 14 }} />
    </button>
  );
}
