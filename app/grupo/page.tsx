import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = { title: "O Grupo" };

const values = [
  ["01", "Inovação", "Procuramos novas formas de resolver problemas e criar valor."],
  ["02", "Confiança", "Construímos relações responsáveis, transparentes e duradouras."],
  ["03", "Excelência", "Melhoramos continuamente os nossos produtos, serviços e processos."],
  ["04", "Proximidade", "Compreendemos o contexto e mantemos as pessoas no centro das decisões."],
  ["05", "Colaboração", "Diferentes capacidades geram melhores resultados quando trabalham em conjunto."],
  ["06", "Impacto", "Criamos negócios com capacidade para transformar pessoas, organizações e mercados."],
];

const capabilities = ["Estratégia", "Tecnologia", "Desenvolvimento de software", "Produto", "Design", "Marketing", "Operações", "Gestão financeira", "Recursos humanos", "Compliance", "Segurança", "Atendimento"];

export default function GroupPage() {
  return (
    <main>
      <PageHero eyebrow="Sobre o Grupo JC" index="01 — 06" title="Diferentes empresas. Uma visão comum." description="Reunimos empresas com atuação em setores estratégicos, combinando tecnologia, conhecimento do mercado e talento para criar soluções com impacto." />
      <section className="content-section shell">
        <div className="content-grid">
          <div className="section-aside"><span className="section-number">01</span><span>A nossa história</span></div>
          <div className="content-main"><h2>Uma estrutura criada para ir mais longe.</h2><p className="prose-large">O Grupo JC surgiu da necessidade de aproximar empresas, competências e áreas de atuação sob uma visão estratégica comum.</p><div className="two-column-copy"><p>Ao longo do tempo, foram desenvolvidos negócios orientados para responder a desafios concretos do mercado, desde pagamentos e serviços financeiros até tecnologia e entretenimento digital.</p><p>A criação do grupo permitiu partilhar conhecimento, fortalecer estruturas e aumentar a capacidade de cada empresa para crescer. Hoje, o Grupo JC representa uma visão integrada de desenvolvimento empresarial, tecnológico e humano.</p></div></div>
        </div>
      </section>
      <section className="dark-section">
        <div className="shell purpose-grid">
          <div className="purpose-intro"><span className="eyebrow eyebrow--light">O nosso propósito</span><h2>Desenvolver negócios que fazem Angola avançar.</h2><p>Criamos e fortalecemos empresas com capacidade para modernizar setores, gerar oportunidades e melhorar a forma como pessoas e organizações utilizam tecnologia e acedem a serviços.</p></div>
          <article><span>Missão</span><p>Construir, desenvolver e conectar empresas capazes de responder aos desafios do mercado, gerar emprego, valorizar talento e criar soluções com impacto real.</p></article>
          <article><span>Visão</span><p>Ser um grupo empresarial de referência em Angola, reconhecido pela capacidade de criar empresas relevantes, formar profissionais e contribuir para a evolução tecnológica e económica do país.</p></article>
        </div>
      </section>
      <section className="content-section shell">
        <div className="section-heading"><div><span className="eyebrow">O que orienta as nossas decisões</span><h2>Valores colocados em prática.</h2></div><p>Princípios comuns que ajudam empresas diferentes a avançar na mesma direção.</p></div>
        <div className="simple-grid">{values.map(([number, title, text]) => <article className="simple-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="content-section model-section">
        <div className="shell content-grid"><div className="section-aside"><span className="section-number">02</span><span>Modelo do Grupo</span></div><div className="content-main"><h2>Empresas independentes. Capacidades partilhadas.</h2><p>Cada empresa possui a sua identidade, especialização e público. Ao mesmo tempo, beneficia de uma estrutura comum que promove colaboração, eficiência e acesso a diferentes competências.</p><div className="capability-cloud">{capabilities.map((capability, index) => <span key={capability}><i>{String(index + 1).padStart(2,"0")}</i>{capability}</span>)}</div></div></div>
      </section>
      <section className="leadership-note shell"><span className="eyebrow">Liderança</span><h2>Uma visão orientada para o crescimento.</h2><p>A liderança do Grupo JC atua na ligação entre estratégia, pessoas e capacidade de execução, criando as condições para que cada empresa cresça com consistência e responsabilidade.</p></section>
      <SiteFooter />
    </main>
  );
}
