import type { Metadata } from "next";
import ReportingClient from "./ReportingClient";

export const metadata: Metadata = {
  title: "Reporting & Tableaux de Bord décisionnels ERP",
  description:
    "Dashboards interactifs et KPIs personnalisables pour piloter finance, RH, production et commercial en temps réel, avec exports Excel/PDF et alertes automatiques.",
  alternates: {
    canonical: "/metiers/reporting",
  },
};

export default function Page() {
  return <ReportingClient />;
}
