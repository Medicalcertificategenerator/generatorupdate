import { Metadata } from "next";
import Generator from "@/views/Generator";
import { TEMPLATES } from "@/types/certificate";
import { notFound } from "next/navigation";

const BASE_URL = "https://medicalcertificategenerator.co.in";

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ templateId: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ templateId: string }> }): Promise<Metadata> {
  const { templateId } = await params;
  const template = TEMPLATES.find((t) => t.id === templateId);
  if (!template) return { title: "Certificate Generator | Medical Certificate Generator" };

  const url = `${BASE_URL}/generator/${template.id}`;

  return {
    title: { absolute: template.seoTitle },
    description: template.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: template.seoTitle,
      description: template.seoDescription,
      images: [{ url: template.previewImage, width: 800, height: 1067, alt: template.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: template.seoTitle,
      description: template.seoDescription,
      images: [template.previewImage],
    },
  };
}

export default async function GeneratorPage({ params }: { params: Promise<{ templateId: string }> }) {
  const { templateId } = await params;
  const template = TEMPLATES.find((t) => t.id === templateId);
  if (!template) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": template.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Generate a Medical Certificate Online",
    "description": "Step by step guide to creating your certificate.",
    "step": [
      { "@type": "HowToStep", "name": "Choose a Template", "text": "Select from authentic Indian clinic and hospital formats." },
      { "@type": "HowToStep", "name": "Enter Patient Details", "text": "Fill in the patient's name, age, and diagnosis." },
      { "@type": "HowToStep", "name": "Add Doctor Info", "text": "Enter the doctor's qualifications and clinic details." },
      { "@type": "HowToStep", "name": "Preview in Real Time", "text": "Watch the certificate update instantly." },
      { "@type": "HowToStep", "name": "Download", "text": "Download high quality PDF or PNG." }
    ]
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
      <Generator />
    </>
  );
}
