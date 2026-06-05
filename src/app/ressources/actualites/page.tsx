"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Bell, Mail } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const lfNews = [
  {
    tag: "LF 2025 — IR & Barème",
    title: "Modification du barème de l'impôt sur le revenu",
    desc: "Impact sur la paie et les bulletins de salaire. Mise à jour disponible dans Sage 100 Paie et Sage X3 RH.",
    date: "Jan 2025",
    color: "border-l-blue-500",
  },
  {
    tag: "LF 2025 — TVA",
    title: "Nouveaux taux TVA applicables au 1er janvier 2025",
    desc: "Révision des taux de TVA sur plusieurs catégories de produits et services. Paramétrage automatique dans vos solutions Sage.",
    date: "Jan 2025",
    color: "border-l-green-500",
  },
  {
    tag: "LF 2025 — IS",
    title: "Taux d'imposition sur les sociétés, nouvelles tranches",
    desc: "Nouvelles tranches d'IS progressif pour les entreprises marocaines. Impacts sur le module comptabilité Sage.",
    date: "Jan 2025",
    color: "border-l-purple-500",
  },
  {
    tag: "LF 2025 — CNSS",
    title: "Évolution du plafond de cotisation CNSS",
    desc: "Nouveau plafond mensuel de cotisation CNSS. Implémenté dans Sage 100 Paie et les paramètres RH de Sage X3.",
    date: "Jan 2025",
    color: "border-l-orange-500",
  },
];

const companyNews = [
  {
    title: "Thalès Informatique certifié Sage Gold Partner 2025",
    desc: "Nous sommes fiers d'annoncer le renouvellement de notre certification Sage Gold Partner, attestant de notre expertise et de la satisfaction de nos clients.",
    date: "Fév 2025",
    tag: "Certification",
  },
  {
    title: "Ouverture de notre nouvelle agence à Rabat",
    desc: "Pour mieux servir nos clients de la région de Rabat-Salé-Kénitra, Thalès Informatique ouvre une nouvelle agence dans la capitale administrative du Maroc.",
    date: "Mars 2025",
    tag: "Expansion",
  },
  {
    title: "Thalès Informatique au Forum IT Maroc 2025",
    desc: "Retrouvez nos experts au stand Thalès Informatique lors du Forum IT Maroc. Démonstrations live, conférences et rencontres avec nos ingénieurs.",
    date: "Avril 2025",
    tag: "Événement",
  },
];

export default function ActualitesPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });
  const [email, setEmail] = useState("");

  return (
    <main className="overflow-x-hidden bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/ressources" className="hover:text-white transition-colors">Ressources</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Actualités</span>
            </div>
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
              ACTUALITÉS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Actualités</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Nouveautés de la loi de finance &amp; actualités Thalès Informatique
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" ref={contentRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Breaking News Banner */}
            <div className="bg-cta rounded-xl px-6 py-4 flex items-center gap-3 mb-12">
              <Bell size={20} className="text-white shrink-0" />
              <p className="text-white font-semibold text-sm md:text-base">
                🔔 Loi de Finances 2025 — Mise à jour disponible dans Sage X3 et Sage 100
              </p>
            </div>

            {/* LF 2025 News */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-primary mb-2">Loi de Finances 2025</h2>
              <p className="text-secondary mb-8">Toutes les modifications réglementaires et leurs impacts sur vos solutions Sage.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lfNews.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`bg-white rounded-xl border border-border border-l-4 ${item.color} p-6 hover:shadow-md transition-shadow`}
                  >
                    <span className="inline-block text-xs font-bold text-cta bg-blue-50 px-2.5 py-1 rounded-full mb-3">{item.tag}</span>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-secondary mb-3">{item.desc}</p>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Company News */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-primary mb-2">Vie de l&apos;entreprise</h2>
              <p className="text-secondary mb-8">Les dernières nouvelles de Thalès Informatique.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {companyNews.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
                  >
                    <span className="inline-block text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full mb-3">{item.tag}</span>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-secondary mb-3">{item.desc}</p>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <Mail size={32} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Restez informé des actualités réglementaires</h3>
              <p className="text-white/60 mb-6">Recevez chaque mise à jour légale dès sa publication — loi de finances, CNSS, TVA, IS.</p>
              <form
                onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  S&apos;abonner
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
