import json
import os

blog_posts_file = "/Users/riponchakma/Desktop/medicalgenerator/generator/src/data/blogPostsPart5.tsx"

with open(blog_posts_file, "r") as f:
    content = f.read()

article_20 = """
  // ─── ARTICLE 20 (Migration vs Transfer Certificate Comparison) ────────────────
  {
    slug: "difference-between-migration-certificate-and-transfer-certificate",
    title: "Migration Certificate vs Transfer Certificate — Key Differences Explained",
    metaDescription: "Migration certificate and transfer certificate are not the same. One deals with board jurisdiction, the other with school-level movement. Here's exactly how they differ.",
    category: "Academic & Government Guidelines",
    date: "May 2026",
    dateModified: "May 2026",
    datePublishedIso: "2026-05-24",
    dateModifiedIso: "2026-05-24",
    readTime: "10 min read",
    tags: ["Migration Certificate", "Transfer Certificate", "SSLC Certificate", "DigiLocker", "Academic Comparison", "India", "Academic Guides"],
    author: "Ziven Borceg",
    content: (
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        {/* JSON-LD Schema: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "My college says I need both TC and migration certificate — is this correct?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you are transferring from an affiliated college under University A to another college under University B, your new college is absolutely correct in demanding both documents. The Transfer Certificate (TC) is issued by your specific college administration, confirming that you have cleared all your local library, laboratory, and campus fee dues and have officially exited the college. The Migration Certificate is issued by the parent university\\'s central administrative exam division, confirming that your registration under University A has been closed and you are officially cleared to register with a different university."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I get admission in a central university with just a TC from my state board?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, you cannot. A Transfer Certificate (TC) issued by your local state board school is only sufficient to close your school-level record. However, since central universities (like Delhi University, BHU, or AMU) operate under a completely different academic jurisdiction than state secondary boards, they strictly require a valid Migration Certificate issued by your Class 12 board (like your State Board headquarters or CBSE). Without a migration certificate, the university\\'s central portal cannot generate your fresh undergraduate registration number."
                  }
                },
                {
                  "@type": "Question",
                  "name": "I am doing lateral entry in engineering — do I need a migration certificate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, in almost all Indian states, lateral entry admissions into the second year of a B.Tech or B.E. program require a Migration Certificate. Since you completed your three-year diploma under a State Board of Technical Education (SCTE), you must submit a migration certificate issued by that specific board to release your diploma-level registration and allow you to register under the engineering university (such as VTU, AKTU, or Anna University) offering your degree."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is migration certificate needed for MBA admissions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you completed your undergraduate degree (B.Com, B.Sc, B.Tech, etc.) under University A and are joining a business school or university affiliated to University B for your MBA, you must present a valid Migration Certificate from your graduation university. If you are pursuing an MBA within the same university where you did your undergraduate studies, only your college-level Transfer Certificate (TC) is required, and no migration certificate is needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "My previous university is defunct — how do I get a migration certificate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your previous university has closed down, has been dissolved, or has lost its official recognition, you must approach the Higher Education Department of the respective state government or the state university that has absorbed the defunct college\\'s records. You must submit a formal application along with your previous mark sheets, degree copies, and full and final fee clearance records. The state education department will verify the historical archives and issue an official equivalency clearance document that acts as a valid Migration Certificate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need TC/migration certificate for open university or correspondence courses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, open universities like IGNOU, Yashwantrao Chavan Maharashtra Open University (YCMOU), or state correspondence desks strictly require a Migration Certificate (or at least a college-level Transfer Certificate) during admission. This is to verify that you are not actively enrolled in a regular, full-time course at another university simultaneously, which is prohibited under University Grants Commission (UGC) regulations. IGNOU requires you to submit the original physical migration certificate along with your application package."
                  }
                }
              ]
            })
          }}
        />

        {/* AEO Featured Snippet Answer Box */}
        <div className="relative bg-gradient-to-br from-primary/5 via-background to-background border border-primary/20 rounded-3xl p-6 md:p-8 shadow-sm">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Quick Answer</span>
          <p className="text-sm md:text-base text-foreground font-semibold leading-relaxed mt-2 font-sans">
            A transfer certificate (TC) is issued by a school or college when you leave to join another institution at the same level — it is a student record document. A migration certificate is issued by a university or board when you leave its academic jurisdiction to join an institution under a different board or university. They are not interchangeable.
          </p>
        </div>

        {/* Introduction */}
        <p className="text-lg font-medium text-foreground">
          It is one of the most common, costly administrative mistakes in Indian higher education: A student from Uttar Pradesh scores excellent marks in their Class 12 board examinations, secures a highly competitive seat at a premier central university in Delhi, and rushes to complete their physical admission. They present their mark sheets, character certificates, and school-issued Transfer Certificate (TC). But as they reach the final desk, the registrar halts the file, stating, <em>"Your enrollment is incomplete; we strictly require your original Migration Certificate to generate your registration number."</em>
        </p>
        <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
          This confusion around <strong>is migration certificate and transfer certificate same</strong> is incredibly common because both represent an "exit" from an academic path. However, submitting one when the other is requested can cause severe delays or even lead to the cancellation of your admission. This comprehensive guide breaks down the exact differences between a migration certificate and a transfer certificate, outlines the specific real-world scenarios where you need each, explains why you often need both, and details your legal rights when institutions drag their feet.
        </p>

        {/* SECTION 1 — The Short Version */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">The Short Version — What Each Document Does</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            To clear the administrative confusion, let\\'s define both documents in plain language:
          </p>
          <div className="grid md:grid-cols-2 gap-4 font-sans text-xs md:text-sm text-foreground/80">
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Transfer Certificate (TC)
              </h4>
              <p className="leading-relaxed">
                A **Transfer Certificate** operates at the **institutional level**. It is issued directly by your school Principal or college administration, confirming that you have cleared all your local dues (library books, accounts, lab equipment), maintained good conduct, and officially exited that specific campus. It serves to close your record at School A and open it at School B.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Migration Certificate
              </h4>
              <p className="leading-relaxed">
                A **Migration Certificate** operates at the **jurisdictional level**. It is issued by your regional board (such as CBSE, ICSE, or state secondary boards) or your parent university (such as Delhi University or Mumbai University). It confirms that you have officially exited the entire educational jurisdiction of that board or university and are free to register with a different board or university.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Full Comparison */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">Full Comparison — Migration Certificate vs. Transfer Certificate</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            To provide absolute administrative clarity, here is a detailed, side-by-side comparison across 10 critical parameters:
          </p>
          <div className="overflow-x-auto border border-border rounded-xl bg-card">
            <table className="w-full text-left border-collapse font-sans text-xs md:text-sm text-foreground/80">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-3 font-bold text-foreground">Parameter</th>
                  <th className="p-3 font-bold text-foreground">Transfer Certificate (TC)</th>
                  <th className="p-3 font-bold text-foreground">Migration Certificate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-semibold">Scope of Authority</td>
                  <td className="p-3">Institutional Level (School/College).</td>
                  <td className="p-3">Jurisdictional Level (Education Board/University).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Issuing Office</td>
                  <td className="p-3">School Principal, College Registrar, or HOD.</td>
                  <td className="p-3">Central Board Office, Controller of Exams, or University.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Primary Purpose</td>
                  <td className="p-3">Certifies character, attendance, and dues clearance from a campus.</td>
                  <td className="p-3">Releases student from the academic jurisdiction of the board/university.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">When Needed</td>
                  <td className="p-3">Moving between schools or colleges at the same level.</td>
                  <td className="p-3">Changing university boards or switching secondary boards.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Validity Period</td>
                  <td className="p-3">Permanent record of exit.</td>
                  <td className="p-3">Permanent, but universities prefer recent certificates.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Average Processing Fee</td>
                  <td className="p-3">Rs. 0 - Rs. 200 (nominal campus fee).</td>
                  <td className="p-3">Rs. 200 - Rs. 500 (board fees); higher for universities.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Typical Processing Time</td>
                  <td className="p-3">3 to 7 working days.</td>
                  <td className="p-3">15 to 30 days (dispatch by speed post).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Same-University Transfers</td>
                  <td className="p-3">Mandatory (to clear college dues).</td>
                  <td className="p-3">Not Required.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Inter-University Transfers</td>
                  <td className="p-3">Mandatory (College TC).</td>
                  <td className="p-3">Mandatory (University Migration).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Secondary Board Switch</td>
                  <td className="p-3">Mandatory (School TC).</td>
                  <td className="p-3">Mandatory (Board Migration).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3 — When You Need Only a Transfer Certificate */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">When You Need Only a Transfer Certificate</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            In many local or intra-jurisdictional transitions, obtaining a Transfer Certificate is entirely sufficient, and you do not need to apply for a migration certificate. Here are the most common real-world scenarios:
          </p>
          <div className="bg-card border border-border p-5 rounded-2xl space-y-3 font-sans text-xs md:text-sm text-foreground/80">
            <p>
              <strong>1. Changing Schools Locally:</strong> If you are switching from School A to School B within the same state board or central board (e.g., CBSE to CBSE in the same city), you only require the school-issued TC.
            </p>
            <p>
              <strong>2. Transferring Colleges within the Same University:</strong> If you are moving from College A to College B (both affiliated to the same parent university, like Delhi University), a college-level TC is sufficient.
            </p>
            <p>
              <strong>3. Discontinuing or Dropping Out:</strong> If you decide to temporarily pause your studies, the college issues a TC as a record of your partial attendance and cleared dues.
            </p>
          </div>
        </section>

        {/* SECTION 4 — When You Need Only a Migration Certificate */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">When You Need Only a Migration Certificate</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            There are certain academic scenarios where your local school record is already closed, but you strictly require a formal release from your board\\'s central authority. You need only a migration certificate when:
          </p>
          <div className="bg-card border border-border p-5 rounded-2xl space-y-3 font-sans text-xs md:text-sm text-foreground/80">
            <p>
              <strong>1. Switch from CBSE to a State Board:</strong> If you completed your Class 10 under CBSE and wish to join a state board school for Class 11 and 12, the state board portal will mandate a CBSE-issued migration certificate.
            </p>
            <p>
              <strong>2. Board Registrations:</strong> When registering for regional board examinations as a private candidate after transferring from another state, you must submit your previous board\\'s migration certificate.
            </p>
          </div>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans mt-2">
            To learn more about the exact processes of obtaining a board-level release, read our detailed analysis on the <InternalLink href="/blog/what-is-migration-certificate/">migration certificate in detail</InternalLink>.
          </p>
        </section>

        {/* SECTION 5 — When You Need BOTH */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">When You Need BOTH</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            This is the ultimate bottleneck where most university students experience severe delays during document verification. **An inter-university transfer strictly mandates the submission of both documents.**
          </p>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            For example, if you completed your Bachelor\\'s degree at University A (such as VTU in Karnataka) and secured admission for your Master\\'s degree at University B (such as Anna University in Tamil Nadu):
          </p>
          <ul className="list-disc list-inside space-y-1 font-sans text-xs md:text-sm text-foreground/80">
            <li>You must get a <strong>Transfer Certificate (TC)</strong> from your specific college to clear your local records and certify your conduct.</li>
            <li>You must get a <strong>Migration Certificate</strong> from the parent university central office to formally release you from their jurisdictional register.</li>
          </ul>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans mt-2">
            For school-age children, a similar rule applies when moving out of state (e.g., from a Maharashtra state board school to a CBSE school in Delhi). You must submit a school-issued TC along with a board-issued migration certificate. If you are preparing your exit dossier, review our comprehensive <InternalLink href="/blog/what-is-transfer-certificate/">transfer certificate guide</InternalLink> to ensure you don\\'t miss any visual seals or signatures.
          </p>
        </section>

        {/* SECTION 6 — Can One Document Substitute for the Other? */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">Can One Document Substitute for the Other?</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            The answer is a definitive and absolute **No**.
          </p>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            A Transfer Certificate (TC) cannot substitute for a Migration Certificate, and a Migration Certificate cannot replace a TC under any circumstances. They are issued by completely different offices, serve distinct administrative purposes, and verify different aspects of your academic status. 
          </p>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            If you try to submit your school TC in place of a required migration certificate at a central university, the online portal will immediately mark your application as deficient. Similarly, if your college requests a TC to clear your dues and you present a board migration certificate, it will be rejected. Always plan in advance, check the specific requirements of your new institution, and apply early to prevent missing your deadlines.
          </p>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q1: My college says I need both TC and migration certificate — is this correct?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, if you are transferring from an affiliated college under University A to another college under University B, your new college is absolutely correct in demanding both documents. The Transfer Certificate (TC) is issued by your specific college administration, confirming that you have cleared all your local library, laboratory, and campus fee dues and have officially exited the college. The Migration Certificate is issued by the parent university\\'s central administrative exam division, confirming that your registration under University A has been closed and you are officially cleared to register with a different university.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q2: Can I get admission in a central university with just a TC from my state board?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                No, you cannot. A Transfer Certificate (TC) issued by your local state board school is only sufficient to close your school-level record. However, since central universities (like Delhi University, BHU, or AMU) operate under a completely different academic jurisdiction than state secondary boards, they strictly require a valid Migration Certificate issued by your Class 12 board (like your State Board headquarters or CBSE). Without a migration certificate, the university\\'s central portal cannot generate your fresh undergraduate registration number.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q3: I am doing lateral entry in engineering — do I need a migration certificate?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, in almost all Indian states, lateral entry admissions into the second year of a B.Tech or B.E. program require a Migration Certificate. Since you completed your three-year diploma under a State Board of Technical Education (SCTE), you must submit a migration certificate issued by that specific board to release your diploma-level registration and allow you to register under the engineering university (such as VTU, AKTU, or Anna University) offering your degree.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q4: Is migration certificate needed for MBA admissions?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, if you completed your undergraduate degree (B.Com, B.Sc, B.Tech, etc.) under University A and are joining a business school or university affiliated to University B for your MBA, you must present a valid Migration Certificate from your graduation university. If you are pursuing an MBA within the same university where you did your undergraduate studies, only your college-level Transfer Certificate (TC) is required, and no migration certificate is needed.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q5: My previous university is defunct — how do I get a migration certificate?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                If your previous university has closed down, has been dissolved, or has lost its official recognition, you must approach the Higher Education Department of the respective state government or the state university that has absorbed the defunct college\\'s records. You must submit a formal application along with your previous mark sheets, degree copies, and full and final fee clearance records. The state education department will verify the historical archives and issue an official equivalency clearance document that acts as a valid Migration Certificate.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q6: Do I need TC/migration certificate for open university or correspondence courses?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, open universities like IGNOU, Yashwantrao Chavan Maharashtra Open University (YCMOU), or state correspondence desks strictly require a Migration Certificate (or at least a college-level Transfer Certificate) during admission. This is to verify that you are not actively enrolled in a regular, full-time course at another university simultaneously, which is prohibited under University Grants Commission (UGC) regulations. IGNOU requires you to submit the original physical migration certificate along with your application package.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-muted/40 p-6 rounded-2xl border border-border space-y-4 text-left">
          <h3 className="font-bold text-foreground">Key Takeaways</h3>
          <ul className="space-y-2 text-xs md:text-sm text-foreground/80 list-disc list-inside leading-relaxed font-sans">
            <li>A Transfer Certificate operates at the institutional level, clearing your record from a specific campus.</li>
            <li>A Migration Certificate operates at the jurisdictional level, releasing your record from a board or university.</li>
            <li>Moving between colleges under the same parent university requires only your college-level TC.</li>
            <li>Inter-university transfers and switches between different secondary boards strictly require both documents.</li>
            <li>DigiLocker-verified academic certificates are widely accepted under NAD guidelines.</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="space-y-3 text-left">
          <h3 className="font-bold text-lg text-foreground">Conclusion</h3>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Understanding the distinction between a **Migration Certificate** and a **Transfer Certificate** is the ultimate key to a smooth, worry-free academic transition in India. While a TC closes your day-to-day attendance and fee accounts locally on a campus, a migration certificate formally releases your registration records from your board or university\\'s central registers. By remaining proactive, obtaining clearances from your college early, and utilizing government digital portals like DigiLocker under active <a href="https://www.ugc.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline font-semibold">UGC inter-university migration guidelines</a>, you can keep your academic credentials secure and guarantee a seamless educational journey.
          </p>
        </section>

        <Disclaimer />
      </div>
    ),
  },
];
"""

# Let\\'s append Article 20 just before the closing ]; of the file.
# The absolute end of the file is exactly "];" followed by optional newlines.
# Let\\'s search for the closing bracket and replace it.

target_conclusion = 'slug: "what-is-convocation-certificate",'
if target_conclusion in content:
    end_bracket_idx = content.rfind("];")
    if end_bracket_idx != -1:
        new_content = content[:end_bracket_idx] + "  }," + article_20
        
        with open(blog_posts_file, "w") as f:
            f.write(new_content)
        print("Successfully appended Article 20 (Migration vs Transfer Comparison) to blogPostsPart5.tsx!")
    else:
        print("CRITICAL ERROR: Closing array bracket ]; not found!")
else:
    print("CRITICAL ERROR: Article 19 slug not found in blogPostsPart5.tsx!")
