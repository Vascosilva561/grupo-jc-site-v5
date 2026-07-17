import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacyPage() {
  return <main><PageHero eyebrow="Informação legal" title="Política de Privacidade." description="Princípios aplicáveis ao tratamento de dados pessoais nos canais digitais do Grupo JC." /><section className="legal-content shell"><h2>Uma experiência construída com respeito pelos seus dados.</h2><p>O website recolhe apenas os dados que o utilizador decide fornecer através dos formulários disponíveis, com a finalidade de responder a pedidos de contacto, parcerias, oportunidades ou informações institucionais.</p><h3>Dados tratados</h3><p>Podem ser tratados nome, empresa, e-mail, telefone, assunto e mensagem. A versão atual do formulário é demonstrativa e não envia dados para serviços externos.</p><h3>Finalidade e conservação</h3><p>Quando o canal institucional for ativado, os dados serão utilizados exclusivamente para dar seguimento ao pedido apresentado e conservados pelo período necessário ao respetivo acompanhamento.</p><h3>Direitos do titular</h3><p>O titular poderá solicitar acesso, correção ou eliminação dos seus dados através dos contactos institucionais que serão publicados nesta página.</p><p className="legal-note">Esta política deverá ser validada e complementada com os dados legais e contactos oficiais do Grupo JC antes do lançamento público.</p></section><SiteFooter /></main>;
}
