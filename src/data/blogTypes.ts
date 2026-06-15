import type { ReactNode } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BlogPostData {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  date?: string;
  dateModified?: string;
  datePublishedIso: string;
  dateModifiedIso: string;
  readTime: string;
  tags: string[];
  author: string;
  reviewedBy?: string;
  faqSchema?: FaqItem[];
  featuredImage?: string;
  featuredImageAlt?: string;
  images?: BlogImage[];
  content: ReactNode;
}
