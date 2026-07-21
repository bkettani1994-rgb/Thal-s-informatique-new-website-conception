import type { Metadata } from "next";
import CoutErpMaroc2026Client from "./CoutErpMaroc2026Client";

export const metadata: Metadata = {
  title: "Combien coûte un ERP au Maroc et en Afrique en 2026 ? Guide des prix Sage",
  description:
    "Prix d'un projet ERP Sage X3 ou Sage 100 au Maroc en 2026 : licences, intégration, formation et maintenance. Découvrez notre guide pour bien budgétiser.",
  alternates: {
    canonical: "/ressources/blog/cout-erp-maroc-2026",
  },
};

export default function Page() {
  return <CoutErpMaroc2026Client />;
}
