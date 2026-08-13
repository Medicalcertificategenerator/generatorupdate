"use client";

import React from "react";

interface BlogAdContentRendererProps {
  content: React.ReactNode;
}

/**
 * Renders blog content cleanly with preserved section structure for AdSense Auto Ads.
 */
export function BlogAdContentRenderer({ content }: BlogAdContentRendererProps) {
  if (!content) return null;

  return <div className="space-y-6">{content}</div>;
}

