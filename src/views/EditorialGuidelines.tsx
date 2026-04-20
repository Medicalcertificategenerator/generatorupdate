"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, ShieldCheck, RefreshCw, AlertTriangle, CheckCircle, ExternalLink, Search, FileText, Users } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "verification",
    icon: ShieldCheck,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "How Content Is Verified",
    content: (
      <div className="space-y-4 text-foreground/80 leading-relaxed">
        <p>
          Every article published on Medical Certificate Generator is written with a clear commitment to accuracy, clarity, and usefulness.
          We do not publish unverified claims, speculative information, or content that could mislead readers about
          medical, legal, or administrative matters.
        </p>
        <p>Our content verification process involves three stages:</p>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li>
            <strong>Research and drafting</strong> — Every article begins with structured research into primary sources:
            government policy documents, official guidelines from bodies such as the National Medical Commission, Central Civil Services Leave Rules, and Ministry of Health circulars.
          </li>
          <li>
            <strong>Fact-checking against authoritative references</strong> — Key claims (for example, the legal validity of telemedicine certificates, the required elements of a government-issue medical certificate, or state-specific rules) are cross-checked against verifiable external sources listed in each article.
          </li>
          <li>
            <strong>Accuracy review</strong> — Each article is reviewed for factual consistency, logical coherence, and alignment with the legal and healthcare standards applicable in India.
          </li>
        </ol>
        <p>
          We are transparent about the nature of our expertise: Medical Certificate Generator is a document generation tool, not a
          medical or legal practice. Our content explains procedures, policies, and conventions — it does not constitute
          legal or medical advice. Readers requiring official guidance should consult licensed professionals.
        </p>
      </div>
    ),
  },
  {
    id: "sources",
    icon: Search,
    color: "text-green-600",
    bg: "bg-green-500/10",
    title: "Sources We Use",
    content: (
      <div className="space-y-4 text-foreground/80 leading-relaxed">
        <p>
          Our content draws on a range of credible, publicly accessible sources. We prefer primary sources
          wherever available and clearly attribute information when linking externally.
        </p>
        <h3 className="font-bold text-foreground text-lg">Primary Government Sources</h3>
        <ul className="space-y-2">
          {[
            { label: "Central Civil Services (Leave) Rules — Ministry of Personnel, Public Grievances and Pensions", href: "https://persmin.gov.in" },
            { label: "National Medical Commission — India's doctor registration authority", href: "https://nmc.org.in" },
            { label: "Ministry of Health and Family Welfare — health policy and guidelines", href: "https://mohfw.gov.in" },
            { label: "Telemedicine Practice Guidelines 2020 — issued by the Board of Governors, NMC", href: "https://nmc.org.in/telemedicine" },
          ].map((src) => (
            <li key={src.label} className="flex items-start gap-2">
              <ExternalLink className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-primary" />
              <a href={src.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">{src.label}</a>
            </li>
          ))}
        </ul>
        <h3 className="font-bold text-foreground text-lg mt-4">General Information References</h3>
        <ul className="space-y-2">
          {[
            "Labour law publications and HR policy documentation from publicly available corporate and institutional sources",
            "Academic resources on Indian healthcare administration and medico-legal practice",
            "Published university examination ordinances for student medical certificate requirements",
            "Bar Council of India and legal commentary on IPC provisions related to fraudulent documentation",
          ].map((src) => (
            <li key={src} className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-600" />
              <span>{src}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground italic">
          Where we cite external sources in articles, links are provided directly in the article body. We do not reproduce copyrighted content.
        </p>
      </div>
    ),
  },
  {
    id: "updates",
    icon: RefreshCw,
    color: "text-blue-600",
    bg: "bg-blue-500/10",
    title: "Content Updates",
    content: (
      <div className="space-y-4 text-foreground/80 leading-relaxed">
        <p>
          Medical documentation rules, employment leave policies, and legal frameworks evolve over time. We are
          committed to keeping our content current and accurate.
        </p>
        <h3 className="font-bold text-foreground text-lg">Update Schedule</h3>
        <ul className="space-y-3 ml-2">
          {[
            { when: "Immediate review", why: "When government policy changes significantly affect content accuracy (e.g. new NMC guidelines, amendments to CCS Leave Rules)" },
            { when: "Quarterly review", why: "All how-to guides and procedural articles are reviewed every 3 months for continued accuracy" },
            { when: "Annual review", why: "All articles receive a full review at least once per year regardless of policy changes" },
          ].map((item) => (
            <li key={item.when} className="flex gap-3 items-start">
              <span className="mt-1 text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full flex-shrink-0">{item.when}</span>
              <span className="text-sm">{item.why}</span>
            </li>
          ))}
        </ul>
        <h3 className="font-bold text-foreground text-lg mt-4">How We Handle Corrections</h3>
        <p>
          If a factual error is identified in any published article, we correct it promptly. Significant corrections
          are noted at the top of the updated article. We do not silently delete or alter content to obscure past errors
          — transparency about corrections is part of our commitment to editorial integrity.
        </p>
        <p>
          If you notice an error or out-of-date information in any article, please{" "}
          <Link href="/contact" className="text-primary font-medium hover:underline">contact us</Link> with the
          specific article URL and the concern. We typically review editorial corrections within 5 working days.
        </p>
      </div>
    ),
  },
  {
    id: "responsible-content",
    icon: AlertTriangle,
    color: "text-amber-600",
    bg: "bg-amber-500/10",
    title: "Responsible Content Policy",
    content: (
      <div className="space-y-4 text-foreground/80 leading-relaxed">
        <h3 className="font-bold text-foreground text-lg">Educational Purpose Only</h3>
        <p>
          All content published on Medical Certificate Generator — including blog articles, guides, how-to explanations, and template
          descriptions — is published exclusively for <strong>educational, informational, and awareness purposes</strong>.
        </p>
        <p>
          We do not publish content intended to facilitate, encourage, or assist in any illegal or harmful activity.
          This includes, but is not limited to:
        </p>
        <ul className="space-y-2 ml-2">
          {[
            "Instructions on creating fraudulent medical documents intended for submission to employers, institutions, or government bodies",
            "Medical advice or diagnosis guidance intended to substitute for licensed medical consultation",
            "Legal advice intended to substitute for consultation with a qualified legal professional",
          ].map((point) => (
            <li key={point} className="flex gap-2 items-start text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <h3 className="font-bold text-foreground text-lg mt-4">No Misleading Intent</h3>
        <p>
          We never write content designed to deceive readers about the capabilities or legal standing of this tool.
          Every article that discusses medical certificate requirements includes a disclaimer making clear that:
        </p>
        <ul className="space-y-2 mt-2">
          {[
            "Certificates generated by our tool are not legally valid documents",
            "Genuine medical certificates must be obtained from registered medical practitioners",
            "Using generated certificates for fraudulent purposes is a criminal offence",
          ].map((point) => (
            <li key={point} className="flex gap-2 items-start text-sm">
              <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-600" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <h3 className="font-bold text-foreground text-lg mt-4">Advertising & Sponsored Content</h3>
        <p>
          At present, Medical Certificate Generator does not publish paid, sponsored, or affiliate-linked content. All articles are
          written editorially and without commercial influence. If this changes, sponsored content will be clearly and
          prominently labelled as such in every instance.
        </p>
        <h3 className="font-bold text-foreground text-lg mt-4">Conflict of Interest Disclosure</h3>
        <p>
          Medical Certificate Generator is the generator tool itself, and our content includes links to our own generator pages. These
          internal links are editorial in nature — they direct readers to the most relevant functionality for their
          context. They are not commercial placements.
        </p>
      </div>
    ),
  },
];

export default function EditorialGuidelines() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-5">
            <BookOpen className="w-4 h-4" />
            Editorial Transparency
          </div>
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">Editorial Guidelines</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Medical Certificate Generator is committed to publishing accurate, helpful, and responsible content. These guidelines explain
            how we research, verify, and maintain everything we publish.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Last reviewed: March 2026 · Written by <Link href="/author" className="text-primary hover:underline">Ziven Borceg</Link>
          </p>
        </div>

        {/* Quick navigation */}
        <nav className="bg-card border border-border rounded-xl p-5 mb-12">
          <p className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" /> Contents
          </p>
          <ol className="space-y-1.5">
            {sections.map((sec, i) => (
              <li key={sec.id}>
                <a href={`#${sec.id}`} className="text-sm text-primary hover:underline flex items-center gap-2">
                  <span className="text-muted-foreground text-xs w-4">{i + 1}.</span>
                  {sec.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-14">
          {sections.map((sec) => (
            <section key={sec.id} id={sec.id}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${sec.bg} ${sec.color} flex items-center justify-center flex-shrink-0`}>
                  <sec.icon className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">{sec.title}</h2>
              </div>
              <div className="pl-0 sm:pl-13">
                {sec.content}
              </div>
            </section>
          ))}
        </div>

        {/* Team */}
        <section className="mt-14 mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold">Who Creates Our Content</h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 flex gap-5 items-start">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xl flex-shrink-0">
              ZB
            </div>
            <div>
              <p className="font-bold text-lg">
                <Link href="/author" className="hover:text-primary transition-colors">Ziven Borceg</Link>
              </p>
              <p className="text-sm text-muted-foreground mb-3">Software developer and creator of Medical Certificate Generator</p>
              <p className="text-foreground/80 leading-relaxed text-sm">
                All articles on Medical Certificate Generator are written by Ziven Borceg. Ziven brings experience in software development,
                healthcare technology, and document automation. While not a medical professional, Ziven has conducted
                structured research into Indian medical documentation standards with input from healthcare professionals
                and legal advisors, and is committed to publishing content that is accurate, helpful, and clearly within
                educational scope.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Articles authored by Ziven Borceg are published under his name with a date stamp. Editorial opinions are
                clearly distinguished from factual claims.
              </p>
            </div>
          </div>
        </section>

        {/* Contact for editorial concerns */}
        <section className="bg-muted/40 border border-border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">Editorial Questions & Corrections</h2>
          <p className="text-foreground/80 leading-relaxed text-sm mb-4">
            If you have questions about how we research and publish content, believe an article contains factual
            inaccuracies, or wish to suggest a topic — we welcome your input.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact the Editorial Team
          </Link>
          <p className="text-xs text-muted-foreground mt-3">
            We aim to respond to all editorial inquiries within 5 working days.
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}
