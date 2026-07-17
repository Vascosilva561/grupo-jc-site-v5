import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = { title: "Termos de Utilização" };

export default function TermsPage() {
  return <main><PageHero eyebrow="Informação legal" title="Termos de Utilização." description="Condições gerais aplicáveis ao acesso e utilização do website institucional do Grupo JC." /><section className="legal-content shell"><h2>Informação institucional apresentada de forma clara.</h2><p>O website disponibiliza informação geral sobre o Grupo JC, as suas empresas, áreas de atuação, impacto, oportunidades e canais de contacto.</p><h3>Utilização do conteúdo</h3><p>Os conteúdos, marcas e elementos visuais apresentados pertencem ao Grupo JC ou às respetivas empresas e não devem ser reproduzidos sem autorização.</p><h3>Ligações externas</h3><p>O website inclui ligações para os sites oficiais das empresas do grupo. Cada plataforma possui os seus próprios termos, políticas e responsabilidades.</p><h3>Atualização da informação</h3><p>O Grupo JC poderá atualizar conteúdos, funcionalidades e condições de utilização sempre que necessário para refletir a evolução da organização.</p><p className="legal-note">Estes termos deverão ser revistos pela assessoria jurídica e complementados com a identificação legal do Grupo JC antes do lançamento público.</p></section><SiteFooter /></main>;
}
