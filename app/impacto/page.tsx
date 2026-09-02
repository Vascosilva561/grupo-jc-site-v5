import type { Metadata } from "next";
import { ImpactClient } from "./ImpactClient";

export const metadata: Metadata = {
  title: "Impacto e Sustentabilidade | Grupo JC",
  description:
    "Conheça o nosso compromisso com o desenvolvimento de pessoas, inclusão financeira e responsabilidade social e económica em Angola.",
  alternates: {
    canonical: "/impacto",
  },
  openGraph: {
    title: "Impacto e Sustentabilidade | Grupo JC",
    description:
      "Conheça o nosso compromisso com o desenvolvimento de pessoas, inclusão financeira e responsabilidade social e económica em Angola.",
    url: "/impacto",
    images: [
      {
        url: "/assets/impact-manifesto-v1.webp",
        width: 1200,
        height: 630,
        alt: "Impacto e Sustentabilidade Grupo JC",
      },
    ],
  },
};

export default function ImpactPage() {
  return <ImpactClient />;
}
