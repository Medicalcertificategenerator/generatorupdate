"use client";

import { usePathname } from "next/navigation";

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

  if (EXCLUDED_ROUTES.has(pathname)) {
    return null;
  }

  return null;
}
