import type { Metadata } from "next";
import SageX3Client from "./SageX3Client";

export const metadata: Metadata = {
  title: "Sage X3 Maroc | ERP de gestion d'entreprise | Thalès Informatique",
  description:
    "Découvrez Sage X3 Maroc, l'ERP de référence pour les entreprises industrielles, la distribution et le négoce. Thalès Informatique, Sage Business Partner Platinum, vous accompagne dans le déploiement de Sage X3 au Maroc et en Afrique.",
  alternates: {
    canonical: "/solutions/sage-x3",
  },
};

export default function Page() {
  return <SageX3Client />;
}
