"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
  Users, Globe, Award, BookOpen, Download,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stats = [
  { value: "450+", label: "Clients experts-comptables en Afrique francophone" },
  { value: "3",    label: "Centres de support dédiés" },
  { value: "7",    label: "Conventions de partenariat avec les ordres des experts-comptables d'Afrique" },
];

const guidePoints = [
  "Témoignages d'experts-comptables et de partenaires Sage",
  "Retours d'expériences sur l'ouverture au Cloud et à la digitalisation",
  "Best Practices d'usages de solutions connectées pour les cabinets",
];

export default function ExpertiseComptableClient() {
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
                  <span className="text-white">Expertise Comptable</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Solutions Sage pour les cabinets d&apos;expertise comptable
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Les exigences de vos clients et les nouvelles technologies cloud transforment votre métier. Les solutions Sage vous aident à relever ces nouveaux défis et à développer votre cabinet avec efficacité.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Demander une démo <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:block h-80 rounded-2xl overflow-hidden"
              >
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783591001/lukas-blazek-mcSDtbWXUZU-unsplash_euunas.jpg"
                  alt="Expert-comptable avec solutions Sage - Thalès Informatique"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1 — DIGITALISEZ VOTRE CABINET ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div {...fadeUp}>
                <span className="text-xs font-bold text-cta uppercase tracking-widest mb-2 block">
                  Sage Génération Expert Connect
                </span>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Digitalisez votre cabinet
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Démarrer un dossier de production comptable ou sociale n'a jamais été aussi simple et intuitif. Vos outils quotidiens sont les leviers de votre performance.",
                    "Gagnez du temps en automatisant vos échanges de données en toute sécurité. Digitalisez votre relation client grâce aux services connectés et aux réseaux sociaux.",
                    "Entrez dans l'ère des solutions en ligne et pilotez votre relation clients à 100 % digitale. Simplifiez au maximum le quotidien du cabinet comptable.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-secondary text-sm leading-relaxed">
                      <CheckCircle size={16} className="text-cta mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                  En savoir plus <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-72 rounded-2xl overflow-hidden hidden lg:block"
              >
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783590026/fr-ma-accountants-thales-zoverview-ui-3-thales-informatique_fy4thf.webp"
                  alt="Interface Sage Génération Expert Connect - Thalès Informatique"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — GAGNANT-GAGNANT ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-72 rounded-2xl overflow-hidden hidden lg:block"
              >
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1783590025/fr-ma-accountants-overview-ui-2a-thales-informatique_nlneq9.webp"
                  alt="Dashboard comptable Sage X3 - Thalès Informatique"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Badges Sage 50 / Sage 100 */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center">50</span>
                  <span className="w-10 h-10 rounded-full bg-cta text-white text-sm font-bold flex items-center justify-center">100</span>
                </div>
                <span className="text-xs font-bold text-cta uppercase tracking-widest mb-2 block">
                  Trouvez la bonne solution pour votre client
                </span>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Pour vos clients et votre cabinet, c&apos;est gagnant-gagnant
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Dynamisez vos échanges de données avec les solutions de vos clients.",
                    "Sécurisez vos missions et assurez la qualité et la conformité des opérations.",
                    "Accélérez vos travaux comptables en utilisant le même plan comptable que vos clients.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-secondary text-sm leading-relaxed">
                      <CheckCircle size={16} className="text-cta mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                  En savoir plus <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — TÉMOIGNAGE ── */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div {...fadeUp}>
                <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6 italic">
                  &ldquo;La gamme Sage, avec sa diversité, nous permet de proposer à chacun de nos clients la solution la plus adaptée à son contexte. Et qu&apos;ils puissent ensuite évoluer quand leur croissance le nécessite.&rdquo;
                </blockquote>
                <div className="mb-8">
                  <p className="font-bold text-white">Directeur de cabinet</p>
                  <p className="text-white/60 text-sm">Cabinet d&apos;expertise comptable, Casablanca</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200"
                >
                  Échanger avec un expert <ArrowRight size={16} />
                </Link>
              </motion.div>
              {/* Photo placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-80 rounded-2xl bg-slate-700 border border-slate-600 hidden lg:flex items-center justify-center"
              >
                <span className="text-slate-500 text-sm">Photo à ajouter</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — ENGAGEMENT / STATS ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Vous êtes impliqué, nos équipes aussi. Oui, à l&apos;engagement concret !
              </h2>
              <p className="text-secondary leading-relaxed">
                Nos équipes sont sur le terrain pour vous apporter une relation personnalisée et un support technique réactif. Nous sommes également investis auprès de la Profession pour être toujours en phase avec votre actualité. C&apos;est essentiel pour nous !
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-cta mb-3">{s.value}</div>
                  <p className="text-secondary text-sm leading-relaxed">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — GUIDE À TÉLÉCHARGER ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div {...fadeUp}>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={18} className="text-cta" />
                  <span className="text-xs font-bold text-cta uppercase tracking-widest">Guide Gratuit</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Oui, à la liberté ! Le guide Sage pour les cabinets d&apos;expertise comptable
                </h2>
                <p className="text-secondary leading-relaxed mb-6">
                  Experts-comptables, votre profession évolue et votre éditeur devient un véritable partenaire du changement grâce à des solutions cloud innovantes et adaptées aux enjeux d&apos;aujourd&apos;hui et de demain, comme à la nouvelle relation avec les clients tournée autour du conseil et du développement. Téléchargez votre guide interactif.
                </p>
                <ul className="space-y-3 mb-8">
                  {guidePoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-secondary text-sm">
                      <CheckCircle size={16} className="text-cta mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  <Download size={16} />
                  Télécharger le guide
                </Link>
              </motion.div>

              {/* Guide visual placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden lg:flex flex-col items-center justify-center h-72 rounded-2xl bg-emerald-500 text-white gap-2 p-8"
              >
                <div className="text-3xl font-black mb-2">Oui,<br/>à la liberté !</div>
                <p className="text-white/80 text-sm text-center">
                  Oui, le cabinet en mode ouvert et agile !
                </p>
                <p className="text-white/60 text-xs text-center mt-2">
                  Une approche essentielle vis-à-vis d&apos;une profession en profonde mutation vers de nouvelles opportunités.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Prêt à faire évoluer votre cabinet ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement de la solution Sage adaptée à votre cabinet.
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
