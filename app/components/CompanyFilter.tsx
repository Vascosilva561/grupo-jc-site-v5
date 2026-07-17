"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Link from "next/link";
import type { Company } from "../data";
import { ArrowUpRight } from "./ArrowUpRight";

const filters = ["Todas", "Tecnologia", "Pagamentos", "Serviços financeiros", "Entretenimento"];

export function CompanyFilter({ companies }: { companies: Company[] }) {
  const [active, setActive] = useState("Todas");
  const visible = active === "Todas" ? companies : companies.filter((company) => company.category === active);

  return (
    <div>
      <div className="filter-bar" aria-label="Filtrar empresas">
        {filters.map((filter) => (
          <button key={filter} type="button" className={active === filter ? "active" : ""} onClick={() => setActive(filter)}>{filter}</button>
        ))}
      </div>
      <div className="directory-grid" aria-live="polite">
        {visible.map((company, index) => (
          <Link key={company.slug} href={`/empresas/${company.slug}`} className="directory-card" style={{ "--accent": company.accent } as CSSProperties}>
            <div className="directory-card-head"><span>{String(index + 1).padStart(2, "0")}</span><ArrowUpRight /></div>
            <div className="directory-logo"><img src={company.logo} alt={company.name} /></div>
            <span className="company-category">{company.category}</span>
            <h2>{company.tagline}</h2>
            <p>{company.description}</p>
            <div className="solution-chips">{company.solutions.slice(0, 3).map((solution) => <span key={solution}>{solution}</span>)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
