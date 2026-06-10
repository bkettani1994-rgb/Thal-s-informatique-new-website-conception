"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Headphones, Phone, MessageCircle, Mail, Monitor } from "lucide-react";
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

const channels = [
  {
    icon: Phone,
    title: "Téléphone",
    contact: "05 22 54 87 80",
    hours: "Lun–Ven 8h30–17h30",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    contact: "+212 6 61 16 83 54",
    hours: "Urgences 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    contact: "hotline@thales.ma",
    hours: "Réponse sous 4h",
  },
  {
    icon: Monitor,
    title: "Téléassistance",
    contact: "Prise en main à distance",
    hours: "Via AnyDesk",
  },
];

const interventions = [
  { title: "Déblocage utilisateur", desc: "Résolution immédiate des blocages empêchant la saisie ou la validation." },
  { title: "Correction d'erreurs", desc: "Identification et correction des erreurs de paramétrage ou de données." },
  { title: "Paramétrage", desc: "Ajustements de configuration sans nécessiter une intervention sur site." },
  { title: "Génération d'états", desc: "Production de rapports, états comptables ou tableaux de bord à la demande." },
  { title: "Import/Export données", desc: "Assistance pour les opérations d'import/export de fichiers et données." },
  { title: "Formation flash (30 min)", desc: "Session express pour maîtriser rapidement une fonctionnalité spécifique." },
];

const slaTable = [
  { level: "Critique", delay: "1h", badge: "bg-rose-100 text-rose-700" },
  { level: "Bloquant", delay: "4h", badge: "bg-amber-100 text-amber-700" },
  { level: "Normal", delay: "24h", badge: "bg-blue-100 text-blue-700" },
  { level: "Mineur", delay: "48h", badge: "bg-slate-100 text-slate-700" },
];

export default function AssistanceUtilisateursPage() {
  const introRef = useRef(null);
  const channelsRef = useRef(null);
  const interventionsRef = useRef(null);
  const slaRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const channelsInView = useInView(channelsRef, { once: true, margin: "-100px" });
  const interventionsInView = useInView(interventionsRef, { once: true, margin: "-100px" });
  const slaInView = useInView(slaRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Assistance Utilisateurs</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold tracking-wider uppercase">
                <Headphones size={14} />
                ASSISTANCE
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Assistance Utilisateurs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl"
            >
              Téléassistance et déblocages 24/7
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
              <h2 className="text-3xl font-bold text-primary mb-6">Hotline réactive depuis Casablanca</h2>
              <p className="text-lg text-secondary leading-relaxed">
                Notre équipe hotline de Casablanca intervient à distance pour résoudre vos blocages en temps réel —
                prise en main à distance, guide pas à pas, formation flash. Nous savons que chaque minute d'interruption
                coûte à votre activité.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Channels */}
        <section className="py-20 bg-white" ref={channelsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={channelsInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Canaux d'assistance</h2>
              <p className="text-secondary">Contactez-nous par le canal qui vous convient</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={channelsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {channels.map((ch) => (
                <motion.div
                  key={ch.title}
                  variants={fadeUp}
                  className="p-6 rounded-xl border border-border hover:border-rose-300 hover:shadow-md transition-all duration-300 bg-bg text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mx-auto mb-4">
                    <ch.icon size={24} className="text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{ch.title}</h3>
                  <p className="text-sm font-medium text-rose-600 mb-1">{ch.contact}</p>
                  <p className="text-xs text-secondary">{ch.hours}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Interventions */}
        <section className="py-20" ref={interventionsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={interventionsInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Types d'interventions</h2>
              <p className="text-secondary">Ce que notre équipe peut résoudre à distance</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={interventionsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {interventions.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="p-6 rounded-xl border border-border hover:border-rose-300 hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center mb-4">
                    <Headphones size={20} className="text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SLA Table */}
        <section className="py-20 bg-white" ref={slaRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={slaInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">SLA garantis</h2>
              <p className="text-secondary">Délais d'intervention selon la criticité</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={slaInView ? "visible" : "hidden"}
              className="max-w-lg mx-auto"
            >
              <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="grid grid-cols-2 bg-primary text-white font-semibold text-sm">
                  <div className="px-6 py-3">Niveau</div>
                  <div className="px-6 py-3">Délai max</div>
                </div>
                {slaTable.map((row, i) => (
                  <div
                    key={row.level}
                    className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? "bg-bg" : "bg-white"}`}
                  >
                    <div className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${row.badge}`}>
                        {row.level}
                      </span>
                    </div>
                    <div className="px-6 py-4 font-bold text-primary">{row.delay}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Contacter la hotline</h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Notre équipe est disponible pour vous assister. Appelez-nous ou écrivez-nous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0522548780"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
                >
                  <Phone size={18} />
                  05 22 54 87 80
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors duration-200 border border-white/20"
                >
                  Formulaire de contact
                  <ChevronRight size={18} />
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
