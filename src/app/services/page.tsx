"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Search, GitMerge, BookOpen, Shield, Headphones, Award, MapPin, Zap } from "lucide-react";
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

const categories = [
  {
    badge: "CONSEIL",
    badgeColor: "bg-blue-100 text-blue-700",
    services: [
      {
        icon: Search,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "Audit & Conseil",
        desc: "Cadrage préliminaire de vos flux métiers — diagnostic, cartographie et feuille de route de transformation.",
        href: "/services/audit-conseil",
      },
    ],
  },
  {
    badge: "INTÉGRATION",
    badgeColor: "bg-violet-100 text-violet-700",
    services: [
      {
        icon: GitMerge,
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
        title: "Intégration ERP",
        desc: "Développements de connecteurs API pour relier votre ERP à votre écosystème e-commerce, CRM, banque, EDI.",
        href: "/services/integration-erp",
      },
    ],
  },
  {
    badge: "FORMATION",
    badgeColor: "bg-emerald-100 text-emerald-700",
    services: [
      {
        icon: BookOpen,
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        title: "Formation Utilisateurs",
        desc: "Formations certifiées Sage sur site ou en ligne — adaptées à chaque profil de votre organisation.",
        href: "/services/formation-utilisateurs",
      },
    ],
  },
  {
    badge: "SUPPORT",
    badgeColor: "bg-amber-100 text-amber-700",
    services: [
      {
        icon: Shield,
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        title: "Support & Maintenance",
        desc: "Contrats SLA Essentiel, Business et Premium — disponibilité garantie et mises à jour incluses.",
        href: "/services/support-maintenance",
      },
      {
        icon: Headphones,
        iconBg: "bg-rose-100",
        iconColor: "text-rose-600",
        title: "Assistance Utilisateurs",
        desc: "Hotline Casablanca, téléassistance TeamViewer, WhatsApp 24/7 — déblocages en temps réel.",
        href: "/services/assistance-utilisateurs",
      },
    ],
  },
];

const reasons = [
  {
    icon: Award,
    title: "Experts certifiés",
    desc: "Nos consultants et formateurs sont certifiés Sage X3 et Sage 100. Vous bénéficiez d'une expertise reconnue par l'éditeur.",
  },
  {
    icon: MapPin,
    title: "Présence nationale",
    desc: "Thalès Informatique intervient dans toutes les grandes villes du Maroc : Casablanca, Rabat, Fès, Marrakech et Tanger.",
  },
  {
    icon: Zap,
    title: "Réactivité garantie",
    desc: "Délais d'intervention contractuels dès 1h pour les incidents critiques. Notre hotline reste disponible en permanence.",
  },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const reasonsRef = useRef(null);
  const ctaRef = useRef(null);

  const categoriesInView = useInView(categoriesRef, { once: true, margin: "-100px" });
  const reasonsInView = useInView(reasonsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary" ref={heroRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Services</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
            >
              Nos Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 max-w-3xl"
            >
              De l'audit à l'assistance — un accompagnement complet sur tout le cycle de vie de votre ERP
            </motion.p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20" ref={categoriesRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {categories.map((cat) => (
                <motion.div
                  key={cat.badge}
                  variants={stagger}
                  initial="hidden"
                  animate={categoriesInView ? "visible" : "hidden"}
                >
                  <motion.div variants={fadeUp} className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${cat.badgeColor}`}>
                      {cat.badge}
                    </span>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cat.services.map((svc) => (
                      <motion.div key={svc.title} variants={fadeUp}>
                        <Link
                          href={svc.href}
                          className="group block p-8 rounded-2xl bg-white border border-border hover:border-cta hover:shadow-lg transition-all duration-300"
                        >
                          <div className={`w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center mb-5`}>
                            <svc.icon size={24} className={svc.iconColor} />
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-cta transition-colors">
                            {svc.title}
                          </h3>
                          <p className="text-secondary text-sm leading-relaxed mb-4">{svc.desc}</p>
                          <span className="inline-flex items-center gap-1 text-cta text-sm font-semibold">
                            En savoir plus <ChevronRight size={16} />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Thalès */}
        <section className="py-20 bg-white" ref={reasonsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={reasonsInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-4">Pourquoi choisir Thalès Informatique ?</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                30 ans d'expérience au service des entreprises marocaines
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate={reasonsInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {reasons.map((r) => (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  className="p-8 rounded-2xl bg-bg border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cta/10 flex items-center justify-center mx-auto mb-5">
                    <r.icon size={28} className="text-cta" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{r.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold text-white mb-4">Prêt à transformer votre ERP ?</h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Contactez-nous pour un diagnostic gratuit de vos besoins.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Demander un diagnostic gratuit
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
