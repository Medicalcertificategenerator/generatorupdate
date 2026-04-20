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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TEMPLATES } from "@/types/certificate";
import { LANDING_PAGES } from "@/data/landingPages";
import { HomeGenerator } from "@/components/home/HomeGenerator";

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
  { q: "What is the quickest medical certificate to get?", a: "A sick leave certificate for a minor illness is usually the quickest to obtain from a registered clinic or hospital." },
  { q: "What are the rules for giving a medical certificate?", a: "A valid medical certificate must be issued after an actual examination by a registered doctor, detailing accurate diagnosis, patient information, and clearly stated rest periods." },
  { q: "Which AI is used for medical documentation?", a: "Clinical professionals use specialized medical language models. Our generator uses custom tech to simulate realistic document formatting for educational templates." },
  { q: "What are the 4 types of AI?", a: "Generally, AI is classified into Reactive Machines, Limited Memory, Theory of Mind, and Self-aware AI." },
  { q: "What are the three types of certificates?", a: "The three primary medical certificates are Sick Leave, Fitness Certificate, and specialized government forms like Form 1A for driving licenses." },
  { q: "What are the 10 types of doctors?", a: "Common ones include Physicians, Surgeons, Pediatricians, Psychiatrists, Cardiologists, Neurologists, Orthopedists, Dermatologists, Oncologists, and Gynecologists." },
  { q: "How to generate a medical certificate?", a: "Select a template, fill patient/doctor details, use AI assist for formatting, preview, and download as a PDF or PNG instantly." },
  { q: "What are the limits of artificial intelligence?", a: "AI lacks human empathy, cannot perform physical clinical examinations, and cannot replace the legal authority of a registered human doctor." },
  { q: "What is the purpose of a medical certificate?", a: "It acts as legal or official proof that a patient was medically unfit for work or study during a specific timeframe." },
  { q: "What are 10 ways AI is used today in healthcare?", a: "AI aids in medical imaging, drug discovery, predictive analytics, robotic surgery, virtual nursing assistants, administrative workflow, fraud detection, dosage error reduction, clinical trials, and health monitoring." },
  { q: "Can I download the certificate as a PDF?", a: "Yes, our medical certificate generator allows you to easily preview and download your realistic certificate as a high-quality PDF instantly." },
  { q: "Which AI is best for medical documentation?", a: "Nuance DAX and Google Cloud Healthcare AI are prominent, but for generating presentation mockups, our tailored document generator is incredibly effective." },
  { q: "What is the best reason for a medical certificate?", a: "Standard ailments like viral fever, acute gastroenteritis, or severe migraines are universally accepted common clinical reasons for general leave." },
  { q: "How is a medical certificate made?", a: "A real certificate is handwritten or printed by a registered doctor after evaluation. Our tool replicates this by merging your input data with digitized authentic template structures." },
  { q: "Is this medical certificate generator free?", a: "Yes, our generator is 100% free with no hidden charges, signups, or subscriptions required." },
  { q: "Can ChatGPT do a medical diagnosis?", a: "No, ChatGPT and other AIs cannot officially or safely diagnose medical conditions; always consult a licensed doctor for true medical evaluation." },
  { q: "What are the 4 rules of doctors?", a: "The core principles of medical ethics are Autonomy, Beneficence, Non-maleficence, and Justice." },
  { q: "Is my information secure when using this tool?", a: "Absolutely. Our tool processes everything locally in your browser. No data is stored, uploaded, or tracked on any external servers." },
  { q: "What are the different types of medical certificates?", a: "The most common types include sick leave, fitness to work, travel fitness, sports clearance, and vaccination certificates." },
  { q: "What is a medical certificate generator?", a: "It is an online platform that allows users to generate highly realistic, format-accurate dummy medical certificates for educational, testing, or demonstration purposes." },
  { q: "What are the 6 main types of AI?", a: "Narrow AI, General AI, Superintelligent AI, Reactive Machines, Limited Memory, and Deep Learning based networks." },
  { q: "What are the 10 medical ethics?", a: "Beyond the core 4 (autonomy, beneficence, non-maleficence, justice), others include honesty, confidentiality, competence, professional boundaries, respect, and informed consent." },
  { q: "Why is it important to have a certificate?", a: "It officially validates your health status, ensuring employers or schools have a credible record for approving leave or benefits." },
  { q: "What is the validity of a medical certificate?", a: "Validity strictly covers the dates explicitly mentioned by the doctor. Unless stated as permanent, it does not guarantee ongoing fitness or illness." },
  { q: "What is the reason for a medical certificate?", a: "To protect the rights of sick individuals to rest, to prevent communicable disease spread in workplaces, and to maintain official records." },
  { q: "Can AI generate a medical certificate?", a: "Yes, our web tool can instantly generate simulated, hyper-realistic formatted medical certificates for non-official, mockup use cases." },
  { q: "How many days can I go without a sick note?", a: "It depends on local laws and company policy. Many companies require a medical certificate for absences extending beyond 2 or 3 consecutive days." },
  { q: "Can a medical certificate be challenged?", a: "Yes, an employer has the right to challenge a suspicious certificate by verifying the registration number or seeking an independent medical board review." },
  { q: "What are the 5 applications of AI in healthcare?", a: "Disease diagnosis assistance, personalized medicine, medical imaging analysis, clinical trial research, and hospital workflow optimization." },
  { q: "Who diagnoses medical conditions?", a: "Only legally registered and licensed medical professionals (like an MBBS/MD doctor) can clinically diagnose conditions and issue valid certificates." },
  { q: "Which AI can generate certificates?", a: "Our custom web-based medical certificate generator is specialized in producing authentic-looking template outputs instantly." },
  { q: "How to create a medical certificate?", a: "Select from our 15+ Indian hospital templates, input patient and dummy diagnosis data, verify styling, and download as PDF." },
  { q: "What are 7 types of AI?", a: "Based on capabilities: Narrow AI, General AI, Super AI. Based on functionality: Reactive, Limited Memory, Theory of Mind, Self-Aware." },
  { q: "What are red flags for doctors?", a: "Issuing certificates without physical examination, backdating certificates excessively, or charging specifically solely for the certificate." },
  { q: "Is this a legally valid medical certificate?", a: "No. The certificates generated by our tool are mockups intended strictly for UI/UX testing, film props, and educational demonstration." },
  { q: "How long can you use a medical certificate?", a: "You can use it solely for the duration specified on the document. It generally loses its purpose once that time window expires." },
  { q: "How many days will it take to make a medical certificate?", a: "With a real doctor, it takes about 15-30 minutes during consultation. With our online generator, it takes less than 60 seconds." },
  { q: "What is the validity of a medical certificate in India?", a: "The rest period granted is explicit. Form 1A certificates for licenses are typically valid up to 1 year for submission." },
  { q: "What are AI 2 examples in healthcare?", a: "IBM Watson for oncology insights and Google's algorithms for detecting eye diseases in retinal scans." },
  { q: "How to make a medical certificate at home?", a: "You cannot legally make a valid medical certificate at home, but you can securely generate realistic demo templates effortlessly using our free web tool." },
  { q: "What is the most commonly used type of AI?", a: "Artificial Narrow Intelligence (ANI), which includes systems like Apple Siri, Google Assistant, and focused web applications like our generator." },
  { q: "What does 'AI Assist' do?", a: "In our system, AI Assist helps auto-format the diagnosis language and adjust layout spacing to look as natural and authentic as possible." },
  { q: "Is this a real or sample medical certificate generator?", a: "It is solely a sample medical certificate generator designed to mimic real-world layouts without carrying any legal or medical validity." },
  { q: "Can I use AI for medical diagnosis?", a: "No, AI is for informational purposes only. It cannot replace a human doctor's assessment and legal diagnostic authority." },
  { q: "Who is eligible to give a medical certificate?", a: "A licensed medical practitioner registered with the National Medical Commission (NMC) or appropriate regional medical council." },
  { q: "Which are the top 5 AI tools for healthcare?", a: "Epic Systems, IBM Watson Health, Enlitic, Zebra Medical Vision, and PathAI are industry leaders for institutional healthcare." },
  { q: "How to use AI to create a certificate?", a: "Simply input your desired dataset into our generator, and our engine handles the complex text wobble, simulation, and structural layout." },
  { q: "How is artificial intelligence used in medical diagnosis?", a: "It analyzes x-rays, MRIs, and pathological data at high speeds, detecting anomalies early to assist doctors in their final diagnosis." },
  { q: "What are the four types of medical records?", a: "Electronic Health Records (EHR), Personal Health Records (PHR), Electronic Medical Records (EMR), and traditional paper charts/forms." },
  { q: "What is the 30% rule for AI?", "a": "It generally refers to guidelines suggesting AI shouldn't handle more than 30% of critical decision-making processes autonomously without human oversight." },
  { q: "What are 10 types of AI?", "a": "Generally covers Narrow, General, Super, Reactive, Limited Memory, Theory of Mind, Self-aware, Symbolic, Connectionist, and Evolutionary AI." },
  { q: "How to process a medical certificate?", "a": "For HR: cross-check dates, verify the doctor's registration number (NMC database), examine the clinic stamp, and file the document in employee records." },
  { q: "What are the benefits of a medical certificate?", "a": "It legally protects your health-related absence, secures medical event-based compensations (like insurance), and justifies educational deferments." },
];

