import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { CompanyFilter } from "../components/CompanyFilter";
import { companies } from "../data";

export const metadata: Metadata = { title: "Empresas" };

export default function CompaniesPage() {
  return (
    <main>
      <PageHero eyebrow="O nosso ecossistema" index="02 — 06" title="Um ecossistema preparado para crescer." description="Conheça as empresas que fazem parte do Grupo JC e descubra como cada uma contribui para criar novas soluções e oportunidades." />
      <section className="content-section shell"><CompanyFilter companies={companies} /></section>
      <SiteFooter />
    </main>
  );
}
