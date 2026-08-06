import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, Outfit } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "@/index.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const BASE_URL = "https://medicalcertificategenerator.co.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};
export const metadata: Metadata = {
  referrer: "no-referrer-when-downgrade",
  other: {
    "c308fac26ac16f68833cc0a74e0795b4873eb44b": "c308fac26ac16f68833cc0a74e0795b4873eb44b",
  },
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





import { WebMcpProvider } from "@/components/WebMcpProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="c308fac26ac16f68833cc0a74e0795b4873eb44b" content="c308fac26ac16f68833cc0a74e0795b4873eb44b" />
        <meta name="referrer" content="no-referrer-when-downgrade" />

        {/* Ad Script */}
        <script data-cfasync="false" src="//fluffy-machine.com/bE3TV.0pPv3XpyvebdmxVVJOZFDv0C3rMJjjk/0mO/DQIf1KLdTKc/yGOkTVQ_4OMvj/km" async />

        {/* MultiBanner Ads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(kup){
var d = document,
    s = d.createElement('script'),
    l = d.scripts[d.scripts.length - 1];
s.settings = kup || {};
s.src = "//unfoldedtrade.com/btX/V.sZdJGqlG0CYdWscE/iehmd9Bu/ZcUzlXkLPwTscny/O/T/Qs4dMqzyM/tyNszNI/5bNsDagHz-NQwI";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`,
          }}
        />

        {/* MultiTag Ads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(zteu){
var d = document,
    s = d.createElement('script'),
    l = d.scripts[d.scripts.length - 1];
s.settings = zteu || {};
s.src = "//unfoldedtrade.com/b.X/VlsUdcGclA0QYPWIcF/je/mE9xu/Z/ULlAk_PrTbcUyzOZT/Qy4ENpDLk/tTNMzPI/5oNIDCg-1/MWwW";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`,
          }}
        />

        {/* InPush Ads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(uekgx){
var d = document,
    s = d.createElement('script'),
    l = d.scripts[d.scripts.length - 1];
s.settings = uekgx || {};
s.src = "//unfoldedtrade.com/b/X/V/s.dPG/lo0MYaWqcE/oesmY9NuZZ/U/lkk/PNTNcIy/OdTvQ_4/NNjFE/t/N/zlIr5lN/Dfg/2/NcQK";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`,
          }}
        />

        {/* Video Slider Ads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(hvhsa){
var d = document,
    s = d.createElement('script'),
    l = d.scripts[d.scripts.length - 1];
s.settings = hvhsa || {};
s.src = "//unfoldedtrade.com/b.XVVzscddG/lN0/YLW_cz/zejm/9RuRZOUhlpkWPyTyccyNOOTXQ/4TNMzGc/tONJzgIv5fNDDFgu4NM/QP";
s.async = true;
s.referrerPolicy = 'no-referrer-when-downgrade';
l.parentNode.insertBefore(s, l);
})({})`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${outfit.variable} antialiased`}>
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

        <Providers>
          <WebMcpProvider />
          {children}
        </Providers>
        <CookieConsent />
      </body>
    </html>
  );
}
