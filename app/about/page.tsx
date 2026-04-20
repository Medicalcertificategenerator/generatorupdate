import { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Medical Certificate Generator — a free medical certificate generator built by Ziven Borceg for developers, educators, and designers who need realistic sample documents.",
  alternates: { canonical: "https://medicalcertificategenerator.co.in/about/" },
  openGraph: {
    type: "website",
    url: "https://medicalcertificategenerator.co.in/about/",
    title: "About Us | Medical Certificate Generator",
    description: "Learn about Medical Certificate Generator — a free medical certificate generator built by Ziven Borceg for developers, educators, and designers.",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default About;
