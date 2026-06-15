import type { Metadata } from "next";
import IaErpCasUsageClient from "./IaErpCasUsageClient";

export const metadata: Metadata = {
  title: "Intelligence Artificielle et ERP : 5 cas d'usage pour les entreprises marocaines",
  description:
    "Découvrez comment l'intelligence artificielle s'intègre aux ERP Sage pour automatiser la saisie, anticiper la trésorerie, optimiser les stocks et améliorer la prise de décision.",
  alternates: {
    canonical: "/ressources/blog/ia-erp-cas-usage",
  },
};

export default function Page() {
  return <IaErpCasUsageClient />;
}
