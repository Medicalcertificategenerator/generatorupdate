"use client";

import React from "react";
import { ContentAdBreak } from "@/components/ads/ContentAdBreak";
import { AdsterraSmartlink } from "@/components/ads/AdsterraSmartlink";

interface BlogAdContentRendererProps {
  content: React.ReactNode;
}

/**
 * Renders blog content with automated, controlled ad breaks and Smartlink placement
 * between major content sections.
 */
export function BlogAdContentRenderer({ content }: BlogAdContentRendererProps) {
  if (!content) return null;

  if (React.isValidElement(content)) {
    const element = content as React.ReactElement<{ children?: React.ReactNode; className?: string }>;
    const childrenArray = React.Children.toArray(element.props.children);

    if (childrenArray.length > 1) {
      const result: React.ReactNode[] = [];
      const total = childrenArray.length;

      // Insertion indices based on section count
      const introAdIdx = 0; // After first block (e.g. AEO snippet / intro)
      const midAdIdx = Math.floor(total / 2);
      const smartlinkIdx = Math.max(1, total - 2);
      const beforeFaqIdx = total - 1;

      childrenArray.forEach((child, index) => {
        result.push(child);

        // Insert after intro block
        if (index === introAdIdx && total >= 2) {
          result.push(
            <ContentAdBreak
              key="ad-blog-intro"
              unit="300x250"
              placementId="blog_after_intro"
            />
          );
        }
        // Insert mid-article ad if distinct from intro and end
        else if (index === midAdIdx && index !== introAdIdx && index < smartlinkIdx && total >= 5) {
          result.push(
            <ContentAdBreak
              key="ad-blog-mid"
              unit="300x250"
              placementId="blog_mid"
            />
          );
        }
        // Insert Smartlink CTA before end section
        else if (index === smartlinkIdx && total >= 3) {
          result.push(
            <AdsterraSmartlink
              key="ad-blog-smartlink"
              placementId="blog_smartlink"
              title="Explore Medical Documentation Resources"
              description="Discover partner guides, health tools, and related reference materials."
            />
          );
        }
        // Insert pre-FAQ/conclusion ad
        else if (index === beforeFaqIdx && total >= 4) {
          result.push(
            <ContentAdBreak
              key="ad-blog-before-faq"
              unit="300x250"
              placementId="blog_before_faq"
            />
          );
        }
      });

      return <div className={element.props.className || "space-y-6"}>{result}</div>;
    }
  }

  return <div className="space-y-6">{content}</div>;
}
