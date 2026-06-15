import type { Metadata } from "next";
import { OBCNonCreamyLayer } from "@/views/OBCNonCreamyLayer";

const PAGE_URL = "https://medicalcertificategenerator.co.in/obc-non-creamy-layer-certificate/";

export const metadata: Metadata = {
  title: "Non Creamy Layer Certificate (OBC NCL) — Eligibility, Documents & How to Apply",
  description: "Complete guide to Non Creamy Layer (NCL) certificate for OBC category in India. Check OBC NCL eligibility, income limit ₹8 lakh, required documents, state-wise application process, and renewal procedure.",
  alternates: {
    canonical: PAGE_URL,
  },
  keywords: [
    "non creamy layer certificate",
    "obc non creamy layer",
    "obc ncl certificate",
    "obc ncl means",
    "non creamy layer income limit",
    "obc non creamy layer eligibility",
    "obc ncl certificate validity",
    "non creamy layer certificate online",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Non Creamy Layer Certificate (OBC NCL) — Complete India Guide 2026",
    description: "Eligibility criteria, income limits, required documents, and state-wise application process for OBC Non-Creamy Layer certificate in India.",
    url: PAGE_URL,
    siteName: "Medical Certificate Generator",
    locale: "en_IN",
    type: "article",
  },
};

export default function OBCNCLPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Non-Creamy Layer certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Non-Creamy Layer (NCL) certificate is an official government document that certifies an OBC (Other Backward Class) individual does not belong to the 'creamy layer' — i.e., their family income is below ₹8 lakh per year. It is required to claim OBC reservation benefits in central government jobs, central educational institutions, and central government schemes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the income limit for OBC Non-Creamy Layer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The income limit for OBC Non-Creamy Layer status is ₹8 lakh per annum (₹8,00,000 per year) for central government purposes, revised in 2017. This applies to gross annual income from all sources except agricultural income. Several states have their own income limits which may differ."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a caste certificate and a non-creamy layer certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A caste certificate certifies that you belong to a specific OBC community listed in the central or state OBC list — it is permanent and does not expire. A Non-Creamy Layer (NCL) certificate certifies that your family income is below ₹8 lakh/year, qualifying you for OBC reservation benefits — it is issued annually and must be renewed. Both documents are required together to claim OBC reservation in central government jobs and educational institutions."
        }
      },
      {
        "@type": "Question",
        "name": "How long is a Non-Creamy Layer certificate valid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Non-Creamy Layer certificate is typically valid for 1 year (financial year) from the date of issue. It must be renewed annually. For competitive exams like UPSC Civil Services, the certificate must be valid at the time of application, not at the time of appointment."
        }
      },
      {
        "@type": "Question",
        "name": "Can a government employee's child get OBC NCL certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the parent's pay grade. Children of government employees in Group A (Class I) and Group B (Class II) positions directly recruited or promoted — unless they fall below specific pay scales — are classified as Creamy Layer and NOT eligible for NCL certificate. Children of government employees in Group C and D positions can apply for NCL certificate if their income is below ₹8 lakh per annum from non-salary sources. Refer to the Creamy Layer criteria in the OBC reservation order (OM No. 36012/22/93-Estt. (SCT))."
        }
      },
      {
        "@type": "Question",
        "name": "Who issues the Non-Creamy Layer certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Non-Creamy Layer certificate is issued by the Sub-Divisional Magistrate (SDM), Tehsildar, Revenue Officer, or District Collector's office in most Indian states. In some states it is issued by the Block Development Officer (BDO). The exact issuing authority varies by state."
        }
      },
      {
        "@type": "Question",
        "name": "How do I renew my Non-Creamy Layer certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To renew your NCL certificate, visit the same office that issued your original certificate (SDM/Tehsildar/BDO office) before the expiry date. Submit fresh income proof (Form 16, salary slip, or income affidavit) for the current financial year, along with your previous NCL certificate, caste certificate, and Aadhaar card. Many states now offer online renewal through state e-district portals."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Apply for OBC Non-Creamy Layer Certificate in India",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Collect required documents",
        "text": "Gather: Aadhaar card, OBC caste certificate, income proof (Form 16/salary slips/income affidavit), address proof, and recent passport photograph."
      },
      {
        "@type": "HowToStep",
        "name": "Visit the issuing authority",
        "text": "Go to your Sub-Divisional Magistrate (SDM) office, Tehsildar office, or apply online on your state's e-District portal."
      },
      {
        "@type": "HowToStep",
        "name": "Submit application form",
        "text": "Fill the NCL certificate application form (available at the SDM office or state portal). Attach all required documents."
      },
      {
        "@type": "HowToStep",
        "name": "Verification and processing",
        "text": "The authority verifies your income and caste status, typically within 15-30 days."
      },
      {
        "@type": "HowToStep",
        "name": "Collect the certificate",
        "text": "Collect your Non-Creamy Layer certificate from the issuing office or download it from the state portal if applied online."
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Non Creamy Layer Certificate (OBC NCL) — Eligibility, Documents & How to Apply",
    "description": "Complete guide to Non Creamy Layer (NCL) certificate for OBC category in India. Check OBC NCL eligibility, income limit ₹8 lakh, required documents, state-wise application process, and renewal procedure.",
    "url": PAGE_URL,
    "inLanguage": "en-IN",
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-24",
    "author": {
      "@type": "Organization",
      "name": "Medical Certificate Generator",
      "url": "https://medicalcertificategenerator.co.in/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Medical Certificate Generator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medicalcertificategenerator.co.in/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <OBCNonCreamyLayer />
    </>
  );
}
