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
    robots: {
      index: false,
      follow: true,
    },
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

export default Generator;
