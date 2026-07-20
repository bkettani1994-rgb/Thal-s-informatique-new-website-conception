"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, CheckCircle, ChevronRight,
  BarChart2, Settings2, FileText, ShieldCheck,
  Cloud, Smartphone, BadgeCheck, Users2, Sliders, Clock,
  TrendingUp, Lock, Globe, Layers,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const sage100Features = [
  "Suivi de vos flux de trésorerie et tableaux de bord financiers",
  "Facilitation et gestion des relances et impayés",
  "Rapprochement bancaire automatisé",
  "Éditez vos documents fiscaux et déclarations comptables automatiquement",
];

const sageX3Features = [
  "Comptabilité générale et analytique en temps réel",
  "Gestion multi-sociétés et multi-devises intégrée",
  "Clôtures mensuelles et annuelles guidées et automatisées",
  "Rapports financiers avancés et exportables (Excel, PDF)",
];

const roles = [
  {
    icon: BarChart2,
    title: "Suivez vos finances en temps réel",
    desc: "Visualisez l'état de votre trésorerie, de vos créances et de vos dettes à tout moment, sans attendre la clôture.",
  },
  {
    icon: Settings2,
    title: "Configurez votre logiciel en un clic",
    desc: "Paramétrez votre plan comptable selon le CGNC marocain et commencez à travailler sans délai.",
  },
  {
    icon: FileText,
    title: "Préparez vos déclarations fiscales rapidement",
    desc: "Générez automatiquement vos déclarations TVA, IS et états financiers conformes à la DGI.",
  },
  {
    icon: ShieldCheck,
    title: "Limitez les risques et éliminez les erreurs",
    desc: "Les contrôles automatiques intégrés vous alertent avant qu'une anomalie ne devienne un problème.",
  },
  {
    icon: Cloud,
    title: "Sauvegardez vos informations financières en toute sécurité",
    desc: "Vos données comptables sont hébergées et sauvegardées en continu, accessibles partout.",
  },
  {
    icon: Smartphone,
    title: "Travaillez depuis n'importe où",
    desc: "Accédez à votre comptabilité depuis votre bureau, en déplacement ou en télétravail grâce aux solutions cloud.",
  },
];

const advantages = [
  {
    icon: TrendingUp,
    title: "Une solution évolutive",
    desc: "Nos logiciels grandissent avec votre activité, de la PME à la grande entreprise, sans changer d'environnement.",
  },
  {
    icon: Settings2,
    title: "Facile à utiliser",
    desc: "Prise en main rapide grâce à nos formations dédiées et à une interface pensée pour les équipes comptables.",
  },
  {
    icon: Globe,
    title: "Accessible à distance",
    desc: "Travaillez depuis n'importe quel appareil connecté — votre comptabilité vous suit partout.",
  },
  {
    icon: BadgeCheck,
    title: "Toujours en conformité",
    desc: "Mises à jour régulières pour rester conforme aux évolutions du CGNC, de la DGI et de la législation marocaine.",
  },
  {
    icon: Users2,
    title: "Un outil collaboratif",
    desc: "Partagez vos données comptables avec votre expert-comptable et vos équipes en temps réel, sans échanges de fichiers.",
  },
  {
    icon: Sliders,
    title: "Sur mesure",
    desc: "Paramétrez le logiciel selon vos règles de gestion, vos axes analytiques et vos processus internes.",
  },
];

