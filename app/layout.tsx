import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Grupo JC — Potencial que gera progresso", template: "%s | Grupo JC" },
  description: "O Grupo JC reúne empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades em Angola.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-AO"><body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body></html>;
}
