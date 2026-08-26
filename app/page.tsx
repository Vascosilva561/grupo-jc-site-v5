import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ArrowRight, ArrowUpRight } from "./components/ArrowUpRight";
import { CompanyCarousel } from "./components/CompanyCarousel";
import { LazySpline } from "./components/LazySpline";

const metrics = [
  ["6", "Empresas", "Um portefólio com diferentes especializações."],
  ["3", "Áreas estratégicas", "Tecnologia, serviços financeiros e entretenimento."],
  ["360°", "Talento multidisciplinar", "Produto, tecnologia, operações, finanças e marketing."],
  ["1", "Visão comum", "Criar negócios que impulsionam o mercado angolano."],
];

const areas = [
  {
    index: "01",
    className: "home-v2-area--technology",
    title: "Tecnologia e transformação digital",
    text: "Produtos, plataformas e infraestruturas que modernizam processos e melhoram experiências.",
  },
  {
    index: "02",
    className: "home-v2-area--payments",
    title: "Pagamentos e serviços financeiros",
    text: "Soluções que tornam pagamentos, transferências e serviços mais simples e acessíveis.",
  },
  {
    index: "03",
    className: "home-v2-area--entertainment",
    title: "Entretenimento digital",
    text: "Experiências digitais orientadas para interacção, participação e novas formas de entretenimento.",
  },
];

const impacts = [
  ["/assets/impact-employment.svg", "Criação de emprego", "Desenvolvemos empresas capazes de gerar oportunidades profissionais em diferentes áreas."],
  ["/assets/impact-youth.svg", "Desenvolvimento de jovens", "Criamos ambientes onde novos talentos aprendem, ganham experiência e desenvolvem competências."],
  ["/assets/impact-tech.svg", "Evolução tecnológica", "Investimos em soluções ajustadas às necessidades de pessoas, empresas e instituições."],
  ["/assets/impact-business.svg", "Fortalecimento empresarial", "Apoiamos o crescimento de negócios através de tecnologia, serviços e novas formas de operar."],
];

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`home-v2-eyebrow ${light ? "home-v2-eyebrow--light" : ""}`}>{children}</span>;
}

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return <div className={`home-v2-image-placeholder ${className}`} aria-hidden="true"><img src="/assets/image-placeholder.svg" alt="" /></div>;
}

const companyLogos = [
  { src: "/companies/pagaso.svg", alt: "PagaSó" },
  { src: "/companies/itangola.svg", alt: "ITAngola" },
  { src: "/companies/kwanzabet.svg", alt: "KwanzaBet" },
  { src: "/companies/ada.svg", alt: "ADA" },
  { src: "/companies/somoney.svg", alt: "SóMoney" },
  { src: "/companies/intelize.svg", alt: "Intelize" },
];

