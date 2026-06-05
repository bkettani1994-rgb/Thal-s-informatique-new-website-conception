"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, BookOpen, FileText, Newspaper, HelpCircle, Mail } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const resourceCards = [
  {
    icon: BookOpen,
    label: "Blog Décisionnel",
    href: "/ressources/blog",
    desc: "Articles, analyses et tendances sur la transformation digitale marocaine et les bonnes pratiques ERP.",
    cta: "Lire le blog",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: FileText,
    label: "Guides ERP",
    href: "/ressources/guides-erp",
    desc: "Cahiers des charges types, guides d'audit et modèles pratiques pour préparer votre projet ERP.",
    cta: "Voir les guides",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Newspaper,
    label: "Actualités",
    href: "/ressources/actualites",
    desc: "Loi de finances, mises à jour CNSS/TVA/IS et toutes les actualités de Thalès Informatique.",
    cta: "Voir les actualités",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: HelpCircle,
    label: "FAQ",
    href: "/ressources/faq",
    desc: "Réponses de nos ingénieurs experts à vos questions sur les projets ERP, le support et la formation.",
    cta: "Consulter la FAQ",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export default function RessourcesPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });
  const [name, setName] = useState("");
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
              <span className="text-accent">Ressources</span>
            </div>
            <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
              RESSOURCES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ressources</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Documentation, guides et actualités pour piloter votre transformation digitale
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
            {/* Resource Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {resourceCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow group"
                >
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                    <card.icon size={24} className={card.color} />
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-3">{card.label}</h2>
                  <p className="text-secondary mb-6 leading-relaxed">{card.desc}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-cta font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {card.cta} <ChevronRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Featured Guide */}
            <div className="bg-primary rounded-2xl p-8 md:p-12 mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
                    GUIDE GRATUIT
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Téléchargez notre Guide Cahier des Charges ERP
                  </h2>
                  <p className="text-white/70 mb-2">
                    32 pages de méthodologie pratique pour préparer votre consultation ERP, rédiger vos exigences fonctionnelles et comparer les offres.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1 mt-4">
                    <li>✓ Template de CDC complet</li>
                    <li>✓ Grille d&apos;évaluation des éditeurs</li>
                    <li>✓ Checklist processus métier</li>
                  </ul>
                </div>
                <div>
                  <form
                    onSubmit={(e) => { e.preventDefault(); setName(""); setEmail(""); }}
                    className="bg-white/10 rounded-xl p-6 space-y-4"
                  >
                    <div>
                      <label className="block text-white/70 text-sm mb-1">Votre nom</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Prénom Nom"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-1">Votre email professionnel</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Mail size={18} /> Télécharger gratuitement
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Besoin d&apos;un accompagnement personnalisé ?</h3>
              <p className="text-secondary mb-6">Nos consultants sont disponibles pour répondre à vos questions et vous guider dans votre projet ERP.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contacter un expert <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
