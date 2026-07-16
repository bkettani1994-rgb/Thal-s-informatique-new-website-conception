import type { Metadata } from "next";
import EloficashClient from "./EloficashClient";

export const metadata: Metadata = {
  title: "Gestion de trésorerie Maroc | Eloficash | Recouvrement | Thalès Informatique",
  description:
    "Eloficash : logiciel de gestion de trésorerie, recouvrement et gestion des encours clients au Maroc. Scoring client, relances automatiques, connecté à Sage. Thalès Informatique.",
  alternates: {
    canonical: "/solutions/eloficash",
  },
  openGraph: {
    title: "Gestion de trésorerie Maroc | Eloficash | Recouvrement | Thalès Informatique",
    description:
      "Eloficash : logiciel de gestion de trésorerie, recouvrement et gestion des encours clients au Maroc. Scoring client, relances automatiques, connecté à Sage. Thalès Informatique.",
    url: "https://www.thales-informatique.ma/solutions/eloficash",
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestion de trésorerie Maroc | Eloficash | Recouvrement | Thalès Informatique",
    description:
      "Eloficash : logiciel de gestion de trésorerie, recouvrement et gestion des encours clients au Maroc. Scoring client, relances automatiques, connecté à Sage. Thalès Informatique.",
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
        { "@type": "ListItem", position: 3, name: "Eloficash", item: "https://www.thales-informatique.ma/solutions/eloficash" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Eloficash",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud",
      description:
        "Logiciel de gestion de trésorerie, recouvrement et gestion des encours clients pour les entreprises au Maroc et en Afrique.",
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
      <EloficashClient />
    </>
  );
}
