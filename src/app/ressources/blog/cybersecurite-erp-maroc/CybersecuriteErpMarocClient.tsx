"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function CybersecuriteErpMarocClient() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={14} />
            <Link href="/ressources" className="hover:text-white transition-colors">Ressources</Link>
            <ChevronRight size={14} />
            <Link href="/ressources/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-accent">Article</span>
          </div>
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1 mb-4">
            Technologie
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Cybersécurité : comment protéger votre ERP et vos données face à la montée des cybermenaces
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><User size={14} /> Équipe Thalès Informatique</span>
            <span className="flex items-center gap-1"><Tag size={14} /> Juin 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 6 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10 text-secondary"
          >
            {/* Intro */}
            <div>
              <p className="text-lg leading-relaxed text-primary font-medium mb-4">
                Les cyberattaques contre les entreprises en Afrique et à l'international — phishing, ransomwares, intrusions — ont fortement augmenté ces dernières années. Votre ERP, qui centralise vos données financières, commerciales et RH, est une cible de choix : une attaque réussie peut paralyser votre activité pendant plusieurs jours, voire détruire des années de données.
              </p>
              <p className="leading-relaxed">
                La bonne nouvelle : la majorité des incidents peuvent être évités avec des mesures simples, accessibles aux PME comme aux grandes entreprises. Voici les priorités à mettre en place dès maintenant.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                1. Sécuriser les accès avec l&apos;authentification multi-facteurs
              </h2>
              <p className="leading-relaxed">
                Un mot de passe seul ne suffit plus. L&apos;activation de l&apos;authentification à deux facteurs (2FA) sur l&apos;accès à votre ERP, votre messagerie et vos outils Cloud bloque la grande majorité des tentatives de connexion frauduleuse, même en cas de mot de passe compromis.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                2. Gérer finement les droits d&apos;accès par utilisateur
              </h2>
              <p className="leading-relaxed">
                Chaque collaborateur ne doit avoir accès qu&apos;aux modules et données nécessaires à sa fonction. Une revue régulière des droits d&apos;accès — notamment lors des départs et changements de poste — limite considérablement la surface de risque interne, première cause de fuite de données.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                3. Mettre en place des sauvegardes automatiques et testées
              </h2>
              <p className="leading-relaxed">
                Face au risque de ransomware, la sauvegarde régulière de votre base ERP — idéalement avec une copie externalisée et chiffrée — est votre meilleure assurance. Une sauvegarde ne vaut rien si elle n&apos;a jamais été testée : planifiez des exercices de restauration au moins une fois par an.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                4. Maintenir l&apos;ERP et les serveurs à jour
              </h2>
              <p className="leading-relaxed">
                Les failles de sécurité exploitées par les attaquants sont souvent connues et déjà corrigées par l&apos;éditeur. Un contrat de maintenance qui inclut l&apos;application régulière des correctifs de sécurité (Sage, système d&apos;exploitation, antivirus) ferme la porte à une grande partie des attaques automatisées.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                5. Former vos équipes à reconnaître le phishing
              </h2>
              <p className="leading-relaxed">
                La majorité des attaques réussies commencent par un email frauduleux ouvert par un collaborateur. Une sensibilisation régulière — savoir repérer un expéditeur suspect, ne jamais communiquer ses identifiants, vérifier les liens avant de cliquer — reste l&apos;une des mesures les plus rentables en cybersécurité.
              </p>
              <div className="bg-blue-50 border-l-4 border-cta rounded-r-lg p-4 mt-4">
                <p className="text-sm font-semibold text-cta mb-1">À retenir</p>
                <p className="text-sm">La cybersécurité n&apos;est pas une dépense ponctuelle mais un processus continu : accès, sauvegardes, mises à jour et sensibilisation doivent être revus régulièrement pour rester efficaces face à des menaces en constante évolution.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Faites auditer la sécurité de votre ERP</h3>
              <p className="text-white/70 mb-6">
                Nos équipes réalisent un état des lieux de la sécurité de votre système d&apos;information et vous proposent un plan d&apos;action priorisé, adapté à votre budget.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cta text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Demander un audit de sécurité →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}
