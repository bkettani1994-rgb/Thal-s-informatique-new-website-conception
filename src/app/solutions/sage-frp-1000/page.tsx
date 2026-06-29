import type { Metadata } from "next";
import SageFrp1000Client from "./SageFrp1000Client";

export const metadata: Metadata = {
  title: "Sage FRP 1000 : Plateforme Financière de Groupe",
  description:
    "Sage FRP 1000 centralise consolidation automatique, reporting groupe et gestion multi-entités pour holdings et filiales. Déploiement Thalès Informatique au Maroc et en Afrique.",
  alternates: {
    canonical: "/solutions/sage-frp-1000",
  },
};

export default function Page() {
  return <SageFrp1000Client />;
}
