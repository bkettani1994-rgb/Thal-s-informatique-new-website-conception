import type { Metadata } from "next";
import ConsultingItSupportTechniqueClient from "./ConsultingItSupportTechniqueClient";

export const metadata: Metadata = {
  title: "Consulting IT et Support Technique",
  description:
    "Conseil stratégique sur votre roadmap IT et helpdesk réactif pour accompagner vos équipes au quotidien, par Thalès Informatique.",
  alternates: {
    canonical: "/services/infogerance/consulting-it-support-technique",
  },
};

export default function Page() {
  return <ConsultingItSupportTechniqueClient />;
}
