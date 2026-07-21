import type { Metadata } from "next";
import ErpCloudVsOnPremiseClient from "./ErpCloudVsOnPremiseClient";

export const metadata: Metadata = {
  title: "ERP Cloud vs On-Premise : que choisir en 2026 ?",
  description:
    "Cloud, on-premise ou hybride : comparatif pour choisir l'architecture ERP adaptée à votre entreprise en 2026. Découvrez les conseils de Thalès Informatique.",
  alternates: {
    canonical: "/ressources/blog/erp-cloud-vs-on-premise",
  },
};

export default function Page() {
  return <ErpCloudVsOnPremiseClient />;
}
