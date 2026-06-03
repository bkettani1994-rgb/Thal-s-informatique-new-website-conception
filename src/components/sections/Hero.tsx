"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const trustedBadges = [
  "Microsoft Partner",
  "Sage Platinum",
  "ISO Certified",
  "30+ ans d'expérience",
];

const floatingStats = [
  { value: "+34%", label: "Productivité", pos: "top-[22%] left-[6%]", delay: 0.8 },
  { value: "500+", label: "Entreprises", pos: "top-[22%] right-[6%]", delay: 1.0 },
  { value: "99.9%", label: "Disponibilité", pos: "bottom-[22%] left-[6%]", delay: 1.2 },
  { value: "30 ans", label: "D'expérience", pos: "bottom-[22%] right-[6%]", delay: 1.4 },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* ── VIDEO BACKGROUND ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%230F172A'/%3E%3C/svg%3E"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-business-team-in-a-modern-office-working-42774-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── OVERLAYS ── */}
      {/* Dark gradient over video */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/88 via-primary/80 to-primary/92" />
      {/* Blue radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cta/15 rounded-full blur-[140px] pointer-events-none" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />

      {/* ── FLOATING STAT CARDS (desktop) ── */}
      {floatingStats.map((s) => (
        <motion.div
          key={s.value}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: s.delay, duration: 0.5, ease: "backOut" }}
          className={`absolute hidden lg:flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 ${s.pos}`}
        >
          <div>
            <div className="text-lg font-bold text-white leading-none">{s.value}</div>
            <div className="text-[10px] text-white/50 mt-0.5 font-medium">{s.label}</div>
          </div>
        </motion.div>
      ))}

      {/* ── CENTERED CONTENT ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">

        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-wide">
            Partenaire de confiance depuis 1994
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight"
        >
          Votre partenaire de confiance
          <br />
          pour réussir votre{" "}
          <span className="gradient-text">transformation digitale</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-7 text-base sm:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto"
        >
          Depuis plus de 30 ans, nous accompagnons les entreprises dans
          l'optimisation de leur gestion, l'automatisation de leurs processus
          et l'amélioration de leurs performances.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-7 flex flex-wrap justify-center gap-2"
        >
          {trustedBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/65 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              <CheckCircle2 size={11} className="text-accent" />
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-cta/35 cursor-pointer text-sm sm:text-base"
          >
            Demander une démonstration
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/16 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 transition-all duration-200 cursor-pointer text-sm sm:text-base backdrop-blur-sm"
          >
            <Play size={15} className="fill-white" />
            Parler à un expert
          </a>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/28 text-[10px] font-semibold tracking-widest uppercase">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/28 to-transparent"
        />
      </motion.div>
    </section>
  );
}
