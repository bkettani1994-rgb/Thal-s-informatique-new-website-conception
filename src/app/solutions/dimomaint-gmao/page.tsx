import type { Metadata } from "next";
import DimomaintGmaoClient from "./DimomaintGmaoClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "DimoMaint GMAO Maroc | Logiciel de maintenance",
  description:
    "Thalès Informatique accompagne les entreprises marocaines dans le déploiement de DimoMaint, un logiciel GMAO pour gérer les équipements, les interventions, la maintenance préventive, les pannes et les pièces de rechange.",
  alternates: {
    canonical: "/solutions/dimomaint-gmao",
  },
  openGraph: {
    title: "DimoMaint GMAO Maroc | Logiciel de maintenance | Thalès Informatique",
    description:
      "Thalès Informatique accompagne les entreprises marocaines dans le déploiement de DimoMaint, un logiciel GMAO pour gérer les équipements, les interventions, la maintenance préventive, les pannes et les pièces de rechange.",
    url: `${SITE_URL}/solutions/dimomaint-gmao`,
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "DimoMaint GMAO Maroc déployé par Thalès Informatique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DimoMaint GMAO Maroc | Logiciel de maintenance | Thalès Informatique",
    description:
      "Découvrez DimoMaint GMAO au Maroc avec Thalès Informatique : gestion des équipements, ordres de travail, maintenance préventive et corrective.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
        { "@type": "ListItem", position: 3, name: "DimoMaint GMAO", item: `${SITE_URL}/solutions/dimomaint-gmao` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DimoMaint GMAO",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web, Windows",
      url: `${SITE_URL}/solutions/dimomaint-gmao`,
      description:
        "DimoMaint est un logiciel de gestion de maintenance assistée par ordinateur permettant de centraliser les équipements, les ordres de travail, les interventions préventives et correctives, les pièces de rechange et les indicateurs de maintenance. Thalès Informatique accompagne son déploiement au Maroc.",
      softwareVersion: "DimoMaint",
      featureList: [
        "Gestion des équipements et des actifs",
        "Gestion des ordres de travail",
        "Maintenance préventive",
        "Maintenance corrective",
        "Gestion des pannes",
        "Gestion des pièces de rechange",
        "Planification des interventions",
        "Historique de maintenance",
        "Indicateurs MTBF et MTTR",
        "Tableaux de bord de maintenance",
      ],
      offers: {
        "@type": "Offer",
        seller: {
          "@type": "Organization",
          name: "Thalès Informatique",
          url: SITE_URL,
        },
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DimomaintGmaoClient />
    </>
  );
}
