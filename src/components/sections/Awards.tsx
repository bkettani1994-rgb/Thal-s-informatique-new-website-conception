"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, BadgeCheck } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    year: "2024",
    title: "Meilleure Dynamique Commerciale Maroc",
    color: "from-rose-500 to-orange-400",
    above: true,
  },
  {
    icon: Trophy,
    year: "2022",
    title: "Top League — Zone Export",
    color: "from-amber-400 to-yellow-300",
    above: false,
  },
  {
    icon: Medal,
    year: "2019",
    title: "Meilleure Croissance Sage",
    color: "from-slate-500 to-slate-400",
    above: true,
  },
  {
    icon: Award,
    year: "2019",
    title: "Customer Migration Journey",
    color: "from-cyan-500 to-blue-400",
    above: false,
  },
  {
    icon: Star,
    year: "2018",
    title: "Meilleure Performance Sage",
    color: "from-violet-500 to-purple-400",
    above: true,
  },
  {
    icon: BadgeCheck,
    year: "2017",
    title: "Premier Partenaire North Africa",
    color: "from-emerald-500 to-teal-400",
    above: false,
  },
];

const LABEL_H = 80;
const ICON_H = 56;
const YEAR_H = 28;

export default function Awards() {
  return (
    <section className="py-24 bg-[#f5f3ef]" id="trophees">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-cta uppercase tracking-widest mb-3">
            Reconnaissance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Nos trophées &amp; distinctions
          </h2>
          <p className="mt-4 text-base text-secondary max-w-xl mx-auto leading-relaxed">
            Trois décennies d&apos;engagement récompensées par les plus hautes distinctions du secteur.
          </p>
        </motion.div>

        {/* Timeline — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[680px]">
            {/* Total height: top label + icon + year + bottom label */}
            <div
              className="relative flex items-center"
              style={{ height: LABEL_H + ICON_H + YEAR_H + LABEL_H }}
            >
              {/* Horizontal line — sits at center of icon row */}
              <div
                className="absolute left-0 right-0 h-px bg-slate-300"
                style={{ top: LABEL_H + ICON_H / 2 }}
              />

              {/* Items */}
              {awards.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex-1 flex flex-col items-center"
                  style={{ height: LABEL_H + ICON_H + YEAR_H + LABEL_H }}
                >
                  {/* Label above */}
                  <div
                    className="flex items-end justify-center px-2 text-center"
                    style={{ height: LABEL_H }}
                  >
                    {award.above && (
                      <p className="text-xs font-semibold text-primary leading-tight max-w-[120px] mb-2">
                        {award.title}
                      </p>
                    )}
                  </div>

                  {/* Icon badge */}
                  <div
                    className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center shadow-md`}
                    style={{ flexShrink: 0 }}
                  >
                    <award.icon size={24} className="text-white" />
                  </div>

                  {/* Year */}
                  <div
                    className="flex items-center justify-center"
                    style={{ height: YEAR_H }}
                  >
                    <span className="text-sm font-semibold tracking-widest text-slate-400">
                      {award.year}
                    </span>
                  </div>

                  {/* Label below */}
                  <div
                    className="flex items-start justify-center px-2 text-center"
                    style={{ height: LABEL_H }}
                  >
                    {!award.above && (
                      <p className="text-xs font-semibold text-primary leading-tight max-w-[120px] mt-2">
                        {award.title}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
