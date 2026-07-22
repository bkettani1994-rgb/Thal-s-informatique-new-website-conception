"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, Shield, FileCheck, Archive, Globe } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { title: "Coffre-fort numérique", desc: "Stockage sécurisé des documents RH avec accès par rôle et traçabilité complète." },
  { title: "Signature électronique", desc: "Signature des contrats et documents RH en ligne, juridiquement valide au Maroc." },
  { title: "Archivage légal", desc: "Conservation des documents selon les durées légales marocaines avec indexation automatique." },
  { title: "Bulletins dématérialisés", desc: "Mise à disposition des bulletins de paie au format numérique dans l'espace employé." },
  { title: "Contrats numériques", desc: "Création, envoi et signature de contrats de travail directement depuis l'ERP." },
  { title: "Accès employé en ligne", desc: "Portail self-service : bulletins, congés, documents RH accessibles 24h/24." },
];

const steps = [
  { icon: FileCheck, label: "Scan & capture", desc: "Numérisation intelligente des documents papier existants" },
  { icon: Archive, label: "Indexation", desc: "Classification automatique par type, salarié et date" },
  { icon: Shield, label: "Archivage sécurisé", desc: "Chiffrement et stockage conforme aux normes légales" },
  { icon: Globe, label: "Accès sécurisé", desc: "Consultation en ligne depuis n'importe quel appareil" },
];

export default function DematRhClient() {
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
                <span className="text-accent">Dématérialisation RH</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">RESSOURCES HUMAINES</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Dématérialisation RH</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Coffre-fort numérique et dématérialisation complète des documents RH — zéro papier.
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
              <h2 className="text-2xl font-bold text-primary">Passez au zéro papier avec Thalès Informatique</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique vous accompagne dans la transition vers un département RH 100&nbsp;% numérique. Coffre-fort numérique, signature électronique, archivage légal et portail employé — tous vos documents RH sont accessibles en un clic, de façon sécurisée et conforme à la réglementation marocaine.
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
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>Processus de dématérialisation</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 bg-white border border-border rounded-xl text-center"
                >
                  <div className="w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <s.icon size={22} className="text-cta" />
                  </div>
                  <h3 className="font-semibold text-primary">{s.label}</h3>
                  <p className="text-xs text-secondary mt-2">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">Prêt à digitaliser vos RH&nbsp;?</h2>
              <p className="text-white/70 mt-4">Contactez les experts Thalès Informatique pour un audit de votre situation actuelle.</p>
              <p data-ilink className="text-white/60 text-sm mb-4">Découvrez notre solution <Link href="/solutions/sage-espace-employes" className="text-white underline hover:text-accent">Sage Espace Employés</Link> et notre module <Link href="/metiers/sirh" className="text-white underline hover:text-accent">SIRH Maroc</Link>.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Lancer votre projet <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
