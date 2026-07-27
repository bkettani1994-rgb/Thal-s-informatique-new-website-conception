import type { Metadata } from "next";
import ComptabiliteFinanceClient from "./ComptabiliteFinanceClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";
const TITLE = "Logiciel comptabilité Maroc | Sage 100 Comptabilité | Thalès Informatique";
const DESCRIPTION =
  "Logiciel comptabilité Maroc conforme au CGNC avec Sage 100 Comptabilité. Thalès Informatique accompagne les entreprises marocaines dans son déploiement.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "logiciel comptabilité maroc",
    "logiciel comptabilite maroc",
    "logiciel de comptabilité maroc",
    "logiciel comptable maroc",
    "logiciel de comptabilité au maroc",
    "logiciel de gestion maroc",
    "gestion commerciale maroc",
    "Sage 100 Comptabilité Maroc",
    "logiciel Sage comptabilité Maroc",
    "Sage comptabilité Maroc",
    "logiciel Sage Maroc",
  ],
  alternates: {
    canonical: "/metiers/comptabilite-finance",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/comptabilite-finance`,
    siteName: "Thalès Informatique",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique — Logiciel comptabilité Maroc, Sage 100 Comptabilité" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Comptabilité & Finance", item: `${SITE_URL}/metiers/comptabilite-finance` },
  ],
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sage 100 Comptabilité",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud, Web, Windows",
  url: `${SITE_URL}/metiers/comptabilite-finance`,
  description:
    "Sage 100 Comptabilité est un logiciel comptabilité Maroc et logiciel de gestion Maroc conforme au CGNC. Sage 100 Comptabilité Maroc est déployé par Thalès Informatique auprès des entreprises marocaines.",
  featureList: [
    "Comptabilité générale",
    "Comptabilité analytique",
    "Gestion financière",
    "Gestion des immobilisations",
    "Gestion de trésorerie",
    "États financiers",
    "Déclarations fiscales",
    "Suivi des règlements",
    "Gestion commerciale",
    "Tableaux de bord financiers",
  ],
  seller: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <ComptabiliteFinanceClient />
    </>
  );
}
