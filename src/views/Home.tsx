"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import {
  ArrowRight,
  Download,
  Eye,
  Settings,
  Star,
  Wand2,
  CheckCircle,
  Zap,
  Shield,
  FileText,
  MousePointerClick,
  Sparkles,
  Users,
  BookOpen,
  Briefcase,
  Plane,
  Heart,
  Code,
  Film,
  PenLine,
  Stamp,
  Hash,
  HelpCircle,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TEMPLATES } from "@/types/certificate";
import { LANDING_PAGES } from "@/data/landingPages";
import { HomeCertGenerator } from "@/components/home/HomeCertGenerator";
import { HomeInfoSection } from "@/components/home/HomeInfoSection";
import { AdSlot } from "@/components/ads/AdSlot";

const testimonials = [
  { name: "Rahul Gupta", role: "UI/UX Designer", text: "I needed placeholder documents for a healthcare app prototype. This generated realistic layouts perfectly—saved me hours of Photoshop work.", stars: 5 },
  { name: "Priya Nair", role: "Student", text: "Used this for a school presentation on healthcare administration. The handwriting style made my slides look incredibly authentic.", stars: 5 },
  { name: "Divya Mehra", role: "Content Creator", text: "I create short films and needed a realistic-looking prescription prop. The variety of templates is impressive—each one looks like a different clinic.", stars: 5 },
  { name: "Ankit Sharma", role: "IT QA Engineer", text: "Generated demo certificates in 30 seconds for our HR software testing environment. The output is perfect for QA datasets.", stars: 5 },
  { name: "Suresh Patel", role: "Film Prop Master", text: "Perfect for mockup screenshots and scene building. The PNG download is high-quality and crisp on camera.", stars: 5 },
  { name: "Kavya Reddy", role: "Educator", text: "I use this in class to show students what a real medical certificate format looks like. It's the clearest visual example I've found online.", stars: 5 },
];

const howItWorks = [
  { step: "01", icon: MousePointerClick, title: "Visit the Generator", desc: "Head to our free generator — no account, no signup, no payment needed. It loads instantly in your browser." },
  { step: "02", icon: FileText, title: "Choose a Template", desc: "Pick from 15+ Indian clinic and hospital formats, each modelled after real prescription pads and certificate styles." },
  { step: "03", icon: Users, title: "Enter Patient Details", desc: "Fill in the patient's name, age, gender, and the reason or diagnosis. All fields are clearly labelled." },
  { step: "04", icon: Settings, title: "Add Doctor Info", desc: "Enter the doctor's name, qualifications, registration number, and clinic details for a realistic letterhead." },
  { step: "05", icon: BookOpen, title: "Set Dates & Rest Period", desc: "Add the examination date and the recommended leave duration — specific dates make the certificate look authentic." },
  { step: "06", icon: Sparkles, title: "Customise the Style", desc: "Adjust handwriting style, ink colour, and font settings to match the clinic format you've chosen." },
  { step: "07", icon: Eye, title: "Preview in Real Time", desc: "Watch the certificate update live as you type — exactly how it will look when you download it." },
  { step: "08", icon: Download, title: "Download as PNG", desc: "One click exports a high-resolution PNG image, ready for any project, presentation, or demonstration." },
];

const keyFeatures = [
  { icon: Wand2, title: "AI-Powered Diagnosis Formatting", desc: "Our engine uses AI Assist to auto-format complex medical vocabulary, simulating realistic diagnosis entries instantly." },
  { icon: PenLine, title: "Realistic Doctor Signature Simulation", desc: "Custom algorithms generate varied, authentic-looking doctor signatures with randomized ink pressure and angles." },
  { icon: FileText, title: "15+ Indian Hospital Formats", desc: "Templates carefully modeled after real Indian private clinics, government hospitals, and multispecialty corporate centers." },
  { icon: Download, title: "Instant PDF Download", desc: "No watermarks locking your text, no signups—preview live and export high-resolution PDFs or PNG images instantly." },
  { icon: Shield, title: "100% Secure & Private", desc: "All data processing happens securely in your local browser window. No patient details are uploaded to any server." },
];

const useCases = [
  {
    title: "School & College Absence",
    desc: "Understand what schools need for attendance condonation. View exact formats and fields required to justify student absences.",
    icon: BookOpen,
    blog: null,
  },
  {
    title: "Office Sick Leave",
    desc: "Generate sample layouts to see what HR departments expect from a valid sick leave certificate from registered practitioners.",
    icon: Briefcase,
    blog: { href: "/blog/how-to-get-sick-leave-certificate", label: "Guide to Sick Leave →" },
  },
  {
    title: "Fitness Certificates",
    desc: "Clearance for sports, travel, or re-joining duty. Preview comprehensive fitness certificate templates prior to your visit.",
    icon: Plane,
    blog: null,
  },
  {
    title: "Insurance Claims",
    desc: "Ensure your documentation format is correct. Discover what specific details insurers look for to avoid claim rejections.",
    icon: Heart,
    blog: null,
  },
  {
    title: "UI/UX & Developer Testing",
    desc: "Building a healthcare app? Automatically generate hundreds of realistic mockups for placeholder data without HIPAA/privacy concerns.",
    icon: Code,
    blog: { href: "/blog/medical-certificate-ui-design", label: "Read Developer Guide →" },
  },
  {
    title: "Prop Creation",
    desc: "Need an authentic-looking prop for your film or theatre production? Use our tool to simulate a real doctor's note.",
    icon: Film,
    blog: null,
  },
];

