import type { Metadata } from "next";
import AgroalimentaireClient from "./AgroalimentaireClient";

export const metadata: Metadata = {
  title: "ERP Agroalimentaire au Maroc : ONSSA & HACCP",
  description:
    "Solution ERP pour l'agroalimentaire au Maroc : traçabilité des lots, conformité ONSSA et HACCP, gestion des DLC/DLUO et recettes. Sage X3 préconfiguré pour l'industrie IAA.",
  alternates: {
    canonical: "/secteurs/agroalimentaire",
  },
};

export default function Page() {
  return <AgroalimentaireClient />;
}
