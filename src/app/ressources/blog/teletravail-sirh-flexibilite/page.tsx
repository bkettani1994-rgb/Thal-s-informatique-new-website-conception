import type { Metadata } from "next";
import TeletravailSirhFlexibiliteClient from "./TeletravailSirhFlexibiliteClient";

export const metadata: Metadata = {
  title: "Télétravail et flexibilité : comment le SIRH accompagne les nouveaux modes de travail",
  description:
    "Travail hybride, gestion des plannings flexibles, signature électronique : comment un SIRH moderne aide les entreprises en Afrique et à l'international à s'adapter aux nouvelles attentes des collaborateurs.",
  alternates: {
    canonical: "/ressources/blog/teletravail-sirh-flexibilite",
  },
};

export default function Page() {
  return <TeletravailSirhFlexibiliteClient />;
}
