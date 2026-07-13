"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Building2,
  AlertTriangle,
  BarChart3,
  Wrench,
  Users,
  HardHat,
  Truck,
  Calculator,
  FileText,
  CheckCircle,
  ClipboardList,
  TrendingUp,
  Shield,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: FileText,
    title: "Devis et chiffrage précis",
    desc: "Construisez vos devis détaillés par ouvrage, poste et sous-poste. Intégrez matériaux, main-d'œuvre et sous-traitance pour un chiffrage fiable dès l'appel d'offres.",
  },
  {
    icon: BarChart3,
    title: "Suivi budgétaire en temps réel",
    desc: "Comparez budget prévisionnel et dépenses réelles à chaque instant. Détectez les dérives avant qu'elles ne compromettent la rentabilité du chantier.",
  },
  {
    icon: Smartphone,
    title: "Gestion mobile du chantier",
    desc: "Vos chefs de chantier accèdent aux plans, pointages, bons de livraison et situations de travaux depuis leur smartphone ou tablette, directement sur site.",
  },
  {
    icon: Calculator,
    title: "Facturation à l'avancement",
    desc: "Générez vos situations de travaux progressives, gérez les retenues de garantie et les décomptes définitifs en conformité avec les pratiques contractuelles marocaines.",
  },
  {
    icon: ClipboardList,
    title: "Planification des interventions",
    desc: "Planifiez les interventions de vos équipes et sous-traitants dans un planning partagé. Gérez les priorités et les ressources sur plusieurs chantiers simultanément.",
  },
  {
    icon: TrendingUp,
    title: "Analyse financière des chantiers",
    desc: "Consolidez les coûts et recettes par chantier, par lot ou par période. Identifiez les chantiers rentables et ceux qui nécessitent des actions correctives immédiates.",
  },
];

const challenges = [
  {
    icon: AlertTriangle,
    title: "Dépassements budgétaires non anticipés",
    desc: "Sans suivi en temps réel, les dépenses s'accumulent sans alerte. Les écarts entre le prévisionnel et le réalisé ne sont découverts qu'en fin de chantier, quand il est trop tard pour agir.",
  },
  {
    icon: Users,
    title: "Coordination difficile entre équipes et sous-traitants",
    desc: "La multiplicité des intervenants — équipes internes, sous-traitants, fournisseurs — rend la coordination complexe. Les retards en cascade et les doubles commandes sont fréquents sans outil centralisé.",
  },
  {
    icon: Truck,
    title: "Matériel et ressources mal exploités",
    desc: "Engins immobilisés, véhicules sur-sollicités, stocks mal gérés : sans visibilité sur votre parc matériel, les coûts d'utilisation gonflent et les pannes surviennent au mauvais moment.",
  },
];

const avantages = [
  {
    icon: Shield,
    title: "Maîtrise des coûts de revient",
    desc: "Calculez précisément le coût de chaque ouvrage et anticipez vos marges avant même de démarrer les travaux.",
  },
  {
    icon: HardHat,
    title: "Conformité réglementaire marocaine",
    desc: "Gérez la CNSS BTP, les retenues à la source sous-traitants et la TVA sur marge immobilière conformément à la réglementation en vigueur au Maroc.",
  },
  {
    icon: Wrench,
    title: "Maintenance préventive du parc",
    desc: "Planifiez l'entretien de vos engins et véhicules pour éviter les pannes coûteuses et optimiser la durée de vie de votre matériel.",
  },
  {
    icon: CheckCircle,
    title: "Traçabilité complète des travaux",
    desc: "Historique des interventions, bons de réception matériaux, attachements sous-traitants : chaque élément est documenté et accessible en cas de litige ou d'audit.",
  },
];

const products = [
  {
    name: "ERP BTP intégré",
    desc: "Une solution complète pour gérer l'ensemble du cycle de vie d'un projet de construction : devis, chantier, facturation, comptabilité et RH dans un seul système.",
    color: "from-amber-600 to-orange-700",
  },
  {
    name: "GMAO Parc Matériel",
    desc: "Gestion de la maintenance préventive et corrective de vos engins et véhicules. Suivi des coûts d'utilisation, des pannes et des planifications d'entretien.",
    color: "from-orange-600 to-amber-600",
  },
  {
    name: "Module Paie Chantier",
    desc: "Pointage chantier, calcul des primes et indemnités de déplacement, gestion de la CNSS BTP et édition des bulletins de paie conformes à la réglementation marocaine.",
    color: "from-yellow-600 to-orange-600",
  },
];

