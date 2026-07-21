import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Nos Services ERP & Transformation Digitale",
  description:
    "Audit, intégration ERP, formation, support et infogérance pour vos projets Sage X3, Sage 100 et Sage FRP 1000 au Maroc. Découvrez les services Thalès.",
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <ServicesClient />;
}
