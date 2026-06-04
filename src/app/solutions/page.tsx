"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { BarChart3, Users, Factory, PieChart, CheckCircle2, ArrowRight, Shield, Clock, Globe } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const solutions = [
  {
    icon: BarChart3,
    title: "Gestion Financière",
    description: "Pilotez vos finances en temps réel avec une comptabilité générale, analytique et une trésorerie maîtrisée.",
    features: ["Comptabilité générale & analytique", "Rapports fiscaux TVA/IS/IR", "Tableau de bord financier"],
    href: "/solutions/gestion-financiere",
    color: "blue",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    ctaColor: "text-blue-600 hover:text-blue-700",
  },
  {
    icon: Users,
    title: "Gestion RH & Paie",
    description: "Gérez vos collaborateurs, automatisez la paie et assurez la conformité CNSS/AMO/IR en toute sérénité.",
    features: ["Calcul automatique de la paie", "Déclarations CNSS / AMO / IR", "Congés & absences"],
    href: "/solutions/gestion-rh-paie",
    color: "violet",
    bg: "bg-violet-50",
    border: "border-violet-200",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    ctaColor: "text-violet-600 hover:text-violet-700",
  },
  {
    icon: Factory,
    title: "Gestion de Production",
    description: "Optimisez votre chaîne de production avec la planification MRP, le suivi des ordres et le contrôle qualité.",
    features: ["Planification MRP", "Suivi des ordres de fabrication", "Gestion des stocks & entrepôts"],
    href: "/solutions/gestion-production",
    color: "emerald",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    ctaColor: "text-emerald-600 hover:text-emerald-700",
  },
  {
    icon: PieChart,
    title: "Reporting & Pilotage",
    description: "Décidez avec confiance grâce à des tableaux de bord interactifs, des KPIs en temps réel et des alertes automatiques.",
    features: ["Tableaux de bord interactifs", "200+ KPIs préconfigurés", "Export Excel / PDF"],
    href: "/solutions/reporting-pilotage",
    color: "amber",
    bg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    ctaColor: "text-amber-600 hover:text-amber-700",
  },
];

const features = [
  "Architecture modulaire et scalable",
  "100% conforme à la réglementation marocaine",
  "Intégration native entre tous les modules",
  "Support local et formation incluse",
  "Déploiement Cloud ou On-Premise",
  "Mises à jour automatiques incluses",
  "API ouverte pour connexions tierces",
  "Tableau de bord exécutif temps réel",
];

const whyChoose = [
  {
    icon: Clock,
    title: "30 ans d'expertise",
    desc: "Fondée en 1993, Thalès Informatique cumule trois décennies d'expérience dans la digitalisation des entreprises marocaines.",
  },
  {
    icon: Shield,
    title: "Support local 24/7",
    desc: "Une équipe d'experts basée à Casablanca, Rabat, Fès et Marrakech, disponible pour vous accompagner à chaque étape.",
  },
  {
    icon: Globe,
    title: "Intégration complète",
    desc: "Tous nos modules communiquent entre eux nativement. Une seule solution pour toute votre gestion d'entreprise.",
  },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-accent/70 text-sm mb-4">
              <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-accent">Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos Solutions <span className="text-accent">ERP</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Des solutions intégrées pour digitaliser et piloter votre entreprise — conçues pour le marché marocain, adaptées à votre secteur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Un ERP pensé pour les entreprises marocaines
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                Depuis 1993, Thalès Informatique développe des solutions ERP modulaires, évolutives et parfaitement adaptées aux réalités du marché marocain. Chaque module peut être déployé indépendamment ou dans une suite intégrée.
              </p>
              <p className="text-secondary leading-relaxed">
                Nos solutions couvrent l'intégralité du cycle de gestion d'entreprise : finances, ressources humaines, production, et pilotage stratégique — avec une conformité totale à la législation marocaine (CNSS, TVA, IS, IR).
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-6">Ce que nos solutions vous apportent</h3>
                <div className="grid grid-cols-1 gap-3">
                  {features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 size={18} className="text-cta shrink-0" />
                      <span className="text-secondary text-sm">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Explorez nos modules</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">Chaque module est autonome et s'intègre parfaitement aux autres pour une vision globale de votre activité.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <FadeIn key={sol.title} delay={i * 0.1}>
                  <div className={`${sol.bg} ${sol.border} border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group h-full flex flex-col`}>
                    <div className={`${sol.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                      <Icon size={28} className={sol.iconColor} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{sol.title}</h3>
                    <p className="text-secondary leading-relaxed mb-6 flex-1">{sol.description}</p>
                    <ul className="space-y-2 mb-6">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle2 size={15} className={sol.iconColor} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={sol.href} className={`flex items-center gap-2 text-sm font-semibold ${sol.ctaColor} transition-colors duration-200`}>
                      Découvrir <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Pourquoi choisir Thalès Informatique ?</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
                    <div className="w-14 h-14 bg-cta/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Icon size={28} className="text-cta" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Discutez avec un expert Thalès Informatique et obtenez une démo personnalisée de notre ERP.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:bg-sky-300 transition-colors duration-200 cursor-pointer text-lg"
            >
              Demander une démo gratuite <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
