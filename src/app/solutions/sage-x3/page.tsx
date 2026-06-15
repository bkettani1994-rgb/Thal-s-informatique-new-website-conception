import type { Metadata } from "next";
import SageX3Client from "./SageX3Client";

export const metadata: Metadata = {
  title: "Sage X3 : ERP pour Grandes Entreprises et Industries",
  description:
    "Sage X3, l'ERP de référence pour groupes industriels et entreprises de taille intermédiaire. Sage Business Partner Platinum depuis plus de 15 ans, déployé par Thalès Informatique au Maroc.",
  alternates: {
    canonical: "/solutions/sage-x3",
  },
};

export default function Page() {
  return <SageX3Client />;
}
