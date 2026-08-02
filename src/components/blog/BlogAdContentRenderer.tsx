"use client";

import React from "react";

interface BlogAdContentRendererProps {
  content: React.ReactNode;
}

/**
 * Renders blog content cleanly without ad units
 */
export function BlogAdContentRenderer({ content }: BlogAdContentRendererProps) {
  if (!content) return null;

  if (React.isValidElement(content) && (content.props as { className?: string })?.className) {
    return <div className={(content.props as { className?: string }).className}>{(content.props as { children?: React.ReactNode }).children || content}</div>;
  }

  return <div className="space-y-6">{content}</div>;
}


