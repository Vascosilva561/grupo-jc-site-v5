"use client";

import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "../../components/ArrowUpRight";
import { useLanguage } from "../../translations";
import type { Company } from "../../data";

const pagasoServices = [
  "ende", "epal", "enbi", "unitel", "africell", "movicel", "zap", "zap-fibra", "dstv",
  "elephant-bet", "bantu", "kwanza-bet", "premier-bet", "888-bet", "afribet", "mobet", "netflix", "spotify",
];

const pagasoHighlightsIcons = ["acesso-nacional.svg", "tempo-real.svg", "zero-friccao.svg"];
const pagasoAudiencesIcons = ["cidadao.svg", "agentes.svg", "empresas.svg"];

const standardCardIcons: Record<string, { highlights: string[]; audiences: string[] }> = {
  itangola: { highlights: ["itangola-1.svg", "itangola-2.svg", "itangola-3.svg"], audiences: ["itangola-4.svg", "itangola-5.svg", "itangola-6.svg"] },
  intelize: { highlights: ["intelize-1.svg", "intelize-2.svg", "intelize-3.svg"], audiences: ["intelize-4.svg", "intelize-5.svg", "intelize-6.svg"] },
  ada: { highlights: ["ada-1.svg", "ada-2.svg", "ada-3.svg"], audiences: ["ada-4.svg", "ada-5.svg", "ada-6.svg"] },
  somoney: { highlights: ["somoney-1.svg", "somoney-2.svg", "somoney-3.svg"], audiences: ["somoney-4.svg", "somoney-5.svg", "somoney-6.svg"] },
  kwanzabet: { highlights: ["kwanzabet-1.svg", "kwanzabet-2.svg", "kwanzabet-3.svg"], audiences: ["kwanzabet-4.svg", "kwanzabet-5.svg", "kwanzabet-6.svg"] },
};

