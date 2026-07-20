import type { Metadata } from "next";
import SageFrp1000Client from "./SageFrp1000Client";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Sage FRP 1000 Maroc | Gestion financière des groupes",
  description:
    "Intégrateur Sage FRP 1000 au Maroc pour groupes et holdings : comptabilité multi-sociétés, trésorerie, paiements et pilotage financier. Par Thalès Informatique.",
  alternates: {
    canonical: "/solutions/sage-frp-1000",
  },
  openGraph: {
    title: "Sage FRP 1000 Maroc | Gestion financière des groupes | Thalès Informatique",
    description:
      "Thalès Informatique, intégrateur Sage FRP 1000 au Maroc, accompagne les groupes, holdings et directions financières dans la comptabilité multi-sociétés, la trésorerie, les paiements et le pilotage financier.",
    url: `${SITE_URL}/solutions/sage-frp-1000`,
    siteName: "Thalès Informatique",
    locale: "fr_MA",
    type: "website",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Sage FRP 1000 Maroc intégré par Thalès Informatique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage FRP 1000 Maroc | Gestion financière des groupes | Thalès Informatique",
    description:
      "Découvrez Sage FRP 1000 au Maroc avec Thalès Informatique : comptabilité multi-sociétés, trésorerie, paiements et pilotage financier pour les groupes et holdings.",
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
        { "@type": "ListItem", position: 3, name: "Sage FRP 1000", item: `${SITE_URL}/solutions/sage-frp-1000` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Sage FRP 1000",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, On-Premise",
      url: `${SITE_URL}/solutions/sage-frp-1000`,
      description:
        "Sage FRP 1000 est une suite de gestion financière destinée aux groupes, holdings et organisations multi-sociétés. Elle couvre la comptabilité, les immobilisations, la trésorerie, les paiements, les achats, les ventes et les stocks. Thalès Informatique assure son intégration, son paramétrage, sa migration, sa formation et son support au Maroc.",
      softwareVersion: "Sage FRP 1000",
      featureList: [
        "Comptabilité multi-sociétés",
        "Gestion des immobilisations",
        "Gestion de trésorerie",
        "Rapprochement bancaire",
        "Gestion des paiements",
        "Gestion des achats",
        "Gestion des ventes",
        "Gestion des stocks",
        "Pilotage financier",
        "Reporting multi-entités",
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
      <SageFrp1000Client />
    </>
  );
}
