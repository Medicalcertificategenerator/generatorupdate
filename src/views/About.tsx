"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Target, Users, Award, Stethoscope, Scale, AlertTriangle, HeartHandshake, CheckCircle, Lightbulb, Sparkles, MapPin, Zap } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          We are a team of developers, researchers, and healthcare-technology enthusiasts who built this{" "}
          <strong className="text-foreground">Medical Certificate Generator</strong> to serve a specific,
          legitimate need: helping developers, students, designers, and educators create realistic sample
          documents for educational, demo, and non-fraudulent purposes — completely free of charge.
        </p>

        {/* Who Created It */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Who Created This Tool</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            This platform was founded by <strong>Ziven Borceg</strong>, a software developer with experience
            in healthcare technology and document automation. Having worked on healthcare software projects,
            Ziven repeatedly encountered the same bottleneck: developers and designers needed realistic sample
            medical documents for testing, prototyping, and presentations — but no trustworthy, high-quality,
            free tool existed to generate them.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            The result is <strong>Medical Certificate Generator</strong>: a free, entirely browser-based tool that generates
            handwritten-style medical certificates based on authentic Indian clinic and hospital prescription
            pad formats — with zero data collection and no server-side processing.
          </p>
        </section>

        {/* How Did This Idea Come to Me? */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold">How Did This Idea Come to Me?</h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 mb-5">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-sm text-muted-foreground italic">Somewhere between Delhi and Manali, 2024</p>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Some ideas come from years of careful planning. This one came from a road trip.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              It was during a trip to Manali with a group of friends. We were mid-journey — somewhere on one of those long stretches of highway where the phone signal cuts in and out — when one of my friends received a work call. His manager wanted a medical certificate for the days he'd taken off. The problem? He'd actually been unwell, but hadn't visited a doctor. He just needed rest, not a prescription. And now he was in the middle of the Himalayas trying to figure out how to handle a bureaucratic requirement from his employer.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The conversation that followed was half-serious, half-joking. Someone said, "Can't you just generate one?" Someone else pulled out their laptop. We spent the next hour searching — and found nothing that was realistic, Indian-formatted, or free without questionable intent.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              What started as a joke between friends on a mountain road turned into a genuine question: <em>why doesn't a good, honest tool for this exist?</em> Not for fraud — but for developers who need sample documents, designers building healthcare UI, educators demonstrating what a medical certificate looks like, or anyone who simply needs to understand the format.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              By the time we reached Manali, I had already sketched out what Medical Certificate Generator would look like. A few months later, after proper research, consultation, and a lot of handwriting-rendering engineering — it was live. The road trip joke became a real platform used by thousands of people.
            </p>
          </div>
          <p className="text-sm text-muted-foreground italic">
            — Ziven Borceg, Creator of Medical Certificate Generator
          </p>
        </section>

        {/* What Makes This Platform Unique? */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold">What Makes This Platform Unique?</h2>
          </div>
          <p className="text-foreground/80 leading-relaxed mb-6">
            There are other document generators on the internet. Most are either low-quality, cluttered with ads, or
            suspiciously designed for fraudulent use. Medical Certificate Generator was built to be different from the beginning —
            in its design philosophy, its transparency, and its commitment to user needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: Zap,
                title: "Genuinely Simple to Use",
                desc: "No account creation. No multi-step wizard. No hidden export button. Open the site, pick a template, fill in the details, and download — in under 60 seconds. The tool respects your time.",
              },
              {
                icon: CheckCircle,
                title: "Realistic Indian Certificate Formats",
                desc: "Most generators produce obviously fake documents with generic fonts. Medical Certificate Generator uses a per-character handwriting engine — rotation variance, baseline wobble, ink pressure opacity — modelled on how Indian doctors actually write prescriptions.",
              },
              {
                icon: Shield,
                title: "Honest Educational Focus",
                desc: "We are transparent about what this tool is and what it is not. Every output carries a DEMO watermark by default. Our editorial content, legal pages, and onboarding all make the educational purpose completely unambiguous.",
              },
              {
                icon: Users,
                title: "Built Around Real User Needs",
                desc: "We started by understanding who actually needs this: developers building healthcare apps, UX designers prototyping patient portals, educators teaching document literacy, and content creators producing explainers. Every design decision traces back to a real use case.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: Target, title: "Solve a Real Problem", desc: "Developers and designers waste hours creating placeholder documents for testing. We eliminate that friction with a one-click, instant generator." },
              { icon: Award, title: "Quality Over Everything", desc: "We invested heavily in our per-character handwriting engine to produce output that looks genuinely authentic — not just a handwriting font slapped on a template." },
              { icon: Users, title: "Serve the Community Freely", desc: "No accounts. No paywalls. No usage limits. Open the site and generate in under 60 seconds, completely free." },
              { icon: Shield, title: "Responsible Transparency", desc: "We are fully transparent about this tool's purpose, limitations, and ethical boundaries. Responsible use is built into everything we do." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research, Expert Consultation & Responsible Approach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-5">Our Research, Expert Consultation &amp; Responsible Approach</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            Building a realistic medical certificate generator is not simply a design exercise — it requires a
            thorough understanding of how genuine medical documentation is structured, what information qualified
            practitioners include, and what clearly distinguishes a legitimate document from a fraudulent one.
            We took this responsibility seriously from the very beginning.
          </p>

          <h3 className="text-xl font-bold mb-3">Consultation With Medical Professionals</h3>
          <p className="text-foreground/80 leading-relaxed mb-5">
            Before a single line of code was written, we consulted with experienced doctors, qualified medical
            practitioners, and healthcare professionals to understand the anatomy of a genuine medical certificate.
            Their input helped us answer three critical questions: what a real certificate contains, how it is
            structured by different specialities and clinic types, and — equally important — what must{" "}
            <em>not</em> be included in an educational or demo context to avoid any risk of misrepresentation.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-5">
            Based on these consultations, our templates reflect the authentic layout, terminology, and formatting
            conventions used across Indian clinics and hospitals — while deliberately omitting elements that would
            only be present in genuinely issued documents (such as unique registration numbers or institutional
            stamps with verifiable credentials).
          </p>

          <div className="bg-muted/40 border border-border rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-primary" />
              Key Outcomes of Our Research
            </h3>
            <ul className="space-y-3">
              {[
                "Deep understanding of prescription pad formats across general practice, maternity, dental, and multispeciality contexts",
                "Knowledge of what information is standard across Indian medical certificates (patient details, diagnosis, rest period, doctor credentials)",
                "Clear guidance on what to omit to prevent any plausible use as a genuine document",
                "Insight into how realistic handwriting variation occurs in real-world hand-written prescriptions",
              ].map((point) => (
                <li key={point} className="flex gap-3 items-start text-foreground/80 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">Legal & Ethical Guidance</h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            We also sought input from legal advisors familiar with Indian information technology and documentation
            law. Their guidance was clear: a tool that generates fictional documents is legally permissible
            provided that it prominently disclaims the documents as non-authentic, does not facilitate fraud or
            misrepresentation, and makes its educational-only purpose unambiguous to every user.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            In accordance with this guidance, every page on this website carries a clear{" "}
            <Link href="/disclaimer" className="text-primary hover:underline font-medium">disclaimer</Link>, our{" "}
            <Link href="/terms" className="text-primary hover:underline font-medium">Terms & Conditions</Link>{" "}
            explicitly prohibit any fraudulent use, and the tool itself displays a DEMO watermark by default on
            all generated output.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            We periodically review our approach against updated legal guidance to ensure this platform continues
            to operate within clearly ethical and lawful boundaries.
          </p>
        </section>

        {/* Misuse Warning */}
        <section className="mb-12">
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-destructive">Misuse Is Strictly Prohibited</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We want to be unequivocal: <strong>any use of this tool to deceive, defraud, or misrepresent a
              person's medical condition is strictly prohibited and constitutes a criminal offence</strong> under
              applicable law, including but not limited to fraud, forgery, and misrepresentation statutes.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This includes — but is not limited to — submitting generated certificates to employers for
              sick leave, presenting them to insurance companies for claims, using them to access government
              benefits, or impersonating a licensed medical practitioner.
            </p>
            <p className="text-foreground/80 leading-relaxed font-medium">
              Users bear full and sole legal responsibility for any certificates they generate and how those
              certificates are used. Medical Certificate Generator and its creators accept zero liability for misuse.
            </p>
          </div>
        </section>

        {/* Genuine Medical Help */}
        <section className="mb-12">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">Need a Real Medical Certificate?</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you require a genuine, legally valid medical certificate — for employment, travel, insurance,
              or any official purpose — please consult a <strong>licensed, registered medical practitioner</strong>.
              Only a qualified doctor can issue a legitimate certificate that carries legal validity.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              In India, you can locate registered doctors and hospitals through:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              {[
                "Your local government hospital or primary health centre",
                "The National Medical Commission (NMC) doctor registry at nmc.org.in",
                "Verified telemedicine platforms such as Practo, Apollo 24|7, or Tata Health",
                "Your employer's empanelled healthcare provider",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Note: Medical Certificate Generator does not provide medical advice, certifications, referrals, or any form of
              medical services. The above is general guidance only.
            </p>
          </div>
        </section>

        {/* Transparency & Trust */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Transparency & Trust</h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            We believe complete transparency is the foundation of a trustworthy platform. Here is exactly what
            this tool is — and what it is not:
          </p>
          <ul className="space-y-3 text-foreground/80">
            {[
              "All certificates generated are fictional documents for educational, demo, and design use only.",
              "No data you enter is ever stored, transmitted, or logged — everything runs entirely in your browser.",
              "Generated certificates carry no legal validity under any jurisdiction.",
              "We do not encourage, endorse, or condone any fraudulent use of this tool.",
              "All templates are original creative works inspired by common Indian prescription pad conventions.",
              "This platform is free, with no hidden fees, no accounts, and no personal data collection.",
            ].map((point) => (
              <li key={point} className="flex gap-3 items-start">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Technology Behind It</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Medical Certificate Generator is built entirely with React, Vite, and TypeScript — a modern, client-side stack that
            ensures all processing happens in your browser. The handwriting simulation uses a per-character
            rendering engine where each individual letter receives its own computed values:
          </p>
          <ul className="space-y-2 text-foreground/80 text-sm ml-4 list-disc list-inside mb-4">
            <li>Rotation variance (±2.75 degrees per character)</li>
            <li>Baseline wobble (±1.7px vertical drift)</li>
            <li>Width scaling (88–116% horizontal squeeze)</li>
            <li>Ink pressure opacity variation (78–100%)</li>
            <li>Kerning drift (±0.8px letter spacing)</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed">
            An SVG displacement filter using{" "}<code className="text-xs bg-muted px-1.5 py-0.5 rounded">feTurbulence</code>{" "}
            and{" "}<code className="text-xs bg-muted px-1.5 py-0.5 rounded">feDisplacementMap</code>{" "}
            adds micro-level stroke distortion to simulate pen-on-paper rendering. The final PNG is exported
            at 2× resolution for print-quality sharpness.
          </p>
        </section>

        {/* Legal References */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Legal & Ethical Standards</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Our platform's ethical framework is governed by the following policies — please read them before use:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Disclaimer", href: "/disclaimer" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "DMCA Policy", href: "/dmca" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
                <Scale className="w-3.5 h-3.5 text-primary" />
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact & Support</h2>
          <p className="text-foreground/80 leading-relaxed">
            Have questions, feedback, or want to report misuse?{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">Contact us here</Link>.
            We take misuse reports seriously and cooperate with law enforcement on any verified cases of
            fraudulent document use.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
