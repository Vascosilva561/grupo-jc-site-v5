"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "./ArrowUpRight";
import { companyCardTints } from "../data";
import { useLanguage } from "../translations";

export function CompanyCarousel() {
  const { t, companies } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const orderedCompanies = [
    ...companies.filter((company) => company.slug === "itangola"),
    ...companies.filter((company) => company.slug !== "itangola"),
  ];

  const company = orderedCompanies[activeIndex] || orderedCompanies[0];
  const show = (offset: number) =>
    setActiveIndex((currentIndex) => (currentIndex + offset + orderedCompanies.length) % orderedCompanies.length);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => show(1), 5000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, orderedCompanies.length]);

  if (!company) return null;

  return (
    <div className="home-v2-carousel">
      <div className="home-v2-carousel__controls">
        <button type="button" onClick={() => show(-1)} aria-label={t.home.ecosystem.prevCompany}>
          ‹
        </button>
        <button type="button" onClick={() => show(1)} aria-label={t.home.ecosystem.nextCompany}>
          ›
        </button>
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
        <div className="home-v2-company-card__brand">
          <img src={company.logo} alt={company.name} />
          <a href={company.website} target="_blank" rel="noreferrer" aria-label={`${t.empresas.detail.visitWebsite}: ${company.name}`}>
            <ArrowUpRight />
          </a>
          <a className="home-v2-company-card__website" href={company.website} target="_blank" rel="noreferrer">
            {t.home.ecosystem.visitWebsite} <ArrowRight />
          </a>
        </div>
        <Link href={`/empresas/${company.slug}`} className="home-v2-company-card__content">
          <ArrowUpRight />
          <span>{company.category}</span>
          <h3>{company.tagline}</h3>
          <p>{company.description}</p>
        </Link>
      </article>
    </div>
  );
}
