import type { Metadata } from "next";
import MetiersClient from "./MetiersClient";

const SITE_URL = "https://thales.ma";

export const metadata: Metadata = {
  title: "Nos Métiers ERP : Finance, RH, Production, CRM",
  description:
    "Modules métiers ERP au Maroc : comptabilité, paie, RH, CRM, production, trésorerie et conformité fiscale DGI. Découvrez les solutions Thalès Informatique.",
  alternates: {
    canonical: "/metiers",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Modules Métiers ERP — Thalès Informatique",
  description:
    "Modules métiers ERP pour les entreprises marocaines : comptabilité, finance, paie, ressources humaines, CRM, production, trésorerie et conformité fiscale.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Modules Métiers ERP",
  url: `${SITE_URL}/metiers`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <MetiersClient />
    </>
  );
}
