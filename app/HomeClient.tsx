"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ArrowRight, ArrowUpRight } from "./components/ArrowUpRight";
import { CompanyCarousel } from "./components/CompanyCarousel";
import { LazySpline } from "./components/LazySpline";
import { HomeHeroVideo } from "./components/HomeHeroVideo";
import { useLanguage } from "./translations";

const heroVideo = { kind: "upload" as const, url: "/assets/video/grupo-jc-institucional.webm" };

const companyLogos = [
  { src: "/companies/pagaso.svg", alt: "PagaSó" },
  { src: "/companies/itangola.svg", alt: "ITAngola" },
  { src: "/companies/kwanzabet.svg", alt: "KwanzaBet" },
  { src: "/companies/ada.svg", alt: "ADA" },
  { src: "/companies/somoney.svg", alt: "SóMoney" },
  { src: "/companies/intelize.svg", alt: "Intelize" },
];

const areaClassNames = [
  "home-v2-area--technology",
  "home-v2-area--payments",
  "home-v2-area--entertainment",
];

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`home-v2-eyebrow ${light ? "home-v2-eyebrow--light" : ""}`}>{children}</span>;
}

export function HomeClient() {
  const { t } = useLanguage();

  return (
    <main className="home-v2">
      <section className="home-v2-hero">
        <SiteHeader />
        <div className="shell home-v2-hero__content">
          <div className="home-v2-hero__copy">
            <Eyebrow>{t.home.hero.eyebrow}</Eyebrow>
            <h1>
              {t.home.hero.titlePart1}
              <br /> {t.home.hero.titlePart2}
            </h1>
            <p>{t.home.hero.description}</p>
            <div className="home-v2-actions">
              <Link href="/grupo" className="home-v2-button home-v2-button--dark">
                {t.home.hero.aboutButton} <ArrowRight />
              </Link>
              <Link href="/empresas" className="home-v2-button home-v2-button--outline">
                {t.home.hero.companiesButton} <ArrowRight />
              </Link>
            </div>
          </div>
          <HomeHeroVideo source={heroVideo} />
        </div>
      </section>

      <section className="shell home-v2-metrics" aria-label="Indicadores do Grupo">
        {t.home.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.number}</strong>
            <span>{metric.label}</span>
            <p>{metric.description}</p>
          </article>
        ))}
      </section>

      <section className="shell home-v2-intro">
        <div className="home-v2-intro__copy">
          <Eyebrow>{t.home.intro.eyebrow}</Eyebrow>
          <h2>
            {t.home.intro.titlePart1}
            <br /> {t.home.intro.titlePart2}
            <br /> {t.home.intro.titlePart3}
          </h2>
          <p>{t.home.intro.description}</p>
          <blockquote>{t.home.intro.quote}</blockquote>
          <Link href="/grupo" className="home-v2-text-link">
            {t.home.intro.historyLink} <ArrowUpRight />
          </Link>
        </div>
        <figure className="home-v2-intro__image">
          <img src="/assets/home/grupo-jc-equipa.webp" alt={t.home.intro.imageAlt} />
        </figure>
      </section>

      <section className="home-v2-logo-strip" aria-label="Empresas do Grupo JC">
        <div className="home-v2-logo-strip__track">
          {[0, 1, 2, 3].map((groupIndex) => (
            <div
              key={groupIndex}
              className="home-v2-logo-strip__group"
              aria-hidden={groupIndex > 0 ? "true" : undefined}
            >
              {companyLogos.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={groupIndex === 0 ? logo.alt : ""}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="shell home-v2-companies">
        <div className="home-v2-section-title">
          <Eyebrow>{t.home.ecosystem.eyebrow}</Eyebrow>
          <h2>
            {t.home.ecosystem.titlePart1}
            <br /> {t.home.ecosystem.titlePart2}
          </h2>
        </div>
        <CompanyCarousel />
      </section>

      <div className="home-v2-story">
        <LazySpline />
        <section className="home-v2-areas">
          <div className="shell">
            <div className="home-v2-areas__heading">
              <div>
                <Eyebrow light>{t.home.areas.eyebrow}</Eyebrow>
                <h2>
                  {t.home.areas.titlePart1}
                  <br /> {t.home.areas.titlePart2}
                </h2>
              </div>
              <p>{t.home.areas.description}</p>
            </div>
            <div className="home-v2-area-grid">
              {t.home.areas.items.map((area, idx) => (
                <Link
                  href="/areas"
                  key={area.index}
                  className={`home-v2-area ${areaClassNames[idx] || ""}`}
                >
                  <span>{area.index}</span>
                  <div className="home-v2-area__symbol" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-v2-vision">
          <div className="shell">
            <div className="home-v2-vision__heading">
              <div>
                <Eyebrow light>{t.home.vision.eyebrow}</Eyebrow>
                <h2>
                  {t.home.vision.titlePart1}
                  <br /> {t.home.vision.titlePart2}
                  <br /> {t.home.vision.titlePart3}
                </h2>
              </div>
              <p>{t.home.vision.description}</p>
            </div>
          </div>
        </section>
      </div>

      <section className="shell home-v2-impact">
        <div className="home-v2-impact__heading">
          <Eyebrow>{t.home.impact.eyebrow}</Eyebrow>
          <h2>
            {t.home.impact.titlePart1}
            <br /> {t.home.impact.titlePart2}
            <br /> {t.home.impact.titlePart3}
          </h2>
        </div>
        <div className="home-v2-impact__grid">
          {t.home.impact.items.map((item) => (
            <article key={item.title}>
              <span aria-hidden="true">
                <img src={item.icon} alt="" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <Link href="/impacto" className="home-v2-text-link">
          {t.home.impact.link} <ArrowUpRight />
        </Link>
      </section>

      <section className="shell home-v2-careers">
        <div className="home-v2-careers__copy">
          <Eyebrow light>{t.home.careers.eyebrow}</Eyebrow>
          <h2>
            {t.home.careers.titlePart1}
            <br /> {t.home.careers.titlePart2}
            <br /> {t.home.careers.titlePart3}
          </h2>
          <p>{t.home.careers.description}</p>
          <Link href="/contactos" className="home-v2-button home-v2-button--blue">
            {t.home.careers.contactButton} <ArrowRight />
          </Link>
        </div>
        <div className="home-v2-careers__graphic" aria-hidden="true">
          <i />
          <i />
          <i />
          <div>
            <img src="/brand/grupo-jc-icon-black.svg" alt="" />
          </div>
          <b className="learn">{t.home.careers.badgeLearn}</b>
          <b className="create">{t.home.careers.badgeCreate}</b>
          <b className="evolve">{t.home.careers.badgeEvolve}</b>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
