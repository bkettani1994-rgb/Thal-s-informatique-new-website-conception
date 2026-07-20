import type { Metadata } from "next";
import SageEspaceEmployesClient from "./SageEspaceEmployesClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Sage Espace Employés Maroc | Portail RH | Thalès Informatique",
  description:
    "Thalès Informatique accompagne les entreprises marocaines dans le déploiement de Sage Espace Employés, un portail RH permettant de gérer les congés, absences, dossiers salariés, notes de frais et demandes collaborateurs.",
  alternates: {
    canonical: "/solutions/sage-espace-employes",
  },
  openGraph: {
    title: "Sage Espace Employés Maroc | Portail RH | Thalès Informatique",
    description:
      "Thalès Informatique accompagne les entreprises marocaines dans le déploiement de Sage Espace Employés, un portail RH permettant de gérer les congés, absences, dossiers salariés, notes de frais et demandes collaborateurs.",
    url: `${SITE_URL}/solutions/sage-espace-employes`,
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 800,
        height: 800,
        alt: "Sage Espace Employés Maroc déployé par Thalès Informatique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage Espace Employés Maroc | Portail RH | Thalès Informatique",
    description:
      "Découvrez Sage Espace Employés avec Thalès Informatique : portail RH, congés, absences, dossiers salariés, notes de frais et demandes collaborateurs.",
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
        { "@type": "ListItem", position: 3, name: "Sage Espace Employés", item: `${SITE_URL}/solutions/sage-espace-employes` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Sage Espace Employés",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web, Mobile",
      url: `${SITE_URL}/solutions/sage-espace-employes`,
      softwareVersion: "Sage Espace Employés",
      description:
        "Sage Espace Employés est un portail RH self-service permettant aux collaborateurs et aux managers de gérer les congés, absences, dossiers salariés, notes de frais, entretiens et demandes administratives. Thalès Informatique accompagne son déploiement au Maroc.",
      featureList: [
        "Gestion des congés et absences",
        "Portail collaborateur",
        "Portail manager",
        "Planning partagé",
        "Dossiers salariés",
        "Notes de frais",
        "Entretiens et objectifs",
        "Circuits de validation",
        "Accès mobile",
        "Intégration avec Sage 100 Paie & RH",
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
      <SageEspaceEmployesClient />
    </>
  );
}
