import type { Metadata } from "next";
import { EWSCertificate } from "@/views/EWSCertificate";

const PAGE_URL = "https://medicalcertificategenerator.co.in/ews-certificate/";

export const metadata: Metadata = {
  title: "EWS Certificate Eligibility — Economically Weaker Section Guide India 2026",
  description: "Check EWS certificate eligibility instantly. Complete guide to EWS category criteria: income below ₹8 lakh, property limits, documents required, and state-wise application process for Economically Weaker Section reservation in India.",
  alternates: {
    canonical: PAGE_URL,
  },
  keywords: [
    "ews certificate",
    "ews category",
    "ews certificate eligibility",
    "what is ews category",
    "ews criteria",
    "ews income limit",
    "ews certificate documents",
    "economically weaker section certificate",
    "ews certificate validity",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "EWS Certificate — Eligibility Checker & Complete Guide India 2026",
    description: "Check if you're eligible for EWS reservation. Income limit ₹8 lakh, property criteria, documents required, and state-wise application guide for Economically Weaker Section certificate.",
    url: PAGE_URL,
    siteName: "Medical Certificate Generator",
    locale: "en_IN",
    type: "article",
  },
};

export default function EWSPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is EWS category in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EWS (Economically Weaker Section) is a category of Indian citizens from the General (Unreserved) category whose family income is below ₹8 lakh per annum and who do not own significant property. The 103rd Constitutional Amendment (2019) provides 10% reservation for EWS in central government jobs and central educational institutions. EWS reservation is separate from OBC, SC, and ST reservations."
        }
      },
      {
        "@type": "Question",
        "name": "What is the income limit for EWS certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The family income limit for EWS certificate is ₹8 lakh per annum (gross annual income from all sources including salary, business, agriculture, and other income). This is the same number as the OBC NCL creamy layer limit, but the EWS criterion also includes property-based disqualification, which OBC NCL does not."
        }
      },
      {
        "@type": "Question",
        "name": "Who is eligible for EWS certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To be eligible for EWS certificate, you must: (1) belong to the General (Unreserved) category — i.e., you are not SC, ST, or OBC; (2) have a family annual income below ₹8 lakh from all sources; (3) NOT own agricultural land of 5 acres or more; (4) NOT own a residential flat of 1000 sq ft or more; (5) NOT own a residential plot of 100 sq yards or more in notified municipalities; (6) NOT own a residential plot of 200 sq yards or more in non-notified areas."
        }
      },
      {
        "@type": "Question",
        "name": "Can OBC/SC/ST candidates apply for EWS certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. EWS reservation under the 103rd Constitutional Amendment is exclusively for candidates from the General (Unreserved) category who are not already covered by SC, ST, or OBC reservation. If you belong to SC, ST, or OBC, you are NOT eligible for EWS certificate or EWS reservation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between EWS and OBC NCL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EWS applies to candidates from the General (unreserved) category with income below ₹8 lakh and certain property restrictions. OBC NCL applies to candidates from OBC communities whose family income is below ₹8 lakh. They are separate reservation categories: EWS = General category + low income + property conditions. OBC NCL = OBC community + low income. A person cannot claim both simultaneously."
        }
      },
      {
        "@type": "Question",
        "name": "How long is an EWS certificate valid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An EWS certificate is valid for 1 year (financial year, April 1 to March 31) from the date of issue. It must be renewed annually. For UPSC and competitive exams, the certificate must be valid at the time of application. Some states issue certificates that are valid for the entire financial year, others specify validity from date of issue."
        }
      },
      {
        "@type": "Question",
        "name": "Is EWS reservation valid in private sector jobs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. EWS reservation under the 103rd Constitutional Amendment applies only to central government employment and central educational institutions (IITs, NITs, central universities, etc.). It does not apply to private sector jobs, private educational institutions, or state government jobs (unless the state has adopted its own EWS reservation legislation, as most states have done by 2026)."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "EWS Certificate Eligibility — Economically Weaker Section Guide India 2026",
    "description": "Check EWS certificate eligibility instantly. Complete guide to EWS category criteria: income below ₹8 lakh, property limits, documents required, and state-wise application process.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <EWSCertificate />
    </>
  );
}
