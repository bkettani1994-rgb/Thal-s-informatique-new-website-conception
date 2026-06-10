import type { Metadata } from "next";
import GestionRHPaieClient from "./GestionRHPaieClient";

export const metadata: Metadata = {
  title: "Gestion RH & Paie ERP : Conforme CNSS, AMO, IR",
  description:
    "Automatisez la paie et la gestion RH avec un module ERP conforme à la législation marocaine (CNSS, AMO, IR, CIMR). Déploiement par Thalès Informatique au Maroc.",
  alternates: {
    canonical: "/solutions/gestion-rh-paie",
  },
};

export default function Page() {
  return <GestionRHPaieClient />;
}
