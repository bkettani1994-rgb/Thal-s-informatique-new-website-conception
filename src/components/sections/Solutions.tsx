"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wallet,
  Users2,
  Cog,
  LineChart,
  Code2,
  Server,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Wallet,
    title: "Finance & Trésorerie",
    desc: "Comptabilité, pilotage financier, reporting et gestion de trésorerie en temps réel.",
    href: "/metiers/comptabilite-finance",
  },
  {
    icon: Users2,
    title: "RH & Paie",
    desc: "Digitalisation RH, gestion de la paie, des talents et de l'administration du personnel.",
    href: "/metiers/paie-rh",
  },
  {
    icon: Cog,
    title: "Processus Opérationnels",
    desc: "ERP, gestion commerciale, supply chain et pilotage de la production au quotidien.",
    href: "/metiers/erp",
  },
  {
    icon: LineChart,
    title: "Conseil",
    desc: "Audit, accompagnement stratégique et transformation digitale sur-mesure.",
    href: "/contact",
  },
  {
    icon: Code2,
    title: "Développement Spécifique",
    desc: "Personnalisation ERP, connecteurs métier et automatisation sur-mesure.",
    href: "/contact",
  },
  {
    icon: Server,
    title: "Ingénierie IT",
    desc: "Infrastructure, architecture système, réseaux et sécurité informatique.",
    href: "/contact",
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
            votre métier et s&apos;intègre parfaitement dans votre écosystème
            existant.
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={sol.href}
                className="group flex flex-col h-full bg-white border border-border rounded-2xl p-6 hover:bg-cta hover:border-cta transition-all duration-200 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-cta/10 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-200">
                  <sol.icon size={22} className="text-cta group-hover:text-white transition-colors duration-200" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-primary group-hover:text-white text-base mb-2 leading-tight transition-colors duration-200">
                  {sol.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-cta group-hover:text-white/80 leading-relaxed flex-1 transition-colors duration-200">
                  {sol.desc}
                </p>

                {/* Arrow */}
                <div className="mt-5">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-200">
                    <ArrowRight size={14} className="text-secondary group-hover:text-white transition-colors duration-200" />
                  </span>
                </div>
              </Link>
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
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-cta hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-cta/20"
          >
            Demander une démonstration personnalisée
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
