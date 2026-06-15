import { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Medical Certificate Generator team. We are happy to answer questions about our medical certificate generator tool.",
  alternates: { canonical: "https://medicalcertificategenerator.co.in/contact/" },
  openGraph: {
    type: "website",
    url: "https://medicalcertificategenerator.co.in/contact/",
    title: "Contact Us | Medical Certificate Generator",
    description: "Get in touch with the Medical Certificate Generator team. Questions, feedback, or partnership enquiries welcome.",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

export default Contact;
