"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight, ChevronRight, CheckCircle,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const solutions = [
  {
    badge: "Sage Business Cloud",
    badgeLabel: "Sage X3",
    color: "bg-cta",
    name: "Sage Business Cloud Sage X3",
    subtitle: "Pour les moyennes et grandes entreprises",
    description: "De l'approvisionnement à la gestion production en passant par le stockage, le commerce électronique, les ventes, la comptabilité ou les RH, vous disposez d'un logiciel de gestion de production industrielle qui vous permet de gérer l'ensemble de votre activité dans le monde entier et à moindre coût.",
    features: [
      "Maîtrisez vos opérations internationales",
      "Obtenez des informations pertinentes au moment opportun",
      "Développez votre activité sur de nouveaux marchés et territoires",
      "Gagnez en flexibilité et concentrez-vous sur votre cœur de métier",
      "Disposez de workflows simples à gérer et très intuitifs",
      "Tirez parti d'une solution dédiée à votre secteur d'activité (distribution, industrie, services…)",
    ],
    cta: "Découvrez Sage X3",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Sage",
    badgeLabel: "FRP 1000",
    color: "bg-emerald-600",
    name: "Sage FRP 1000",
    subtitle: "Pour les moyennes et grandes entreprises",
    description: "Sage FRP 1000 est une suite financière intégrée basée sur une plateforme collaborative et productive pour des institutions à la carte et une ouverture fonctionnelle experte.",
    features: [
      "Bénéficiez d'une solution de gestion comptable et financière complète",
      "Gérez vos opérations commerciales : achats, ventes, stocks…",
      "Consultez toutes les données de l'association et partagez-les en un clic",
      "Optez pour une approche flexible avec des options à la carte",
      "Disposez d'une solution tout en un pour fluidifier le partage de l'information dans l'organisation",
      "Optez pour la robustesse et la sécurité en contexte de gros volumes",
    ],
    cta: "Découvrez Sage FRP 1000",
    href: "/contact",
    highlight: true,
  },
];

export default function AssociationClient() {
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
                  <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
                  <ChevronRight size={14} />
                  <span className="text-white">Associations</span>
                </nav>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  Logiciels de comptabilité pour associations
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Avec Sage Business Cloud, assurez-vous que les fonds sont maintenus et utilisés efficacement. Recrutez, gérez et intéragissez activement avec vos équipes dans le monde entier, quel que soit le pays, le continent ou le fuseau horaire.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Découvrir nos solutions <ArrowRight size={16} />
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

        {/* ── SECTION 1 — SECRET DE LA RÉUSSITE ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div {...fadeUp}>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                  Connaissez-vous le secret de la réussite des organismes à but non lucratif ?
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Les organisations à but non lucratif fonctionnent comme des entreprises, à une différence près : ils se vendent des idées et non des produits. Les organismes à but non lucratif ont pas seulement besoin de dons ; ils ont également besoin de solutions technologiques pour faire avancer leur mission. Avec des budgets restreints et la besoin de diversifier les sources de financement, les organismes de bienfaisance, quelle que soit leur taille, souhaitent davantage faire fructifier leur argent pour servir leur mission.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — SOLUTIONS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Contrôlez vos coûts et travaillez plus efficacement grâce à une solution flexible et ergonomique
              </h2>
              <p className="text-secondary leading-relaxed">
                Avec le bon outil cloud, vous pouvez réduire votre cycle de reporting de plusieurs semaines et ainsi libérer du budget et du temps pour d&apos;autres actions. Trouvez votre solution dès maintenant.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl border flex flex-col overflow-hidden ${sol.highlight ? "border-cta shadow-lg shadow-cta/10" : "border-border"}`}
                >
                  <div className={`${sol.color} px-6 py-4`}>
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-widest">{sol.badge}</p>
                    <p className="text-white font-bold text-lg">{sol.badgeLabel}</p>
                  </div>
                  <div className="bg-white flex flex-col flex-1 p-6">
                    <p className="text-xs font-bold text-cta uppercase tracking-widest mb-2">{sol.subtitle}</p>
                    <p className="text-secondary text-sm leading-relaxed mb-5">{sol.description}</p>
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {sol.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-secondary text-sm">
                          <CheckCircle size={14} className="text-cta mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={sol.href}
                      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 ${sol.highlight ? "bg-cta text-white hover:bg-blue-700" : "bg-primary text-white hover:bg-slate-800"}`}
                    >
                      {sol.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — TÉMOIGNAGE ── */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <div className="text-5xl text-white/20 font-serif mb-6">&ldquo;&rdquo;</div>
              <blockquote className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-8 italic">
                Utiliser Sage X3 nous a permis de gagner trois semaines sur le cycle de rapport mensuel. Notre organisation est gérée par des employés à temps partiel et cela est dû en grande partie aux gains d&apos;efficacité obtenus grâce à la solution Sage.
              </blockquote>
              <p className="font-bold text-white">Directeur financier</p>
              <p className="text-white/60 text-sm mt-1">Organisation à but non lucratif, Maroc</p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 4 — CONSEILS D'EXPERTS ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Souhaitez-vous recevoir des conseils d&apos;experts pour les organismes à but non lucratif ?
              </h2>
              <p className="text-secondary leading-relaxed">
                Lisez nos articles, guides et astuces.
              </p>
            </motion.div>
            {/* Articles placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              {[
                {
                  title: "Facturation électronique au Maroc : pourquoi les entreprises les mieux préparées seront en avance",
                  tag: "Comptabilité",
                },
                {
                  title: "Facturation électronique au Maroc : comment préparer concrètement votre entreprise",
                  tag: "Comptabilité",
                },
                {
                  title: "Facturation électronique au Maroc en 2026 : ce qui va réellement changer pour les entreprises",
                  tag: "Comptabilité",
                },
              ].map((article, i) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-white overflow-hidden flex flex-col"
                >
                  <div className="h-40 bg-slate-100 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Image à ajouter</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-bold text-cta uppercase tracking-widest mb-2">{article.tag}</span>
                    <p className="text-primary font-semibold text-sm leading-snug mb-4 flex-1">{article.title}</p>
                    <Link href="/blog" className="inline-flex items-center gap-1 text-cta text-xs font-semibold hover:underline">
                      Lire l&apos;article <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 text-sm"
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 bg-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Prêt à moderniser la gestion de votre association ?
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Nos experts Thalès Informatique vous accompagnent dans le choix et le déploiement de la solution Sage la plus adaptée à votre organisation.
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
