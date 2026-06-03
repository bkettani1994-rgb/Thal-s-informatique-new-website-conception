"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-bg-base" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary rounded-3xl overflow-hidden px-8 sm:px-14 py-14 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cta/20 rounded-full blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative">
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-4">
              Commencez votre transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
              Prêt à franchir le cap de la transformation digitale ?
            </h2>
            <p className="text-base text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
              Nos experts sont disponibles pour analyser vos besoins et vous
              proposer la solution la mieux adaptée à votre secteur et vos
              objectifs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+212522000000"
                className="group inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-cta/30 cursor-pointer"
              >
                <Calendar size={17} />
                Demander une démonstration
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="tel:+212522000000"
                className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 cursor-pointer"
              >
                <Phone size={17} />
                +212 5 22 00 00 00
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
