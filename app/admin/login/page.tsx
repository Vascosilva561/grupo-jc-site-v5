import Image from "next/image";
import { redirect } from "next/navigation";
import { LogIn } from "lucide-react";
import { chatGPTSignInPath, getChatGPTUser } from "../../chatgpt-auth";
export const dynamic = "force-dynamic";
export default async function CmsLogin(){if(await getChatGPTUser())redirect("/admin");return <main className="cms-login"><section><Image src="/brand/grupo-jc-black.svg" alt="Grupo JC" width={180} height={46} priority/><span>CONTENT MANAGER</span><h1>Gestão de conteúdo,<br/>com clareza.</h1><p>Aceda à área segura para gerir notícias, tags e equipa editorial.</p><a href={chatGPTSignInPath("/admin")}><LogIn size={18}/>Entrar no CMS</a></section></main>}
