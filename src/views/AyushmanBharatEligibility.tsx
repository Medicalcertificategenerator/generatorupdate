"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Landmark,
  FileText,
  Activity,
  Heart,
  Search,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  CreditCard,
  UserCheck,
  HelpCircle
} from "lucide-react";

const INDIAN_STATES = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

export function AyushmanBharatEligibility() {
  const [state, setState] = useState("Uttar Pradesh");
  const [searchBy, setSearchBy] = useState("aadhaar");
  const [inputValue, setInputValue] = useState("");
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleRedirect = () => {
    window.open("https://beneficiary.nha.gov.in/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Breadcrumb section */}
      <div className="max-w-6xl mx-auto px-4 w-full pt-8">
        <nav className="text-muted-foreground text-xs md:text-sm flex items-center gap-2 font-medium">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>&gt;</span>
          <span className="text-foreground font-semibold">Ayushman Bharat Eligibility Checker</span>
        </nav>
      </div>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 md:py-12 w-full space-y-16 md:space-y-24">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            COMPONENT 1 — THE TOOL (Prominently above the fold)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Ayushman Bharat Eligibility Checker — Check PMJAY Status Online
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Select your state and search identifier to launch the official National Health Authority eligibility checker portal.
            </p>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-3xl p-6 md:p-8 shadow-xl text-left relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-emerald-500" />
            
            <div className="space-y-6">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-foreground">Check Your Ayushman Bharat Eligibility</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Enter your details below to check on the official National Health Authority portal.
                </p>
              </div>

              {/* State dropdown */}
              <div className="space-y-2">
                <label htmlFor="state-select" className="block text-xs md:text-sm font-semibold text-foreground">
                  Select Your Resident State / UT
                </label>
                <select
                  id="state-select"
                  className="w-full bg-background border border-border focus:border-primary rounded-xl py-2.5 px-3.5 text-sm font-medium focus:outline-none transition-colors"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  {INDIAN_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Search By selection */}
              <div className="space-y-2">
                <span className="block text-xs md:text-sm font-semibold text-foreground">
                  Search Eligibility By
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "aadhaar", label: "Aadhaar Card", icon: UserCheck },
                    { id: "ration", label: "Ration Card", icon: CreditCard },
                    { id: "mobile", label: "Mobile Number", icon: Smartphone },
                    { id: "pmjay", label: "PMJAY ID", icon: FileText }
                  ].map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setSearchBy(option.id);
                          setInputValue("");
                        }}
                        className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer focus:outline-none transition-all ${
                          searchBy === option.id
                            ? "border-primary bg-primary/5 font-semibold text-foreground text-xs"
                            : "border-border text-foreground/80 hover:border-primary/40 text-xs"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Search input field */}
              <div className="space-y-2">
                <label htmlFor="search-input" className="block text-xs md:text-sm font-semibold text-foreground">
                  {searchBy === "aadhaar" && "Enter 12-Digit Aadhaar Number"}
                  {searchBy === "ration" && "Enter Ration Card Number (NFSA ID)"}
                  {searchBy === "mobile" && "Enter Mobile Number Registered with Family Card"}
                  {searchBy === "pmjay" && "Enter 14-Digit PMJAY Identification Code"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-muted-foreground pointer-events-none">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    id="search-input"
                    type="text"
                    placeholder={
                      searchBy === "aadhaar" ? "e.g. 1234 5678 9012" :
                      searchBy === "ration" ? "e.g. UP1234567890" :
                      searchBy === "mobile" ? "e.g. 9876543210" : "e.g. HH12-3456-7890"
                    }
                    className="w-full bg-background border border-border focus:border-primary rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium focus:outline-none transition-colors"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
              </div>

              {/* Launch Button */}
              <Button 
                onClick={handleRedirect}
                className="w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all"
              >
                Check on Official Portal
                <ExternalLink className="w-4 h-4" />
              </Button>

              {/* Disclaimer */}
              <p className="text-[10px] md:text-xs text-muted-foreground text-center leading-normal pt-1">
                <strong>Disclaimer Notice:</strong> This tool redirects you to the official National Health Authority portal. We do not store, log, or process any personal information or identification numbers you enter. All card generation, biometric authentication, and eligibility checks are handled entirely on the NHA's secure system.
              </p>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            COMPONENT 2 — INTRODUCTORY CONTENT
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        
        {/* Section 2: What is Ayushman Bharat */}
        <section className="space-y-4 max-w-4xl mx-auto" id="what-is-pmjay">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Landmark className="w-6 h-6 text-primary shrink-0" />
            What Is the Ayushman Bharat PM-JAY Scheme?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed">
            <p>
              Launched in September 2018 by the Government of India, the <strong>Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)</strong> is widely recognized as the world's largest government-funded health insurance coverage program. The scheme provides a comprehensive cashless health cover of up to <strong>₹5 Lakh per family per year</strong> for secondary and tertiary care hospitalizations at empanelled public and private healthcare centers across India.
            </p>
            <p>
              AB PM-JAY primarily targets financially vulnerable and socially deprived households classified under the <strong>Socio-Economic Caste Census (SECC 2011)</strong> databases, alongside specific occupational categories in urban settings. Since September 2024, the central cabinet extended the scheme's scope to provide independent, premium-free health cover for <strong>all senior citizens aged 70 years and above</strong>, regardless of household income or SECC status.
            </p>
            <p>
              To confirm your eligibility, complete the search details in our launcher card above to open the official <a href="https://nha.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline font-semibold">National Health Authority official portal</a> securely in your web browser. As of 2026, the program successfully covers over 12 crore underprivileged families representing nearly 55 crore citizens.
            </p>
          </div>
        </section>

        {/* Section 3: Who is Eligible */}
        <section className="space-y-6 max-w-4xl mx-auto border-t border-border pt-12" id="who-is-eligible">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-primary shrink-0" />
            Who Is Eligible for Ayushman Bharat?
          </h2>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            Unlike standard commercial health insurance policies, eligibility for a PM-JAY card is determined based on pre-defined social and economic deprivation criteria derived from rural and urban SECC 2011 surveys.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rural Eligibility */}
            <div className="bg-card border border-border p-6 rounded-2xl space-y-4 shadow-xs">
              <h3 className="font-bold text-base md:text-lg text-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                Rural Household Criteria
              </h3>
              <ul className="text-xs md:text-sm text-foreground/80 space-y-2 list-disc list-inside leading-relaxed">
                <li>Families occupying only one room with kuchcha walls and roof.</li>
                <li>Households with no adult members aged between 16 and 59.</li>
                <li>Female-headed households with no adult male member in the 16-59 age group.</li>
                <li>Households containing a disabled member with no able-bodied earning adult.</li>
                <li>Scheduled Caste (SC) and Scheduled Tribe (ST) households.</li>
                <li>Landless rural families relying heavily on manual casual labour for livelihood.</li>
                <li>Automatically eligible: Destitute, primitive tribal groups, and legally released bonded laborers.</li>
              </ul>
            </div>

            {/* Urban Eligibility */}
            <div className="bg-card border border-border p-6 rounded-2xl space-y-4 shadow-xs">
              <h3 className="font-bold text-base md:text-lg text-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                Urban Occupational Criteria
              </h3>
              <ul className="text-xs md:text-sm text-foreground/80 space-y-2 list-disc list-inside leading-relaxed">
                <li>Ragpickers, domestic helpers, sanitation staff, and beggars.</li>
                <li>Street vendors, hawkers, coolies, and baggage handlers.</li>
                <li>Construction workers, plumbers, painters, welders, and security guards.</li>
                <li>Tailors, transport operators, cart pullers, and conductors.</li>
                <li>Mechanics, repair technicians, electricians, and assemblers.</li>
                <li>Washermen (dhobis) and watchmen.</li>
                <li>Home-based artisans, weavers, and handicraft workers.</li>
              </ul>
            </div>
          </div>

          {/* 70+ Senior Citizens Coverage Info */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl space-y-3">
            <h3 className="font-bold text-emerald-600 dark:text-emerald-400 text-base md:text-lg flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Special Category: Senior Citizens Aged 70 and Above (AB-PMJAY)
            </h3>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
              In a major healthcare expansion, the Union Cabinet authorized AB PM-JAY cards for <strong>every single Indian senior citizen aged 70 years and above</strong>, irrespective of their household's social status or financial income. 
            </p>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-semibold">
              If your family is already covered under PMJAY, eligible senior citizens (70+) receive an exclusive top-up cover of ₹5 lakh per year, which is not shared with the rest of the household. If you are not in the database, senior citizens receive a separate, independent cover of ₹5 lakh per year.
            </p>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-xl flex gap-3 text-amber-800 dark:text-amber-300 text-xs">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Database Warning Notice:</strong> If your household was not registered in the SECC 2011 database or does not belong to the defined rural/urban occupational lists, your eligibility might not appear on the central portal. The National Health Authority beneficiary portal is the only authorized system to confirm eligibility — no private or third-party web application has the administrative rights to determine your eligibility status with certainty.
            </p>
          </div>
        </section>

        {/* Section 4: How to Check */}
        <section className="space-y-6 max-w-4xl mx-auto border-t border-border pt-12" id="step-by-step-check">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary shrink-0" />
            How Do I Check My Ayushman Bharat Eligibility Step-by-Step?
          </h2>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            Follow this official, step-by-step checklist to confirm your eligibility on the secure government portal:
          </p>

          <div className="space-y-4">
            {[
              { step: "1", title: "Access the Official Portal", desc: "Launch the secure official portal by visiting beneficiary.nha.gov.in (our eligibility checker launcher above will take you directly there in a new tab)." },
              { step: "2", title: "Configure Beneficiary Login Mode", desc: "On the login dashboard, select the 'Beneficiary' option (instead of Operator). Enter your active mobile number, click 'Verify', and input the one-time OTP received via SMS along with the CAPTCHA." },
              { step: "3", title: "Select Your Home State", desc: "Choose your State or Union Territory from the drop-down menu. This loads the state-specific scheme databases." },
              { step: "4", title: "Choose Search Scheme & District", desc: "Select the primary welfare scheme (usually PMJAY) and choose your district from the dropdown menus." },
              { step: "5", title: "Select Search Parameter", desc: "Choose your search criteria. Searching by your 12-digit Aadhaar Card Number or your NFSA Ration Card Number (Family ID) is highly recommended for instant results." },
              { step: "6", title: "Enter Details and Search", desc: "Input the corresponding identification number carefully and click the Search button (magnifying glass icon)." },
              { step: "7", title: "Analyze Search Results", desc: "If eligible, your entire household registry will appear in a grid. If your name is highlighted in green, your card is already generated. If in orange, your e-KYC is pending. If in red, you are not listed in the SECC database — verify if regional state card options apply to you." }
            ].map((s) => (
              <div key={s.step} className="flex gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-black shrink-0 border border-primary/20">{s.step}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">{s.title}</h3>
                  <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: What if you are eligible */}
        <section className="space-y-4 max-w-4xl mx-auto border-t border-border pt-12" id="get-golden-card">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-primary shrink-0" />
            What If You Are Eligible: How to Get Your Ayushman Card?
          </h2>
          <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed">
            <p>
              If the NHA database identifies your family as eligible, you must complete your electronic Know Your Customer (e-KYC) details to download your digital **Ayushman Card** (also popularly known as the Golden Card).
            </p>
            <p>
              To generate your card, visit your nearest **Common Service Centre (CSC)**, a local government hospital empanelled under PMJAY, or the specialized **Ayushman Mitra desk** located at any empanelled private healthcare center. Carry your 12-digit Aadhaar Card, your family's Ration Card, and the active mobile number linked with your Aadhaar for biometric or OTP verification.
            </p>
            <p>
              The Ayushman Card is generated and printed <strong>completely free of charge</strong>. Once generated, any registered family member can present the card at empanelled hospital desks to claim cashless treatments. Remember, the ₹5 Lakh coverage limit is shared collectively by the entire family per year. For immediate assistance, dial the official PMJAY National Helpline numbers: <strong>14555</strong> or <strong>1800-111-565</strong>.
            </p>
          </div>
        </section>

        {/* Section 6: FAQs */}
        <section className="space-y-6 max-w-4xl mx-auto border-t border-border pt-12" id="faq-section">
          <div className="text-center md:text-left max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary shrink-0" />
              What are the Common Questions About PMJAY Eligibility?
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "I'm not in SECC 2011 data — can I still get Ayushman Bharat coverage?",
                a: "Yes, in many cases. While rural and urban data is primarily derived from SECC 2011, many state governments have merged their local health cards with PM-JAY to cover additional families. Furthermore, all senior citizens in India aged 70 and above are now eligible for independent Ayushman coverage under the 2024 scheme expansion."
              },
              {
                q: "My name appears in the portal but my family member's doesn't — what do I do?",
                a: "If a family member is missing, visit a Common Service Centre (CSC) or empanelled hospital desk. Carry your official Ration Card or verified Family Declaration showing the relationship, along with their Aadhaar Card, to request addition to the family database."
              },
              {
                q: "Can I check eligibility without an Aadhaar card?",
                a: "While Aadhaar is the most reliable identifier, you can search the portal using your Ration Card Number (Ration Card/NFSA ID), registered Mobile Number, or PMJAY ID. However, actual card generation and biometric verification require Aadhaar."
              },
              {
                q: "Is Ayushman Bharat different from state health schemes?",
                a: "Yes. Ayushman Bharat (PM-JAY) is a central government scheme valid across all empanelled hospitals in India. However, many states co-brand or merge it with regional welfare schemes (like Ayushman UP, Mahatma Jyotirao Phule Jan Arogya Yojana in Maharashtra, or Karunya Arogya Suraksha in Kerala)."
              },
              {
                q: "Does Ayushman Bharat cover outpatient (OPD) treatment?",
                a: "No. Ayushman Bharat (PM-JAY) primarily covers cashless secondary and tertiary hospitalization (in-patient care) up to ₹5 lakh. OPD consultations, routine medicines, and diagnostics outside of hospital admission are not covered under the central guidelines."
              },
              {
                q: "I am 70 years old — am I automatically eligible under the 2024 extension?",
                a: "Yes. The central cabinet extended the AB PM-JAY scheme to all senior citizens aged 70 years and above regardless of household income. Eligible seniors receive a top-up of ₹5 lakh if their family is already enrolled, or a separate ₹5 lakh cover if they are new enrollees."
              }
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300"
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

        {/* Section 7: Related Links */}
        <section className="space-y-6 max-w-4xl mx-auto border-t border-border pt-12" id="related-resources">
          <div className="text-center md:text-left max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Where Can I Find Related Resources & Guides?
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Explore our informative legal, educational, and medical exemption guidelines.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Link 1 */}
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

            {/* Link 2 */}
            <a 
              href="/blog/udid-disability-certificate" 
              className="bg-card border border-border hover:border-primary/30 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block"
            >
              <FileText className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                Disability & UDID Guide
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Complete guide to securing your disability certificate and official Unique Disability ID (UDID) Card in India. (Pending launch)
              </p>
              <div className="flex items-center gap-1 text-primary text-xs font-bold mt-4">
                Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Link 3 */}
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
                href="https://nha.gov.in" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                National Health Authority — Ayushman Bharat <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://beneficiary.nha.gov.in" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                Beneficiary Portal (NHA) <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
