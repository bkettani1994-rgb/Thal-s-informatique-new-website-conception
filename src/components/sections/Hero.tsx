"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users, Shield } from "lucide-react";

const floatingCards = [
  {
    icon: TrendingUp,
    label: "Croissance",
    value: "+34%",
    sub: "productivité",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Users,
    label: "Clients",
    value: "500+",
    sub: "entreprises",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    label: "Fiabilité",
    value: "99.9%",
    sub: "disponibilité",
    color: "bg-violet-50 border-violet-100",
    iconColor: "text-violet-600",
  },
];

const trustedBadges = [
  "Microsoft Partner",
  "Sage Platinum",
  "ISO Certified",
  "30+ ans d'expérience",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-bg overflow-hidden flex items-center">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cta/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight text-balance"
            >
              Votre partenaire de confiance pour réussir votre{" "}
              <span className="gradient-text">transformation digitale</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl"
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
              className="mt-6 flex flex-wrap gap-2"
            >
              {trustedBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full"
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
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-cta/30 cursor-pointer"
              >
                Demander une démonstration
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 cursor-pointer"
              >
                <Play size={15} className="fill-white" />
                Parler à un expert
              </a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main dashboard mockup */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
              {/* Mockup header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                <div className="flex-1 bg-white/10 rounded h-5 ml-2" />
              </div>

              {/* Chart area */}
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <div className="text-white/40 text-xs mb-3 font-medium">Performance opérationnelle</div>
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 75, 100, 85, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                      className="flex-1 rounded-sm"
                      style={{
                        background: i >= 9 ? "rgba(56, 189, 248, 0.8)" : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Revenus", value: "+24%", trend: "up" },
                  { label: "Efficacité", value: "+41%", trend: "up" },
                  { label: "Coûts", value: "-18%", trend: "down" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/40 text-[10px] mb-1">{stat.label}</div>
                    <div className={`text-base font-bold ${stat.trend === "down" ? "text-emerald-400" : "text-accent"}`}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating metric cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.15, duration: 0.5, ease: "backOut" }}
                className={`absolute bg-white rounded-xl border shadow-lg px-3.5 py-2.5 ${card.color} cursor-default`}
                style={{
                  top: i === 0 ? "-16px" : i === 1 ? "40%" : undefined,
                  bottom: i === 2 ? "-16px" : undefined,
                  right: i === 1 ? "-20px" : undefined,
                  left: i === 0 ? "10px" : i === 2 ? "10px" : undefined,
                }}
              >
                <div className="flex items-center gap-2">
                  <card.icon size={16} className={card.iconColor} />
                  <div>
                    <div className="text-sm font-bold text-primary leading-none">{card.value}</div>
                    <div className="text-[10px] text-secondary mt-0.5">{card.sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-white/30 text-xs font-medium tracking-widest uppercase">Découvrir</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
