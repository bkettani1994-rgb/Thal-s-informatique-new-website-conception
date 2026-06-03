"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, FolderOpen, HeartHandshake, Star } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  sub: string;
  color: string;
  iconBg: string;
}

const stats: Stat[] = [
  {
    icon: Award,
    value: 30,
    suffix: "+",
    label: "Années d'expérience",
    sub: "Depuis 1994",
    color: "text-amber-600",
    iconBg: "bg-amber-50",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Clients accompagnés",
    sub: "Entreprises marocaines",
    color: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    icon: FolderOpen,
    value: 1200,
    suffix: "+",
    label: "Projets réalisés",
    sub: "Implémentations réussies",
    color: "text-violet-600",
    iconBg: "bg-violet-50",
  },
  {
    icon: HeartHandshake,
    value: 80,
    suffix: "+",
    label: "Consultants experts",
    sub: "Équipes certifiées",
    color: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    icon: Star,
    value: 97,
    suffix: "%",
    label: "Taux de satisfaction",
    sub: "Clients recommandent",
    color: "text-orange-500",
    iconBg: "bg-orange-50",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("fr-MA")}
      {suffix}
    </span>
  );
}

export default function KeyStats() {
  return (
    <section className="py-24 bg-primary" id="chiffres">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Notre impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Des chiffres qui parlent d'eux-mêmes
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            Trois décennies d'excellence au service de la transformation digitale
            des entreprises marocaines.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300 p-6 lg:p-8 text-center cursor-default group"
            >
              <div
                className={`${stat.iconBg} w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <stat.icon size={20} className={stat.color} />
              </div>
              <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white text-sm font-semibold leading-tight mb-1">
                {stat.label}
              </div>
              <div className="text-white/30 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
