import type { Metadata } from "next";
import EtudesDeCasClient from "./EtudesDeCasClient";

export const metadata: Metadata = {
  title: "Études de Cas ERP",
  description:
    "Découvrez des transformations ERP réussies avec Sage X3, Sage 100, DimoMaint et Eloficash chez nos clients marocains, avec des résultats mesurables.",
  alternates: {
    canonical: "/references/etudes-de-cas",
  },
};

export default function Page() {
  return <EtudesDeCasClient />;
}
