import type { Metadata } from "next";
import TvaClient from "./TvaClient";

export const metadata: Metadata = {
  title: "Gestion de la TVA : encaissements, débits & DGI",
  description:
    "Gérez la TVA sur encaissements et sur débits, le prorata de déduction et les déclarations mensuelles ou trimestrielles transmises automatiquement à la DGI.",
  alternates: {
    canonical: "/metiers/tva",
  },
};

export default function Page() {
  return <TvaClient />;
}
