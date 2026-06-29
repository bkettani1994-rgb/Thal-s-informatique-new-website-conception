import type { Metadata } from "next";
import GuidesErpClient from "./GuidesErpClient";

export const metadata: Metadata = {
  title: "Guides ERP Gratuits : CDC, Audit, ROI et Benchmark",
  description:
    "Téléchargez nos guides pratiques ERP au Maroc et en Afrique : cahier des charges, audit des processus, calculateur ROI, conduite du changement et benchmark PME 2025.",
  alternates: {
    canonical: "/ressources/guides-erp",
  },
};

export default function Page() {
  return <GuidesErpClient />;
}
