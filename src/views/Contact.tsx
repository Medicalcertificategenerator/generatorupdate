"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Have a question, found an issue, or want to report misuse? We're here to help.
          We typically respond within 24–48 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
              {[
                { icon: Mail, title: "Email", value: "support@medicalcertificategenerator.co.in" },
                { icon: MessageCircle, title: "Subject Suggestions", value: "Bug Report · Feature Request · Misuse Report · General Inquiry" },
                { icon: Clock, title: "Response Time", value: "Within 24–48 business hours" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <p className="text-xs text-foreground/70 leading-relaxed">
                <strong className="text-destructive">To report misuse:</strong> If you know of someone using this tool
                fraudulently, please email us with details. We take all reports seriously.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-green-800 dark:text-green-300">Message Sent!</h3>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Thank you for reaching out. We'll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" required placeholder="John Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required placeholder="you@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required placeholder="e.g. Bug report, Feature request" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required rows={5} className="resize-none" placeholder="Describe your question or issue in detail..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <Button type="submit" className="w-full font-semibold">Send Message</Button>
              </form>
            )}
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Is this tool completely free?", a: "Yes. No signup, no payment, no hidden fees. Generate and download as many certificates as you need." },
              { q: "Is the data I enter stored anywhere?", a: "No. Everything runs entirely in your browser. Nothing is transmitted to any server. Your data is completely private." },
              { q: "Can I use generated certificates for official purposes?", a: "Absolutely not. Generated certificates are for demo, educational, and staging purposes only. They have no legal validity." },
              { q: "Can I suggest a new template?", a: "Yes! Send us an email with the format you'd like to see added and we'll consider it for a future update." },
            ].map((faq) => (
              <div key={faq.q} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
