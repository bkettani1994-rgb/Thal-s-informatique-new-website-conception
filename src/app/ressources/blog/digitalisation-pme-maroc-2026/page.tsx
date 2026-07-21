import type { Metadata } from "next";
import DigitalisationPmeMaroc2026Client from "./DigitalisationPmeMaroc2026Client";

export const metadata: Metadata = {
  title: "Digitalisation des PME en Afrique et à l'international : état des lieux 2026",
  description:
    "Chiffres, freins et leviers de la digitalisation des PME au Maroc en 2026 : adoption ERP, ROI et priorités. Découvrez l'analyse de Thalès Informatique.",
  alternates: {
    canonical: "/ressources/blog/digitalisation-pme-maroc-2026",
  },
};

export default function Page() {
  return <DigitalisationPmeMaroc2026Client />;
}
