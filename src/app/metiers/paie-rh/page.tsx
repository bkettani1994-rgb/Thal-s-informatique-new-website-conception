import type { Metadata } from "next";
import PaieRhClient from "./PaieRhClient";

const SITE_URL = "https://thales.ma";

export const metadata: Metadata = {
  title: "Paie & RH : bulletins, congés et carrières au Maroc et en Afrique",
  description:
    "Gestion paie et RH au Maroc : bulletins, congés, dossiers employés et déclarations CNSS, AMO et CIMR conformes au Code du Travail. Demandez une démo.",
  alternates: {
    canonical: "/metiers/paie-rh",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Paie & RH", item: `${SITE_URL}/metiers/paie-rh` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paie & RH — Gestion du personnel Maroc",
  description:
    "Gestion complète de la paie et des ressources humaines : bulletins de paie, congés, dossiers employés et déclarations CNSS, AMO et CIMR conformes au Code du Travail marocain.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Paie et Ressources Humaines",
  url: `${SITE_URL}/metiers/paie-rh`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PaieRhClient />
    </>
  );
}
