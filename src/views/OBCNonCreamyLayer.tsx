"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  ChevronDown, 
  HelpCircle, 
  FileText, 
  Layers, 
  Scale, 
  BookOpen, 
  ChevronUp, 
  ExternalLink,
  ArrowRight,
  Calculator,
  ClipboardList,
  MapPin,
  RefreshCw,
  MessageSquare
} from "lucide-react";

export function OBCNonCreamyLayer() {
  // Income Calculator States
  const [income, setIncome] = useState("");
  const [parentJob, setParentJob] = useState("group-c-d");
  const [result, setResult] = useState<null | "eligible" | "not-eligible" | "check-required">(null);

  // Accordion States for Forum Insights
  const [openForumIndex, setOpenForumIndex] = useState<number | null>(null);

  // Accordion States for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  function checkEligibility() {
    const incomeNum = parseFloat(income);
    if (isNaN(incomeNum) || income.trim() === "") { 
      setResult(null); 
      return; 
    }
    
    if (
      parentJob === "group-a-direct" || 
      parentJob === "constitutional-post" || 
      parentJob === "armed-colonel-plus"
    ) {
      setResult("not-eligible");
      return;
    }
    
    if (incomeNum > 800000) {
      setResult("not-eligible");
    } else if (incomeNum <= 800000 && parentJob === "group-b-direct") {
      setResult("check-required"); // Group B direct recruits have conditional rules
    } else {
      setResult("eligible");
    }
  }

  function toggleForum(index: number) {
    setOpenForumIndex(openForumIndex === index ? null : index);
  }

  function toggleFaq(index: number) {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO (SEO & AEO priority)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header className="py-16 md:py-24 px-4 text-center bg-gradient-to-b from-primary/5 via-transparent to-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-muted-foreground text-xs md:text-sm mb-6 flex items-center justify-center gap-2 font-medium">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>&gt;</span>
            <a href="/generator" className="hover:text-primary transition-colors">Government Certificates</a>
            <span>&gt;</span>
            <span className="text-foreground font-semibold">OBC Non-Creamy Layer Certificate</span>
          </nav>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Non-Creamy Layer Certificate (OBC NCL) — Complete Guide 2026
          </h1>
          
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Understand the OBC Non-Creamy Layer parameters, eligibility standards, income calculations, required documents, and state-wise application methods under the Government of India guidelines.
          </p>

          {/* AEO Answer Box */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mt-8 shadow-sm text-left relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            <span className="text-xs uppercase tracking-wider text-primary font-bold block mb-2">
              What is a Non-Creamy Layer Certificate?
            </span>
            <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
              A <strong>Non-Creamy Layer (NCL) certificate</strong> is an official government document certifying that an OBC (Other Backward Class) individual's family income is <strong>below ₹8 lakh per year</strong>, making them eligible for OBC reservation benefits (27% quota) in central government jobs, central educational institutions (like IITs, IIMs, AIIMS), and central government welfare schemes.
            </p>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>Authority: Ministry of Social Justice and Empowerment (MSJE)</span>
              <span className="bg-muted px-2.5 py-1 rounded-full text-foreground/80 font-mono text-[10px]">
                GOI OM No. 36033/3/2004-Estt.(Res.)
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 md:py-16 w-full space-y-16 md:space-y-24">
        
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2: NCL vs CASTE CERTIFICATE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="difference-caste-ncl">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              Administrative Comparison
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What is the Difference Between a Caste Certificate and a Non-Creamy Layer Certificate?
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto border border-border rounded-xl bg-card shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-muted/50 border-b border-border text-xs md:text-sm font-bold text-foreground">
                  <th className="p-4 w-1/4">Feature</th>
                  <th className="p-4 w-3/8">OBC Caste Certificate</th>
                  <th className="p-4 w-3/8">Non-Creamy Layer (NCL) Certificate</th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-sm text-foreground/85 divide-y divide-border/60">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Primary Purpose</td>
                  <td className="p-4">Establishes community membership in an Other Backward Class (OBC) category.</td>
                  <td className="p-4">Establishes that the individual does not belong to the wealthy or socially advanced "Creamy Layer".</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Validity Period</td>
                  <td className="p-4 font-medium text-emerald-600 dark:text-emerald-400">Permanent (Lifetime validity, unless cancelled by authority).</td>
                  <td className="p-4 font-medium text-amber-600 dark:text-amber-400">1 Financial Year (Annual renewal required after March 31st).</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Income Assessment</td>
                  <td className="p-4">No income checks are performed during issuance.</td>
                  <td className="p-4">Gross family income must remain below ₹8 lakh/annum (excluding agricultural income).</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Issuing Authority</td>
                  <td className="p-4">Tehsildar, Sub-Divisional Magistrate (SDM), or Revenue Officer.</td>
                  <td className="p-4">Tehsildar, Sub-Divisional Magistrate (SDM), or Block Development Officer (BDO).</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Applicability Scope</td>
                  <td className="p-4">Primarily state-level reservations (depending on listing).</td>
                  <td className="p-4">Central government reservations (UPSC, SSC, JEE, NEET, banking recruitment).</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Required Jointly?</td>
                  <td className="p-4" colSpan={2}>
                    <span className="font-semibold text-foreground">Yes.</span> To claim central reservation benefits, both documents must be presented together. The caste certificate proves your community qualification, whereas the NCL certificate establishes economic qualification.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-4xl">
            Both documents are mandatory together to claim OBC reservation in UPSC, SSC, RRB, central university admissions, and central government employment. The caste certificate establishes your OBC community status (permanent), while the NCL certificate establishes your economic status (renewable annually). Missing either document or failing to submit a valid certificate during application verification will result in the immediate disqualification of your reservation claim, forcing conversion to the General (Unreserved) category.
          </p>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: WHAT IS OBC NCL (Deep Explanation)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="constitutional-basis">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <Scale className="w-3.5 h-3.5" />
              Legal & Constitutional Foundations
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What is OBC Non-Creamy Layer (NCL) — Meaning and Constitutional Basis?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed">
              <p>
                The administrative division of the Other Backward Classes (OBC) into "Creamy Layer" and "Non-Creamy Layer" stems from foundational constitutional provisions and landmark judiciary verdicts. Under <strong>Article 16(4) of the Constitution of India</strong>, the State reserves the authority to make provisions for the reservation of appointments or posts in favor of any backward class of citizens who, in the opinion of the State, are not adequately represented in the public services.
              </p>
              <p>
                In 1980, the <strong>Mandal Commission</strong> submitted its report recommending a 27% quota for OBCs. Following implementation in 1990, the decision was legally challenged, leading to the historic Supreme Court constitution bench ruling in <strong>Indra Sawhney v. Union of India (1992)</strong>. The Supreme Court upheld the 27% reservation but mandated the exclusion of the socially and economically advanced section of the OBC community, termed the "Creamy Layer," to ensure that benefits reach the genuinely underprivileged segments.
              </p>
            </div>
            
            <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed bg-muted/40 p-6 rounded-2xl border border-border">
              <p>
                Consequently, the <strong>Ministry of Social Justice and Empowerment</strong> established explicit criteria to filter the Creamy Layer. The income cap has been progressively updated to reflect changing economic conditions across India:
              </p>
              <ul className="grid grid-cols-2 gap-3 text-xs md:text-sm font-semibold my-2">
                <li className="bg-card p-2.5 rounded-lg border border-border">1993: ₹1.0 Lakh/yr</li>
                <li className="bg-card p-2.5 rounded-lg border border-border">2004: ₹2.5 Lakh/yr</li>
                <li className="bg-card p-2.5 rounded-lg border border-border">2008: ₹4.5 Lakh/yr</li>
                <li className="bg-card p-2.5 rounded-lg border border-border">2013: ₹6.0 Lakh/yr</li>
                <li className="bg-card p-2.5 rounded-lg border border-border text-primary border-primary/20">2017–Present: ₹8.0 Lakh/yr</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-2 italic">
                OBC NCL ka matlab hai ki aapki family income ₹8 lakh per year se kam hai aur aap OBC reservation ke benefits le sakte hain (central list community membership is mandatory).
              </p>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: ELIGIBILITY (Bullet Lists)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-8 scroll-mt-20" id="eligibility-criteria">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Eligibility Parameters
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Who is Eligible for OBC Non-Creamy Layer Certificate?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligible Card */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Basic Eligibility Criteria</h3>
              </div>
              <ul className="space-y-3.5 text-xs md:text-sm text-foreground/80 leading-relaxed">
                <li className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>The applicant's community must be listed in the <strong>Central OBC List</strong> maintained by the Ministry of Social Justice (or state OBC lists for state jobs).</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>The gross annual household income from non-agricultural sources (salaries, business profits, professional practice) must be <strong>below ₹8 lakh per annum</strong>.</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Parents are not employed as Group A (Class I) or Group B (Class II) officers through direct recruitment in Central or State government.</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Parents do not hold Constitutional Positions (e.g., President, Vice-President, Governor, Supreme Court/High Court Judges).</span>
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Parents do not hold the rank of Colonel or above in the Armed Forces, or equivalent ranks in the Navy, Air Force, and Paramilitary forces.</span>
                </li>
              </ul>
            </div>

            {/* Non-Eligible Card */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-destructive/10 text-destructive rounded-xl">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Who is NOT Eligible (Creamy Layer)</h3>
              </div>
              <ul className="space-y-3.5 text-xs md:text-sm text-foreground/80 leading-relaxed">
                <li className="flex gap-2.5">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <span>Family gross annual income exceeds the statutory threshold of <strong>₹8 lakh per year</strong> for the past three consecutive financial years.</span>
                </li>
                <li className="flex gap-2.5">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <span>Either parent was directly recruited as a Class I / Group A officer under the Central/State government or in equivalent PSU/autonomous bodies.</span>
                </li>
                <li className="flex gap-2.5">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <span>Both parents were directly recruited as Group B / Class II officers (exceptions apply to direct promotions before reaching the age of 40).</span>
                </li>
                <li className="flex gap-2.5">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <span>Parents own agricultural land exceeding the statutory ceiling limits defined under regional state land tenancy acts.</span>
                </li>
                <li className="flex gap-2.5">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  <span>Children of professionals (Doctors, Lawyers, Chartered Accountants, Engineers) whose individual professional income exceeds ₹8 lakh.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Special Rules for Government Employees */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <h3 className="font-bold text-base md:text-lg">Special Rule: OBC Non-Creamy Layer Income Limit for Government Employees</h3>
            </div>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
              For central and state government employees, the Creamy Layer classification is <strong>NOT purely based on family income</strong> — it is primarily dependent on the employee's pay grade. A Group A (Class I) or Group B (Class II) officer is classified as Creamy Layer regardless of family income if they were directly recruited to that post. However, if a Group C or Group D employee's salary and total family income remains under ₹8 lakh per annum, their children remain eligible for the NCL certificate. 
            </p>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold">
              CRITICAL DISTINCTION: Under Department of Personnel and Training (DoPT) guidelines, income from salaries and agricultural land is EXCLUDED when calculating the ₹8 lakh threshold for government employees. Only income from independent business, professional practice, or private investments is counted towards the ₹8 lakh ceiling. Refer to DoPT Office Memorandum No. 36012/22/93-Estt.(SCT) for the precise pay-scale eligibility matrix.
            </p>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 5: INCOME CALCULATOR (HEO Tool)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="income-calculator">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Eligibility Tool
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Interactive OBC NCL Income Eligibility Checker
            </h2>
            <p className="text-sm text-muted-foreground">
              Quickly assess if your family background satisfies the guidelines of the Central Government criteria.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl shadow-sm max-w-2xl mx-auto overflow-hidden hover:border-primary/20 transition-colors">
            <div className="p-6 md:p-8 space-y-6">
              {/* Form Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Income input */}
                <div className="space-y-2">
                  <label htmlFor="annual-income" className="block text-xs md:text-sm font-semibold text-foreground">
                    Annual Non-Salary Family Income (₹)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-muted-foreground text-sm font-semibold">
                      ₹
                    </span>
                    <input
                      id="annual-income"
                      type="number"
                      placeholder="e.g. 550000"
                      className="w-full bg-background border border-border focus:border-primary rounded-xl py-2.5 pl-8 pr-4 text-sm font-medium focus:outline-none transition-colors"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground leading-normal block">
                    Exclude income from central/state salaries and agricultural land.
                  </span>
                </div>

                {/* Job type dropdown */}
                <div className="space-y-2">
                  <label htmlFor="parent-job" className="block text-xs md:text-sm font-semibold text-foreground">
                    Parent/Guardian Service Category
                  </label>
                  <select
                    id="parent-job"
                    className="w-full bg-background border border-border focus:border-primary rounded-xl py-2.5 px-3 text-sm font-medium focus:outline-none transition-colors"
                    value={parentJob}
                    onChange={(e) => setParentJob(e.target.value)}
                  >
                    <option value="group-c-d">Group C/D Employee or Private/Self-employed</option>
                    <option value="group-b-direct">Group B Officer (Direct Recruit)</option>
                    <option value="group-a-direct">Group A Officer (Direct Recruit / IAS / IPS)</option>
                    <option value="constitutional-post">Constitutional Post Holder</option>
                    <option value="armed-colonel-plus">Armed Forces Colonel or above</option>
                  </select>
                </div>
              </div>

              {/* Action Button */}
              <Button 
                onClick={checkEligibility}
                className="w-full py-3 text-sm font-bold flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                Check NCL Eligibility
              </Button>

              {/* Dynamic Results Rendering */}
              {result !== null && (
                <div className="pt-4 border-t border-border">
                  {result === "eligible" && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 flex gap-3 text-emerald-800 dark:text-emerald-300">
                      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div className="text-xs md:text-sm space-y-1">
                        <p className="font-bold">Likely Eligible for OBC Non-Creamy Layer Status</p>
                        <p className="leading-relaxed text-foreground/80">
                          Based on your input, your non-salary family income of <strong>₹{parseFloat(income).toLocaleString("en-IN")}</strong> falls within the central limit of ₹8 lakh and your parents' occupation does not violate direct recruit criteria. You can proceed with the application.
                        </p>
                      </div>
                    </div>
                  )}

                  {result === "not-eligible" && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 flex gap-3 text-destructive">
                      <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div className="text-xs md:text-sm space-y-1">
                        <p className="font-bold">Likely Classified as Creamy Layer</p>
                        <p className="leading-relaxed text-foreground/80 text-destructive-foreground">
                          {parentJob === "group-a-direct" || parentJob === "constitutional-post" || parentJob === "armed-colonel-plus" ? (
                            <span>Reason: A parent occupying a Constitutional Post, being directly recruited as a Group A officer, or holding the rank of Colonel or above immediately places their dependents under the Creamy Layer bracket, regardless of income.</span>
                          ) : (
                            <span>Reason: Your family's reported non-salary income of <strong>₹{parseFloat(income).toLocaleString("en-IN")}</strong> exceeds the mandatory central limit of ₹8,00,000.</span>
                          )}
                        </p>
                      </div>
                    </div>
                  )}

                  {result === "check-required" && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 flex gap-3 text-amber-800 dark:text-amber-300">
                      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div className="text-xs md:text-sm space-y-1">
                        <p className="font-bold">Conditional Verification Required</p>
                        <p className="leading-relaxed text-foreground/80">
                          For children of Group B (Class II) officers, eligibility depends heavily on when the direct recruitment took place and if the parents have been promoted to Group A before reaching 40. Please visit your local Tehsildar/SDM office with service records to obtain an official determination.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bg-muted/50 px-6 py-4 border-t border-border/60 text-[10px] md:text-xs text-muted-foreground text-center">
              Disclaimer: This interactive tool is intended solely for educational reference. Formal eligibility determinations can only be issued by an authorized competent authority (Tehsildar/SDM/BDO) after validation of original revenue documents.
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 6: DOCUMENTS REQUIRED
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="documents-required">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <ClipboardList className="w-3.5 h-3.5" />
              Document Checklist
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What Documents are Required for a Non-Creamy Layer Certificate?
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Prepare this structured documentary dossier to ensure seamless processing and prevent rejection by the desk officer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-all">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Category 1</span>
              <h3 className="font-bold text-sm text-foreground">Proof of Identity (Any 1)</h3>
              <ul className="text-xs text-foreground/80 space-y-2 list-disc list-inside">
                <li>Aadhaar Card</li>
                <li>PAN Card</li>
                <li>Voter Identity Card</li>
                <li>Indian Passport</li>
                <li>Driving Licence</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-all">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Category 2</span>
              <h3 className="font-bold text-sm text-foreground">Proof of Address (Any 1)</h3>
              <ul className="text-xs text-foreground/80 space-y-2 list-disc list-inside">
                <li>Aadhaar Card (matching)</li>
                <li>Recent Electricity or Water Bill</li>
                <li>Nationalised Bank Passbook</li>
                <li>Ration Card (NFSA)</li>
                <li>Registered Rental Agreement</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-all">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Category 3</span>
              <h3 className="font-bold text-sm text-foreground">Income Proof (By Job)</h3>
              <ul className="text-xs text-foreground/80 space-y-2 list-disc list-inside">
                <li>Form 16 & Salary Slips (Salaried)</li>
                <li>ITR-V for last 3 years (Business)</li>
                <li>Self-attested Income Affidavit</li>
                <li>Khasra/Khatauni land copy (Farmer)</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-all">
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Category 4</span>
              <h3 className="font-bold text-sm text-foreground">Mandatory Support</h3>
              <ul className="text-xs text-foreground/80 space-y-2 list-disc list-inside">
                <li>Permanent Caste Certificate</li>
                <li>Recent Passport Photo (2)</li>
                <li>Signed Self-Declaration</li>
                <li>Duly Filled Application Form</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5 flex gap-3 text-amber-800 dark:text-amber-300">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm leading-relaxed">
              <strong>Important State Variation Note:</strong> Custom parameters and documents vary slightly by state. Always confirm the current list with your local SDM/Tehsildar office or the state's e-District portal before applying. Some states mandate a local municipal/Gram Panchayat resident certificate as supplementary proof.
            </p>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 7: HOW TO APPLY (Step-by-Step)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-8 scroll-mt-20" id="apply-process">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Administrative Procedure
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              How to Apply for an OBC Non-Creamy Layer Certificate?
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Indian citizens can choose between traditional offline applications at revenue centers or digital applications on official portals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Offline Method */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm hover:border-primary/20 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-foreground border-b border-border pb-3 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-6 h-6 text-xs bg-muted text-foreground font-bold rounded-full">1</span>
                Traditional Offline Application Method
              </h3>
              <ol className="space-y-4 text-xs md:text-sm text-foreground/80 leading-relaxed list-decimal list-inside">
                <li>
                  <span className="font-semibold text-foreground">Locate local office:</span> Find your nearest Sub-Divisional Magistrate (SDM), Tehsildar, or Circle Office (search "SDM office near me" or check your district collector's website).
                </li>
                <li>
                  <span className="font-semibold text-foreground">Procure form:</span> Obtain the physical NCL application form from the office counter (available for a nominal fee of ₹5 to ₹20, or free of charge in municipal desks).
                </li>
                <li>
                  <span className="font-semibold text-foreground">Compile details:</span> Fill all sections: Applicant name, caste details, parental occupational details, non-salary income parameters, and residential addresses.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Attach dossier:</span> Attach photocopies of proof of identity, permanent caste certificate, income documentation, and self-declaration affidavit.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Submit and track:</span> Hand over your documents at the counter, pay the regional application fee (usually ₹30–₹50), and secure the acknowledgement receipt with a tracking code.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Verification & collection:</span> Revenue inspectors will carry out physical address and income verifications within 15–30 working days. Collect the certificate in person upon clearance.
                </li>
              </ol>
            </div>

            {/* Online Method */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm hover:border-primary/20 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-foreground border-b border-border pb-3 flex items-center gap-2.5">
                <span className="flex items-center justify-center w-6 h-6 text-xs bg-muted text-foreground font-bold rounded-full">2</span>
                Modern Online Application Method
              </h3>
              <div className="space-y-4 text-xs md:text-sm text-foreground/80 leading-relaxed">
                <p>
                  Over 20 Indian states now offer online NCL certificate applications through their e-District or Seva portals. Log in, upload digitized PDF documents, and download digitally signed certificates directly.
                </p>
                <div className="overflow-x-auto border border-border rounded-xl">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-muted border-b border-border font-semibold text-foreground">
                        <th className="p-2.5">State</th>
                        <th className="p-2.5">Official Portal Name</th>
                        <th className="p-2.5">Portal URL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      <tr>
                        <td className="p-2.5 font-medium">Uttar Pradesh</td>
                        <td className="p-2.5">UP eDistrict</td>
                        <td className="p-2.5 font-mono text-muted-foreground">edistrict.up.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Maharashtra</td>
                        <td className="p-2.5">Aaple Sarkar</td>
                        <td className="p-2.5 font-mono text-muted-foreground">aaplesarkar.mahaonline.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Delhi</td>
                        <td className="p-2.5">Delhi e-District</td>
                        <td className="p-2.5 font-mono text-muted-foreground">edistrict.delhigovt.nic.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Karnataka</td>
                        <td className="p-2.5">Nadakacheri</td>
                        <td className="p-2.5 font-mono text-muted-foreground">nadakacheri.karnataka.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Tamil Nadu</td>
                        <td className="p-2.5">TN e-Sevai</td>
                        <td className="p-2.5 font-mono text-muted-foreground">tnesevai.tn.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Gujarat</td>
                        <td className="p-2.5">Digital Gujarat</td>
                        <td className="p-2.5 font-mono text-muted-foreground">digitalgujarat.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Rajasthan</td>
                        <td className="p-2.5">SSO Rajasthan</td>
                        <td className="p-2.5 font-mono text-muted-foreground">sso.rajasthan.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Punjab</td>
                        <td className="p-2.5">Sewa Kendra</td>
                        <td className="p-2.5 font-mono text-muted-foreground">sevakendra.punjab.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Haryana</td>
                        <td className="p-2.5">Antyodaya-SARAL</td>
                        <td className="p-2.5 font-mono text-muted-foreground">saralharyana.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">West Bengal</td>
                        <td className="p-2.5">e-District WB</td>
                        <td className="p-2.5 font-mono text-muted-foreground">edistrict.wb.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Madhya Pradesh</td>
                        <td className="p-2.5">MP eDistrict</td>
                        <td className="p-2.5 font-mono text-muted-foreground">mpedistrict.gov.in</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-medium">Bihar</td>
                        <td className="p-2.5">RTPS Bihar</td>
                        <td className="p-2.5 font-mono text-muted-foreground">rtps.bihar.gov.in</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-muted-foreground italic">
                  Note: For states not listed or where online services are not yet fully available, visit your nearest Tehsildar/SDM/Circle Office in person to proceed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 8: HOW TO RENEW NCL CERTIFICATE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="renewal-guide">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <RefreshCw className="w-3.5 h-3.5" />
              Certificate Lifecycle
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              How to Renew Your Non-Creamy Layer Certificate?
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm hover:border-primary/20 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 text-xs md:text-sm text-foreground/80 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A Non-Creamy Layer certificate is strictly valid for <strong>one financial year (April 1st to March 31st)</strong> or one calendar year, depending on the state of issue. It must be renewed annually to retain continuous reservation eligibility, especially before major academic or employment application windows.
                </p>
                <p>
                  For national competitive examinations like UPSC Civil Services, state portals accept the NCL certificate valid at the time of application submission. In accordance with Supreme Court clarifications, a candidate who applies in July 2025 with an NCL certificate valid until March 31st, 2026, is completely eligible; they are NOT required to possess a fresh certificate at the time of the subsequent interview.
                </p>
              </div>
              
              <div className="space-y-4 bg-muted/40 p-5 rounded-xl border border-border">
                <h4 className="font-bold text-foreground">Step-by-step Renewal Highlights:</h4>
                <ul className="space-y-2.5 list-disc list-inside">
                  <li>Initiate the renewal at least 30 days prior to submission deadlines.</li>
                  <li>Submit the previous original NCL certificate to expedite validation.</li>
                  <li>Provide Form 16, income statements, or land revenue tax receipts of the current financial year.</li>
                  <li>Processing times for renewals are usually faster (7–15 working days) compared to fresh applications.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 9: FORUM INSIGHTS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="forum-insights">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              Community & Legal Q&A
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What are the Common Questions from UPSC, SSC & OBC Aspirants?
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Curated and fact-checked responses to questions raised on online forums including Reddit r/UPSC, r/india, r/LegalAdviceIndia, and Quora India.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {[
              {
                q: "My father is a Group B gazetted officer but was promoted from Group C — am I creamy layer?",
                a: "This is one of the most debated points. The Creamy Layer criteria apply to direct recruits to Group A/B posts — not those promoted from Group C/D. If your father was promoted to Group B from Group C and his total family income is below ₹8 lakh/year, you should be eligible for NCL certificate. However, implementation varies by state. Request a written determination from your SDM office and, if denied, appeal under the Right to Services Act in your state."
              },
              {
                q: "Can I use my OBC NCL certificate from 2024 for UPSC 2026?",
                a: "No. For each UPSC application cycle, your NCL certificate must be valid at the time of application submission. A certificate from 2024 would typically have expired by 2026. Apply for renewal before submitting your UPSC application form."
              },
              {
                q: "My caste is in state OBC list but not in Central OBC list. Can I still get NCL certificate?",
                a: "If your caste is only in the state OBC list (not the Central OBC list maintained by MSJE), you are eligible for state-level OBC reservation (state government jobs, state university admissions) but NOT for central government reservation (UPSC, SSC, RRB, central university admissions). For central reservation, your community must appear in the Central OBC List."
              },
              {
                q: "Annual income for NCL — does it include my mother's income if she's a housewife with no formal income?",
                a: "If your mother has no income (housewife with no employment or rental income), her income is ₹0 and does not affect the ₹8 lakh threshold. Only actual income from employment, business, or non-agricultural sources is counted. Agricultural land income is specifically excluded from the ₹8 lakh calculation per GOI guidelines."
              },
              {
                q: "NCL certificate for a person from a state other than domicile?",
                a: "Your NCL certificate must be issued by the state/UT where your family is domiciled — typically where your caste certificate was issued. For central government purposes, a certificate from any state's competent authority (SDM/Tehsildar) is accepted. For state-level purposes, the state where you're applying may require a certificate from that specific state's authority."
              }
            ].map((item, idx) => {
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
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs md:text-sm text-foreground/80 leading-relaxed border-t border-border/40 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 10: FAQ (FAQPage Schema representation)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="faq-section">
          <div className="text-center md:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions About the OBC NCL Certificate
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {[
              {
                q: "What is a Non-Creamy Layer certificate?",
                a: "A Non-Creamy Layer (NCL) certificate is an official government document that certifies an OBC (Other Backward Class) individual does not belong to the 'creamy layer' — i.e., their family income is below ₹8 lakh per year. It is required to claim OBC reservation benefits in central government jobs, central educational institutions, and central government schemes."
              },
              {
                q: "What is the income limit for OBC Non-Creamy Layer?",
                a: "The income limit for OBC Non-Creamy Layer status is ₹8 lakh per annum (₹8,00,000 per year) for central government purposes, revised in 2017. This applies to gross annual income from all sources except agricultural income. Several states have their own income limits which may differ."
              },
              {
                q: "What is the difference between a caste certificate and a non-creamy layer certificate?",
                a: "A caste certificate certifies that you belong to a specific OBC community listed in the central or state OBC list — it is permanent and does not expire. A Non-Creamy Layer (NCL) certificate certifies that your family income is below ₹8 lakh/year, qualifying you for OBC reservation benefits — it is issued annually and must be renewed. Both documents are required together to claim OBC reservation in central government jobs and educational institutions."
              },
              {
                q: "How long is a Non-Creamy Layer certificate valid?",
                a: "A Non-Creamy Layer certificate is typically valid for 1 year (financial year) from the date of issue. It must be renewed annually. For competitive exams like UPSC Civil Services, the certificate must be valid at the time of application, not at the time of appointment."
              },
              {
                q: "Can a government employee's child get OBC NCL certificate?",
                a: "It depends on the parent's pay grade. Children of government employees in Group A (Class I) and Group B (Class II) positions directly recruited or promoted — unless they fall below specific pay scales — are classified as Creamy Layer and NOT eligible for NCL certificate. Children of government employees in Group C and D positions can apply for NCL certificate if their income is below ₹8 lakh per annum from non-salary sources. Refer to the Creamy Layer criteria in the OBC reservation order (OM No. 36012/22/93-Estt. (SCT))."
              },
              {
                q: "Who issues the Non-Creamy Layer certificate?",
                a: "The Non-Creamy Layer certificate is issued by the Sub-Divisional Magistrate (SDM), Tehsildar, Revenue Officer, or District Collector's office in most Indian states. In some states it is issued by the Block Development Officer (BDO). The exact issuing authority varies by state."
              },
              {
                q: "How do I renew my Non-Creamy Layer certificate?",
                a: "To renew your NCL certificate, visit the same office that issued your original certificate (SDM/Tehsildar/BDO office) before the expiry date. Submit fresh income proof (Form 16, salary slip, or income affidavit) for the current financial year, along with your previous NCL certificate, caste certificate, and Aadhaar card. Many states now offer online renewal through state e-district portals."
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
            SECTION 11: RELATED PAGES & INTERNAL LINKS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="space-y-6 scroll-mt-20" id="related-resources">
          <div className="text-center md:text-left max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Where Can I Find Related Government Certificate Guides?
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Explore our informative legal, educational, and medical exemption blueprints.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Guide Card 1 */}
            <a 
              href="/ews-certificate" 
              className="bg-card border border-border hover:border-primary/30 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block"
            >
              <FileText className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                EWS Certificate Guide
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Complete guide to Economically Weaker Section (EWS) 10% reservations, state qualifications, and income limits.
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
              href="/medical-certificate-for-leave" 
              className="bg-card border border-border hover:border-primary/30 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block"
            >
              <FileText className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                Medical Leave Guide
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Standard format guidelines and requirements for presenting medical certificates for employment or school leave.
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
                href="https://msje.gov.in/obc-main.htm" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                Central OBC List (MSJE) <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://persmin.gov.in" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                OBC Creamy Layer Criteria (DoPT) <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="/about" 
                className="hover:underline text-foreground"
              >
                About Our Editorial Standards
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
