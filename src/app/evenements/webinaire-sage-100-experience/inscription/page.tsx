import type { Metadata } from "next";
import InscriptionClient from "./InscriptionClient";

export const metadata: Metadata = {
  title: "Inscription — Webinaire Sage 100 Expérience",
  description:
    "Inscrivez-vous au webinaire Sage 100 Expérience du 9 septembre 2026, de 13h à 14h. Places limitées, inscription gratuite et sans engagement.",
  alternates: {
    canonical: "/evenements/webinaire-sage-100-experience/inscription",
  },
};

export default function Page() {
  return <InscriptionClient />;
}
