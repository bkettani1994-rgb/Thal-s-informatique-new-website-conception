import type { Metadata } from "next";
import CnssAmo2026Client from "./CnssAmo2026Client";

export const metadata: Metadata = {
  title: "CNSS & AMO 2026 : nouveaux taux et déclarations",
  description:
    "Loi de finances 2026 : nouveaux taux CNSS et AMO, obligations Damancom et pénalités renforcées. Découvrez comment Sage 100 Paie met à jour automatiquement votre paie.",
  alternates: {
    canonical: "/ressources/blog/cnss-amo-2026",
  },
};

export default function Page() {
  return <CnssAmo2026Client />;
}
