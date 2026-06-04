"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Users, Clock, ThumbsUp, Layers, Building2, ShoppingCart, Briefcase, HardHat, Wheat } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const stats = [
  { value: "500+", label: "Clients actifs", icon: Users },
  { value: "30+", label: "Ans d'expertise", icon: Clock },
  { value: "5", label: "Secteurs couverts", icon: Layers },
  { value: "97%", label: "Taux de satisfaction", icon: ThumbsUp },
];

const clients = [
  "OCP Group", "Lafarge Maroc", "Maghreb Steel", "Sonasid",
  "BMCE Bank", "Attijariwafa Bank", "Lydec", "Redal",
  "Amendis", "CIH Bank", "Label Vie", "Marjane",
  "Cosumar", "Centrale Danone", "Brasseries du Maroc", "Unilever Maroc",
  "Lesieur Cristal", "Fromageries Bel Maroc", "Ynna Holding", "Alliances",
  "Colorado", "Stroc Industrie", "Auto Nejma", "Afriquia SMDC",
];

const sectors = [
  { name: "Industrie", count: "150+", icon: Building2, color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "Négoce & Distribution", count: "120+", icon: ShoppingCart, color: "bg-violet-50 text-violet-700 border-violet-200" },
  { name: "Services & Conseil", count: "100+", icon: Briefcase, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { name: "BTP & Construction", count: "80+", icon: HardHat, color: "bg-orange-50 text-orange-700 border-orange-200" },
  { name: "Agroalimentaire", count: "50+", icon: Wheat, color: "bg-amber-50 text-amber-700 border-amber-200" },
];

const featured = [
  {
    initial: "M",
    name: "Maghreb Steel",
    sector: "Industrie",
    quote: "Thalès Informatique a transformé notre gestion de production en déployant Sage X3 en un temps record. La visibilité sur nos stocks est désormais totale.",
    person: "Directeur des Systèmes d'Information",
    solution: "Sage X3",
    accent: "bg-blue-600",
  },
  {
    initial: "L",
    name: "Label Vie",
    sector: "Négoce & Distribution",
    quote: "La gestion multi-sites est devenue simple et fluide. Nous pilotons 40 points de vente depuis une seule interface, avec une fiabilité exemplaire.",
    person: "Directeur Financier",
    solution: "Sage X3",
    accent: "bg-violet-600",
  },
  {
    initial: "C",
    name: "Centrale Danone",
    sector: "Agroalimentaire",
    quote: "Grâce à la traçabilité mise en place par Thalès, nous avons atteint 100% de conformité ONSSA. L'équipe a été d'un professionnalisme irréprochable.",
    person: "Directrice Qualité",
    solution: "Sage X3",
    accent: "bg-emerald-600",
  },
];

export default function ClientsPage() {
  const statsRef = useRef(null);
  const gridRef = useRef(null);
  const sectorsRef = useRef(null);
  const featuredRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const sectorsInView = useInView(sectorsRef, { once: true, margin: "-60px" });
  const featuredInView = useInView(featuredRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen bg-bg font-['Plus_Jakarta_Sans',sans-serif]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-cta rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
              <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/references" className="hover:text-accent transition-colors">Références</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Nos Clients</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos <span className="text-accent">Clients</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Plus de 500 entreprises marocaines nous font confiance pour piloter leur croissance avec les meilleures solutions ERP du marché.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-12 bg-white border-b border-border">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon size={28} className="text-cta mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-secondary text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logo grid */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Ils nous font confiance</h2>
            <p className="text-secondary max-w-xl mx-auto">Des leaders de chaque secteur de l&apos;économie marocaine ont choisi Thalès Informatique.</p>
          </motion.div>
          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white rounded-xl border border-border px-3 py-4 text-center hover:border-cta hover:shadow-md transition-all duration-200 cursor-default"
              >
                <span className="text-xs font-semibold text-secondary leading-tight block">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Présence par secteur</h2>
            <p className="text-secondary max-w-xl mx-auto">Notre expertise couvre l&apos;ensemble des secteurs clés de l&apos;économie marocaine.</p>
          </motion.div>
          <div ref={sectorsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 30 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-6 text-center ${sector.color}`}
              >
                <sector.icon size={30} className="mx-auto mb-3 opacity-80" />
                <div className="text-2xl font-bold mb-1">{sector.count}</div>
                <div className="text-sm font-medium">{sector.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured clients */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Références emblématiques</h2>
            <p className="text-secondary max-w-xl mx-auto">Quelques-uns de nos clients phares et leur expérience avec Thalès Informatique.</p>
          </motion.div>
          <div ref={featuredRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 40 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${client.accent} rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                    {client.initial}
                  </div>
                  <div>
                    <div className="font-bold text-primary text-lg">{client.name}</div>
                    <div className="text-xs text-secondary">{client.sector}</div>
                  </div>
                </div>
                <blockquote className="text-secondary text-sm leading-relaxed mb-6 italic">
                  &ldquo;{client.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-slate-400">{client.person}</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-cta/10 text-cta rounded-md">{client.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Rejoindre nos clients</h2>
            <p className="text-slate-300 mb-8">Prêt à rejoindre les 500+ entreprises qui ont fait confiance à Thalès Informatique pour leur transformation digitale ?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-xl hover:bg-white transition-colors duration-200 shadow-lg"
            >
              Rejoindre nos clients <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
