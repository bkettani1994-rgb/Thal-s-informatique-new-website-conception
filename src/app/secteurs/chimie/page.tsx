import type { Metadata } from "next";
import ChimieClient from "./ChimieClient";

export const metadata: Metadata = {
  title: "ERP Chimie au Maroc | Thalès Informatique",
  description:
    "Solution ERP pour l'industrie chimique au Maroc : gestion des matières dangereuses, conformité REACH et SEVESO, fiches de données de sécurité et traçabilité des lots.",
  alternates: {
    canonical: "/secteurs/chimie",
  },
};

export default function Page() {
  return <ChimieClient />;
}
