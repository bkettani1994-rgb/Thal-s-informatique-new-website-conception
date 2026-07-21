import type { Metadata } from "next";
import IndicateursFinanciersDafClient from "./IndicateursFinanciersDafClient";

export const metadata: Metadata = {
  title: "5 indicateurs financiers que tout DAF marocain doit suivre",
  description:
    "BFR, DMP, marge nette, endettement, cash-flow : les 5 KPIs financiers clés pour les DAF marocains, calculés par Sage 100. Découvrez comment les piloter.",
  alternates: {
    canonical: "/ressources/blog/indicateurs-financiers-daf",
  },
};

export default function Page() {
  return <IndicateursFinanciersDafClient />;
}
