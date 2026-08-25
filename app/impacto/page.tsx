import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { ImpactCounter } from "../components/ImpactCounter";

export const metadata: Metadata = { title: "Impacto" };

const pillars = [
  { index: "01", icon: "/assets/impact-employment.svg", label: "Oportunidades", title: "Negócios que abrem novos caminhos.", text: "Fazemos crescer empresas e, com elas, novas carreiras.", items: ["Emprego", "Mobilidade", "Desenvolvimento"] },
  { index: "02", icon: "/assets/impact-youth.svg", label: "Talento jovem", title: "Talento jovem, impacto desde o primeiro passo.", text: "Criamos experiências para aprender, contribuir e avançar.", items: ["Estágios", "Competências", "Mentoria"] },
  { index: "03", icon: "/assets/impact-tech.svg", label: "Tecnologia local", title: "Tecnologia com raízes no nosso contexto.", text: "Desenhamos soluções locais para desafios concretos.", items: ["Conhecimento local", "Soluções úteis", "Escala"] },
];

const indicators = [
  { label: "Colaboradores", value: 450, suffix: "+", icon: "/assets/impact-icons/users-group.svg" },
  { label: "Jovens formados", value: 1200, suffix: "+", icon: "/assets/impact-icons/graduation-cap.svg" },
  { label: "Estagiários integrados", value: 180, suffix: "+", icon: "/assets/impact-icons/head-settings.svg" },
  { label: "Produtos lançados", value: 36, suffix: "+", icon: "/assets/impact-icons/rocket.svg" },
  { label: "Clientes atendidos", value: 850, suffix: " mil+", icon: "/assets/impact-icons/star.svg" },
  { label: "Empresas parceiras", value: 72, suffix: "+", icon: "/assets/impact-icons/briefcase.svg" },
  { label: "Transacções processadas", value: 14, suffix: " M+", icon: "/assets/impact-icons/transfer.svg" },
  { label: "Regiões alcançadas", value: 18, suffix: "+", icon: "/assets/impact-icons/location.svg" },
];

export default function ImpactPage() {
  return <main>
    <PageHero centered eyebrow="Impacto" title="O nosso crescimento deve gerar mais oportunidades." description="Acreditamos que empresas relevantes também devem contribuir para o desenvolvimento das pessoas, das organizações e do mercado em que atuam." />

    <section className="impact-manifesto shell">
      <div className="impact-manifesto__copy">
        <span className="eyebrow">O nosso manifesto</span>
        <h2>Crescer só faz sentido<br />quando chega a mais pessoas.</h2>
        <p>Construímos negócios com raízes no mercado e olhos no futuro — capazes de criar oportunidades, desenvolver talento e responder a desafios reais.</p>
        <p>O impacto mede-se no que fica: pessoas mais preparadas, empresas mais fortes e soluções que fazem Angola avançar.</p>
      </div>
      <figure className="impact-manifesto__image"><img src="/assets/impact-manifesto-v1.png" alt="Profissionais angolanos a colaborar num espaço de trabalho" /></figure>
    </section>

    <section className="impact-data"><div className="shell"><div className="section-heading section-heading--light"><div><span className="eyebrow eyebrow--light">Medir para evoluir</span><h2>Indicadores que tornam o impacto visível.</h2></div><p>Valores ilustrativos que mostram a dimensão de impacto que queremos acompanhar ao longo do tempo.</p></div><div className="impact-data-grid">{indicators.map((item, index) => <article key={item.label}><div className="impact-data-card-meta"><span>{String(index + 1).padStart(2,"0")}</span><Image src={item.icon} width={38} height={38} alt="" aria-hidden="true" /></div><strong><ImpactCounter value={item.value} suffix={item.suffix} /></strong><p>{item.label}</p></article>)}</div></div></section>

    <section className="impact-stack-section shell">
      <div className="impact-stack-heading">
        <span className="eyebrow">Onde fazemos diferença</span>
        <h2>Crescimento que deixa portas abertas.</h2>
        <p>Três escolhas que orientam o impacto do Grupo JC.</p>
      </div>
      <div className="impact-stack">{pillars.map((pillar) => <article className="impact-stack-card" key={pillar.index}><div className="impact-stack-card__meta"><span>{pillar.index}</span><strong>{pillar.label}</strong></div><div className="impact-stack-card__content"><span className="impact-pillar-icon" role="img" aria-label={`${pillar.label} — ícone`} /><h3>{pillar.title}</h3><p>{pillar.text}</p><div className="impact-stack-card__tags">{pillar.items.map((item) => <span key={item}>{item}</span>)}</div></div></article>)}</div>
    </section>

    <SiteFooter />
  </main>;
}
