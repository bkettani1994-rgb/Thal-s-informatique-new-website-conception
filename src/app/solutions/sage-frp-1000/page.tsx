import type { Metadata } from "next";
import SageFrp1000Client from "./SageFrp1000Client";

export const metadata: Metadata = {
  title: "Sage FRP 1000 Maroc | Gestion financière de groupe | Thalès Informatique",
  description:
    "Sage FRP 1000 Maroc : plateforme financière pour holdings et groupes. Consolidation automatique, reporting multi-entités et gestion de trésorerie. Thalès Informatique, intégrateur Sage au Maroc.",
  alternates: {
    canonical: "/solutions/sage-frp-1000",
  },
  openGraph: {
    title: "Sage FRP 1000 Maroc | Gestion financière de groupe | Thalès Informatique",
    description:
      "Sage FRP 1000 Maroc : plateforme financière pour holdings et groupes. Consolidation automatique, reporting multi-entités et gestion de trésorerie. Thalès Informatique, intégrateur Sage au Maroc.",
    url: "https://www.thales-informatique.ma/solutions/sage-frp-1000",
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage FRP 1000 Maroc | Gestion financière de groupe | Thalès Informatique",
    description:
      "Sage FRP 1000 Maroc : plateforme financière pour holdings et groupes. Consolidation automatique, reporting multi-entités et gestion de trésorerie. Thalès Informatique, intégrateur Sage au Maroc.",
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
        { "@type": "ListItem", position: 3, name: "Sage FRP 1000", item: "https://www.thales-informatique.ma/solutions/sage-frp-1000" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Sage FRP 1000",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, On-Premise",
      description:
        "Plateforme financière pour holdings et groupes au Maroc : consolidation automatique, reporting multi-entités et gestion de trésorerie.",
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
      <SageFrp1000Client />
    </>
  );
}
