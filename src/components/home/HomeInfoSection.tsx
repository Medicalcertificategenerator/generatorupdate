import { CheckCircle, AlertTriangle } from "lucide-react";

const commonUses = [
  { label: "Sick Leave (Office/Corporate)" },
  { label: "College Attendance Condonation" },
  { label: "Insurance Claims" },
  { label: "Pre-Employment Medical" },
  { label: "Driving Licence (Form 1A)" },
  { label: "Sports & Fitness Clearance" },
  { label: "Government Job Application" },
  { label: "Maternity Leave" },
  { label: "Court & Legal Proceedings" },
  { label: "School Absence (Children)" },
];

export function HomeInfoSection() {
  return (
    <section className="bg-muted/30 border-t border-border py-14 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
          Medical Certificate Generator — What You Need to Know
        </h2>
        <p className="text-muted-foreground text-sm mb-10">
          A reference guide for students, employees, and developers using this tool
        </p>

        <div className="space-y-10">

          {/* ── Sub-section 1 ── */}
          <div>
            <h3 className="text-lg font-bold mb-3">What Is a Medical Certificate?</h3>
            <p className="text-[15px] text-foreground/80 leading-relaxed">
              A medical certificate (मेडिकल सर्टिफिकेट) — also called a doctor&apos;s note, sick
              note, or medical fitness certificate — is an official document issued by a registered
              medical practitioner after examining a patient. In India, it serves as legal proof of
              illness or fitness for employers, educational institutions, insurance companies, and
              government bodies. To be legally valid, it must contain the doctor&apos;s NMC or State
              Medical Council registration number, their signature, clinic stamp, the date of
              examination, and a specified rest or fitness period. Without these elements, most
              institutions will reject it as incomplete or unverifiable.
            </p>
          </div>

          {/* ── Sub-section 2 ── */}
          <div>
            <h3 className="text-lg font-bold mb-3">Who Can Issue a Medical Certificate in India?</h3>
            <p className="text-[15px] text-foreground/80 leading-relaxed">
              Only registered medical practitioners can legally issue a medical certificate in India.
              This includes MBBS doctors registered with the National Medical Commission (NMC) or any
              State Medical Council, MD/MS specialists within their area of practice, and AYUSH
              practitioners (Ayurveda, Unani, Siddha, Homeopathy) within their permitted scope.
              Rural Medical Practitioners (RMPs) without formal MBBS registration cannot legally
              issue certificates that employers or institutions are required to accept. Since the
              Telemedicine Practice Guidelines 2020, certificates from telemedicine consultations are
              valid for many private employers, though individual organisational policies may vary and
              government bodies generally still require in-person examination certificates.
            </p>
          </div>

          {/* ── Sub-section 3 ── */}
          <div>
            <h3 className="text-lg font-bold mb-3">Common Uses of a Medical Certificate in India</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {commonUses.map((use) => (
                <li
                  key={use.label}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 leading-snug">{use.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Sub-section 4 ── */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              Medical Certificate Formats: What Changes by Institution
            </h3>
            <p className="text-[15px] text-foreground/80 leading-relaxed">
              The format of a medical certificate varies significantly by the institution that
              requires it. Corporate HR departments — especially in IT and finance sectors — often
              require typed certificates on hospital letterhead with specific fields. Government
              offices and PSUs require certificates from authorised government medical officers.
              Universities like Delhi University, Mumbai University, and Anna University each have
              their own prescribed formats that must be followed for attendance condonation.
              Insurance companies require certificates specifying the ICD-10 diagnostic code alongside
              the clinical narrative. The core legal requirements — doctor registration number,
              signature, stamp, dates, and rest period — remain the same, but the presentation
              and level of detail differ widely across institutions.
            </p>
          </div>

          {/* ── Sub-section 5: Legal Notice ── */}
          <div className="border border-destructive/20 bg-destructive/5 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-destructive mb-2">
                  Important Legal Notice: About This Generator
                </h3>
                <p className="text-[14px] text-foreground/75 leading-relaxed">
                  Certificates generated by this tool are sample documents for educational use,
                  software testing, UI/UX design, and demonstration purposes only. They carry no
                  legal validity. Using a generated certificate to deceive an employer, institution,
                  insurance company, or government body is a criminal offence under the{" "}
                  <strong>Bharatiya Nyaya Sanhita (BNS) 2023</strong>, which replaced the Indian
                  Penal Code. Penalties include imprisonment of up to 2 years and/or fines. If you
                  need a legally valid certificate, consult an NMC-registered medical practitioner
                  in person or via a licensed telemedicine platform such as Practo, Apollo 24|7, or
                  mfine.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
