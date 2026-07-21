import type { Metadata } from "next";
import ChoisirIntegrateurErpMarocClient from "./ChoisirIntegrateurErpMarocClient";

export const metadata: Metadata = {
  title: "Comment choisir son intégrateur ERP au Maroc et en Afrique : 7 critères essentiels",
  description:
    "Certifications Sage, méthodologie, support local, références : les 7 critères pour choisir votre intégrateur ERP au Maroc. Découvrez nos conseils.",
  alternates: {
    canonical: "/ressources/blog/choisir-integrateur-erp-maroc",
  },
};

export default function Page() {
  return <ChoisirIntegrateurErpMarocClient />;
}
