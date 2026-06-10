import type { Metadata } from "next";
import SirhClient from "./SirhClient";

export const metadata: Metadata = {
  title: "SIRH : GPEC, compétences et formation au Maroc",
  description:
    "Système d'Information RH pour piloter compétences, plans de formation, GPEC et organigramme — connecté à la paie pour une vision unifiée du capital humain.",
  alternates: {
    canonical: "/metiers/sirh",
  },
};

export default function Page() {
  return <SirhClient />;
}
