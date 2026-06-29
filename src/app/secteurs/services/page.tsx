import type { Metadata } from "next";
import SecteurServicesClient from "./SecteurServicesClient";

export const metadata: Metadata = {
  title: "ERP pour Sociétés de Services & Conseil au Maroc et en Afrique",
  description:
    "ERP dédié aux ESN et cabinets de conseil au Maroc et en Afrique : suivi du taux de charge, facturation projet, CRM, SIRH Factorial et reporting de rentabilité. Sage X3 pour piloter vos marges.",
  alternates: {
    canonical: "/secteurs/services",
  },
};

export default function Page() {
  return <SecteurServicesClient />;
}
