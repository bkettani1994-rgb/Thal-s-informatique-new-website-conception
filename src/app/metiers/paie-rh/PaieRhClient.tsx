"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  Zap, Heart, Shield,
  Briefcase, UserCheck, FileText,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const keyStats = [
  { icon: Zap,    label: "Performance",   value: "Plus de 3 millions de bulletins par mois" },
  { icon: Heart,  label: "Satisfaction",  value: "Plus de 40 000 clients" },
  { icon: Shield, label: "Sécurité",      value: "Données 100 % cryptées et sécurisées" },
];

const solutions = [
  {
    badge: "Sage 100",
    badgeLabel: "Paie & RH",
    color: "bg-emerald-600",
    icon: Briefcase,
    name: "Sage 100 Paie & RH",
    subtitle: "Produisez une paie fiable et conforme, et gérez le capital humain de votre PME.",
    label: "Fonctionnalités :",
    features: [
      "Administration du personnel",
      "Gestion de la paie et des déclarations sociales",
      "Dématérialisation des bulletins de paie et des documents RH",
      "Gestion des congés, absences et demandes RH avec Sage Intranet RH",
      "Gestion des formations, des carrières et des compétences",
    ],
    cta: "Découvrez Sage 100 Paie & RH",
    href: "/contact",
  },
  {
    badge: "Sage",
    badgeLabel: "Espace Employés",
    color: "bg-cta",
    icon: UserCheck,
    name: "Sage Espace Employés",
    subtitle: "Gérez facilement vos salariés grâce à une solution paramétrable, flexible et évolutive.",
    label: "Fonctionnalités :",
    features: [
      "Automatisation des notes de frais",
      "Dossiers salariés centralisés et toujours à jour",
      "Pilotage des entretiens et objectifs des salariés",
      "Gestion des congés et absences en temps réel et intégration des données vers la paie",
    ],
    cta: "Découvrez Sage Espace Employés",
    href: "/contact",
  },
  {
    badge: "Sage",
    badgeLabel: "Dématérialisation RH",
    color: "bg-slate-700",
    icon: FileText,
    name: "Sage Dématérialisation RH",
    subtitle: "Dites adieu au papier ! Mettez vos fiches de paie à disposition de vos salariés et convertissez vos documents RH au format digital.",
    label: "Fonctionnalités :",
    features: [
      "Coffre-fort numérique : distribuez vos bulletins de salaire dématérialisés en quelques clics",
      "Gestion documentaire et e-signature : optimisez la gestion de vos flux documentaires RH",
      "Relation RH-Salariés : structurez, automatisez et simplifiez les échanges avec vos salariés",
    ],
    cta: "Découvrez Sage Dématérialisation RH",
    href: "/contact",
  },
];

const featureSections = [
  {
    title: "Une paie juste, conforme et dans les temps",
    desc: "Gagnez du temps et évitez les erreurs de saisie grâce aux automatismes. Nos équipes effectuent des mises à jour en temps réel pour gérer l'évolution des contraintes légales et réglementaires.",
    cta: "Découvrez la solution",
    href: "/contact",
    imageLeft: false,
  },
  {
    title: "Un véritable portail collaborateurs",
    desc: "Gestion des absences, campagnes d'entretien automatisées, notes de frais — tout devient fluide. Des applis simples permettent à vos collaborateurs de gagner en temps et en autonomie.",
    cta: "Découvrez la solution",
    href: "/contact",
    imageLeft: true,
  },
  {
    title: "Dématérialisez vos documents RH",
    desc: "Distribuez les bulletins de paie en quelques clics. Les documents RH sont sécurisés et accessibles dans le coffre-fort numérique de chaque salarié, et vous pouvez utiliser la signature électronique.",
    cta: "Découvrez la solution",
    href: "/contact",
    imageLeft: false,
  },
];

export default function PaieRhClient() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp}>
                <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                  <ChevronRight size={14} />
                  <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                  <ChevronRight size={14} />
                  <span className="text-white">Paie & RH</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Nos solutions de Paie et de RH
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Libérez-vous des tâches administratives et facilitez la vie de vos collaborateurs avec une solution paie et RH adaptée aux besoins uniques de votre entreprise.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Discutons ensemble <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:flex h-80 rounded-2xl bg-slate-700 border border-slate-600 items-center justify-center"
              >
                <span className="text-slate-400 text-sm">Image à ajouter</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — SOLUTIONS (3 colonnes) ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Trouvez la solution RH et Paie adaptée à vos besoins
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-white flex flex-col p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center mb-4">
                    <sol.icon size={20} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-1">{sol.name}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-5">{sol.subtitle}</p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-secondary text-sm">
                        <CheckCircle size={14} className="text-cta mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={sol.href} className="inline-flex items-center gap-1 text-cta font-semibold text-sm hover:underline">
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — STATS CLÉS ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {keyStats.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Icon size={24} className="text-emerald-600" />
                  </div>
                  <p className="font-bold text-primary">{label}</p>
                  <p className="text-secondary text-sm">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTIONS 3-4-5 — ALTERNÉES IMAGE / TEXTE ── */}
        {featureSections.map((sec, i) => (
          <section key={sec.title} className={`py-20 ${i % 2 === 0 ? "bg-bg" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${sec.imageLeft ? "" : ""}`}>
                {/* Image placeholder */}
                {sec.imageLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="hidden lg:flex h-72 rounded-2xl bg-slate-100 border border-border items-center justify-center"
                  >
                    <span className="text-slate-400 text-sm">Image / capture à ajouter</span>
                  </motion.div>
                )}
                {/* Texte */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: sec.imageLeft ? 0.1 : 0 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                    {sec.title}
                  </h2>
                  <p className="text-secondary leading-relaxed mb-8">
                    {sec.desc}
                  </p>
                  <Link
                    href={sec.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 text-sm"
                  >
                    {sec.cta} <ArrowRight size={14} />
                  </Link>
                </motion.div>
                {/* Image placeholder droite */}
                {!sec.imageLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="hidden lg:flex h-72 rounded-2xl bg-slate-100 border border-border items-center justify-center"
                  >
                    <span className="text-slate-400 text-sm">Image / capture à ajouter</span>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Prêt à simplifier votre gestion RH et paie ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement de la solution Sage la plus adaptée à vos équipes.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cta font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Discuter de votre projet <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
