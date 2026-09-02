import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grupo JC - CMS",
};

export default function AdminRouteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
