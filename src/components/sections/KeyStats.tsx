"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Data ─────────────────────────────────────────────── */
const stats = [
  {
    id: "years",
    value: 30, suffix: "+",
    label: "Années d'expérience",
    sub: "Fondée en 1994",
    color: "#F59E0B",
    glow: "rgba(245,158,11,.25)",
    border: "rgba(245,158,11,.35)",
    size: "featured",         // large card
    sparkline: [60,55,70,65,80,75,90,85,100],
  },
  {
    id: "clients",
    value: 500, suffix: "+",
    label: "Clients accompagnés",
    sub: "Entreprises marocaines",
    color: "#38BDF8",
    glow: "rgba(56,189,248,.22)",
    border: "rgba(56,189,248,.3)",
    size: "normal",
  },
  {
    id: "projects",
    value: 1200, suffix: "+",
    label: "Projets réalisés",
    sub: "Implémentations réussies",
    color: "#A78BFA",
    glow: "rgba(167,139,250,.2)",
    border: "rgba(167,139,250,.3)",
    size: "normal",
  },
  {
    id: "consultants",
    value: 80, suffix: "+",
    label: "Consultants experts",
    sub: "Équipes certifiées",
    color: "#34D399",
    glow: "rgba(52,211,153,.2)",
    border: "rgba(52,211,153,.3)",
    size: "wide",             // spans 2 columns on lg
  },
  {
    id: "satisfaction",
    value: 97, suffix: "%",
    label: "Taux de satisfaction",
    sub: "Clients recommandent",
    color: "#FB923C",
    glow: "rgba(251,146,60,.22)",
    border: "rgba(251,146,60,.32)",
    size: "ring",             // shows SVG ring
  },
];

/* ─── Counter hook ──────────────────────────────────────── */
function useCounter(target: number, running: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!running) return;
    let frame = 0;
    const total = 80;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = () => {
      frame++;
      setCount(Math.round(ease(frame / total) * target));
      if (frame < total) requestAnimationFrame(tick);
    };
    const id = setTimeout(() => requestAnimationFrame(tick), 200);
    return () => clearTimeout(id);
  }, [running, target]);
  return count;
}

/* ─── SVG Ring ──────────────────────────────────────────── */
function Ring({ value, color, running }: { value: number; color: string; running: boolean }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const [dash, setDash] = useState(circ);

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => {
      setDash(circ * (1 - value / 100));
    }, 300);
    return () => clearTimeout(id);
  }, [running, value, circ]);

  return (
    <div className="relative flex items-center justify-center" style={{ width: 132, height: 132 }}>
      <svg width="132" height="132" style={{ transform: "rotate(-90deg)", position: "absolute" }}>
        {/* Track */}
        <circle cx="66" cy="66" r={r} fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="8" />
        {/* Progress */}
        <circle
          cx="66" cy="66" r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={dash}
          style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(.22,1,.36,1)", filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      {/* Glow dot at tip */}
      <div className="absolute w-2.5 h-2.5 rounded-full" style={{ background: color, boxShadow: `0 0 10px 3px ${color}`, top: 4, left: "50%", marginLeft: -5 }} />
    </div>
  );
}

/* ─── Sparkline ─────────────────────────────────────────── */
function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-[3px] h-8">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${(v / max) * 100}%` }}
          transition={{ delay: 0.6 + i * 0.06, duration: 0.5, ease: "easeOut" }}
          className="flex-1 rounded-sm opacity-70"
          style={{ background: color }}
        />
      ))}
    </div>
  );
}

