"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Activity, 
  FileText, 
  ArrowRight, 
  Home, 
  LayoutTemplate, 
  BookOpen, 
  Info, 
  Mail, 
  ShieldCheck, 
  FileCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const GENERATOR_LINKS = [
  { label: "Formal Medical Cert", href: "/generator/formal-cert" },
  { label: "Sick Leave Notes", href: "/generator/ishnavi-clinic" },
  { label: "Doctor Excuse Notes", href: "/generator/narayan-care" },
  { label: "Fitness Certificate", href: "/generator/health-first" },
  { label: "School Notes", href: "/generator/janya-rx" },
  { label: "Medical Exemption", href: "/medical-exemption-certificate" },
];

const GUIDE_LINKS = [
  { label: "OBC NCL Certificate", href: "/obc-non-creamy-layer-certificate" },
  { label: "EWS Certificate", href: "/ews-certificate" },
  { label: "Ayushman Card Checker", href: "/ayushman-bharat-eligibility-checker" },
  { label: "Medical Exemption", href: "/medical-exemption-certificate" },
  { label: "Leave Certificate Format", href: "/medical-certificate-for-leave" },
];

export function MobileNavDrawer() {
  const [open, setOpen] = useState(false);
  const [openGenerators, setOpenGenerators] = useState(false);
  const [openGuides, setOpenGuides] = useState(false);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle Escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Hamburger Button – Visible on Mobile (< md) */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="md:hidden flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Slide-out Backdrop Overlay */}
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          aria-hidden="true"
        />
      )}

      {/* Slide-out Navigation Drawer Panel */}
      {open && (
        <div
          className="fixed inset-y-0 left-0 z-50 w-[320px] max-w-[85vw] bg-background border-r border-border shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div>
            {/* Drawer Header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
                <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-base tracking-tight text-foreground">
                  Medical <span className="text-primary">Cert Generator</span>
                </span>
              </Link>
              <button
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Navigation Links */}
            <div className="p-4 space-y-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-foreground hover:bg-muted transition-colors"
              >
                <Home className="w-4 h-4 text-primary" />
                Home
              </Link>

              <Link
                href="/#templates"
                onClick={closeMenu}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-foreground hover:bg-muted transition-colors"
              >
                <LayoutTemplate className="w-4 h-4 text-primary" />
                Templates
              </Link>

              <Link
                href="/generator"
                onClick={closeMenu}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-foreground hover:bg-muted transition-colors"
              >
                <FileCheck className="w-4 h-4 text-primary" />
                All Generators
              </Link>

              <Link
                href="/blog"
                onClick={closeMenu}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-foreground hover:bg-muted transition-colors"
              >
                <BookOpen className="w-4 h-4 text-primary" />
                Blog & Articles
              </Link>

              {/* Accordion: Generator Tools */}
              <div className="pt-2">
                <button
                  onClick={() => setOpenGenerators(!openGenerators)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm text-foreground hover:bg-muted transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-primary" />
                    Generator Tools
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openGenerators ? "rotate-180" : ""}`} />
                </button>
                {openGenerators && (
                  <div className="ml-7 pl-3 border-l border-border space-y-1 mt-1">
                    {GENERATOR_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="block py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion: Govt & Certificate Guides */}
              <div>
                <button
                  onClick={() => setOpenGuides(!openGuides)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm text-foreground hover:bg-muted transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    Govt & Legal Guides
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openGuides ? "rotate-180" : ""}`} />
                </button>
                {openGuides && (
                  <div className="ml-7 pl-3 border-l border-border space-y-1 mt-1">
                    {GUIDE_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="block py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Secondary Pages */}
              <div className="pt-3 border-t border-border mt-3 space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 pb-1">
                  Company Info
                </p>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  About Us
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact Support
                </Link>
                <Link
                  href="/editorial-guidelines"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Editorial Guidelines
                </Link>
              </div>

              {/* Legal & Policy */}
              <div className="pt-3 border-t border-border mt-3 space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 pb-1">
                  Legal & Policies
                </p>
                <div className="grid grid-cols-2 gap-1 px-3 text-xs text-muted-foreground">
                  <Link href="/privacy-policy" onClick={closeMenu} className="hover:text-primary py-1">Privacy Policy</Link>
                  <Link href="/terms" onClick={closeMenu} className="hover:text-primary py-1">Terms of Use</Link>
                  <Link href="/disclaimer" onClick={closeMenu} className="hover:text-primary py-1">Disclaimer</Link>
                  <Link href="/dmca" onClick={closeMenu} className="hover:text-primary py-1">DMCA</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Drawer Footer CTA */}
          <div className="p-4 border-t border-border bg-muted/20">
            <Link href="/generator/formal-cert" onClick={closeMenu}>
              <Button className="w-full font-bold shadow-md shadow-primary/20 flex items-center justify-center gap-2">
                Create Certificate <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
