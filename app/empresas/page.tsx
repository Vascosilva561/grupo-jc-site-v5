import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { CompanyFilter } from "../components/CompanyFilter";
import { JsonLd } from "../components/JsonLd";
import { companies } from "../data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grupojc.ao";

export const metadata: Metadata = {
  title: "Empresas | Grupo JC",
  description:
    "Conheça as empresas que fazem parte do ecossistema do Grupo JC: PagaSó, ITAngola, Intelize, SóMoney, ADA e KwanzaBet.",
  alternates: {
    canonical: "/empresas",
  },
  openGraph: {
    title: "Empresas do Ecossistema | Grupo JC",
    description:
      "Conheça as empresas que fazem parte do ecossistema do Grupo JC: PagaSó, ITAngola, Intelize, SóMoney, ADA e KwanzaBet.",
    url: "/empresas",
    images: [
      {
        url: "/brand/grupo-jc-black.svg",
        width: 1200,
        height: 630,
        alt: "Empresas do Grupo JC",
      },
    ],
  },
};

const companiesListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/empresas#collection`,
  url: `${siteUrl}/empresas`,
  name: "Empresas do Grupo JC",
  description:
    "Conheça as empresas que fazem parte do ecossistema do Grupo JC: PagaSó, ITAngola, Intelize, SóMoney, ADA e KwanzaBet.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: companies.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: c.name,
      url: `${siteUrl}/empresas/${c.slug}`,
      description: c.description,
    })),
  },
};

export default function CompaniesPage() {
  return (
    <main>
      <JsonLd data={companiesListSchema} />
      <CompanyFilter />
      <SiteFooter />
    </main>
  );
}
