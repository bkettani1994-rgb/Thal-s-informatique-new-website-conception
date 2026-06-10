import type { Metadata } from "next";
import DematRhClient from "./DematRhClient";

export const metadata: Metadata = {
  title: "Dématérialisation RH : coffre-fort numérique Maroc",
  description:
    "Passez au zéro papier RH : coffre-fort numérique, signature électronique, archivage légal et portail employé conformes à la réglementation marocaine.",
  alternates: {
    canonical: "/metiers/demat-rh",
  },
};

export default function Page() {
  return <DematRhClient />;
}
