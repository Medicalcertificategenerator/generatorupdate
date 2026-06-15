import Home from "@/views/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Certificate Generator — Free Handwritten Style PDF & PNG (India)",
  description: "Generate realistic Indian medical certificates instantly. 15+ hospital and clinic templates, handwritten style, free PDF and PNG download. No signup required.",
  alternates: { canonical: "https://medicalcertificategenerator.co.in/" },
  openGraph: {
    title: "Medical Certificate Generator — Free Online Tool India",
    description: "Generate realistic Indian medical certificates free. 15+ templates, instant PNG/PDF download. For education, testing, and design use only.",
    url: "https://medicalcertificategenerator.co.in/",
    siteName: "Medical Certificate Generator",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Certificate Generator — Free Online Tool India",
    description: "Generate realistic Indian medical certificate samples. 15+ clinic templates, instant download.",
  },
};

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
