import { Template } from "@/types/certificate";
import {
  CheckCircle2,
  XCircle,
  MapPin,
  Stethoscope,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Info,
  Layers,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export function TemplateInfoSection({ template }: { template: Template }) {
  if (!template || !template.templateContent) return null;

  const {
    clinicType,
    indiaRegion,
    primaryUseCase,
    fieldsIncluded,
    bestFor,
    notIdealFor,
    vsOtherTemplates,
    uniqueDescription,
    formatDetails,
    userGuide,
  } = template.templateContent;

  return (
    <section className="w-full bg-muted/20 border-t border-border py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* ── HEADER & QUICK SUMMARY ── */}
        <div className="relative bg-gradient-to-br from-primary/5 via-background to-background border border-border/60 rounded-3xl p-6 md:p-10 shadow-sm overflow-hidden">
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl" />

          <div className="relative space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" /> {template.category} Template
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> Professional Format
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                In-Depth Analysis: {template.name} Format
              </h2>
              <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">
                This comprehensive guide provides administrative context, regional guidelines, and validation criteria for the 
                <strong className="text-foreground font-medium"> {template.name}</strong> medical certificate template, 
                tailored explicitly for Indian medical standards and corporate compliance audits.
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border/40">
              <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-muted/40 transition-colors">
                <Layers className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Practice Type</h4>
                  <p className="text-sm font-medium text-foreground mt-0.5">{clinicType}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-muted/40 transition-colors">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primary Region</h4>
                  <p className="text-sm font-medium text-foreground mt-0.5">{indiaRegion}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-muted/40 transition-colors">
                <TrendingUp className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Best Suited For</h4>
                  <p className="text-sm font-medium text-foreground mt-0.5">{primaryUseCase}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 1: DETAILED DESCRIPTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              Administrative History & Context
            </h3>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed text-[15px] md:text-base whitespace-pre-line">
                {uniqueDescription}
              </p>
            </div>
          </div>

          {/* Format Spec Box */}
          <div className="lg:col-span-4 bg-card border border-border rounded-2xl p-6 shadow-sm space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" /> Visual & Format Details
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {formatDetails}
            </p>
            <div className="border-t border-border/60 pt-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                Fields Included in Canvas
              </span>
              <ul className="space-y-2">
                {fieldsIncluded.map((field, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                    <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{field}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: BEST FOR VS NOT IDEAL FOR ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Best For Card */}
          <div className="bg-emerald-500/[0.02] border border-emerald-500/20 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/10 p-2.5 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Approved Use Cases</h3>
                <p className="text-xs text-muted-foreground">Scenarios where this format excels</p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {bestFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px]">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs shrink-0 mt-0.5">✓</span>
                  <span className="text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Ideal For Card */}
          <div className="bg-rose-500/[0.02] border border-rose-500/20 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-rose-500/10 p-2.5 rounded-xl">
                <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Usage Restrictions</h3>
                <p className="text-xs text-muted-foreground">Scenarios to avoid to prevent rejection</p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {notIdealFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px]">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs shrink-0 mt-0.5">✗</span>
                  <span className="text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── SECTION 3: COMPARISON & ALTERNATIVES ── */}
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 space-y-2">
            <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-2xl mb-2">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Format Comparison</h3>
            <p className="text-xs text-muted-foreground">
              How this template ranks against other medical layouts in our generator.
            </p>
          </div>
          <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-border/60 pt-6 md:pt-0 md:pl-8">
            <p className="text-sm text-foreground/80 leading-relaxed italic">
              &ldquo;{vsOtherTemplates}&rdquo;
            </p>
          </div>
        </div>

        {/* ── SECTION 4: HOW TO FILL GUIDE ── */}
        <div className="bg-amber-500/[0.02] border border-amber-500/20 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full shrink-0" />
          <div className="flex items-start gap-4">
            <div className="bg-amber-500/10 p-3 rounded-2xl text-amber-600 dark:text-amber-400 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                Compliance & Filling Guidelines (India)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {userGuide}
              </p>
              <div className="flex items-start gap-2.5 bg-background/80 dark:bg-background/40 border border-amber-500/20 rounded-xl p-3.5 text-xs text-amber-700 dark:text-amber-400">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Important:</strong> In accordance with the National Medical Commission (NMC) regulations, any medical certificate submitted for legal purposes in India must bear the original signature and legible registration number of a doctor registered under NMC or a State Medical Council.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
