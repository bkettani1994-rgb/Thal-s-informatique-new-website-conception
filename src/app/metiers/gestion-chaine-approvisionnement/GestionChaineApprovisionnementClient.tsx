"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { title: "Achats & fournisseurs", desc: "Pilotage des appels d'offres, commandes fournisseurs et évaluation des performances achats." },
  { title: "Gestion des stocks", desc: "Suivi multi-sites et multi-dépôts en temps réel, avec gestion des seuils et réapprovisionnements automatiques." },
  { title: "Entrepôts & logistique", desc: "Optimisation des flux d'entrepôt : réception, préparation de commandes et expéditions." },
  { title: "Prévision de la demande", desc: "Anticipation des besoins grâce à des modèles de prévision basés sur l'historique et la saisonnalité." },
  { title: "Traçabilité des lots", desc: "Suivi de bout en bout des lots et numéros de série, de la réception à la livraison client." },
  { title: "EDI & échanges fournisseurs", desc: "Intégration EDI pour automatiser les échanges de commandes et de factures avec vos partenaires." },
];

const industries = ["Négoce & Distribution", "Industrie manufacturière", "Agroalimentaire", "Logistique & Transport"];

export default function GestionChaineApprovisionnementClient() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/metiers" className="hover:text-white transition-colors">Métiers</Link>
                <span>/</span>
                <span className="text-accent">Gestion de la Chaîne d&apos;Approvisionnement</span>
              </nav>
              <span className="text-xs font-bold text-accent tracking-widest">OPÉRATIONS & ERP</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3">Gestion de la Chaîne d&apos;Approvisionnement</h1>
              <p className="text-white/70 text-lg mt-4 max-w-2xl">
                Achats, stocks, entrepôts et logistique pilotés de bout en bout pour les entreprises au Maroc, en Afrique et à l&apos;international.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Demander une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="max-w-3xl" {...fadeUp}>
              <h2 className="text-2xl font-bold text-primary">Une supply chain pilotée en temps réel</h2>
              <p className="text-secondary mt-4 leading-relaxed">
                Thalès Informatique propose un module de gestion de la chaîne d&apos;approvisionnement complet : achats, stocks multi-sites, entrepôts et prévision de la demande. Notre solution s&apos;adapte aux entreprises de toutes tailles présentes au Maroc, en Afrique et à l&apos;international.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-10" {...fadeUp}>Fonctionnalités clés</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-6 border border-border rounded-xl hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="font-semibold text-primary">{f.title}</h3>
                  <p className="text-sm text-secondary mt-2">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl font-bold text-primary mb-8" {...fadeUp}>Secteurs couverts</motion.h2>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind, i) => (
                <motion.span
                  key={ind}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="px-5 py-2.5 bg-white border border-border rounded-full text-sm font-semibold text-primary"
                >
                  {ind}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-white">Fiabilisez votre chaîne d&apos;approvisionnement</h2>
              <p className="text-white/70 mt-4">Réduisez vos ruptures de stock et optimisez vos coûts logistiques grâce à notre module supply chain.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-cta text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Planifier une démo <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
