import type { Metadata } from "next";
import ReportingPilotageClient from "./ReportingPilotageClient";

export const metadata: Metadata = {
  title: "Reporting & Pilotage : Tableaux de Bord ERP BI",
  description:
    "Module BI intégré à votre ERP : tableaux de bord interactifs, plus de 200 KPIs et alertes en temps réel. Par Thalès Informatique au Maroc et en Afrique.",
  alternates: {
    canonical: "/solutions/reporting-pilotage",
  },
};

export default function Page() {
  return <ReportingPilotageClient />;
}
