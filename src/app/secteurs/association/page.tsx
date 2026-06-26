import type { Metadata } from "next";
import AssociationClient from "./AssociationClient";

export const metadata: Metadata = {
  title: "ERP pour Associations & ONG au Maroc | Thalès Informatique",
  description:
    "Solution de gestion pour associations et ONG au Maroc : suivi des adhérents, des subventions et des dons, comptabilité associative et reporting bailleurs de fonds.",
  alternates: {
    canonical: "/secteurs/association",
  },
};

export default function Page() {
  return <AssociationClient />;
}
