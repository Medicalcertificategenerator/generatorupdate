"use client";

import { useEffect, useRef } from "react";

/**
 * GamInterstitialAd — Full-page interstitial ad unit.
 *
 * IMPORTANT — how GAM interstitials actually work:
 * ──────────────────────────────────────────────────
 * This uses googletag.defineOutOfPageSlot with OutOfPageFormat.INTERSTITIAL,
 * NOT googletag.defineSlot([1024,768],...). The [1024,768] approach would
 * create a standard display slot of that pixel size — it would never trigger
 * as a true full-page interstitial.
 *
 * With defineOutOfPageSlot + INTERSTITIAL, GAM controls *when* the
 * interstitial fires — typically on page navigation events or back-button
 * press — based on Google's Better Ads Standards and your line item settings.
 * The component does NOT manually trigger it on every mount/route change;
 * that is entirely managed by the GPT library after the slot is registered.
 *
 * Frequency capping is enforced by GAM's own rules (not by this component).
 * GAM will not show the interstitial more than once per session by default
 * unless your line item overrides that.
 *
 * What this component does:
 *  1. Registers the out-of-page slot on mount.
 *  2. Calls googletag.display() to signal readiness — GAM decides if/when
 *     to actually show the ad.
 *  3. Destroys the slot on unmount.
 *
 * Mounted once globally in app/layout.tsx.
 */
export function GamInterstitialAd() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slotRef = useRef<any>(null);

  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      try {
        const gt = window.googletag;

        // defineOutOfPageSlot returns null when the format is not supported
        // in the current context (e.g. AMP, Chrome's intrusive-ad blocker
        // heuristic, or no interstitial creative eligible). Guard it.
        const slot = gt.defineOutOfPageSlot(
          "/23289090478/interstial", // Note: typo in the original ad unit name kept intentionally
          gt.enums.OutOfPageFormat.INTERSTITIAL
        );

        if (!slot) return;

        slot.addService(gt.pubads());
        slotRef.current = slot;

        // Calling display() here registers the slot for future eligibility
        // checks. GAM decides when (and if) to actually show it.
        gt.display(slot);
      } catch (err) {
        console.warn("[GamInterstitialAd] Error defining interstitial slot:", err);
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
  }, []);

  // Out-of-page slots do not need a target div in the DOM.
  // GAM injects its own overlay/iframe layer directly into <body>.
  return null;
}
