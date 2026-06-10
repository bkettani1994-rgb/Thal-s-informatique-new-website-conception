"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { title: "Fiche immobilisation", desc: "Création et gestion des fiches détaillées de chaque actif (code, désignation, date, valeur)." },
  { title: "Calcul des amortissements", desc: "Calcul automatique en mode linéaire ou dégressif selon les règles fiscales marocaines." },
  { title: "Plan d'amortissement", desc: "Édition des tableaux d'amortissement pluriannuels pour chaque actif ou pour l'ensemble du parc." },
  { title: "Cessions & mises au rebut", desc: "Traitement comptable automatique des cessions d'actifs et des sorties d'inventaire." },
  { title: "Inventaire physique", desc: "Gestion de l'inventaire périodique avec codes-barres et rapprochement comptable." },
  { title: "Intégration comptable", desc: "Génération automatique des écritures comptables d'amortissement vers la comptabilité générale." },
];

const amortTypes = [
  { method: "Linéaire", rate: "Taux constant", example: "Matériel: 20%/an sur 5 ans", usage: "Immobilisations standard" },
  { method: "Dégressif", rate: "Taux décroissant", example: "Coefficient × taux linéaire", usage: "Équipements high-tech" },
];

export default function ImmobilisationsClient() {
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
                <span className="text-accent">Immobilisations</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">FINANCE</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Gestion des Immobilisations</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Suivi complet des amortissements et inventaire des actifs — conforme aux règles fiscales marocaines.
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
              <h2 className="text-2xl font-bold text-primary">Gérez votre parc d&apos;actifs de A à Z</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique propose une gestion complète du parc d&apos;immobilisations : de l&apos;acquisition à la cession, en passant par le calcul automatique des amortissements et les sorties d&apos;inventaire. Chaque opération génère automatiquement les écritures comptables correspondantes.
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
            <motion.h2 className="text-2xl font-bold text-primary mb-8" {...fadeUp}>Méthodes d&apos;amortissement comparées</motion.h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...fadeUp}>
              {amortTypes.map((t) => (
                <div key={t.method} className="p-6 bg-white border border-border rounded-xl">
                  <h3 className="font-bold text-primary text-lg">{t.method}</h3>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-slate-400">Taux</span><span className="font-medium text-secondary">{t.rate}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Exemple</span><span className="font-medium text-secondary">{t.example}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Usage</span><span className="font-medium text-secondary">{t.usage}</span></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">Optimisez la gestion de vos actifs</h2>
              <p className="text-white/70 mt-4">Avec Thalès Informatique, zéro erreur sur vos plans d&apos;amortissement et une intégration comptable automatique.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Démarrer <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
