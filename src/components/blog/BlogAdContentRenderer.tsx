"use client";

import React from "react";
import { GamAdSlot } from "@/components/ads/GamAdSlot";

interface BlogAdContentRendererProps {
  content: React.ReactNode;
  postSlug?: string;
}

/**
 * Smart Blog Content Ad Renderer
 *
 * Automatically injects responsive display ads into blog articles adhering to
 * strict AdSense guidelines:
 *  - Top of content ad
 *  - Intro excerpt ad (after 1st paragraph / 2 sentences)
 *  - Ads before H2 headings & every 2-3 paragraphs
 *  - Never splits lists, tables, code blocks, images, or FAQs
 *  - Never inserts an ad directly between an H2 heading and its immediate text
 *  - Never places two ads consecutively
 */
export function BlogAdContentRenderer({ content, postSlug = "article" }: BlogAdContentRendererProps) {
  if (!content) return null;

  // Extract children from wrapper div if content is a valid React element
  let children: React.ReactNode[] = [];
  if (React.isValidElement(content) && content.props && (content.props as { children?: React.ReactNode }).children) {
    children = React.Children.toArray((content.props as { children?: React.ReactNode }).children);
  } else {
    children = [content];
  }

  const elementsWithAds: React.ReactNode[] = [];
  let paragraphCount = 0;
  let lastAdBlockIndex = -10; // Track block index to prevent back-to-back ads
  let adSlotIndex = 1;

  // Helper to generate unique div IDs per article slot
  const getAdDivId = () => {
    const cleanSlug = postSlug.replace(/[^a-zA-Z0-9]/g, "-").slice(0, 15);
    const divId = `div-gpt-ad-${cleanSlug}-${adSlotIndex}`;
    adSlotIndex++;
    return divId;
  };

  // Top of Article Ad (Placement 1)
  elementsWithAds.push(
    <GamAdSlot key={`blog-top-ad`} divId={getAdDivId()} className="my-6" />
  );

  children.forEach((child, index) => {
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

    // Before H2 heading check (ensure last ad wasn't within 2 blocks)
    if (isH2 && index - lastAdBlockIndex >= 2) {
      elementsWithAds.push(
        <GamAdSlot key={`blog-ad-h2-${index}`} divId={getAdDivId()} className="my-6 md:my-8" />
      );
      lastAdBlockIndex = index;
    }

    elementsWithAds.push(child);

    if (isParagraph) {
      paragraphCount++;
    }

    // After 1st paragraph (Intro Ad Placement 2) or every 3 paragraphs thereafter
    const shouldInsertAfterParagraph =
      (paragraphCount === 1 && index - lastAdBlockIndex >= 2) ||
      (paragraphCount > 1 && paragraphCount % 3 === 0 && index - lastAdBlockIndex >= 3);

    // Ensure we don't insert immediately before an upcoming H2 heading
    const nextChild = children[index + 1];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nextType = React.isValidElement(nextChild) ? (nextChild.type as any) : null;
    const nextIsH2 = nextType === "h2" || (typeof nextType === "string" && nextType.toLowerCase() === "h2");

    if (shouldInsertAfterParagraph && !nextIsH2 && index < children.length - 1) {
      elementsWithAds.push(
        <GamAdSlot key={`blog-ad-p-${index}`} divId={getAdDivId()} className="my-6 md:my-8" />
      );
      lastAdBlockIndex = index;
    }
  });

  // End of Article Ad (Placement before CTA)
  if (children.length - lastAdBlockIndex >= 2) {
    elementsWithAds.push(
      <GamAdSlot key={`blog-bottom-ad`} divId={getAdDivId()} className="my-6 md:my-8" />
    );
  }

  // Preserve outer container styling if original content was wrapped
  if (React.isValidElement(content) && (content.props as { className?: string })?.className) {
    return <div className={(content.props as { className?: string }).className}>{elementsWithAds}</div>;
  }

  return <div className="space-y-6">{elementsWithAds}</div>;
}
