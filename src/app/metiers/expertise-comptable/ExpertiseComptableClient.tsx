"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, Users, Building2, UserCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { title: "Multi-dossiers clients", desc: "Gérez des centaines de dossiers clients depuis une interface unifiée et sécurisée." },
  { title: "Revue analytique", desc: "Outils de revue analytique et de contrôle de cohérence des données comptables." },
  { title: "Tableaux de bord cabinet", desc: "Pilotez l'activité de votre cabinet : missions, délais, facturation et productivité." },
  { title: "Collaboration équipe", desc: "Partage des dossiers en équipe avec gestion des droits et suivi des modifications." },
  { title: "Archivage numérique", desc: "Stockage sécurisé des documents clients conforme aux obligations légales marocaines." },
  { title: "Facturation honoraires", desc: "Émission des notes d'honoraires avec intégration directe à la comptabilité du cabinet." },
];

const profiles = [
  {
    icon: UserCheck,
    title: "Expert-comptable individuel",
    desc: "Une solution légère et performante pour gérer jusqu'à 50 dossiers clients en toute autonomie.",
  },
  {
    icon: Users,
    title: "Cabinet structuré",
    desc: "Multi-utilisateurs, gestion des équipes et supervision centralisée pour les cabinets de 5 à 50 collaborateurs.",
  },
  {
    icon: Building2,
    title: "Expert-comptable salarié",
    desc: "Accès sécurisé aux dossiers assignés, avec suivi de temps et reporting à la direction du cabinet.",
  },
];

export default function ExpertiseComptableClient() {
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
                <span className="text-accent">Expertise Comptable</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">FINANCE</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Expertise Comptable</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Gestion multi-dossiers et outils de productivité pour les cabinets d&apos;expertise comptable marocains.
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
              <h2 className="text-2xl font-bold text-primary">Conçu pour les cabinets d&apos;expertise comptable marocains</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique propose une solution dédiée aux cabinets d&apos;expertise comptable opérant au Maroc et en Afrique. Gérez plusieurs dossiers clients depuis une interface unique, avec des outils de productivité avancés pour optimiser le temps de vos collaborateurs.
              </p>
              <p className="text-secondary mt-3 leading-relaxed">
                Compatible avec les exigences de l&apos;Ordre des Experts-Comptables du Maroc (OEC), notre solution garantit la conformité réglementaire de chaque dossier traité.
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
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>Une solution adaptée à chaque profil</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profiles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-8 bg-white border border-border rounded-xl text-center hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-14 h-14 bg-cta/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <p.icon size={24} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary">{p.title}</h3>
                  <p className="text-sm text-secondary mt-2">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">Développez votre cabinet avec Thalès Informatique</h2>
              <p className="text-white/70 mt-4">Rejoignez les cabinets marocains qui ont fait confiance à notre solution pour booster leur productivité.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Discuter de votre projet <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