export default function Home() {

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Generate a Medical Certificate Online",
    "description": "Generate a highly realistic placeholder medical certificate for presentation and UI testing in a few simple steps.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Choose a Template",
        "text": "Select one of the 15+ authentic Indian clinic formats."
      },
      {
        "@type": "HowToStep",
        "name": "Fill Details",
        "text": "Enter patient, doctor, and diagnosis details into the form."
      },
      {
        "@type": "HowToStep",
        "name": "Download PDF",
        "text": "Preview the document and download the high-resolution PDF for free."
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
        "text": f.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-24 pb-20 text-center overflow-hidden">
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
          <div className="flex flex-wrap items-center justify-center gap-2 mb-7 text-sm text-muted-foreground">
            {["15+ authentic Indian formats", "Instant live preview", "Free PNG download", "Nothing uploaded to servers"].map((pt) => (
              <span key={pt} className="flex items-center gap-1.5 bg-muted/60 rounded-full px-3 py-1">
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{pt}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <a href="#templates">
              <Button size="lg" variant="outline" className="gap-2 font-semibold h-12 px-8">
                Browse Templates
              </Button>
            </a>
          </div>
          
          <div className="w-full text-left mb-8">
            <HomeGenerator />
          </div>

          <p className="text-xs text-muted-foreground mt-4 max-w-lg mx-auto">
            ⚠️ For sample &amp; educational purposes only. Certificates generated here are not legally valid medical documents.{" "}
            <Link href="/disclaimer" className="underline underline-offset-2 hover:text-foreground transition-colors">Read disclaimer</Link>
          </p>
        </m.div>
      </section>

      {/* ── ABOUT MEDICAL CERTIFICATES ─────────────────────────── */}
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
                Whether you need placeholder templates for <strong>office leave</strong>, <strong>school absence</strong>, or a <strong>fitness certificate</strong>, our tool replicates the exact medical certificate format India uses today. It includes watermarks, custom letterheads, and authentic diagnosis phrasing.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Through our advanced system, you can <strong>generate medical certificates online</strong> using AI-powered generation designed to instantly format complex clinical notes and apply realistic hand-drawn signature effects.
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

      {/* ── TEMPLATES GRID ─────────────────────────────────────── */}
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

      {/* ── LANDING PAGES SECTION ──────────────────────────────── */}
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

      {/* ── USE CASES ──────────────────────────────────────────── */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">Where Can You Use a Medical Certificate?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A clear breakdown of exactly where these documents are required, and the core benefits of using our medical certificate templates.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((card) => (
              <div key={card.title} className="group h-full flex flex-col bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 flex-shrink-0">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-foreground leading-tight mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{card.desc}</p>
                {card.blog && (
                  <Link href={card.blog.href} className="mt-4 text-xs font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all duration-150">
                    {card.blog.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BENEFITS SECTION ───────────────────────────────────── */}
      <section className="px-4 py-16 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-6">Benefits of Using Our Medical Certificate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 border border-border rounded-xl">
              <CheckCircle className="w-8 h-8 text-green-500 mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Instant Downloads</h3>
              <p className="text-sm text-muted-foreground">Get your documents immediately in high-resolution PDF or PNG formatting.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Highly Authentic</h3>
              <p className="text-sm text-muted-foreground">Realistic handwriting and formatting make these the best mockups available.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <Sparkles className="w-8 h-8 text-purple-500 mb-3 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Free & No Signup</h3>
              <p className="text-sm text-muted-foreground">Access all features without entering your email or making a payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section className="px-4 py-20">
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

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="px-4 py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Trusted by Thousands of Users</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">See what students, professionals, and developers are saying about our tool.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <m.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className={`w-4 h-4 ${si < t.stars ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES & BENEFITS ──────────────────────────── */}
      <section className="px-4 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Key Features &amp; Benefits</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to create convincing placeholder and sample documents — fast, free, and in your browser.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((f, i) => (
              <m.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ─────────────────────────────────────────── */}
      <section className="px-4 py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-5 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Generate a Realistic Medical Certificate in Seconds</h2>
          <p className="text-lg opacity-85 max-w-2xl mx-auto mb-4 leading-relaxed">
            Our AI-powered rendering engine handles every detail — realistic handwriting simulation, authentic layout formatting, and smart text placement. You just fill in the details.
          </p>
          <ul className="text-sm opacity-80 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mt-8">
            {["Per-character handwriting variation", "Authentic ink bleed & pressure simulation", "Smart layout per template"].map((point) => (
              <li key={point} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/generator/formal-cert">
              <Button size="lg" variant="secondary" className="gap-2 font-bold px-8">
                Try It Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Why Choose Our Tool Over Others?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We didn't just build a template filler — we built the most realistic medical certificate generator available online.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-3 p-5 bg-card border border-border rounded-xl shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCTOR VERIFICATION & AUTHENTICITY ─────────────────── */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">What Makes a Medical Certificate Authentic?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A certificate is only as valid as the doctor who signs it. Here's exactly what to check before you leave your clinic — so your leave or claim doesn't get rejected.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {doctorVerification.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our sample certificates include all three elements — so you can see at a glance how a complete, properly formatted certificate should look.
              <br className="hidden sm:block" />
              <Link href="/blog/who-can-issue-medical-certificate-india" className="text-primary font-semibold hover:underline ml-1">
                Who Can Issue a Medical Certificate in India? →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────────── */}
      <section className="px-4 py-16 bg-destructive/5 border-y border-destructive/15">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-10 h-10 text-destructive mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-extrabold text-destructive mb-4">Important: For Sample &amp; Educational Purposes Only</h3>
          <p className="text-sm text-foreground/80 leading-relaxed mb-4">
            Only a <strong>licensed, registered doctor</strong> can issue a legally valid medical certificate in India. Certificates generated by this tool are <strong>sample documents only</strong> — designed for educational use, UI/UX testing, design demonstrations, and creative projects.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed mb-4">
            Using a generated certificate to deceive an employer, institution, or any third party is a serious criminal offence under Indian law and is strictly prohibited. If you're unwell, please visit a real doctor.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Link href="/disclaimer" className="text-xs font-semibold text-destructive/80 hover:text-destructive underline underline-offset-2 transition-colors">
              Read Full Disclaimer
            </Link>
            <span className="text-xs text-muted-foreground">·</span>
            <Link href="/blog/fake-medical-certificate-consequences" className="text-xs font-semibold text-destructive/80 hover:text-destructive underline underline-offset-2 transition-colors">
              Legal Consequences of Fake Certificates
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE FAQs ───────────────────────────────── */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about medical certificates and our sample generator.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card border border-border p-5 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="text-[15px] font-bold text-foreground mb-2 leading-snug">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────── */}
      <section className="px-4 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-5">Ready to Generate Your Certificate?</h2>
          <p className="text-muted-foreground text-lg mb-3">
            No account needed. No payment required. Pick a template, fill in your details, and download in under 60 seconds.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Whether you're a student, developer, designer, or just curious — give it a try.
          </p>
          <Link href="/generator/formal-cert">
            <Button size="lg" className="gap-2 font-bold text-base shadow-lg shadow-primary/25 px-10 h-13">
              Create Certificate Now <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <p className="text-xs text-muted-foreground mt-4">Free · No signup · Works instantly · Sample purposes only</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
