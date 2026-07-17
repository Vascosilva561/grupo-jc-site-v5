import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { ArrowUpRight } from "../components/ArrowUpRight";

export const metadata: Metadata = { title: "Áreas de Atuação" };

const areas = [
  { id: "tecnologia", index: "01", title: "Tecnologia e transformação digital", text: "Desenvolvemos plataformas, aplicações, produtos e soluções tecnológicas que ajudam organizações a transformar processos e melhorar experiências.", companies: ["ADA", "ITAngola"], skills: ["Desenvolvimento de software", "Aplicações móveis", "Plataformas web", "Infraestrutura tecnológica", "Produto digital", "UI/UX Design", "Consultoria tecnológica", "Integrações e automação"] },
  { id: "pagamentos", index: "02", title: "Pagamentos e serviços financeiros", text: "Criamos ferramentas que tornam cobranças, transferências, pagamentos e outros serviços financeiros mais simples, seguros e eficientes.", companies: ["Intelize", "PagaSó", "SóMoney"], skills: ["Pagamentos digitais", "Cobranças por referência", "Carteira digital", "Transferências", "Pagamentos de serviços", "Recargas", "Soluções para agentes", "Integrações financeiras"] },
  { id: "entretenimento", index: "03", title: "Entretenimento digital", text: "Criamos experiências digitais orientadas para entretenimento, interação e participação, com uma leitura próxima do público e do mercado.", companies: ["KwanzaBet"], skills: ["Apostas desportivas", "Casino online", "Campanhas promocionais", "Experiências digitais", "Programas de fidelização"] },
];

export default function AreasPage() {
  return <main><PageHero eyebrow="Áreas de atuação" index="03 — 06" title="Soluções para diferentes desafios do mercado." description="Atuamos em setores com capacidade para melhorar serviços, facilitar operações e criar novas oportunidades para pessoas e empresas." /><section className="area-directory shell">{areas.map((area) => <article id={area.id} key={area.id}><div className="area-directory-meta"><span>{area.index}</span><div>{area.companies.map((company) => <span key={company}>{company}</span>)}</div></div><div className="area-directory-body"><h2>{area.title}</h2><p>{area.text}</p><div className="skill-grid">{area.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><Link href="/empresas" className="text-link">Conhecer as empresas <ArrowUpRight /></Link></div></article>)}</section><SiteFooter /></main>;
}
