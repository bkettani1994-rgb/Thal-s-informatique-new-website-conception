import type { Metadata } from "next";
import CrmClient from "./CrmClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Logiciel CRM | Gestion Relation Client | Thalès",
  description:
    "CRM entreprise connecté à votre ERP Sage : pipeline commercial, gestion des ventes, SAV et tableaux de bord relation client. CRM PME au Maroc. Demandez une démo.",
  alternates: { canonical: "/metiers/crm" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/crm`,
    siteName: "Thalès Informatique",
    title: "Logiciel CRM | Gestion Relation Client | Thalès",
    description:
      "CRM commercial connecté à votre ERP Sage : pipeline, ventes, SAV et tableaux de bord relation client au Maroc.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Logiciel CRM Gestion Relation Client Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logiciel CRM | Gestion Relation Client | Thalès",
    description:
      "CRM commercial connecté à votre ERP Sage : pipeline, ventes et SAV au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Logiciel CRM", item: `${SITE_URL}/metiers/crm` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logiciel CRM — Gestion de la Relation Client au Maroc",
  description:
    "CRM intégré à l'ERP Sage pour les PME et ETI marocaines : gestion des opportunités commerciales, pipeline de vente, service client et tableaux de bord CRM.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Logiciel CRM",
  url: `${SITE_URL}/metiers/crm`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <CrmClient />
    </>
  );
}