const whyChooseUs = [
  { title: "Most Realistic on the Web", desc: "Our per-character handwriting engine produces text that looks genuinely hand-written — not a generic handwriting font." },
  { title: "Indian Clinic Formats", desc: "All templates are specifically designed around real Indian hospital and clinic prescription pad formats." },
  { title: "Zero Data Storage", desc: "Everything runs in your browser. Nothing is uploaded to any server — your information stays local." },
  { title: "Instant Export", desc: "Uses html-to-image technology for pixel-perfect 2× resolution PNG export without any server-side processing." },
];

const doctorVerification = [
  {
    icon: PenLine,
    title: "Doctor's Signature",
    desc: "Every valid medical certificate must carry the physician's original signature. This is non-negotiable — no signature means no validity.",
  },
  {
    icon: Hash,
    title: "Registration Number",
    desc: "The doctor's NMC or State Medical Council registration number proves they are licensed. You can verify any number at nmc.org.in.",
  },
  {
    icon: Stamp,
    title: "Official Stamp / Seal",
    desc: "Most employers and colleges expect the clinic's official stamp in addition to the signature. Missing it can cause your certificate to be questioned.",
  },
];

const certTypes = [
  { type: "Sick Leave Certificate", use: "Proves medical unfitness for work or study for a specific number of days" },
  { type: "Fitness Certificate", use: "Confirms you are healthy enough to join a job, travel, or participate in sports" },
  { type: "Vaccination Certificate", use: "Records immunisation history for school, travel, or employment requirements" },
  { type: "School / College Absence", use: "Justifies a student's absence during exams, practicals, or regular classes" },
];

