"use client";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { LeadershipSection } from "../components/LeadershipSection";
import { useLanguage } from "../translations";

const valueIcons = [
  "/assets/sobre/dc4f227dd13aea41fa4b4e6d964a736fb3c95567.svg",
  "/assets/sobre/baac4931a36aea5a6227bf802b5d9738774c3452.svg",
  "/assets/sobre/f96d7381958a43a976d809dd8aaaa8c809950c14.svg",
  "/assets/sobre/b6fa22a2f54d065cfb17b4f56857db087541b8c0.svg",
  "/assets/sobre/772db2888680cc5aa3fc9a0bc81d6d1bd6c30fb3.svg",
  "/assets/sobre/f96d7381958a43a976d809dd8aaaa8c809950c14.svg",
];

export function GroupClient() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Header Overlaid on Dark Hero (Transparent when on top) */}
      <SiteHeader dark={true} transparentOnTop={true} />

      {/* 1. HERO SECTION */}
      <section className="sobre-hero">
        <div className="sobre-hero-bg">
          <img
            src="/assets/sobre/bb4bcac6c7907d9b2867849cb31fd77ae95fc1c6.webp"
            alt=""
          />
        </div>
        <div className="sobre-hero-content">
          <span className="eyebrow eyebrow--light">{t.grupo.hero.eyebrow}</span>
          <h1 className="sobre-hero-title">
            {t.grupo.hero.titlePart1}
            <br />
            {t.grupo.hero.titlePart2}
          </h1>
          <p className="sobre-hero-desc">{t.grupo.hero.description}</p>
        </div>
      </section>

      {/* 2. A NOSSA HISTÓRIA */}
      <section className="sobre-history">
        <div className="shell sobre-history-inner">
          <div className="sobre-history-image">
            <img
              src="/assets/sobre/grupo-jc-estrategia-4x3.webp"
              alt={t.grupo.history.imageAlt}
            />
          </div>
          <div className="sobre-history-copy">
            <span className="eyebrow">{t.grupo.history.eyebrow}</span>
            <h2>{t.grupo.history.title}</h2>
            <p className="sobre-history-lead">{t.grupo.history.lead}</p>
            <p className="sobre-history-body">{t.grupo.history.body}</p>
          </div>
        </div>
      </section>

      {/* 3. O NOSSO PROPÓSITO / MISSÃO / VISÃO */}
      <section className="sobre-purpose">
        <div className="shell">
          <div className="sobre-purpose-grid">
            {/* Purpose Main Column */}
            <div className="sobre-purpose-card sobre-purpose-main">
              <span className="eyebrow eyebrow--light">{t.grupo.purpose.eyebrow}</span>
              <h2>{t.grupo.purpose.title}</h2>
              <p>{t.grupo.purpose.description}</p>
            </div>

            {/* Mission Column */}
            <article className="sobre-purpose-article">
              <div>
                <div className="sobre-purpose-icon">
                  <img
                    src="/assets/sobre/f1c4d89ee91a5f473dbded42eb75e3dfa6f5dcee.svg"
                    alt={t.grupo.purpose.missionTitle}
                  />
                </div>
                <h3>{t.grupo.purpose.missionTitle}</h3>
              </div>
              <p>{t.grupo.purpose.missionText}</p>
            </article>

            {/* Vision Column */}
            <article className="sobre-purpose-article">
              <div>
                <div className="sobre-purpose-icon">
                  <img
                    src="/assets/sobre/b7cdd57d7f29b948c99f0b0d4435e4eaa21de8ef.svg"
                    alt={t.grupo.purpose.visionTitle}
                  />
                </div>
                <h3>{t.grupo.purpose.visionTitle}</h3>
              </div>
              <p>{t.grupo.purpose.visionText}</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. VALORES */}
      <section className="sobre-values">
        <div className="shell">
          <div className="sobre-values-head">
            <div>
              <span className="eyebrow">{t.grupo.values.eyebrow}</span>
              <h2>{t.grupo.values.title}</h2>
            </div>
            <p>{t.grupo.values.subtitle}</p>
          </div>
          <div className="sobre-values-grid">
            {t.grupo.values.items.map((item, index) => (
              <article key={item.title}>
                <span className="sobre-value-icon" aria-hidden="true">
                  <img src={valueIcons[index] || valueIcons[0]} alt="" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LIDERANÇA — BANNER */}
      <section className="sobre-leadership-banner">
        <div className="shell">
          <span className="eyebrow">{t.grupo.leadershipBanner.eyebrow}</span>
          <h2>
            {t.grupo.leadershipBanner.titlePart1}
            <br />
            {t.grupo.leadershipBanner.titlePart2}
            <br />
            {t.grupo.leadershipBanner.titlePart3}
          </h2>
          <p>{t.grupo.leadershipBanner.description}</p>
        </div>
      </section>

      {/* 6. LIDERANÇA — DETALHE & MODAL */}
      <LeadershipSection />

      {/* SITE FOOTER */}
      <SiteFooter />
    </main>
  );
}
