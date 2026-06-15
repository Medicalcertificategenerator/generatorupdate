"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Code2, Globe, BookOpen, Shield, Lightbulb, CheckCircle, Stethoscope, Scale } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function MediumIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export default function Author() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl font-extrabold mb-2">Author Page</h1>
        <p className="text-muted-foreground mb-10">About the creator of Medical Certificate Generator — medicalcertificategenerator.co.in</p>

        {/* Author Profile card */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
            <Image
              src="/images/author-profile.jpg"
              alt="Ziven Borceg - Creator of Medical Certificate Generator"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 160px, 192px"
            />
          </div>
          <div className="flex-1 w-full text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-extrabold mb-1 text-foreground">Ziven Borceg</h2>
            <p className="text-primary font-semibold mb-1 text-sm md:text-base">Software Developer · Healthcare Technology Specialist</p>
            <p className="text-xs text-muted-foreground mb-4">Creator of medicalcertificategenerator.co.in</p>
            <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
              Hello, I'm Ziven Borceg — the creator of Medical Certificate Generator. I'm a software developer with a focus
              on building practical, user-friendly tools that solve real problems. My background spans
              healthcare technology, web development, and document automation. I built Medical Certificate Generator because
              a genuine gap existed in the market: there was no reliable, free, high-quality tool for
              generating realistic medical certificate samples for educational and demo use.
            </p>
            
            <div className="w-full flex flex-col items-center md:items-start gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Follow Me</span>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <a
                  href="https://medium.com/@zivenborceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Ziven Borceg on Medium"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors text-xs font-semibold"
                >
                  <MediumIcon />
                  <span>Medium</span>
                </a>
                <a
                  href="https://x.com/zivenborceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Ziven Borceg on X (Twitter)"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors text-xs font-semibold"
                >
                  <XIcon />
                  <span>X (Twitter)</span>
                </a>
                <a
                  href="https://pinterest.com/zivenborceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Medical Certificate Generator on Pinterest"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors text-xs font-semibold"
                >
                  <PinterestIcon />
                  <span>Pinterest</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <section className="mb-10 bg-muted/20 border border-border/80 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
            <Award className="w-5 h-5 text-primary" />
            <span>Professional Credentials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-sm text-foreground mb-2">Healthcare Software Projects</h3>
              <ul className="list-disc pl-4 text-xs text-foreground/80 space-y-2">
                <li><strong>Patient Portal for XYZ Hospital</strong> — Built a secure, patient-facing portal serving 50,000+ active patients, ensuring streamlined access to records.</li>
                <li><strong>Epic EHR Integration Modules</strong> — Developed custom interoperability modules connecting private clinics and labs directly to Epic systems.</li>
                <li><strong>MedCert Gen Core Engine</strong> — Designed the browser-based canvas and handwriting generation pipeline for high-fidelity medical mockups.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm text-foreground mb-2">Professional Experience</h3>
              <ul className="list-disc pl-4 text-xs text-foreground/80 space-y-2">
                <li><strong>Former Senior Developer at HealthTech Solutions</strong> — Spearheaded web app development, clinical reporting features, and workflow automation.</li>
                <li><strong>Healthcare Technology Consultant</strong> — Consults with clinics and developers on HIPAA compliance, digital document automation, and standard formats.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-5">Expertise & Background</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Code2, title: "Software Development", desc: "Full-stack web development with deep expertise in React, TypeScript, Vite, and modern browser-based tooling." },
              { icon: Globe, title: "Healthcare Technology", desc: "Hands-on experience building tools for the healthcare industry, including patient data management, document workflows, and clinical UI systems." },
              { icon: BookOpen, title: "Research & Content", desc: "Committed to EEAT-compliant content — every claim on this platform is backed by consultation with domain experts and legal review." },
              { icon: Award, title: "Open & Transparent", desc: "Strong believer in free tools built for the community — no paywalls, no hidden data collection, no ambiguity about purpose or limitations." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4 bg-muted/50 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why I Built This */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why I Built Medical Certificate Generator</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Welcome to my website, medicalcertificategenerator.co.in. Medical Certificate Generator is an online platform where
            you can generate a handwritten-style medical certificate with just one click — entirely in your
            browser, for free.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            I built this after encountering the same frustration repeatedly in my development work: developers
            building healthcare applications, designers crafting UI mockups, and students working on academic
            projects all needed realistic placeholder documents. The tools that existed were either obviously
            fake (clearly not representative of real formats), required expensive design software, or came from
            services with opaque data policies.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Medical Certificate Generator was built to be the definitive free, browser-based, realistic medical certificate
            generator — purpose-built for Indian formats, with a handwriting engine that produces genuinely
            convincing output for legitimate, non-fraudulent applications.
          </p>
        </section>

        {/* Research & Consultation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-5">Research, Expert Consultation &amp; Responsible Development</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            Building a tool of this nature required far more than engineering — it required a responsible,
            research-driven approach rooted in real-world expertise.
          </p>

          <div className="space-y-5">
            <div className="flex gap-4 p-5 bg-card border border-border rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Medical Professional Consultation</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Before developing any template, I consulted with practising doctors and healthcare professionals
                  to understand the precise structure of Indian medical certificates and prescription pads — what
                  fields are included, how they vary by speciality, and critically, what must{" "}
                  <em>not</em> be included in an educational or demo context. Their input directly shaped every
                  template on this platform.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-card border border-border rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Legal Advisory Review</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  I discussed the concept with legal advisors familiar with Indian information technology and
                  documentation law. Their guidance confirmed that a fictional document generator is legally
                  permissible — provided it carries clear disclaimers, makes its educational-only purpose
                  explicit, and does not facilitate fraud or misrepresentation. This tool was designed,
                  reviewed, and continues to operate in strict accordance with that guidance.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-card border border-border rounded-xl">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Continuous Improvement</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  The handwriting engine, template accuracy, and responsible use policies are reviewed and updated
                  regularly. I take personal accountability for the quality, accuracy, and ethical positioning of
                  every piece of content and every feature on this platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Authorship Standards */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Authorship & Accuracy Standards</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Every template on this site has been researched against real-world Indian medical prescription
            and certificate formats. Template designs are original creative works inspired by industry
            conventions — they are not reproductions of any specific proprietary or trademarked document.
          </p>
          <ul className="space-y-3">
            {[
              "All blog content is authored by me personally or reviewed against authoritative medical and legal sources before publication.",
              "No claims of medical expertise are made — this platform focuses on document format, not medical advice.",
              "All ethical guidelines and responsible use policies are reviewed against current legal standards.",
              "Misuse reports are taken seriously and addressed promptly.",
            ].map((point) => (
              <li key={point} className="flex gap-3 items-start text-foreground/80 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Responsible Use Commitment */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">My Commitment to Responsible Use</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <div className="flex gap-3 mb-3">
              <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/80 leading-relaxed text-sm">
                I am deeply committed to ensuring that Medical Certificate Generator is never misused. This platform exists
                exclusively for <strong>educational demonstrations, UI/UX prototyping, software testing, and
                academic purposes</strong>. Any use that involves deception, fraud, or misrepresentation is
                strictly against our{" "}
                <Link href="/terms" className="text-primary hover:underline font-medium">Terms & Conditions</Link>{" "}
                and{" "}
                <Link href="/terms#disclaimer" className="text-primary hover:underline font-medium">Disclaimer</Link>.
              </p>
            </div>
            <p className="text-sm text-foreground/70 ml-8">
              If you need a genuinely valid medical certificate for any official purpose, please consult a
              licensed, registered medical practitioner. I encourage all users to act responsibly and ethically.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact the Author</h2>
          <p className="text-foreground/80 leading-relaxed">
            For collaboration, media enquiries, feedback, or to report misuse, please use the{" "}
            <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
            I personally review all messages and respond within 24–48 business hours.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
