import Link from "next/link";
import { companies, navigation } from "../data";
import { ArrowUpRight } from "./ArrowUpRight";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <img src="/brand/grupo-jc-white.svg" alt="Grupo JC" className="footer-logo" />
            <p>Empresas que desenvolvem soluções, valorizam o talento e criam oportunidades para acompanhar a evolução de Angola.</p>
          </div>
          <Link href="/contactos" className="footer-contact">
            Vamos conversar <ArrowUpRight size={28} />
          </Link>
        </div>
        <div className="footer-grid">
          <div>
            <span className="footer-label">Grupo JC</span>
            {navigation.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <span className="footer-label">Empresas</span>
            {companies.map((company) => <Link key={company.slug} href={`/empresas/${company.slug}`}>{company.name}</Link>)}
          </div>
          <div>
            <span className="footer-label">Oportunidades</span>
            <Link href="/carreiras">Carreiras</Link>
            <Link href="/carreiras#jovens">Jovens talentos</Link>
            <Link href="/carreiras#candidatura">Candidatura espontânea</Link>
          </div>
          <div>
            <span className="footer-label">Ligações</span>
            <Link href="/noticias">Notícias</Link>
            <Link href="/contactos">Contactos</Link>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/termos">Termos</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Grupo JC. Todos os direitos reservados.</span>
          <span>Potencial que gera progresso.</span>
          <span>Angola</span>
        </div>
      </div>
    </footer>
  );
}
