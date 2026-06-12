"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Minimize2, Sparkles, Phone, Mail } from "lucide-react";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  time: string;
};

const quickReplies = [
  "Demander une démo",
  "Nos solutions ERP",
  "Support & assistance",
  "Nous contacter",
  "Nos secteurs d'activité",
  "Événements & webinaires",
];

const botResponses: { keywords: string[]; response: string }[] = [
  {
    keywords: ["bonjour", "salut", "hello", "bonsoir"],
    response: "Bonjour ! 👋 Je suis l'assistant virtuel de **Thalès Informatique**. Je suis là pour vous aider à trouver la solution ERP adaptée à votre entreprise. Comment puis-je vous aider ?",
  },
  {
    keywords: ["demo", "démonstration", "démo", "essai", "gratuit"],
    response: "Excellente initiative ! 🎯 Nous proposons des démonstrations **gratuites et personnalisées** de nos solutions Sage. Contactez notre équipe :\n\n📞 **05 22 54 87 80**\n✉️ **contact@thales.ma**\n\nOu rendez-vous sur notre page [Contact](/contact) pour planifier votre démo.",
  },
  {
    keywords: ["sage x3", "x3", "erp", "solution", "logiciel"],
    response: "Nous proposons plusieurs solutions ERP adaptées à votre taille et secteur :\n\n🔹 **Sage X3** — Pour les ETI et groupes industriels\n🔹 **Sage 100** — Idéal pour les PME\n🔹 **Sage FRP 1000** — Finance et comptabilité\n🔹 **DimoMaint GMAO** — Maintenance industrielle\n🔹 **Factorial** — RH & SIRH\n\nQuelle solution vous intéresse ?",
  },
  {
    keywords: ["prix", "tarif", "coût", "combien", "budget"],
    response: "Les tarifs de nos solutions varient selon la taille de votre entreprise et vos besoins spécifiques. 💡\n\nNous préférons vous proposer un **devis personnalisé** après avoir compris vos enjeux métiers.\n\nContactez-nous au **05 22 54 87 80** ou via [notre formulaire de contact](/contact).",
  },
  {
    keywords: ["support", "assistance", "aide", "problème", "hotline", "dépannage"],
    response: "Notre équipe support est disponible pour vous ! 🛠️\n\n📞 **Hotline : hotline@thales.ma**\n🕐 **Lun–Ven : 8h30 – 17h30**\n\nNous offrons :\n• Support téléphonique réactif\n• Assistance à distance\n• Interventions sur site\n\nConsultez notre page [Support & Maintenance](/services/support-maintenance).",
  },
  {
    keywords: ["contact", "joindre", "appeler", "email", "adresse", "bureau"],
    response: "Voici nos coordonnées 📍\n\n📞 **05 22 54 87 80**\n✉️ **contact@thales.ma**\n🏢 **310 Rue Hadj Omar Riffi, Casablanca 20120**\n\n🕐 Lun–Ven : 8h30 – 17h30\n\n[Voir sur Google Maps](https://maps.app.goo.gl/XK8BzRFH58aUSTnU6)",
  },
  {
    keywords: ["rh", "paie", "sirh", "ressources humaines", "congé", "salaire"],
    response: "Nos solutions RH couvrent tous vos besoins ! 👥\n\n🔹 **Factorial** — SIRH complet (congés, pointage, recrutement)\n🔹 **Sage 100 Paie** — Gestion de la paie conforme CNSS/AMO\n🔹 **Démat RH** — Dématérialisation des dossiers\n\nEn savoir plus : [Solutions RH](/metiers/paie-rh)",
  },
  {
    keywords: ["industrie", "production", "fabrication", "stock", "manufacturin"],
    response: "Pour le secteur industriel, nous recommandons :\n\n⚙️ **Sage X3** — ERP industrie complet (production, MRP, traçabilité)\n🔧 **DimoMaint GMAO** — Gestion de maintenance\n\nNous accompagnons des industriels dans tous les secteurs : agroalimentaire, BTP, chimie, textile.\n\n[Découvrir nos références industrie](/secteurs/industrie)",
  },
  {
    keywords: ["formation", "former", "apprendre", "utilisateur"],
    response: "Nous proposons des formations complètes ! 🎓\n\n✅ Formations sur site à Casablanca et partout au Maroc\n✅ Sessions adaptées à chaque profil utilisateur\n✅ Support post-formation inclus\n\nEn savoir plus : [Formation Utilisateurs](/services/formation-utilisateurs)",
  },
  {
    keywords: ["sage 100", "sage100", "pme", "comptabilité"],
    response: "**Sage 100** est notre solution phare pour les PME ! 📊\n\nElle couvre :\n• Comptabilité & finance\n• Gestion commerciale\n• Paie & RH\n• Trésorerie\n\nIdéale pour les entreprises de 10 à 250 collaborateurs.\n\n[En savoir plus sur Sage 100](/solutions/sage-100)",
  },
  {
    keywords: ["facturation", "facture", "electronique", "dématérialisation"],
    response: "La **facturation électronique** devient obligatoire au Maroc ! 📋\n\nThalès Informatique vous accompagne dans cette transition avec :\n• Intégration native dans Sage\n• Conformité DGI garantie\n• Archivage légal des factures\n\nLisez notre article : [Facturation Électronique au Maroc](/ressources/blog/facturation-electronique-maroc)",
  },
  {
    keywords: ["sage frp", "frp 1000", "frp1000", "consolidation", "groupe"],
    response: "**Sage FRP 1000** est notre solution de référence pour la finance et la comptabilité des groupes et grandes entreprises ! 💼\n\n• Comptabilité multi-sociétés et multi-devises\n• Consolidation et reporting financier\n• Gestion budgétaire avancée\n\n[Découvrir Sage FRP 1000](/solutions/sage-frp-1000)",
  },
  {
    keywords: ["dimomaint", "gmao", "maintenance", "panne", "équipement"],
    response: "**DimoMaint GMAO** optimise la gestion de votre maintenance industrielle ! 🔧\n\n• Suivi des interventions et équipements\n• Maintenance préventive et curative\n• Réduction des temps d'arrêt\n\n[En savoir plus sur DimoMaint GMAO](/solutions/dimomaint-gmao)",
  },
  {
    keywords: ["eloficash", "trésorerie", "tresorerie", "banque", "flux financier", "cash"],
    response: "**Eloficash** est notre solution de gestion de trésorerie nouvelle génération ! 💰\n\n• Connexion directe aux banques\n• Prévisionnel de trésorerie\n• Gestion centralisée multi-comptes\n\n[Découvrir Eloficash](/solutions/eloficash) ou notre page [Trésorerie](/metiers/tresorerie)",
  },
  {
    keywords: ["factorial", "recrutement", "pointage", "absence"],
    response: "**Factorial** est notre SIRH moderne pour piloter vos ressources humaines ! 👥\n\n• Gestion des congés et absences\n• Suivi du temps et pointage\n• Recrutement et onboarding\n\n[Découvrir Factorial](/solutions/factorial)",
  },
  {
    keywords: ["audit", "conseil", "diagnostic", "accompagnement stratégique"],
    response: "Notre offre **Audit & Conseil** vous aide à faire les bons choix technologiques ! 🔍\n\n• Diagnostic de votre système d'information\n• Recommandations stratégiques personnalisées\n• Accompagnement au changement\n\n[En savoir plus](/services/audit-conseil)",
  },
  {
    keywords: ["intégration", "integration erp", "déploiement", "implémentation", "mise en place"],
    response: "Notre service **Intégration ERP** garantit le succès de votre projet de transformation digitale ! 🚀\n\n• Analyse de vos besoins métiers\n• Paramétrage et configuration sur mesure\n• Migration de données et formation\n\n[Découvrir notre méthodologie](/services/integration-erp)",
  },
  {
    keywords: ["infogérance", "infogerance", "supervision", "infrastructure", "monitoring", "réseau"],
    response: "Notre service **Infogérance** prend en charge la gestion proactive de votre informatique ! 🖥️\n\n• Audit et supervision de votre infrastructure\n• Surveillance continue et sécurité\n• Assistance utilisateurs au quotidien\n\n[En savoir plus sur l'Infogérance](/services/infogerance)",
  },
  {
    keywords: ["assistance utilisateur", "helpdesk", "utilisateurs au quotidien"],
    response: "Notre **Assistance Utilisateurs** accompagne vos équipes au quotidien ! 🎧\n\n• Support technique réactif et personnalisé\n• Résolution rapide des incidents\n• Suivi de la satisfaction utilisateur\n\n[En savoir plus](/services/assistance-utilisateurs)",
  },
  {
    keywords: ["crm", "client", "vente", "commercial", "prospect"],
    response: "Nos solutions **CRM** vous aident à mieux gérer la relation client ! 🤝\n\n• Suivi des prospects et opportunités\n• Pilotage de l'activité commerciale\n• Intégration native avec votre ERP\n\n[Découvrir nos solutions CRM](/metiers/crm)",
  },
  {
    keywords: ["reporting", "tableau de bord", "indicateur", "kpi", "pilotage"],
    response: "Nos outils de **Reporting** vous donnent une vision claire de votre activité ! 📈\n\n• Tableaux de bord personnalisables\n• Indicateurs de performance en temps réel\n• Aide à la décision stratégique\n\n[En savoir plus](/metiers/reporting)",
  },
  {
    keywords: ["immobilisation", "amortissement", "actif", "patrimoine"],
    response: "Notre module **Immobilisations** simplifie la gestion de vos actifs ! 🏗️\n\n• Suivi des immobilisations et amortissements\n• Conformité fiscale et comptable\n• Inventaires et valorisation\n\n[En savoir plus](/metiers/immobilisations)",
  },
  {
    keywords: ["tva", "déclaration fiscale", "impôt", "fiscal"],
    response: "Nos solutions facilitent la gestion de la **TVA** et vos obligations fiscales ! 🧾\n\n• Calcul et déclaration automatisés\n• Conformité avec la réglementation marocaine\n• Réduction des risques d'erreurs\n\n[En savoir plus](/metiers/tva)",
  },
  {
    keywords: ["expertise comptable", "cabinet comptable", "expert-comptable"],
    response: "Nous accompagnons les **cabinets d'expertise comptable** avec des outils adaptés ! 📚\n\n• Gestion multi-dossiers clients\n• Production des états comptables et fiscaux\n• Gain de temps et fiabilité accrue\n\n[En savoir plus](/metiers/expertise-comptable)",
  },
  {
    keywords: ["négoce", "negoce", "distribution", "grossiste", "logistique commerciale"],
    response: "Pour le secteur **Négoce & Distribution**, nous proposons des solutions adaptées à vos enjeux logistiques et commerciaux ! 📦\n\n• Gestion des stocks multi-sites\n• Optimisation des achats et ventes\n• Traçabilité de bout en bout\n\n[Découvrir nos références](/secteurs/negoce-distribution)",
  },
  {
    keywords: ["btp", "construction", "chantier", "bâtiment"],
    response: "Pour le secteur **BTP**, nous accompagnons les entreprises de construction avec des outils de gestion de chantiers et de suivi de projets ! 🏗️\n\n[Découvrir nos solutions BTP](/secteurs/btp)",
  },
  {
    keywords: ["agroalimentaire", "agroalim", "agro", "alimentaire"],
    response: "Pour le secteur **Agroalimentaire**, nos solutions garantissent traçabilité, gestion des stocks et conformité aux normes sanitaires ! 🌾\n\n[Découvrir nos solutions Agroalimentaire](/secteurs/agroalimentaire)",
  },
  {
    keywords: ["secteur", "verticalité", "domaine d'activité"],
    response: "Nous accompagnons des entreprises dans de nombreux secteurs : ⚙️\n\n🔹 **Industrie**\n🔹 **Négoce & Distribution**\n🔹 **Services**\n🔹 **BTP**\n🔹 **Agroalimentaire**\n\nQuel est votre secteur d'activité ?",
  },
  {
    keywords: ["événement", "evenement", "webinaire", "webinar", "salon", "conférence"],
    response: "Retrouvez toutes nos prochaines rencontres dans notre rubrique **Événements & Webinaires** ! 🎤\n\n• Webinaires thématiques sur l'ERP et la transformation digitale\n• Salons professionnels\n• Sessions de démonstration en direct\n\n[Voir nos événements](/evenements)",
  },
  {
    keywords: ["blog", "actualité", "actualites", "article", "ressource", "guide"],
    response: "Découvrez nos contenus pour aller plus loin ! 📰\n\n🔹 [Blog Décisionnel](/ressources/blog)\n🔹 [Guides ERP](/ressources/guides-erp)\n🔹 [Actualités](/ressources/actualites)\n🔹 [FAQ](/ressources/faq)",
  },
  {
    keywords: ["référence", "reference", "client", "témoignage", "temoignage", "étude de cas", "cas client"],
    response: "Nous sommes fiers de la confiance de nos clients ! 🌟\n\n🔹 [Nos Clients](/references/clients)\n🔹 [Études de cas](/references/etudes-de-cas)\n🔹 [Témoignages](/references/temoignages)\n\nDes entreprises de tous secteurs nous font confiance pour leur transformation digitale.",
  },
  {
    keywords: ["à propos", "a propos", "qui êtes-vous", "histoire", "entreprise", "présentation", "1996"],
    response: "**Thalès Informatique** accompagne les entreprises marocaines dans leur transformation digitale depuis **1996** ! 🏢\n\nBasés à Casablanca, nous sommes spécialisés dans l'intégration de solutions ERP, CRM et RH (Sage, DimoMaint, Eloficash, Factorial), ainsi que dans le conseil, la formation et l'infogérance.\n\nPlus de 25 ans d'expertise au service de votre croissance ! 🚀",
  },
  {
    keywords: ["horaire", "ouvert", "ouverture", "heure", "fermeture", "disponib"],
    response: "Nos horaires d'ouverture : 🕐\n\n**Lundi – Vendredi : 8h30 – 17h30**\n\nNotre équipe est à votre écoute par téléphone, email ou WhatsApp durant ces horaires. En dehors, n'hésitez pas à laisser un message, nous vous répondrons rapidement !",
  },
  {
    keywords: ["whatsapp", "wtsap", "what's app"],
    response: "Vous pouvez nous contacter directement sur **WhatsApp** ! 💬\n\n📱 **+212 6 61 16 83 54**\n\nNotre équipe vous répond rapidement pour toute question sur nos solutions ou nos services.",
  },
  {
    keywords: ["localisation", "où êtes-vous", "où se trouve", "casablanca", "siège", "plan"],
    response: "Nous sommes situés au cœur de **Casablanca** 📍\n\n🏢 **310 Rue Hadj Omar Riffi, Casablanca 20120**\n\n[Voir l'itinéraire sur Google Maps](https://maps.app.goo.gl/XK8BzRFH58aUSTnU6)",
  },
  {
    keywords: ["merci", "super", "parfait", "génial", "top"],
    response: "Avec plaisir ! 😊 N'hésitez pas si vous avez d'autres questions sur nos solutions ERP, nos services ou pour planifier une démonstration. Nous sommes là pour vous accompagner !",
  },
  {
    keywords: ["au revoir", "bye", "à bientôt", "a bientot", "ciao"],
    response: "Au revoir et à bientôt ! 👋 N'hésitez pas à revenir si vous avez besoin d'informations supplémentaires. Bonne continuation avec vos projets digitaux !",
  },
];

