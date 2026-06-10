import type { Metadata } from "next";
import TropheesClient from "./TropheesClient";

export const metadata: Metadata = {
  title: "Trophées & Récompenses",
  description:
    "Découvrez les distinctions Sage et certifications de Thalès Informatique : 30 ans d'excellence reconnus au Maroc et en Afrique du Nord dans l'ERP.",
  alternates: {
    canonical: "/trophees",
  },
};

export default function Page() {
  return <TropheesClient />;
}
