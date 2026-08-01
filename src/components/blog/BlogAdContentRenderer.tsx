"use client";

import React from "react";
import { AdSenseSlot } from "@/components/ads/AdSenseSlot";

interface BlogAdContentRendererProps {
  content: React.ReactNode;
}

/**
 * Counts paragraph elements (<p>) recursively within a React node tree
 */
function countParagraphsInNode(node: React.ReactNode): number {
  if (!React.isValidElement(node)) return 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const type = node.type as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props = node.props as any;

  if (type === "p" || (typeof type === "string" && type.toLowerCase() === "p")) {
    return 1;
  }

  if (props?.children) {
    const childrenArr = React.Children.toArray(props.children);
    let count = 0;
    childrenArr.forEach((child) => {
      count += countParagraphsInNode(child);
    });
    return count;
  }

  return 0;
}

/**
 * Renders blog content with Google AdSense slots safely injected:
 * - Ads 2 (slot 2508914694) after ~3 paragraph units / sections
 * - Ads 3 (slot 9311674928) after ~7 paragraph units / sections
 * - Ads 4 (slot 7615449878) after ~11 paragraph units / sections
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
  let ad2Inserted = false;
  let ad3Inserted = false;
  let ad4Inserted = false;

  children.forEach((child) => {
    elementsWithAds.push(child);

    // Count paragraph units inside this section/div (minimum 1 unit per top-level block)
    const pCount = Math.max(1, countParagraphsInNode(child));
    paragraphCount += pCount;

    // Ads 2: after ~3-4 paragraph units
    if (!ad2Inserted && paragraphCount >= 3) {
      elementsWithAds.push(
        <AdSenseSlot key="blog-ads-2" slot="2508914694" className="my-6 md:my-8" />
      );
      ad2Inserted = true;
    }
    // Ads 3: after ~7-8 paragraph units
    else if (!ad3Inserted && paragraphCount >= 7) {
      elementsWithAds.push(
        <AdSenseSlot key="blog-ads-3" slot="9311674928" className="my-6 md:my-8" />
      );
      ad3Inserted = true;
    }
    // Ads 4: after ~11-12 paragraph units
    else if (!ad4Inserted && paragraphCount >= 11) {
      elementsWithAds.push(
        <AdSenseSlot key="blog-ads-4" slot="7615449878" className="my-6 md:my-8" />
      );
      ad4Inserted = true;
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

