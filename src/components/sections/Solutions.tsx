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
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783677712/magnific_une-image-avec-couleur-sa_9Rw1Ci1NYZ_hiufpm.webp",
  },
  {
    icon: Users2,
    title: "RH & Paie",
    desc: "Digitalisation RH, gestion de la paie, des talents et de l'administration du personnel.",
    href: "/metiers/paie-rh",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783676307/magnific_macro-shot-of-a-water-dro_vuBYo8Ia47_dbra67.webp",
  },
  {
    icon: Cog,
    title: "Processus Opérationnels",
    desc: "ERP, gestion commerciale, supply chain et pilotage de la production au quotidien.",
    href: "/metiers/erp",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783676307/magnific_intricate-network-of-indu_XtT3M3bBfo_moyiit.webp",
  },
  {
    icon: LineChart,
    title: "Conseil",
    desc: "Audit, accompagnement stratégique et transformation digitale sur-mesure.",
    href: "/contact",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783677678/magnific_merci-denlever-le-blanc-n_l7kCe5Fgv9_ty3xbe.webp",
  },
  {
    icon: Code2,
    title: "Développement Spécifique",
    desc: "Personnalisation ERP, connecteurs métier et automatisation sur-mesure.",
    href: "/contact",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783676306/magnific_a-modern-asphalt-road-tra_DBY9Tzbpcl_bw0agm.webp",
  },
  {
    icon: Server,
    title: "Ingénierie IT",
    desc: "Infrastructure, architecture système, réseaux et sécurité informatique.",
    href: "/contact",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783676306/magnific_a-solid-tree-trunk-in-a-m_y6gbUHjPW9_uzgwr3.webp",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
            >
              <Link href={sol.href} className="group block bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
                {/* Image zone with diagonal cut */}
                <div className="relative h-48 bg-slate-200" style={{ clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)" }}>
                  {sol.image ? (
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200" />
                  )}
                </div>
                {/* Icon badge — overlaps the cut */}
                <div className="relative -mt-6 ml-5 w-11 h-11 rounded-full bg-cta flex items-center justify-center shadow-md z-10">
                  <sol.icon size={20} className="text-white" strokeWidth={1.75} />
                </div>

                {/* Content */}
                <div className="pt-3 px-5 pb-5">
                  <h3 className="font-bold text-primary text-base mb-2 leading-tight">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-cta leading-relaxed mb-4">
                    {sol.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-cta text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                    En savoir plus <ArrowRight size={14} />
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
          <p data-ilink className="text-secondary text-sm mb-6">
            Découvrez aussi <Link href="/solutions/sage-x3" className="text-cta font-semibold hover:underline">Sage X3 Maroc</Link>, <Link href="/solutions/sage-100" className="text-cta font-semibold hover:underline">Sage 100 Maroc</Link> et notre <Link href="/services/integration-erp" className="text-cta font-semibold hover:underline">service d&apos;intégrateur ERP Maroc</Link>.
          </p>
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
