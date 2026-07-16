import type { Metadata } from "next";
import ReportingClient from "./ReportingClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Business Intelligence & Reporting ERP | Thalès",
  description:
    "Tableaux de bord Business Intelligence et KPI temps réel connectés à votre ERP : reporting financier, RH, production et commercial. Décisionnel pour dirigeants au Maroc.",
  alternates: { canonical: "/metiers/reporting" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/reporting`,
    siteName: "Thalès Informatique",
    title: "Business Intelligence & Reporting ERP | Thalès",
    description:
      "Tableaux de bord BI et KPI temps réel : reporting financier, RH, production et commercial pour dirigeants au Maroc.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Business Intelligence Reporting ERP Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Intelligence & Reporting ERP | Thalès",
    description:
      "Tableaux de bord BI et KPI temps réel pour le reporting décisionnel au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Reporting & Business Intelligence", item: `${SITE_URL}/metiers/reporting` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Intelligence & Reporting ERP — Maroc",
  description:
    "Dashboards interactifs et KPIs personnalisables pour piloter finance, RH, production et commercial en temps réel, avec exports Excel/PDF et alertes automatiques.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Business Intelligence et Reporting",
  url: `${SITE_URL}/metiers/reporting`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce que la Business Intelligence (BI) dans un ERP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Business Intelligence (BI) désigne l'ensemble des outils qui transforment les données brutes de l'ERP en informations décisionnelles visuelles : tableaux de bord, graphiques, KPI et rapports analytiques. Elle permet aux dirigeants et managers de piloter leur activité en temps réel sans avoir à extraire manuellement des données.",
      },
    },
    {
      "@type": "Question",
      name: "Quels KPI peut-on suivre avec les tableaux de bord ERP ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos tableaux de bord couvrent tous les domaines : Finance (CA, marge, trésorerie, DSO, DPO), RH (masse salariale, absentéisme, turnover), Production (taux de rendement synthétique, rebuts, délais) et Commercial (pipeline, taux de conversion, performance commerciale). Chaque KPI est personnalisable selon vos enjeux métier.",
      },
    },
    {
      "@type": "Question",
      name: "Les rapports peuvent-ils être exportés en Excel ou PDF ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, tous les rapports et tableaux de bord peuvent être exportés en Excel, PDF ou CSV en un clic. Des envois automatiques par email peuvent être programmés (quotidien, hebdomadaire, mensuel) pour que les décideurs reçoivent leur reporting sans intervention manuelle.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on créer ses propres tableaux de bord sans compétences techniques ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre solution BI propose un éditeur de tableaux de bord par glisser-déposer qui ne nécessite aucune compétence en programmation. Vous sélectionnez vos indicateurs, choisissez la représentation graphique (histogramme, camembert, courbe, jauge) et organisez votre dashboard en quelques minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Les données de reporting sont-elles mises à jour en temps réel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nos tableaux de bord sont connectés en temps réel à l'ERP. Dès qu'une transaction est enregistrée (facture, paiement, bon de livraison, pointage RH), les indicateurs sont mis à jour instantanément. Il n'est plus nécessaire d'attendre la clôture mensuelle pour disposer d'une vision précise de la performance.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on configurer des alertes automatiques sur des indicateurs clés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre système d'alertes envoie automatiquement des notifications par email ou SMS lorsqu'un KPI dépasse un seuil critique : trésorerie en dessous d'un plancher, stock en rupture imminente, retard de production ou dépassement de budget. Ces alertes permettent d'agir avant que les situations ne se dégradent.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ReportingClient />
    </>
  );
}
