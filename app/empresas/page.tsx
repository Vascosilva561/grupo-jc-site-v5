import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { CompanyFilter } from "../components/CompanyFilter";
import { companies } from "../data";

export const metadata: Metadata = {
  title: "Empresas | Grupo JC",
  description:
    "Conheça as empresas que fazem parte do Grupo JC e descubra como cada uma contribui para criar novas soluções e oportunidades.",
};

export default function CompaniesPage() {
  return (
    <main>
      <CompanyFilter companies={companies} />
      <SiteFooter />
    </main>
  );
}
