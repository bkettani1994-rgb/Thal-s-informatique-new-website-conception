"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";

const features = [
  { title: "Consultation des bulletins de paie", desc: "Chaque collaborateur accède à ses fiches de paie en ligne, à tout moment.", icon: "💰" },
  { title: "Gestion des congés & absences", desc: "Demandes, validations et soldes de congés en temps réel, sans papier.", icon: "🗓️" },
  { title: "Dossier collaborateur", desc: "Contrat, avenants, attestations et documents RH centralisés et accessibles.", icon: "🗂️" },
  { title: "Notes de frais en ligne", desc: "Saisie et suivi des remboursements directement depuis l'espace employé.", icon: "🧾" },
  { title: "Notifications RH", desc: "Alertes automatiques sur les validations, échéances et communications RH.", icon: "🔔" },
  { title: "Accès sécurisé multi-appareils", desc: "Connexion sécurisée depuis ordinateur, tablette ou smartphone.", icon: "🔒" },
];

const advantages = [
  { title: "Moins de sollicitations RH", desc: "Les collaborateurs trouvent leurs informations en autonomie, sans solliciter le service RH.", icon: "⚡" },
  { title: "Zéro papier", desc: "Bulletins, contrats et justificatifs sont dématérialisés et archivés légalement.", icon: "🌱" },
  { title: "Disponible partout", desc: "Un espace accessible à tout moment, même en dehors des locaux de l'entreprise.", icon: "📱" },
];

export default function SageEspaceEmployesClient() {
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const advantagesRef = useRef(null);
  const portalRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const advantagesInView = useInView(advantagesRef, { once: true, margin: "-80px" });
  const portalInView = useInView(portalRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} />
              <span className="text-white">Sage Espace Employés</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                PORTAIL COLLABORATEUR
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Sage Espace Employés
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Le portail RH self-service qui donne à vos collaborateurs un accès autonome à leurs informations RH, à tout moment.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander une démo <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Visual collage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {["Dossier collaborateur", "Interface Sage Espace Employés", "Gestion des congés"].map((label) => (
                <div
                  key={label}
                  className="sm:col-span-1 h-48 sm:h-64 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white/40 text-xs text-center px-3"
                >
                  {label}
                  <br />
                  (visuel à intégrer)
                </div>
              ))}
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
                <span className="text-xs font-bold text-cta tracking-widest uppercase">LA RH EN LIBRE-SERVICE</span>
                <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                  Donnez l&apos;autonomie à vos collaborateurs
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Sage Espace Employés est le portail self-service qui connecte vos collaborateurs à leurs informations RH : bulletins de paie, congés, documents administratifs. Couplé à Sage 100 Paie & RH, il simplifie le quotidien de toute l&apos;entreprise.
                </p>
                <p className="text-secondary leading-relaxed">
                  <strong className="text-primary">Thalès Informatique</strong> déploie et paramètre Sage Espace Employés pour les entreprises marocaines, avec une formation dédiée aux équipes RH et aux collaborateurs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section ref={featuresRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">FONCTIONNALITÉS</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Tout ce que vos collaborateurs attendent</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-border hover:border-cta hover:shadow-lg transition-all duration-200"
                >
                  <span className="text-3xl mb-4 block">{feat.icon}</span>
                  <h3 className="font-bold text-primary mb-2">{feat.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section ref={advantagesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">BÉNÉFICES</span>
              <h2 className="text-3xl font-bold text-primary mt-2">Pourquoi un espace employés digital ?</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-bg rounded-2xl p-8 border border-border text-center"
                >
                  <span className="text-4xl mb-4 block">{adv.icon}</span>
                  <h3 className="font-bold text-primary mb-3">{adv.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Portal Mockup */}
        <section ref={portalRef} className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={portalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">INTERFACE</span>
              <h2 className="text-3xl font-bold text-primary mt-2">L&apos;espace employés au quotidien</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={portalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary rounded-2xl p-8 lg:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-white font-bold text-xl mb-4">Un portail simple pour chaque collaborateur</h3>
                  <ul className="space-y-3">
                    {[
                      "Télécharger ses bulletins de paie",
                      "Poser une demande de congé en quelques clics",
                      "Consulter son contrat et ses documents RH",
                      "Suivre son solde de congés en temps réel",
                      "Soumettre une note de frais",
                      "Recevoir les notifications RH importantes",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="text-center text-white">
                    <div className="text-5xl mb-4">👤</div>
                    <div className="font-bold text-lg mb-1">Fatima Zahra Benani</div>
                    <div className="text-white/60 text-sm mb-6">Chargée de Clientèle</div>
                    <div className="grid grid-cols-2 gap-3 text-left">
                      {[
                        { label: "Congés restants", value: "14 jours" },
                        { label: "Ancienneté", value: "2 ans 8 mois" },
                        { label: "Dernier bulletin", value: "Mai 2026" },
                        { label: "Notes de frais", value: "1 en attente" },
                      ].map((item) => (
                        <div key={item.label} className="bg-white/10 rounded-lg p-3">
                          <div className="text-white/50 text-xs">{item.label}</div>
                          <div className="text-white font-semibold text-sm mt-0.5">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
                Offrez l&apos;autonomie RH à vos équipes
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans le déploiement de Sage Espace Employés au Maroc.
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
