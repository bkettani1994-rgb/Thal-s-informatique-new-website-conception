import type { Metadata } from "next";
import ErpClient from "./ErpClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "ERP Entreprise au Maroc | Sage X3 & Sage 100",
  description:
    "Logiciel ERP pour PME et ETI au Maroc : Sage X3 et Sage 100 pour une gestion intégrée, ERP Cloud et transformation digitale. +30 ans d'expertise. Demandez une démo.",
  alternates: { canonical: "/metiers/erp" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/erp`,
    siteName: "Thalès Informatique",
    title: "ERP Entreprise au Maroc | Sage X3 & Sage 100 | Thalès",
    description:
      "Logiciel ERP pour PME et ETI au Maroc : Sage X3 et Sage 100 pour une gestion intégrée, ERP Cloud et transformation digitale. +30 ans d'expertise.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - ERP Entreprise Maroc Sage X3" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Entreprise au Maroc | Sage X3 & Sage 100 | Thalès",
    description:
      "Logiciel ERP pour PME et ETI au Maroc : Sage X3 et Sage 100 pour une gestion intégrée. +30 ans d'expertise.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "ERP", item: `${SITE_URL}/metiers/erp` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ERP Entreprise au Maroc — Sage X3 & Sage 100",
  description:
    "Intégration et déploiement de logiciels ERP Sage X3 et Sage 100 pour les PME et ETI marocaines. Gestion intégrée des finances, achats, ventes, production, stocks et RH.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Intégration ERP",
  url: `${SITE_URL}/metiers/erp`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ErpClient />
    </>
  );
}
