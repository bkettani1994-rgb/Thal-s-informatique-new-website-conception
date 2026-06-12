import type { Metadata } from "next";
import MaintenanceClient from "./MaintenanceClient";

export const metadata: Metadata = {
  title: "Nouveau site en cours de construction",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return <MaintenanceClient />;
}
