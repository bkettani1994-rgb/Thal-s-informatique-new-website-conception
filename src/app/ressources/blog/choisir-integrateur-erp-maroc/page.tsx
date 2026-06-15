import type { Metadata } from "next";
import ChoisirIntegrateurErpMarocClient from "./ChoisirIntegrateurErpMarocClient";

export const metadata: Metadata = {
  title: "Comment choisir son intégrateur ERP au Maroc : 7 critères essentiels",
  description:
    "Certifications Sage, méthodologie, support local, références sectorielles : les 7 critères pour bien choisir votre partenaire intégrateur ERP au Maroc.",
  alternates: {
    canonical: "/ressources/blog/choisir-integrateur-erp-maroc",
  },
};

export default function Page() {
  return <ChoisirIntegrateurErpMarocClient />;
}
