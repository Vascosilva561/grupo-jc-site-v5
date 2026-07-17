import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = { title: "Contactos" };

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contactos" title="Vamos conversar." description="Entre em contacto com o Grupo JC para informações institucionais, parcerias, oportunidades profissionais ou assuntos relacionados com as empresas do grupo." />
      <section className="contact-section shell">
        <div className="contact-intro"><span className="eyebrow">Falar com o Grupo</span><h2>Novas possibilidades começam com uma boa conversa.</h2><p>Selecione o assunto e partilhe o contexto. A estrutura está preparada para encaminhar cada mensagem à área certa.</p><div className="contact-details"><article><span>Localização</span><strong>Angola</strong></article><article><span>Âmbito</span><strong>Institucional · Parcerias · Carreiras</strong></article><article><span>Disponibilidade</span><strong>Canal digital</strong></article></div></div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
