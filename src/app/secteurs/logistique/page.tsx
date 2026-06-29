import type { Metadata } from "next";
import LogistiqueClient from "./LogistiqueClient";

export const metadata: Metadata = {
  title: "ERP Logistique au Maroc et en Afrique | Thalès Informatique",
  description:
    "Solution ERP pour la logistique au Maroc et en Afrique : gestion multi-entrepôts (WMS), optimisation du transport, traçabilité temps réel et échanges EDI avec vos partenaires.",
  alternates: {
    canonical: "/secteurs/logistique",
  },
};

export default function Page() {
  return <LogistiqueClient />;
}
