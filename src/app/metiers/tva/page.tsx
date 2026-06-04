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
  { title: "TVA sur encaissements", desc: "Gestion de la TVA exigible au moment de l'encaissement effectif des règlements clients." },
  { title: "TVA sur débits", desc: "Gestion de la TVA exigible dès la facturation, conformément au régime des débits." },
  { title: "Déclaration mensuelle", desc: "Préparation et dépôt automatique des déclarations TVA mensuelles via EDI." },
  { title: "Déclaration trimestrielle", desc: "Gestion des déclarations trimestrielles pour les entreprises éligibles." },
  { title: "Prorata de TVA", desc: "Calcul automatique du prorata de déduction pour les assujettis partiels." },
  { title: "Remboursement TVA", desc: "Suivi des dossiers de remboursement de crédit TVA auprès de la DGI." },
];

const calendar = [
  { regime: "Mensuel", declaration: "Mois M", deadline: "Avant le dernier jour du mois M+1" },
  { regime: "Trimestriel", declaration: "Trimestre T", deadline: "Avant le dernier jour du mois suivant le trimestre" },
];

export default function TVAPage() {
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
                <span className="text-accent">TVA</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">FINANCE</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Gestion de la TVA</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Taxe sur encaissements et débits — conformité DGI garantie pour les entreprises marocaines.
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
              <h2 className="text-2xl font-bold text-primary">Maîtrisez votre TVA selon la législation marocaine</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                La gestion de la TVA au Maroc implique deux régimes distincts : la TVA sur encaissements (exigible à l&apos;encaissement) et la TVA sur débits (exigible à la facturation). Thalès Informatique gère les deux régimes, prépare automatiquement vos déclarations mensuelles ou trimestrielles, et les transmet à la DGI.
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
            <motion.h2 className="text-2xl font-bold text-primary mb-8" {...fadeUp}>Calendrier des déclarations TVA</motion.h2>
            <motion.div className="overflow-x-auto" {...fadeUp}>
              <table className="w-full bg-white border border-border rounded-xl overflow-hidden">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Régime</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Période</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Échéance</th>
                  </tr>
                </thead>
                <tbody>
                  {calendar.map((row, i) => (
                    <tr key={row.regime} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 text-sm font-semibold text-primary">{row.regime}</td>
                      <td className="px-6 py-4 text-sm text-secondary">{row.declaration}</td>
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
              <h2 className="text-2xl font-bold text-white">Zéro pénalité de retard, zéro erreur de calcul</h2>
              <p className="text-white/80 mt-4">Thalès Informatique vous alerte avant chaque échéance et prépare votre déclaration automatiquement.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Démarrer votre projet TVA <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
