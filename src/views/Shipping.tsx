import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Download, Zap, Globe } from "lucide-react";

export default function Shipping() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl font-extrabold mb-2">Shipping & Delivery Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 2026</p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-primary text-xl mb-2">📦 Digital Product Only</h2>
          <p className="text-foreground/80 leading-relaxed">
            Medical Certificate Generator is a <strong>100% digital, browser-based tool</strong>. There are no physical products,
            no shipping, and no delivery wait times. Everything is instant and happens entirely in your browser.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-5">How Delivery Works</h2>
          <div className="space-y-4">
            {[
              { icon: Zap, title: "Instant Generation", desc: "Certificates are generated in real time as you fill in the form. There is no processing time, queue, or server-side delay." },
              { icon: Download, title: "Instant Download", desc: "Click the 'Download Certificate' button to receive your PNG file immediately. It is saved directly to your device's download folder." },
              { icon: Globe, title: "Worldwide Access", desc: "Our service is accessible from anywhere in the world with an internet connection. There are no geographic restrictions on access or download." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">No Payment, No Orders</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Medical Certificate Generator is entirely free. There is no payment process, no order confirmation, no invoice, and no
            shipping address required. You do not need to create an account or provide any personal information to
            use the Service.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Simply visit the website, choose your template, fill in the details, and download your certificate —
            all in under 60 seconds, completely free.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Technical Requirements for Download</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">To download your certificate, you need:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-foreground/80">
            <li>A modern web browser (Chrome, Firefox, Edge, Safari — latest versions recommended)</li>
            <li>JavaScript enabled in your browser</li>
            <li>Sufficient device storage to save a PNG file (typically 200KB–1MB)</li>
            <li>Permissions for your browser to download files to your device</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Download Issues</h2>
          <p className="text-foreground/80 leading-relaxed mb-3">If your download is not working, try:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-foreground/80">
            <li>Checking your browser's download permissions (some browsers block automatic downloads)</li>
            <li>Disabling browser extensions that may interfere with file generation</li>
            <li>Using a different browser (Chrome is recommended for best compatibility)</li>
            <li>Ensuring Google Fonts have finished loading (required for handwriting fonts)</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mt-3">
            If problems persist, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
          <p className="text-foreground/80 leading-relaxed">
            Since Medical Certificate Generator is a free service with no payments, there are no refunds to process. If you are
            experiencing a technical issue, please <a href="/contact" className="text-primary hover:underline">contact our support team</a> and we will
            assist you promptly.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
