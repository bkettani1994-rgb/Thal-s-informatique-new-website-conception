"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, Tag, TrendingUp, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const featured = {
  company: "Maghreb Steel",
  title: "Digitalisation complète de la production",
  description:
    "Maghreb Steel, leader de l'acier au Maroc, a déployé Sage X3 avec Thalès Informatique pour digitaliser sa gestion de production, ses achats et sa finance. Le projet a mobilisé une équipe de 12 consultants Thalès sur 18 mois pour couvrir l'ensemble des sites industriels du groupe.",
  tags: ["Industrie", "Sage X3", "Production"],
  readTime: "5 min",
  results: [
    { kpi: "-60%", label: "Temps de clôture mensuelle" },
    { kpi: "+35%", label: "Productivité des ateliers" },
    { kpi: "100%", label: "Visibilité stock en temps réel" },
  ],
};

const cases = [
  {
    company: "Label Vie",
    title: "Gestion multi-sites distribution",
    solution: "Sage X3",
    sector: "Négoce",
    kpi: "-40% ruptures de stock",
    color: "border-blue-200 bg-blue-50",
    sectorColor: "bg-blue-100 text-blue-700",
  },
  {
    company: "Centrale Danone",
    title: "Traçabilité HACCP agroalimentaire",
    solution: "Sage X3",
    sector: "Agroalimentaire",
    kpi: "100% conformité ONSSA",
    color: "border-emerald-200 bg-emerald-50",
    sectorColor: "bg-emerald-100 text-emerald-700",
  },
  {
    company: "Stroc Industrie",
    title: "ERP BTP multi-chantiers",
    solution: "Sage 100",
    sector: "BTP",
    kpi: "+50% visibilité chantiers",
    color: "border-orange-200 bg-orange-50",
    sectorColor: "bg-orange-100 text-orange-700",
  },
  {
    company: "CIH Bank",
    title: "SIRH & dématérialisation RH",
    solution: "Factorial",
    sector: "Services",
    kpi: "2 500 bulletins/mois dématérialisés",
    color: "border-violet-200 bg-violet-50",
    sectorColor: "bg-violet-100 text-violet-700",
  },
  {
    company: "Auto Nejma",
    title: "Recouvrement & crédit client",
    solution: "Eloficash",
    sector: "Négoce",
    kpi: "DSO -35 jours",
    color: "border-cyan-200 bg-cyan-50",
    sectorColor: "bg-cyan-100 text-cyan-700",
  },
  {
    company: "Cosumar",
    title: "Maintenance préventive GMAO",
    solution: "DimoMaint",
    sector: "Industrie / Agro",
    kpi: "Disponibilité machines +28%",
    color: "border-rose-200 bg-rose-50",
    sectorColor: "bg-rose-100 text-rose-700",
  },
];

const filters = ["Tous", "Industrie", "Négoce", "Services", "BTP", "Agroalimentaire"];

export default function EtudesDeCasPage() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const casesRef = useRef(null);
  const ctaRef = useRef(null);

  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const casesInView = useInView(casesRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-bg">
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
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/references" className="hover:text-accent transition-colors">Références</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Études de Cas</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-cta/20 border border-cta/30 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Études de Cas
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Études de <span className="text-accent">Cas</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Découvrez comment nos clients ont transformé leur entreprise grâce à nos solutions ERP et nos consultants experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured study */}
      <section ref={featuredRef} className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-primary to-slate-800 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-cta/30 text-accent text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                  Étude phare
                </span>
                {featured.tags.map((tag) => (
                  <span key={tag} className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
                <span className="flex items-center gap-1 bg-white/10 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Clock size={12} /> {featured.readTime} de lecture
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {featured.company} — {featured.title}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
                {featured.description}
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {featured.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{r.kpi}</div>
                    <div className="text-slate-400 text-sm">{r.label}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Demander cette étude complète <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter chips */}
      <section className="pb-4 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`text-sm font-semibold px-5 py-2 rounded-full border transition-colors duration-200 cursor-pointer ${
                  i === 0
                    ? "bg-cta text-white border-cta"
                    : "bg-white text-secondary border-border hover:border-cta hover:text-cta"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case study cards */}
      <section ref={casesRef} className="py-12 pb-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={casesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {cases.map((c) => (
              <motion.div
                key={c.company}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.sectorColor} mb-3 inline-block`}>
                      {c.sector}
                    </span>
                    <h3 className="text-xl font-bold text-primary">{c.company}</h3>
                    <p className="text-secondary text-sm mt-1">{c.title}</p>
                  </div>
                  <div className="bg-slate-50 border border-border px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 whitespace-nowrap ml-4">
                    {c.solution}
                  </div>
                </div>
                <div className={`${c.color} border rounded-xl p-4 mt-4`}>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-emerald-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-800">{c.kpi}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-cta text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Lire l'étude <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Demander une étude de cas personnalisée</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Nos consultants analysent votre secteur et vos enjeux pour vous présenter les cas clients les plus proches de votre réalité.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Nous contacter <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
