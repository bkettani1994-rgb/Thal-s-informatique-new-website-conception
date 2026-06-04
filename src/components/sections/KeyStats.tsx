"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 30,   suffix: "+", label: "Années d'expérience", color: "#F59E0B" },
  { value: 500,  suffix: "+", label: "Clients accompagnés",  color: "#38BDF8" },
  { value: 1200, suffix: "+", label: "Projets réalisés",     color: "#A78BFA" },
  { value: 80,   suffix: "+", label: "Consultants experts",  color: "#34D399" },
  { value: 97,   suffix: "%", label: "Taux de satisfaction", color: "#FB923C" },
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
    <span className="tabular-nums" style={{ color }}>
      {count.toLocaleString("fr-MA")}{suffix}
    </span>
  );
}

export default function KeyStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-primary" id="chiffres">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/6 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-1.5 bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300 py-10 px-4 text-center cursor-default"
            >
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
