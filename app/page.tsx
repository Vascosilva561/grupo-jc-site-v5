import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Grupo JC — Potencial que gera progresso",
  description:
    "O Grupo JC reúne empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades em Angola e além-fronteiras.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grupo JC — Potencial que gera progresso",
    description:
      "O Grupo JC reúne empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades em Angola e além-fronteiras.",
    url: "/",
    images: [
      {
        url: "/brand/grupo-jc-black.svg",
        width: 1200,
        height: 630,
        alt: "Grupo JC — Potencial que gera progresso",
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
