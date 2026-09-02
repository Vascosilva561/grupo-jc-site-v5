import type { Metadata } from "next";
import { ApplicationClient } from "./ApplicationClient";

export const metadata: Metadata = {
  title: "Carreiras e Candidatura | Grupo JC",
  description:
    "Junte-se à nossa equipa. Submeta a sua candidatura espontânea e faça parte do futuro da tecnologia, finanças e retalho digital em Angola.",
  alternates: {
    canonical: "/candidatura",
  },
  openGraph: {
    title: "Carreiras e Oportunidades | Grupo JC",
    description:
      "Junte-se à nossa equipa. Submeta a sua candidatura espontânea e faça parte do futuro da tecnologia, finanças e retalho digital em Angola.",
    url: "/candidatura",
    images: [
      {
        url: "/brand/grupo-jc-black.svg",
        width: 1200,
        height: 630,
        alt: "Carreiras no Grupo JC",
      },
    ],
  },
};

export default function ApplicationPage() {
  return <ApplicationClient />;
}