export default function ComptabiliteFinanceClient() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div {...fadeUp} className="max-w-2xl">
              <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <ChevronRight size={14} />
                <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                <ChevronRight size={14} />
                <span className="text-white">Comptabilité & Finance</span>
              </nav>
              <span className="inline-block text-xs font-bold text-accent tracking-widest uppercase mb-4">Finance</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Avec nos solutions comptables, faites de la finance un{" "}
                <span className="text-accent">levier de croissance</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Découvrez nos logiciels de comptabilité Sage et automatisez vos tâches comptables pour gagner du temps. Sage vous aide à gérer vos finances et vous offre la liberté de vous développer.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Découvrir nos solutions <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 2 — COMPARAISON SOLUTIONS ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-14 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Trouvez la solution comptable qui correspond le mieux à votre activité
              </h2>
              <p className="text-secondary leading-relaxed">
                Les entreprises doivent faire face à des enjeux financiers, aux fluctuations des devises et au respect des réglementations locales. Les logiciels de comptabilité Sage simplifient la collaboration avec des solutions automatisées, un suivi des données en temps réel et plus de travail rationalisé.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sage 100 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-cta/10 flex items-center justify-center">
                    <Layers size={16} className="text-cta" />
                  </div>
                  <span className="text-xs font-semibold text-cta uppercase tracking-widest">PME</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">Sage 100 Comptabilité</h3>
                <Link
                  href="/solutions/sage-100"
                  className="inline-flex items-center gap-1 text-sm text-cta font-semibold hover:underline mb-6"
                >
                  En savoir plus sur Sage 100 Comptabilité <ArrowRight size={12} />
                </Link>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Un logiciel comptable fiable pour les PME marocaines : gérez vos comptes, vos clients et vos fournisseurs en toute simplicité. Idéal pour les structures qui souhaitent structurer leur gestion financière sans complexité.
                </p>
                <ul className="space-y-3">
                  {sage100Features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-secondary">
                      <CheckCircle size={16} className="text-cta mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Sage X3 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <TrendingUp size={16} className="text-emerald-600" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">ETI / Groupe</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">Sage X3 Finance</h3>
                <Link
                  href="/solutions/sage-x3"
                  className="inline-flex items-center gap-1 text-sm text-emerald-600 font-semibold hover:underline mb-6"
                >
                  En savoir plus sur Sage X3 Finance <ArrowRight size={12} />
                </Link>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  La solution pour les entreprises en croissance ou multi-entités. Sage X3 Finance offre une gestion comptable et financière complète, connectée à tous vos processus métiers.
                </p>
                <ul className="space-y-3">
                  {sageX3Features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-secondary">
                      <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — DÉVELOPPEZ VOTRE ACTIVITÉ ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Développez votre activité avec les logiciels comptables Sage
              </h2>
              <p className="text-secondary leading-relaxed mb-3">
                Avec un logiciel de comptabilité Sage, vous avez le contrôle total de vos finances et disposez de la flexibilité financière nécessaire à votre développement. Vous pouvez consulter, analyser et partager vos données financières en temps réel avec votre équipe, peu importe leur localisation.
              </p>
              <p className="text-secondary leading-relaxed">
                Grâce à la technologie cloud, vous aurez accès à vos finances partout, à tout moment. Thalès Informatique vous accompagne dans le choix de la meilleure solution et assure un déploiement sur mesure, une formation complète et un support continu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 4 — POURQUOI UN LOGICIEL COMPTABLE ── */}
        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Pourquoi adopter un logiciel comptable professionnel ?
              </h2>
              <p className="text-secondary leading-relaxed">
                Le logiciel de comptabilité mobilise votre gestion financière en automatisant les tâches de base. Vous pouvez ainsi effectuer vos transactions avec des tierces parties, gérer vos documents financiers et réduire le risque d&apos;erreurs et la perte de temps pour vous concentrer sur le développement de votre activité.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 5 — RÔLE DANS LA DIGITALISATION ── */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Le rôle du logiciel comptable dans la digitalisation des entreprises
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <r.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6 — FAQ 2 COLONNES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-bg border border-border rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center mb-5">
                  <Lock size={18} className="text-cta" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">
                  Un logiciel de comptabilité cloud est-il sécurisé ?
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-3">
                  Vous n&apos;aimez pas l&apos;idée d&apos;envoyer vos informations commerciales sensibles dans le cloud ? Rassurez-vous, le logiciel de comptabilité cloud est l&apos;un des endroits les plus sécurisés pour stocker vos informations financières.
                </p>
                <p className="text-secondary text-sm leading-relaxed mb-3">
                  Grâce à la technologie cloud, vos données sont automatiquement sauvegardées en temps réel, donc vous ne risquez pas de perdre des informations clés. Avec un logiciel comptable cloud, il est ainsi plus facile de gérer la gestion commerciale : vous pouvez y ranger vos documents comptables et créer vos factures et devis lors de vos déplacements.
                </p>
                <p className="text-secondary text-sm leading-relaxed">
                  Vous travaillez pour développer votre entreprise. Nous travaillons pour protéger vos données.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-bg border border-border rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                  <TrendingUp size={18} className="text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-4">
                  Comment un logiciel comptable cloud aide votre entreprise ?
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  Un logiciel de comptabilité dans le cloud automatise les tâches chronophages, donc vous gagnez du temps pour développer votre activité. Vous collaborez avec votre équipe quelle que soit votre localisation, et vous gardez le contrôle de votre entreprise. Les rapports vous donnent une vision précise et en temps réel de vos finances, facilitant la prise de décision.
                </p>
                <p className="text-secondary text-sm font-semibold mb-2">Nos solutions vous aident à :</p>
                <ul className="space-y-2">
                  {[
                    "Créer facilement des rapports",
                    "Contrôler vos finances en temps réel",
                    "Traiter votre TVA et vos télédéclarations",
                    "Effectuer des paiements internationaux",
                    "Être à jour sur les dernières législations financières et bien plus encore",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-secondary">
                      <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-secondary text-sm leading-relaxed mt-4">
                  Grâce à notre technologie cloud, vos données sont automatiquement sauvegardées, vous évitant ainsi de perdre des informations clés. Le logiciel comptable facilite également votre gestion commerciale et votre facturation lors de vos déplacements.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 7 — AVANTAGES ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Quels sont les avantages de nos logiciels comptables ?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center mb-4">
                    <a.icon size={18} className="text-cta" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{a.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Prêt à digitaliser votre comptabilité ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent de la sélection de la solution jusqu&apos;à la mise en production et au-delà.
              </p>
              <p data-ilink className="text-white/60 text-sm mb-4">Découvrez nos solutions <Link href="/solutions/sage-100" className="text-white underline hover:text-accent">Sage 100</Link> et <Link href="/solutions/gestion-financiere" className="text-white underline hover:text-accent">Gestion Financière</Link>.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cta font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Demander une démo gratuite <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
