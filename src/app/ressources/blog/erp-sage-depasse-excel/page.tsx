import type { Metadata } from "next";
import ErpSageDepasseExcelClient from "./ErpSageDepasseExcelClient";

export const metadata: Metadata = {
  title: "ERP Sage : 5 signes que votre entreprise a dépassé Excel",
  description:
    "Fichiers multiples, erreurs de saisie, manque de visibilité : 5 signes qu'il vous faut un ERP Sage, plus le comparatif Excel vs ERP. Découvrez l'article.",
  alternates: {
    canonical: "/ressources/blog/erp-sage-depasse-excel",
  },
};

export default function Page() {
  return <ErpSageDepasseExcelClient />;
}
