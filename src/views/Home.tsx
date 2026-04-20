"use client";

import Link from "next/link";
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
  { icon: Wand2, title: "AI-Powered Handwriting", desc: "Our engine simulates real handwriting with per-character wobble and random ink pressure — each certificate looks genuinely hand-written." },
  { icon: Zap, title: "Lightning Fast & Easy", desc: "No design skills needed. Just fill in a simple form and generate your realistic sample document in under 60 seconds." },
  { icon: Settings, title: "100% Customisable", desc: "Adjust doctor details, diagnosis, dates, handwriting style, ink colour, and hospital name — every field is fully editable." },
  { icon: Sparkles, title: "Ideal for UI Testing & Demos", desc: "Perfect for developers and designers who need realistic placeholder medical documents for healthcare software testing — without using real patient data." },
  { icon: Shield, title: "Zero Data Storage", desc: "Everything runs entirely in your browser. Nothing is uploaded to any server — your input stays 100% local and private." },
];

const useCases = [
  {
    title: "School & College Students",
    desc: "Missed an exam due to illness? Understand exactly what a medical certificate for college should contain — so you know what to ask your doctor for when you visit.",
    icon: BookOpen,
    blog: { href: "/blog/medical-certificate-for-school", label: "Guide for Students →" },
  },
  {
    title: "Office & Sick Leave",
    desc: "Your HR team will ask for a sick leave certificate from a registered doctor. See a real-world format first so you know what a valid certificate looks like before your clinic visit.",
    icon: Briefcase,
    blog: { href: "/blog/how-to-get-sick-leave-certificate", label: "How to Get a Sick Leave Certificate →" },
  },
  {
    title: "Travel Fitness Certificate",
    desc: "Airlines, visa offices, and travel agencies sometimes require a fitness-to-travel certificate. Understand the format and required fields before your doctor appointment.",
    icon: Plane,
    blog: null,
  },
  {
    title: "Insurance Claims",
    desc: "Insurance companies ask for a medical certificate alongside your claim. Our sample shows you what information your doctor needs to include for smooth claim processing.",
    icon: Heart,
    blog: null,
  },
  {
    title: "Developers & Designers",
    desc: "Building a healthcare app or HR management system? Use our tool to generate realistic placeholder documents for UI testing — without touching real patient data.",
    icon: Code,
    blog: { href: "/blog/medical-certificate-ui-design", label: "Developer's Design Guide →" },
  },
  {
    title: "Content Creators & Filmmakers",
    desc: "Need a realistic prop document for a short film, YouTube sketch, or social media content? Generate an authentic-looking certificate for your creative storytelling.",
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
    a: "A medical certificate must be filled by a registered doctor — not the patient. It should include the patient's name, age, and gender; the date of examination; the diagnosis or reason for leave; the recommended rest period; and the doctor's name, qualifications, registration number, signature, and clinic stamp. Our generator pre-fills all these fields so you can see exactly how a complete certificate should look.",
    link: { href: "/blog/what-is-medical-certificate", label: "What a Medical Certificate Must Contain →" },
  },
  {
    q: "What does a medical certificate look like?",
    a: "A typical Indian medical certificate has three parts. The header (letterhead) shows the clinic or hospital name, the doctor's name, qualifications, registration number, and contact details. The middle section includes the patient's name, age, gender, date of visit, diagnosis, and recommended rest period. The bottom section has the doctor's signature, official stamp, and sometimes a follow-up date. Our tool shows you exactly how a medical certificate looks across 15+ different Indian clinic formats.",
    link: null,
  },
  {
    q: "How to get a medical certificate from a doctor offline?",
    a: "Visit any registered MBBS or MD doctor — at a government hospital, private clinic, or your family physician. Describe your symptoms honestly; the doctor will examine you. After the consultation, explicitly ask for a medical certificate specifying the number of rest days needed. Before you leave, check that the certificate includes the doctor's registration number, their signature, and the clinic's official stamp.",
    link: { href: "/blog/how-to-get-sick-leave-certificate", label: "Full Step-by-Step Guide →" },
  },
  {
    q: "How to make a medical certificate for college?",
    a: "To get a medical certificate for college or university, visit a registered doctor during your illness period (not after recovery, ideally). Ask for a certificate specifying the exact dates you were unwell. Some universities require certificates from a government hospital specifically — check your institution's rules before your visit. Submit the certificate to the college office within the deadline stated in your ordinance.",
    link: { href: "/blog/medical-certificate-for-school", label: "Medical Certificate for School & College →" },
  },
  {
    q: "What is Medical Certificate Form 1A?",
    a: "Medical Certificate Form 1A is a standardised government form in India used primarily for driving licence medical fitness certification under the Motor Vehicles Act, and for certain government employment health assessments. It requires a physical examination including vision, hearing, blood pressure, and cardiovascular checks. This is different from a general sick leave or fitness certificate. If you've been asked for Form 1A, you'll need to visit a registered doctor — usually at a government hospital or an authorised medical centre.",
    link: null,
  },
  {
    q: "Is a medical certificate generator tool legal to use?",
    a: "Yes — generating sample or draft certificates for educational purposes, UI testing, creative projects, or personal understanding is perfectly legal. What is not legal is using any generated certificate as a real document to deceive an employer, institution, or person. That constitutes fraud under Indian law (IPC Sections 420, 468, 471) with penalties of up to 7 years in prison. Our tool is a legitimate sample generator — all outputs include a DEMO watermark and are clearly for demonstration purposes only.",
    link: { href: "/blog/fake-medical-certificate-consequences", label: "Legal Consequences of Fake Certificates →" },
  },
  {
    q: "Are these certificates valid for sick leave?",
    a: "No. Certificates generated by this tool are not valid for sick leave, insurance claims, or any official purpose. To get a valid sick leave certificate, you must visit a licensed, registered doctor who will examine you and issue the certificate in their official capacity. Think of our tool as a reference — it shows you what a real certificate should look like, so you know what to ask for when you visit your doctor.",
    link: { href: "/blog/who-can-issue-medical-certificate-india", label: "Who Can Issue a Medical Certificate? →" },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/generator/formal-cert">
              <Button size="lg" className="gap-2 font-bold text-base shadow-lg shadow-primary/25 px-8 h-12">
                Generate Certificate Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="#templates">
              <Button size="lg" variant="outline" className="gap-2 font-semibold h-12 px-8">
                Browse Templates
              </Button>
            </a>
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
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">What Is a Medical Certificate?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A quick primer — so you know exactly what you're looking for before you visit your doctor or generate a sample.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                A medical certificate is a formal document issued by a <strong>licensed, registered doctor</strong> that confirms a patient's health status. It's used to justify sick leave, support insurance claims, prove fitness for an activity, or explain a student's absence.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Think of it as a doctor's official written statement about your health — addressed to your employer, college, or government office.
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
                      <img src={template.previewImage} alt={template.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">Who Uses This Tool and Why?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From students and employees to developers and filmmakers — here's how different people use our medical certificate generator.
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

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card border border-border p-5 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                {faq.link && (
                  <Link href={faq.link.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                    {faq.link.label}
                  </Link>
                )}
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
