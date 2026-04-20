"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Code2, Globe, BookOpen, Shield, Lightbulb, CheckCircle, Stethoscope, Scale } from "lucide-react";
import Link from "next/link";

export default function Author() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl font-extrabold mb-2">Author Page</h1>
        <p className="text-muted-foreground mb-10">About the creator of Medical Certificate Generator — medicalcertificategenerator.co.in</p>

        {/* Author card */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-10 flex gap-6 items-start">
          <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl font-black flex-shrink-0 select-none">
            ZB
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">Ziven Borceg</h2>
            <p className="text-primary font-semibold mb-1">Software Developer · Healthcare Technology · Tool Creator</p>
            <p className="text-xs text-muted-foreground mb-4">Creator of medicalcertificategenerator.co.in</p>
            <p className="text-foreground/80 leading-relaxed">
              Hello, I'm Ziven Borceg — the creator of Medical Certificate Generator. I'm a software developer with a focus
              on building practical, user-friendly tools that solve real problems. My background spans
              healthcare technology, web development, and document automation. I built Medical Certificate Generator because
              a genuine gap existed in the market: there was no reliable, free, high-quality tool for
              generating realistic medical certificate samples for educational and demo use.
            </p>
          </div>
        </div>

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
                <Link href="/disclaimer" className="text-primary hover:underline font-medium">Disclaimer</Link>.
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
