import { Metadata } from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Medical Certificate Generator privacy policy — how we handle your data (spoiler: we don't collect any). All certificate generation happens locally in your browser.",
  alternates: { canonical: "https://medicalcertificategenerator.co.in/privacy-policy/" },
};

export default PrivacyPolicy;
