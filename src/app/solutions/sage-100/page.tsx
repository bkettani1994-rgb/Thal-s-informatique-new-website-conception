import type { Metadata } from "next";
import Sage100Client from "./Sage100Client";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Sage 100 Maroc | Logiciel de gestion PME | Thalès Informatique",
  description:
    "Thalès Informatique, intégrateur Sage 100 au Maroc, accompagne les PME dans le déploiement de leurs solutions de comptabilité, gestion commerciale, stocks, trésorerie et gestion d'entreprise.",
  alternates: {
    canonical: "/solutions/sage-100",
  },
  openGraph: {
    title: "Sage 100 Maroc | Logiciel de gestion PME | Thalès Informatique",
    description:
      "Thalès Informatique, intégrateur Sage 100 au Maroc, accompagne les PME dans le déploiement de leurs solutions de comptabilité, gestion commerciale, stocks, trésorerie et gestion d'entreprise.",
    url: `${SITE_URL}/solutions/sage-100`,
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Sage 100 Maroc intégré par Thalès Informatique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage 100 Maroc | Logiciel de gestion PME | Thalès Informatique",
    description:
      "Découvrez Sage 100 au Maroc avec Thalès Informatique : comptabilité, gestion commerciale, stocks et trésorerie pour les PME.",
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
        { "@type": "ListItem", position: 3, name: "Sage 100", item: `${SITE_URL}/solutions/sage-100` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Sage 100",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web",
      url: `${SITE_URL}/solutions/sage-100`,
      description:
        "Sage 100 est un logiciel de gestion destiné aux PME. Il couvre la comptabilité, la gestion commerciale, les stocks, la trésorerie et les moyens de paiement. Thalès Informatique assure son intégration, son paramétrage, sa migration, sa formation et son support au Maroc.",
      softwareVersion: "Sage 100",
      featureList: [
        "Comptabilité",
        "Gestion commerciale",
        "Gestion des stocks",
        "Trésorerie",
        "Moyens de paiement",
        "Immobilisations",
        "Facturation",
        "Reporting",
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
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce que Sage 100 et à quelles entreprises s'adresse-t-il ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sage 100 est un logiciel de gestion destiné principalement aux PME. Il couvre notamment la comptabilité, la gestion commerciale, les stocks, la trésorerie et les moyens de paiement au sein d'un environnement intégré.",
          },
        },
        {
          "@type": "Question",
          name: "Combien coûte Sage 100 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le tarif dépend du nombre d'utilisateurs, des modules choisis (Comptabilité, Gestion Commerciale, Entreprise) et du mode d'hébergement. Contactez nos experts Thalès Informatique pour un chiffrage adapté à votre activité.",
          },
        },
        {
          "@type": "Question",
          name: "Comment installer Sage 100 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Thalès Informatique prend en charge l'installation, le paramétrage et la migration de vos données existantes. La durée du déploiement dépend du périmètre fonctionnel, du nombre d'utilisateurs, des données à migrer et des besoins de paramétrage, avec une formation de vos équipes incluse.",
          },
        },
        {
          "@type": "Question",
          name: "Quels sont les modules qui peuvent compléter Sage 100 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sage 100 peut être enrichi par des modules complémentaires : automatisation comptable, reporting décisionnel, gestion de trésorerie ou gestion des règlements fournisseurs.",
          },
        },
        {
          "@type": "Question",
          name: "Quels sont les avantages du logiciel Sage 100 dans le cloud Microsoft Azure ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hébergé sur Microsoft Azure, Sage 100 est accessible en permanence, avec des sauvegardes automatiques, une sécurité renforcée et aucune infrastructure serveur à gérer en interne.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Sage100Client />
    </>
  );
}
