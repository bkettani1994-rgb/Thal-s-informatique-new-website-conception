import type { Metadata } from "next";
import LeanManufacturingErpClient from "./LeanManufacturingErpClient";

export const metadata: Metadata = {
  title: "Lean manufacturing et ERP : le duo gagnant pour l'industrie",
  description:
    "Comment combiner Lean manufacturing (5S, Kanban, flux tiré) et ERP Sage X3 pour booster la performance industrielle au Maroc : résultats chiffrés et roadmap en 3 phases.",
  alternates: {
    canonical: "/ressources/blog/lean-manufacturing-erp",
  },
};

export default function Page() {
  return <LeanManufacturingErpClient />;
}
