import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";
import { TEMPLATES } from "@/types/certificate";
import { LANDING_PAGES } from "@/data/landingPages";

const BASE_URL = "https://medicalcertificategenerator.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/blog/`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/author/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/dmca/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/shipping/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/editorial-guidelines/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.filter(post => ![
    "what-is-medical-certificate",
    "how-to-get-sick-leave-certificate",
    "rules-medical-certificate-leave-india",
    "how-to-get-medical-certificate",
    "how-to-get-medical-certificate-for-leave",
    "medical-certificate-for-school",
    "how-to-make-medical-certificate-for-college",
    "what-is-medical-fitness-certificate",
    "how-to-get-medical-fitness-certificate",
    "medical-certificate-vs-fitness-certificate"
  ].includes(post.slug)).map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const landingPageUrls: MetadataRoute.Sitemap = LANDING_PAGES.filter(page => ![
    "medical-certificate-for-leave",
    "medical-certificate-for-office-leave",
    "medical-certificate-for-school-absence"
  ].includes(page.slug)).map((page) => ({
    url: `${BASE_URL}/${page.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...landingPageUrls, ...blogPages];
}
