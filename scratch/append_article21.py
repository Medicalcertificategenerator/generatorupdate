import json
import os

blog_posts_file = "/Users/riponchakma/Desktop/medicalgenerator/generator/src/data/blogPostsPart5.tsx"

with open(blog_posts_file, "r") as f:
    content = f.read()

article_21 = """
  // ─── ARTICLE 21 (Salary Certificate Guide) ────────────────────────────────────
  {
    slug: "salary-certificate",
    title: "Salary Certificate — Format, Purpose, and How to Get One from Your Employer",
    metaDescription: "A salary certificate is a formal letter from your employer confirming your monthly salary. Learn the correct format, when banks need it, and how to request one.",
    category: "Academic & Government Guidelines",
    date: "May 2026",
    dateModified: "May 2026",
    datePublishedIso: "2026-05-24",
    dateModifiedIso: "2026-05-24",
    readTime: "9 min read",
    tags: ["Salary Certificate", "Salary Slip", "Bank Loan Proof", "DigiLocker", "India", "Income Verification", "Academic Guides"],
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
                  "name": "Can I write my own salary certificate and get it signed by my employer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can draft the basic text of your salary certificate yourself and present it to your employer for review and signature, which is very common in small businesses or informal organizations that do not have dedicated HR departments. However, you must make sure that the final copy is printed on the official, pre-printed letterhead of the company, includes all essential payroll details (gross, deductions, net), and is physically signed and stamped by an authorized representative like the owner, partner, or director. An unauthorized self-drafted letter carries no legal weight."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Banks are rejecting my salary certificate — what could be wrong?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If a bank rejects your salary certificate, it is usually due to one of three critical administrative reasons: first, the letter is missing the official round seal or stamp of the company; second, the monthly salary figures listed on the certificate do not match your actual bank statements or payslip deposits; or third, the letter is not printed on formal letterhead or lacks a valid authorized signature. Additionally, banks will reject a certificate that is not properly dated or is missing standard structural breakdowns like PF and tax deductions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "I have just joined a new job — can I get a salary certificate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can request a salary certificate even if you have recently joined a new organization. In this scenario, the HR department will draft a certificate that certifies your employment status, your designation, your date of joining, and your agreed monthly CTC breakdown based on your official appointment letter. However, since you will not have historical bank deposits or payslips, banks may request a copy of your previous employment records and your new appointment letter to process any credit or loan applications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can a salary certificate be issued for variable/incentive-based pay?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, a salary certificate can account for variable, incentive, or commission-based pay structures. The HR department will typically draft the certificate by stating your fixed basic components and allowances separately, and then adding a clause that details your average monthly or annual incentive payouts based on the past 6 to 12 months\\' payroll cycles. Alternatively, they can state your gross earnings as a range or refer to your Form 16 and audited incentive statements to verify your complete creditworthiness."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is a salary certificate needed for home loan applications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, a salary certificate is one of the most critical documents required during a home loan application. Unlike a personal loan or credit card application (which may only require simple payslips), a home loan involves a very high credit ticket size and a multi-decade repayment tenure. Financial institutions strictly require a formal, purpose-addressed salary certificate directly from your employer as a legal testimony of your steady income, which serves to verify that your employment is stable and that your payroll numbers are verified."
                  }
                },
                {
                  "@type": "Question",
                  "name": "My employer is a small shop with no letterhead — will a handwritten certificate work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For formal commercial banks and major housing finance companies (HFCs), a simple handwritten letter on plain paper is almost always rejected. However, for smaller microfinance institutions (NBFCs) or co-operative credit societies, a handwritten certificate may be accepted if it is drafted on the shop\\'s official bill book/invoice page, carries the proprietor\\'s physical stamp, and is backed by a registered income affidavit on a Rs. 100 stamp paper along with active bank statements showing continuous monthly cash deposits."
                  }
                }
              ]
            })
          }}
        />

        {/* Introduction */}
        <p className="text-lg font-medium text-foreground">
          It is a standard milestone in many working professionals\\' lives: You are finally taking the leap to purchase your own home or apply for a major personal loan to fund a family wedding. You bundle together your bank statements, your IT returns, and your last three monthly payslips, and head to the bank branch. The loan officer reviews your file, nods, and then adds one final, unexpected item to your checklist: <em>"Please submit an official Salary Certificate from your employer to verify your monthly take-home earnings."</em>
        </p>
        <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
          You are left slightly confused. Isn\\'t a monthly payslip the same as a salary certificate? Why does the bank need a separate letter, and how do you go about requesting one from your HR department? The **salary certificate** is a crucial, legally binding testimony of your income that financial institutions strictly rely on for high-value credit. This comprehensive guide covers the exact definition of a salary certificate, contrasts it cleanly with a payslip, outlines what its standard format must contain, explains how to handle cash salary situations, and provides a clear 5-step roadmap to get one from your employer.
        </p>

        {/* SECTION 1 — H2: What Is a Salary Certificate? */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">What Is a Salary Certificate?</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            A <strong>salary certificate</strong> is a formal legal document issued by an employer on the company\\'s official, pre-printed letterhead. It serves as a verified, official testimony confirming a named employee\\'s active employment status, designation, date of joining, and their complete monthly or annual salary structure—including gross earnings, statutory deductions, and net take-home pay.
          </p>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Unlike standard internal payroll documents, a salary certificate is an **external-facing document**. It is typically drafted on-demand and is specifically addressed to a third party—such as a commercial bank, a foreign consulate for visa processing, or a prospective landlord. To carry full legal and financial validity, the certificate must carry the physical signature of an authorized signatory (such as the HR Manager, Finance Controller, or Director) and be stamped with the company\\'s round official seal.
          </p>
        </section>

        {/* SECTION 2 — H2: Salary Certificate vs Salary Slip */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">Salary Certificate vs Salary Slip — What's the Difference?</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Many working professionals use these two terms interchangeably, but they represent entirely different payroll files:
          </p>
          <div className="overflow-x-auto border border-border rounded-xl bg-card">
            <table className="w-full text-left border-collapse font-sans text-xs md:text-sm text-foreground/80">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-3 font-bold text-foreground">Aspect</th>
                  <th className="p-3 font-bold text-foreground">Salary Certificate</th>
                  <th className="p-3 font-bold text-foreground">Salary Slip / Pay Slip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-semibold">Primary Definition</td>
                  <td className="p-3">A formal letter drafted on company letterhead.</td>
                  <td className="p-3">An automated internal statement generated by payroll software.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Primary Target Audience</td>
                  <td className="p-3">External third parties (Banks, Visas, Landlords).</td>
                  <td className="p-3">Internal record for the individual employee.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Addressed To</td>
                  <td className="p-3">Specifically addressed to a named institution (e.g., "To State Bank of India").</td>
                  <td className="p-3">Addressed directly to the employee.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Official Seal & Stamp</td>
                  <td className="p-3">Mandatory (needs official company stamp and physical signature).</td>
                  <td className="p-3">Generally digital, without physical stamps or signatures.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">When Issued</td>
                  <td className="p-3">On-demand (only when formally requested by the employee).</td>
                  <td className="p-3">Automatic (issued monthly at the end of the payroll cycle).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Legal & Financial Weight</td>
                  <td className="p-3">Higher (represents formal corporate correspondence).</td>
                  <td className="p-3">Lower (serves as a transactional receipt of payment).</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">For Cash Earners</td>
                  <td className="p-3">Issued manually by proprietor (highly crucial).</td>
                  <td className="p-3">Often not generated or issued.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3 — H2: What Should a Salary Certificate Contain? */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">What Should a Salary Certificate Contain?</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            To be accepted by major financial institutions like SBI, ICICI, or HDFC, a salary certificate must follow a highly structured format. A standard, complete **salary certificate format** must contain the following core fields:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Company & Employee Profile
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-foreground/80 font-sans">
                <li><strong>Corporate Letterhead:</strong> Company name, logo, address, and Corporate Identification Number (CIN).</li>
                <li><strong>Issue Date:</strong> The precise calendar date the letter is printed.</li>
                <li><strong>Employee Credentials:</strong> Full legal name, designation, department, and employee ID.</li>
                <li><strong>Tenure Record:</strong> The exact date of joining and active employment status.</li>
              </ul>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Financial & Deduction Details
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-foreground/80 font-sans">
                <li><strong>Gross Monthly Salary:</strong> broken down into Basic Pay, HRA, and Special Allowances.</li>
                <li><strong>Statutory Deductions:</strong> Detailed deductions like Provident Fund (PF), Professional Tax (PT), and TDS.</li>
                <li><strong>Net Take-Home Pay:</strong> The actual net amount deposited into the bank account (written in both figures and words).</li>
                <li><strong>Sign-off:</strong> HR manager physical signature and company round seal.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4 — H2: Cash Salary Certificate */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">Cash Salary Certificate — What If You\\'re Paid in Cash?</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            This is one of the most critical real-world requirements for lakhs of informal sector workers, small business employees, and daily wage earners across India. If you are paid your monthly salary in cash, you will not have an auto-generated payslip trail, making a **cash salary certificate format** absolutely essential when applying for loans.
          </p>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Under these circumstances, financial institutions accept a cash salary certificate under the following parameters:
          </p>
          <ul className="list-disc list-inside space-y-2 font-sans text-xs md:text-sm text-foreground/80 pl-4">
            <li><strong>Employer Letterhead:</strong> The proprietor of the firm must write a formal statement on the firm\\'s official bill book, letterhead, or invoice pad, explicitly confirming that the employee is paid their salary in cash.</li>
            <li><strong>Tax Registration Details:</strong> The letter must contain the employer\\'s PAN, shop license registration, or GST number to prove the business is legally active.</li>
            <li><strong>Supplementary Proofs:</strong> The employee must back the cash certificate with their personal bank statement, showing regular, consistent monthly cash deposits that match the certificate numbers.</li>
            <li><strong>Income Affidavit:</strong> For government schemes or certificates (such as when seeking an <InternalLink href="/ews-certificate/">EWS certificate</InternalLink> where income proof is mandatory), a formal Income Affidavit executed on a Rs. 50 or Rs. 100 stamp paper can serve as a valid legal substitute for a salary certificate.</li>
          </ul>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans mt-2">
            If you need to verify your local income records for municipal offices, check out our upcoming roadmap on filing an <InternalLink href="/blog/income-certificate-application/">income certificate</InternalLink> application.
          </p>
        </section>

        {/* SECTION 5 — H2: How to Get a Salary Certificate */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">How to Get a Salary Certificate from Your Employer: A 5-Step Roadmap</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Obtaining an official, stamped salary certificate is a straightforward administrative process. Follow this practical, step-by-step roadmap:
          </p>
          
          <div className="space-y-4 font-sans text-xs md:text-sm text-foreground/80">
            <div className="flex gap-4 items-start p-4 rounded-xl border border-border bg-card">
              <div className="bg-primary/10 text-primary font-bold text-sm rounded-full p-2 w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">Submit a Formal Written Request to HR</h4>
                <p className="leading-relaxed">
                  Log in to your company\\'s employee portal or send a professional email directly to the HR operations desk. Clearly state your employee ID, designation, and that you require an official Salary Certificate.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-xl border border-border bg-card">
              <div className="bg-primary/10 text-primary font-bold text-sm rounded-full p-2 w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">Specify the Named Addressee and Purpose</h4>
                <p className="leading-relaxed">
                  Always provide the exact name and address of the institution requesting the certificate. For instance, if you are applying for a home loan, state: <em>"Please address the certificate to: The Branch Manager, State Bank of India, Bangalore Main Branch."</em> A generic "To Whom It May Concern" certificate is often rejected by credit underwriters.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-xl border border-border bg-card">
              <div className="bg-primary/10 text-primary font-bold text-sm rounded-full p-2 w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">Wait for HR Processing Timelines</h4>
                <p className="leading-relaxed">
                  HR divisions typically take 2 to 5 working days to verify your payroll records and secure the physical signature of the authorized signatory. Plan your loan or visa deadlines accordingly.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-xl border border-border bg-card">
              <div className="bg-primary/10 text-primary font-bold text-sm rounded-full p-2 w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">Verify the Salary Numbers Before Signing</h4>
                <p className="leading-relaxed">
                  Once you receive the draft copy, double-check that the Gross and Net salary figures match your bank statement deposits exactly. Any discrepancy will lead to immediate rejection by the bank.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 rounded-xl border border-border bg-card">
              <div className="bg-primary/10 text-primary font-bold text-sm rounded-full p-2 w-8 h-8 flex items-center justify-center flex-shrink-0">5</div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">Self-Employed Alternatives</h4>
                <p className="leading-relaxed">
                  If you are a business owner or self-employed, you cannot issue a salary certificate to yourself. Instead, according to <a href="https://www.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline font-semibold">RBI guidelines for income proof in loan applications</a>, financial institutions rely on your audited Balance Sheets, Profit & Loss accounts, last three years\\' Income Tax Returns (ITR), or a formal Income Certificate issued by a registered Chartered Accountant (CA).
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans mt-2">
            If you require time away from your desk to process these financial applications, ensure you present a valid <InternalLink href="/medical-certificate-for-leave/">medical certificate for leave</InternalLink> to your HR manager early.
          </p>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q1: Can I write my own salary certificate and get it signed by my employer?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, you can draft the basic text of your salary certificate yourself and present it to your employer for review and signature, which is very common in small businesses or informal organizations that do not have dedicated HR departments. However, you must make sure that the final copy is printed on the official, pre-printed letterhead of the company, includes all essential payroll details (gross, deductions, net), and is physically signed and stamped by an authorized representative like the owner, partner, or director. An unauthorized self-drafted letter carries no legal weight.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q2: Banks are rejecting my salary certificate — what could be wrong?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                If a bank rejects your salary certificate, it is usually due to one of three critical administrative reasons: first, the letter is missing the official round seal or stamp of the company; second, the monthly salary figures listed on the certificate do not match your actual bank statements or payslip deposits; or third, the letter is not printed on formal letterhead or lacks a valid authorized signature. Additionally, banks will reject a certificate that is not properly dated or is missing standard structural breakdowns like PF and tax deductions.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q3: I have just joined a new job — can I get a salary certificate?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, you can request a salary certificate even if you have recently joined a new organization. In this scenario, the HR department will draft a certificate that certifies your employment status, your designation, your date of joining, and your agreed monthly CTC breakdown based on your official appointment letter. However, since you will not have historical bank deposits or payslips, banks may request a copy of your previous employment records and your new appointment letter to process any credit or loan applications.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q4: Can a salary certificate be issued for variable/incentive-based pay?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, a salary certificate can account for variable, incentive, or commission-based pay structures. The HR department will typically draft the certificate by stating your fixed basic components and allowances separately, and then adding a clause that details your average monthly or annual incentive payouts based on the past 6 to 12 months\\' payroll cycles. Alternatively, they can state your gross earnings as a range or refer to your Form 16 and audited incentive statements to verify your complete creditworthiness.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q5: Is a salary certificate needed for home loan applications?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, a salary certificate is one of the most critical documents required during a home loan application. Unlike a personal loan or credit card application (which may only require simple payslips), a home loan involves a very high credit ticket size and a multi-decade repayment tenure. Financial institutions strictly require a formal, purpose-addressed salary certificate directly from your employer as a legal testimony of your steady income, which serves to verify that your employment is stable and that your payroll numbers are verified.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q6: My employer is a small shop with no letterhead — will a handwritten certificate work?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                For formal commercial banks and major housing finance companies (HFCs), a simple handwritten letter on plain paper is almost always rejected. However, for smaller microfinance institutions (NBFCs) or co-operative credit societies, a handwritten certificate may be accepted if it is drafted on the shop\\'s official bill book/invoice page, carries the proprietor\\'s physical stamp, and is backed by a registered income affidavit on a Rs. 100 stamp paper along with active bank statements showing continuous monthly cash deposits.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-muted/40 p-6 rounded-2xl border border-border space-y-4 text-left">
          <h3 className="font-bold text-foreground">Key Takeaways</h3>
          <ul className="space-y-2 text-xs md:text-sm text-foreground/80 list-disc list-inside leading-relaxed font-sans">
            <li>A salary certificate is an external-facing, formal letter confirming your income details.</li>
            <li>Unlike auto-generated payslips, a salary certificate carries the official company round seal and HR signature.</li>
            <li>Always request the certificate to be addressed directly to the specific bank branch for loan applications.</li>
            <li>Cash salary earners can submit a letter on their proprietor\\'s letterhead backed by cash deposit statements.</li>
            <li>Self-employed individuals rely on CA audited financial statements and three years\\' IT returns.</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="space-y-3 text-left">
          <h3 className="font-bold text-lg text-foreground">Conclusion</h3>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Obtaining a **salary certificate** is a vital step in securing high-value loans and visa approvals. While your monthly payslips serve as quick receipts of payment, the salary certificate stands as your employer\\'s official legal testimony of your financial credentials. By planning ahead, submitting your HR portal requests early with correct named bank details, and double-checking that the final document carries the official corporate stamp and authorized signatures, you can protect your financial applications and guarantee a smooth, worry-free credit transition.
          </p>
        </section>

        <Disclaimer />
      </div>
    ),
  },
];
"""

# Let\\'s append Article 21 just before the closing ]; of the file.
# The absolute end of the file is exactly "];" followed by optional newlines.
# Let\\'s search for the closing bracket and replace it.

target_conclusion = 'slug: "what-is-convocation-certificate",'
if target_conclusion in content:
    end_bracket_idx = content.rfind("];")
    if end_bracket_idx != -1:
        new_content = content[:end_bracket_idx] + "  }," + article_21
        
        with open(blog_posts_file, "w") as f:
            f.write(new_content)
        print("Successfully appended Article 21 (Salary Certificate) to blogPostsPart5.tsx!")
    else:
        print("CRITICAL ERROR: Closing array bracket ]; not found!")
else:
    print("CRITICAL ERROR: Article 19 slug not found in blogPostsPart5.tsx!")
