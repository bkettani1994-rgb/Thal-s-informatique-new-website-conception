import type { Metadata } from "next";
import SupportMaintenanceClient from "./SupportMaintenanceClient";

export const metadata: Metadata = {
  title: "Support & Maintenance ERP avec SLA Garantis",
  description:
    "Contrats de maintenance Essentiel, Business et Premium pour Sage X3 et Sage 100 : correctifs, mises à jour légales, sauvegardes et délais d'intervention dès 1h au Maroc.",
  alternates: {
    canonical: "/services/support-maintenance",
  },
};

export default function Page() {
  return <SupportMaintenanceClient />;
}
