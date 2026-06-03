"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Shield, Award, BadgeCheck } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    year: "2024",
    title: "Partenaire Platinum",
    org: "Sage Software",
    desc: "Certification Platinum Partner pour l'excellence en implémentation et support.",
    color: "from-amber-400 to-yellow-300",
    iconColor: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: Medal,
    year: "2023",
    title: "Meilleur Partenaire ERP",
    org: "IT Awards Maroc",
    desc: "Récompensé pour l'innovation et l'excellence dans le déploiement de solutions ERP.",
    color: "from-slate-400 to-slate-300",
    iconColor: "text-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    icon: Shield,
    year: "2023",
    title: "Microsoft Partner",
    org: "Microsoft Corporation",
    desc: "Partenaire certifié Microsoft pour les solutions Cloud et infrastructure d'entreprise.",
    color: "from-blue-500 to-cyan-400",
    iconColor: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Star,
    year: "2022",
    title: "Top 10 IT Consulting",
    org: "Digital Morocco Awards",
    desc: "Classé parmi les 10 meilleures sociétés de conseil IT au Maroc par Digital Morocco.",
    color: "from-violet-500 to-purple-400",
    iconColor: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    icon: Award,
    year: "2022",
    title: "Excellence Formation",
    org: "OFPPT Partenariat",
    desc: "Distinction pour la qualité des formations dispensées aux équipes métiers.",
    color: "from-emerald-500 to-teal-400",
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: BadgeCheck,
    year: "2021",
    title: "Certification ISO 9001",
    org: "Bureau Veritas",
    desc: "Management de la qualité certifié ISO 9001 pour l'ensemble de nos prestations.",
    color: "from-orange-500 to-red-400",
    iconColor: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

export default function Awards() {
  return (
    <section className="py-24 bg-white" id="trophees">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-cta uppercase tracking-widest mb-3">
            Reconnaissance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Nos trophées & distinctions
          </h2>
          <p className="mt-4 text-base text-secondary max-w-xl mx-auto leading-relaxed">
            Trois décennies d'engagement récompensées par les plus hautes
            distinctions du secteur.
          </p>
        </motion.div>

        {/* Awards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative ${award.bg} border ${award.border} rounded-2xl p-6 cursor-default card-hover overflow-hidden`}
            >
              {/* Year badge */}
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-semibold text-white/80 bg-primary/80 px-2 py-0.5 rounded-full">
                  {award.year}
                </span>
              </div>

              {/* Icon with gradient badge */}
              <div className="relative mb-4 inline-block">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}
                >
                  <award.icon size={22} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-[10px] font-semibold text-secondary uppercase tracking-wider mb-1">
                {award.org}
              </div>
              <h3 className="text-sm font-bold text-primary mb-2 leading-tight">
                {award.title}
              </h3>
              <p className="text-xs text-secondary leading-relaxed">{award.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
