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
  { title: "Comptabilité générale", desc: "Saisie, lettrage, rapprochement et clôture selon le CGNC marocain." },
  { title: "Comptabilité analytique", desc: "Ventilation par axes analytiques, centres de coûts et projets." },
  { title: "Budget & prévisions", desc: "Élaboration budgétaire, suivi des écarts et révisions périodiques." },
  { title: "Rapprochement bancaire", desc: "Import automatique des relevés bancaires et lettrage intelligent." },
  { title: "Clôture mensuelle/annuelle", desc: "Processus guidé de clôture avec contrôles automatiques intégrés." },
  { title: "Reporting financier", desc: "Tableaux de bord financiers en temps réel exportables Excel/PDF." },
];

const steps = ["Paramétrage du plan comptable", "Saisie automatisée des écritures", "Contrôles & rapprochements", "Clôture & édition des états"];

export default function ComptabiliteFinanceClient() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                <span>/</span>
                <span className="text-accent">Comptabilité & Finance</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">FINANCE</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Comptabilité & Finance</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Gestion comptable générale, analytique et budgétaire — 100&nbsp;% conforme aux normes marocaines.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Demander une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl" {...fadeUp}>
              <h2 className="text-2xl font-bold text-primary">Une comptabilité complète, du cycle d&apos;entrée à la clôture</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique couvre l&apos;ensemble du cycle comptable : saisie des pièces, lettrage automatique, rapprochement bancaire, et clôture des exercices. Notre solution est entièrement conforme aux normes du Code Général de Normalisation Comptable (CGNC) marocain et au Plan Comptable Général des Entreprises (PCGE).
              </p>
              <p className="text-secondary mt-3 leading-relaxed">
                Grâce à l&apos;automatisation des tâches répétitives, vos équipes comptables gagnent en productivité et se concentrent sur l&apos;analyse à valeur ajoutée.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
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

        {/* Process */}
        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>Processus en 4 étapes</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative p-6 bg-white border border-border rounded-xl"
                >
                  <span className="text-4xl font-black text-cta/10">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-semibold text-primary mt-2">{step}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight size={16} className="absolute -right-3 top-1/2 -translate-y-1/2 text-cta hidden lg:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conformité */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <CheckCircle size={40} className="text-accent mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white">100&nbsp;% conforme aux normes CGNC & Plan Comptable Marocain</h2>
              <p className="text-white/70 mt-4">
                Thalès Informatique maintient en permanence sa solution à jour avec les évolutions réglementaires de la DGI et les normes comptables marocaines en vigueur.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonial + CTA */}
        <section className="py-16 bg-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <blockquote className="text-lg italic text-secondary border-l-4 border-cta pl-6 text-left">
                &ldquo;Grâce à Thalès Informatique, notre clôture mensuelle est passée de 5 jours à moins de 24 heures. Un gain considérable pour notre direction financière.&rdquo;
              </blockquote>
              <p className="text-sm text-slate-400 mt-3 text-left">— Directeur Financier, groupe industriel de Casablanca</p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Démarrer votre projet <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
