"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, BadgeCheck } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    year: "2024",
    title: "Meilleure Dynamique Commerciale Maroc 2024",
    org: "Sage Partner Sessions 2024",
    desc: "Cette distinction récompense la performance commerciale exceptionnelle de Thalès Informatique sur le marché marocain en 2024.",
    color: "from-rose-500 to-orange-400",
    iconColor: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
  {
    icon: Trophy,
    year: "2022",
    title: "Top League — Zone Export",
    org: "Top League 2022",
    desc: "Cette distinction récompense les performances de Thalès Informatique sur les marchés export et confirme son rayonnement au-delà du Maroc.",
    color: "from-amber-400 to-yellow-300",
    iconColor: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: Medal,
    year: "2019",
    title: "Meilleure Croissance Sage",
    org: "Sage Partner Sessions — Tanger",
    desc: "Cette récompense distingue la forte croissance de Thalès Informatique dans le développement et l'intégration des solutions Sage.",
    color: "from-slate-500 to-slate-400",
    iconColor: "text-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
  {
    icon: Award,
    year: "2019",
    title: "Customer Migration Journey",
    org: "Sage Partner Sessions — Bordeaux",
    desc: "Cette distinction récompense l'excellence de Thalès Informatique dans l'accompagnement des clients lors de leurs projets de migration et de transformation digitale.",
    color: "from-blue-500 to-cyan-400",
    iconColor: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Star,
    year: "2018",
    title: "Meilleure Performance Sage",
    org: "Sage Partner Sessions — Tunis",
    desc: "Cette récompense met en avant les performances commerciales et opérationnelles exceptionnelles de Thalès Informatique au sein de l'écosystème Sage.",
    color: "from-violet-500 to-purple-400",
    iconColor: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    icon: BadgeCheck,
    year: "2017",
    title: "Premier Partenaire North Africa",
    org: "Sage Partner Sessions — Marrakech",
    desc: "Cette distinction positionne Thalès Informatique comme le partenaire Sage de référence en Afrique du Nord.",
    color: "from-emerald-500 to-teal-400",
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
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
