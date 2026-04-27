import { Metadata } from "next";
import Generator from "@/views/Generator";
import { TEMPLATES } from "@/types/certificate";

const BASE_URL = "https://medicalcertificategenerator.co.in";

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ templateId: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ templateId: string }> }): Promise<Metadata> {
  const { templateId } = await params;
  const template = TEMPLATES.find((t) => t.id === templateId);
  if (!template) return { title: "Certificate Generator | Medical Certificate Generator" };

  const url = `${BASE_URL}/generator/${template.id}`;
  const title = `${template.name} — Free Medical Certificate Generator`;
  const description = `Generate a ${template.name} instantly. ${template.description} Free PNG & PDF download, fully customisable online.`;

  return {
    // Generator page titles contain 'Medical Certificate', use absolute to skip suffix
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: template.previewImage, width: 800, height: 1067, alt: template.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [template.previewImage],
    },
  };
}

export default async function GeneratorPage({ params }: { params: Promise<{ templateId: string }> }) {
  const { templateId } = await params;
  const template = TEMPLATES.find((t) => t.id === templateId);

  const faqSchema = template ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Is this ${template.name} format legally valid?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `While our generator uses authentic Indian hospital formats, the documents created here are sample templates meant for software testing, design mockups, and educational use. A real medical certificate must be signed and stamped by an NMC-registered doctor to be legally valid.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I use this for my office sick leave?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No. Forging medical documents to deceive an employer is a serious offence under the Bharatiya Nyaya Sanhita (BNS). Always consult a registered medical practitioner if you need legitimate medical leave.`
        }
      },
      {
        "@type": "Question",
        "name": `Are my details saved on your server?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No. All data entered into this generator is processed 100% locally in your web browser. We do not upload or store any of your patient or doctor information on our servers, ensuring complete data privacy.`
        }
      }
    ]
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Generator />
    </>
  );
}
