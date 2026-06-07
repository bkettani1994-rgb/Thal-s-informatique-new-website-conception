"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, MapPin, Users, CheckCircle2, ArrowRight } from "lucide-react";
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

const highlights = [
  "Présentation de nos solutions ERP Sage X3, Sage 100 et Sage FRP 1000 sur notre stand",
  "Démonstrations live de nos modules de gestion financière, RH et production",
  "Rencontres avec plus de 200 décideurs et porteurs de projets de transformation digitale",
  "Échanges avec nos partenaires éditeurs autour des tendances technologiques en Afrique",
  "Sessions de networking avec des entreprises marocaines et internationales",
];

export default function GitexEventPage() {
  const introRef = useRef(null);
  const recapRef = useRef(null);
  const ctaRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const recapInView = useInView(recapRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="overflow-x-hidden bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/evenements" className="hover:text-white transition-colors">Événements</Link>
            <ChevronRight size={14} />
            <span className="text-accent">Gitex Africa Morocco 2026</span>
          </div>
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            Événement terminé · Compte-rendu
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Gitex Africa Morocco 2026
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/70 max-w-2xl mb-8"
          >
            Thalès Informatique au cœur du plus grand salon technologique d'Afrique — trois jours
            de rencontres, démonstrations et échanges autour de la transformation digitale.
          </motion.p>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> 07 au 09 avril 2026</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> Marrakech</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-accent" /> Salon international</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16" ref={introRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={introInView ? "visible" : "hidden"} className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-5">Trois jours d'innovation au Maroc</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Du 07 au 09 avril 2026, Thalès Informatique a participé à Gitex Africa Morocco, le rendez-vous
              incontournable des acteurs de la technologie sur le continent africain, organisé à Marrakech.
              Sur notre stand, nos consultants ont accueilli des dirigeants, DAF, DSI et porteurs de projets
              venus découvrir nos solutions ERP, RH et de pilotage de la performance.
            </p>
            <p className="text-secondary leading-relaxed">
              Cette édition a été l'occasion de présenter nos retours d'expérience sur des projets de
              digitalisation menés auprès d'entreprises marocaines de tous secteurs, et d'échanger avec
              l'écosystème technologique régional sur les grands enjeux de la transformation digitale en Afrique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white" ref={recapRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" animate={recapInView ? "visible" : "hidden"} className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-2">Ce qu'il fallait retenir</h2>
            <p className="text-secondary">Les temps forts de notre participation</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={recapInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl"
          >
            {highlights.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 p-4 bg-bg-base rounded-xl border border-border">
                <CheckCircle2 size={18} className="text-slate-500 mt-0.5 shrink-0" />
                <span className="text-sm text-secondary leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate={ctaInView ? "visible" : "hidden"}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Vous n'avez pas pu nous rencontrer sur le salon ?</h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto">
              Échangeons dès maintenant sur vos projets de transformation digitale avec nos consultants.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
                Nous contacter
                <ChevronRight size={18} />
              </Link>
              <Link href="/evenements" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-primary font-semibold rounded-xl hover:border-cta hover:text-cta transition-colors duration-200">
                Voir tous les événements
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
