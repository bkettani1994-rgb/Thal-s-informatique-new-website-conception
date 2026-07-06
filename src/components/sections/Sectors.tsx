"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Factory, ShoppingCart, HardHat, Wheat, ArrowRight, HeartHandshake, Landmark, FlaskConical, Truck } from "lucide-react";

const BASE = "https://res.cloudinary.com/dmutnjgp8/image/upload/";

const sectors = [
  {
    icon: Factory,
    tag: "PRODUCTION",
    label: "Industrie",
    href: "/secteurs/industrie",
    image: BASE + "v1783335249/Secteur-industrie-thales-iformatique_tbsqza.avif",
    overlay: "from-blue-900/80 via-blue-900/50 to-transparent",
    bullets: [
      "Optimisez votre production et pilotez vos performances en temps réel.",
      "Gérez vos stocks, ordres de fabrication et nomenclatures.",
    ],
    large: true,
  },
  {
    icon: ShoppingCart,
    tag: "DISTRIBUTION",
    label: "Négoce & Distribution",
    href: "/secteurs/negoce-distribution",
    image: BASE + "v1783335248/Secteur-negoce-et-distribution-thales-iformatique_iaz7fo.avif",
    overlay: "from-amber-900/80 via-amber-800/50 to-transparent",
  },
  {
    icon: HardHat,
    tag: "CHANTIERS",
    label: "BTP",
    href: "/secteurs/btp",
    image: BASE + "v1783335249/Secteur-BTP-thales-iformatique_zjwjmh.avif",
    overlay: "from-orange-900/80 via-orange-800/50 to-transparent",
  },
  {
    icon: Wheat,
    tag: "TRAÇABILITÉ",
    label: "Agroalimentaire",
    href: "/secteurs/agroalimentaire",
    image: BASE + "v1783335249/Secteur-agroalimentaire-thales-iformatique_vlkltj.avif",
    overlay: "from-emerald-900/80 via-emerald-800/50 to-transparent",
  },
  {
    icon: HeartHandshake,
    tag: "SOLIDARITÉ",
    label: "Association",
    href: "/secteurs/association",
    image: BASE + "v1783335248/Secteur-association-thales-iformatique_ijahc4.avif",
    overlay: "from-rose-900/80 via-rose-800/50 to-transparent",
  },
  {
    icon: Landmark,
    tag: "CONFORMITÉ",
    label: "Banque, Assurance & Mutuelle",
    href: "/secteurs/banque-assurance-mutuelle",
    image: BASE + "v1783335248/Secteur-banque-et-assurances-thales-iformatique_frha17.avif",
    overlay: "from-indigo-900/80 via-indigo-800/50 to-transparent",
  },
  {
    icon: FlaskConical,
    tag: "FORMULATION",
    label: "Chimie",
    href: "/secteurs/chimie",
    image: BASE + "v1783335248/Secteur-chimie-thales-iformatique_yc6bmv.avif",
    overlay: "from-purple-900/80 via-purple-800/50 to-transparent",
  },
  {
    icon: Truck,
    tag: "SUPPLY CHAIN",
    label: "Logistique",
    href: "/secteurs/logistique",
    image: BASE + "v1783335248/Secteur-logistique-thales-iformatique_o733wt.avif",
    overlay: "from-cyan-900/80 via-cyan-800/50 to-transparent",
    description: "Pilotez vos entrepôts et votre transport.",
  },
];

function SectorCard({
  sector,
  i,
  className = "",
}: {
  sector: (typeof sectors)[number];
  i: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07, duration: 0.5 }}
      className={className}
    >
      <Link
        href={sector.href}
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl h-full min-h-[180px] cursor-pointer"
      >
        {/* Background image */}
        <img
          src={sector.image}
          alt={sector.label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Color overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${sector.overlay}`} />

        {/* Top row: tag + icon */}
        <div className="relative flex items-start justify-between p-4">
          <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase bg-black/30 rounded px-2 py-0.5 backdrop-blur-sm">
            {sector.tag}
          </span>
          <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
            <sector.icon size={16} className="text-white" />
          </div>
        </div>

        {/* Bottom content */}
        <div className="relative p-4 pt-0">
          {"bullets" in sector && sector.bullets && (
            <ul className="mb-3 space-y-1">
              {sector.bullets.map((b) => (
                <li key={b} className="flex items-start gap-1.5 text-xs text-white/80">
                  <span className="mt-0.5 text-white/60">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {"description" in sector && sector.description && (
            <p className="text-xs text-white/80 mb-2">{sector.description}</p>
          )}
          <h3 className="text-lg font-bold text-white mb-2 leading-tight">{sector.label}</h3>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:gap-2 transition-all duration-200">
            En savoir plus <ArrowRight size={12} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Sectors() {
  const [industrie, negoce, btp, agro, assoc, banque, chimie, logistique] = sectors;

  return (
    <section className="py-24 bg-white" id="secteurs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10"
        >
          <div>
            <span className="inline-block text-xs font-semibold text-cta uppercase tracking-widest mb-3">
              Expertises métiers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Secteurs d&apos;activité
            </h2>
            <p className="mt-3 text-base text-secondary max-w-lg leading-relaxed">
              Des solutions adaptées aux spécificités de chaque secteur pour répondre précisément à vos besoins métiers.
            </p>
          </div>
          <Link
            href="/secteurs"
            className="group inline-flex items-center gap-2 text-cta font-semibold text-sm hover:text-cta-hover transition-colors duration-200 cursor-pointer shrink-0"
          >
            Découvrir nos expertises
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Bento grid */}
        <div className="flex flex-col gap-3">
          {/* Top block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Large Industrie card */}
            <SectorCard sector={industrie} i={0} className="min-h-[360px] lg:row-span-2" />

            {/* Right 2×2 */}
            <div className="grid grid-cols-2 gap-3">
              <SectorCard sector={negoce} i={1} className="min-h-[175px]" />
              <SectorCard sector={btp} i={2} className="min-h-[175px]" />
              <SectorCard sector={agro} i={3} className="min-h-[175px]" />
              <SectorCard sector={assoc} i={4} className="min-h-[175px]" />
            </div>
          </div>

          {/* Bottom 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <SectorCard sector={banque} i={5} className="min-h-[200px]" />
            <SectorCard sector={chimie} i={6} className="min-h-[200px]" />
            <SectorCard sector={logistique} i={7} className="min-h-[200px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
