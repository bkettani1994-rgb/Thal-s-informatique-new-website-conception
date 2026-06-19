import type { Metadata } from "next";
import ConseilItSupportTechniqueClient from "./ConseilItSupportTechniqueClient";

export const metadata: Metadata = {
  title: "Conseil IT et Support Technique",
  description:
    "Conseil stratégique sur votre roadmap IT et helpdesk réactif pour accompagner vos équipes au quotidien, par Thalès Informatique.",
  alternates: {
    canonical: "/services/infogerance/conseil-it-support-technique",
  },
};

export default function Page() {
  return <ConseilItSupportTechniqueClient />;
}
