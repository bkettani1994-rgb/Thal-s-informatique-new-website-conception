import type { Metadata } from "next";
import Sage100PaieRhClient from "./Sage100PaieRhClient";

export const metadata: Metadata = {
  title: "Logiciel de paie Maroc | Sage 100 Paie & RH | Thalès Informatique",
  description:
    "Sage 100 Paie & RH : logiciel de paie conforme CNSS, IR et AMO pour les entreprises au Maroc. Automatisez vos bulletins et déclarations avec Thalès Informatique.",
  alternates: {
    canonical: "/solutions/sage-100-paie-rh",
  },
  openGraph: {
    title: "Logiciel de paie Maroc | Sage 100 Paie & RH | Thalès Informatique",
    description:
      "Sage 100 Paie & RH : logiciel de paie conforme CNSS, IR et AMO pour les entreprises au Maroc. Automatisez vos bulletins et déclarations avec Thalès Informatique.",
    url: "https://www.thales-informatique.ma/solutions/sage-100-paie-rh",
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logiciel de paie Maroc | Sage 100 Paie & RH | Thalès Informatique",
    description:
      "Sage 100 Paie & RH : logiciel de paie conforme CNSS, IR et AMO pour les entreprises au Maroc. Automatisez vos bulletins et déclarations avec Thalès Informatique.",
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
        { "@type": "ListItem", position: 3, name: "Sage 100 Paie & RH", item: "https://www.thales-informatique.ma/solutions/sage-100-paie-rh" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Sage 100 Paie & RH",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud",
      description:
        "Logiciel de paie conforme CNSS, IR et AMO pour les entreprises au Maroc. Automatisation des bulletins et déclarations sociales.",
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
      <Sage100PaieRhClient />
    </>
  );
}
