import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Poppins } from "next/font/google";
import { MotionController } from "./components/MotionController";
import { LanguageProvider } from "./translations";
import { JsonLd } from "./components/JsonLd";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grupojc.ao";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Grupo JC — Potencial que gera progresso",
    template: "%s | Grupo JC",
  },
  description:
    "O Grupo JC reúne empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades em Angola e além-fronteiras.",
  keywords: [
    "Grupo JC",
    "Angola",
    "Luanda",
    "Tecnologia",
    "Fintech",
    "Pagamentos",
    "PagaSó",
    "ITAngola",
    "Intelize",
    "SóMoney",
    "ADA",
    "KwanzaBet",
    "Investimentos",
    "Inovação",
    "Transformação Digital",
  ],
  authors: [{ name: "Grupo JC", url: siteUrl }],
  creator: "Grupo JC",
  publisher: "Grupo JC",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    alternateLocale: ["en_US", "fr_FR"],
    url: "/",
    siteName: "Grupo JC",
    title: "Grupo JC — Potencial que gera progresso",
    description:
      "O Grupo JC reúne empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades em Angola.",
    images: [
      {
        url: "/brand/grupo-jc-black.svg",
        width: 1200,
        height: 630,
        alt: "Grupo JC — Potencial que gera progresso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo JC — Potencial que gera progresso",
    description:
      "O Grupo JC reúne empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades em Angola.",
    images: ["/brand/grupo-jc-black.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: { "codex-preview": "development" },
  icons: {
    icon: [
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
    ],
    apple: "/favicon-dark.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Grupo JC",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        url: `${siteUrl}/brand/grupo-jc-black.svg`,
        caption: "Grupo JC",
      },
      image: `${siteUrl}/brand/grupo-jc-black.svg`,
      description:
        "O Grupo JC reúne empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades em Angola.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Luanda",
        addressCountry: "AO",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Portuguese", "English", "French"],
      },
      sameAs: [
        "https://www.linkedin.com/company/grupo-jc",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Grupo JC",
      description: "Potencial que gera progresso",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: ["pt-AO", "en-US", "fr-FR"],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fontStyles = {
    "--display": poppins.style.fontFamily,
    "--body": poppins.style.fontFamily,
  } as CSSProperties;

  return (
    <html lang="pt-AO">
      <head>
        <link rel="icon" type="image/png" href="/favicon-light.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" href="/favicon-dark.png" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/favicon-dark.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=window.matchMedia('(prefers-color-scheme: dark)');function u(e){var d=e.matches;var links=document.querySelectorAll("link[rel*='icon']");links.forEach(function(l){if(!l.getAttribute('media')){l.href=d?'/favicon-dark.png':'/favicon-light.png';}});}u(m);if(m.addEventListener){m.addEventListener('change',u);}else if(m.addListener){m.addListener(u);}}catch(e){}})();`,
          }}
        />
        <JsonLd data={organizationSchema} />
      </head>
      <body className={poppins.className} style={fontStyles}>
        <LanguageProvider>
          <MotionController />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

