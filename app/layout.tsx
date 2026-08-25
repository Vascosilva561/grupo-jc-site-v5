import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Poppins } from "next/font/google";
import { MotionController } from "./components/MotionController";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Grupo JC — Potencial que gera progresso", template: "%s | Grupo JC" },
  description: "O Grupo JC reúne empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades em Angola.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fontStyles = {
    "--display": poppins.style.fontFamily,
    "--body": poppins.style.fontFamily,
  } as CSSProperties;

  return (
    <html lang="pt-AO">
      <body className={poppins.className} style={fontStyles}>
        <MotionController />
        {children}
      </body>
    </html>
  );
}
