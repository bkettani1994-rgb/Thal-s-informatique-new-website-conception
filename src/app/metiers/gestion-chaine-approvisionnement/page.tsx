import type { Metadata } from "next";
import GestionChaineApprovisionnementClient from "./GestionChaineApprovisionnementClient";

const SITE_URL = "https://thales.ma";

export const metadata: Metadata = {
  title: "Gestion de la Chaîne d'Approvisionnement | ERP Sage",
  description:
    "Gestion de la chaîne d'approvisionnement : achats, stocks multi-sites, entrepôts et prévision de la demande au Maroc. Découvrez la solution Thalès Informatique.",
  alternates: {
    canonical: "/metiers/gestion-chaine-approvisionnement",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Gestion de la Chaîne d'Approvisionnement", item: `${SITE_URL}/metiers/gestion-chaine-approvisionnement` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestion de la Chaîne d'Approvisionnement — ERP Sage Maroc",
  description:
    "Module de gestion de la chaîne d'approvisionnement : achats, stocks multi-sites, entrepôts et prévision de la demande pour les entreprises marocaines.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Supply Chain et Approvisionnement",
  url: `${SITE_URL}/metiers/gestion-chaine-approvisionnement`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <GestionChaineApprovisionnementClient />
    </>
  );
}
