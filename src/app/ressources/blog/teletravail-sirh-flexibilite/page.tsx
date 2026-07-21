import type { Metadata } from "next";
import TeletravailSirhFlexibiliteClient from "./TeletravailSirhFlexibiliteClient";

export const metadata: Metadata = {
  title: "Télétravail et flexibilité : comment le SIRH accompagne les nouveaux modes de travail",
  description:
    "Travail hybride, plannings flexibles, signature électronique : comment un SIRH moderne aide les entreprises à s'adapter. Découvrez nos conseils RH.",
  alternates: {
    canonical: "/ressources/blog/teletravail-sirh-flexibilite",
  },
};

export default function Page() {
  return <TeletravailSirhFlexibiliteClient />;
}
