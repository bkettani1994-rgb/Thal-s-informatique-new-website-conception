"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Play, Star, Quote } from "lucide-react";
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

const videoTestimonials = [
  {
    name: "Karim Benali",
    role: "Directeur Financier",
    company: "Groupe Industriel XYZ",
    quote: "Grâce à Thalès Informatique, nous avons réduit notre cycle de clôture de 12 à 3 jours. Une transformation remarquable.",
    metric: "-75% temps clôture",
    accent: "from-blue-600 to-blue-800",
    accentText: "text-blue-400",
    initial: "K",
  },
  {
    name: "Fatima Zahra Alami",
    role: "Directrice RH",
    company: "Distribution Maroc Sud",
    quote: "La gestion de notre paie pour 400 collaborateurs est devenue un vrai plaisir. Zéro erreur depuis 2 ans. L'équipe Thalès a tout changé.",
    metric: "400 collaborateurs",
    accent: "from-violet-600 to-violet-800",
    accentText: "text-violet-400",
    initial: "F",
  },
  {
    name: "Mohamed Tazi",
    role: "Directeur Général",
    company: "BTP Construct",
    quote: "Vision en temps réel de nos chantiers, budgets et équipes. Thalès Informatique, toujours disponible, toujours efficace.",
    metric: "+40% productivité",
    accent: "from-emerald-600 to-emerald-800",
    accentText: "text-emerald-400",
    initial: "M",
  },
];

const written = [
  {
    quote: "Déploiement rapide et équipe très professionnelle. Sage X3 a transformé notre gestion de A à Z.",
    name: "Ahmed Rachidi",
    role: "DSI",
    company: "Manufacture Textile",
  },
  {
    quote: "Le support de Thalès est exemplaire. Toujours disponibles, toujours efficaces. Un vrai partenaire.",
    name: "Nadia Benchrifa",
    role: "Responsable Administratif & Financier",
    company: "Groupe Immobilier",
  },
  {
    quote: "Notre clôture mensuelle est passée de 5 jours à moins d'une journée. Résultats au-delà des attentes.",
    name: "Youssef Eddahbi",
    role: "Directeur Administratif & Financier",
    company: "Distribution Nationale",
  },
  {
    quote: "Formation excellente, nos équipes ont été pleinement opérationnelles en 2 semaines seulement.",
    name: "Samira Moussaoui",
    role: "Directrice RH",
    company: "Industrie Chimique",
  },
  {
    quote: "Eloficash a divisé nos impayés par 3 en 6 mois. Un ROI immédiat et mesurable.",
    name: "Hassan Benyaich",
    role: "Trésorier",
    company: "Groupe Négoce",
  },
  {
    quote: "La solution HACCP de Thalès nous a permis d'obtenir notre certification ISO 22000 sans stress.",
    name: "Laila Tahiri",
    role: "Directrice Qualité",
    company: "Industries Agroalimentaires",
  },
];

export default function TemoignagesPage() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const writtenRef = useRef(null);
  const ratingRef = useRef(null);
  const ctaRef = useRef(null);

  const videoInView = useInView(videoRef, { once: true, margin: "-80px" });
  const writtenInView = useInView(writtenRef, { once: true, margin: "-80px" });
  const ratingInView = useInView(ratingRef, { once: true, margin: "-80px" });
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
              <span className="text-accent">Témoignages</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-cta/20 border border-cta/30 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Témoignages Clients
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Témoignages <span className="text-accent">Clients</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Ce que nos clients disent de Thalès Informatique. 312 avis, 4.8/5 — une confiance bâtie sur 30 ans de résultats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video testimonials */}
      <section ref={videoRef} className="py-20 bg-primary/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Témoignages Vidéo</h2>
            <p className="text-slate-400">Nos clients témoignent en leur propres mots</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={videoInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6"
          >
            {videoTestimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className={`relative bg-gradient-to-br ${t.accent} rounded-2xl overflow-hidden group cursor-pointer`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="relative p-6 pt-16">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  {/* Metric */}
                  <div className={`text-2xl font-bold ${t.accentText} mb-4`}>{t.metric}</div>
                  {/* Quote */}
                  <p className="text-white/90 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Avatar */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/30">
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/70 text-xs">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Written testimonials */}
      <section ref={writtenRef} className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={writtenInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-3">Avis Écrits</h2>
            <p className="text-secondary">Des retours authentiques de décideurs et utilisateurs</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={writtenInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {written.map((w) => (
              <motion.div
                key={w.name}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Quote size={24} className="text-cta/30 mb-3" />
                <p className="text-secondary text-sm leading-relaxed mb-6 italic">
                  &ldquo;{w.quote}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-xs text-slate-500 ml-1">5/5</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-primary text-sm">{w.name}</div>
                  <div className="text-xs text-secondary mt-0.5">{w.role}</div>
                  <div className="text-xs text-cta font-semibold mt-0.5">{w.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overall rating */}
      <section ref={ratingRef} className="py-16 bg-gradient-to-br from-primary to-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ratingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-6xl font-bold text-white mb-2">4.8<span className="text-3xl text-slate-400">/5</span></div>
            <p className="text-slate-400 text-lg">Basé sur 312 avis clients vérifiés</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Partagez votre témoignage</h2>
            <p className="text-secondary mb-8 text-lg">
              Vous êtes client Thalès Informatique ? Votre retour d'expérience aide d'autres entreprises à prendre la bonne décision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Laisser un avis <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
