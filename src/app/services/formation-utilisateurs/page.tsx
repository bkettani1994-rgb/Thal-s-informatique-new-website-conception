import type { Metadata } from "next";
import FormationUtilisateursClient from "./FormationUtilisateursClient";

export const metadata: Metadata = {
  title: "Formation Utilisateurs Sage X3 & Sage 100 au Maroc et en Afrique",
  description:
    "Formations certifiées Sage en présentiel, classe virtuelle ou e-learning : finance, RH, gestion commerciale, production et BI, adaptées à chaque profil de votre équipe.",
  alternates: {
    canonical: "/services/formation-utilisateurs",
  },
};

export default function Page() {
  return <FormationUtilisateursClient />;
}
