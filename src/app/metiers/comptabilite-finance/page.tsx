import type { Metadata } from "next";
import ComptabiliteFinanceClient from "./ComptabiliteFinanceClient";

const SITE_URL = "https://thales.ma";

export const metadata: Metadata = {
  title: "Comptabilité & Finance : ERP conforme CGNC Maroc",
  description:
    "Comptabilité générale, analytique et budgétaire conforme au CGNC marocain : saisie automatisée, rapprochement bancaire et reporting. Demandez une démonstration.",
  alternates: {
    canonical: "/metiers/comptabilite-finance",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Comptabilité & Finance", item: `${SITE_URL}/metiers/comptabilite-finance` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Comptabilité & Finance — ERP conforme CGNC Maroc",
  description:
    "Logiciel de comptabilité générale, analytique et budgétaire conforme au CGNC marocain : saisie automatisée, rapprochement bancaire, clôtures et reporting financier.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Comptabilité et Finance",
  url: `${SITE_URL}/metiers/comptabilite-finance`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ComptabiliteFinanceClient />
    </>
  );
}
