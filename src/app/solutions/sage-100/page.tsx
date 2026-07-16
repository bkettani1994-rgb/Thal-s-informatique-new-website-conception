import type { Metadata } from "next";
import Sage100Client from "./Sage100Client";

export const metadata: Metadata = {
  title: "Sage 100 Maroc | Logiciel de gestion PME | Thalès Informatique",
  description:
    "Sage 100 Maroc : ERP de gestion intégrée pour PME. Comptabilité, gestion commerciale, paie et stocks dans une solution cloud. Déployé par Thalès Informatique, partenaire Sage certifié.",
  alternates: {
    canonical: "/solutions/sage-100",
  },
  openGraph: {
    title: "Sage 100 Maroc | Logiciel de gestion PME | Thalès Informatique",
    description:
      "Sage 100 Maroc : ERP de gestion intégrée pour PME. Comptabilité, gestion commerciale, paie et stocks dans une solution cloud. Déployé par Thalès Informatique, partenaire Sage certifié.",
    url: "https://www.thales-informatique.ma/solutions/sage-100",
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage 100 Maroc | Logiciel de gestion PME | Thalès Informatique",
    description:
      "Sage 100 Maroc : ERP de gestion intégrée pour PME. Comptabilité, gestion commerciale, paie et stocks dans une solution cloud. Déployé par Thalès Informatique, partenaire Sage certifié.",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.thales-informatique.ma/" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.thales-informatique.ma/solutions" },
        { "@type": "ListItem", position: 3, name: "Sage 100", item: "https://www.thales-informatique.ma/solutions/sage-100" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Sage 100",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud",
      description:
        "ERP de gestion intégrée pour PME au Maroc : comptabilité, gestion commerciale, paie et stocks dans une solution cloud.",
      offers: {
        "@type": "Offer",
        seller: {
          "@type": "Organization",
          name: "Thalès Informatique",
          url: "https://www.thales-informatique.ma",
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
      <Sage100Client />
    </>
  );
}
