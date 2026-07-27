"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function GamStickyAd() {
  const [isVisible, setIsVisible] = useState(true);

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
          "/23289090478/sticky",
          [
            [320, 100],
            [300, 100],
            [300, 50],
            [320, 50],
          ],
          "div-gpt-ad-1785160866108-0"
        );

        if (slotObj && typeof slotObj.addService === "function") {
          slotObj.addService(win.googletag.pubads());
        }
        win.googletag.pubads().enableSingleRequest();
        win.googletag.enableServices();
        win.googletag.display("div-gpt-ad-1785160866108-0");
      } catch (err) {
        console.warn("GAM StickyAd error:", err);
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center justify-center pointer-events-none pb-1 sm:pb-2">
      <div className="pointer-events-auto relative flex flex-col items-center bg-background/95 backdrop-blur-md border border-border/80 rounded-t-xl shadow-2xl px-3 py-1.5 max-w-[340px] sm:max-w-[400px]">
        <div className="w-full flex items-center justify-between gap-2 mb-1 border-b border-border/40 pb-0.5 px-1">
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-mono font-medium">
            ADVERTISEMENT
          </span>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close advertisement"
            className="text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-full p-0.5 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        <div
          id="div-gpt-ad-1785160866108-0"
          className="flex items-center justify-center min-w-[300px] min-h-[50px] overflow-hidden"
          style={{ minWidth: "300px", minHeight: "50px" }}
        />
      </div>
    </div>
  );
}
