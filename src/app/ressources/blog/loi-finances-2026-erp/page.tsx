import type { Metadata } from "next";
import LoiFinances2026ErpClient from "./LoiFinances2026ErpClient";

export const metadata: Metadata = {
  title: "Loi de finances 2026 : impacts sur votre ERP",
  description:
    "TVA, barème IS, retenues à la source et facturation électronique : découvrez les principales mesures de la loi de finances 2026 et la check-list pour mettre votre ERP Sage en conformité.",
  alternates: {
    canonical: "/ressources/blog/loi-finances-2026-erp",
  },
};

export default function Page() {
  return <LoiFinances2026ErpClient />;
}
