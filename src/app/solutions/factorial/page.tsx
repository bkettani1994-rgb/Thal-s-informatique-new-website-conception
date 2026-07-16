import type { Metadata } from "next";
import FactorialClient from "./FactorialClient";

export const metadata: Metadata = {
  title: "Logiciel RH Maroc | Factorial SIRH | Thalès Informatique",
  description:
    "Factorial, le SIRH Cloud pour gérer vos RH au Maroc : congés, absences, paie, recrutement et gestion du personnel. Déployé et supporté par Thalès Informatique.",
  alternates: {
    canonical: "/solutions/factorial",
  },
  openGraph: {
    title: "Logiciel RH Maroc | Factorial SIRH | Thalès Informatique",
    description:
      "Factorial, le SIRH Cloud pour gérer vos RH au Maroc : congés, absences, paie, recrutement et gestion du personnel. Déployé et supporté par Thalès Informatique.",
    url: "https://www.thales-informatique.ma/solutions/factorial",
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logiciel RH Maroc | Factorial SIRH | Thalès Informatique",
    description:
      "Factorial, le SIRH Cloud pour gérer vos RH au Maroc : congés, absences, paie, recrutement et gestion du personnel. Déployé et supporté par Thalès Informatique.",
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
        { "@type": "ListItem", position: 3, name: "Factorial", item: "https://www.thales-informatique.ma/solutions/factorial" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Factorial",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud",
      description:
        "SIRH Cloud pour la gestion RH au Maroc : congés, absences, paie, recrutement et gestion du personnel.",
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
      <FactorialClient />
    </>
  );
}
