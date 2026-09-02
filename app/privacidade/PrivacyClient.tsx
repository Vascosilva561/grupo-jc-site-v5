"use client";

import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { useLanguage } from "../translations";

export function PrivacyClient() {
  const { t } = useLanguage();
  const priv = t.privacidade;

  return (
    <main>
      <PageHero
        className="page-hero-wrap--legal"
        eyebrow={priv.eyebrow}
        title={priv.title}
        description={priv.description}
      />
      <section className="legal-content shell">
        <h2>{priv.h2}</h2>
        <p>{priv.p1}</p>
        <h3>{priv.h3_1}</h3>
        <p>{priv.p2}</p>
        <h3>{priv.h3_2}</h3>
        <p>{priv.p3}</p>
        <h3>{priv.h3_3}</h3>
        <p>{priv.p4}</p>
        <p className="legal-note">{priv.legalNote}</p>
      </section>
      <SiteFooter />
    </main>
  );
}
