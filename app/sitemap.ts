import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";
import { TEMPLATES } from "@/types/certificate";
import { LANDING_PAGES } from "@/data/landingPages";

const BASE_URL = "https://medicalcertificategenerator.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModDate = new Date("2026-05-01");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: lastModDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/generator/`, lastModified: lastModDate, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/medical-exemption-certificate/`, lastModified: lastModDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/obc-non-creamy-layer-certificate/`, lastModified: lastModDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ews-certificate/`, lastModified: lastModDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ayushman-bharat-eligibility-checker/`, lastModified: lastModDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/`, lastModified: lastModDate, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/about/`, lastModified: lastModDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/author/`, lastModified: lastModDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact/`, lastModified: lastModDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy/`, lastModified: lastModDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms/`, lastModified: lastModDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/dmca/`, lastModified: lastModDate, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/editorial-guidelines/`, lastModified: lastModDate, changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: lastModDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const generatorPages: MetadataRoute.Sitemap = TEMPLATES.map((template) => ({
    url: `${BASE_URL}/generator/${template.id}/`,
    lastModified: lastModDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const landingPageUrls: MetadataRoute.Sitemap = LANDING_PAGES
    .filter((page) => !page.noindex)
    .map((page) => ({
      url: `${BASE_URL}/${page.slug}/`,
      lastModified: lastModDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));

  return [...staticPages, ...landingPageUrls, ...blogPages, ...generatorPages];
}
