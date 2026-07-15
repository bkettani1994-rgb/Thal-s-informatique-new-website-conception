"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle, EyeOff, Database, BarChart2, ShieldAlert,
  Zap, Eye, GitMerge, TrendingUp, ShieldCheck,
} from "lucide-react";

const rows = [
  {
    defi: {
      icon: AlertTriangle,
      title: "Processus manuels",
      desc: "Saisies répétitives sur Excel, ressaisies entre services, erreurs humaines qui coûtent du temps chaque jour.",
    },
    solution: {
      icon: Zap,
      title: "Processus automatisés",
      desc: "Des workflows intelligents qui suppriment les tâches répétitives, réduisent les erreurs et libèrent vos équipes.",
    },
  },
  {
    defi: {
      icon: EyeOff,
      title: "Manque de visibilité",
      desc: "Décisions prises sans indicateurs fiables ni vue d'ensemble sur l'activité en temps réel.",
    },
    solution: {
      icon: Eye,
      title: "Vision en temps réel",
      desc: "Des tableaux de bord en temps réel pour des décisions rapides, éclairées et partagées entre équipes.",
    },
  },
  {
    defi: {
      icon: Database,
      title: "Données dispersées",
      desc: "Informations fragmentées entre Excel, e-mails et outils non connectés entre eux.",
    },
    solution: {
      icon: GitMerge,
      title: "Données centralisées",
      desc: "Une source unique de vérité, centralisée et accessible à toutes vos équipes en temps réel.",
    },
  },
  {
    defi: {
      icon: BarChart2,
      title: "Pilotage difficile",
      desc: "Impossible d'obtenir une vue consolidée de l'activité, des marges et des performances par site.",
    },
    solution: {
      icon: TrendingUp,
      title: "Pilotage performant",
      desc: "KPIs et reporting avancé pour mesurer, comparer et améliorer vos performances en continu.",
    },
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-bg-base" id="transformation">
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
            Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Transformez vos défis métiers en opportunités de croissance
          </h2>
          <p className="mt-4 text-base text-secondary max-w-xl mx-auto leading-relaxed">
            Les entreprises qui réussissent leur transformation digitale s&apos;appuient sur des solutions ERP et de gestion d&apos;entreprise qui unifient leurs données, automatisent leurs processus et leur donnent une vision claire pour prendre les bonnes décisions.
          </p>
        </motion.div>

        {/* Rows */}
        <div className="space-y-4">
          {rows.map((row, i) => (
            <motion.div
              key={row.defi.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-2 gap-3"
            >
              {/* Défi */}
              <div className="flex items-start gap-4 bg-slate-800 rounded-2xl px-6 py-5">
                <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <row.defi.icon size={17} className="text-slate-300" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Défi {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="font-bold text-white text-sm mb-1">{row.defi.title}</p>
                  <p className="hidden md:block text-slate-400 text-xs leading-relaxed">{row.defi.desc}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="flex items-start gap-4 bg-gradient-to-r from-cta to-blue-400 rounded-2xl px-6 py-5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <row.solution.icon size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">
                    Solution {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="font-bold text-white text-sm mb-1">{row.solution.title}</p>
                  <p className="hidden md:block text-white/80 text-xs leading-relaxed">{row.solution.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
