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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to fill a medical certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A medical certificate must be filled by a registered doctor — not the patient. It should include the patient's name, age, and gender; the date of examination; the diagnosis or reason for leave; the recommended rest period; and the doctor's name, qualifications, registration number, signature, and clinic stamp."
      }
    },
    {
      "@type": "Question",
      "name": "What does a medical certificate look like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical Indian medical certificate has three parts. The header shows the clinic name and doctor details. The middle section includes patient details, diagnosis, and rest period. The bottom section has the doctor's signature, official stamp, and a follow-up date."
      }
    },
    {
      "@type": "Question",
      "name": "How to get a medical certificate from a doctor offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit any registered MBBS or MD doctor. Describe your symptoms honestly; the doctor will examine you. After the consultation, explicitly ask for a medical certificate specifying the number of rest days needed."
      }
    },
    {
      "@type": "Question",
      "name": "How to make a medical certificate for college?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit a registered doctor during your illness period. Ask for a certificate specifying the exact dates you were unwell. Check your institution's rules, as some require certificates specifically from government hospitals."
      }
    },
    {
      "@type": "Question",
      "name": "What is Medical Certificate Form 1A?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medical Certificate Form 1A is a standardised government form in India used primarily for driving licence medical fitness certification under the Motor Vehicles Act, requiring physical checks like vision and hearing."
      }
    },
    {
      "@type": "Question",
      "name": "Is a medical certificate generator tool legal to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generating sample certificates for educational purposes or UI testing is legal. Using any generated certificate as a real document to deceive constitutes fraud under Indian law."
      }
    },
    {
      "@type": "Question",
      "name": "Are these certificates valid for sick leave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Certificates generated by this tool are not valid for sick leave or official purposes. To get a valid sick leave certificate, you must visit a licensed, registered doctor."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Generate a Realistic Medical Certificate Sample",
  "description": "Eight simple steps to a realistic, download-ready medical certificate sample — done in under 60 seconds.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Visit the Generator",
      "text": "Head to our free generator — no account, no signup, no payment needed. It loads instantly in your browser."
    },
    {
      "@type": "HowToStep",
      "name": "Choose a Template",
      "text": "Pick from 15+ Indian clinic and hospital formats, each modelled after real prescription pads and certificate styles."
    },
    {
      "@type": "HowToStep",
      "name": "Enter Patient Details",
      "text": "Fill in the patient's name, age, gender, and the reason or diagnosis. All fields are clearly labelled."
    },
    {
      "@type": "HowToStep",
      "name": "Add Doctor Info",
      "text": "Enter the doctor's name, qualifications, registration number, and clinic details for a realistic letterhead."
    },
    {
      "@type": "HowToStep",
      "name": "Set Dates & Rest Period",
      "text": "Add the examination date and the recommended leave duration — specific dates make the certificate look authentic."
    },
    {
      "@type": "HowToStep",
      "name": "Customise the Style",
      "text": "Adjust handwriting style, ink colour, and font settings to match the clinic format you've chosen."
    },
    {
      "@type": "HowToStep",
      "name": "Preview in Real Time",
      "text": "Watch the certificate update live as you type — exactly how it will look when you download it."
    },
    {
      "@type": "HowToStep",
      "name": "Download as PNG",
      "text": "One click exports a high-resolution PNG image, ready for any project, presentation, or demonstration."
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
