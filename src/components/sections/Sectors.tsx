"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Factory, ShoppingCart, Briefcase, HardHat, Wheat, ArrowRight } from "lucide-react";

const sectors = [
  {
    icon: Factory,
    label: "Industrie",
    href: "/secteurs/industrie",
    description:
      "Optimisez votre production, gérez vos stocks et pilotez vos performances industrielles en temps réel.",
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: ShoppingCart,
    label: "Négoce & Distribution",
    href: "/secteurs/negoce-distribution",
    description:
      "Gérez vos achats, ventes, stocks et livraisons avec une solution intégrée et performante.",
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-100",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Briefcase,
    label: "Services",
    href: "/secteurs/services",
    description:
      "Pilotez vos projets, facturation et ressources humaines avec précision et efficacité.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-100",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: HardHat,
    label: "BTP",
    href: "/secteurs/btp",
    description:
      "Suivez vos chantiers, budgets, sous-traitants et équipements depuis une plateforme unique.",
    color: "from-orange-500 to-red-500",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-100",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Wheat,
    label: "Agroalimentaire",
    href: "/secteurs/agroalimentaire",
    description:
      "Maîtrisez vos processus de fabrication, traçabilité et conformité réglementaire.",
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-100",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export default function Sectors() {
  return (
    <section className="py-24 bg-white" id="secteurs">
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
              Expertises métiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Secteurs d'activité
            </h2>
            <p className="mt-3 text-base text-secondary max-w-lg leading-relaxed">
              Des solutions adaptées aux spécificités de chaque secteur pour
              répondre précisément à vos besoins métiers.
            </p>
          </div>
          <Link
            href="/secteurs"
            className="group inline-flex items-center gap-2 text-cta font-semibold text-sm hover:text-cta-hover transition-colors duration-200 cursor-pointer shrink-0"
          >
            Découvrir nos expertises métiers
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={sector.href}
                className={`group relative ${sector.bgLight} border ${sector.borderColor} rounded-2xl p-5 card-hover overflow-hidden flex flex-col h-full`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon */}
                <div
                  className={`${sector.iconBg} w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <sector.icon size={20} className={sector.iconColor} />
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-primary mb-2 leading-tight">
                  {sector.label}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {sector.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className={`text-xs font-semibold ${sector.iconColor}`}>
                    En savoir plus
                  </span>
                  <ArrowRight size={11} className={sector.iconColor} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
