"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "./ArrowUpRight";
import { companies, companyCardTints } from "../data";

const orderedCompanies = [
  ...companies.filter((company) => company.slug === "itangola"),
  ...companies.filter((company) => company.slug !== "itangola"),
];

export function CompanyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const company = orderedCompanies[activeIndex];
  const show = (offset: number) => setActiveIndex((currentIndex) => (currentIndex + offset + orderedCompanies.length) % orderedCompanies.length);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => show(1), 5000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused]);

  return (
    <div className="home-v2-carousel">
      <div className="home-v2-carousel__controls">
        <button type="button" onClick={() => show(-1)} aria-label="Empresa anterior">‹</button>
        <button type="button" onClick={() => show(1)} aria-label="Próxima empresa">›</button>
      </div>
      <article
        key={company.slug}
        className="home-v2-company-card"
        style={{ "--company-tint": companyCardTints[company.slug] } as CSSProperties}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="home-v2-company-card__brand"><img src={company.logo} alt={company.name} /><a href={company.website} target="_blank" rel="noreferrer" aria-label={`Visitar ${company.name}`}><ArrowUpRight /></a><a className="home-v2-company-card__website" href={company.website} target="_blank" rel="noreferrer">Visitar WebSite <ArrowRight /></a></div>
        <Link href={`/empresas/${company.slug}`} className="home-v2-company-card__content"><ArrowUpRight /><span>{company.category}</span><h3>{company.tagline}</h3><p>{company.description}</p></Link>
      </article>
    </div>
  );
}
