import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="text-foreground/80 leading-relaxed space-y-3">{children}</div>
  </section>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 2026</p>

        <Section title="Introduction">
          <p>Welcome to Medical Certificate Generator ("we", "our", "us"). We are committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our Medical Certificate Generator at medicalcertificategenerator.co.in.</p>
          <p>By using our service, you agree to the practices described in this policy.</p>
        </Section>

        <Section title="Information We Do Not Collect">
          <p>Medical Certificate Generator is a fully client-side browser application. This means:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>All form data you enter (patient names, diagnoses, doctor details) stays entirely in your browser and is never sent to our servers.</li>
            <li>We do not store any user-entered information in databases.</li>
            <li>We do not require or collect account information (no login or signup).</li>
            <li>We do not collect payment information.</li>
            <li>We do not sell, share, or trade any personal data.</li>
          </ul>
        </Section>

        <Section title="Automatically Collected Data">
          <p>Like most websites, we may collect the following standard technical information automatically when you visit:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>IP Address:</strong> Used for security monitoring and abuse prevention. Not linked to any personal profile.</li>
            <li><strong>Browser & Device Type:</strong> Used to improve compatibility and performance.</li>
            <li><strong>Pages Visited & Time Spent:</strong> Used via analytics tools (such as Google Analytics) in aggregate, anonymized form to improve our product.</li>
            <li><strong>Referral Source:</strong> Where you came from before visiting our site.</li>
          </ul>
        </Section>

        <Section title="Cookies">
          <p>We may use cookies and similar tracking technologies for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Essential Cookies:</strong> Required for the site to function properly (e.g., preference storage).</li>
            <li><strong>Analytics Cookies:</strong> Aggregate usage data to help us improve the tool. These do not identify individuals.</li>
            <li><strong>No Advertising Cookies:</strong> We do not display ads and do not use advertising cookies.</li>
          </ul>
          <p>You can disable cookies in your browser settings, though this may affect some functionality.</p>
        </Section>

        <Section title="Third-Party Services">
          <p>We may use the following third-party services, each governed by their own privacy policies:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Google Analytics (usage statistics)</li>
            <li>Google Fonts (font loading)</li>
          </ul>
        </Section>

        <Section title="Data Security">
          <p>Since we do not collect or transmit your certificate data, the risk of data breach is minimal. Our site uses HTTPS encryption for all connections. We take appropriate technical measures to protect any server-side data we do hold (analytics, contact form submissions).</p>
        </Section>

        <Section title="Children's Privacy">
          <p>This service is not directed at children under 13. We do not knowingly collect information from children. If you believe a child has submitted information through our contact form, please contact us and we will delete it.</p>
        </Section>

        <Section title="Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will notify users of significant changes by updating the "Last updated" date at the top of this page. Continued use of the service after changes constitutes acceptance.</p>
        </Section>

        <Section title="Contact">
          <p>For privacy-related questions, contact us at: <a href="/contact" className="text-primary hover:underline">our contact page</a> or email support@medicalcertificategenerator.co.in.</p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
