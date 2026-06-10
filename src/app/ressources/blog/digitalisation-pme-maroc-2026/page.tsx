import type { Metadata } from "next";
import DigitalisationPmeMaroc2026Client from "./DigitalisationPmeMaroc2026Client";

export const metadata: Metadata = {
  title: "Digitalisation des PME marocaines : état des lieux 2026",
  description:
    "Chiffres clés, freins et leviers de la digitalisation des PME au Maroc en 2026 : adoption ERP, ROI, secteurs en avance et priorités pour 2026-2027 selon Thalès Informatique.",
  alternates: {
    canonical: "/ressources/blog/digitalisation-pme-maroc-2026",
  },
};

export default function Page() {
  return <DigitalisationPmeMaroc2026Client />;
}