const defaultResponse =
  "Je n'ai pas bien compris votre question. 🤔 Vous pouvez me demander des informations sur nos **solutions ERP**, nos **services**, ou nos **coordonnées**.\n\nPréférez-vous parler directement à un expert ?\n📞 **05 22 54 87 80** — Lun–Ven 8h30–17h30";

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of botResponses) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response;
    }
  }
  return defaultResponse;
}

function getTime() {
  return new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

function BotMessage({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\n)/g);
  return (
    <span className="leading-relaxed">
      {parts.map((part, i) => {
        if (part === "\n") return <br key={i} />;
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={i} className="font-semibold text-primary">{part.slice(2, -2)}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link)
          return <a key={i} href={link[2]} className="text-cta underline underline-offset-2 hover:text-blue-700">{link[1]}</a>;
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

export default function ChatBot() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: "Bonjour ! 👋 Je suis **Thalès Informatique Assistant**, votre guide digital. Posez-moi vos questions sur nos solutions ERP, nos services ou nos coordonnées.",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), from: "user", text, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        from: "bot",
        text: getResponse(text),
        time: getTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 900 + Math.random() * 600);
  };

  if (pathname === "/maintenance") return null;

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-[300] flex flex-col items-end gap-3">
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cta to-blue-700 shadow-xl flex items-center justify-center text-white cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Minimize2 size={20} />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Bot size={22} />
              </motion.span>
            )}
          </AnimatePresence>
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-2xl bg-cta animate-ping opacity-20" />
          )}
          {/* Unread badge */}
          {unread > 0 && !open && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center">
              {unread}
            </span>
          )}
        </motion.button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[299] w-[360px] max-w-[calc(100vw-24px)] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
            style={{ height: "520px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cta to-blue-700 px-4 py-3.5 flex items-center gap-3 shrink-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-cta" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm leading-tight">Thalès Informatique Assistant</div>
                <div className="text-white/70 text-xs">Réponse en quelques secondes</div>
              </div>
              <div className="flex gap-1">
                <a href="tel:+212522548780" className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors" title="Appeler">
                  <Phone size={13} className="text-white" />
                </a>
                <a href="mailto:contact@thales.ma" className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors" title="Email">
                  <Mail size={13} className="text-white" />
                </a>
                <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer">
                  <X size={13} className="text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} gap-2`}
                >
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cta to-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles size={13} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[78%] ${msg.from === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                    <div className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                      msg.from === "user"
                        ? "bg-cta text-white rounded-tr-sm"
                        : "bg-white border border-border text-secondary rounded-tl-sm shadow-sm"
                    }`}>
                      {msg.from === "bot" ? <BotMessage text={msg.text} /> : msg.text}
                    </div>
                    <span className="text-[10px] text-slate-400 px-1">{msg.time}</span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cta to-blue-700 flex items-center justify-center shrink-0">
                    <Sparkles size={13} className="text-white" />
                  </div>
                  <div className="bg-white border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div className="px-3 py-2 flex gap-1.5 flex-wrap border-t border-border bg-white shrink-0">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="text-[11px] font-medium text-cta border border-cta/30 rounded-full px-2.5 py-1 hover:bg-cta hover:text-white transition-colors duration-150 cursor-pointer"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="px-3 pb-3 pt-2 flex gap-2 bg-white shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message..."
                className="flex-1 bg-slate-100 rounded-xl px-3.5 py-2.5 text-xs text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-cta hover:bg-blue-700 disabled:opacity-40 flex items-center justify-center text-white transition-colors cursor-pointer shrink-0"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
