import type { Metadata } from "next";
import CrmClient from "./CrmClient";

export const metadata: Metadata = {
  title: "CRM : Gestion de la Relation Client intégrée ERP",
  description:
    "Module CRM Thalès Informatique : pipeline commercial, devis, SAV et tableaux de bord vente intégrés à votre ERP pour piloter votre relation client au Maroc et en Afrique.",
  alternates: {
    canonical: "/metiers/crm",
  },
};

export default function Page() {
  return <CrmClient />;
}
