import type { CSSProperties } from "react";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ArrowRight, ArrowUpRight } from "./components/ArrowUpRight";
import { companies } from "./data";

const impactItems = [
  { number: "01", title: "Criação de emprego", text: "Desenvolvemos empresas capazes de gerar oportunidades profissionais em diferentes áreas." },
  { number: "02", title: "Desenvolvimento de jovens", text: "Criamos ambientes onde novos talentos aprendem, ganham experiência e desenvolvem competências." },
  { number: "03", title: "Evolução tecnológica", text: "Investimos em soluções ajustadas às necessidades de pessoas, empresas e instituições." },
  { number: "04", title: "Fortalecimento empresarial", text: "Apoiamos o crescimento de negócios através de tecnologia, serviços e novas formas de operar." },
];

const valueSteps = [
  ["01", "Identificamos oportunidades", "Compreendemos necessidades e reconhecemos áreas com potencial de crescimento."],
  ["02", "Criamos soluções", "Transformamos desafios em produtos, serviços e empresas capazes de gerar valor."],
  ["03", "Desenvolvemos talento", "Apostamos em pessoas, conhecimento e aprendizagem contínua."],
  ["04", "Ligamos capacidades", "Partilhamos experiência, tecnologia e recursos entre as empresas do grupo."],
  ["05", "Crescemos com responsabilidade", "Construímos negócios sustentáveis e preparados para evoluir a longo prazo."],
];

