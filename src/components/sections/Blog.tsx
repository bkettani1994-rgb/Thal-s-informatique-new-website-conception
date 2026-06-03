"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    category: "Transformation digitale",
    categoryColor: "bg-blue-50 text-blue-700",
    title:
      "Comment l'ERP accélère la transformation digitale des PME marocaines",
    excerpt:
      "Découvrez comment les entreprises marocaines utilisent les solutions ERP pour gagner en compétitivité sur le marché africain.",
    readTime: "5 min",
    date: "2 juin 2025",
    gradient: "from-blue-600 to-cyan-500",
    imageContent: "ERP & Digital",
  },
  {
    category: "Gestion financière",
    categoryColor: "bg-emerald-50 text-emerald-700",
    title:
      "Les 7 indicateurs financiers essentiels à surveiller en temps réel",
    excerpt:
      "Un pilotage financier efficace repose sur le suivi de KPIs précis. Découvrez les indicateurs indispensables à votre tableau de bord.",
    readTime: "4 min",
    date: "28 mai 2025",
    gradient: "from-emerald-600 to-teal-500",
    imageContent: "Finance & KPIs",
  },
  {
    category: "Ressources humaines",
    categoryColor: "bg-violet-50 text-violet-700",
    title:
      "Automatisation de la paie : enjeux et bonnes pratiques au Maroc",
    excerpt:
      "La gestion de la paie est souvent chronophage et source d'erreurs. Voici comment l'automatisation transforme les RH au Maroc.",
    readTime: "6 min",
    date: "20 mai 2025",
    gradient: "from-violet-600 to-purple-500",
    imageContent: "RH & Paie",
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block text-xs font-semibold text-cta uppercase tracking-widest mb-3">
              Actualités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Blog & ressources
            </h2>
            <p className="mt-3 text-base text-secondary max-w-lg leading-relaxed">
              Nos experts partagent leurs connaissances pour vous aider à
              mieux piloter votre transformation digitale.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-cta font-semibold text-sm hover:text-cta-hover transition-colors duration-200 cursor-pointer shrink-0"
          >
            Voir toutes les actualités
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white border border-border rounded-2xl overflow-hidden cursor-pointer card-hover"
            >
              {/* Image area */}
              <div
                className={`h-44 bg-gradient-to-br ${article.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div
                      key={j}
                      className="absolute rounded-full bg-white"
                      style={{
                        width: `${40 + j * 20}px`,
                        height: `${40 + j * 20}px`,
                        top: `${-10 + j * 15}%`,
                        left: `${j * 15}%`,
                        opacity: 0.3,
                      }}
                    />
                  ))}
                </div>
                <div className="relative flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                  <BookOpen size={16} className="text-white" />
                  <span className="text-white font-semibold text-sm">
                    {article.imageContent}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`${article.categoryColor} text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full`}
                  >
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-secondary/60">
                    <Clock size={11} />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-primary leading-snug mb-2 group-hover:text-cta transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-xs text-secondary leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-secondary/50">{article.date}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-cta opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Lire l'article
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
