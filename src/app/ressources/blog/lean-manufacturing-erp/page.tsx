import type { Metadata } from "next";
import LeanManufacturingErpClient from "./LeanManufacturingErpClient";

export const metadata: Metadata = {
  title: "Lean manufacturing et ERP : le duo gagnant pour l'industrie",
  description:
    "Combinez Lean manufacturing (5S, Kanban, flux tiré) et ERP Sage X3 pour booster la performance industrielle : résultats et roadmap. Découvrez l'article.",
  alternates: {
    canonical: "/ressources/blog/lean-manufacturing-erp",
  },
};

export default function Page() {
  return <LeanManufacturingErpClient />;
}
