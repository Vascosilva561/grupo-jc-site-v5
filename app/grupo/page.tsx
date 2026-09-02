import type { Metadata } from "next";
import { GroupClient } from "./GroupClient";
import { JsonLd } from "../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grupojc.ao";

export const metadata: Metadata = {
  title: "Sobre o Grupo | Grupo JC",
  description:
    "Conheça a história, visão, liderança e valores do Grupo JC. Mais de uma década a transformar potencial em progresso sustentável em Angola.",
  alternates: {
    canonical: "/grupo",
  },
  openGraph: {
    title: "Sobre o Grupo | Grupo JC",
    description:
      "Conheça a história, visão, liderança e valores do Grupo JC. Mais de uma década a transformar potencial em progresso sustentável em Angola.",
    url: "/grupo",
    images: [
      {
        url: "/assets/sobre/bb4bcac6c7907d9b2867849cb31fd77ae95fc1c6.webp",
        width: 1200,
        height: 630,
        alt: "Sobre o Grupo JC",
      },
    ],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/grupo#about`,
  url: `${siteUrl}/grupo`,
  name: "Sobre o Grupo JC",
  description:
    "Conheça a história, visão, liderança e valores do Grupo JC. Mais de uma década a transformar potencial em progresso sustentável em Angola.",
  mainEntity: {
    "@type": "Organization",
    name: "Grupo JC",
    url: siteUrl,
    logo: `${siteUrl}/brand/grupo-jc-black.svg`,
    foundingLocation: {
      "@type": "Place",
      name: "Luanda, Angola",
    },
  },
};

export default function GroupPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <GroupClient />
    </>
  );
}
