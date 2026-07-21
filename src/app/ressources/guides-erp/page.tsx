import type { Metadata } from "next";
import GuidesErpClient from "./GuidesErpClient";

export const metadata: Metadata = {
  title: "Guides ERP Gratuits : CDC, Audit, ROI et Benchmark",
  description:
    "Téléchargez nos guides ERP au Maroc : cahier des charges, audit des processus, calculateur ROI et benchmark PME. Découvrez les ressources Thalès Informatique.",
  alternates: {
    canonical: "/ressources/guides-erp",
  },
};

export default function Page() {
  return <GuidesErpClient />;
}
