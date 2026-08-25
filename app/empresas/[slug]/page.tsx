import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companies } from "../../data";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "../../components/ArrowUpRight";

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((item) => item.slug === slug);
  return { title: company?.name ?? "Empresa" };
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = companies.find((item) => item.slug === slug);
  if (!company) notFound();
  const nextCompany = companies[(companies.indexOf(company) + 1) % companies.length];

  return (
    <main style={{ "--company-accent": company.accent } as CSSProperties}>
      <div className="company-detail-hero">
        <SiteHeader dark />
        <section className="shell company-detail-hero-inner">
          <Link href="/empresas" className="company-detail-back"><ArrowLeft size={14} /> Voltar para empresas</Link>
          <div className="company-detail-brand"><span>{company.category}</span><div><img src={company.logo} alt={company.name} /></div></div>
          <div className="company-detail-copy"><h1>{company.tagline}</h1><p>{company.description}</p><a href={company.website} target="_blank" rel="noreferrer" className="button button--lime">Visitar website oficial <ArrowRight /></a></div>
          <span className="company-detail-index">{String(companies.indexOf(company) + 1).padStart(2, "0")} / {String(companies.length).padStart(2, "0")}</span>
        </section>
      </div>

      <section className="content-section shell">
        <div className="content-grid"><div className="section-aside"><span className="section-number">01</span><span>O desafio</span></div><div className="content-main"><h2>Uma resposta pensada a partir do mercado.</h2><p className="prose-large">{company.need}</p></div></div>
      </section>
      <section className="company-facts shell">
        <article><span>Principais soluções</span><div>{company.solutions.map((item) => <p key={item}>{item}</p>)}</div></article>
        <article><span>Público</span><div>{company.audience.map((item) => <p key={item}>{item}</p>)}</div></article>
        <article><span>Diferenciais</span><div>{company.differentiators.map((item) => <p key={item}>{item}</p>)}</div></article>
      </section>
      <section className="dark-section company-result"><div className="shell"><span className="eyebrow eyebrow--light">Resultado</span><h2>{company.result}</h2></div></section>
      <section className="content-section shell"><div className="content-grid"><div className="section-aside"><span className="section-number">02</span><span>No Grupo JC</span></div><div className="content-main"><h2>Uma força própria dentro de uma visão partilhada.</h2><p className="prose-large">{company.relation}</p><Link href="/empresas" className="text-link">Ver todo o ecossistema <ArrowRight /></Link></div></div></section>
      <Link href={`/empresas/${nextCompany.slug}`} className="next-company"><div className="shell"><span>Próxima empresa</span><strong>{nextCompany.name}</strong><ArrowUpRight size={44} /></div></Link>
      <SiteFooter />
    </main>
  );
}
