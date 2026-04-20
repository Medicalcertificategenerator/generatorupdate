import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LANDING_PAGES, getLandingPage } from "@/data/landingPages";
import { CertLandingPage } from "@/components/landing/CertLandingPage";

const BASE_URL = "https://medicalcertificategenerator.co.in";

export async function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({ landingSlug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ landingSlug: string }>;
}): Promise<Metadata> {
  const { landingSlug } = await params;
  const page = getLandingPage(landingSlug);
  if (!page) return {};

  const url = `${BASE_URL}/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: "Medical Certificate Generator",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function LandingSlugPage({
  params,
}: {
  params: Promise<{ landingSlug: string }>;
}) {
  const { landingSlug } = await params;
  const page = getLandingPage(landingSlug);
  if (!page) notFound();

  const url = `${BASE_URL}/${page.slug}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", url: `${BASE_URL}/`, name: "Medical Certificate Generator" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Generate a ${page.title} Sample`,
    description: `Step-by-step guide to generating a realistic ${page.title.toLowerCase()} sample in seconds.`,
    step: [
      {
        "@type": "HowToStep",
        name: "Choose a Template",
        text: "Pick from our authentic Indian clinic and hospital formats.",
      },
      {
        "@type": "HowToStep",
        name: "Enter Clinical Details",
        text: "Input the patient name, diagnosis, and rest period required.",
      },
      {
        "@type": "HowToStep",
        name: "Preview and Adjust",
        text: "Review the dynamically generated preview and adjust the layout.",
      },
      {
        "@type": "HowToStep",
        name: "Download PDF",
        text: "Download the high-resolution PDF instantly with no watermark.",
      }
    ]
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
      <CertLandingPage page={page} />
    </>
  );
}