function PagasoPage({ company, nextCompany }: { company: Company; nextCompany: Company }) {
  const { t } = useLanguage();

  return (
    <main className="pagaso-page" style={{ "--pagaso-accent": company.accent } as CSSProperties}>
      <div className="pagaso-hero">
        <SiteHeader dark />
        <section className="shell pagaso-hero__inner">
          <div className="pagaso-hero__copy">
            <Link href="/empresas" className="pagaso-back">
              <ArrowLeft size={14} /> {t.empresas.detail.backLink}
            </Link>
            <h1>{company.tagline}</h1>
            <p>{company.description}</p>
            <a href={company.website} target="_blank" rel="noreferrer" className="pagaso-hero__button">
              {t.empresas.detail.visitWebsite} <ArrowRight />
            </a>
          </div>
          <div className="pagaso-hero__logo">
            <img src={company.logo} alt={company.name} />
          </div>
        </section>
      </div>

      {company.role && (
        <section className="shell pagaso-intro">
          <div className="pagaso-intro__content">
            <span className="pagaso-eyebrow">{company.role.kicker}</span>
            <h2>{company.role.title}</h2>
            <p>{company.role.body}</p>
            <div className="pagaso-highlights">
              {company.role.highlights.map((item, idx) => (
                <article key={item.title}>
                  <img src={`/companies/pagaso-icons/${pagasoHighlightsIcons[idx] || pagasoHighlightsIcons[0]}`} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="pagaso-intro__image" aria-label="Imagem da rede PagaSó" role="img" />
        </section>
      )}

      {company.audienceValue && (
        <section className="shell pagaso-value">
          <span className="pagaso-eyebrow">{company.audienceValue.kicker}</span>
          <h2>{company.audienceValue.title}</h2>
          <div className="pagaso-audiences">
            {company.audienceValue.segments.map((item, idx) => (
              <article key={item.title}>
                <img src={`/companies/pagaso-icons/${pagasoAudiencesIcons[idx] || pagasoAudiencesIcons[0]}`} alt="" />
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="pagaso-services">
        <div className="pagaso-services__heading">
          <span className="pagaso-eyebrow">{t.empresas.detail.catalogKicker}</span>
          <h2>{t.empresas.detail.catalogTitle}</h2>
          <p>{t.empresas.detail.catalogIntro}</p>
        </div>
        <div className="pagaso-services__marquee" aria-label="Serviços disponíveis na PagaSó">
          <div className="pagaso-services__track">
            {[...pagasoServices, ...pagasoServices].map((service, index) => (
              <img
                key={`${service}-${index}`}
                src={`/companies/pagaso-services/${service}.webp`}
                alt={index < pagasoServices.length ? service.replaceAll("-", " ") : ""}
                aria-hidden={index >= pagasoServices.length}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="shell pagaso-relation">
        <span className="pagaso-eyebrow">{t.empresas.detail.integrationKicker}</span>
        <h2>{company.relationDetail?.title ?? t.empresas.detail.integrationTitle}</h2>
        <p>{company.relationDetail?.body ?? company.relation}</p>
        <div className="pagaso-relation__footer">
          <div>
            <span>{t.empresas.detail.ecosystemLabel}</span>
            <strong>PagaSó</strong>
          </div>
          <Link href="/empresas">
            {t.empresas.detail.exploreAll} <ArrowRight />
          </Link>
        </div>
      </section>

      <Link href={`/empresas/${nextCompany.slug}`} className="next-company">
        <div className="shell">
          <span>{t.empresas.detail.nextCompany}</span>
          <strong>{nextCompany.name}</strong>
          <ArrowUpRight size={44} />
        </div>
      </Link>
      <SiteFooter />
    </main>
  );
}

function StandardCompanyPage({ company, nextCompany }: { company: Company; nextCompany: Company }) {
  const { t } = useLanguage();
  const role = company.role;
  const audience = company.audienceValue;
  const ecosystem = company.ecosystem;
  const relation = company.relationDetail;
  const iconSet = standardCardIcons[company.slug];
  const iconFor = (type: "highlights" | "audiences", index: number) =>
    iconSet?.[type]?.[index] ? `/companies/card-icons/${iconSet[type][index]}` : "/companies/card-icons/default.svg";
  const buttonTone = ["somoney", "itangola", "kwanzabet"].includes(company.slug)
    ? " company-v2-button--dark"
    : " company-v2-button--light";

  return (
    <main
      style={{ "--company-accent": company.accent } as CSSProperties}
      className={`company-v2-page company-v2-page--${company.slug}`}
    >
      <div className="pagaso-hero company-v2-hero">
        <SiteHeader dark />
        <section className="shell pagaso-hero__inner">
          <div className="pagaso-hero__copy">
            <Link href="/empresas" className="pagaso-back">
              <ArrowLeft size={14} /> {t.empresas.detail.backLink}
            </Link>
            <h1>{company.tagline}</h1>
            <p>{company.description}</p>
            <a href={company.website} target="_blank" rel="noreferrer" className={`pagaso-hero__button${buttonTone}`}>
              {t.empresas.detail.visitWebsite} <ArrowRight />
            </a>
          </div>
          <div className="pagaso-hero__logo">
            <img src={company.logo} alt={company.name} />
          </div>
        </section>
      </div>

      {role && (
        <section className="shell pagaso-intro company-v2-intro">
          <div className="pagaso-intro__content company-v2-intro__content">
            <span className="pagaso-eyebrow">{role.kicker}</span>
            <h2>{role.title}</h2>
            <p>{role.body}</p>
            <div className="pagaso-highlights company-v2-highlights">
              {role.highlights.map((item, index) => (
                <article key={item.title}>
                  <img className="company-v2-icon" src={iconFor("highlights", index)} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <div
            className="pagaso-intro__image company-v2-intro__image"
            aria-label={`Imagem institucional ${company.name}`}
            role="img"
          />
        </section>
      )}

      {audience && (
        <section className="shell pagaso-value company-v2-value">
          <span className="pagaso-eyebrow">{audience.kicker}</span>
          <h2>{audience.title}</h2>
          <div className="pagaso-audiences company-v2-audiences">
            {audience.segments.map((item, index) => (
              <article key={item.title}>
                <img className="company-v2-icon" src={iconFor("audiences", index)} alt="" />
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {ecosystem && (
        <section className="shell company-v2-services">
          <div className="company-v2-services__heading">
            <span className="pagaso-eyebrow">{ecosystem.kicker}</span>
            <h2>{ecosystem.title}</h2>
            {ecosystem.intro && <p>{ecosystem.intro}</p>}
          </div>
          <div className="company-v2-services__grid">
            {ecosystem.items.map((item) => (
              <article key={item.title}>
                {item.tag && <span className="company-v2-service-tag">{item.tag}</span>}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="shell company-v2-relation">
        <span className="pagaso-eyebrow">{t.empresas.detail.integrationKicker}</span>
        <h2>{relation?.title ?? t.empresas.detail.integrationTitle}</h2>
        <p>{relation?.body ?? company.relation}</p>
        <div className="company-v2-relation__footer">
          <div>
            <span>{t.empresas.detail.ecosystemLabel}</span>
            <strong>{company.name}</strong>
          </div>
          <Link href="/empresas">
            {t.empresas.detail.exploreAll} <ArrowRight />
          </Link>
        </div>
      </section>

      <Link href={`/empresas/${nextCompany.slug}`} className="next-company">
        <div className="shell">
          <span>{t.empresas.detail.nextCompany}</span>
          <strong>{nextCompany.name}</strong>
          <ArrowUpRight size={44} />
        </div>
      </Link>
      <SiteFooter />
    </main>
  );
}

export function CompanyDetailClient({ slug }: { slug: string }) {
  const { companies, getCompanyBySlug } = useLanguage();

  const company = getCompanyBySlug(slug);
  if (!company) {
    notFound();
  }

  const currentIndex = companies.findIndex((item) => item.slug === slug);
  const nextCompany = companies[(currentIndex + 1) % companies.length];

  if (company.slug === "pagaso") {
    return <PagasoPage company={company} nextCompany={nextCompany} />;
  }

  return <StandardCompanyPage company={company} nextCompany={nextCompany} />;
}
