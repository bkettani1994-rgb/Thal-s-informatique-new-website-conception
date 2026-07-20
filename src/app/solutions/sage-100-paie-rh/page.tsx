import type { Metadata } from "next";
import Sage100PaieRhClient from "./Sage100PaieRhClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Sage 100 Paie & RH Maroc | Logiciel de paie",
  description:
    "Thalès Informatique accompagne les entreprises marocaines dans le déploiement de Sage 100 Paie & RH pour automatiser la paie, gérer les ressources humaines et produire les déclarations sociales conformément à la réglementation marocaine.",
  alternates: {
    canonical: "/solutions/sage-100-paie-rh",
  },
  openGraph: {
    title: "Sage 100 Paie & RH Maroc | Logiciel de paie | Thalès Informatique",
    description:
      "Thalès Informatique accompagne les entreprises marocaines dans le déploiement de Sage 100 Paie & RH pour automatiser la paie, gérer les ressources humaines et produire les déclarations sociales conformément à la réglementation marocaine.",
    url: `${SITE_URL}/solutions/sage-100-paie-rh`,
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Sage 100 Paie & RH Maroc déployé par Thalès Informatique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage 100 Paie & RH Maroc | Logiciel de paie | Thalès Informatique",
    description:
      "Découvrez Sage 100 Paie & RH avec Thalès Informatique : logiciel de paie, gestion RH, déclarations sociales et conformité réglementaire.",
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
        { "@type": "ListItem", position: 3, name: "Sage 100 Paie & RH", item: `${SITE_URL}/solutions/sage-100-paie-rh` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Sage 100 Paie & RH",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Web",
      url: `${SITE_URL}/solutions/sage-100-paie-rh`,
      description:
        "Logiciel de paie conforme CNSS, IR et AMO pour les entreprises au Maroc. Automatisation des bulletins et déclarations sociales.",
      softwareVersion: "Sage 100",
      featureList: [
        "Gestion de la paie",
        "Bulletins de salaire",
        "Gestion RH",
        "Déclarations CNSS",
        "Déclarations IR",
        "Déclarations AMO",
        "Gestion des contrats",
        "Congés et absences",
        "Dossiers salariés",
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
      <Sage100PaieRhClient />
    </>
  );
}
