import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = { title: "Notícias" };

const categories = ["Grupo JC", "Empresas", "Tecnologia", "Pessoas", "Impacto", "Parcerias", "Eventos"];
const cards = [
  ["Grupo JC", "Uma estrutura criada para ligar diferentes forças", "O Grupo JC nasce para aproximar empresas, competências e oportunidades sob uma visão comum."],
  ["Tecnologia", "Soluções locais para desafios reais", "Conhecimento do mercado e capacidade técnica trabalham em conjunto para criar produtos relevantes."],
  ["Pessoas", "Talento que cresce enquanto constrói", "A evolução das empresas também cria espaço para novas experiências, competências e percursos."],
  ["Impacto", "Crescer com responsabilidade", "Mais do que resultados de negócio, procuramos gerar oportunidades que acompanham o mercado."],
  ["Empresas", "Seis especializações, um ecossistema", "Conheça as diferentes frentes que formam o portefólio do Grupo JC."],
  ["Parcerias", "Novas possibilidades começam com uma conversa", "O grupo está aberto a ligações que ajudem empresas, instituições e pessoas a avançar."],
];

export default function NewsPage() {
  return <main><PageHero eyebrow="Notícias" index="06 — 06" title="Ideias, projetos e histórias do Grupo JC." description="Acompanhe as principais novidades do grupo, das suas empresas e das pessoas que tornam cada projeto possível." /><section className="content-section shell"><div className="news-categories">{categories.map((category) => <span key={category}>{category}</span>)}</div><div className="editorial-grid">{cards.map(([category,title,text], index) => <article key={title}><div className={`editorial-art editorial-art--${(index % 3) + 1}`}><span>{String(index + 1).padStart(2,"0")}</span></div><span className="news-tag">{category}</span><h2>{title}</h2><p>{text}</p><small>Conteúdo institucional em preparação</small></article>)}</div></section><SiteFooter /></main>;
}
