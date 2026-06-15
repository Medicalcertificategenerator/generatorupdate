import type { Metadata } from "next";
import { AyushmanBharatEligibility } from "@/views/AyushmanBharatEligibility";

const PAGE_URL = "https://medicalcertificategenerator.co.in/ayushman-bharat-eligibility-checker/";

export const metadata: Metadata = {
  title: "Ayushman Bharat Eligibility Check — PMJAY Card Status 2026",
  description: "Check your Ayushman Bharat (PMJAY) eligibility online using Aadhaar, ration card, or mobile number. Step-by-step guide to check PM-JAY card status on the official NHA portal.",
  alternates: {
    canonical: PAGE_URL,
  },
  keywords: [
    "ayushman card eligibility check",
    "pmjay eligibility check",
    "ayushman card eligibility check online",
    "how to check ayushman card eligibility",
    "how to check pmjay card status",
    "pm jay card status",
    "ayushman bharat eligibility",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ayushman Bharat Eligibility Check — PMJAY Card Status 2026",
    description: "Check your Ayushman Bharat (PMJAY) eligibility online using Aadhaar, ration card, or mobile number. Step-by-step guide to check PM-JAY card status.",
    url: PAGE_URL,
    siteName: "Medical Certificate Generator",
    locale: "en_IN",
    type: "website",
  },
};

export default function AyushmanCheckerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "I'm not in SECC 2011 data — can I still get Ayushman Bharat coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, in many cases. While rural and urban data is primarily derived from SECC 2011, many state governments have merged their local health cards with PM-JAY to cover additional families. Furthermore, all senior citizens in India aged 70 and above are now eligible for independent Ayushman coverage under the 2024 scheme expansion."
        }
      },
      {
        "@type": "Question",
        "name": "My name appears in the portal but my family member's doesn't — what do I do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If a family member is missing, visit a Common Service Centre (CSC) or empanelled hospital desk. Carry your official Ration Card or verified Family Declaration showing the relationship, along with their Aadhaar Card, to request addition to the family database."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check eligibility without an Aadhaar card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While Aadhaar is the most reliable identifier, you can search the portal using your Ration Card Number (Ration Card/NFSA ID), registered Mobile Number, or PMJAY ID. However, actual card generation and biometric verification require Aadhaar."
        }
      },
      {
        "@type": "Question",
        "name": "Is Ayushman Bharat different from state health schemes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Ayushman Bharat (PM-JAY) is a central government scheme valid across all empanelled hospitals in India. However, many states co-brand or merge it with regional welfare schemes (like Ayushman UP, Mahatma Jyotirao Phule Jan Arogya Yojana in Maharashtra, or Karunya Arogya Suraksha in Kerala)."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ayushman Bharat cover outpatient (OPD) treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Ayushman Bharat (PM-JAY) primarily covers cashless secondary and tertiary hospitalization (in-patient care) up to ₹5 lakh. OPD consultations, routine medicines, and diagnostics outside of hospital admission are not covered under the central guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "I am 70 years old — am I automatically eligible under the 2024 extension?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The central cabinet extended the AB PM-JAY scheme to all senior citizens aged 70 years and above regardless of household income. Eligible seniors receive a top-up of ₹5 lakh if their family is already enrolled, or a separate ₹5 lakh cover if they are new enrollees."
        }
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Ayushman Bharat Eligibility Checker Launcher",
    "url": PAGE_URL,
    "applicationCategory": "GovernmentUtility",
    "operatingSystem": "All",
    "description": "An interactive utility and link launcher that helps users select their state and search criteria before redirecting them to the official National Health Authority (NHA) beneficiary portal for secure eligibility validation.",
    "browserRequirements": "Requires JavaScript. Requires HTML5."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <AyushmanBharatEligibility />
    </>
  );
}
