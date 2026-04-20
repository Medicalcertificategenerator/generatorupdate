import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function DMCA() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl font-extrabold mb-2">DMCA Policy</h1>
        <p className="text-muted-foreground mb-10">Digital Millennium Copyright Act — Last updated: March 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Copyright Policy</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Medical Certificate Generator respects the intellectual property rights of others and expects users of our Service to do the same.
            It is our policy to respond to clear notices of alleged copyright infringement that comply with the Digital
            Millennium Copyright Act ("DMCA").
          </p>
          <p className="text-foreground/80 leading-relaxed">
            All original content on this website — including code, design, templates, and written content — is the
            exclusive property of Ziven Borceg / Medical Certificate Generator unless otherwise attributed. Unauthorized reproduction,
            distribution, or modification of any content is prohibited.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Reporting Infringement</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            If you believe that any content on our website infringes your copyright, please send a written DMCA
            takedown notice to us via our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
            Your notice must include:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-2 text-foreground/80">
            <li>A physical or electronic signature of the person authorized to act on behalf of the copyright owner.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the infringing material and its URL on our website.</li>
            <li>Your contact information (address, telephone number, and email address).</li>
            <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner, its agent, or the law.</li>
            <li>A statement that the information in the notification is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Our Response</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Upon receiving a valid DMCA notice, we will:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-foreground/80">
            <li>Acknowledge receipt within 5 business days</li>
            <li>Review the claim and, if valid, remove or disable access to the allegedly infringing content</li>
            <li>Notify the responsible party of the removal</li>
            <li>Provide a mechanism for counter-notification if appropriate</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Counter-Notification</h2>
          <p className="text-foreground/80 leading-relaxed">
            If you believe your content was removed in error, you may submit a counter-notification to us. We will
            review it and restore the content if the counter-notification is valid under DMCA guidelines.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Template Design Statement</h2>
          <p className="text-foreground/80 leading-relaxed">
            Our certificate templates are inspired by commonly used Indian prescription pad formats and are original
            creative works. They do not reproduce any specific registered trademark, proprietary watermark, or
            copyrighted document design. Any resemblance to specific clinic or hospital stationery is incidental and
            based on general industry conventions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact for DMCA Notices</h2>
          <p className="text-foreground/80 leading-relaxed">
            All DMCA notices should be submitted through our{" "}
            <a href="/contact" className="text-primary hover:underline">Contact page</a> or emailed to{" "}
            dmca@medicalcertificategenerator.co.in.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
