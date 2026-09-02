"use client";

import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { useLanguage } from "../translations";

export function TermsClient() {
  const { t } = useLanguage();
  const terms = t.termos;

  return (
    <main>
      <PageHero
        className="page-hero-wrap--legal"
        eyebrow={terms.eyebrow}
        title={terms.title}
        description={terms.description}
      />
      <section className="legal-content shell">
        <h2>{terms.h2}</h2>
        <p>{terms.p1}</p>
        <h3>{terms.h3_1}</h3>
        <p>{terms.p2}</p>
        <h3>{terms.h3_2}</h3>
        <p>{terms.p3}</p>
        <h3>{terms.h3_3}</h3>
        <p>{terms.p4}</p>
        <p className="legal-note">{terms.legalNote}</p>
      </section>
      <SiteFooter />
    </main>
  );
}
