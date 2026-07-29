import type { Metadata } from "next";
import FaqClient from "./FaqClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";
const TITLE = "FAQ ERP Maroc | Coût, projet, migration et solutions Sage";
const DESCRIPTION =
  "Consultez notre FAQ ERP Maroc : coût d'un ERP, étapes du projet, migration des données, choix d'un intégrateur et solutions Sage X3 et Sage 100.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/ressources/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/ressources/faq`,
    siteName: "Thalès Informatique",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "FAQ ERP Maroc de Thalès Informatique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "ERP au Maroc, coût, migration des données, Sage X3 et Sage 100 : les réponses à vos questions dans la FAQ Thalès Informatique.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/ressources/faq` },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FaqClient />
    </>
  );
}
