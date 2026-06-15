"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EWSEligibilityChecker } from "@/components/ews/EWSEligibilityChecker";
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  ExternalLink,
  BookOpen,
  Layers,
  Scale,
  ClipboardList,
  MapPin,
  MessageSquare,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText
} from "lucide-react";

export function EWSCertificate() {
  const [openForumIndex, setOpenForumIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleForum = (index: number) => {
    setOpenForumIndex(openForumIndex === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header className="py-16 md:py-24 px-4 text-center bg-gradient-to-b from-primary/5 via-transparent to-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-muted-foreground text-xs md:text-sm mb-6 flex items-center justify-center gap-2 font-medium">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>&gt;</span>
            <a href="/generator" className="hover:text-primary transition-colors">Government Certificates</a>
            <span>&gt;</span>
            <span className="text-foreground font-semibold">EWS Certificate</span>
          </nav>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            EWS Certificate — Eligibility, Criteria & Complete Application Guide 2026
          </h1>

          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the Economically Weaker Section (EWS) 10% reservation, household eligibility limits, required documentation, and state-wise application portals.
          </p>

          {/* AEO Answer Box */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mt-8 shadow-sm text-left relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            <span className="text-xs uppercase tracking-wider text-primary font-bold block mb-2">
              What is the EWS Category?
            </span>
            <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
              EWS (Economically Weaker Section) is an official reservation category in India for General (Unreserved) class citizens whose family income is <strong>below ₹8 lakh per year</strong> and who meet specific property conditions. Introduced by the 103rd Constitutional Amendment (2019), it provides a 10% quota in central government employment and educational admissions, separate from SC/ST/OBC reservations.
            </p>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>Authorized by: Ministry of Social Justice and Empowerment (MSJE)</span>
              <span className="bg-muted px-2.5 py-1 rounded-full text-foreground/80 font-mono text-[10px]">
                103rd Amendment Act, 2019
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 md:py-16 w-full space-y-16 md:space-y-24">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2: EWS ELIGIBILITY CHECKER TOOL (PRIMARY HEO FEATURE)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="eligibility-checker-section">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" />
              Dynamic Verification Tool
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Check Your EWS Eligibility Instantly
            </h2>
            <p className="text-sm text-muted-foreground">
              Answer 5 quick questions to check your likely EWS eligibility — based on official GOI criteria.
            </p>
          </div>

          <EWSEligibilityChecker />
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: WHAT IS EWS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="constitutional-basis">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <Scale className="w-3.5 h-3.5" />
              Constitutional Framework
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What is EWS (Economically Weaker Section) and What is its Constitutional Basis?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed">
              <p>
                The Economically Weaker Section (EWS) reservation was enacted through the landmark <strong>103rd Constitutional Amendment Act, 2019</strong>, which entered into force on January 14, 2019. This amendment altered the constitutional layout by inserting <strong>Articles 15(6) and 16(6)</strong> into the Constitution of India, empowering the state to make special provisions—including a 10% reservation—for the advancement of economically weaker citizens.
              </p>
              <p>
                This 10% EWS quota is applied specifically to direct recruitment in central government appointments and admissions into central educational institutions, including elite bodies like the Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), and central medical colleges. 
              </p>
              <p>
                Crucially, EWS reservation operates <strong>independently and in addition to</strong> the pre-existing 50% reservation threshold (which consists of 27% for OBC, 15% for SC, and 7.5% for ST). The constitutional validity of this reservation was formally challenged and subsequently upheld by the Supreme Court of India in the landmark case <strong>Janhit Abhiyan v. Union of India (2022)</strong> via a 3:2 majority ruling.
              </p>
            </div>

            <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed bg-muted/40 p-6 rounded-2xl border border-border">
              <h4 className="font-bold text-foreground">Key Differentiating Principles:</h4>
              <p>
                EWS is exclusive to citizens belonging to the <strong>General (Unreserved) Category</strong>. Under no circumstances can individuals registered under OBC, SC, or ST claim EWS reservation, as they are already beneficiaries of social reservation structures.
              </p>
              <p>
                Furthermore, while the income limit of ₹8 lakh matches the OBC Non-Creamy Layer ceiling, EWS implements strict property-ownership exclusions that do not apply to OBC-NCL. Most Indian states have enacted parallel state-level EWS acts for regional administrative jobs and admissions.
              </p>
              <div className="text-xs text-muted-foreground border-t border-border pt-4 italic">
                Hindi terminology reference: EWS matlab hai "Arthik Roop se Kamzor Varg" — General category ke woh log jinki parivar ki gross annual income ₹8 lakh se kam hai.
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: EWS ELIGIBILITY CRITERIA
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-8 scroll-mt-20" id="ews-criteria-details">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Statutory Exclusions & Limits
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What are the Latest EWS Eligibility Criteria?
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              For central government positions, candidates must satisfy all four of the following statutory requirements simultaneously.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Category and Income */}
            <div className="space-y-6">
              {/* Criterion 1 */}
              <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Criterion 1</span>
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  Social Category Limitation
                </h3>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                  The candidate must belong to the General (Unreserved) category. You are ineligible if you are listed in regional SC, ST, or OBC databases.
                </p>
                <div className="text-xs bg-destructive/10 border border-destructive/20 text-destructive p-3 rounded-lg flex gap-2">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>NOT applicable if you belong to SC, ST, or OBC categories.</span>
                </div>
              </div>

              {/* Criterion 2 */}
              <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Criterion 2</span>
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  Gross Family Income Cap
                </h3>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                  Your family's gross annual household income must remain strictly <strong>below ₹8 Lakh per annum</strong>. 
                </p>
                <p className="text-xs text-muted-foreground leading-normal">
                  <strong>Critical Clause:</strong> Family income includes all sources combined—salaries, business revenues, agricultural profits, interest, professional practice, and dividends. Unlike OBC-NCL, agricultural income is <strong>NOT</strong> exempt for EWS.
                </p>
              </div>

              {/* Criterion 4 */}
              <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Criterion 3</span>
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  Legal Definition of "Family"
                </h3>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                  For EWS evaluation, "Family" comprises the applicant, their spouse, minor siblings (under 18), parents, and minor children. Married siblings, married daughters living independently, and major siblings earning separately are generally excluded from combined calculations.
                </p>
              </div>
            </div>

            {/* Property Exclusions */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-5 space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Criterion 4</span>
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0" />
                  Property Ownership Limits
                </h3>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  Even if the household annual income is below ₹8 lakh, ownership of any of the following properties by the family combined results in immediate disqualification:
                </p>

                <div className="overflow-x-auto border border-border rounded-lg text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-muted border-b border-border font-semibold text-foreground">
                        <th className="p-2">Property Type</th>
                        <th className="p-2">Permitted Limit</th>
                        <th className="p-2 text-destructive">Disqualification Threshold</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 text-foreground/80">
                      <tr>
                        <td className="p-2 font-medium">Agricultural Land</td>
                        <td className="p-2">Under 5 Acres</td>
                        <td className="p-2 text-destructive font-medium">5 Acres or more</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Residential Flat</td>
                        <td className="p-2">Under 1,000 sq ft</td>
                        <td className="p-2 text-destructive font-medium">1,000 sq ft or more</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Plot (Notified Municipalities)</td>
                        <td className="p-2">Under 100 sq yards</td>
                        <td className="p-2 text-destructive font-medium">100 sq yards or more</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Plot (Non-Notified Areas)</td>
                        <td className="p-2">Under 200 sq yards</td>
                        <td className="p-2 text-destructive font-medium">200 sq yards or more</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-lg flex gap-2.5 text-amber-800 dark:text-amber-300 text-xs">
                  <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Important Clarification Box:</strong> Property exclusions apply to all family members combined. If father owns 3 acres and mother owns 2.5 acres, the total is 5.5 acres, and the applicant is disqualified from EWS even if total income is ₹0.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Comparison Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">EWS vs. OBC NCL: Technical Differences</h3>
            <div className="overflow-x-auto border border-border rounded-xl bg-card shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-muted font-bold text-foreground border-b border-border">
                    <th className="p-4 w-1/4">Feature</th>
                    <th className="p-4 w-3/8">EWS (Economically Weaker Section)</th>
                    <th className="p-4 w-3/8">OBC NCL (Non-Creamy Layer)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-foreground/80">
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Eligibility Base</td>
                    <td className="p-4">General / Unreserved category only.</td>
                    <td className="p-4">OBC caste list members only.</td>
                  </tr>
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Income Cap</td>
                    <td className="p-4">₹8 Lakh gross annual household income.</td>
                    <td className="p-4">₹8 Lakh gross annual family income.</td>
                  </tr>
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Agricultural Exemption</td>
                    <td className="p-4 font-medium text-destructive">No. Agricultural income is fully included in EWS.</td>
                    <td className="p-4 font-medium text-emerald-600 dark:text-emerald-400">Yes. Agricultural land income is excluded from OBC NCL calculations.</td>
                  </tr>
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Property Limits</td>
                    <td className="p-4 font-medium text-destructive">Yes. Land, flat, and plot exclusions apply.</td>
                    <td className="p-4 font-medium text-emerald-600 dark:text-emerald-400">No. Only salary pay-grades or non-salary income cap apply.</td>
                  </tr>
                  <tr className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 font-semibold text-foreground">Joint Claim?</td>
                    <td className="p-4" colSpan={2}>
                      <span className="font-semibold text-foreground text-amber-600">No, mutually exclusive.</span> You must either claim EWS (if General) or OBC NCL (if OBC). You cannot hold or claim under both certificates simultaneously.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 5: DOCUMENTS REQUIRED
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="ews-documents">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <ClipboardList className="w-3.5 h-3.5" />
              Documentation Checklist
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What Documents are Required for an EWS Certificate?
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Before presenting your file at the office or state e-District portal, gather this unified documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-all">
              <div className="p-1.5 bg-primary/10 text-primary rounded-lg w-fit">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-foreground">1. Income Documentation</h3>
              <ul className="text-xs text-foreground/80 space-y-2 list-disc list-inside leading-relaxed">
                <li>Form 16 issued by employers.</li>
                <li>ITR acknowledgement for last 3 financial years.</li>
                <li>Latest 3 months' salary certificates.</li>
                <li>Tehsildar income certificate (for informal sectors).</li>
                <li>Income affidavit signed on ₹100 stamp paper.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-all">
              <div className="p-1.5 bg-primary/10 text-primary rounded-lg w-fit">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-foreground">2. Land & Property Declarations</h3>
              <ul className="text-xs text-foreground/80 space-y-2 list-disc list-inside leading-relaxed">
                <li>Land records (Khasra, Khatauni, Patta copies).</li>
                <li>Flat allotment letter or registered sale deed showing carpet area.</li>
                <li>Property tax receipts from local municipalities.</li>
                <li>Self-declaration property affidavit (signed & notarized).</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-all">
              <div className="p-1.5 bg-primary/10 text-primary rounded-lg w-fit">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-foreground">3. Core Identification Proofs</h3>
              <ul className="text-xs text-foreground/80 space-y-2 list-disc list-inside leading-relaxed">
                <li>Aadhaar Card (linked with mobile number).</li>
                <li>PAN Card or Voter ID.</li>
                <li>Domicile/Resident Certificate (proof of local state residence).</li>
                <li>Ration Card (NFSA list if available).</li>
                <li>Recent passport-size photographs (2-4 copies).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 6: HOW TO APPLY STATE-WISE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="state-wise-guide">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Application Pathways
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              How to Apply for an EWS Certificate State-wise?
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              EWS certificates are processed by Sub-Divisional Magistrates (SDM), Tehsildars, or Circle Officers. Over 18 states support fully digital EWS submissions on official e-District portals.
            </p>
          </div>

          {/* State Table */}
          <div className="overflow-x-auto border border-border rounded-xl bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-muted font-bold text-foreground border-b border-border">
                  <th className="p-3">State</th>
                  <th className="p-3">Competent Authority</th>
                  <th className="p-3">Online Portal</th>
                  <th className="p-3">Processing Timeline</th>
                  <th className="p-3">Regional Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-foreground/80">
                <tr>
                  <td className="p-3 font-semibold text-foreground">Uttar Pradesh</td>
                  <td className="p-3">SDM / Tehsildar</td>
                  <td className="p-3 font-mono text-muted-foreground">edistrict.up.gov.in</td>
                  <td className="p-3">15-21 Days</td>
                  <td className="p-3">Must secure separate UP income proof first.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Maharashtra</td>
                  <td className="p-3">Tehsildar</td>
                  <td className="p-3 font-mono text-muted-foreground">aaplesarkar.mahaonline.gov.in</td>
                  <td className="p-3">21-30 Days</td>
                  <td className="p-3">Requires a notarized property declaration affidavit.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Delhi</td>
                  <td className="p-3">SDM</td>
                  <td className="p-3 font-mono text-muted-foreground">edistrict.delhigovt.nic.in</td>
                  <td className="p-3">7-15 Days</td>
                  <td className="p-3">Fast-tracked; online SMS status alerts provided.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Karnataka</td>
                  <td className="p-3">Tahsildar</td>
                  <td className="p-3 font-mono text-muted-foreground">nadakacheri.karnataka.gov.in</td>
                  <td className="p-3">15-20 Days</td>
                  <td className="p-3">Kannada application forms are widely required.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Tamil Nadu</td>
                  <td className="p-3">Tahsildar / e-Sevai</td>
                  <td className="p-3 font-mono text-muted-foreground">tnesevai.tn.gov.in</td>
                  <td className="p-3">15-21 Days</td>
                  <td className="p-3">Evaluated against local NATHAM rural homestead policies.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Gujarat</td>
                  <td className="p-3">Mamlatdar</td>
                  <td className="p-3 font-mono text-muted-foreground">digitalgujarat.gov.in</td>
                  <td className="p-3">15-20 Days</td>
                  <td className="p-3">Requires standard Mamlatdar declaration.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Rajasthan</td>
                  <td className="p-3">SDM / Tehsildar</td>
                  <td className="p-3 font-mono text-muted-foreground">emitra.rajasthan.gov.in</td>
                  <td className="p-3">21-30 Days</td>
                  <td className="p-3">Integrated with e-Mitra SSO services.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Punjab</td>
                  <td className="p-3">SDM</td>
                  <td className="p-3 font-mono text-muted-foreground">edistrict.punjab.gov.in</td>
                  <td className="p-3">15-21 Days</td>
                  <td className="p-3">Must be certified by Naib Tehsildar minimum.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Bihar</td>
                  <td className="p-3">RTPS Circle Officer</td>
                  <td className="p-3 font-mono text-muted-foreground">serviceonline.bihar.gov.in</td>
                  <td className="p-3">7-15 Days</td>
                  <td className="p-3">Fully digital; download PDF directly without visiting.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-2xl flex gap-3 text-amber-800 dark:text-amber-300 text-xs md:text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Processing Times Warning:</strong> Mentioned durations are general estimates. Incomplete document dossiers or peak examination application periods (UPSC, SSC, JEE seasons from July to October) can trigger local administrative delays. Apply at least 1-2 months in advance.
            </p>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 7: FORUM INSIGHTS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="forum-insights-section">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              Community Forum Q&A
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What are the Real Questions from EWS Aspirants?
            </h2>
            <p className="text-sm text-muted-foreground">
              Fact-checked answers to questions from student communities like Reddit `r/UPSC`, `r/india`, and Quora India.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {[
              {
                q: "My family owns a house in a village (non-notified area). The plot is 180 sq yards. Are we disqualified from EWS?",
                a: "No. The EWS property disqualification for non-notified municipal rural areas is 200 sq yards or more. A 180 sq yard plot in a non-notified area does NOT disqualify you. However, you must verify with your local Circle Office or SDM whether the area is officially 'notified' or 'non-notified' — this classification significantly changes the threshold (100 vs 200 sq yards)."
              },
              {
                q: "I'm General category but my OBC friend says his income is also below ₹8 lakh — why can't he apply for EWS?",
                a: "EWS reservation is exclusively for the General (Unreserved) category to provide support for economically weak individuals who don't have any other reservation. OBC, SC, and ST communities already have their own reservation categories (OBC: 27%, SC: 15%, ST: 7.5%) under different constitutional provisions. A person cannot claim two different reservation categories simultaneously."
              },
              {
                q: "I have agricultural land of 4.8 acres. Am I eligible for EWS?",
                a: "Yes, you are NOT disqualified on account of agricultural land — the threshold is 5 acres or more. At 4.8 acres, you remain within the EWS property limit for agricultural land. However, all other property conditions (residential flat, plot) and the income limit must also be met independently."
              },
              {
                q: "Is EWS certificate required for state government jobs or only central?",
                a: "EWS reservation originally applied only to central government jobs and central educational institutions under the 103rd Constitutional Amendment. However, as of 2026, almost all Indian states have enacted their own EWS reservation legislation for state government employment and state educational institutions. You need an EWS certificate for both central AND state reservations, but state governments may have their own eligibility criteria that differ slightly from central GOI criteria."
              },
              {
                q: "Is EWS certificate from 2024 valid for UPSC 2026 CSE application?",
                a: "No. Your EWS certificate must be valid at the time of application for the exam. UPSC CSE requires a currently valid EWS certificate at the time of form submission. A 2024 certificate would typically have expired by 2026 (valid for 1 financial year). Apply for a fresh/renewed certificate before the UPSC notification closes."
              }
            ].map((forum, idx) => {
              const isOpen = openForumIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-all"
                >
                  <button
                    onClick={() => toggleForum(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs md:text-sm text-foreground focus:outline-none"
                  >
                    <span>{forum.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs md:text-sm text-foreground/80 leading-relaxed border-t border-border/40 pt-4">
                      {forum.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 8: FAQ (FAQPage Schema representation)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="ews-faq">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ Database
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions About the EWS Certificate
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {[
              {
                q: "What is EWS category in India?",
                a: "EWS (Economically Weaker Section) is a category of Indian citizens from the General (Unreserved) category whose family income is below ₹8 lakh per annum and who do not own significant property. The 103rd Constitutional Amendment (2019) provides 10% reservation for EWS in central government jobs and central educational institutions. EWS reservation is separate from OBC, SC, and ST reservations."
              },
              {
                q: "What is the income limit for EWS certificate?",
                a: "The family income limit for EWS certificate is ₹8 lakh per annum (gross annual income from all sources including salary, business, agriculture, and other income). This is the same number as the OBC NCL creamy layer limit, but the EWS criterion also includes property-based disqualification, which OBC NCL does not."
              },
              {
                q: "Who is eligible for EWS certificate?",
                a: "To be eligible for EWS certificate, you must: (1) belong to the General (Unreserved) category — i.e., you are not SC, ST, or OBC; (2) have a family annual income below ₹8 lakh from all sources; (3) NOT own agricultural land of 5 acres or more; (4) NOT own a residential flat of 1000 sq ft or more; (5) NOT own a residential plot of 100 sq yards or more in notified municipalities; (6) NOT own a residential plot of 200 sq yards or more in non-notified areas."
              },
              {
                q: "Can OBC/SC/ST candidates apply for EWS certificate?",
                a: "No. EWS reservation under the 103rd Constitutional Amendment is exclusively for candidates from the General (Unreserved) category who are not already covered by SC, ST, or OBC reservation. If you belong to SC, ST, or OBC, you are NOT eligible for EWS certificate or EWS reservation."
              },
              {
                q: "What is the difference between EWS and OBC NCL?",
                a: "EWS applies to candidates from the General (unreserved) category with income below ₹8 lakh and certain property restrictions. OBC NCL applies to candidates from OBC communities whose family income is below ₹8 lakh. They are separate reservation categories: EWS = General category + low income + property conditions. OBC NCL = OBC community + low income. A person cannot claim both simultaneously."
              },
              {
                q: "How long is an EWS certificate valid?",
                a: "An EWS certificate is valid for 1 year (financial year, April 1 to March 31) from the date of issue. It must be renewed annually. For UPSC and competitive exams, the certificate must be valid at the time of application. Some states issue certificates that are valid for the entire financial year, others specify validity from date of issue."
              },
              {
                q: "Is EWS reservation valid in private sector jobs?",
                a: "No. EWS reservation under the 103rd Constitutional Amendment applies only to central government employment and central educational institutions (IITs, NITs, central universities, etc.). It does not apply to private sector jobs, private educational institutions, or state government jobs (unless the state has adopted its own EWS reservation legislation, as most states have done by 2026)."
              }
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs md:text-sm text-foreground focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs md:text-sm text-foreground/80 leading-relaxed border-t border-border/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 9: RELATED LINKS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="related-resources">
          <div className="text-center md:text-left max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Where Can I Find Related EWS Certificate Guides?
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Explore our informative legal, educational, and medical exemption guidelines.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Guide Card 1 */}
            <a 
              href="/obc-non-creamy-layer-certificate" 
              className="bg-card border border-border hover:border-primary/30 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block"
            >
              <FileText className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                OBC Non-Creamy Layer Guide
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Complete guide to OBC Non-Creamy Layer parameters, family salary rules, and annual SDM/Tehsildar renewal.
              </p>
              <div className="flex items-center gap-1 text-primary text-xs font-bold mt-4">
                Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Guide Card 2 */}
            <a 
              href="/medical-exemption-certificate" 
              className="bg-card border border-border hover:border-primary/30 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block"
            >
              <FileText className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                Medical Exemption Guide
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Create a medical exemption certificate instantly for travel, office duties, vaccine exceptions, or chronic conditions.
              </p>
              <div className="flex items-center gap-1 text-primary text-xs font-bold mt-4">
                Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Guide Card 3 */}
            <a 
              href="/about" 
              className="bg-card border border-border hover:border-primary/30 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block"
            >
              <FileText className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                Editorial & Trust Standards
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Meet our expert editorial team, read our medical sourcing guidelines, and understand our project goals.
              </p>
              <div className="flex items-center gap-1 text-primary text-xs font-bold mt-4">
                Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* External Links */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span className="font-medium text-center sm:text-left">Official Government Resources:</span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://dopt.gov.in" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                DoPT EWS Guidelines <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://persmin.gov.in" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                103rd Amendment Notification <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
