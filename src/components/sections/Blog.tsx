"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    category: "Réglementation",
    categoryColor: "bg-blue-50 text-blue-700",
    title: "Facturation Électronique au Maroc et en Afrique : Ce que les entreprises doivent anticiper dès aujourd'hui",
    excerpt: "Pourquoi la facturation électronique devient incontournable, les bénéfices pour les PME et les risques de ne pas anticiper. Comment Sage facilite la transition.",
    readTime: "6 min",
    date: "5 juin 2026",
    gradient: "from-blue-600/70 to-cyan-500/60",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80",
    imageContent: "Facturation Électronique",
    href: "/ressources/blog/facturation-electronique-maroc",
  },
  {
    category: "Ressources humaines",
    categoryColor: "bg-violet-50 text-violet-700",
    title: "SIRH : 7 tâches RH que vous pouvez automatiser dès cette année",
    excerpt: "Congés, notes de frais, pointage, recrutement, évaluations, dossiers collaborateurs, reporting RH — découvrez comment automatiser ces processus avec un SIRH moderne.",
    readTime: "5 min",
    date: "28 mai 2026",
    gradient: "from-violet-600/70 to-purple-500/60",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80",
    imageContent: "SIRH & Automatisation",
    href: "/ressources/blog/sirh-7-taches-automatisees",
  },
  {
    category: "ERP",
    categoryColor: "bg-emerald-50 text-emerald-700",
    title: "ERP Sage : 5 signes que votre entreprise a dépassé Excel",
    excerpt: "Multiplication des fichiers, erreurs de saisie, manque de visibilité, processus manuels, difficulté à piloter — il est temps de passer à un ERP.",
    readTime: "4 min",
    date: "20 mai 2026",
    gradient: "from-emerald-600/70 to-teal-500/60",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    imageContent: "ERP vs Excel",
    href: "/ressources/blog/erp-sage-depasse-excel",
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
            href="/ressources/blog"
            className="group inline-flex items-center gap-2 text-cta font-semibold text-sm hover:text-cta-hover transition-colors duration-200 cursor-pointer shrink-0"
          >
            Voir toutes les actualités
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <Link href={article.href} key={article.title}>
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-white border border-border rounded-2xl overflow-hidden card-hover"
              >
                {/* Image area */}
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient}`} />
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-1.5">
                      <BookOpen size={13} className="text-white" />
                      <span className="text-white font-semibold text-xs">
                        {article.imageContent}
                      </span>
                    </div>
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
                      Lire l&apos;article
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
