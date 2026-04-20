"use client";

import Link from "next/link";
import { CheckCircle, ExternalLink, FileText, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TEMPLATES } from "@/types/certificate";
import type { LandingPageConfig } from "@/data/landingPages";

export function CertLandingPage({ page }: { page: LandingPageConfig }) {
  const template = TEMPLATES.find((t) => t.id === page.templateId) ?? TEMPLATES[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* HERO */}
        <section className="py-14 md:py-20 px-4 text-center bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Free Online Tool · India
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
              {page.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              {page.intro}
            </p>
            <Link href={`/generator/${page.templateId}`}>
              <Button size="lg" className="font-bold text-base px-8 shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform">
                {page.ctaText} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground mt-4">No signup · No watermark · Free download</p>
          </div>
        </section>

        {/* INFORMATION */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Understanding This Certificate</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { heading: "What Is It?", body: page.whatIs },
                { heading: "When Is It Used?", body: page.whenUsed },
                { heading: "Why Is It Needed?", body: page.whyNeeded },
              ].map(({ heading, body }) => (
                <div key={heading} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-foreground mb-3">{heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-14 px-4 bg-muted/40 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Real-World Use Cases</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {page.useCases.map((useCase, i) => (
                <li key={i} className="flex items-start gap-3 bg-background rounded-xl p-4 border border-border text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FORMAT */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Certificate Format &amp; Key Elements</h2>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                A valid Indian medical certificate must include specific fields to be accepted by employers, institutions, and government departments. Missing any of these can result in rejection.
              </p>
              <ul className="space-y-3">
                {page.formatElements.map((el, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{el}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 text-center">
              <img
                src={template.previewImage}
                alt={`${page.title} sample format — ${template.name} template`}
                className="w-44 md:w-60 rounded-2xl shadow-xl border border-border mx-auto"
                width={240}
                height={320}
                loading="lazy"
              />
              <p className="text-xs text-muted-foreground mt-3">Sample: {template.name} format</p>
            </div>
          </div>
        </section>

        {/* GENERATOR CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Generate Your Certificate Now — Free</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Use our free online tool to create a realistic, printable{" "}
              {page.title.toLowerCase()} instantly. Customise every field — patient name, doctor,
              diagnosis, dates — and download as PNG or PDF.
            </p>
            <Link href={`/generator/${page.templateId}`}>
              <Button
                size="lg"
                variant="secondary"
                className="font-bold text-base px-8 shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                {page.ctaText} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Why Use Medical Certificate Generator?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-muted/40 border-y border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <details key={i} className="group border border-border rounded-xl bg-card overflow-hidden">
                  <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer font-semibold text-sm list-none select-none">
                    {faq.q}
                    <span className="text-primary text-lg group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL + EXTERNAL LINKS */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-lg font-bold mb-5">Related Certificate Pages</h2>
              <ul className="space-y-3">
                {page.relatedPages.map((p, i) => (
                  <li key={i}>
                    <Link
                      href={p.href}
                      className="flex items-center gap-2 text-sm text-primary hover:underline group"
                    >
                      <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="group-hover:underline">{p.title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/" className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                    Browse all 15+ certificate templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-5">Authoritative References</h2>
              <ul className="space-y-4">
                {page.externalLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      {link.label}
                    </a>
                    <p className="text-xs text-muted-foreground ml-5 mt-1">{link.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* RELATED TEMPLATES */}
        <section className="py-14 px-4 bg-muted/30 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold mb-2">Try Related Certificate Generators</h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                Pick from 15+ authentic Indian clinic and hospital formats. Each template is unique — click to start customising.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TEMPLATES.filter((t) => t.id !== page.templateId).slice(0, 4).map((tmpl) => (
                <Link key={tmpl.id} href={`/generator/${tmpl.id}`}>
                  <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                      <img
                        src={tmpl.previewImage}
                        alt={`${tmpl.name} medical certificate template`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200 flex items-end justify-center pb-3">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow">
                          Use Template
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-foreground line-clamp-1">{tmpl.name}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">{tmpl.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/#templates" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Browse all 15+ templates <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="max-w-5xl mx-auto px-4 pb-12 pt-6">
          <div className="border border-destructive/20 bg-destructive/5 rounded-xl px-5 py-4 text-sm text-foreground/70 flex gap-3">
            <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
            <span>
              <strong className="text-destructive">Disclaimer:</strong> Certificates generated by this tool are for educational, demonstration, and staging purposes only. They are not legally valid medical documents. Fraudulent use of generated certificates is strictly prohibited and is the sole legal responsibility of the user.
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