/* ─── Individual card ───────────────────────────────────── */
function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCounter(stat.value, inView);

  const baseClasses =
    "relative group overflow-hidden rounded-2xl border bg-white/[0.03] backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.06]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className={`${baseClasses} ${stat.size === "wide" ? "lg:col-span-2" : ""} ${stat.size === "featured" ? "lg:row-span-2" : ""}`}
      style={{ borderColor: stat.border }}
    >
      {/* Glow bg */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 70% at 50% 0%, ${stat.glow} 0%, transparent 70%)` }}
      />

      {/* Animated border shimmer */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent 40%, ${stat.color}18 50%, transparent 60%)`,
          backgroundSize: "200% 200%",
          animation: `shimmerBorder ${4 + index}s linear infinite`,
        }}
      />

      {/* Content */}
      {stat.size === "ring" ? (
        /* ── RING CARD ── */
        <div className="flex flex-col items-center justify-center h-full gap-4 py-2">
          <Ring value={stat.value} color={stat.color} running={inView} />
          <div className="text-center">
            <div className="text-4xl font-bold tabular-nums" style={{ color: stat.color, textShadow: `0 0 20px ${stat.glow}` }}>
              {count}{stat.suffix}
            </div>
            <div className="text-white text-sm font-semibold mt-1">{stat.label}</div>
            <div className="text-white/35 text-xs mt-0.5">{stat.sub}</div>
          </div>
        </div>
      ) : stat.size === "featured" ? (
        /* ── FEATURED CARD ── */
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: stat.color }}>
              Depuis {new Date().getFullYear() - stat.value} ans
            </div>
            <div
              className="text-[80px] font-black leading-none tabular-nums"
              style={{ color: stat.color, textShadow: `0 0 40px ${stat.glow}` }}
            >
              {count}{stat.suffix}
            </div>
            <div className="text-white text-base font-semibold mt-3">{stat.label}</div>
            <div className="text-white/40 text-sm mt-1">{stat.sub}</div>
          </div>
          {stat.sparkline && (
            <div className="mt-6">
              <div className="text-xs text-white/25 mb-2 font-medium">Croissance du portefeuille clients</div>
              <Sparkline data={stat.sparkline} color={stat.color} />
            </div>
          )}
          {/* Big glow orb */}
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${stat.glow} 0%, transparent 70%)`, filter: "blur(30px)" }}
          />
        </div>
      ) : stat.size === "wide" ? (
        /* ── WIDE CARD ── */
        <div className="flex items-center gap-8 h-full">
          <div>
            <div
              className="text-6xl font-black tabular-nums leading-none"
              style={{ color: stat.color, textShadow: `0 0 30px ${stat.glow}` }}
            >
              {count}{stat.suffix}
            </div>
            <div className="text-white text-sm font-semibold mt-2">{stat.label}</div>
            <div className="text-white/35 text-xs mt-0.5">{stat.sub}</div>
          </div>
          {/* Progress bar */}
          <div className="flex-1">
            <div className="flex justify-between text-xs text-white/30 mb-1.5">
              <span>Certifications</span><span>Séniorité</span><span>Support</span>
            </div>
            {[
              { label: "Certifiés Microsoft", pct: 95 },
              { label: "Certifiés Sage", pct: 88 },
              { label: "Ancienneté > 5 ans", pct: 72 },
            ].map((bar) => (
              <div key={bar.label} className="mb-2">
                <div className="flex justify-between text-[10px] text-white/40 mb-1">
                  <span>{bar.label}</span><span>{bar.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: stat.color, boxShadow: `0 0 8px ${stat.color}` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ── NORMAL CARD ── */
        <div className="flex flex-col justify-between h-full">
          <div>
            <div
              className="text-5xl font-black tabular-nums leading-none"
              style={{ color: stat.color, textShadow: `0 0 24px ${stat.glow}` }}
            >
              {count}{stat.suffix}
            </div>
            {/* Glow line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "48px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="mt-3 h-[2px] rounded-full"
              style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)`, boxShadow: `0 0 8px ${stat.color}` }}
            />
          </div>
          <div className="mt-4">
            <div className="text-white text-sm font-semibold">{stat.label}</div>
            <div className="text-white/35 text-xs mt-0.5">{stat.sub}</div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────── */
export default function KeyStats() {
  return (
    <section className="relative py-24 overflow-hidden" id="chiffres"
      style={{ background: "linear-gradient(160deg,#060E1E 0%,#0A1628 50%,#060E1E 100%)" }}
    >
      {/* Animated bg mesh */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,.03) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(3,105,161,.12) 0%,transparent 65%)", filter: "blur(40px)" }}
      />

      <style>{`
        @keyframes shimmerBorder {
          0%   { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Notre impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Des chiffres qui parlent d'eux-mêmes
          </h2>
          <p className="mt-4 text-base text-white/45 max-w-xl mx-auto leading-relaxed">
            Trois décennies d'excellence au service de la transformation digitale
            des entreprises marocaines.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px] lg:auto-rows-[200px]">
          {stats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
