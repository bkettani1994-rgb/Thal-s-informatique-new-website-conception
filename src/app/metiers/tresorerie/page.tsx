import type { Metadata } from "next";
import TresorerieClient from "./TresorerieClient";

export const metadata: Metadata = {
  title: "Gestion de Trésorerie : prévisions de cash-flow",
  description:
    "Pilotez votre trésorerie en temps réel : soldes bancaires consolidés, prévisions de cash-flow à 30/60/90 jours, rapprochement bancaire et alertes de seuils.",
  alternates: {
    canonical: "/metiers/tresorerie",
  },
};

export default function Page() {
  return <TresorerieClient />;
}
