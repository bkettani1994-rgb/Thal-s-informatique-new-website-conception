import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog & Ressources ERP",
  description:
    "Articles, guides et conseils d'experts sur l'ERP, la gestion financière, la paie et la transformation digitale des entreprises marocaines.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return <BlogClient />;
}