export default function BTPClient() {
  const introRef = useRef(null);
  const challengesRef = useRef(null);
  const featuresRef = useRef(null);
  const avantagesRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const challengesInView = useInView(challengesRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const avantagesInView = useInView(avantagesRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* ── HERO centré ── */}
      <section className="pt-32 pb-24 bg-primary relative overflow-hidden">
        <img
          src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782828246/magnific_an-active-construction-thales-informatique-BTP_eehz9a.webp"
          alt="Chantier de construction BTP Maroc - Thalès Informatique"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-slate-900/90 to-slate-900/95" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
              <ChevronRight size={14} />
              <span className="text-white">BTP & Construction</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
              <Building2 size={14} className="text-amber-300" />
              <span className="text-amber-300 text-sm font-semibold uppercase tracking-wider">SECTEUR BTP & CONSTRUCTION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Gérez simplement votre activité BTP :<br />
              <span className="text-amber-400">du devis au suivi de chantier</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4">
              Pilotez vos chantiers, maîtrisez vos coûts et gagnez en réactivité grâce à des outils de gestion pensés pour les entreprises BTP marocaines.
            </p>
            <p className="text-white/50 max-w-xl mx-auto mb-10">
              Prenez de meilleures décisions et boostez votre activité avec une solution mobile, intuitive et dédiée aux entrepreneurs et artisans du bâtiment au Maroc et en Afrique.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-amber-500/30"
            >
              Demander une démo <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO 2-col ── */}
      <section className="py-20 bg-white" ref={introRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Le BTP marocain mérite des outils à la hauteur de ses chantiers
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Le secteur du BTP et de la construction au Maroc est l&apos;un des plus dynamiques du continent africain, porté par les grands programmes d&apos;infrastructure, l&apos;essor de l&apos;immobilier et les projets liés aux grandes échéances sportives et économiques.
              </p>
              <p className="text-secondary leading-relaxed">
                Thalès Informatique accompagne les entreprises de construction, de génie civil, de promotion immobilière et d&apos;artisanat du bâtiment dans leur transformation digitale — avec des solutions adaptées aux contraintes terrain, aux pratiques contractuelles locales et aux exigences réglementaires marocaines.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { value: "60+", label: "Entreprises BTP accompagnées" },
                { value: "Réel", label: "Suivi budget / réalisé" },
                { value: "Multi", label: "Gestion multi-chantiers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-2xl border border-border">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FONCTIONNALITÉS CLÉS ── */}
      <section className="py-20 bg-slate-50" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Optez pour des processus plus rapides et productifs
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des fonctionnalités conçues pour les réalités des chantiers marocains, accessibles depuis le bureau ou le terrain.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-7 border border-border hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
                    <f.icon size={24} className="text-amber-600" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{f.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DÉFIS ── */}
      <section className="py-20 bg-white" ref={challengesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={challengesInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Les défis quotidiens des entreprises BTP</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des problèmes structurels qui pèsent sur la rentabilité et la croissance des entreprises de construction au Maroc.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-amber-50 rounded-2xl p-8 border border-amber-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                    <c.icon size={24} className="text-amber-600" />
                  </div>
                  <h3 className="font-bold text-primary mb-3">{c.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AVANTAGES ── */}
      <section className="py-20 bg-slate-50" ref={avantagesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={avantagesInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-4">Ce que vous gagnez concrètement</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Des bénéfices mesurables pour les entreprises BTP qui digitalisent leur gestion avec Thalès Informatique.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {avantages.map((a) => (
                <motion.div
                  key={a.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-amber-200 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center mb-4">
                    <a.icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{a.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTIONS RECOMMANDÉES ── */}
      <section className="py-20 bg-primary" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Solutions recommandées pour le BTP</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Thalès Informatique sélectionne et intègre les solutions les mieux adaptées aux enjeux des entreprises de construction marocaines.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <motion.div
                  key={p.name}
                  variants={fadeUp}
                  className={`rounded-2xl p-8 bg-gradient-to-br ${p.color} text-white`}
                >
                  <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-amber-600" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-6">
              Prêt à digitaliser le pilotage de vos chantiers ?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Nos consultants BTP vous accompagnent dans le choix et le déploiement de la solution adaptée à votre activité — avec une connaissance approfondie des pratiques du secteur au Maroc et en Afrique.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
              >
                Demander une démo
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
