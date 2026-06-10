import type { Metadata } from "next";
import IntegrationERPClient from "./IntegrationERPClient";

export const metadata: Metadata = {
  title: "Intégration ERP & Connecteurs API Sage",
  description:
    "Connecteurs API REST/SOAP, EDI, e-commerce, CRM et BI : Thalès Informatique intègre votre ERP Sage X3 ou Sage 100 à tout votre écosystème applicatif au Maroc.",
  alternates: {
    canonical: "/services/integration-erp",
  },
};

export default function Page() {
  return <IntegrationERPClient />;
}
