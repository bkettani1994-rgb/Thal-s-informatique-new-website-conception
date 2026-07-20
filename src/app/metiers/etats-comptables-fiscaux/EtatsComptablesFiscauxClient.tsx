"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { title: "Liasse fiscale automatique", desc: "Génération automatique de la liasse fiscale complète depuis les données comptables." },
  { title: "EDI Simpl-IS", desc: "Télédéclaration directe auprès de la DGI via le canal EDI Simpl-IS certifié." },
  { title: "Bilan & CPC", desc: "Édition du bilan comptable et du Compte de Produits et Charges aux normes CGNC." },
  { title: "Déclaration IS", desc: "Calcul et déclaration de l'Impôt sur les Sociétés avec les acomptes provisionnels." },
  { title: "Déclaration TVA", desc: "Préparation et dépôt des déclarations TVA mensuelles ou trimestrielles." },
  { title: "Taxe professionnelle", desc: "Gestion et déclaration de la taxe professionnelle et autres taxes locales." },
];

const calendar = [
  { tax: "IS (acomptes)", period: "Trimestriel", deadline: "31 mars, 30 juin, 30 sept, 31 déc" },
  { tax: "TVA", period: "Mensuel/Trimestriel", deadline: "Dernier jour du mois suivant" },
  { tax: "IR Salaires", period: "Mensuel", deadline: "Avant le 31 du mois suivant" },
  { tax: "Taxe professionnelle", period: "Annuel", deadline: "31 janvier de l'année N+1" },
];

export default function EtatsComptablesFiscauxClient() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                <span>/</span>
                <span className="text-accent">États Comptables & Fiscaux</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">FINANCE</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">États Comptables & Fiscaux</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Liasse fiscale, EDI Simpl-IS et déclarations automatisées — conformité DGI garantie.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Demander une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl" {...fadeUp}>
              <h2 className="text-2xl font-bold text-primary">Automatisez vos obligations fiscales marocaines</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique génère automatiquement la liasse fiscale complète à partir des données comptables saisies. La télédéclaration s&apos;effectue directement via EDI Simpl-IS, le canal certifié par la Direction Générale des Impôts (DGI) du Maroc.
              </p>
              <p className="text-secondary mt-3 leading-relaxed">
                Fini les ressaisies manuelles et les risques d&apos;erreurs : Thalès Informatique garantit la cohérence entre votre comptabilité et vos déclarations fiscales.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>Fonctionnalités clés</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-6 border border-border rounded-xl hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="font-semibold text-primary">{f.title}</h3>
                  <p className="text-sm text-secondary mt-2">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-8" {...fadeUp}>Calendrier fiscal marocain</motion.h2>
            <motion.div className="overflow-x-auto" {...fadeUp}>
              <table className="w-full bg-white border border-border rounded-xl overflow-hidden">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Impôt / Taxe</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Périodicité</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Échéance</th>
                  </tr>
                </thead>
                <tbody>
                  {calendar.map((row, i) => (
                    <tr key={row.tax} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{row.tax}</td>
                      <td className="px-6 py-4 text-sm text-secondary">{row.period}</td>
                      <td className="px-6 py-4 text-sm text-secondary">{row.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-cta">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <CheckCircle size={40} className="text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">Connecté directement à la DGI via EDI Simpl-IS</h2>
              <p className="text-white/80 mt-4">
                Thalès Informatique est l&apos;un des rares éditeurs ERP certifiés EDI Simpl-IS au Maroc, garantissant une transmission sécurisée et conforme de vos déclarations fiscales.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-primary">Simplifiez vos déclarations fiscales dès aujourd&apos;hui</h2>
              <p className="text-secondary mt-4">Contactez nos experts pour une démonstration de la module fiscal de Thalès Informatique.</p>
              <p data-ilink className="text-white/60 text-sm mb-4">Découvrez notre solution <Link href="/solutions/sage-100" className="text-white underline hover:text-accent">Sage 100</Link>.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Contacter un expert <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
