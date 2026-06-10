import type { Metadata } from "next";
import ErpCloudVsOnPremiseClient from "./ErpCloudVsOnPremiseClient";

export const metadata: Metadata = {
  title: "ERP Cloud vs On-Premise : que choisir en 2026 ?",
  description:
    "Cloud, on-premise ou hybride : comparatif complet pour choisir l'architecture ERP adaptée aux entreprises marocaines en 2026, avec les recommandations de Thalès Informatique.",
  alternates: {
    canonical: "/ressources/blog/erp-cloud-vs-on-premise",
  },
};

export default function Page() {
  return <ErpCloudVsOnPremiseClient />;
}
