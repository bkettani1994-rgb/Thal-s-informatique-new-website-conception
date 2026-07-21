import type { Metadata } from "next";
import IaErpCasUsageClient from "./IaErpCasUsageClient";

export const metadata: Metadata = {
  title: "Intelligence Artificielle et ERP : 5 cas d'usage pour les entreprises en Afrique et à l'international",
  description:
    "Comment l'IA s'intègre aux ERP Sage : automatisation de la saisie, prévision de trésorerie, stocks et aide à la décision. Découvrez 5 cas d'usage concrets.",
  alternates: {
    canonical: "/ressources/blog/ia-erp-cas-usage",
  },
};

export default function Page() {
  return <IaErpCasUsageClient />;
}
