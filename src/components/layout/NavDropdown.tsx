"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, FileText } from "lucide-react";

const DOCTOR_NOTES = [
  {
    label: "Sick Leave Notes",
    description: "Certificate for illness-based absence",
    href: "/generator/ishnavi-clinic",
  },
  {
    label: "Doctor Excuse Notes",
    description: "General medical excuse for workplace",
    href: "/generator/narayan-care",
  },
  {
    label: "Fitness Notes",
    description: "Fit-for-work and pre-employment",
    href: "/generator/health-first",
  },
  {
    label: "School Notes",
    description: "Student absence and exam leave",
    href: "/generator/janya-rx",
  },
];

export function NavDropdown() {
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
    <div ref={ref} className="relative hidden sm:block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Doctor Notes
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-56 bg-popover border border-border rounded-xl shadow-xl z-50 overflow-hidden">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 pt-3 pb-1.5">
            Quick Generator Links
          </p>
          {DOCTOR_NOTES.map((item) => (
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
