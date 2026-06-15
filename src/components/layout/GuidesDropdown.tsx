"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, FileText } from "lucide-react";

const GUIDE_LINKS = [
  {
    label: "OBC NCL Certificate",
    description: "Income limits, eligibility & state portals",
    href: "/obc-non-creamy-layer-certificate",
  },
  {
    label: "EWS Certificate",
    description: "Eligibility checker & property ceilings",
    href: "/ews-certificate",
  },
  {
    label: "Ayushman Card Checker",
    description: "Check PMJAY eligibility & Golden Card status",
    href: "/ayushman-bharat-eligibility-checker",
  },
  {
    label: "Medical Exemption",
    description: "Exemption guidelines for work & travel",
    href: "/medical-exemption-certificate",
  },
  {
    label: "Leave Certificate",
    description: "Sick leave & fitness certificate formats",
    href: "/medical-certificate-for-leave",
  },
];

export function GuidesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative hidden md:block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Govt. Guides
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-popover border border-border rounded-xl shadow-xl z-50 overflow-hidden">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 pt-3 pb-1.5">
            Certificate & Government Guides
          </p>
          {GUIDE_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-start gap-3 px-3 py-2.5 hover:bg-muted transition-colors"
            >
              <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
