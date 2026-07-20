"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ArrowRight, ChevronRight, Sparkles, RefreshCw, Smartphone, ShieldCheck, X, ZoomIn } from "lucide-react";

const topHighlights = [
  { title: "Simple à utiliser", desc: "Permettez aux collaborateurs de consulter leurs informations et d'effectuer leurs demandes depuis une interface claire.", icon: Sparkles },
  { title: "Connecté à la paie", desc: "Facilitez la transmission des congés, absences et données RH vers Sage 100 Paie & RH selon le paramétrage retenu.", icon: RefreshCw },
  { title: "Accessible en mobilité", desc: "Donnez accès aux principales fonctions depuis un ordinateur, une tablette ou un smartphone.", icon: Smartphone },
  { title: "Accès sécurisé", desc: "Gérez les droits d'accès selon le rôle de chaque collaborateur, manager ou membre de l'équipe RH.", icon: ShieldCheck },
];

const featureBlocks = [
  {
    title: "Une gestion des congés adaptée à votre organisation",
    paragraphs: [
      "Simplifiez et automatisez le suivi des congés et absences de vos collaborateurs, de la demande jusqu'à son intégration dans la paie pour l'édition des bulletins de salaire.",
    ],
    note: "Disponible avec Sage 100 Paie & RH",
    imagePos: "right",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782395333/1-see-appli-bureau-3-thal%C3%A8s_informatique_gbgvud.png",
    imageAlt: "Interface Sage Espace Employés pour la gestion des congés depuis l'application bureau",
  },
  {
    title: "Une vraie souplesse d'utilisation",
    paragraphs: [
      "Le circuit de validation se paramètre selon votre organisation : vos responsables d'équipe valident les demandes d'absence depuis le bureau ou en déplacement.",
      "Vous configurez les types de congés, les compteurs de récupération et les soldes en temps réel. Les contrôleurs de paie sont automatiquement informés à chaque demande déposée par vos salariés.",
    ],
    imagePos: "left",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782395333/2-see-appli-bureau-1-thal%C3%A8s_informatique_pzpaec.png",
    imageAlt: "Interface Sage Espace Employés affichant le paramétrage du circuit de validation des absences",
  },
  {
    title: "Le planning des congés en temps réel et partagé",
    paragraphs: [
      "Évitez les échanges de mails et les plannings tenus à la main : visualisez en un coup d'œil l'état des congés de toute l'équipe et anticipez les périodes de forte absence.",
      "Vous gérez ainsi le planning de présence de vos salariés de façon automatisée, et tout le processus de gestion des congés et absences en devient plus simple et centralisé.",
    ],
    imagePos: "right",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782395333/3-see-appli-bureau-2-thal%C3%A8s-informatique_uslkrl.png",
    imageAlt: "Planning des congés et absences partagé en temps réel dans Sage Espace Employés",
  },
  {
    title: "Des données RH mieux préparées pour la paie",
    paragraphs: [
      "Les congés, absences et éléments variables validés peuvent être transmis au processus de paie afin de limiter les ressaisies et de mieux préparer les traitements de fin de mois.",
      "L'intégration avec Sage 100 Paie & RH permet de centraliser les informations nécessaires selon le périmètre et le paramétrage de votre solution.",
    ],
    imagePos: "left",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782395333/4-sage-dematerialisation-rh-projet-distribution-thal%C3%A8s-informatique_hzzxam.jpg",
    imageAlt: "Dématérialisation des processus RH et de paie avec Sage Espace Employés",
  },
  {
    title: "Les dossiers de vos collaborateurs sont centralisés et toujours à jour",
    paragraphs: [
      "Choisissez les données administratives à gérer selon vos besoins RH : règles de partage et de modification des informations, circuit de validation des mises à jour, rappels programmés sur les échéances importantes.",
      "L'accès aux données est sécurisé et contrôlé selon le profil de chaque utilisateur. La saisie des informations variables de paie (primes, heures supplémentaires...) est elle aussi prise en compte automatiquement dans le bulletin.",
    ],
    note: "Disponible avec Sage 100 Paie & RH",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782395333/5-2-see-dossier-salarie-thal%C3%A8s-informatique_trr6c3.png",
    imageAlt: "Dossier salarié centralisé et données administratives RH dans Sage Espace Employés",
    imagePos: "right",
  },
  {
    title: "Pilotez les entretiens et les objectifs de vos collaborateurs",
    paragraphs: [
      "Créez vos propres formulaires d'entretien ou d'enquête, planifiez vos entretiens obligatoires et valorisez la performance de vos équipes.",
      "Les échanges sont formalisés et conservés : le pilotage des compétences et des objectifs s'en trouve automatisé et simplifié.",
    ],
    note: "Disponible avec Sage 100 Paie & RH",
    imagePos: "left",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782395334/6-sage-espace-employes-suivi-des-objectifs-thal%C3%A8s-informatique_p4lntb.png",
    imageAlt: "Suivi des entretiens et des objectifs des collaborateurs dans Sage Espace Employés",
  },
  {
    title: "Simplifiez la gestion des notes de frais avec une application dédiée",
    paragraphs: [
      "Oubliez les reçus perdus et les notes de frais rejetées : vos collaborateurs scannent leurs justificatifs en quelques secondes et les informations sont extraites automatiquement pour être soumises à validation.",
      "Le paramétrage des règles de contrôle et de remboursement garantit l'application de votre politique de dépenses, tandis que la comptabilisation automatisée des notes de frais maîtrise vos délais de remboursement.",
    ],
    imagePos: "right",
    image: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1782395844/7-3-see-Notes-de-frais-thal%C3%A8s-informatique_knqvtf.png",
    imageAlt: "Application Sage Espace Employés pour scanner et soumettre ses notes de frais",
  },
];

