import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, Outfit, Caveat, Dancing_Script, Kalam } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import "@/index.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });
const kalam = Kalam({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-kalam" });

export const BASE_URL = "https://medicalcertificategenerator.co.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Generate Medical Certificate Online (Free PDF + Editable India Format)",
  description:
    "Create a realistic medical certificate in seconds. Choose Indian hospital formats, edit details, and download PDF instantly. 100% free & customizable.",
  keywords: [
    "medical certificate generator",
    "sick leave certificate india",
    "free medical certificate online",
    "handwritten certificate generator",
    "indian medical certificate",
    "medical certificate format india",
    "doctor certificate generator",
  ],
  authors: [{ name: "Ziven Borceg", url: `${BASE_URL}/author` }],
  creator: "Ziven Borceg",
  publisher: "Medical Certificate Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${BASE_URL}/`,
    siteName: "Medical Certificate Generator",
    title: "Generate Medical Certificate Online (Free PDF + Editable India Format)",
    description:
      "Create a realistic medical certificate in seconds. Choose Indian hospital formats, edit details, and download PDF instantly. 100% free & customizable.",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Certificate Generator Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate Medical Certificate Online (Free PDF + Editable India Format)",
    description:
      "Create a realistic medical certificate in seconds. Choose Indian hospital formats, edit details, and download PDF instantly. 100% free & customizable.",
    images: ["/opengraph.jpg"],
    creator: "@zivenborceg",
    site: "@zivenborceg",
  },
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Medical Certificate Generator",
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/favicon.svg`,
  description:
    "Free online medical certificate generator with 15+ authentic Indian clinic templates. For educational and demonstration purposes.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Ziven Borceg",
    url: `${BASE_URL}/author`,
  },
  sameAs: [
    "https://medium.com/@zivenborceg",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${`${BASE_URL}/`}/contact`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Medical Certificate Generator",
  url: `${BASE_URL}/`,
  description:
    "Free online medical certificate generator with 15+ authentic Indian clinic and hospital templates.",
  publisher: {
    "@type": "Organization",
    name: "Medical Certificate Generator",
    url: `${BASE_URL}/`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Medical Certificate Generator",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  url: `${BASE_URL}/`,
  description:
    "Generate realistic handwritten-style Indian medical certificates instantly. 15+ clinic and hospital templates, fully customisable, free PNG and PDF download.",
  creator: {
    "@type": "Person",
    name: "Ziven Borceg",
  },
};

const siteNavSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: [
    "Home",
    "Templates",
    "Blog",
    "About",
    "Contact",
  ],
  url: [
    BASE_URL,
    `${BASE_URL}/#templates`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contact`,
  ],
};





export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${outfit.variable} ${caveat.variable} ${dancingScript.variable} ${kalam.variable} antialiased`}>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-C6359RT200" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C6359RT200');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
        />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
