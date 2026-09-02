import type { Metadata } from "next";
import { TermsClient } from "./TermsClient";

export const metadata: Metadata = {
  title: "Termos de Utilização | Grupo JC",
  description:
    "Termos e condições gerais de utilização do website institucional e serviços digitais do Grupo JC.",
  alternates: {
    canonical: "/termos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
