"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GamStickyAd } from "@/components/ads/GamStickyAd";
import { GamInterstitialAd } from "@/components/ads/GamInterstitialAd";

const EXCLUDED_ROUTES = new Set([
  "/privacy-policy",
  "/privacy-policy/",
  "/terms",
  "/terms/",
  "/dmca",
  "/dmca/",
  "/editorial-guidelines",
  "/editorial-guidelines/",
  "/contact",
  "/contact/",
  "/about",
  "/about/",
  "/author",
  "/author/",
  "/search",
  "/search/",
]);

export function AdManager() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Notify GPT of virtual pageview / URL change for GAM targeting on SPA navigation
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (EXCLUDED_ROUTES.has(pathname)) return;

    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(() => {
      if (window.googletag?.pubads) {
        // Set page_url targeting so AdX / Ad Manager knows the new virtual route
        window.googletag.pubads().setTargeting("page_url", window.location.pathname);
      }
    });
  }, [pathname]);

  if (EXCLUDED_ROUTES.has(pathname)) {
    return null;
  }

  return (
    <>
      <GamStickyAd key={`sticky-${pathname}`} />
      <GamInterstitialAd key={`interstitial-${pathname}`} />
    </>
  );
}
