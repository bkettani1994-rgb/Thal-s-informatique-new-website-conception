import type { Metadata } from "next";
import MetiersClient from "./MetiersClient";

export const metadata: Metadata = {
  title: "Nos Métiers ERP : Finance, RH, Production, CRM",
  description:
    "Découvrez les modules métiers Thalès Informatique adaptés aux PME marocaines : comptabilité, paie, RH, CRM, production, trésorerie et conformité fiscale DGI.",
  alternates: {
    canonical: "/metiers",
  },
};

export default function Page() {
  return <MetiersClient />;
}
