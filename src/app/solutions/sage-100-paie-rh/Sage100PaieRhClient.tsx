"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, CheckCircle2, XCircle } from "lucide-react";

const modules = [
  { title: "Calcul de la paie", desc: "Bulletins générés automatiquement, conformes au droit du travail marocain", icon: "💰" },
  { title: "Déclarations CNSS & IR", desc: "Déclarations sociales et fiscales prêtes à soumettre chaque mois", icon: "📋" },
  { title: "Gestion des congés & absences", desc: "Soldes en temps réel, demandes et validations dématérialisées", icon: "🗓️" },
  { title: "Gestion administrative RH", desc: "Contrats, dossiers collaborateurs, avenants centralisés", icon: "🗂️" },
  { title: "Notes de frais", desc: "Saisie, validation et remboursement simplifiés", icon: "🧾" },
  { title: "Reporting RH", desc: "Masse salariale, effectifs, indicateurs RH en un coup d'œil", icon: "📊" },
];

const comparisonRows = [
  { criteria: "Temps de traitement de la paie", sage: "Quelques heures", excel: "Plusieurs jours" },
  { criteria: "Erreurs de calcul", sage: "Quasi nulles", excel: "Fréquentes" },
  { criteria: "Déclarations CNSS/IR", sage: "Automatisées", excel: "Manuelles" },
  { criteria: "Conformité légale", sage: "Mise à jour auto", excel: "Mise à jour manuelle" },
  { criteria: "Historique collaborateur", sage: "Centralisé", excel: "Dispersé" },
  { criteria: "Sécurité des données RH", sage: "Accès contrôlés", excel: "Faible" },
];

export default function Sage100PaieRhClient() {
  const introRef = useRef(null);
  const modulesRef = useRef(null);
  const comparisonRef = useRef(null);
  const testimonialRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const modulesInView = useInView(modulesRef, { once: true, margin: "-80px" });
  const comparisonInView = useInView(comparisonRef, { once: true, margin: "-80px" });
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white">Sage 100 Paie & RH</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                PAIE & RH
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Sage 100 Paie & RH
              </h1>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                La paie automatisée et conforme, sans complexité
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold text-cta tracking-widest uppercase">LA PAIE SANS ERREUR</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Automatisez votre paie et restez conforme
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Sage 100 Paie & RH prend en charge l&apos;ensemble du processus de paie : calcul des bulletins, gestion des congés, déclarations CNSS et IR. Une solution pensée pour la réglementation marocaine et mise à jour en continu.
                </p>
                <p className="text-secondary leading-relaxed">
                  <strong className="text-primary">Thalès Informatique</strong>, partenaire Sage Business Partner Platinum, accompagne le déploiement et la formation de vos équipes RH à Casablanca et partout au Maroc.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section ref={modulesRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={modulesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">MODULES</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Tout ce dont vos RH ont besoin</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={modulesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-cta hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-3xl mb-4 block">{mod.icon}</span>
                  <h3 className="font-bold text-primary mb-2">{mod.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{mod.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section ref={comparisonRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">COMPARAISON</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Sage 100 Paie & RH vs Excel</h2>
              <p className="text-secondary mt-3">Pourquoi automatiser votre gestion de la paie ?</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-x-auto rounded-2xl border border-border"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left font-semibold">Critère</th>
                    <th className="px-6 py-4 text-center font-semibold text-accent">Sage 100 Paie & RH</th>
                    <th className="px-6 py-4 text-center font-semibold text-white/60">Excel</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.criteria} className={i % 2 === 0 ? "bg-white" : "bg-bg"}>
                      <td className="px-6 py-4 font-medium text-primary">{row.criteria}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                          <CheckCircle2 size={14} /> {row.sage}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1 text-slate-400">
                          <XCircle size={14} /> {row.excel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section ref={testimonialRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto bg-white rounded-2xl p-10 border border-border shadow-sm text-center"
            >
              <span className="text-5xl text-cta font-serif">&ldquo;</span>
              <p className="text-secondary leading-relaxed text-lg italic mt-2 mb-6">
                Sage 100 Paie & RH nous a permis de fiabiliser entièrement notre processus de paie. Nos déclarations CNSS et IR sont désormais générées automatiquement, sans erreur de saisie.
              </p>
              <div>
                <p className="font-bold text-primary">Responsable Ressources Humaines</p>
                <p className="text-sm text-secondary mt-1">Entreprise de services, Casablanca — 80 collaborateurs</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Prêt à automatiser votre paie avec Sage 100 Paie & RH ?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Contactez nos experts Thalès Informatique pour une démonstration gratuite adaptée à votre entreprise.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander une démo <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
