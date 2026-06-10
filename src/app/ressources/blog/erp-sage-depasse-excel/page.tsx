import type { Metadata } from "next";
import ErpSageDepasseExcelClient from "./ErpSageDepasseExcelClient";

export const metadata: Metadata = {
  title: "ERP Sage : 5 signes que votre entreprise a dépassé Excel",
  description:
    "Fichiers multiples, erreurs de saisie, manque de visibilité : découvrez les 5 signes qui montrent que votre entreprise a besoin d'un ERP Sage et le comparatif Excel vs ERP.",
  alternates: {
    canonical: "/ressources/blog/erp-sage-depasse-excel",
  },
};

export default function Page() {
  return <ErpSageDepasseExcelClient />;
}