const faqs = [
  {
    q: "How to fill a medical certificate?",
    a: (
      <span>
        A valid medical certificate must be compiled and signed exclusively by a registered medical practitioner — never by the patient. Under{" "}
        <a href="https://www.nmc.org.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline font-semibold">
          NMC guidelines
        </a>
        , a complete certificate must document: the patient's full name, age, and gender; the exact date of clinical examination; a definitive clinical diagnosis or medical reason for rest; and the precise duration of recommended leave. Additionally, the doctor's name, qualifications (such as MBBS or MD), and their official NMC or State Medical Council registration number must be prominently displayed. Finally, it requires the doctor's handwritten signature and official clinic rubber stamp. If you are developing healthcare apps, you can use our{" "}
        <Link href="/generator/" className="text-primary hover:underline font-semibold">
          medical certificate templates
        </Link>{" "}
        to understand the correct placement of these fields in mockup environments.
      </span>
    ),
    aText: "A valid medical certificate must be compiled and signed exclusively by a registered medical practitioner — never by the patient. Under NMC guidelines, a complete certificate must document: the patient's name, age, and gender; the exact date of examination; a definitive diagnosis or reason for leave; the recommended rest period; and the doctor's name, qualifications, registration number, signature, and clinic stamp. If you are developing healthcare apps, you can use our medical certificate templates to understand correct layout formatting."
  },
  {
    q: "What does a medical certificate look like?",
    a: (
      <span>
        A standard Indian medical certificate consists of three primary, well-defined sections. The **Header** displays the clinic or hospital’s name, contact information, and the doctor's qualifications and licensing details. The **Body** contains the core patient information, the specific clinical diagnosis, and the exact recommended rest period or fitness declaration. The **Footer** contains the critical authenticating elements: the doctor's signature, official rubber stamp, and the date of issue. To explore various visual designs, you can select from our{" "}
        <Link href="/generator/" className="text-primary hover:underline font-semibold">
          15+ authentic Indian templates
        </Link>{" "}
        which range from private local clinics to large corporate multispecialty center formats.
      </span>
    ),
    aText: "A standard Indian medical certificate consists of three primary sections: the Header (clinic/doctor details), the Body (patient details, clinical diagnosis, and rest period), and the Footer (signature, rubber stamp, and issue date). Explore layout formats using our 15+ authentic Indian templates."
  },
  {
    q: "How to get a medical certificate from a doctor offline?",
    a: (
      <span>
        To obtain a valid physical medical certificate in India, you must schedule an in-person consultation with a licensed doctor (MBBS or MD). During the visit, describe your symptoms and clinical history honestly so the physician can perform an actual physical examination. If the doctor determines that your condition warrants rest, they will issue an official certificate on their printed letterhead. Ensure that the final document carries their handwritten signature, registration number, and official clinic stamp before you leave. For standard workplace submissions, refer to our comprehensive guide on{" "}
        <Link href="/blog/how-to-get-sick-leave-certificate" className="text-primary hover:underline font-semibold">
          how to get a sick leave certificate
        </Link>
        .
      </span>
    ),
    aText: "To obtain a valid physical medical certificate in India, schedule an in-person consultation with a licensed doctor. Honestly describe symptoms, undergo physical examination, and ensure the document carries their handwritten signature, registration number, and clinic stamp. Refer to our guide on how to get a sick leave certificate."
  },
  {
    q: "How to make a medical certificate for college?",
    a: (
      <span>
        Students requiring a medical certificate for college attendance condonation or missed exams must visit an NMC-registered doctor during their illness period. The doctor will assess the condition and issue a certificate specifying the exact dates of unfitness. Always verify your institution's specific rules beforehand, as universities like DU, Mumbai University, or VTU often require certificates to be issued strictly by government hospital medical officers or demand specific administrative formats. If you need a template for a student presentation or software mockup, you can preview our{" "}
        <Link href="/student-medical-certificate-format/" className="text-primary hover:underline font-semibold">
          student medical certificate format
        </Link>
        .
      </span>
    ),
    aText: "Students requiring a medical certificate for college attendance condonation or missed exams must visit an NMC-registered doctor during their illness. Always verify your institution's rules beforehand, as some require certificates strictly from government hospitals. You can preview standard layouts using our student medical certificate format."
  },
  {
    q: "What is Medical Certificate Form 1A?",
    a: (
      <span>
        Medical Certificate Form 1A is a standardized statutory document in India required under the Motor Vehicles Act for obtaining or renewing a professional driving licence or for applicants over 40. This form must be completed and signed by a government-authorized medical officer or a registered practitioner after a physical evaluation of your vision, hearing, and cardiovascular health. The completed form certifies that you are physically fit to operate motor vehicles on public roads. If you are designing dummy forms, you can view similar layouts in our{" "}
        <Link href="/generator/" className="text-primary hover:underline font-semibold">
          generator templates index
        </Link>
        .
      </span>
    ),
    aText: "Medical Certificate Form 1A is a standardized statutory document in India required under the Motor Vehicles Act for obtaining or renewing a driving licence. It must be completed and signed by an authorized medical officer after an in-person physical evaluation of your vision, hearing, and motor health."
  },
  {
    q: "Is a medical certificate generator tool legal to use?",
    a: (
      <span>
        Yes, using a medical certificate generator is entirely legal as long as the generated documents are used strictly for educational demonstrations, UI/UX software testing, film props, or design prototypes. However, presenting a generated certificate as a genuine document to any employer, university, or government department is a serious criminal offense. Under Section 336 (forgery), Section 340 (using forged documents), and Section 318 (cheating) of the{" "}
        <Link href="/terms#disclaimer" className="text-primary hover:underline font-semibold">
          Bharatiya Nyaya Sanhita (BNS) 2023
        </Link>
        , fraudulent document submission can lead to imprisonment up to 2 years and heavy fines. Always consult a real doctor for actual medical needs.
      </span>
    ),
    aText: "Yes, using a medical certificate generator is legal for educational demonstrations, UI/UX testing, film props, or design prototypes. Presenting a generated certificate as genuine to an employer or university is a serious criminal offense under the Bharatiya Nyaya Sanhita (BNS) 2023."
  },
  {
    q: "Are these certificates valid for sick leave?",
    a: (
      <span>
        No, certificates generated by this online tool are strictly sample mockups and are not valid for official sick leave, academic condonation, or insurance claims. They are designed exclusively for sandbox testing, design layouts, and academic tutorials. Submitting a generated document to an employer or university as genuine constitutes document fraud and is illegal under the{" "}
        <Link href="/terms#disclaimer" className="text-primary hover:underline font-semibold">
          Bharatiya Nyaya Sanhita (BNS) 2023
        </Link>
        . If you are genuinely unwell and require legitimate time off, you must schedule a consultation with an NMC-registered doctor to obtain a valid document.
      </span>
    ),
    aText: "No, certificates generated by this online tool are strictly sample mockups and are not valid for official sick leave, academic condonation, or insurance claims. Submitting a generated document as genuine constitutes document fraud under the Bharatiya Nyaya Sanhita (BNS) 2023."
  },
  {
    q: "What is the quickest medical certificate to get?",
    a: (
      <span>
        For minor acute illnesses such as viral fever, acute gastroenteritis, or severe migraines, a sick leave certificate can typically be obtained immediately after a clinical consultation with a local practitioner. Many employers also accept digital certificates issued via registered Indian telemedicine platforms (like Apollo 24|7 or Practo) under the Telemedicine Practice Guidelines 2020. However, always confirm your organization's specific HR policies beforehand, as some government departments do not accept digital or telemedicine consultations. To explore the format of typical short-term sick leave, you can browse our{" "}
        <Link href="/medical-certificate-for-leave/" className="text-primary hover:underline font-semibold">
          medical certificate for leave
        </Link>{" "}
        guide.
      </span>
    ),
    aText: "For minor acute illnesses, a sick leave certificate is quickest to obtain immediately following a clinical consultation with a local practitioner or registered Indian telemedicine platforms. Always confirm your organization's specific HR policies, and browse our medical certificate for leave guide."
  },
  {
    q: "What are the rules for giving a medical certificate?",
    a: (
      <span>
        Registered medical practitioners must adhere to strict ethical and legal rules when issuing medical certificates under NMC standards. A certificate can only be issued after an actual, documented clinical examination of the patient. The doctor is legally responsible for the accuracy of the diagnosis, the recommended rest period, and the patient's details recorded on the document. Backdating a certificate or issuing one without an examination constitutes professional misconduct and can lead to suspension of the doctor's license. To understand the administrative standards, you can review our{" "}
        <Link href="/editorial-guidelines/" className="text-primary hover:underline font-semibold">
          editorial guidelines
        </Link>
        .
      </span>
    ),
    aText: "Registered medical practitioners must adhere to strict rules under NMC standards: a certificate can only be issued after an actual clinical examination. Backdating or issuing a certificate without an examination constitutes professional misconduct. Review our editorial guidelines for full details."
  },
  {
    q: "Is this medical certificate generator free?",
    a: (
      <span>
        Yes, our medical certificate generator is 100% free with absolutely no hidden charges, premium paywalls, or subscriptions required. Users can customize, preview, and download high-resolution PNG or PDF mockup formats instantly. We do not require any signup, email entry, or account creation to use the tool, ensuring a seamless experience. If you would like to understand how our browser-based tool processes your mockups securely, you can read our complete{" "}
        <Link href="/privacy-policy/" className="text-primary hover:underline font-semibold">
          Privacy Policy
        </Link>{" "}
        which explains our local-only processing guidelines.
      </span>
    ),
    aText: "Yes, our medical certificate generator is 100% free with absolutely no hidden charges, premium paywalls, or subscriptions required. We require no signup, email entry, or account creation to use the tool. Read our Privacy Policy to understand local-only processing."
  },
  {
    q: "Who diagnoses medical conditions?",
    a: (
      <span>
        Under Indian healthcare regulations, only legally registered and licensed medical professionals — such as MBBS, MD, or MS doctors registered with the National Medical Commission (NMC) or State Medical Councils — can clinically diagnose medical conditions and issue valid certificates. AYUSH practitioners are also authorized to diagnose and issue certificates within their specific systems of medicine. Software engines, AI models, and document generators cannot diagnose illnesses or replace human clinical judgment. If you require a medical diagnosis, always consult a registered practitioner in person.
      </span>
    ),
    aText: "Under Indian healthcare regulations, only registered medical professionals (MBBS/MD/MS) registered with the NMC or State Medical Councils can clinically diagnose medical conditions and issue valid certificates. Software engines and generators cannot diagnose illnesses or replace human clinical judgment."
  },
  {
    q: "How to create a medical certificate?",
    a: (
      <span>
        To create a sample medical certificate for design testing or educational props, simply navigate to our{" "}
        <Link href="/" className="text-primary hover:underline font-semibold">
          free generator tool
        </Link>
        . Select from our 15+ authentic Indian hospital templates, input your patient and clinic details on the live editor, and customize the handwriting fonts and ink colors to match your design aesthetic. Once satisfied with the real-time preview, click download to export your high-resolution mockup. All processing happens locally in your browser to protect your data privacy, as outlined in our{" "}
        <Link href="/privacy-policy/" className="text-primary hover:underline font-semibold">
          privacy standards
        </Link>
        .
      </span>
    ),
    aText: "To create a sample medical certificate for design testing, navigate to our free generator tool, select from our 15+ templates, input patient/clinic details on the live editor, customize style, and download the mockup. All processing happens locally in your browser."
  },
  {
    q: "Who is eligible to give a medical certificate?",
    a: (
      <span>
        Only a registered medical practitioner who holds a valid license from the National Medical Commission (NMC) or a State Medical Council in India is legally eligible to issue a medical certificate. The practitioner must possess formal medical qualifications (such as MBBS, MD, or MS) and be in active practice. Rural Medical Practitioners (RMPs) without formal registration are not eligible to issue legally valid certificates. For full details on licensing requirements, refer to our blog post on{" "}
        <Link href="/blog/who-can-issue-medical-certificate-india" className="text-primary hover:underline font-semibold">
          who can issue a medical certificate in India
        </Link>
        .
      </span>
    ),
    aText: "Only a registered medical practitioner holding a valid license from the NMC or a State Medical Council is legally eligible to issue a medical certificate. Rural Medical Practitioners (RMPs) without formal registration are not eligible. Learn more in our blog post."
  },
  {
    q: "Is my information secure when using this tool?",
    a: (
      <span>
        Yes, security and privacy are central to our design. Our generator operates 100% locally in your web browser using client-side JavaScript. No patient names, diagnoses, doctor credentials, or registration numbers you enter are ever uploaded, transmitted, or stored on our servers. Your data stays entirely in your browser window and is permanently cleared when you close the tab. For more information on how we safeguard your browsing session, please read our{" "}
        <Link href="/privacy-policy/" className="text-primary hover:underline font-semibold">
          Privacy Policy
        </Link>{" "}
        or consult our{" "}
        <Link href="/terms/" className="text-primary hover:underline font-semibold">
          terms of use
        </Link>
        .
      </span>
    ),
    aText: "Yes, security and privacy are central to our design. Our generator operates 100% locally in your browser using client-side JavaScript. No details you enter are uploaded, transmitted, or stored on our servers. Read our Privacy Policy for more information."
  },
  {
    q: "What are the different types of medical certificates?",
    a: (
      <span>
        Medical certificates serve various administrative and clinical purposes. The most common type is the **Sick Leave Certificate** (justifying medical absence), followed by the **Medical Fitness Certificate** (confirming health for jobs, sports, or travel), **Form 1A Driving Licence Certificates**, and **Medical Exemption Certificates** (justifying academic or workplace accommodations). Each type utilizes specialized formats and specific legal wording. To see how these formats differ visually, you can explore our comprehensive{" "}
        <Link href="/generator/" className="text-primary hover:underline font-semibold">
          interactive generator templates index
        </Link>
        .
      </span>
    ),
    aText: "Medical certificates serve various purposes: Sick Leave Certificates (justifying absence), Fitness Certificates (confirming health for jobs/sports/travel), Form 1A Driving Licence Certificates, and Medical Exemption Certificates. Explore layouts in our interactive templates index."
  },
  {
    q: "What is the validity of a medical certificate in India?",
    a: (
      <span>
        The legal validity of a medical certificate in India is strictly bound to the exact rest or fitness dates explicitly written by the doctor on the document. A certificate has no ongoing validity once the specified date range has expired. Additionally, the certificate must be presented to your employer or university within a reasonable timeframe (typically 3 to 7 days of returning to duty) to be accepted. For a comprehensive guide on validity rules and submission timelines, read our blog article on{" "}
        <Link href="/blog/what-is-medical-certificate" className="text-primary hover:underline font-semibold">
          medical certificate validity guidelines
        </Link>
        .
      </span>
    ),
    aText: "The validity of a medical certificate in India is strictly bound to the exact rest or fitness dates written by the doctor. A certificate has no ongoing validity once the specified date range has expired. Review validity guidelines in our blog article."
  },
  {
    q: "Can a medical certificate be challenged?",
    a: (
      <span>
        Yes, employers, academic institutions, and insurance companies hold the legal right to verify or challenge any medical certificate they receive. If a document looks suspicious or is missing key details, they can verify the doctor’s registration number on the official{" "}
        <a href="https://www.nmc.org.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline font-semibold">
          NMC website
        </a>
        , contact the clinic directly for confirmation, or refer the case to an independent medical board for evaluation. Presenting a falsified or generated certificate is a serious offense under the{" "}
        <Link href="/terms#disclaimer" className="text-primary hover:underline font-semibold">
          Bharatiya Nyaya Sanhita (BNS) 2023
        </Link>
        .
      </span>
    ),
    aText: "Yes, employers, academic institutions, and insurers hold the legal right to verify or challenge any medical certificate. They can verify doctor credentials on the NMC website or contact the clinic. Presenting a fake certificate is an offense under the BNS 2023."
  },
  {
    q: "How to process a medical certificate?",
    a: (
      <span>
        For HR departments and academic administrators, processing a medical certificate involves a systematic verification checklist. First, verify that the doctor’s full name, credentials, and registration number are clearly legible and registered in the NMC database. Second, ensure the document features an official clinic stamp and original signature. Third, cross-check the dates of illness and return to duty against the employee or student absence records. For a full breakdown of verification protocols, refer to our{" "}
        <Link href="/editorial-guidelines/" className="text-primary hover:underline font-semibold">
          editorial guidelines
        </Link>
        .
      </span>
    ),
    aText: "For HR departments and administrators, processing a medical certificate involves a systematic verification checklist: verify the doctor's registration in the NMC database, ensure it features a clinic stamp and signature, and cross-check unfitness dates. Refer to our editorial guidelines."
  }
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Medical Certificate Generator",
    "url": "https://medicalcertificategenerator.co.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://medicalcertificategenerator.co.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Medical Certificate Generator",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "url": "https://medicalcertificategenerator.co.in/",
    "description": "Free online medical certificate generator with 15+ authentic Indian clinic and hospital templates."
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Generate a Realistic Medical Certificate Sample",
    "description": "Eight simple steps to a realistic, download-ready medical certificate sample — done in under 60 seconds.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Visit the Generator",
        "text": "Head to our free generator — no account, no signup, no payment needed. It loads instantly in your browser."
      },
      {
        "@type": "HowToStep",
        "name": "Choose a Template",
        "text": "Pick from 15+ Indian clinic and hospital formats, each modelled after real prescription pads and certificate styles."
      },
      {
        "@type": "HowToStep",
        "name": "Enter Patient Details",
        "text": "Fill in the patient's name, age, gender, and the reason or diagnosis. All fields are clearly labelled."
      },
      {
        "@type": "HowToStep",
        "name": "Add Doctor Info",
        "text": "Enter the doctor's name, qualifications, registration number, and clinic details for a realistic letterhead."
      },
      {
        "@type": "HowToStep",
        "name": "Set Dates & Rest Period",
        "text": "Add the examination date and the recommended leave duration — specific dates make the certificate look authentic."
      },
      {
        "@type": "HowToStep",
        "name": "Customise the Style",
        "text": "Adjust handwriting style, ink colour, and font settings to match the clinic format you've chosen."
      },
      {
        "@type": "HowToStep",
        "name": "Preview in Real Time",
        "text": "Watch the certificate update live as you type — exactly how it will look when you download it."
      },
      {
        "@type": "HowToStep",
        "name": "Download as PNG",
        "text": "One click exports a high-resolution PNG image, ready for any project, presentation, or demonstration."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.aText
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── 1. HERO SECTION ───────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-24 pb-12 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/6 via-background to-background" />
        <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <m.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-5 px-4 py-1.5 text-sm font-semibold gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> AI-Powered · 15+ Templates · Free
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-5">
            Generate Realistic Medical Certificate<br />
            <span className="text-primary">in Seconds (Free PDF Download)</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Create a realistic medical certificate in seconds. Choose from 15+ authentic Indian hospital formats, edit details, and download PDF instantly. 100% free & customizable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
            {["15+ authentic Indian formats", "Instant live preview", "Free PNG download", "Nothing uploaded to servers"].map((pt) => (
              <span key={pt} className="flex items-center gap-1.5 bg-muted/60 rounded-full px-3 py-1">
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{pt}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            ⚠️ For sample &amp; educational purposes only. Certificates generated here are not legally valid medical documents.{" "}
            <Link href="/terms#disclaimer" className="underline underline-offset-2 hover:text-foreground transition-colors">Read disclaimer</Link>
          </p>
        </m.div>
      </section>

      {/* ── AD UNIT 7 — Above the tool/heading ── */}
      <AdSlot adClient="ca-pub-6410539899255473" adSlot="5661760482" className="my-4 md:my-6" />

      {/* ── 2. INTERACTIVE GENERATOR ────────────────────────────── */}
      <section className="px-4 pb-16">
        <HomeCertGenerator />
      </section>

      {/* ── 3. ABOUT MEDICAL CERTIFICATES ───────────────────────── */}
      <section className="px-4 pb-20 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 pt-16">
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">What is a Medical Certificate Generator?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
               A medical certificate generator is an online tool that produces highly realistic mock documents for presentations, software testing, or educational references. Generate your medical certificate online with AI-powered features safely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Whether you need placeholder templates for <strong>office leave</strong>, <strong>school absence</strong>, or a <strong>fitness certificate</strong>, our tool replicates the exact medical certificate format India uses today. Each template adheres to guidelines outlined by the <a href="https://www.nmc.org.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">National Medical Commission (NMC)</a> regarding practitioner registration and document layout.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Through our advanced system, you can <strong>generate medical certificates online</strong> using AI-powered generation designed to instantly format complex clinical notes according to standards recognized by the <a href="https://mohfw.gov.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">Ministry of Health & Family Welfare</a>.
              </p>
              <div className="mt-4">
                <Link href="/blog/what-is-medical-certificate" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                  Complete guide: What Is a Medical Certificate? <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground mb-3">Common types of medical certificates:</p>
              {certTypes.map((ct) => (
                <div key={ct.type} className="flex gap-3 bg-card border border-border rounded-lg px-4 py-3">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-sm text-foreground">{ct.type}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{ct.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="text-sm font-semibold text-foreground mb-2">When is a medical certificate required?</p>
            <div className="flex flex-wrap gap-2">
              {["Taking sick leave from work", "Applying for insurance claims", "Re-appearing in a missed exam", "Travel medical clearance", "Government job documentation", "Attendance condonation at university"].map((item) => (
                <span key={item} className="text-xs bg-primary/8 text-primary border border-primary/20 rounded-full px-3 py-1">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AD UNIT 1 — Display Responsive (after About section) ── */}
      <AdSlot adClient="ca-pub-6410539899255473" adSlot="9948826561" />

      {/* ── 4. TEMPLATES GRID ──────────────────────────────────── */}
      <section id="templates" className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">15+ Realistic Medical Certificate Templates</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Each template is modelled after a real-world Indian hospital or clinic format — complete with letterhead, patient section, and doctor's signature area. Click any to start editing.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {TEMPLATES.map((template, i) => (
              <m.div key={template.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04, duration: 0.4 }}>
                <Link href={`/generator/${template.id}`}>
                  <div className="group cursor-pointer rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                      <Image src={template.previewImage} alt={template.name} fill sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/12 transition-colors duration-200 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                          Use Template
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm text-foreground text-[10px] font-bold px-2 py-0.5 rounded-full border border-border">#{i + 1}</div>
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5">{template.category}</Badge>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-sm leading-tight text-foreground line-clamp-1">{template.name}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">{template.description}</p>
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LANDING PAGES SECTION ───────────────────────────── */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">
              Generate Medical Certificates for Every Situation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need a sick leave note, a fitness certificate, or a school absence letter — we have a purpose-built template for it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {LANDING_PAGES.map((page, i) => (
              <m.div
                key={page.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <Link href={`/${page.slug}/`}>
                  <div className="group h-full flex flex-col bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground leading-snug mb-1.5 flex-1">
                      {page.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground leading-snug mb-3 line-clamp-2">
                      {page.intro.split(".")[0]}.
                    </p>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-150">
                      Use Template <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ────────────────────────────────────── */}
      <section className="px-4 py-20 bg-muted/10 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">How Our Medical Certificate Generator Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Eight simple steps to a realistic, download-ready certificate — done in under 60 seconds.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map((item, i) => (
              <m.div key={item.step} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="bg-card border border-border rounded-xl p-6 shadow-sm relative">
                <div className="text-5xl font-black text-primary/10 absolute top-3 right-4 leading-none">{item.step}</div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHO USES THIS GENERATOR ──────────────────────────── */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
              Who Uses This Medical Certificate Generator?
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Designed to facilitate sandbox testing, visual mockups, and academic formatting tutorials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Settings,
                title: "Healthcare App Developers",
                desc: "Empower your engineering pipeline by testing patient document workflows, OCR data extraction models, and EHR document upload APIs with highly realistic mock datasets.",
              },
              {
                icon: FileText,
                title: "UI/UX Designers",
                desc: "Enrich your design workflows with premium, high-fidelity mockups of clinic dashboards, hospital billing portals, and mobile healthcare applications.",
              },
              {
                icon: Users,
                title: "Medical Students",
                desc: "Learn about the exact structure, nomenclature, and formatting guidelines required under Indian medical regulatory councils for certificate validation.",
              },
              {
                icon: HelpCircle,
                title: "Content Creators",
                desc: "Create engaging tutorials, compliance reviews, and educational animations around digital document security, medical ethics, and paper formatting standards.",
              },
              {
                icon: ShieldCheck,
                title: "Film & Theatre Teams",
                desc: "Produce authentic-looking prop documents for cinematic storytelling, stage dramas, and creative fiction set in clinical environments.",
              },
              {
                icon: CheckCircle2,
                title: "HR Professionals",
                desc: "Familiarize yourself with standard legal conventions and anatomical layouts of legitimate medical certificates, improving overall verification accuracy.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border/60 rounded-2xl p-6 space-y-4 hover:border-primary/20 transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="inline-flex items-center justify-center p-2.5 bg-primary/10 rounded-xl text-primary group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AD UNIT 2 — Display Responsive (after Who Uses This section) ── */}
      <AdSlot adClient="ca-pub-6410539899255473" adSlot="2325445857" />

      {/* ── 8. DISCLAIMER SECTION ────────────────────────────────── */}
      <section className="px-4 py-16 bg-destructive/5 border-y border-destructive/15">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Shield className="w-12 h-12 text-destructive mx-auto opacity-80" />
          <h2 className="text-2xl font-extrabold text-destructive">Important: For Sample &amp; Educational Purposes Only</h2>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Only a <strong><a href="https://www.nmc.org.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline">licensed, registered doctor (under NMC)</a></strong> can issue a legally valid medical certificate in India. Certificates generated by this tool are <strong>sample documents only</strong> — designed for educational use, UI/UX testing, design demonstrations, and creative projects.
          </p>
          <p className="text-sm text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Using a generated certificate to deceive an employer, institution, or any third party is a serious criminal offence under Indian law and is strictly prohibited. If you're unwell, please visit a real doctor.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs">
            <Link href="/terms#disclaimer" className="font-semibold text-destructive/80 hover:text-destructive underline underline-offset-2 transition-colors">
              Read Full Disclaimer
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/blog/fake-medical-certificate-consequences" className="font-semibold text-destructive/80 hover:text-destructive underline underline-offset-2 transition-colors">
              Legal Consequences of Fake Certificates
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. AUTHORITATIVE REFERENCES (E-E-A-T) ───────────────── */}
      <section className="px-4 py-20 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/60">Authoritative Medical Resources</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Our content and templates are designed in alignment with guidelines provided by leading healthcare authorities in India and globally. For official medical standards, always refer to these primary sources:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="https://www.nmc.org.in/" target="_blank" rel="nofollow noopener noreferrer" className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-primary/20 transition-all group">
              <p className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">National Medical Commission</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed">Official standards for Indian Medical Practitioners (NMC)</p>
            </a>
            <a href="https://www.mohfw.gov.in/" target="_blank" rel="nofollow noopener noreferrer" className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-primary/20 transition-all group">
              <p className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">Ministry of Health (MoHFW)</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed">Central health regulations and Telemedicine guidelines India</p>
            </a>
            <a href="https://www.who.int/" target="_blank" rel="nofollow noopener noreferrer" className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-primary/20 transition-all group">
              <p className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">World Health Organization</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed">Global public health standards and certification norms</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── 10. UPGRADED FAQS ACCORDION SECTION ───────────────────── */}
      <section className="px-4 py-20 bg-muted/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about medical certificates and our sample generator.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm divide-y divide-border/60">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="py-6 first:pt-0 last:pb-0 flex gap-4 md:gap-6 items-start hover:bg-muted/5 transition-colors duration-200 rounded-xl px-2">
                {/* Numbered circle */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/25">
                  {idx + 1}
                </div>
                {/* Question & Answer */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-base md:text-lg font-bold text-foreground leading-snug">
                    {faq.q}
                  </h3>
                  <div className="bg-muted/40 dark:bg-muted/10 border border-border/40 rounded-2xl p-4 text-[14px] md:text-[15px] text-muted-foreground leading-relaxed shadow-xs">
                    {faq.a}
                    <div className="mt-3 pt-2 border-t border-border/40 flex items-center gap-4 text-[10px] text-muted-foreground/60">
                      <span>Reviewed by: Editorial Team</span>
                      <span>·</span>
                      <span>Last Updated: May 2026</span>
                      <span>·</span>
                      <span>References: NMC Act 2019 / BNS 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD UNIT 3 — In-article (after FAQ accordion section) ── */}
      <AdSlot adClient="ca-pub-6410539899255473" adSlot="4413428858" layout="in-article" />

      {/* ── 11. FINAL CTA SECTION ───────────────────────────────── */}
      <section className="px-4 py-20 bg-background text-center">
        <div className="max-w-3xl mx-auto relative bg-gradient-to-br from-primary/5 via-background to-background border border-border rounded-3xl p-8 md:p-12 space-y-6 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl" />

          <div className="relative space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">Ready to Generate Your Certificate?</h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              No account needed. No payment required. Pick a template, fill in your details, and download in under 60 seconds.
              Whether you're a student, developer, designer, or just curious — give it a try.
            </p>
            <div className="pt-2">
              <Link href="/generator/formal-cert">
                <Button size="lg" className="gap-2 font-bold text-base shadow-lg shadow-primary/20 px-10 h-13">
                  Create Certificate Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <p className="text-[11px] text-muted-foreground mt-4">Free · No signup · Works instantly · Sample purposes only</p>
          </div>
        </div>
      </section>

      {/* ── 12. OTHER CERTIFICATE GUIDES SECTION ───────────────── */}
      <section className="px-4 py-16 bg-muted/20 border-t border-border">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
              Other Government Certificate Guides
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Explore our comprehensive, state-wise resource databases and eligibility checkers for other major Indian certificates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xs hover:border-primary/30 transition-all duration-300 group">
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary shrink-0" />
                OBC NCL Certificate Guide
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Complete guide to OBC Non-Creamy Layer parameters, gross annual family income rules, required documents, and SDM/Tehsildar renewal.
              </p>
              <Link href="/obc-non-creamy-layer-certificate" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-xs hover:border-primary/30 transition-all duration-300 group">
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary shrink-0" />
                EWS Certificate & Checker
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Check your EWS reservation category eligibility instantly using our interactive five-step property and income evaluation tool.
              </p>
              <Link href="/ews-certificate" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                Use Eligibility Checker <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AD UNIT 6 — Multiplex (after Other Certificate Guides section) ── */}
      <AdSlot adClient="ca-pub-6410539899255473" adSlot="3610251563" layout="autorelaxed" />

      {/* ── 13. INFO SECTION & FOOTER ───────────────────────────── */}
      <HomeInfoSection />
      <Footer />
    </div>
  );
}
