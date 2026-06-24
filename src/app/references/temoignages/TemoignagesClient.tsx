"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Play, Star, Quote, X } from "lucide-react";
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
    videoId: "p1FgI3unv2Y",
    name: "M. Laurent Chevreau",
    role: "Directeur Général",
    company: "SOCIMAR",
    quote: "Sage est une solution parfaitement adaptée aux besoins des PME. Nous avons opté pour Thalès Informatique pour la réactivité de ses collaborateurs qui sont extrêmement compétents.",
    accent: "from-blue-600 to-cyan-500",
    accentText: "text-blue-300",
    initial: "L",
  },
  {
    videoId: "2-XQ_MBOYKA",
    name: "M. Rachid Oueski",
    role: "DAF",
    company: "HEA Trade & Services",
    quote: "Thalès Informatique nous accompagne dans la mise à jour de notre solution dans les meilleures conditions en termes de délai et de qualité.",
    accent: "from-violet-600 to-purple-500",
    accentText: "text-violet-300",
    initial: "R",
  },
  {
    videoId: "JeQ1FB2e-7E",
    name: "M. Noureddine Gnaou",
    role: "PDG",
    company: "SOREMAR GROUP",
    quote: "Être entouré par des consultants expérimentés signifie que nous pouvons toujours trouver des solutions. Notre coopération tourne très bien sur tous les points de vue avec Thalès.",
    accent: "from-emerald-600 to-teal-500",
    accentText: "text-emerald-300",
    initial: "N",
  },
  {
    videoId: "lw9nXN4xwFI",
    name: "Mme Ahlam Kadim",
    role: "EM",
    company: "POLLUCLEAN",
    quote: "L'acquisition de la solution Sage depuis sa première version 7 jusqu'à la mise à jour vers la version 100c était une décision stratégique pour développer notre chiffre d'affaires.",
    accent: "from-amber-500 to-orange-400",
    accentText: "text-amber-300",
    initial: "A",
  },
];

function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-md" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Témoignage client"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </motion.div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 cursor-pointer z-10"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

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

export default function TemoignagesClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
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
      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {videoTestimonials.map((t) => (
              <motion.div
                key={t.videoId}
                variants={fadeUp}
                className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
              >
                {/* Video thumbnail */}
                <div
                  className="relative h-44 overflow-hidden cursor-pointer"
                  onClick={() => setActiveVideo(t.videoId)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${t.videoId}/maxresdefault.jpg`}
                    alt={`Témoignage ${t.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-60`} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center shadow-2xl cursor-pointer`}
                    >
                      <Play size={20} className="fill-white text-white ml-1" />
                    </motion.div>
                  </div>
                </div>
                <div className="relative p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-white/90 text-sm leading-relaxed mb-6 italic line-clamp-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Avatar */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${t.accent} rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/30`}>
                      {t.initial}
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-semibold text-sm truncate">{t.name}</div>
                      <div className="text-white/70 text-xs truncate">{t.role}, {t.company}</div>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ratingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-8 text-center"
          >
            <div>
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-6xl font-bold text-white mb-2">4.8<span className="text-3xl text-slate-400">/5</span></div>
              <p className="text-slate-400 text-lg">Basé sur 312 avis clients vérifiés</p>
            </div>
            <div className="sm:border-l sm:border-white/15 sm:pl-8">
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} className={i < 5 ? "text-yellow-400 fill-yellow-400" : "text-slate-500"} />
                ))}
              </div>
              <div className="text-6xl font-bold text-white mb-2">4.7<span className="text-3xl text-slate-400">/5</span></div>
              <p className="text-slate-400 text-lg mb-1">29 avis Google</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Thales+Informatique+Revendeur+Solution+Sage+Casablanca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-white transition-colors"
              >
                Voir la fiche Google →
              </a>
            </div>
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
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Laisser un avis <ChevronRight size={18} />
              </Link>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Thales+Informatique+Revendeur+Solution+Sage+Casablanca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cta text-cta font-semibold rounded-xl hover:bg-cta hover:text-white transition-colors duration-200"
              >
                Rédiger un avis Google <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
