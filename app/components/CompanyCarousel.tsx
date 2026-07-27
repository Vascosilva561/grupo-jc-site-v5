"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "./ArrowUpRight";
import { companies } from "../data";

const orderedCompanies = [
  ...companies.filter((company) => company.slug === "itangola"),
  ...companies.filter((company) => company.slug !== "itangola"),
];

export function CompanyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const company = orderedCompanies[activeIndex];
  const show = (offset: number) => setActiveIndex((activeIndex + offset + orderedCompanies.length) % orderedCompanies.length);

  return (
    <div className="home-v2-carousel">
      <div className="home-v2-carousel__controls">
        <button type="button" onClick={() => show(-1)} aria-label="Empresa anterior">‹</button>
        <button type="button" onClick={() => show(1)} aria-label="Próxima empresa">›</button>
      </div>
      <article key={company.slug} className="home-v2-company-card" style={{ "--company-tint": `${company.accent}14` } as CSSProperties}>
        <div className="home-v2-company-card__brand"><img src={company.logo} alt={company.name} /><a href={company.website} target="_blank" rel="noreferrer" aria-label={`Visitar ${company.name}`}><ArrowUpRight /></a><a className="home-v2-company-card__website" href={company.website} target="_blank" rel="noreferrer">Visitar WebSite <ArrowUpRight /></a></div>
        <Link href={`/empresas/${company.slug}`} className="home-v2-company-card__content"><ArrowUpRight /><span>{company.category}</span><h3>{company.tagline}</h3><p>{company.description}</p></Link>
      </article>
    </div>
  );
}
