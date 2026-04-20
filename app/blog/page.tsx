import { Metadata } from "next";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "Blog — Medical Certificate Tips & Guides",
  description: "Expert guides on medical certificates in India — formats, legal requirements, how to get sick leave certificates, and more. Written by Ziven Borceg.",
  alternates: { canonical: "https://medicalcertificategenerator.co.in/blog/" },
  openGraph: {
    type: "website",
    url: "https://medicalcertificategenerator.co.in/blog/",
    title: "Blog — Medical Certificate Tips & Guides | Medical Certificate Generator",
    description: "Expert guides on medical certificates in India — formats, legal requirements, sick leave certificates, and more.",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default Blog;
