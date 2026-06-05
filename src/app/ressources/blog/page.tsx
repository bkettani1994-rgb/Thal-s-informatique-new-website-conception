"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag, Mail } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const articles = [
  {
    category: "Finance",
    title: "5 indicateurs financiers que tout DAF marocain doit suivre",
    excerpt: "Les KPIs essentiels pour piloter la performance financière de votre entreprise.",
    author: "Équipe Thalès Informatique",
    date: "Mai 2025",
    readTime: "5 min",
  },
  {
    category: "RH & Paie",
    title: "CNSS & AMO 2025 : les nouveaux taux et déclarations",
    excerpt: "Tout ce que vous devez savoir sur les changements réglementaires RH au Maroc.",
    author: "Équipe Thalès Informatique",
    date: "Avril 2025",
    readTime: "4 min",
  },
  {
    category: "Production",
    title: "Lean manufacturing et ERP : le duo gagnant pour l'industrie marocaine",
    excerpt: "Comment combiner les principes Lean avec un ERP pour maximiser la productivité.",
    author: "Équipe Thalès Informatique",
    date: "Avril 2025",
    readTime: "6 min",
  },
  {
    category: "Technologie",
    title: "ERP Cloud vs On-Premise : que choisir en 2025 ?",
    excerpt: "Analyse comparative des deux approches pour les entreprises marocaines.",
    author: "Équipe Thalès Informatique",
    date: "Mars 2025",
    readTime: "7 min",
  },
  {
    category: "Stratégie",
    title: "La digitalisation des PME marocaines : état des lieux 2025",
    excerpt: "Baromètre annuel de la transformation digitale des entreprises au Maroc.",
    author: "Équipe Thalès Informatique",
    date: "Février 2025",
    readTime: "10 min",
  },
  {
    category: "Réglementation",
    title: "Loi de finances 2025 : impacts sur votre ERP",
    excerpt: "Les modifications fiscales et leur implémentation dans votre système d'information.",
    author: "Équipe Thalès Informatique",
    date: "Janvier 2025",
    readTime: "5 min",
  },
];

const categories = ["Tous", "Finance", "RH & Paie", "Production", "Technologie", "Stratégie", "Réglementation"];

const categoryColors: Record<string, string> = {
  Finance: "bg-green-100 text-green-700",
  "RH & Paie": "bg-purple-100 text-purple-700",
  Production: "bg-orange-100 text-orange-700",
  Technologie: "bg-blue-100 text-blue-700",
  Stratégie: "bg-indigo-100 text-indigo-700",
  Réglementation: "bg-red-100 text-red-700",
};

export default function BlogPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });
  const [activeCategory, setActiveCategory] = useState("Tous");
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
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/ressources" className="hover:text-white transition-colors">Ressources</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Blog Décisionnel</span>
            </div>

            <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
              BLOG
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog Décisionnel
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Transformation digitale marocaine — articles, analyses et tendances
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16" ref={contentRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary rounded-2xl p-8 md:p-12 mb-12">
              <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
                Stratégie ERP
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Comment réussir votre projet ERP en 6 étapes
              </h2>
              <p className="text-white/70 text-lg mb-6 max-w-3xl">
                Un projet ERP bien conduit peut transformer radicalement la performance de votre entreprise.
                Découvrez la méthode Thalès Informatique pour un déploiement réussi, du cadrage initial à la mise en production.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-6">
                <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
                <span className="flex items-center gap-1"><Tag size={14} /> Juin 2025</span>
                <span className="flex items-center gap-1"><Clock size={14} /> 8 min de lecture</span>
              </div>
              <Link
                href="/ressources/blog/reussir-projet-erp"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Lire l&apos;article →
              </Link>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-cta text-white"
                      : "bg-white border border-border text-secondary hover:border-cta hover:text-cta"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Article Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {articles.map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
                >
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryColors[article.category] || "bg-slate-100 text-slate-600"}`}>
                    {article.category}
                  </span>
                  <h3 className="text-base font-bold text-primary mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-secondary mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Tag size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <Mail size={32} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Recevez nos articles chaque semaine</h3>
              <p className="text-white/60 mb-6">Les meilleures analyses ERP et finance directement dans votre boîte mail.</p>
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