export default function Home() {
  return (
    <main>
      <div className="hero-wrap">
        <SiteHeader />
        <section className="home-hero shell">
          <div className="hero-copy">
            <span className="eyebrow">Um grupo. Diferentes forças.</span>
            <h1>Transformamos <span>potencial</span> em progresso.</h1>
            <p>Reunimos empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades que acompanham a evolução de Angola.</p>
            <div className="hero-actions">
              <Link href="/grupo" className="button button--dark">Conhecer o Grupo <ArrowRight /></Link>
              <Link href="/empresas" className="button button--ghost">Explorar as empresas <ArrowUpRight /></Link>
            </div>
          </div>
          <div className="ecosystem-stage" aria-label="Ecossistema de empresas do Grupo JC">
            <div className="stage-grid" />
            <div className="core-ring core-ring--outer" />
            <div className="core-ring core-ring--inner" />
            <div className="ecosystem-core">
              <img src="/brand/grupo-jc-icon-white.svg" alt="" />
              <span>Uma visão comum</span>
            </div>
            {companies.map((company, index) => (
              <div key={company.slug} className={`satellite satellite--${index + 1}`} style={{ "--accent": company.accent } as CSSProperties}>
                <span className="satellite-dot" />
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
            <span className="stage-label stage-label--top">Talento nacional</span>
            <span className="stage-label stage-label--bottom">Estrutura partilhada</span>
          </div>
        </section>
        <div className="company-rail" aria-label="Empresas do Grupo JC">
          <div className="company-rail-track">
            {[...companies, ...companies].map((company, i) => (
              <span key={`${company.slug}-${i}`}><i style={{ background: company.accent }} />{company.name}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="section intro-section shell reveal">
        <div className="section-aside"><span className="section-number">01</span><span>O Grupo</span></div>
        <div className="intro-content">
          <h2>Mais do que um conjunto de empresas.</h2>
          <div className="intro-columns">
            <p>O Grupo JC nasceu para aproximar diferentes competências, fortalecer negócios e criar uma estrutura capaz de gerar maior impacto.</p>
            <p>As nossas empresas atuam em setores distintos, mas partilham uma visão comum: desenvolver soluções relevantes, valorizar o talento nacional e contribuir para a evolução do mercado.</p>
          </div>
          <blockquote>Quando diferentes capacidades avançam na mesma direção, o impacto torna-se maior.</blockquote>
          <Link href="/grupo" className="text-link">Conhecer a nossa história <ArrowUpRight /></Link>
        </div>
      </section>

      <section className="metrics-section shell reveal" aria-label="Indicadores do Grupo">
        <article><strong>6</strong><span>empresas</span><p>Um portefólio com diferentes especializações.</p></article>
        <article><strong>3</strong><span>áreas estratégicas</span><p>Tecnologia, serviços financeiros e entretenimento.</p></article>
        <article><strong>360°</strong><span>talento multidisciplinar</span><p>Produto, tecnologia, operações, finanças e marketing.</p></article>
        <article><strong>1</strong><span>visão comum</span><p>Criar negócios que fazem o mercado avançar.</p></article>
      </section>

      <section className="section companies-section shell reveal">
        <div className="section-heading">
          <div><span className="eyebrow">O nosso ecossistema</span><h2>Empresas que criam novas possibilidades.</h2></div>
          <p>Cada empresa possui uma identidade e especialização próprias. Juntas, respondem às necessidades de pessoas e organizações.</p>
        </div>
        <div className="company-grid">
          {companies.map((company, index) => (
            <Link key={company.slug} href={`/empresas/${company.slug}`} className="company-card" style={{ "--accent": company.accent } as CSSProperties}>
              <div className="company-card-top"><span>{String(index + 1).padStart(2, "0")}</span><ArrowUpRight /></div>
              <div className="company-logo-wrap"><img src={company.logo} alt={company.name} /></div>
              <div><span className="company-category">{company.category}</span><h3>{company.tagline}</h3><p>{company.description}</p></div>
            </Link>
          ))}
        </div>
        <Link href="/empresas" className="button button--dark centered-button">Conhecer todas as empresas <ArrowRight /></Link>
      </section>

      <section className="areas-section reveal">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <div><span className="eyebrow eyebrow--light">Áreas de atuação</span><h2>Presentes em setores que movem o mercado.</h2></div>
            <p>Ligamos conhecimento, tecnologia e capacidade de execução para criar valor em três frentes estratégicas.</p>
          </div>
          <div className="area-cards">
            <Link href="/areas#tecnologia" className="area-card"><span className="area-index">01</span><div className="area-symbol area-symbol--tech"><i /><i /><i /></div><h3>Tecnologia e transformação digital</h3><p>Produtos, plataformas e infraestruturas que modernizam processos e melhoram experiências.</p><span className="area-companies">ADA · ITAngola</span></Link>
            <Link href="/areas#pagamentos" className="area-card area-card--lime"><span className="area-index">02</span><div className="area-symbol area-symbol--finance"><i /><i /><i /></div><h3>Pagamentos e serviços financeiros</h3><p>Soluções que tornam pagamentos, transferências e serviços mais simples e acessíveis.</p><span className="area-companies">Intelize · PagaSó · SóMoney</span></Link>
            <Link href="/areas#entretenimento" className="area-card"><span className="area-index">03</span><div className="area-symbol area-symbol--play"><i /></div><h3>Entretenimento digital</h3><p>Experiências digitais orientadas para interação, participação e novas formas de entretenimento.</p><span className="area-companies">KwanzaBet</span></Link>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-orb" aria-hidden="true"><span /><span /><span /></div>
        <div className="shell vision-content reveal">
          <span className="eyebrow eyebrow--light">O que nos move</span>
          <h2>Criamos hoje as bases para o que vem a seguir.</h2>
          <div className="vision-copy"><p>A evolução do mercado também depende da capacidade das empresas locais para criar soluções, desenvolver competências e abrir novas oportunidades.</p><p>Por isso, investimos em negócios com potencial para modernizar setores, melhorar serviços e preparar profissionais para os desafios do futuro.</p></div>
          <blockquote>O progresso acontece quando ideias encontram estrutura, talento e oportunidade.</blockquote>
        </div>
      </section>

      <section className="section impact-section shell reveal">
        <div className="section-aside"><span className="section-number">02</span><span>Impacto</span></div>
        <div className="impact-content">
          <div className="section-heading section-heading--compact"><div><span className="eyebrow">Para além dos negócios</span><h2>Crescemos enquanto criamos espaço para outros crescerem.</h2></div></div>
          <div className="impact-grid">
            {impactItems.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
          <Link href="/impacto" className="text-link">Conhecer o nosso impacto <ArrowUpRight /></Link>
        </div>
      </section>

      <section className="value-section shell reveal">
        <div className="section-heading"><div><span className="eyebrow">Como criamos valor</span><h2>Uma visão integrada para gerar mais impacto.</h2></div><p>Do entendimento do mercado à criação de empresas sustentáveis, ligamos capacidades em cada etapa.</p></div>
        <div className="value-list">
          {valueSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i /></article>)}
        </div>
      </section>

      <section className="careers-banner shell reveal">
        <div className="careers-copy"><span className="eyebrow eyebrow--light">Crescer connosco</span><h2>O talento também precisa de espaço para avançar.</h2><p>Em cada empresa existe uma oportunidade para aprender, criar e participar em projetos com impacto real.</p><div className="hero-actions"><Link href="/carreiras" className="button button--lime">Ver oportunidades <ArrowRight /></Link><Link href="/carreiras#candidatura" className="button button--outline-light">Candidatura espontânea <ArrowUpRight /></Link></div></div>
        <div className="talent-graphic" aria-hidden="true"><div className="talent-circle"><img src="/brand/grupo-jc-icon-white.svg" alt="" /></div><span className="talent-word talent-word--1">APRENDER</span><span className="talent-word talent-word--2">CRIAR</span><span className="talent-word talent-word--3">EVOLUIR</span></div>
      </section>

      <section className="section news-section shell reveal">
        <div className="section-heading"><div><span className="eyebrow">Em movimento</span><h2>Acompanhe o que estamos a construir.</h2></div><p>Projetos, parcerias, conquistas e iniciativas que marcam a evolução do Grupo JC e das suas empresas.</p></div>
        <div className="news-grid">
          <Link href="/noticias" className="news-card news-card--feature"><div className="news-art news-art--one"><span>JC</span></div><div><span className="news-tag">Grupo JC</span><h3>Uma nova estrutura para ligar empresas, talento e oportunidades.</h3><span className="text-link">Ler nota institucional <ArrowUpRight /></span></div></Link>
          <Link href="/noticias" className="news-card"><div className="news-art news-art--two"><i /><i /><i /></div><div><span className="news-tag">Tecnologia</span><h3>Soluções locais para desafios reais do mercado.</h3><span className="text-link">Explorar conteúdos <ArrowUpRight /></span></div></Link>
          <Link href="/noticias" className="news-card"><div className="news-art news-art--three"><span>+</span></div><div><span className="news-tag">Pessoas</span><h3>Talento que cresce enquanto constrói o futuro.</h3><span className="text-link">Conhecer histórias <ArrowUpRight /></span></div></Link>
        </div>
      </section>

      <section className="contact-cta">
        <div className="shell reveal"><span className="eyebrow">Novas possibilidades</span><h2>Vamos construir o próximo passo?</h2><p>Estamos disponíveis para conversar com empresas, instituições, investidores, parceiros e profissionais.</p><Link href="/contactos" className="button button--dark">Falar connosco <ArrowUpRight /></Link></div>
      </section>
      <SiteFooter />
    </main>
  );
}
