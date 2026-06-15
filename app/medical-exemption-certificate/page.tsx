import type { Metadata } from "next";
import { MedicalExemptionView } from "@/views/MedicalExemptionView";

const BASE_URL = "https://medicalcertificategenerator.co.in";
const PAGE_URL = `${BASE_URL}/medical-exemption-certificate`;

export const metadata: Metadata = {
  title:
    "Medical Exemption Certificate Generator (Free PDF Download Online)",
  description:
    "Create a medical exemption certificate instantly for travel, work, or health conditions like diabetes or heart disease. Free PDF download, editable format.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Medical Exemption Certificate Generator (Free PDF Download Online)",
    description:
      "Create a medical exemption certificate instantly for travel, work, or health conditions like diabetes or heart disease. Free PDF download, editable format.",
    url: PAGE_URL,
    siteName: "Medical Certificate Generator",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Exemption Certificate Generator (Free PDF Download Online)",
    description:
      "Create a medical exemption certificate instantly for travel, work, or health conditions. Free PDF download.",
  },
};

const faqs = [
  {
    q: "How can I get a medical exemption certificate quickly?",
    a: "Visit a registered medical practitioner (MBBS or higher) and explain your medical condition. The doctor will examine you and issue a certificate. For samples, use our free generator above.",
  },
  {
    q: "Is an online medical exemption certificate valid?",
    a: "No. Only a certificate issued by a registered, licensed doctor after a clinical examination is legally valid. Our generator creates sample documents for educational use only.",
  },
  {
    q: "Can I use a medical exemption certificate for travel restrictions?",
    a: "Yes, a valid medical exemption certificate issued by a doctor can be used to request exemption from travel restrictions, vaccination requirements, or airline policies.",
  },
  {
    q: "Who can issue a medical exemption certificate?",
    a: "Any registered medical practitioner — MBBS physicians, specialists (MD, MS), and government medical officers can issue a medical exemption certificate.",
  },
  {
    q: "Does NHS provide medical exemption certificates?",
    a: "Yes, in the UK, the NHS issues MedEx certificates for prescription charge exemptions covering conditions like diabetes, hypothyroidism, and epilepsy.",
  },
  {
    q: "What conditions qualify for a medical exemption?",
    a: "Common qualifying conditions include diabetes, coronary heart disease, epilepsy, chronic asthma, thyroid disorders, autoimmune conditions, severe allergies, COPD, and chronic kidney disease.",
  },
  {
    q: "Can I get exemption from workplace duties due to a medical condition?",
    a: "Yes. Employees with documented conditions can request reasonable accommodations and exemptions from specific tasks via a medical exemption certificate from a registered practitioner.",
  },
  {
    q: "How long is a medical exemption certificate valid?",
    a: "Temporary conditions may get 2-4 week exemptions, while chronic conditions like diabetes or heart disease may warrant certificates valid for 6-12 months.",
  },
];

export default function MedicalExemptionCertificatePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Medical Exemption Certificate Generator (Free PDF Download Online)",
    description:
      "Create a medical exemption certificate instantly for travel, work, or health conditions like diabetes or heart disease. Free PDF download.",
    url: PAGE_URL,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      url: `${BASE_URL}/`,
      name: "Medical Certificate Generator",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate a Medical Exemption Certificate Sample",
    description:
      "Step-by-step guide to generating a realistic medical exemption certificate instantly.",
    step: [
      {
        "@type": "HowToStep",
        name: "Choose Exemption Type",
        text: "Select from General, Travel, Work, or Medical Condition exemption types.",
      },
      {
        "@type": "HowToStep",
        name: "Enter Patient Details",
        text: "Fill in patient name, age, medical condition, and reason for exemption.",
      },
      {
        "@type": "HowToStep",
        name: "Preview Certificate",
        text: "Review the dynamically generated exemption certificate preview with realistic formatting.",
      },
      {
        "@type": "HowToStep",
        name: "Download PDF",
        text: "Download the certificate as a high-resolution PDF or PNG instantly.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <MedicalExemptionView />

      {/* ── INFORMATIONAL GUIDE SECTION (server-rendered, SEO) ─────────────
          Append-only. Zero changes to MedicalExemptionView or schema blocks.
      ─────────────────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto space-y-10">

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Medical Exemption Certificates: Complete Guide for India
          </h2>

          {/* H3: Qualifying conditions */}
          <div>
            <h3 className="text-lg font-bold mb-3">Conditions That Qualify for Medical Exemption</h3>
            <p className="text-[15px] text-foreground/80 leading-relaxed mb-4">
              The following conditions are commonly recognised for workplace duty exemption and
              modified work arrangements under CGHS empanelment guidelines and standard occupational
              health practice in India:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "Type 1 and Type 2 Diabetes", note: "Ongoing monitoring; exemption from irregular shift duties" },
                { name: "Coronary Artery Disease (CAD)", note: "Exemption from physically strenuous tasks and high-stress roles" },
                { name: "Epilepsy (ILAE classification)", note: "Exemption from working at heights, near open water, or with machinery" },
                { name: "Chronic Asthma (GINA guidelines)", note: "Exemption from dust, chemical fume, or cold air exposure" },
                { name: "Hypothyroidism and Hyperthyroidism", note: "Modified duties during uncontrolled phases" },
                { name: "COPD", note: "Exemption from respiratory-risk environments; limited exertion roles" },
                { name: "Autoimmune conditions (Lupus, Rheumatoid Arthritis)", note: "Flexible attendance and reduced physical duties" },
                { name: "Severe allergies (anaphylaxis risk)", note: "Exemption from specific allergen exposure environments" },
                { name: "Post-surgical recovery (orthopaedic, cardiac)", note: "Time-limited exemption during recovery period" },
                { name: "Pregnancy complications", note: "Exemption from night shifts and physically demanding tasks" },
                { name: "Chronic Kidney Disease (CKD Stage 3+)", note: "Modified duties to accommodate dialysis schedules" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="bg-card border border-border rounded-xl px-4 py-3"
                >
                  <p className="font-semibold text-[14px] text-foreground leading-snug">{item.name}</p>
                  <p className="text-[13px] text-muted-foreground mt-0.5 leading-relaxed">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* H3: Labour law rights */}
          <div>
            <h3 className="text-lg font-bold mb-3">Your Rights Under Indian Labour Law</h3>
            <p className="text-[15px] text-foreground/80 leading-relaxed">
              Several Indian laws protect employees with medical conditions from unfair treatment.
              Under <strong>Factories Act Section 87</strong>, workers cannot be required to perform
              hazardous work if their medical condition creates a specific risk — and a medical
              exemption certificate from a registered practitioner provides the formal basis to invoke
              this protection. The <strong>Rights of Persons with Disabilities Act 2016</strong>{" "}
              mandates reasonable accommodations for employees with recognised disabilities, including
              modified duties, assistive equipment, and flexible attendance — an exemption certificate
              supporting the accommodation request is standard practice. The{" "}
              <strong>Digital Personal Data Protection (DPDP) Act 2023</strong> protects the privacy
              of your medical information — your employer can know you have a condition requiring
              accommodation without knowing its specific diagnosis. To formally request a duty
              exemption, submit a written HR request with the medical exemption certificate attached.
              Under the Model Standing Orders, employers are expected to respond to such requests
              within 30 days.
            </p>
          </div>

          {/* H3: Validity */}
          <div>
            <h3 className="text-lg font-bold mb-3">How Long Is a Medical Exemption Certificate Valid?</h3>
            <p className="text-[15px] text-foreground/80 leading-relaxed">
              Validity depends on the nature of the condition. For acute or temporary conditions —
              such as post-surgical recovery or pregnancy complications — exemption certificates
              typically cover 2 to 4 weeks and are renewed at each follow-up consultation. For
              chronic conditions (diabetes, coronary artery disease, COPD), certificates are typically
              valid for 6 to 12 months and require annual renewal. CGHS specifically requires renewal
              every 6 months for ongoing workplace exemptions for central government employees. For
              aviation-related exemptions, DGCA mandates its own format renewed annually by a
              DGCA-authorised Aviation Medical Examiner. Some institutions accept permanent exemptions
              for severe or irreversible conditions, subject to annual review by a medical board.
            </p>
          </div>

          {/* H3: Exemption vs Leave */}
          <div className="bg-card border border-border rounded-xl px-5 py-5">
            <h3 className="text-lg font-bold mb-3">Exemption vs Leave Certificate: Key Difference</h3>
            <p className="text-[15px] text-foreground/80 leading-relaxed">
              A <strong>leave certificate</strong> certifies that you could not attend work during a
              past period due to illness — it justifies a completed absence. A{" "}
              <strong>medical exemption certificate</strong> certifies that you cannot perform
              specific duties due to an ongoing condition — it does not excuse absence, it modifies
              your work requirements going forward. You may need both: an exemption certificate for
              the ongoing condition restricting certain tasks, and a separate leave certificate for
              any days you were absent due to a flare-up or acute episode. Submit the exemption
              certificate to HR for duty modification; submit the leave certificate to HR for
              absence approval. They serve distinct administrative purposes.
            </p>
          </div>

          {/* Legal callout */}
          <div className="border border-destructive/20 bg-destructive/5 rounded-xl px-5 py-4 text-sm text-foreground/70">
            <strong className="text-destructive">Important:</strong>{" "}
            Medical exemption certificates generated by this tool are sample documents for educational
            and demonstration purposes only. A legally valid exemption certificate must be issued by
            an NMC-registered medical practitioner following a clinical assessment of your condition.
            Submitting a generated sample to any employer, institution, or government body constitutes
            fraud under the Bharatiya Nyaya Sanhita (BNS) 2023.
          </div>

        </div>
      </section>
    </>
  );
}
