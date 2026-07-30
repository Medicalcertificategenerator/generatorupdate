"use client";

import React from "react";
import { AdSenseSlot } from "@/components/ads/AdSenseSlot";

interface BlogAdContentRendererProps {
  content: React.ReactNode;
}

/**
 * Renders blog content with Google AdSense slots safely injected:
 * - Ads 2 (slot 2508914694) after 3-4 paragraphs
 * - Ads 3 (slot 9311674928) after 7-8 paragraphs
 * - Ads 4 (slot 7615449878) after 11-12 paragraphs
 * - Ads 5 (slot 6302368208, autorelaxed) at the end of article content
 */
export function BlogAdContentRenderer({ content }: BlogAdContentRendererProps) {
  if (!content) return null;

  let children: React.ReactNode[] = [];
  if (React.isValidElement(content) && content.props && (content.props as { children?: React.ReactNode }).children) {
    children = React.Children.toArray((content.props as { children?: React.ReactNode }).children);
  } else {
    children = [content];
  }

  const elementsWithAds: React.ReactNode[] = [];
  let paragraphCount = 0;

  children.forEach((child) => {
    const isElement = React.isValidElement(child);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const type = isElement ? (child.type as any) : null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props = isElement ? (child.props as any) : {};

    const isH2 =
      type === "h2" ||
      (typeof type === "string" && type.toLowerCase() === "h2") ||
      props?.className?.includes("text-2xl") ||
      props?.className?.includes("font-bold");

    const isParagraph =
      type === "p" ||
      (typeof type === "string" && type.toLowerCase() === "p") ||
      (isElement && !isH2 && typeof props?.children === "string");

    elementsWithAds.push(child);

    if (isParagraph) {
      paragraphCount++;
      // Ads 2: after 3-4 paragraphs
      if (paragraphCount === 3) {
        elementsWithAds.push(
          <AdSenseSlot key="blog-ads-2" slot="2508914694" className="my-6 md:my-8" />
        );
      }
      // Ads 3: after another 3-5 paragraphs (paragraph 7)
      else if (paragraphCount === 7) {
        elementsWithAds.push(
          <AdSenseSlot key="blog-ads-3" slot="9311674928" className="my-6 md:my-8" />
        );
      }
      // Ads 4: after another 3-5 paragraphs (paragraph 11)
      else if (paragraphCount === 11) {
        elementsWithAds.push(
          <AdSenseSlot key="blog-ads-4" slot="7615449878" className="my-6 md:my-8" />
        );
      }
    }
  });

  // Ads 5: at the end of article content
  elementsWithAds.push(
    <AdSenseSlot key="blog-ads-5" slot="6302368208" format="autorelaxed" className="my-8" />
  );

  if (React.isValidElement(content) && (content.props as { className?: string })?.className) {
    return <div className={(content.props as { className?: string }).className}>{elementsWithAds}</div>;
  }

  return <div className="space-y-6">{elementsWithAds}</div>;
}
