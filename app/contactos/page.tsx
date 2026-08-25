import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = { title: "Contactos" };

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader />
      <section className="contact-section shell">
        <div className="contact-intro">
          <span className="eyebrow">Contactos</span>
          <h2>Vamos conversar.</h2>
          <p>Entre em contacto com o Grupo JC para informações institucionais, parcerias, oportunidades profissionais ou assuntos relacionados com as empresas do grupo.</p>
          <div className="contact-details"><article><span>Localização</span><strong>Angola</strong></article><article><span>Âmbito</span><strong>Institucional · Parcerias · Candidaturas</strong></article><article><span>Disponibilidade</span><strong>Canal digital</strong></article></div>
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
