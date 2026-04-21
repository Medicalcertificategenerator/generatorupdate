import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Sparkles, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TEMPLATES } from "@/types/certificate";
import { LANDING_PAGES } from "@/data/landingPages";

const BASE_URL = "https://medicalcertificategenerator.co.in";

export const metadata: Metadata = {
  title: "Medical Certificate Generator Tools — Free Online Generators",
  description:
    "Browse all free medical certificate generators — sick leave, fitness, exemption, student, and 15+ authentic Indian hospital templates. Instant download, no signup.",
  alternates: { canonical: `${BASE_URL}/generator` },
  openGraph: {
    title: "Medical Certificate Generator Tools — Free Online Generators",
    description:
      "Browse all free medical certificate generators — sick leave, fitness, exemption, student, and 15+ templates. Instant download.",
    url: `${BASE_URL}/generator`,
    siteName: "Medical Certificate Generator",
    locale: "en_IN",
    type: "website",
  },
};

// Standalone tool pages (not in TEMPLATES or LANDING_PAGES)
const STANDALONE_TOOLS = [
  {
    title: "Medical Exemption Certificate Generator",
    description:
      "Generate exemption certificates for travel, work, school, or chronic conditions like diabetes and heart disease.",
    href: "/medical-exemption-certificate",
    badge: "New",
  },
];

export default function GeneratorIndexPage() {
  const indexedLandingPages = LANDING_PAGES.filter((p) => !p.noindex);
  const noindexLandingPages = LANDING_PAGES.filter((p) => p.noindex);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative px-4 pt-20 pb-14 text-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="max-w-3xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-semibold gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" /> 15+ Templates · Free · Instant
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Medical Certificate{" "}
            <span className="text-primary">Generator Tools</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Browse all free medical certificate generators. Choose from sick
            leave, fitness, exemption, student certificates, and 15+ authentic
            Indian hospital template formats. Download PDF and PNG instantly —
            no signup required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            {[
              "100% Free",
              "No Registration",
              "Instant Download",
              "Privacy-First",
            ].map((pt) => (
              <span
                key={pt}
                className="flex items-center gap-1.5 bg-muted/60 rounded-full px-3 py-1"
              >
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                {pt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STANDALONE TOOLS */}
      <section className="px-4 py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Specialized Generators</h2>
          <p className="text-muted-foreground text-sm mb-8">
            Interactive generator tools with live preview and instant download.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STANDALONE_TOOLS.map((tool) => (
              <Link key={tool.href} href={tool.href}>
                <div className="group bg-card border-2 border-primary/20 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    {tool.badge && (
                      <Badge className="bg-emerald-500 text-white text-[10px]">
                        {tool.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                    Open Generator{" "}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Homepage Generator */}
            <Link href="/#generator">
              <div className="group bg-card border-2 border-primary/20 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <Badge className="bg-teal-500 text-white text-[10px]">
                    4 Types
                  </Badge>
                </div>
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                  Medical Certificate Generator
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prescription, sick leave, fitness, and general medical
                  certificate — all in one interactive generator with live
                  preview.
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                  Open Generator{" "}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* LANDING PAGES — For-purpose certificates */}
      <section className="px-4 py-14 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">
            Purpose-Specific Certificates
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Deep-content pages with detailed information, FAQs, and direct
            access to generators for specific use cases.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {indexedLandingPages.map((page) => (
              <Link key={page.slug} href={`/${page.slug}`}>
                <div className="group bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer h-full">
                  <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {page.metaDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">
                    View & Generate{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {noindexLandingPages.length > 0 && (
            <>
              <h3 className="text-lg font-bold mt-10 mb-4">
                More Condition-Specific Certificates
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {noindexLandingPages.map((page) => (
                  <Link key={page.slug} href={`/${page.slug}`}>
                    <div className="group bg-card border border-border rounded-lg p-3 hover:border-primary/30 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-xs group-hover:text-primary transition-colors">
                        {page.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ALL TEMPLATES */}
      <section className="px-4 py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">
            All Hospital & Clinic Templates
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            15+ authentic Indian hospital and clinic formats — each with unique
            layouts, letterheads, and styling. Pick any to start customizing.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TEMPLATES.map((tmpl) => (
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
                    <p className="text-sm font-semibold text-foreground line-clamp-1">
                      {tmpl.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                      {tmpl.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="max-w-5xl mx-auto px-4 pb-12 pt-6">
        <div className="border border-destructive/20 bg-destructive/5 rounded-xl px-5 py-4 text-sm text-foreground/70 flex gap-3">
          <Shield className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
          <span>
            <strong className="text-destructive">Disclaimer:</strong>{" "}
            Certificates generated by these tools are for educational,
            demonstration, and staging purposes only. They are not legally valid
            medical documents. Fraudulent use is strictly prohibited.
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
