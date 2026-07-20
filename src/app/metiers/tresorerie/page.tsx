import type { Metadata } from "next";
import TresorerieClient from "./TresorerieClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Gestion de Trésorerie | Sage 100 | Thalès Informatique",
  description:
    "Pilotez votre trésorerie en temps réel avec Sage 100 : cash management, prévisions de trésorerie à 90 jours, rapprochement bancaire et recouvrement clients au Maroc.",
  alternates: { canonical: "/metiers/tresorerie" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/tresorerie`,
    siteName: "Thalès Informatique",
    title: "Gestion de Trésorerie | Sage 100 | Thalès Informatique",
    description:
      "Cash management, prévisions de trésorerie à 90 jours et rapprochement bancaire avec Sage 100 Trésorerie au Maroc.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Gestion de Trésorerie Sage 100 Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion de Trésorerie | Sage 100 | Thalès Informatique",
    description:
      "Cash management, prévisions de trésorerie et rapprochement bancaire avec Sage 100 au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Gestion de Trésorerie", item: `${SITE_URL}/metiers/tresorerie` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logiciel de Gestion de Trésorerie — Sage 100 Maroc",
  description:
    "Pilotage de la trésorerie en temps réel : soldes consolidés, prévisions de cash-flow à 30/60/90 jours, rapprochement bancaire automatique et recouvrement clients.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Logiciel de Trésorerie",
  url: `${SITE_URL}/metiers/tresorerie`,
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <TresorerieClient />
    </>
  );
}