const dailyTime = [
  {
    title: "Automatisez la saisie et la gestion des congés et absences",
    items: [
      "Un planning de congés et absences individuel et partagé",
      "Un calcul et un suivi automatisés des soldes",
      "Une validation par les responsables d'équipe via un circuit d'approbation à plusieurs niveaux",
      "Une intégration directe des données vers votre paie",
    ],
  },
  {
    title: "Faites valider les demandes par vos managers",
    items: [
      "Vos managers valident les demandes et vous en êtes automatiquement informé. Tous les échanges sont horodatés et archivés.",
    ],
  },
  {
    title: "Suivez les soldes de congés et d'absences",
    items: [
      "Gérez différents types d'absences et mettez à disposition des collaborateurs les soldes calculés selon les règles définies dans votre organisation.",
    ],
  },
];

export default function SageEspaceEmployesClient() {
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const dailyTimeRef = useRef(null);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });
  const dailyTimeInView = useInView(dailyTimeRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!lightboxImg) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxImg]);

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-white" aria-current="page">Sage Espace Employés</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-xs font-bold text-accent tracking-widest bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                PORTAIL RH AU MAROC
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Sage Espace Employés Maroc : portail RH self-service
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Digitalisez les échanges entre vos équipes RH, vos managers et vos collaborateurs avec Sage Espace Employés. Centralisez les congés, absences, dossiers salariés, notes de frais et demandes administratives dans un portail accessible en ligne.
              </p>
              <Link
                href="/contact"
                aria-label="Demander une démonstration de Sage Espace Employés"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Demander une démo Sage Espace Employés <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Visual collage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782396164/man-wheelchair-having-office-job_zta3ni.jpg"
                  alt="Collaborateur en situation de handicap travaillant au bureau avec Sage Espace Employés"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden bg-white">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782396271/1-see-Conges-et-absences3-thal%C3%A8s-informatique_tr3xju.png"
                  alt="Interface Sage Espace Employés affichant la gestion des congés et absences"
                  className="w-full h-full object-contain p-3"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-1 h-48 sm:h-64 rounded-2xl border border-white/15 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dmutnjgp8/image/upload/v1782396164/medium-shot-people-working-with-computers_ej7zsc.jpg"
                  alt="Équipe de collaborateurs travaillant sur ordinateur avec Sage Espace Employés"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section ref={introRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <span className="text-xs font-bold text-cta tracking-widest uppercase">PORTAIL COLLABORATEUR</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                Simplifiez les démarches RH de vos collaborateurs
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                Sage Espace Employés permet aux collaborateurs et aux managers d&apos;effectuer leurs principales démarches RH depuis une interface centralisée. Les équipes RH disposent ainsi d&apos;informations mieux structurées et de circuits de validation plus simples à suivre.
              </p>
              <p className="text-secondary leading-relaxed mb-4">
                Thalès Informatique accompagne les entreprises marocaines dans l&apos;analyse des besoins, le paramétrage, la formation et le déploiement de la solution.
              </p>
              <p className="text-secondary leading-relaxed">
                Sage Espace Employés complète <Link href="/solutions/sage-100-paie-rh" className="text-cta font-semibold hover:underline">Sage 100 Paie &amp; RH</Link> en facilitant les échanges entre les collaborateurs, les managers et le service RH. Vous pouvez aussi <Link href="/solutions/factorial" className="text-cta font-semibold hover:underline">découvrir également Factorial</Link>.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topHighlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={introInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-center"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cta/10 text-cta mb-4">
                    <item.icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-primary">Les principales fonctionnalités de Sage Espace Employés</h2>
            </motion.div>
            <div className="space-y-16">
              {featureBlocks.map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className={block.imagePos === "left" ? "md:order-2" : ""}>
                    <h3 className="text-2xl font-bold text-primary mb-4">{block.title}</h3>
                    {block.paragraphs.map((p) => (
                      <p key={p} className="text-secondary leading-relaxed mb-4">
                        {p}
                      </p>
                    ))}
                    {block.note && (
                      <p className="text-xs font-bold text-cta uppercase tracking-widest">{block.note}</p>
                    )}
                  </div>
                  {block.image ? (
                    <button
                      type="button"
                      onClick={() => setLightboxImg({ src: block.image!, alt: block.imageAlt! })}
                      className={`relative group h-56 sm:h-72 rounded-2xl border border-border bg-white overflow-hidden cursor-zoom-in ${block.imagePos === "left" ? "md:order-1" : ""}`}
                      aria-label={`Agrandir : ${block.imageAlt}`}
                    >
                      <img
                        src={block.image}
                        alt={block.imageAlt}
                        className="w-full h-full object-contain p-3"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white rounded-full p-2 shadow-lg">
                          <ZoomIn size={18} className="text-primary" aria-hidden="true" />
                        </span>
                      </div>
                    </button>
                  ) : (
                    <div className={`h-56 sm:h-72 rounded-2xl border border-border bg-white flex items-center justify-center text-secondary/50 text-sm ${block.imagePos === "left" ? "md:order-1" : ""}`}>
                      Visuel à intégrer
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label="Aperçu agrandi de l'interface Sage Espace Employés"
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
              onClick={() => setLightboxImg(null)}
            >
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X size={28} aria-hidden="true" />
              </button>
              <motion.img
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                className="max-w-4xl w-full max-h-[85vh] object-contain rounded-xl mx-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Daily time saved */}
        <section ref={dailyTimeRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={dailyTimeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-primary">
                Centralisez les demandes RH du quotidien
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {dailyTime.map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={dailyTimeInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-bg rounded-2xl p-7 border border-border"
                >
                  <h3 className="font-bold text-primary mb-4">{block.title}</h3>
                  <ul className="space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-secondary leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cta shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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
                Digitalisez vos démarches RH avec Sage Espace Employés
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Thalès Informatique vous accompagne dans l&apos;étude, le paramétrage, la formation et le déploiement de Sage Espace Employés au Maroc.
              </p>
              <Link
                href="/contact"
                aria-label="Parler à un expert au sujet de Sage Espace Employés"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Parler à un expert portail RH <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
