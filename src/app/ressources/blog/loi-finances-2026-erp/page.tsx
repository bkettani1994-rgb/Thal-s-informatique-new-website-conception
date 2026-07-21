import type { Metadata } from "next";
import LoiFinances2026ErpClient from "./LoiFinances2026ErpClient";

export const metadata: Metadata = {
  title: "Loi de finances 2026 : impacts sur votre ERP",
  description:
    "TVA, barème IS, retenues à la source et facturation électronique : les mesures de la loi de finances 2026 et la check-list ERP Sage. Découvrez l'article.",
  alternates: {
    canonical: "/ressources/blog/loi-finances-2026-erp",
  },
};

export default function Page() {
  return <LoiFinances2026ErpClient />;
}
