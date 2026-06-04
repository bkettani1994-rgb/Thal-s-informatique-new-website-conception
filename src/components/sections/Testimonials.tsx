"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Star, Quote } from "lucide-react";

const testimonials = [
  {
    videoId: "dQw4w9WgXcQ", // ← Remplacer par l'ID YouTube réel
    name: "Karim Benali",
    role: "Directeur Financier",
    company: "Groupe Industriel XYZ",
    sector: "Industrie",
    quote:
      "Grâce à Thalès Informatique, nous avons réduit notre cycle de clôture comptable de 12 à 3 jours. Un accompagnement exceptionnel de bout en bout.",
    rating: 5,
    metric: { value: "-75%", label: "Temps de clôture" },
    accent: "from-blue-600 to-cyan-500",
    accentLight: "rgba(3,105,161,.15)",
  },
  {
    videoId: "dQw4w9WgXcQ", // ← Remplacer par l'ID YouTube réel
    name: "Fatima Zahra Alami",
    role: "DRH",
    company: "Distribution Maroc Sud",
    sector: "Négoce & Distribution",
    quote:
      "La gestion de notre paie pour 400 collaborateurs est devenue un vrai plaisir. Fiabilité totale, zéro erreur depuis 2 ans de déploiement.",
    rating: 5,
    metric: { value: "400", label: "Collaborateurs gérés" },
    accent: "from-violet-600 to-purple-500",
    accentLight: "rgba(124,58,237,.15)",
  },
  {
    videoId: "dQw4w9WgXcQ", // ← Remplacer par l'ID YouTube réel
    name: "Mohamed Tazi",
    role: "Directeur Général",
    company: "BTP Construct",
    sector: "BTP",
    quote:
      "Nous avons enfin une vision en temps réel de nos chantiers, budgets et équipes. La transformation a été rapide et l'équipe toujours disponible.",
    rating: 5,
    metric: { value: "+40%", label: "Productivité chantiers" },
    accent: "from-emerald-600 to-teal-500",
    accentLight: "rgba(5,150,105,.15)",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

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
        {/* Backdrop */}
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-md" />

        {/* Modal */}
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

        {/* Close button */}
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

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      <section className="py-24 bg-primary relative overflow-hidden" id="temoignages">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cta/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              Témoignages clients
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ils ont transformé leur entreprise
            </h2>
            <p className="mt-4 text-base text-white/45 max-w-xl mx-auto leading-relaxed">
              Écoutez directement nos clients partager leur expérience et les
              résultats concrets obtenus avec Thalès Informatique.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                className="group relative bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                style={{ boxShadow: `0 0 0 0 ${t.accentLight}` }}
                whileHover={{ y: -4 }}
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${t.accentLight} 0%, transparent 70%)` }}
                />

                {/* ── VIDEO THUMBNAIL ── */}
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => setActiveVideo(t.videoId)}
                >
                  {/* YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${t.videoId}/maxresdefault.jpg`}
                    alt={`Témoignage ${t.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to gradient if thumbnail fails
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Gradient overlay on thumbnail */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-60`} />
                  <div className="absolute inset-0 bg-primary/30" />

                  {/* Sector badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                      {t.sector}
                    </span>
                  </div>

                  {/* Metric badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-2.5 py-1.5 text-center">
                      <div className={`text-base font-bold text-white`}>{t.metric.value}</div>
                      <div className="text-[8px] text-white/70 leading-none mt-0.5">{t.metric.label}</div>
                    </div>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center shadow-2xl cursor-pointer`}
                    >
                      <Play size={20} className="fill-white text-white ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration hint */}
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                    ▶ Voir le témoignage
                  </div>
                </div>

                {/* ── CONTENT ── */}
                <div className="p-5">
                  {/* Stars + quote icon */}
                  <div className="flex items-center justify-between mb-3">
                    <StarRating count={t.rating} />
                    <Quote size={18} className="text-white/15" />
                  </div>

                  {/* Quote */}
                  <p className="text-white/65 text-sm leading-relaxed mb-4 line-clamp-3 italic">
                    "{t.quote}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/8 mb-4" />

                  {/* Person */}
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-xs">
                        {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-white text-sm font-semibold leading-tight truncate">{t.name}</div>
                      <div className="text-white/40 text-xs leading-tight truncate">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-white/35 text-sm mb-4">
              Rejoignez plus de <span className="text-white/70 font-semibold">500 entreprises</span> qui nous font confiance
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer hover:bg-white/5"
            >
              Lire toutes les études de cas →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
