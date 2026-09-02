"use client";

import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { ImpactCounter } from "../components/ImpactCounter";
import { useLanguage } from "../translations";

const indicatorValues = [450, 1200, 180, 36, 850, 72, 14, 18];
const indicatorIcons = [
  "/assets/impact-icons/users-group.svg",
  "/assets/impact-icons/graduation-cap.svg",
  "/assets/impact-icons/head-settings.svg",
  "/assets/impact-icons/rocket.svg",
  "/assets/impact-icons/star.svg",
  "/assets/impact-icons/briefcase.svg",
  "/assets/impact-icons/transfer.svg",
  "/assets/impact-icons/location.svg",
];

const pillarIndices = ["01", "02", "03"];

export function ImpactClient() {
  const { t } = useLanguage();

  return (
    <main>
      <PageHero
        centered
        eyebrow={t.impacto.hero.eyebrow}
        title={t.impacto.hero.title}
        description={t.impacto.hero.description}
      />

      <section className="impact-manifesto shell">
        <div className="impact-manifesto__copy">
          <span className="eyebrow">{t.impacto.manifesto.eyebrow}</span>
          <h2>
            {t.impacto.manifesto.titlePart1}
            <br />
            {t.impacto.manifesto.titlePart2}
          </h2>
          <p>{t.impacto.manifesto.p1}</p>
          <p>{t.impacto.manifesto.p2}</p>
        </div>
        <figure className="impact-manifesto__image">
          <img
            src="/assets/impact-manifesto-v1.webp"
            alt="Profissionais angolanos a colaborar num espaço de trabalho"
          />
        </figure>
      </section>

      <section className="impact-data">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <div>
              <span className="eyebrow eyebrow--light">
                {t.impacto.metricsSection.eyebrow}
              </span>
              <h2>{t.impacto.metricsSection.title}</h2>
            </div>
            <p>{t.impacto.metricsSection.description}</p>
          </div>
          <div className="impact-data-grid">
            {t.impacto.metricsSection.indicators.map((item, index) => (
              <article key={item.label}>
                <div className="impact-data-card-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Image
                    src={indicatorIcons[index] || indicatorIcons[0]}
                    width={38}
                    height={38}
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <strong>
                  <ImpactCounter
                    value={indicatorValues[index] || 100}
                    suffix={item.suffix}
                  />
                </strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-stack-section shell">
        <div className="impact-stack-heading">
          <span className="eyebrow">{t.impacto.pillarsSection.eyebrow}</span>
          <h2>{t.impacto.pillarsSection.title}</h2>
          <p>{t.impacto.pillarsSection.description}</p>
        </div>
        <div className="impact-stack">
          {t.impacto.pillarsSection.pillars.map((pillar, index) => (
            <article className="impact-stack-card" key={pillar.label}>
              <div className="impact-stack-card__meta">
                <span>{pillarIndices[index] || `0${index + 1}`}</span>
                <strong>{pillar.label}</strong>
              </div>
              <div className="impact-stack-card__content">
                <span
                  className="impact-pillar-icon"
                  role="img"
                  aria-label={`${pillar.label} — icon`}
                />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <div className="impact-stack-card__tags">
                  {pillar.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
