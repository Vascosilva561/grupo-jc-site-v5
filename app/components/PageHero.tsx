import { SiteHeader } from "./SiteHeader";

export function PageHero({ eyebrow, title, description, index }: { eyebrow: string; title: string; description: string; index?: string }) {
  return (
    <div className="page-hero-wrap">
      <SiteHeader dark />
      <section className="page-hero shell">
        <div className="page-hero-meta">
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          {index && <span className="page-index">{index}</span>}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
    </div>
  );
}
