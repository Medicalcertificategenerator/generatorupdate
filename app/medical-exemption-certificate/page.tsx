import type { Metadata } from "next";
import { MedicalExemptionView } from "@/views/MedicalExemptionView";

const BASE_URL = "https://medicalcertificategenerator.co.in";
const PAGE_URL = `${BASE_URL}/medical-exemption-certificate`;

export const metadata: Metadata = {
  title:
    "Medical Exemption Certificate Generator (Free PDF Download Online)",
  description:
    "Create a medical exemption certificate instantly for travel, work, or health conditions like diabetes or heart disease. Free PDF download, editable format.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Medical Exemption Certificate Generator (Free PDF Download Online)",
    description:
      "Create a medical exemption certificate instantly for travel, work, or health conditions like diabetes or heart disease. Free PDF download, editable format.",
    url: PAGE_URL,
    siteName: "Medical Certificate Generator",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Exemption Certificate Generator (Free PDF Download Online)",
    description:
      "Create a medical exemption certificate instantly for travel, work, or health conditions. Free PDF download.",
  },
};

const faqs = [
  {
    q: "How can I get a medical exemption certificate quickly?",
    a: "Visit a registered medical practitioner (MBBS or higher) and explain your medical condition. The doctor will examine you and issue a certificate. For samples, use our free generator above.",
  },
  {
    q: "Is an online medical exemption certificate valid?",
    a: "No. Only a certificate issued by a registered, licensed doctor after a clinical examination is legally valid. Our generator creates sample documents for educational use only.",
  },
  {
    q: "Can I use a medical exemption certificate for travel restrictions?",
    a: "Yes, a valid medical exemption certificate issued by a doctor can be used to request exemption from travel restrictions, vaccination requirements, or airline policies.",
  },
  {
    q: "Who can issue a medical exemption certificate?",
    a: "Any registered medical practitioner — MBBS physicians, specialists (MD, MS), and government medical officers can issue a medical exemption certificate.",
  },
  {
    q: "Does NHS provide medical exemption certificates?",
    a: "Yes, in the UK, the NHS issues MedEx certificates for prescription charge exemptions covering conditions like diabetes, hypothyroidism, and epilepsy.",
  },
  {
    q: "What conditions qualify for a medical exemption?",
    a: "Common qualifying conditions include diabetes, coronary heart disease, epilepsy, chronic asthma, thyroid disorders, autoimmune conditions, severe allergies, COPD, and chronic kidney disease.",
  },
  {
    q: "Can I get exemption from workplace duties due to a medical condition?",
    a: "Yes. Employees with documented conditions can request reasonable accommodations and exemptions from specific tasks via a medical exemption certificate from a registered practitioner.",
  },
  {
    q: "How long is a medical exemption certificate valid?",
    a: "Temporary conditions may get 2-4 week exemptions, while chronic conditions like diabetes or heart disease may warrant certificates valid for 6-12 months.",
  },
];

export default function MedicalExemptionCertificatePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Medical Exemption Certificate Generator (Free PDF Download Online)",
    description:
      "Create a medical exemption certificate instantly for travel, work, or health conditions like diabetes or heart disease. Free PDF download.",
    url: PAGE_URL,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      url: `${BASE_URL}/`,
      name: "Medical Certificate Generator",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate a Medical Exemption Certificate Sample",
    description:
      "Step-by-step guide to generating a realistic medical exemption certificate instantly.",
    step: [
      {
        "@type": "HowToStep",
        name: "Choose Exemption Type",
        text: "Select from General, Travel, Work, or Medical Condition exemption types.",
      },
      {
        "@type": "HowToStep",
        name: "Enter Patient Details",
        text: "Fill in patient name, age, medical condition, and reason for exemption.",
      },
      {
        "@type": "HowToStep",
        name: "Preview Certificate",
        text: "Review the dynamically generated exemption certificate preview with realistic formatting.",
      },
      {
        "@type": "HowToStep",
        name: "Download PDF",
        text: "Download the certificate as a high-resolution PDF or PNG instantly.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <MedicalExemptionView />
    </>
  );
}
