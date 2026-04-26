import type { ReactNode } from "react";

export interface BlogPostData {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  date: string;
  dateModified?: string;
  datePublishedIso?: string;
  dateModifiedIso?: string;
  readTime: string;
  tags: string[];
  author: string;
  content: ReactNode;
}