export default function Home() {
  return (
    <main className="home-v2">
      <section className="home-v2-hero">
        <SiteHeader />
        <div className="shell home-v2-hero__content">
          <div className="home-v2-hero__copy">
            <Eyebrow>Um grupo. Diferentes forças.</Eyebrow>
            <h1>Construímos o<br />{" "}futuro de Angola.</h1>
            <p>Reunimos empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades que acompanham a evolução de Angola.</p>
            <div className="home-v2-actions">
              <Link href="/grupo" className="home-v2-button home-v2-button--dark">Conhecer o Grupo <ArrowRight /></Link>
              <Link href="/empresas" className="home-v2-button home-v2-button--outline">Explorar as empresas <ArrowRight /></Link>
            </div>
          </div>
          <ImagePlaceholder className="home-v2-hero__image" />
        </div>
      </section>

      <section className="shell home-v2-metrics" aria-label="Indicadores do Grupo">
        {metrics.map(([number, label, description]) => (
          <article key={label}><strong>{number}</strong><span>{label}</span><p>{description}</p></article>
        ))}
      </section>

      <section className="shell home-v2-intro">
        <div className="home-v2-intro__copy">
          <Eyebrow>O Grupo</Eyebrow>
          <h2>Mais do que um<br />{" "}conjunto de<br />{" "}empresas.</h2>
          <p>As nossas empresas actuam em sectores distintos, mas partilham uma visão comum: desenvolver soluções relevantes, valorizar o talento nacional e contribuir para a evolução do mercado.</p>
          <blockquote>“Quando diferentes capacidades avançam na mesma direcção, o impacto torna-se maior.”</blockquote>
          <Link href="/grupo" className="home-v2-text-link">Conhecer a nossa história <ArrowUpRight /></Link>
        </div>
        <ImagePlaceholder className="home-v2-intro__image" />
      </section>



      <section className="home-v2-logo-strip" aria-label="Empresas do Grupo JC">
        <div className="home-v2-logo-strip__track">
          {[0, 1, 2, 3].map((groupIndex) => (
            <div
              key={groupIndex}
              className="home-v2-logo-strip__group"
              aria-hidden={groupIndex > 0 ? "true" : undefined}
            >
              {companyLogos.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={groupIndex === 0 ? logo.alt : ""}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="shell home-v2-companies">
        <div className="home-v2-section-title">
          <Eyebrow>O nosso ecossistema</Eyebrow>
          <h2>Empresas que criam<br />{" "}novas possibilidades.</h2>
        </div>
        <CompanyCarousel />
      </section>

      <div className="home-v2-story">
        <LazySpline />
      <section className="home-v2-areas">
        <div className="shell">
          <div className="home-v2-areas__heading">
            <div><Eyebrow light>Áreas de actuação</Eyebrow><h2>Presentes em sectores<br />{" "}que movem o mercado.</h2></div>
            <p>Ligamos conhecimento, tecnologia e capacidade de execução para criar valor em três frentes estratégicas.</p>
          </div>
          <div className="home-v2-area-grid">
            {areas.map((area) => <Link href="/areas" key={area.index} className={`home-v2-area ${area.className}`}><span>{area.index}</span><div className="home-v2-area__symbol" aria-hidden="true"><i /><i /><i /></div><h3>{area.title}</h3><p>{area.text}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="home-v2-vision">
        <div className="shell">
          <div className="home-v2-vision__heading">
            <div><Eyebrow light>O que nos move</Eyebrow><h2>Criamos hoje as<br />{" "}bases para o que vem<br />{" "}a seguir.</h2></div>
            <p>O Grupo JC nasceu para aproximar diferentes competências, fortalecer negócios e criar uma estrutura capaz de gerar maior impacto.</p>
          </div>
        </div>
      </section>
      </div>

      <section className="shell home-v2-impact">
        <div className="home-v2-impact__heading"><Eyebrow>Impacto além dos negócios</Eyebrow><h2>Crescemos enquanto<br />{" "}criamos espaço para outros<br />{" "}crescerem.</h2></div>
        <div className="home-v2-impact__grid">
          {impacts.map(([icon, title, text]) => <article key={title}><span aria-hidden="true"><img src={icon} alt="" /></span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <Link href="/impacto" className="home-v2-text-link">Conhecer o nosso impacto <ArrowUpRight /></Link>
      </section>

      <section className="shell home-v2-careers">
        <div className="home-v2-careers__copy">
          <Eyebrow light>Fale connosco</Eyebrow>
          <h2>Vamos conversar<br />{" "}sobre o que vem<br />{" "}a seguir.</h2>
          <p>Tem uma ideia, projecto ou desafio? Entre em contacto com o Grupo JC e descubra como podemos avançar juntos.</p>
          <Link href="/contactos" className="home-v2-button home-v2-button--blue">Entrar em contacto <ArrowRight /></Link>
        </div>
        <div className="home-v2-careers__graphic" aria-hidden="true"><i /><i /><i /><div><img src="/brand/grupo-jc-icon-black.svg" alt="" /></div><b className="learn">APRENDER</b><b className="create">CRIAR</b><b className="evolve">EVOLUIR</b></div>
      </section>

      <SiteFooter />
    </main>
  );
}
