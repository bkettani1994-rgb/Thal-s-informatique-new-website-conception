import type { Metadata } from "next";
import AuditConseilClient from "./AuditConseilClient";

export const metadata: Metadata = {
  title: "Audit & Conseil ERP au Maroc",
  description:
    "Audit et conseil pour vos projets ERP : diagnostic des processus métiers, cartographie des flux et feuille de route de transformation digitale par des consultants certifiés Sage.",
  alternates: {
    canonical: "/services/audit-conseil",
  },
};

export default function Page() {
  return <AuditConseilClient />;
}
