"use client";

import { Caveat, Dancing_Script, Kalam } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });
const kalam = Kalam({ weight: ["400"], subsets: ["latin"], variable: "--font-kalam" });

export function HandwritingFonts({ children }: { children?: React.ReactNode }) {
  return (
    <div className={`${caveat.variable} ${dancingScript.variable} ${kalam.variable}`}>
      {children}
    </div>
  );
}
