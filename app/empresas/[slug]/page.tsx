import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies } from "../../data";
import { CompanyDetailClient } from "./CompanyDetailClient";
import { JsonLd } from "../../components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grupojc.ao";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return companies.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    return {
      title: "Empresa",
      description: "Empresa do Grupo JC",
    };
  }

  const title = `${company.name} | Empresas Grupo JC`;
  const description = `${company.name} — ${company.tagline} ${company.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/empresas/${company.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/empresas/${company.slug}`,
      type: "website",
      images: [
        {
          url: company.logo.startsWith("http") ? company.logo : `${siteUrl}${company.logo}`,
          alt: company.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [company.logo.startsWith("http") ? company.logo : `${siteUrl}${company.logo}`],
    },
  };
}

export default async function CompanyDetailPage({ params }: Props) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    notFound();
  }

  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/empresas/${company.slug}#organization`,
    name: company.name,
    description: company.description,
    url: company.website || `${siteUrl}/empresas/${company.slug}`,
    logo: company.logo.startsWith("http") ? company.logo : `${siteUrl}${company.logo}`,
    parentOrganization: {
      "@type": "Organization",
      name: "Grupo JC",
      url: siteUrl,
    },
  };

  return (
    <>
      <JsonLd data={companySchema} />
      <CompanyDetailClient slug={slug} />
    </>
  );
}
