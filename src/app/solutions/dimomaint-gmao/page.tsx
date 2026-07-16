import type { Metadata } from "next";
import DimomaintGmaoClient from "./DimomaintGmaoClient";

export const metadata: Metadata = {
  title: "GMAO Maroc | DimoMaint | Logiciel de maintenance industrielle | Thalès Informatique",
  description:
    "DimoMaint GMAO Maroc : logiciel de gestion de maintenance industrielle préventive et corrective. Optimisez la disponibilité de vos équipements avec Thalès Informatique.",
  alternates: {
    canonical: "/solutions/dimomaint-gmao",
  },
  openGraph: {
    title: "GMAO Maroc | DimoMaint | Logiciel de maintenance industrielle | Thalès Informatique",
    description:
      "DimoMaint GMAO Maroc : logiciel de gestion de maintenance industrielle préventive et corrective. Optimisez la disponibilité de vos équipements avec Thalès Informatique.",
    url: "https://www.thales-informatique.ma/solutions/dimomaint-gmao",
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMAO Maroc | DimoMaint | Logiciel de maintenance industrielle | Thalès Informatique",
    description:
      "DimoMaint GMAO Maroc : logiciel de gestion de maintenance industrielle préventive et corrective. Optimisez la disponibilité de vos équipements avec Thalès Informatique.",
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
        { "@type": "ListItem", position: 3, name: "DimoMaint GMAO", item: "https://www.thales-informatique.ma/solutions/dimomaint-gmao" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DimoMaint GMAO",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows, Cloud",
      description:
        "Logiciel de gestion de maintenance industrielle préventive et corrective au Maroc et en Afrique.",
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
      <DimomaintGmaoClient />
    </>
  );
}
