import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Nos Solutions ERP : Sage X3, Sage 100, DimoMaint, Factorial",
  description:
    "Découvrez le portfolio Thalès Informatique : Sage X3, Sage 100, Sage FRP 1000, DimoMaint GMAO, Eloficash et Factorial. Intégrateur ERP de référence au Maroc et en Afrique.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function Page() {
  return <SolutionsClient />;
}
