"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, BookOpen, Monitor, Laptop, Clock } from "lucide-react";
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

const catalog = [
  { title: "Formation Finance & Comptabilité", duration: "2 jours", desc: "Saisie comptable, lettrage, rapprochements, états financiers." },
  { title: "Formation RH & Paie", duration: "2 jours", desc: "Gestion des employés, bulletins de paie, déclarations sociales." },
  { title: "Formation Gestion commerciale", duration: "1 jour", desc: "Devis, commandes, livraisons, factures clients et fournisseurs." },
  { title: "Formation Production & Stocks", duration: "2 jours", desc: "Gammes, ordres de fabrication, gestion des entrepôts et mouvements." },
  { title: "Formation Reporting & BI", duration: "1 jour", desc: "Construction de tableaux de bord, KPIs, exports et analyses." },
  { title: "Formation Administrateur ERP", duration: "3 jours", desc: "Paramétrage, gestion des droits, sauvegardes et maintenance." },
];

const formats = [
  { icon: Monitor, title: "Présentiel", subtitle: "Sur site", desc: "Nos formateurs se déplacent dans vos locaux à Casablanca, Rabat, Fès ou Marrakech pour une formation 100% adaptée à votre environnement." },
  { icon: Laptop, title: "Classe virtuelle", subtitle: "En ligne", desc: "Sessions interactives en visioconférence avec partage d'écran, exercices pratiques et support en temps réel." },
  { icon: Clock, title: "E-learning", subtitle: "À votre rythme", desc: "Modules vidéo disponibles 24h/24, quiz de validation et suivi de progression pour chaque apprenant." },
];

export default function FormationUtilisateursPage() {
  const introRef = useRef(null);
  const catalogRef = useRef(null);
  const formatsRef = useRef(null);
  const certifRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const catalogInView = useInView(catalogRef, { once: true, margin: "-100px" });
  const formatsInView = useInView(formatsRef, { once: true, margin: "-100px" });
  const certifInView = useInView(certifRef, { once: true, margin: "-100px" });
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
              <span className="text-accent">Formation Utilisateurs</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
                <BookOpen size={14} />
                FORMATION
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Formation Utilisateurs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 max-w-2xl"
            >
              Maximisation pédagogique locale — formations sur site et en ligne
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
              <h2 className="text-3xl font-bold text-primary mb-6">Des formations adaptées à chaque profil</h2>
              <p className="text-lg text-secondary leading-relaxed">
                Thalès Informatique propose des programmes de formation adaptés à chaque profil utilisateur — dirigeants,
                comptables, RH, magasiniers, commerciaux. Nos formateurs certifiés Sage interviennent directement dans vos
                locaux à Casablanca, Rabat, Fès et Marrakech, garantissant une approche pédagogique ancrée dans votre réalité
                opérationnelle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Catalog */}
        <section className="py-20 bg-white" ref={catalogRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={catalogInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Catalogue de formations</h2>
              <p className="text-secondary">6 modules couvrant l'ensemble des métiers ERP</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={catalogInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {catalog.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="p-6 rounded-xl border border-border hover:border-emerald-300 hover:shadow-md transition-all duration-300 bg-bg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <BookOpen size={20} className="text-emerald-600" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Formats */}
        <section className="py-20" ref={formatsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={formatsInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Formats proposés</h2>
              <p className="text-secondary">Choisissez la modalité qui correspond à votre organisation</p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={formatsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {formats.map((format) => (
                <motion.div
                  key={format.title}
                  variants={fadeUp}
                  className="p-8 rounded-2xl bg-white border border-border text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <format.icon size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">{format.title}</h3>
                  <p className="text-sm text-emerald-600 font-medium mb-3">{format.subtitle}</p>
                  <p className="text-secondary text-sm leading-relaxed">{format.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-emerald-50" ref={certifRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={certifInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl border border-emerald-200 p-10 text-center shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Formateurs certifiés Sage</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Nos formateurs sont certifiés Sage — vos équipes reçoivent une attestation officielle de formation
                reconnue par l'éditeur, valorisant vos collaborateurs et votre organisation.
              </p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Planifier une formation</h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Contactez-nous pour définir le programme adapté à vos équipes et planifier les sessions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Planifier une formation
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
