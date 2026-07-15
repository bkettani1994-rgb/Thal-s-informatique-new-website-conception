"use client";

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const trustedBadges = [
  "Microsoft Partner",
  "Sage Business Partner Platinum",
  "Certified",
  "30+ ans d'expérience",
];

const floatingStats = [
  { value: "+34%",  label: "Productivité",  pos: "top-[28%] left-[4%]",  delay: 0.8  },
  { value: "500+",  label: "Entreprises",   pos: "top-[28%] right-[4%]", delay: 1.0  },
  { value: "99.9%", label: "Disponibilité", pos: "bottom-[26%] left-[4%]",  delay: 1.2  },
  { value: "30 ans",label: "D'expérience",  pos: "bottom-[26%] right-[4%]", delay: 1.4  },
];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const NODE_POSITIONS = [
  [8,25],[15,60],[25,15],[35,72],[48,18],[55,65],
  [65,30],[72,78],[80,22],[88,55],[92,38],[20,88],[60,88],[78,10],
];

export default function Hero() {
  const cubesRef  = useRef<HTMLDivElement>(null);
  const nodesRef  = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating cubes
    const cc = cubesRef.current;
    if (cc) {
      for (let i = 0; i < 12; i++) {
        const el = document.createElement("div");
        const size = Math.random() * 24 + 10;
        el.style.cssText = `
          position:absolute;
          width:${size}px;height:${size}px;
          left:${Math.random()*95}%;
          bottom:${Math.random()*20}%;
          border:1px solid rgba(56,189,248,.18);
          border-radius:4px;
          background:rgba(56,189,248,.03);
          animation:cubeFloat ${14+Math.random()*18}s linear ${Math.random()*12}s infinite;
        `;
        cc.appendChild(el);
      }
    }

    // Node dots
    const nc = nodesRef.current;
    if (nc) {
      NODE_POSITIONS.forEach(([l, t], i) => {
        const el = document.createElement("div");
        el.style.cssText = `
          position:absolute;
          left:${l}%;top:${t}%;
          width:4px;height:4px;border-radius:50%;
          background:rgba(56,189,248,.55);
          animation:nodePulse 3s ${i*0.4}s ease-in-out infinite;
        `;
        nc.appendChild(el);
      });
    }

    // Particles
    const pc = particlesRef.current;
    if (pc) {
      const colors = ["rgba(56,189,248,.7)","rgba(3,105,161,.6)","rgba(255,255,255,.4)","rgba(14,165,233,.6)"];
      for (let i = 0; i < 32; i++) {
        const el = document.createElement("div");
        const size = Math.random() * 3.5 + 1.5;
        el.style.cssText = `
          position:absolute;border-radius:50%;opacity:0;
          width:${size}px;height:${size}px;
          left:${Math.random()*100}%;
          bottom:${Math.random()*15}%;
          background:${colors[Math.floor(Math.random()*colors.length)]};
          animation:floatParticle ${9+Math.random()*16}s linear ${Math.random()*10}s infinite;
        `;
        pc.appendChild(el);
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ background: "#060E1E" }}>

      {/* ── CSS 3D animated background ── */}
      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(ellipse 110% 70% at 20% 20%, rgba(3,105,161,.22) 0%, transparent 55%),
          radial-gradient(ellipse 80% 60% at 80% 80%, rgba(14,165,233,.14) 0%, transparent 55%),
          radial-gradient(ellipse 60% 80% at 50% 50%, rgba(2,132,199,.10) 0%, transparent 60%),
          linear-gradient(160deg, #060E1E 0%, #0A1628 40%, #0D1F38 70%, #060E1E 100%)
        `,
      }} />

      {/* Perspective grid floor */}
      <div className="absolute bottom-0 left-0 right-0 z-[1]" style={{
        height: "55%",
        backgroundImage: `linear-gradient(rgba(56,189,248,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.07) 1px,transparent 1px)`,
        backgroundSize: "80px 80px",
        transform: "perspective(500px) rotateX(60deg)",
        transformOrigin: "bottom center",
        maskImage: "linear-gradient(to top, rgba(0,0,0,.4) 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,.4) 0%, transparent 100%)",
      }} />

      {/* Top flat grid */}
      <div className="absolute inset-0 z-[1]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.026) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.026) 1px,transparent 1px)`,
        backgroundSize: "64px 64px",
      }} />

      {/* Center glow */}
      <div className="absolute z-[2] pointer-events-none" style={{
        top: "40%", left: "50%", transform: "translate(-50%,-50%)",
        width: "700px", height: "500px",
        background: "radial-gradient(ellipse, rgba(3,105,161,.28) 0%, transparent 65%)",
        filter: "blur(20px)",
      }} />

      {/* Accent orbs */}
      <div className="absolute z-[2] pointer-events-none rounded-full" style={{ width:320, height:320, top:-60, left:-40, background:"rgba(56,189,248,.09)", filter:"blur(60px)" }} />
      <div className="absolute z-[2] pointer-events-none rounded-full" style={{ width:260, height:260, bottom:-50, right:-30, background:"rgba(3,105,161,.13)", filter:"blur(60px)" }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[4]" style={{ background: "linear-gradient(to top, #060E1E, transparent)" }} />

      {/* Dynamic elements (cubes / nodes / particles) */}
      <div ref={cubesRef}    className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" />
      <div ref={nodesRef}    className="absolute inset-0 z-[2] pointer-events-none" />
      <div ref={particlesRef} className="absolute inset-0 z-[3] pointer-events-none overflow-hidden" />

      {/* ── Floating stat cards (desktop) ── */}
      {floatingStats.map((s) => (
        <motion.div
          key={s.value}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: s.delay, duration: 0.5, ease: "backOut" }}
          className={`absolute hidden lg:block bg-white/8 backdrop-blur-md border border-white/18 rounded-2xl px-4 py-3 ${s.pos}`}
          style={{ zIndex: 9 }}
        >
          <div className="text-xl font-bold text-white leading-none">{s.value}</div>
          <div className="text-[10px] text-white/50 mt-0.5 font-medium">{s.label}</div>
        </motion.div>
      ))}

      {/* ── Centered content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-28">

        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/18 rounded-full px-4 py-1.5 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-white/78 text-xs font-medium tracking-wide">
            Partenaire de confiance depuis 1996
          </span>
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight"
        >
          Accélérez votre<br className="hidden sm:block" />
          {" "}<span className="gradient-text">transformation digitale</span>{" "}
          avec un partenaire de confiance
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-7 text-base sm:text-lg text-white/52 leading-relaxed max-w-2xl mx-auto"
        >
          Depuis plus de 30 ans, Thalès Informatique accompagne les entreprises au Maroc dans leur transformation digitale grâce à des solutions ERP, Finance, RH, GMAO et à un accompagnement métier adapté à chaque secteur d&apos;activité.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-7 flex flex-wrap justify-center gap-2"
        >
          {trustedBadges.map((badge) => (
            <span key={badge}
              className="inline-flex items-center gap-1.5 bg-white/6 border border-white/12 text-white/62 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              <CheckCircle2 size={11} className="text-accent" />
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a href="#contact"
            className="group inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-cta/35 cursor-pointer text-sm sm:text-base"
          >
            Demander une démonstration
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a href="#contact"
            className="group inline-flex items-center gap-2 bg-white/8 hover:bg-white/15 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 transition-all duration-200 cursor-pointer text-sm sm:text-base backdrop-blur-sm"
          >
            <Play size={15} className="fill-white" />
            Parler à un expert
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-white/28 text-[10px] font-semibold tracking-widest uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0,7,0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/28 to-transparent"
        />
      </motion.div>
    </section>
  );
}
