import type { Metadata } from "next";
import ImmobilisationsClient from "./ImmobilisationsClient";

export const metadata: Metadata = {
  title: "Gestion des Immobilisations & Amortissements Maroc",
  description:
    "Suivi complet du parc d'actifs : fiches immobilisations, calcul des amortissements linéaires/dégressifs et inventaire conformes aux règles fiscales marocaines.",
  alternates: {
    canonical: "/metiers/immobilisations",
  },
};

export default function Page() {
  return <ImmobilisationsClient />;
}
