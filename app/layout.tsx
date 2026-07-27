import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { DM_Sans, Poppins } from "next/font/google";
import { MotionController } from "./components/MotionController";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Grupo JC — Potencial que gera progresso", template: "%s | Grupo JC" },
  description: "O Grupo JC reúne empresas, tecnologia e talento para criar soluções, desenvolver negócios e gerar oportunidades em Angola.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fontStyles = {
    "--display": poppins.style.fontFamily,
    "--body": dmSans.style.fontFamily,
  } as CSSProperties;

  return (
    <html lang="pt-AO">
      <body className={dmSans.className} style={fontStyles}>
        <MotionController />
        {children}
      </body>
    </html>
  );
}
