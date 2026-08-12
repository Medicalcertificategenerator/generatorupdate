"use client";

import { ExternalLink, Sparkles } from "lucide-react";

export const ADSTERRA_SMARTLINK_URL =
  "https://www.effectivecpmnetwork.com/nmefs3wm?key=dcda6e3c7109e9fd138b25c44e16ab13";

export interface AdsterraSmartlinkProps {
  href?: string;
  title?: string;
  description?: string;
  badge?: string;
  placementId?: string;
  className?: string;
}

export function AdsterraSmartlink({
  href = ADSTERRA_SMARTLINK_URL,
  title = "Explore Related Resources & External Offers",
  description = "Discover partner services, tools, and curated educational resources.",
  badge = "SPONSORED RESOURCE",
  placementId,
  className = "",
}: AdsterraSmartlinkProps) {
  return (
    <div
      data-placement-id={placementId}
      className={`my-8 max-w-4xl mx-auto px-4 ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="group block bg-gradient-to-r from-primary/10 via-card to-primary/5 border border-primary/25 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-200"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-primary/15 text-primary px-2.5 py-0.5 rounded-full border border-primary/20">
                <Sparkles className="w-3 h-3" />
                {badge}
              </span>
            </div>
            <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
              {title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-primary bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground px-4 py-2.5 rounded-xl transition-all duration-200 shrink-0">
            <span>Explore Resources</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </a>
    </div>
  );
}
