import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ArrowUpRight } from "../components/ArrowUpRight";

export const metadata: Metadata = {
  title: "Áreas de Actuação",
  description: "Conheça as áreas estratégicas em que as empresas do Grupo JC criam soluções para o mercado angolano.",
};

type AreaIconName = "technology" | "payments" | "entertainment";

const areas: Array<{
  id: string;
  index: string;
  label: string;
  title: string;
  text: string;
  companies: string[];
  skills: string[];
  icon: AreaIconName;
  heroIcon: string;
  detailIcon: string;
}> = [
  {
    id: "tecnologia",
    index: "01",
    label: "Tecnologia",
    title: "Tecnologia e transformação digital",
    text: "Desenvolvemos plataformas, aplicações, produtos e soluções tecnológicas que ajudam organizações a transformar processos e melhorar experiências.",
    companies: ["ADA", "ITAngola"],
    skills: ["Desenvolvimento de software", "Aplicações móveis", "Plataformas web", "Infraestrutura tecnológica", "Produto digital", "UI/UX Design", "Consultoria tecnológica", "Integrações e automação"],
    icon: "technology",
    heroIcon: "/assets/areas/technology-hero.svg",
    detailIcon: "/assets/areas/technology-detail.svg",
  },
  {
    id: "pagamentos",
    index: "02",
    label: "Pagamentos",
    title: "Pagamentos e serviços financeiros",
    text: "Criamos ferramentas que tornam cobranças, transferências, pagamentos e outros serviços financeiros mais simples, seguros e eficientes.",
    companies: ["Intelize", "PagaSó", "SóMoney"],
    skills: ["Pagamentos digitais", "Cobranças por referência", "Carteira digital", "Transferências", "Pagamentos de serviços", "Recargas", "Soluções para agentes", "Integrações financeiras"],
    icon: "payments",
    heroIcon: "/assets/areas/payments-hero.svg",
    detailIcon: "/assets/areas/payments-detail.svg",
  },
  {
    id: "entretenimento",
    index: "03",
    label: "Entretenimento",
    title: "Entretenimento digital",
    text: "Criamos experiências digitais orientadas para entretenimento, interacção e participação, com uma leitura próxima do público e do mercado.",
    companies: ["KwanzaBet"],
    skills: ["Apostas desportivas", "Casino online", "Campanhas promocionais", "Experiências digitais", "Programas de fidelização"],
    icon: "entertainment",
    heroIcon: "/assets/areas/entertainment-hero.svg",
    detailIcon: "/assets/areas/entertainment-detail.svg",
  },
];

export default function AreasPage() {
  return (
    <main>
      <section className="areas-hero">
        <SiteHeader dark />
        <div className="shell areas-hero__content">
          <div className="areas-hero__copy">
            <div className="areas-hero__meta"><span className="eyebrow eyebrow--light">Áreas de actuação</span></div>
            <h1>Soluções para diferentes desafios do mercado.</h1>
            <p>Actuamos em sectores com capacidade para melhorar serviços, facilitar operações e criar novas oportunidades para pessoas e empresas.</p>
          </div>
          <div className="areas-hero__visual" aria-hidden="true">
            {areas.map((area) => <div className={`areas-hero__signal areas-hero__signal--${area.icon}`} key={area.id}><Image src={area.heroIcon} alt="" width={44} height={44} /><span>{area.label}</span><i>{area.index}</i></div>)}
          </div>
        </div>
      </section>

      <section className="areas-overview shell" aria-labelledby="areas-overview-title">
        <div className="areas-overview__heading"><div><span className="eyebrow">Frentes estratégicas</span><h2 id="areas-overview-title">Três especializações. Uma visão comum.</h2></div><p>Cada área reúne empresas, competências e produtos que respondem a necessidades concretas do mercado.</p></div>
        <div className="areas-overview__grid">
          {areas.map((area) => <Link href={`#${area.id}`} className={`areas-overview__card areas-overview__card--${area.icon}`} key={area.id}><span>{area.index}</span><Image src={area.heroIcon} alt="" width={44} height={44} /><strong>{area.label}</strong><ArrowUpRight /></Link>)}
        </div>
      </section>

      <section className="area-directory shell" aria-label="Áreas de actuação">
        {areas.map((area) => (
          <article id={area.id} className={`area-directory__item area-directory__item--${area.icon}`} key={area.id}>
            <div className="area-directory-meta"><div className="area-directory-icon"><Image src={area.detailIcon} alt="" width={44} height={44} /></div><div className="area-directory-companies">{area.companies.map((company) => <span key={company}><i />{company}</span>)}</div></div>
            <div className="area-directory-body"><span className="area-directory-label">{area.label}</span><h2>{area.title}</h2><p>{area.text}</p><div className="skill-grid">{area.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><Link href={`/empresas?categoria=${encodeURIComponent(area.label)}`} className="text-link">Conhecer as empresas <ArrowUpRight /></Link></div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
