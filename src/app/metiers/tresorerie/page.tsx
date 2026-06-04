"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, TrendingUp, AlertCircle, RefreshCw } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { title: "Tableau de bord trésorerie", desc: "Vision temps réel de vos soldes bancaires, encaissements et décaissements." },
  { title: "Prévisions de cash-flow", desc: "Modèles de prévision à 30, 60 et 90 jours basés sur vos données historiques." },
  { title: "Rapprochement bancaire", desc: "Import automatique des relevés bancaires et lettrage intelligent des opérations." },
  { title: "Gestion des échéances", desc: "Suivi des créances clients et dettes fournisseurs avec alertes d'échéances." },
  { title: "Multi-banques", desc: "Consolidation de tous vos comptes bancaires en un seul tableau de bord unifié." },
  { title: "Alertes seuils", desc: "Notifications automatiques en cas de dépassement de seuils de trésorerie définis." },
];

const kpis = [
  { label: "Solde consolidé", value: "+2 450 000 MAD", positive: true },
  { label: "Encaissements J+30", value: "+890 000 MAD", positive: true },
  { label: "Décaissements J+30", value: "-620 000 MAD", positive: false },
  { label: "Position nette", value: "+270 000 MAD", positive: true },
];

export default function TresoriePage() {
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
                <span className="text-accent">Trésorerie</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">FINANCE</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Gestion de Trésorerie</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Prévisions de liquidités et suivi des flux financiers en temps réel.
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
              <h2 className="text-2xl font-bold text-primary">Pilotez votre trésorerie en temps réel</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique offre un pilotage en temps réel de la trésorerie de votre entreprise. Encaissements, décaissements, prévisions de cash-flow : toutes les informations sont centralisées dans un tableau de bord intuitif, accessible depuis n&apos;importe quel poste.
              </p>
            </motion.div>
          </div>
        </section>

        {/* KPI Dashboard mockup */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-xl font-bold text-white mb-8" {...fadeUp}>Aperçu du tableau de bord</motion.h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {kpis.map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-6 bg-white/10 border border-white/20 rounded-xl"
                >
                  <p className="text-white/50 text-xs">{k.label}</p>
                  <p className={`text-xl font-bold mt-1 ${k.positive ? "text-accent" : "text-red-300"}`}>{k.value}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4">
              <RefreshCw size={20} className="text-accent shrink-0" />
              <p className="text-white/60 text-sm">Données synchronisées automatiquement depuis vos banques — Dernière mise à jour : il y a 2 min</p>
            </div>
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" {...fadeUp}>
              <div className="p-8 bg-white border border-border rounded-xl">
                <TrendingUp size={32} className="text-cta mb-4" />
                <h3 className="font-bold text-primary text-lg">Prévisions intelligentes</h3>
                <p className="text-secondary text-sm mt-2">Anticipez vos besoins de financement grâce aux modèles prédictifs basés sur vos flux historiques.</p>
              </div>
              <div className="p-8 bg-white border border-border rounded-xl">
                <AlertCircle size={32} className="text-cta mb-4" />
                <h3 className="font-bold text-primary text-lg">Alertes proactives</h3>
                <p className="text-secondary text-sm mt-2">Recevez des alertes avant que votre solde ne passe en dessous du seuil minimum que vous avez défini.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">Ne soyez plus jamais pris au dépourvu</h2>
              <p className="text-white/70 mt-4">Anticipez vos flux et sécurisez la trésorerie de votre entreprise avec Thalès Informatique.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Demander une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
