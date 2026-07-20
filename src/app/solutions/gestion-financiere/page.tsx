import type { Metadata } from "next";
import GestionFinanciereClient from "./GestionFinanciereClient";

export const metadata: Metadata = {
  title: "Gestion Financière & Comptable ERP au Maroc et en Afrique",
  description:
    "Pilotez comptabilité, trésorerie et déclarations fiscales (TVA, IS, IR) via un module ERP conforme à la réglementation marocaine, par Thalès Informatique.",
  alternates: {
    canonical: "/solutions/gestion-financiere",
  },
};

export default function Page() {
  return <GestionFinanciereClient />;
}
