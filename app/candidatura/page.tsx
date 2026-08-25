import type { Metadata } from "next";
import { ApplicationForm } from "../components/ApplicationForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Candidatura espontânea" };

export default function ApplicationPage() {
  return <main className="application-page">
    <SiteHeader />
    <section className="application-layout shell">
      <div className="application-intro">
        <span className="eyebrow">Candidatura espontânea</span>
        <h1>Mostre-nos o que pode construir connosco.</h1>
        <p>Envie o seu currículo e partilhe a área onde acredita poder criar mais impacto. Guardaremos o seu perfil para futuras oportunidades no Grupo JC.</p>
      </div>
      <ApplicationForm />
    </section>
    <SiteFooter />
  </main>;
}
