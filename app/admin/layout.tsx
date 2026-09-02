import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Grupo JC - CMS",
    template: "%s",
  },
};

export default function AdminRouteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
