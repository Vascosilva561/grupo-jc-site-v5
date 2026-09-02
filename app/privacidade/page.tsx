import type { Metadata } from "next";
import { PrivacyClient } from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Política de Privacidade | Grupo JC",
  description:
    "Conheça a nossa política de privacidade, tratamento e proteção de dados pessoais no Grupo JC.",
  alternates: {
    canonical: "/privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
