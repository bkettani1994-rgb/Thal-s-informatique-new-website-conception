"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Calculator,
  Users2,
  Wallet,
  Cog,
  Wrench,
  MessageSquareText,
  LineChart,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: BarChart3,
    title: "Gestion financière",
    desc: "Pilotez vos finances avec précision : comptabilité générale, budgets, clôtures et consolidation.",
    color: "text-blue-600",
    bgLight: "bg-blue-50",
    border: "border-blue-100 hover:border-blue-300",
    tag: "Finance",
  },
  {
    icon: Calculator,
    title: "Comptabilité & fiscalité",
    desc: "Conformité fiscale totale, déclarations automatisées et gestion des taxes en temps réel.",
    color: "text-indigo-600",
    bgLight: "bg-indigo-50",
    border: "border-indigo-100 hover:border-indigo-300",
    tag: "Comptabilité",
  },
  {
    icon: Users2,
    title: "Gestion RH & paie",
    desc: "Recrutement, carrières, évaluations et paie multi-conventions sur une seule plateforme.",
    color: "text-violet-600",
    bgLight: "bg-violet-50",
    border: "border-violet-100 hover:border-violet-300",
    tag: "Ressources humaines",
  },
  {
    icon: Wallet,
    title: "Gestion de trésorerie",
    desc: "Prévisions de cash-flow, rapprochements bancaires et gestion des flux financiers en temps réel.",
    color: "text-emerald-600",
    bgLight: "bg-emerald-50",
    border: "border-emerald-100 hover:border-emerald-300",
    tag: "Trésorerie",
  },
  {
    icon: Cog,
    title: "Gestion de production",
    desc: "Planification, ordres de fabrication, suivi des coûts et gestion des capacités de production.",
    color: "text-amber-600",
    bgLight: "bg-amber-50",
    border: "border-amber-100 hover:border-amber-300",
    tag: "Production",
  },
  {
    icon: Wrench,
    title: "Maintenance des équipements",
    desc: "GMAO complète : interventions préventives, correctives, suivi des actifs et gestion des techniciens.",
    color: "text-orange-600",
    bgLight: "bg-orange-50",
    border: "border-orange-100 hover:border-orange-300",
    tag: "Maintenance",
  },
  {
    icon: MessageSquareText,
    title: "Gestion de la relation client",
    desc: "Suivi des opportunités, historique client, devis et fidélisation pour maximiser vos revenus.",
    color: "text-rose-600",
    bgLight: "bg-rose-50",
    border: "border-rose-100 hover:border-rose-300",
    tag: "CRM",
  },
  {
    icon: LineChart,
    title: "Reporting & pilotage",
    desc: "Tableaux de bord personnalisables, KPIs et analyses décisionnelles pour piloter votre activité.",
    color: "text-cyan-600",
    bgLight: "bg-cyan-50",
    border: "border-cyan-100 hover:border-cyan-300",
    tag: "Business Intelligence",
  },
];

export default function Solutions() {
  return (
    <section className="py-24 bg-bg-base" id="solutions">
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
            Nos solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Des outils pensés pour vos besoins métiers
          </h2>
          <p className="mt-4 text-base text-secondary max-w-xl mx-auto leading-relaxed">
            Chaque solution est conçue pour répondre aux défis spécifiques de
            votre métier et s'intègre parfaitement dans votre écosystème
            existant.
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
              className={`group bg-white border ${sol.border} rounded-2xl p-5 cursor-pointer card-hover transition-all duration-200 relative overflow-hidden`}
            >
              {/* Tag */}
              <span
                className={`inline-block ${sol.bgLight} ${sol.color} text-[10px] font-semibold px-2 py-0.5 rounded-full mb-4 uppercase tracking-wide`}
              >
                {sol.tag}
              </span>

              {/* Icon */}
              <div
                className={`${sol.bgLight} w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
              >
                <sol.icon size={20} className={sol.color} />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-primary mb-2 leading-tight">
                {sol.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-secondary leading-relaxed">{sol.desc}</p>

              {/* Hover CTA */}
              <div className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 translate-y-1 group-hover:translate-y-0">
                <span className={`text-xs font-semibold ${sol.color}`}>
                  Découvrir
                </span>
                <ArrowRight size={11} className={sol.color} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-cta/20 cursor-pointer"
          >
            Demander une démonstration personnalisée
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
