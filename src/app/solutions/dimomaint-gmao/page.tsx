import type { Metadata } from "next";
import DimomaintGmaoClient from "./DimomaintGmaoClient";

export const metadata: Metadata = {
  title: "DimoMaint GMAO : Maintenance Industrielle au Maroc et en Afrique",
  description:
    "DimoMaint GMAO optimise la maintenance préventive et corrective de vos équipements industriels. Distributeur officiel Thalès Informatique au Maroc et en Afrique.",
  alternates: {
    canonical: "/solutions/dimomaint-gmao",
  },
};

export default function Page() {
  return <DimomaintGmaoClient />;
}
