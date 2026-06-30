import type { Metadata } from "next";
import GestionChaineApprovisionnementClient from "./GestionChaineApprovisionnementClient";

export const metadata: Metadata = {
  title: "Gestion de la Chaîne d'Approvisionnement | ERP Sage",
  description:
    "Module de gestion de la chaîne d'approvisionnement Thalès Informatique : achats, stocks multi-sites, entrepôts et prévision de la demande, au Maroc, en Afrique et à l'international.",
  alternates: {
    canonical: "/metiers/gestion-chaine-approvisionnement",
  },
};

export default function Page() {
  return <GestionChaineApprovisionnementClient />;
}
