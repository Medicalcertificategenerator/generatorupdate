"use client";

import { useEffect } from "react";

export function GamInterstitialAd() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    win.googletag = win.googletag || { cmd: [] };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let slotObj: any = null;

    win.googletag.cmd.push(() => {
      if (!win.googletag) return;

      try {
        slotObj = win.googletag.defineSlot(
          "/23289090478/interstial",
          [1024, 768],
          "div-gpt-ad-1785161137413-0"
        );

        if (slotObj && typeof slotObj.addService === "function") {
          slotObj.addService(win.googletag.pubads());
        }
        win.googletag.pubads().enableSingleRequest();
        win.googletag.enableServices();
        win.googletag.display("div-gpt-ad-1785161137413-0");
      } catch (err) {
        console.warn("GAM InterstitialAd error:", err);
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
  }, []);

  return (
    <div
      id="div-gpt-ad-1785161137413-0"
      className="hidden"
      aria-hidden="true"
      style={{ minWidth: "1024px", minHeight: "768px", display: "none" }}
    />
  );
}
