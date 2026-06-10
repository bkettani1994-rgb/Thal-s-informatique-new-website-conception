"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Users,
  ChevronRight,
  UserCheck,
  Calculator,
  FileText,
  Calendar,
  GraduationCap,
  Network,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const features = [
  {
    icon: UserCheck,
    title: "Gestion des dossiers employés",
    desc: "Fiche employé complète : contrat, historique, documents RH, compétences et évolution de carrière centralisés.",
  },
  {
    icon: Calculator,
    title: "Calcul automatique de la paie",
    desc: "Moteur de paie paramétrable : salaires, primes, retenues, avantages en nature. Bulletins générés en un clic.",
  },
  {
    icon: FileText,
    title: "Déclarations CNSS / AMO / IR",
    desc: "Génération automatique des déclarations sociales et fiscales : CNSS, AMO, IR retenu à la source, CIMR.",
  },
  {
    icon: Calendar,
    title: "Congés & absences",
    desc: "Workflow de validation des congés, suivi des absences, soldes en temps réel et planning d'équipe visuel.",
  },
  {
    icon: GraduationCap,
    title: "Formation & compétences",
    desc: "Plan de formation, suivi des habilitations, gestion des certifications et évaluation des performances.",
  },
  {
    icon: Network,
    title: "Organigramme interactif",
    desc: "Visualisation dynamique de la structure organisationnelle, rattachements hiérarchiques et fiches de poste.",
  },
];

const steps = [
  { num: "01", title: "Onboarding", desc: "Création du dossier employé, paramétrage des éléments de rémunération et affectation aux structures." },
  { num: "02", title: "Gestion mensuelle", desc: "Saisie des variables de paie, validation des congés, suivi des absences et collecte des pointages." },
  { num: "03", title: "Traitement de la paie", desc: "Calcul automatique, contrôle des résultats, édition des bulletins et virements bancaires." },
  { num: "04", title: "Déclarations légales", desc: "Génération des déclarations CNSS, AMO, IR et bordereau de versement dans les délais légaux." },
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

export default function GestionRHPaieClient() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-primary to-primary" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white/70">Gestion RH & Paie</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-violet-300" />
              </div>
              <span className="text-violet-300 text-sm font-semibold uppercase tracking-widest">Module RH</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Gestion RH<br />
              <span className="text-violet-300">& Paie</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Simplifiez la gestion de vos ressources humaines et automatisez le traitement de la paie en toute conformité avec la législation marocaine.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { value: "400+", label: "Collaborateurs gérés" },
                { value: "Zéro", label: "Erreur de paie" },
                { value: "100%", label: "Conformité CNSS/CIMR" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">Fonctionnalités</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                Une gestion RH complète
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Du recrutement à la retraite, gérez l'intégralité du cycle de vie de vos collaborateurs.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={20} className="text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Conformité légale */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-violet-500/10 rounded-3xl" />
              <div className="relative">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText size={24} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  100% conforme à la législation du travail marocaine
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  CNSS, AMO, IR, CIMR mis à jour automatiquement dès chaque évolution réglementaire. Notre équipe juridique veille en permanence à la conformité de votre paie.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {["Code du travail", "CNSS", "AMO", "IR retenu à la source", "CIMR", "Retraite complémentaire"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white/10 text-white text-sm rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Le cycle de paie en 4 étapes
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="relative bg-white border border-border rounded-2xl p-6 h-full">
                  <div className="text-4xl font-black text-violet-200 mb-4">{step.num}</div>
                  <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-violet-600 rounded-full items-center justify-center">
                      <ArrowRight size={12} className="text-white" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="w-14 h-14 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <TrendingUp size={24} className="text-violet-300" />
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 italic">
              "Avant Thalès Informatique, la paie de nos 180 collaborateurs prenait 5 jours. Aujourd'hui, c'est fait en une demi-journée. Les déclarations CNSS sont générées automatiquement — c'est un gain de temps considérable."
            </blockquote>
            <div>
              <div className="font-semibold text-white">Fatima Zahra Alami</div>
              <div className="text-white/50 text-sm">DRH, Société de Distribution Nationale</div>
            </div>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400">★</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Modernisez votre gestion RH dès aujourd'hui
            </h2>
            <p className="text-secondary mb-8 text-lg">
              Rejoignez 200+ entreprises marocaines qui font confiance à notre solution RH & Paie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Voir une démonstration
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 bg-white border border-border text-secondary font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                Toutes nos solutions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
