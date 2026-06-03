"use client";

import { motion, type Variants } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "Processus manuels",
    desc: "Saisies répétitives, erreurs humaines et perte de temps au quotidien.",
  },
  {
    icon: XCircle,
    title: "Manque de visibilité",
    desc: "Décisions prises sans données fiables ni indicateurs en temps réel.",
  },
  {
    icon: XCircle,
    title: "Données dispersées",
    desc: "Informations fragmentées entre Excel, emails et outils non connectés.",
  },
  {
    icon: XCircle,
    title: "Pilotage difficile",
    desc: "Impossible d'avoir une vue consolidée de l'activité et des performances.",
  },
];

const solutions = [
  {
    icon: CheckCircle2,
    title: "Processus automatisés",
    desc: "Workflows intelligents qui éliminent les tâches répétitives et réduisent les erreurs.",
  },
  {
    icon: CheckCircle2,
    title: "Vision en temps réel",
    desc: "Tableaux de bord live pour des décisions rapides et éclairées.",
  },
  {
    icon: CheckCircle2,
    title: "Données centralisées",
    desc: "Une source unique de vérité accessible à toutes vos équipes, partout.",
  },
  {
    icon: CheckCircle2,
    title: "Pilotage performant",
    desc: "KPIs et reporting avancé pour mesurer et améliorer vos performances.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-bg-base" id="transformation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-cta uppercase tracking-widest mb-3">
            Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight text-balance">
            De vos défis à vos succès
          </h2>
          <p className="mt-4 text-base text-secondary max-w-xl mx-auto leading-relaxed">
            Nous comprenons vos enjeux métiers. Voici comment Thalès Informatique
            transforme vos problèmes en leviers de croissance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          {/* Problems */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
                Vos défis actuels
              </span>
            </div>
            {problems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-red-50/60 border border-red-100 rounded-xl p-4 group"
              >
                <item.icon size={18} className="text-red-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-primary">{item.title}</div>
                  <div className="text-xs text-secondary mt-0.5 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center self-center"
          >
            <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center shadow-lg shadow-cta/30">
              <ArrowRight size={20} className="text-white" />
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-cta/30 to-transparent mt-2" />
            <div className="text-[9px] font-semibold text-cta uppercase tracking-widest mt-2 rotate-90 whitespace-nowrap">
              Transformation
            </div>
          </motion.div>

          {/* Solutions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                Avec Thalès Informatique
              </span>
            </div>
            {solutions.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 card-hover cursor-default"
              >
                <item.icon size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-primary">{item.title}</div>
                  <div className="text-xs text-secondary mt-0.5 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
