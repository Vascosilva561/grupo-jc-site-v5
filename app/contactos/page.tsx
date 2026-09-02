import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { JsonLd } from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grupojc.ao";

export const metadata: Metadata = {
  title: "Contactos e Localização | Grupo JC",
  description:
    "Entre em contacto com o Grupo JC em Luanda, Angola. Canais de atendimento, suporte, parcerias e localização institucional.",
  alternates: {
    canonical: "/contactos",
  },
  openGraph: {
    title: "Contactos | Grupo JC",
    description:
      "Entre em contacto com o Grupo JC em Luanda, Angola. Canais de atendimento, suporte, parcerias e localização institucional.",
    url: "/contactos",
    images: [
      {
        url: "/brand/grupo-jc-black.svg",
        width: 1200,
        height: 630,
        alt: "Contactos Grupo JC",
      },
    ],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contactos#contact`,
  url: `${siteUrl}/contactos`,
  name: "Contactos Grupo JC",
  description:
    "Entre em contacto com o Grupo JC em Luanda, Angola. Canais de atendimento, suporte, parcerias e localização institucional.",
  mainEntity: {
    "@type": "Organization",
    name: "Grupo JC",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Luanda, Angola",
      addressLocality: "Luanda",
      addressCountry: "AO",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient />
    </>
  );
}
