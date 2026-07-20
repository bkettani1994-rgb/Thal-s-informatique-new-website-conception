import type { Metadata } from "next";
import FactorialClient from "./FactorialClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Factorial Maroc | Logiciel RH et SIRH Cloud",
  description:
    "Thalès Informatique accompagne les entreprises marocaines dans le déploiement de Factorial, un SIRH Cloud pour gérer les congés, le temps de travail, les dossiers salariés, le recrutement et les talents.",
  alternates: {
    canonical: "/solutions/factorial",
  },
  openGraph: {
    title: "Factorial Maroc | Logiciel RH et SIRH Cloud | Thalès Informatique",
    description:
      "Thalès Informatique accompagne les entreprises marocaines dans le déploiement de Factorial, un SIRH Cloud pour gérer les congés, le temps de travail, les dossiers salariés, le recrutement et les talents.",
    url: `${SITE_URL}/solutions/factorial`,
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Factorial Maroc déployé par Thalès Informatique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Factorial Maroc | Logiciel RH et SIRH Cloud | Thalès Informatique",
    description:
      "Découvrez Factorial au Maroc avec Thalès Informatique : un logiciel RH Cloud pour centraliser les congés, les plannings, les dossiers salariés, le recrutement et la gestion des talents.",
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
        { "@type": "ListItem", position: 3, name: "Factorial", item: `${SITE_URL}/solutions/factorial` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Factorial",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web, Mobile",
      url: `${SITE_URL}/solutions/factorial`,
      description:
        "Factorial est un logiciel SIRH Cloud destiné à la gestion des ressources humaines. Il centralise les congés, les absences, le temps de travail, les dossiers salariés, le recrutement, les formations et la gestion des talents. Thalès Informatique accompagne son déploiement et son adoption au Maroc.",
      softwareVersion: "Factorial",
      featureList: [
        "Gestion des congés et absences",
        "Gestion du temps de travail",
        "Dossiers salariés",
        "Gestion documentaire RH",
        "Recrutement",
        "Onboarding",
        "Formation",
        "Évaluation des performances",
        "Gestion des talents",
        "Reporting RH",
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
      <FactorialClient />
    </>
  );
}
