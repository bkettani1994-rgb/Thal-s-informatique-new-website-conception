import type { Metadata } from "next";
import EloficashClient from "./EloficashClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Eloficash Maroc | Logiciel de recouvrement client",
  description:
    "Eloficash avec Thalès Informatique : gestion du risque client, suivi des encours, relances et recouvrement de créances pour les entreprises marocaines.",
  alternates: {
    canonical: "/solutions/eloficash",
  },
  openGraph: {
    title: "Eloficash Maroc | Logiciel de recouvrement client | Thalès Informatique",
    description:
      "Thalès Informatique accompagne les entreprises marocaines dans le déploiement d'Eloficash, une solution de gestion du risque client, des encours, des relances et du recouvrement de créances.",
    url: `${SITE_URL}/solutions/eloficash`,
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Eloficash Maroc déployé par Thalès Informatique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eloficash Maroc | Logiciel de recouvrement client | Thalès Informatique",
    description:
      "Découvrez Eloficash au Maroc avec Thalès Informatique : scoring client, suivi des encours, relances automatisées et pilotage du recouvrement.",
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
        { "@type": "ListItem", position: 3, name: "Eloficash", item: `${SITE_URL}/solutions/eloficash` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Eloficash",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web",
      url: `${SITE_URL}/solutions/eloficash`,
      description:
        "Eloficash est une solution de gestion du poste client et du recouvrement. Elle permet de suivre les encours, évaluer le risque client, organiser les relances, traiter les litiges et piloter les créances. Thalès Informatique accompagne son intégration et son déploiement au Maroc.",
      softwareVersion: "Eloficash",
      featureList: [
        "Scoring du risque client",
        "Suivi des encours clients",
        "Gestion des limites de crédit",
        "Relances automatisées",
        "Gestion des litiges",
        "Suivi des créances",
        "Tableaux de bord de recouvrement",
        "Intégration aux logiciels de gestion",
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
      <EloficashClient />
    </>
  );
}
