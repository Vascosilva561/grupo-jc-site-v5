import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { LeadershipSection } from "../components/LeadershipSection";

export const metadata: Metadata = {
  title: "Sobre o Grupo",
  description: "Diferentes empresas. Uma visão comum. Conheça a história, o propósito, os valores e a liderança do Grupo JC.",
};

const values = [
  {
    icon: "/assets/sobre/dc4f227dd13aea41fa4b4e6d964a736fb3c95567.svg",
    title: "Inovação",
    text: "Procuramos novas formas de resolver problemas e criar valor.",
  },
  {
    icon: "/assets/sobre/baac4931a36aea5a6227bf802b5d9738774c3452.svg",
    title: "Confiança",
    text: "Construímos relações responsáveis, transparentes e duradouras.",
  },
  {
    icon: "/assets/sobre/f96d7381958a43a976d809dd8aaaa8c809950c14.svg",
    title: "Excelência",
    text: "Melhoramos continuamente os nossos produtos, serviços e processos.",
  },
  {
    icon: "/assets/sobre/b6fa22a2f54d065cfb17b4f56857db087541b8c0.svg",
    title: "Proximidade",
    text: "Compreendemos o contexto e mantemos as pessoas no centro das decisões.",
  },
  {
    icon: "/assets/sobre/772db2888680cc5aa3fc9a0bc81d6d1bd6c30fb3.svg",
    title: "Colaboração",
    text: "Diferentes capacidades geram melhores resultados quando trabalham em conjunto.",
  },
  {
    icon: "/assets/sobre/f96d7381958a43a976d809dd8aaaa8c809950c14.svg",
    title: "Impacto",
    text: "Criamos negócios com capacidade para transformar pessoas, organizações e mercados.",
  },
];

export default function GroupPage() {
  return (
    <main>
      {/* Header Overlaid on Dark Hero (Transparent when on top) */}
      <SiteHeader dark={true} transparentOnTop={true} />

      {/* 1. HERO SECTION (Figma Node 71:1506) */}
      <section className="sobre-hero">
        <div className="sobre-hero-bg">
          <img
            src="/assets/sobre/bb4bcac6c7907d9b2867849cb31fd77ae95fc1c6.png"
            alt=""
          />
        </div>
        <div className="sobre-hero-content">
          <span className="eyebrow eyebrow--light">SOBRE O GRUPO JC</span>
          <h1 className="sobre-hero-title">
            Diferentes empresas.
            <br />
            Uma visão comum.
          </h1>
          <p className="sobre-hero-desc">
            Reunimos empresas com actuação em sectores estratégicos, combinando tecnologia, conhecimento do mercado e talento para criar soluções com impacto.
          </p>
        </div>
      </section>

      {/* 2. A NOSSA HISTÓRIA (Figma Node 71:894) */}
      <section className="sobre-history">
        <div className="shell sobre-history-inner">
          <div className="sobre-history-image">
            <img src="/assets/image-placeholder.svg" alt="" aria-hidden="true" />
          </div>
          <div className="sobre-history-copy">
            <span className="eyebrow">A NOSSA HISTÓRIA</span>
            <h2>Uma estrutura criada para ir mais longe.</h2>
            <p className="sobre-history-lead">
              O Grupo JC surgiu da necessidade de aproximar empresas, competências e áreas de actuação sob uma visão estratégica comum.
            </p>
            <p className="sobre-history-body">
              Ao longo do tempo, foram desenvolvidos negócios orientados para responder a desafios concretos do mercado, desde pagamentos e serviços financeiros até tecnologia e entretenimento digital.
            </p>
          </div>
        </div>
      </section>

      {/* 3. O NOSSO PROPÓSITO / MISSÃO / VISÃO (Figma Node 71:938) */}
      <section className="sobre-purpose">
        <div className="shell">
          <div className="sobre-purpose-grid">
            {/* Purpose Main Column */}
            <div className="sobre-purpose-card sobre-purpose-main">
              <span className="eyebrow eyebrow--light">O NOSSO PROPÓSITO</span>
              <h2>
                Desenvolver
                <br />
                negócios
                <br />
                que fazem
                <br />
                Angola
                <br />
                avançar.
              </h2>
              <p>
                Criamos e fortalecemos empresas com capacidade para modernizar sectores, gerar oportunidades e melhorar a forma como pessoas e organizações utilizam tecnologia e acedem a serviços.
              </p>
            </div>

            {/* Mission Column */}
            <article className="sobre-purpose-article">
              <div>
                <div className="sobre-purpose-icon">
                  <img src="/assets/sobre/f1c4d89ee91a5f473dbded42eb75e3dfa6f5dcee.svg" alt="Missão" />
                </div>
                <h3>MISSÃO</h3>
              </div>
              <p>
                Construir, desenvolver e conectar empresas capazes de responder aos desafios do mercado, gerar emprego, valorizar talento e criar soluções com impacto real.
              </p>
            </article>

            {/* Vision Column */}
            <article className="sobre-purpose-article">
              <div>
                <div className="sobre-purpose-icon">
                  <img src="/assets/sobre/b7cdd57d7f29b948c99f0b0d4435e4eaa21de8ef.svg" alt="Visão" />
                </div>
                <h3>VISÃO</h3>
              </div>
              <p>
                Ser um grupo empresarial de referência em Angola, reconhecido pela capacidade de criar empresas relevantes, formar profissionais e contribuir para a evolução tecnológica e económica do país.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. VALORES (Figma Node 71:1006) */}
      <section className="sobre-values">
        <div className="shell">
          <div className="sobre-values-head">
            <div>
              <span className="eyebrow">O QUE ORIENTA AS NOSSAS DECISÕES</span>
              <h2>Valores colocados em prática.</h2>
            </div>
            <p>Princípios comuns que ajudam empresas diferentes a avançar na mesma direcção.</p>
          </div>
          <div className="sobre-values-grid">
            {values.map((item) => (
              <article key={item.title}>
                <span className="sobre-value-icon" aria-hidden="true">
                  <img src={item.icon} alt="" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LIDERANÇA — BANNER (Figma Node 71:1721) */}
      <section className="sobre-leadership-banner">
        <div className="shell">
          <span className="eyebrow">VISÃO</span>
          <h2>
            Uma visão
            <br />
            orientada para o
            <br />
            crescimento.
          </h2>
          <p>
            A liderança do Grupo JC actua na ligação entre estratégia, pessoas e capacidade de execução, criando as condições para que cada empresa cresça com consistência e responsabilidade.
          </p>
        </div>
      </section>

      {/* 6. LIDERANÇA — DETALHE (Figma Node 84:481) */}
      <LeadershipSection />

      {/* SITE FOOTER */}
      <SiteFooter />
    </main>
  );
}
