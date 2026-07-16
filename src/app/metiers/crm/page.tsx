import type { Metadata } from "next";
import CrmClient from "./CrmClient";

const SITE_URL = "https://thales.ma";
const OG_IMAGE = "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780666585/thales_logo_bleu_petit_bjyxww.png";

export const metadata: Metadata = {
  title: "Logiciel CRM | Gestion Relation Client | Thalès",
  description:
    "CRM entreprise connecté à votre ERP Sage : pipeline commercial, gestion des ventes, SAV et tableaux de bord relation client. CRM PME au Maroc. Demandez une démo.",
  alternates: { canonical: "/metiers/crm" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: `${SITE_URL}/metiers/crm`,
    siteName: "Thalès Informatique",
    title: "Logiciel CRM | Gestion Relation Client | Thalès",
    description:
      "CRM commercial connecté à votre ERP Sage : pipeline, ventes, SAV et tableaux de bord relation client au Maroc.",
    images: [{ url: OG_IMAGE, width: 800, height: 800, alt: "Thalès Informatique - Logiciel CRM Gestion Relation Client Maroc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logiciel CRM | Gestion Relation Client | Thalès",
    description:
      "CRM commercial connecté à votre ERP Sage : pipeline, ventes et SAV au Maroc.",
    images: [OG_IMAGE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Métiers", item: `${SITE_URL}/metiers` },
    { "@type": "ListItem", position: 3, name: "Logiciel CRM", item: `${SITE_URL}/metiers/crm` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Logiciel CRM — Gestion de la Relation Client au Maroc",
  description:
    "CRM intégré à l'ERP Sage pour les PME et ETI marocaines : gestion des opportunités commerciales, pipeline de vente, service client et tableaux de bord CRM.",
  provider: {
    "@type": "Organization",
    name: "Thalès Informatique",
    url: SITE_URL,
  },
  areaServed: "MA",
  serviceType: "Logiciel CRM",
  url: `${SITE_URL}/metiers/crm`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un logiciel CRM et à quoi sert-il ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un logiciel CRM (Customer Relationship Management) centralise toutes les informations liées à vos clients et prospects : historique des contacts, opportunités commerciales, devis, commandes et réclamations. Il permet aux équipes commerciales de prioriser leurs actions, de suivre le pipeline de vente et d'améliorer la satisfaction client.",
      },
    },
    {
      "@type": "Question",
      name: "Quels logiciels CRM Sage propose Thalès Informatique au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thalès Informatique propose Sage 100 Force de Vente pour la gestion commerciale (pipeline, devis, commandes) et Sage 100 Service Client pour la gestion du SAV (tickets, interventions, contrats de maintenance). Ces deux solutions CRM sont nativement intégrées à la comptabilité Sage 100.",
      },
    },
    {
      "@type": "Question",
      name: "Comment le CRM améliore-t-il la productivité des commerciaux ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un CRM bien configuré centralise toutes les informations client en un seul endroit, élimine les oublis de relance grâce aux rappels automatiques, génère des devis professionnels en quelques minutes et fournit des tableaux de bord en temps réel sur les performances de chaque commercial. Les équipes gagnent en moyenne 2h par jour sur les tâches administratives.",
      },
    },
    {
      "@type": "Question",
      name: "Le CRM est-il connecté à l'ERP pour éviter la double saisie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, les CRM Sage 100 sont totalement intégrés à l'ERP Sage 100. Un devis validé dans le CRM se transforme automatiquement en commande dans la gestion commerciale, sans aucune ressaisie. Les stocks, prix tarifaires et conditions clients sont synchronisés en temps réel entre le CRM et l'ERP.",
      },
    },
    {
      "@type": "Question",
      name: "Un CRM PME est-il adapté aux entreprises marocaines ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Sage 100 Force de Vente est spécialement conçu pour les PME avec une interface intuitive qui ne nécessite pas de formation longue. Il s'adapte aux processus commerciaux marocains (devis en dirhams, gestion de la TVA, conditions de paiement locales) et peut être déployé rapidement par les équipes de Thalès Informatique.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on accéder au CRM depuis un smartphone en déplacement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Sage 100 Force de Vente propose une application mobile qui permet aux commerciaux d'accéder à leurs clients, opportunités et devis depuis leur smartphone, même sans connexion internet. Les données sont synchronisées automatiquement dès que la connexion est rétablie.",
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
      <CrmClient />
    </>
  );
}
