import json
import os

blog_posts_file = "/Users/riponchakma/Desktop/medicalgenerator/generator/src/data/blogPostsPart5.tsx"

with open(blog_posts_file, "r") as f:
    content = f.read()

article_22 = """
  // ─── ARTICLE 22 (Earned Leave (EL) Guide) ────────────────────────────────────
  {
    slug: "what-is-earned-leave",
    title: "Earned Leave (EL) — Meaning, Rules, and How It Works in India",
    metaDescription: "Earned leave (EL) is leave you accumulate through service. Learn what it means, how much you get, encashment rules, and how it differs from casual and sick leave.",
    category: "Academic & Government Guidelines",
    date: "May 2026",
    dateModified: "May 2026",
    datePublishedIso: "2026-05-24",
    dateModifiedIso: "2026-05-24",
    readTime: "9 min read",
    tags: ["Earned Leave", "Privilege Leave", "Leave Encashment", "Tax Exemption", "India", "Corporate Rules", "Academic Guides"],
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
                  "name": "EL full form — is it Earned Leave or Emergency Leave?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In professional and legal human resources administration, the official el full form in leave is Earned Leave (often referred to as privilege leave or annual leave). It represents the leave you accumulate sequentially through active working days of service. There is no statutory leave category officially termed \\"Emergency Leave.\\" If an employee experiences a domestic crisis or sudden emergency, they will typically utilize their accumulated Casual Leave (CL) or seek special unpaid leave, as Earned Leave usually requires an advance application and management approval."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can earned leave be taken without approval from the manager?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, Earned Leave (EL) cannot be taken without the prior written approval or formal clearance from your reporting manager or department head. Unlike Casual Leave, which is designed to handle sudden personal matters, EL is intended for planned, extended vacations or personal sabbaticals. Company policies and labor laws in India typically mandate that an employee must apply for EL at least 3 to 7 working days in advance, allowing the department to manage workflows and cover active duties to prevent business disruptions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "My company doesn't allow leave carry-forward — is this legal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generally, in the organized sector, a total prohibition on carry-forward of earned leave is illegal under most state Shops and Establishments Acts and the Factories Act, 1948. These statutes mandate that employees have a legal right to carry forward a minimum number of accumulated Earned Leaves (ranging from 15 to 45 days, depending on the state) to the next calendar year. If an employer forces a \\"use-it-or-lose-it\\" policy that lapses all accumulated EL without allowing carry-forward or offering financial encashment, they are in violation of state labor rules."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many days of EL can I take at once?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The maximum number of Earned Leave (EL) days you can take in a single stretch depends entirely on your company\\'s internal leave policy and your employment contract. While there is no statutory maximum limit under state labor acts (provided you have the accumulated balance), most corporates set an administrative limit—usually permitting a maximum of 10 to 15 continuous days at once to prevent workflow disruption. Taking a longer vacation or sabbatical typically requires special administrative approvals from your HR director or department VP."
                  }
                },
                {
                  "@type": "Question",
                  "name": "I was on earned leave and fell sick — can I convert those days to sick leave?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, most professional organizations allow you to convert your approved Earned Leave (EL) into Sick Leave (SL) if you fall ill during your vacation, provided you follow the established HR procedures. You must immediately inform your reporting manager and submit a formal medical certificate issued by a registered medical practitioner upon your return to work. To understand the statutory details of this transition, read our guide on the rules about medical certificate for leave in India to ensure your medical files are fully compliant."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does earned leave accumulate during maternity leave?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, under the Maternity Benefit Act, 1961 (and subsequent amendments), the period of maternity leave is legally treated as \\"active duty\\" or continuous service. Therefore, female employees continue to earn and accumulate their standard Earned Leave (EL) balance during their 26 weeks of paid maternity leave, exactly as if they were physically present in the office. Employers are prohibited from deducting or reducing the accrual of annual leaves during this statutory maternity period."
                  }
                }
              ]
            })
          }}
        />

        {/* Introduction */}
        <p className="text-lg font-medium text-foreground">
          Imagine a very common, highly satisfying milestone: You have been working diligently at your corporate desk for the past three years. You have managed your project deadlines, avoided mid-week breaks, and quietly watched your annual leave balances build up in the company\\'s payroll portal. Now, you are planning a dream two-week vacation with your family or preparing for a major domestic event. As you open the leave portal, you ask yourself: <em>How much earned leave do I actually have? Can I carry it forward if I don\\'t use it, and what are the exact rules regarding leave encashment?</em>
        </p>
        <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
          In India, corporate leave rules can feel genuinely confusing because they depend on multiple overlapping laws—including government service rules, state-specific acts, and central industrial acts. The **what is earned leave** query is one of the most critical queries for any salaried professional. Understanding the **earned leave meaning**, how it is mathematically accrued, and how the **earned leave encashment** rules operate is vital to maximizing your professional benefits. This comprehensive guide details the EL full form in leave, how it differs from casual and sick leaves, the exact formulas used by central government and private sectors, and how to claim tax-free encashment.
        </p>

        {/* SECTION 1 — H2: What Is Earned Leave? */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">What Is Earned Leave? (EL Full Form and Meaning)</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            The **el full form in leave** stands for <strong>Earned Leave</strong>. It represents the primary category of paid annual leave that an employee "earns" or accumulates based on the actual number of active working days they have completed in service. Unlike Casual Leave (which is a fixed, non-cumulative allowance given at the start of the year), Earned Leave is literally built up over time through your physical presence on the job.
          </p>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            For employees asking **el kya hota hai** (एल क्या होता है) or **el means in leave**, the answer is: it represents your "earned bank" of paid holidays that you have legally accumulated and can utilize for planned, extended personal vacations, sabbaticals, or family events. Because EL is built through active service, Indian labor laws strictly protect your right to either carry forward unused balances to the next calendar year or encash them for cash at the time of resignation or retirement.
          </p>
        </section>

        {/* SECTION 2 — H2: How Much Earned Leave Do You Get? */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">How Much Earned Leave Do You Get? (CCS Rules vs. Private Sector)</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            The mathematical rate at which you accrue Earned Leave is highly structured and depends entirely on the legal framework governing your specific employment sector:
          </p>
          
          <h3 className="text-lg font-bold text-foreground mt-4">Central Government Employees (CCS Leave Rules)</h3>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Under the **Central Civil Services (Leave) Rules, 1972**, central government employees are entitled to **30 days of Earned Leave per year**. This balance is credited in two equal installments of 15 days each on the 1st of January and the 1st of July every year. The leaves accrue at the rate of 2.5 days for each completed calendar month of service. The maximum accumulation limit is strictly capped at **300 days**. Any accumulated EL beyond 300 days automatically lapses.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-4">Factories Act, 1948 (Private Manufacturing & Labs)</h3>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Under Section 79 of the <strong>Factories Act, 1948</strong>, any employee working in a manufacturing unit or laboratory who has completed a minimum of 240 days of active service in a calendar year is entitled to **1 day of Earned Leave for every 20 days worked** during the previous year. For young workers (under 18), the rate is higher: 1 day for every 15 days worked.
          </p>

          <h3 className="text-lg font-bold text-foreground mt-4">Shops and Establishments Act (Private Sector Corporate Offices)</h3>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            For IT professionals, corporate employees, and private office staff, leave accruals are governed by the state-specific **Shops and Establishments Acts**, leading to regional variations:
          </p>
          <ul className="list-disc list-inside space-y-1 font-sans text-xs md:text-sm text-foreground/80 pl-4">
            <li><strong>Maharashtra:</strong> Entitles employees to 21 days of paid annual leave per year (1 day for every 18 days worked).</li>
            <li><strong>Delhi:</strong> Entitles staff to 15 days of earned leave per year.</li>
            <li><strong>Karnataka:</strong> Entitles corporate staff to 12 days of annual leave per year.</li>
          </ul>

          <h3 className="text-lg font-bold text-foreground mt-4">Private Sector (Large MNC Corporates)</h3>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Most large multinational corporations (MNCs) and banks offer **15 to 18 days of Privilege Leave (PL) or Paid Leave** per year, which is the private sector equivalent of Earned Leave. The exact accumulation thresholds and carry-forward rules are detailed in your employment contract, subject to the minimums set by the respective state\\'s Shops Act.
          </p>
        </section>

        {/* SECTION 3 — H2: How Is Earned Leave Different from CL and SL? */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">How Is Earned Leave Different from Casual Leave and Sick Leave?</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            To prevent administrative confusion, here is a detailed, high-fidelity comparison of the three primary leave categories in India:
          </p>
          <div className="overflow-x-auto border border-border rounded-xl bg-card">
            <table className="w-full text-left border-collapse font-sans text-xs md:text-sm text-foreground/80">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-3 font-bold text-foreground">Aspect</th>
                  <th className="p-3 font-bold text-foreground">Earned Leave (EL)</th>
                  <th className="p-3 font-bold text-foreground">Casual Leave (CL)</th>
                  <th className="p-3 font-bold text-foreground">Sick Leave (SL)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-semibold">Also Known As</td>
                  <td className="p-3">Privilege Leave (PL), Annual Leave.</td>
                  <td className="p-3">CL.</td>
                  <td className="p-3">Medical Leave, Sick Leave.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Accrual Pattern</td>
                  <td className="p-3">Earned sequentially based on working days completed.</td>
                  <td className="p-3">Fixed entitlement credited at the start of the year.</td>
                  <td className="p-3">Fixed entitlement credited at the start of the year.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Carry Forward</td>
                  <td className="p-3">Yes, allowed to carry forward up to statutory limits.</td>
                  <td className="p-3">No, unused balance automatically lapses on Dec 31.</td>
                  <td className="p-3">Sometimes, depends on company/state policies.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Encashment Option</td>
                  <td className="p-3">Yes, fully encashable on exit or retirement.</td>
                  <td className="p-3">No, cannot be encashed.</td>
                  <td className="p-3">No, cannot be encashed.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Advance Notice</td>
                  <td className="p-3">Mandatory (usually 3 to 7 working days in advance).</td>
                  <td className="p-3">Not required (can be claimed for sudden emergencies).</td>
                  <td className="p-3">Not required, but HR must be informed immediately.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Medical Verification</td>
                  <td className="p-3">Not Required.</td>
                  <td className="p-3">Not Required.</td>
                  <td className="p-3">Mandatory for absences exceeding 3 consecutive days.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4 — H2: Earned Leave Encashment */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">Earned Leave Encashment — Rules and Taxability</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            The option of **earned leave encashment** represents one of the most tax-efficient financial benefits available to salaried employees in India. If you do not utilize your accumulated EL balance, your employer will compensate you in cash for the unused days. The rules are highly structured:
          </p>
          <ul className="list-disc list-inside space-y-2 font-sans text-xs md:text-sm text-foreground/80 pl-4">
            <li><strong>Encashment on Retirement (Government):</strong> Central and State government employees can encash their accumulated EL up to a maximum of 300 days at the time of retirement. Under Section 10(10AA) of the Income Tax Act, this entire encashment amount is **100% tax-free**.</li>
            <li><strong>Encashment on Resignation (Private Sector):</strong> When leaving a private company, your unused EL balance is encashed as part of your Full and Final (F&F) settlement. In **Budget 2023**, the Government of India significantly revised the tax exemption cap under Section 10(10AA) for private-sector employees, raising it from Rs. 3 Lakh to **Rs. 25 Lakh** tax-free.</li>
            <li><strong>During Active Service:</strong> Some organizations allow employees to encash a portion of their EL during active service (often linked to Leave Travel Concession - LTC claims). However, note that any leave encashed during active service is **100% taxable** as salary under your standard tax slab.</li>
            <li><strong>Calculation Formula:</strong> Encashment is calculated based on your **Basic Salary + Dearness Allowance (DA)** only—not your Gross CTC. The formula is: <em>(Basic + DA) / 30 * Number of Unused EL Days</em>.</li>
          </ul>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans mt-2">
            If you fall ill and need to transition your leaves, check out our professional templates for a <InternalLink href="/medical-certificate-for-leave/">medical certificate for sick leave</InternalLink>, and review the official <a href="https://www.labour.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-primary hover:underline font-semibold">Central Civil Services Leave Rules</a> to keep your records compliant.
          </p>
        </section>

        {/* SECTION 5 — H2: What Happens to Earned Leave When You Change Jobs? */}
        <section className="space-y-4 text-left">
          <h2 className="text-2xl font-bold text-foreground">What Happens to Earned Leave When You Change Jobs?</h2>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            What happens to your hard-earned leave balance when you decide to switch employers? The rules differ between the private and public sectors:
          </p>
          <div className="bg-card border border-border p-5 rounded-2xl space-y-3 font-sans text-xs md:text-sm text-foreground/80">
            <p>
              <strong>1. In the Private Sector:</strong> Your accumulated EL balance **does not transfer** to your new employer. When you submit your resignation, the HR department will calculate your active EL balance on your last working day, encash the amount up to Rs. 25 Lakh tax-free, and include it in your F&F settlement. You will start with a fresh, zero-leave balance at your new company.
            </p>
            <p>
              <strong>2. In Government Service:</strong> If you are transferring between different central government departments or ministries without any break in service, your accumulated EL balance **transfers completely** to your new service book register, preserving your balance up to the 300-day cap.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q1: EL full form — is it Earned Leave or Emergency Leave?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                In professional and legal human resources administration, the official el full form in leave is Earned Leave (often referred to as privilege leave or annual leave). It represents the leave you accumulate sequentially through active working days of service. There is no statutory leave category officially termed "Emergency Leave." If an employee experiences a domestic crisis or sudden emergency, they will typically utilize their accumulated Casual Leave (CL) or seek special unpaid leave, as Earned Leave usually requires an advance application and management approval.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q2: Can earned leave be taken without approval from the manager?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                No, Earned Leave (EL) cannot be taken without the prior written approval or formal clearance from your reporting manager or department head. Unlike Casual Leave, which is designed to handle sudden personal matters, EL is intended for planned, extended vacations or personal sabbaticals. Company policies and labor laws in India typically mandate that an employee must apply for EL at least 3 to 7 working days in advance, allowing the department to manage workflows and cover active duties to prevent business disruptions.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q3: My company doesn't allow leave carry-forward — is this legal?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Generally, in the organized sector, a total prohibition on carry-forward of earned leave is illegal under most state Shops and Establishments Acts and the Factories Act, 1948. These statutes mandate that employees have a legal right to carry forward a minimum number of accumulated Earned Leaves (ranging from 15 to 45 days, depending on the state) to the next calendar year. If an employer forces a "use-it-or-lose-it" policy that lapses all accumulated EL without allowing carry-forward or offering financial encashment, they are in violation of state labor rules.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q4: How many days of EL can I take at once?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                The maximum number of Earned Leave (EL) days you can take in a single stretch depends entirely on your company\\'s internal leave policy and your employment contract. While there is no statutory maximum limit under state labor acts (provided you have the accumulated balance), most corporates set an administrative limit—usually permitting a maximum of 10 to 15 continuous days at once to prevent workflow disruption. Taking a longer vacation or sabbatical typically requires special administrative approvals from your HR director or department VP.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q5: I was on earned leave and fell sick — can I convert those days to sick leave?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, most professional organizations allow you to convert your approved Earned Leave (EL) into Sick Leave (SL) if you fall ill during your vacation, provided you follow the established HR procedures. You must immediately inform your reporting manager and submit a formal medical certificate issued by a registered medical practitioner upon your return to work. To understand the statutory details of this transition, read our guide on the rules about medical certificate for leave in India to ensure your medical files are fully compliant.
              </p>
            </div>
            <div className="bg-card border border-border p-5 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-foreground">Q6: Does earned leave accumulate during maternity leave?</h4>
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
                Yes, under the Maternity Benefit Act, 1961 (and subsequent amendments), the period of maternity leave is legally treated as "active duty" or continuous service. Therefore, female employees continue to earn and accumulate their standard Earned Leave (EL) balance during their 26 weeks of paid maternity leave, exactly as if they were physically present in the office. Employers are prohibited from deducting or reducing the accrual of annual leaves during this statutory maternity period.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-muted/40 p-6 rounded-2xl border border-border space-y-4 text-left">
          <h3 className="font-bold text-foreground">Key Takeaways</h3>
          <ul className="space-y-2 text-xs md:text-sm text-foreground/80 list-disc list-inside leading-relaxed font-sans">
            <li>EL stands for Earned Leave, which represents paid leave accumulated through continuous service.</li>
            <li>Central government employees accrue 30 days of EL annually, with an accumulation cap of 300 days.</li>
            <li>Unlike Casual Leave, Earned Leave requires advance notices and formal approvals from your manager.</li>
            <li>Private-sector employees enjoy tax exemptions up to Rs. 25 Lakh on EL encashments at resignation/retirement.</li>
            <li>Female staff continue to earn and accrue their standard EL balances during paid maternity leave terms.</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="space-y-3 text-left">
          <h3 className="font-bold text-lg text-foreground">Conclusion</h3>
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-sans">
            Understanding your **Earned Leave (EL)** entitlements and the governing labor regulations is a vital key to protecting your work-life balance and maximizing your financial settlements in India. While Casual and Sick Leaves provide vital short-term safety nets for sudden personal or health emergencies, your Earned Leave bank represents a highly valuable financial asset built systematically through your active service. By keeping track of your leave accruals, staying aware of state carry-forward mandates, and leveraging tax-free encashments during transitions, you can secure your personal health, enjoy planned family vacations, and maximize your professional payouts.
          </p>
        </section>

        <Disclaimer />
      </div>
    ),
  },
];
"""

# Let\\'s append Article 22 just before the closing ]; of the file.
# The absolute end of the file is exactly "];" followed by optional newlines.
# Let\\'s search for the closing bracket and replace it.

target_conclusion = 'slug: "salary-certificate",'
if target_conclusion in content:
    end_bracket_idx = content.rfind("];")
    if end_bracket_idx != -1:
        new_content = content[:end_bracket_idx] + "  }," + article_22
        
        with open(blog_posts_file, "w") as f:
            f.write(new_content)
        print("Successfully appended Article 22 (Earned Leave) to blogPostsPart5.tsx!")
    else:
        print("CRITICAL ERROR: Closing array bracket ]; not found!")
else:
    print("CRITICAL ERROR: Article 21 slug not found in blogPostsPart5.tsx!")
