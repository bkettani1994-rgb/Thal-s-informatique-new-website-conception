import type { Metadata } from "next";
import IndicateursFinanciersDafClient from "./IndicateursFinanciersDafClient";

export const metadata: Metadata = {
  title: "5 indicateurs financiers que tout DAF marocain doit suivre",
  description:
    "BFR, DMP, marge nette, taux d'endettement, cash-flow : découvrez les 5 KPIs financiers essentiels pour les DAF marocains et comment Sage 100 les calcule automatiquement.",
  alternates: {
    canonical: "/ressources/blog/indicateurs-financiers-daf",
  },
};

export default function Page() {
  return <IndicateursFinanciersDafClient />;
}
