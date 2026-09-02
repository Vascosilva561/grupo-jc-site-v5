import type { Metadata } from "next";
import { AreasClient } from "./AreasClient";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Grupo JC",
  description:
    "Atuamos nos sectores estratégicos de Tecnologia, Pagamentos e Retalho Digital, Serviços Financeiros e Entretenimento em Angola e na região.",
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title: "Áreas de Atuação | Grupo JC",
    description:
      "Atuamos nos sectores estratégicos de Tecnologia, Pagamentos e Retalho Digital, Serviços Financeiros e Entretenimento em Angola e na região.",
    url: "/areas",
    images: [
      {
        url: "/assets/areas/technology-hero.svg",
        width: 1200,
        height: 630,
        alt: "Áreas de Atuação Grupo JC",
      },
    ],
  },
};

export default function AreasPage() {
  return <AreasClient />;
}
