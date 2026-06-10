import type { Metadata } from "next";
import ComptabiliteFinanceClient from "./ComptabiliteFinanceClient";

export const metadata: Metadata = {
  title: "Comptabilité & Finance : ERP conforme CGNC Maroc",
  description:
    "Logiciel de comptabilité générale, analytique et budgétaire conforme au CGNC marocain : saisie automatisée, rapprochement bancaire, clôtures et reporting financier.",
  alternates: {
    canonical: "/metiers/comptabilite-finance",
  },
};

export default function Page() {
  return <ComptabiliteFinanceClient />;
}
