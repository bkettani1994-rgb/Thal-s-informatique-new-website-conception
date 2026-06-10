"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, BookOpen } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const featuredArticle = {
  title: "Comment réussir votre projet ERP en 6 étapes",
  excerpt: "La mise en place d'un ERP est l'un des projets les plus structurants pour une entreprise. Découvrez notre méthodologie éprouvée sur 30 ans et 500+ projets au Maroc : de l'analyse des besoins à la formation des utilisateurs, en passant par la gestion du changement et la migration des données. Un guide complet pour maximiser votre ROI et minimiser les risques.",
  author: "Ahmed Benkirane",
  role: "Consultant ERP Senior",
  date: "2 Janvier 2025",
  readTime: "12 min",
  category: "Stratégie",
  color: "blue",
};

const articles = [
  {
    title: "5 signes que votre entreprise a besoin d'un ERP",
    excerpt: "Feuilles Excel partout, données dispersées, rapports qui prennent des heures... Voici les signaux qui indiquent qu'il est temps de passer à un ERP.",
    author: "Sara Idrissi",
    date: "28 Déc 2024",
    readTime: "6 min",
    category: "Finance",
    color: "blue",
  },
  {
    title: "CNSS & AMO : les changements 2025 à connaître",
    excerpt: "Le bulletin officiel a publié les nouveaux taux et barèmes applicables en 2025. Votre ERP est-il à jour ? On fait le point.",
    author: "Fatima Zahra Alami",
    date: "20 Déc 2024",
    readTime: "8 min",
    category: "RH & Paie",
    color: "violet",
  },
  {
    title: "Lean manufacturing et ERP : le duo gagnant",
    excerpt: "Comment intégrer les principes du Lean dans votre ERP pour éliminer les gaspillages et maximiser la valeur ajoutée de votre production.",
    author: "Mohamed Tazi",
    date: "15 Déc 2024",
    readTime: "9 min",
    category: "Production",
    color: "emerald",
  },
  {
    title: "KPIs financiers essentiels pour le dirigeant marocain",
    excerpt: "BFR, EBITDA, cash-flow opérationnel... Les 10 indicateurs que tout dirigeant doit surveiller pour piloter son entreprise efficacement.",
    author: "Karim Benali",
    date: "10 Déc 2024",
    readTime: "7 min",
    category: "Pilotage",
    color: "amber",
  },
  {
    title: "ERP Cloud vs On-Premise : que choisir en 2025 ?",
    excerpt: "Analyse comparative des deux approches pour les entreprises marocaines : coûts, sécurité, performance, conformité RGPD et perspectives d'évolution.",
    author: "Youssef El Fassi",
    date: "5 Déc 2024",
    readTime: "10 min",
    category: "Technologie",
    color: "indigo",
  },
  {
    title: "La digitalisation des PME marocaines en 2025",
    excerpt: "État des lieux, défis et opportunités pour les PME qui entament leur transformation digitale. Témoignages d'entreprises ayant franchi le pas.",
    author: "Nadia Cherkaoui",
    date: "1 Déc 2024",
    readTime: "11 min",
    category: "Stratégie",
    color: "rose",
  },
];

const categories = ["Tous", "Finance", "RH & Paie", "Production", "Stratégie", "Technologie", "Pilotage"];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100 text-blue-700" },
  violet: { bg: "bg-violet-50", text: "text-violet-700", badge: "bg-violet-100 text-violet-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", badge: "bg-amber-100 text-amber-700" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-700" },
  rose: { bg: "bg-rose-50", text: "text-rose-700", badge: "bg-rose-100 text-rose-700" },
};

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function BlogClient() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-primary to-primary" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">Blog</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                <BookOpen size={20} className="text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Ressources & Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Blog<br />
              <span className="text-accent">& Ressources</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Actualités, guides et conseils pour la transformation digitale de votre entreprise. Publié par nos experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10">
              <span className="text-cta text-sm font-semibold uppercase tracking-widest">À la une</span>
            </div>
            <div className="bg-white border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 p-8 md:p-12">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-secondary leading-relaxed mb-8">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-secondary mb-8">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-cta" />
                      <span>{featuredArticle.author}</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-400">{featuredArticle.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-secondary mb-8">
                    <span>{featuredArticle.date}</span>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{featuredArticle.readTime} de lecture</span>
                    </div>
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
                  >
                    Lire l'article
                    <ChevronRight size={16} />
                  </Link>
                </div>
                <div className="lg:col-span-2 bg-gradient-to-br from-cta/20 via-blue-900/30 to-primary flex items-center justify-center p-12 min-h-48">
                  <div className="text-center">
                    <div className="text-6xl font-black text-white/10 mb-3">ERP</div>
                    <div className="text-white/40 text-sm">6 étapes pour réussir</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    cat === "Tous"
                      ? "bg-cta text-white"
                      : "bg-white border border-border text-secondary hover:text-primary hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => {
              const colors = colorMap[article.color];
              return (
                <FadeIn key={article.title} delay={i * 0.08}>
                  <div className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    <div className={`${colors.bg} h-32 flex items-center justify-center`}>
                      <BookOpen size={32} className={`${colors.text} opacity-30`} />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${colors.badge} mb-3 self-start`}>
                        {article.category}
                      </span>
                      <h3 className="font-bold text-primary mb-3 leading-tight">{article.title}</h3>
                      <p className="text-secondary text-sm leading-relaxed mb-5 flex-grow">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-secondary border-t border-border pt-4">
                        <div className="flex items-center gap-1.5">
                          <User size={12} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-3">Restez informé</h2>
            <p className="text-white/60 mb-8">Recevez nos meilleurs articles et guides chaque semaine. Désabonnement en un clic.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-white/30 rounded-xl focus:outline-none focus:border-accent/60 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-primary font-semibold rounded-xl hover:bg-sky-300 transition-colors duration-200 text-sm whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
            <p className="text-white/30 text-xs mt-3">Aucun spam. Désinscription facile à tout moment.</p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
