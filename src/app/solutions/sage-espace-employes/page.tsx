import type { Metadata } from "next";
import SageEspaceEmployesClient from "./SageEspaceEmployesClient";

export const metadata: Metadata = {
  title: "Sage Espace Employés : Portail RH Self-Service",
  description:
    "Sage Espace Employés permet à vos collaborateurs de consulter bulletins de paie, congés et documents RH en ligne. Déploiement par Thalès Informatique au Maroc et en Afrique.",
  alternates: {
    canonical: "/solutions/sage-espace-employes",
  },
};

export default function Page() {
  return <SageEspaceEmployesClient />;
}
