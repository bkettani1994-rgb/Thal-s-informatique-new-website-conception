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
  { title: "Gestion contacts & comptes", desc: "Base de données clients et prospects centralisée avec historique complet des interactions." },
  { title: "Pipeline commercial", desc: "Visualisation et gestion du pipeline de ventes par étape, valeur et probabilité de closing." },
  { title: "Devis & commandes", desc: "Génération rapide de devis professionnels avec conversion automatique en commandes." },
  { title: "SAV & tickets", desc: "Gestion des tickets de support client avec SLA, escalade et suivi de résolution." },
  { title: "Tableau de bord commercial", desc: "Suivi des performances commerciales par vendeur, produit, région et période." },
  { title: "Relances automatiques", desc: "Scénarios de relance automatique pour les devis en attente et les prospects inactifs." },
];

const funnelSteps = [
  { step: "Prospection", desc: "Identification et qualification des leads" },
  { step: "Premier contact", desc: "Prise de contact et découverte des besoins" },
  { step: "Proposition", desc: "Envoi du devis et présentation de la solution" },
  { step: "Négociation", desc: "Discussion des conditions et levée des objections" },
  { step: "Closing", desc: "Signature et transformation en client" },
];

export default function CRMPage() {
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
                <span className="text-accent">CRM</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">OPÉRATIONS & ERP</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">CRM — Gestion de la Relation Client</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Suivi commercial 360°, SAV et fidélisation client intégrés à votre ERP Thalès Informatique.
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
              <h2 className="text-2xl font-bold text-primary">Une vue 360° de votre relation client</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique intègre un module CRM complet qui couvre toute la chaîne commerciale : des premiers contacts prospects jusqu&apos;au support après-vente. Centralisez toutes les informations clients, suivez vos opportunités commerciales et pilotez vos équipes de vente depuis un seul outil.
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
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>Entonnoir de vente</motion.h2>
            <div className="space-y-3">
              {funnelSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-5 bg-white border border-border rounded-xl"
                  style={{ marginLeft: `${i * 24}px`, marginRight: `${(funnelSteps.length - 1 - i) * 24}px` }}
                >
                  <span className="w-8 h-8 bg-cta rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">{i + 1}</span>
                  <div>
                    <span className="font-semibold text-primary">{s.step}</span>
                    <span className="text-sm text-slate-400 ml-3">{s.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">Boostez vos ventes avec Thalès Informatique CRM</h2>
              <p className="text-white/70 mt-4">Unifiez vos équipes commerciales autour d&apos;un outil unique et intégré à votre ERP.</p>
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
