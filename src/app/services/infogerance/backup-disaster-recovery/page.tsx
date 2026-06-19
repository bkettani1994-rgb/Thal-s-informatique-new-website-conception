import type { Metadata } from "next";
import BackupDisasterRecoveryClient from "./BackupDisasterRecoveryClient";

export const metadata: Metadata = {
  title: "Backup & Disaster Recovery - Continuité d'Activité",
  description:
    "Sauvegardes automatisées, plans de reprise d'activité (PRA) et tests de restauration pour garantir la continuité de vos données avec Thalès Informatique.",
  alternates: {
    canonical: "/services/infogerance/backup-disaster-recovery",
  },
};

export default function Page() {
  return <BackupDisasterRecoveryClient />;
}
