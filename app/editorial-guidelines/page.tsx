import type { Metadata } from "next";
import EditorialGuidelines from "@/views/EditorialGuidelines";

export const metadata: Metadata = {
  title: "Editorial Guidelines | Medical Certificate Generator",
  description: "Learn how Medical Certificate Generator researches, verifies, and updates content. Our editorial guidelines cover our review process, sources, update schedule, and responsible content policy.",
  alternates: {
    canonical: "https://medicalcertificategenerator.co.in/editorial-guidelines/",
  },
  openGraph: {
    title: "Editorial Guidelines | Medical Certificate Generator",
    description: "Transparent editorial standards covering content verification, sources, update cadence, and responsible publishing policy.",
    url: "https://medicalcertificategenerator.co.in/editorial-guidelines/",
    type: "website",
  },
};

export default function EditorialGuidelinesPage() {
  return <EditorialGuidelines />;
}
