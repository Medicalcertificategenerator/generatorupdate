import { Metadata } from "next";
import Author from "@/views/Author";

export const metadata: Metadata = {
  title: "Author — Ziven Borceg",
  description: "Ziven Borceg is a software developer and healthcare technology enthusiast who built Medical Certificate Generator — a free medical certificate generator for developers and educators.",
  alternates: { canonical: "https://medicalcertificategenerator.co.in/author/" },
  openGraph: {
    type: "profile",
    url: "https://medicalcertificategenerator.co.in/author/",
    title: "Author — Ziven Borceg | Medical Certificate Generator",
    description: "Ziven Borceg — software developer and healthcare technology enthusiast, creator of Medical Certificate Generator.",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default Author;
