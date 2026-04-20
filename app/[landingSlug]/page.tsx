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
      <CertLandingPage page={page} />
    </>
  );
}
