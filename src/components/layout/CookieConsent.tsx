"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "essential" && typeof window !== "undefined") {
      (window as any)["ga-disable-G-C6359RT200"] = true;
    }
  }, []);
  
  const accept = (level: "all" | "essential") => {
    localStorage.setItem("cookie_consent", level);
    setVisible(false);
    if (level === "essential" && typeof window !== "undefined") {
      (window as any)["ga-disable-G-C6359RT200"] = true;
    }
  };
  
  if (!visible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg px-4 py-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-foreground/80 flex-1 leading-relaxed">
          We use cookies for analytics and advertising (Google AdSense).{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          . By continuing, you consent to our use of cookies.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => accept("essential")}
            className="text-xs"
          >
            Essential Only
          </Button>
          <Button 
            size="sm" 
            onClick={() => accept("all")}
            className="text-xs font-semibold"
          >
            Accept All
          </Button>
          <button 
            onClick={() => accept("essential")} 
            className="text-muted-foreground hover:text-foreground ml-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
