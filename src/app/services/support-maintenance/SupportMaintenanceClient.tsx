"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Shield, Check, Star } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slaFeatures = [
  "Jours ouvrés 8h30–17h30",
  "Délai d'intervention rapide garanti",
  "Mises à jour et correctifs inclus",
  "Support email, téléphone & chat",
];

const included = [
  "Correctifs applicatifs",
  "Mises à jour légales (TVA, IR, CNSS)",
  "Sauvegardes",
  "Monitoring système",
  "Rapports mensuels",
  "Accès portail support",
];

const stats = [
  { value: "98.5%", label: "Disponibilité garantie" },
  { value: "<2h", label: "Délai moyen résolution" },
  { value: "4.8/5", label: "Satisfaction client" },
];

export default function SupportMaintenanceClient() {
  const introRef = useRef(null);
  const plansRef = useRef(null);
  const includedRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const plansInView = useInView(plansRef, { once: true, margin: "-100px" });
  const includedInView = useInView(includedRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight aria-hidden="true" size={14} />
              <span aria-current="page" className="text-accent">Support & Maintenance</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                <Shield size={14} />
                SUPPORT
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Support & Maintenance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl"
            >
              Un seul niveau de service, exigeant pour tous nos clients
            </motion.p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20" ref={introRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Assurez la continuité de votre SI</h2>
              <p className="text-lg text-secondary leading-relaxed">
                Thalès Informatique assure la continuité de votre système d'information avec un contrat de maintenance
                unique et exigeant, appliqué à tous nos clients quelle que soit leur taille, de la PME à la grande
                entreprise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Engagement de service */}
        <section className="py-20 bg-white" ref={plansRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={plansInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Notre engagement de service</h2>
              <p className="text-secondary">Un seul contrat de maintenance, le même niveau d'exigence pour tous nos clients</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={plansInView ? "visible" : "hidden"}
              className="max-w-2xl mx-auto relative p-8 rounded-2xl border-2 border-amber-400 bg-amber-50 shadow-xl"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 px-4 py-1 bg-amber-400 text-white text-xs font-bold rounded-full">
                  <Star size={12} fill="white" /> INCLUS POUR TOUS
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
                <Shield size={24} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-5">Contrat de maintenance Thalès Informatique</h3>
              <ul className="space-y-3">
                {slaFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={16} className="text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-secondary">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Included */}
        <section className="py-20" ref={includedRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={includedInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Ce qui est inclus</h2>
              <p className="text-secondary">Dans tous nos contrats de maintenance</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={includedInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
            >
              {included.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-amber-600" />
                  </div>
                  <span className="text-sm font-medium text-primary">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary" ref={statsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <div className="text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Souscrire à notre contrat de maintenance</h2>
              <p className="text-secondary mb-8 max-w-xl mx-auto">
                Nos experts vous accompagnent dans la mise en place de votre contrat de maintenance.
              </p>
              <p data-ilink className="text-white/60 text-sm mb-8">Solutions Sage maintenues : <Link href="/solutions/sage-x3" className="text-white underline hover:text-accent">Sage X3</Link> et <Link href="/solutions/sage-100" className="text-white underline hover:text-accent">Sage 100</Link>.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Demander un devis maintenance
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
