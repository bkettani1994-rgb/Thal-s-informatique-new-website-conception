"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, BadgeCheck, Building2, Headset, Heart } from "lucide-react";

const stats = [
  { value: 30,  suffix: "+", label: "Ans d'expertise",             color: "#F59E0B", icon: Award },
  { value: 35,  suffix: "+", label: "Collaborateurs",               color: "#38BDF8", icon: Users },
  { value: 20,  suffix: "+", label: "Consultants certifiés",        color: "#A78BFA", icon: BadgeCheck },
  { value: 500, suffix: "+", label: "Clients actifs",               color: "#34D399", icon: Building2 },
  { value: 100, suffix: "%", label: "Service dédié au support",     color: "#FB923C", icon: Headset },
  { value: 92,  suffix: "%", label: "Taux de fidélisation clients", color: "#F472B6", icon: Heart },
];

function Counter({ target, suffix, color, running }: { target: number; suffix: string; color: string; running: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!running) return;
    let frame = 0;
    const total = 80;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const id = setTimeout(() => {
      const tick = () => {
        frame++;
        setCount(Math.round(ease(Math.min(frame / total, 1)) * target));
        if (frame < total) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, 200);
    return () => clearTimeout(id);
  }, [running, target]);

  return (
    <span className="tabular-nums text-white">
      {count.toLocaleString("fr-MA")}{suffix}
    </span>
  );
}

export default function KeyStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-cta" id="chiffres">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Chiffres clés
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Un partenaire de <span className="text-accent">confiance</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/6 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-1.5 bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300 py-10 px-4 text-center cursor-default"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                style={{ backgroundColor: `${s.color}22` }}
              >
                <s.icon size={20} style={{ color: s.color }} />
              </motion.div>
              <div className="text-4xl sm:text-5xl font-black leading-none tracking-tight">
                <Counter target={s.value} suffix={s.suffix} color={s.color} running={inView} />
              </div>
              <div className="text-xs text-white/45 font-medium leading-tight">{s.label}</div>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: 28 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="h-[2px] rounded-full mt-1"
                style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
