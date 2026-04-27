import Link from "next/link";
import { Activity } from "lucide-react";

function MediumIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

const footerLinks = {
  "Generator Tools": [
    { label: "All Generators", href: "/generator" },
    { label: "Medical Exemption Certificate", href: "/medical-exemption-certificate" },
    { label: "Sick Leave Certificate", href: "/generator/ishnavi-clinic" },
    { label: "Fitness Certificate", href: "/generator/health-first" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "DMCA", href: "/dmca" },
  ],
  Information: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Author Page", href: "/author" },
    { label: "Blog", href: "/blog" },
    { label: "Editorial Guidelines", href: "/editorial-guidelines" },
  ],
  Policies: [
    { label: "Shipping & Delivery", href: "/shipping" },
    { label: "Responsible Use", href: "/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row gap-10 mb-12">
          <div className="md:w-80 flex-shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Activity className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">MedCert <span className="text-primary">Gen</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Hello, my name is <strong className="text-foreground">Ziven Borceg</strong>. Welcome to my website{" "}
              <strong className="text-foreground">medicalcertificategenerator.co.in</strong>. Our Medical Certificate Generator
              is an online platform where you can generate a handwritten medical certificate with just one click.
            </p>
            <div>
              <p className="text-xs font-semibold text-foreground mb-2">Follow Us</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://medium.com/@zivenborceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Ziven Borceg on Medium"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <MediumIcon />
                </a>
                <a
                  href="https://x.com/zivenborceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Ziven Borceg on X (Twitter)"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <XIcon />
                </a>
                <a
                  href="https://pinterest.com/zivenborceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Medical Certificate Generator on Pinterest"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <PinterestIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h4 className="font-bold text-sm mb-3 text-foreground">{group}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-destructive/20 bg-destructive/5 rounded-lg px-5 py-3 mb-6 text-sm text-foreground/70">
          <strong className="text-destructive">Disclaimer:</strong> Certificates generated by this tool are for educational, demonstration, and staging purposes only.
          They are <strong>not legally valid</strong> medical documents. Any fraudulent use is strictly prohibited and the sole responsibility of the user.
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 pb-6 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Authoritative Sources:</span>
            <a href="https://www.nmc.org.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
               National Medical Commission (NMC)
            </a>
            <a href="https://mohfw.gov.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
               Ministry of Health & Family Welfare
            </a>
            <a href="https://www.who.int/" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
               World Health Organization (WHO)
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground" suppressHydrationWarning>© {new Date().getFullYear()} Medical Certificate Generator by Ziven Borceg. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms", "Contact"].map((item, i) => {
              const hrefs = ["/privacy-policy", "/terms", "/contact"];
              return (
                <Link key={item} href={hrefs[i]} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
