import type { Metadata } from "next";
import EtatsComptablesFiscauxClient from "./EtatsComptablesFiscauxClient";

export const metadata: Metadata = {
  title: "États Comptables & Fiscaux : liasse fiscale EDI Simpl-IS",
  description:
    "Génération automatique de la liasse fiscale, bilan, CPC et déclarations IS/TVA via EDI Simpl-IS, le canal certifié DGI pour vos obligations fiscales marocaines.",
  alternates: {
    canonical: "/metiers/etats-comptables-fiscaux",
  },
};

export default function Page() {
  return <EtatsComptablesFiscauxClient />;
}
