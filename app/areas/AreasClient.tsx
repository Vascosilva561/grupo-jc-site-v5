"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ArrowUpRight } from "../components/ArrowUpRight";
import { useLanguage } from "../translations";

type AreaIconName = "technology" | "payments" | "entertainment";

const areaIconConfig: Record<string, { icon: AreaIconName; heroIcon: string; detailIcon: string }> = {
  tecnologia: {
    icon: "technology",
    heroIcon: "/assets/areas/technology-hero.svg",
    detailIcon: "/assets/areas/technology-detail.svg",
  },
  pagamentos: {
    icon: "payments",
    heroIcon: "/assets/areas/payments-hero.svg",
    detailIcon: "/assets/areas/payments-detail.svg",
  },
  entretenimento: {
    icon: "entertainment",
    heroIcon: "/assets/areas/entertainment-hero.svg",
    detailIcon: "/assets/areas/entertainment-detail.svg",
  },
};

export function AreasClient() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="areas-hero">
        <SiteHeader dark />
        <div className="shell areas-hero__content">
          <div className="areas-hero__copy">
            <div className="areas-hero__meta">
              <span className="eyebrow eyebrow--light">{t.areas.hero.eyebrow}</span>
            </div>
            <h1>{t.areas.hero.title}</h1>
            <p>{t.areas.hero.description}</p>
          </div>
          <div className="areas-hero__visual" aria-hidden="true">
            {t.areas.items.map((area) => {
              const cfg = areaIconConfig[area.id] || areaIconConfig.tecnologia;
              return (
                <div className={`areas-hero__signal areas-hero__signal--${cfg.icon}`} key={area.id}>
                  <Image src={cfg.heroIcon} alt="" width={44} height={44} />
                  <span>{area.label}</span>
                  <i>{area.index}</i>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="areas-overview shell" aria-labelledby="areas-overview-title">
        <div className="areas-overview__heading">
          <div>
            <span className="eyebrow">{t.areas.overview.eyebrow}</span>
            <h2 id="areas-overview-title">{t.areas.overview.title}</h2>
          </div>
          <p>{t.areas.overview.description}</p>
        </div>
        <div className="areas-overview__grid">
          {t.areas.items.map((area) => {
            const cfg = areaIconConfig[area.id] || areaIconConfig.tecnologia;
            return (
              <Link
                href={`#${area.id}`}
                className={`areas-overview__card areas-overview__card--${cfg.icon}`}
                key={area.id}
              >
                <span>{area.index}</span>
                <Image src={cfg.heroIcon} alt="" width={44} height={44} />
                <strong>{area.label}</strong>
                <ArrowUpRight />
              </Link>
            );
          })}
        </div>
      </section>

      <section className="area-directory shell" aria-label={t.areas.hero.eyebrow}>
        {t.areas.items.map((area) => {
          const cfg = areaIconConfig[area.id] || areaIconConfig.tecnologia;
          return (
            <article
              id={area.id}
              className={`area-directory__item area-directory__item--${cfg.icon}`}
              key={area.id}
            >
              <div className="area-directory-meta">
                <div className="area-directory-icon">
                  <Image src={cfg.detailIcon} alt="" width={44} height={44} />
                </div>
                <div className="area-directory-companies">
                  {area.companies.map((company) => (
                    <span key={company}>
                      <i />
                      {company}
                    </span>
                  ))}
                </div>
              </div>
              <div className="area-directory-body">
                <span className="area-directory-label">{area.label}</span>
                <h2>{area.title}</h2>
                <p>{area.text}</p>
                <div className="skill-grid">
                  {area.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <Link
                  href={`/empresas?categoria=${encodeURIComponent(area.id === "tecnologia" ? "Tecnologia" : area.id === "pagamentos" ? "Pagamentos" : "Entretenimento")}`}
                  className="text-link"
                >
                  {t.areas.actionLink} <ArrowUpRight />
                </Link>
              </div>
            </article>
          );
        })}
      </section>
      <SiteFooter />
    </main>
  );
}
