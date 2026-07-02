"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
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
  // Salutations
  {
    keywords: ["bonjour", "salut", "hello", "bonsoir", "hi", "coucou", "bonne journée"],
    response: "Bonjour ! 👋 Je suis l'assistant virtuel de **Thalès Informatique**. Je suis là pour vous aider à trouver la solution ERP adaptée à votre entreprise.\n\nVous pouvez me poser n'importe quelle question sur nos solutions, services, secteurs, tarifs ou coordonnées. Comment puis-je vous aider ?",
  },
  // Démo / essai
  {
    keywords: ["demo", "démonstration", "démo", "essai", "gratuit", "tester", "essayer", "voir en action"],
    response: "Excellente initiative ! 🎯 Nous proposons des démonstrations **gratuites et personnalisées** de nos solutions Sage. Contactez notre équipe :\n\n📞 **+212 5 22 54 87 80**\n✉️ **contact@thales.ma**\n\nOu rendez-vous sur notre page [Contact](/contact) pour planifier votre démo.",
  },
  // ERP / Sage X3
  {
    keywords: ["sage x3", "erp", "progiciel", "logiciel gestion", "solution gestion"],
    response: "Nous proposons plusieurs solutions ERP adaptées à votre taille et secteur :\n\n🔹 **Sage X3** — Pour les ETI et groupes industriels\n🔹 **Sage 100** — Idéal pour les PME\n🔹 **Sage FRP 1000** — Finance et comptabilité des groupes\n🔹 **DimoMaint GMAO** — Maintenance industrielle\n🔹 **Eloficash** — Trésorerie\n🔹 **Factorial** — RH & SIRH\n\nQuelle solution vous intéresse ?",
  },
  // Prix / tarifs
  {
    keywords: ["prix", "tarif", "coût", "combien", "budget", "devis", "offre", "licences", "abonnement"],
    response: "Les tarifs de nos solutions varient selon la taille de votre entreprise et vos besoins spécifiques. 💡\n\nNous préférons vous proposer un **devis personnalisé** après avoir compris vos enjeux métiers.\n\nContactez-nous au **+212 5 22 54 87 80** ou via [notre formulaire de contact](/contact).",
  },
  // Support / assistance
  {
    keywords: ["support", "assistance", "aide", "problème", "hotline", "dépannage", "incident", "bug", "panne"],
    response: "Notre équipe support est disponible pour vous ! 🛠️\n\n📞 **Hotline : hotline@thales.ma**\n🕐 **Lun–Ven : 8h30 – 17h30**\n\nNous offrons :\n• Support téléphonique réactif\n• Assistance à distance\n• Interventions sur site\n\n[Support & Maintenance](/services/support-maintenance)",
  },
  // Contact
  {
    keywords: ["contact", "joindre", "appeler", "email", "adresse", "bureau", "téléphone", "numéro", "mail", "coordonnées"],
    response: "Voici nos coordonnées 📍\n\n📞 **+212 5 22 54 87 80**\n✉️ **contact@thales.ma**\n🏢 **310 Rue Hadj Omar Riffi, Casablanca 20120**\n\n🕐 Lun–Ven : 8h30 – 17h30\n\n[Voir sur Google Maps](https://maps.app.goo.gl/XK8BzRFH58aUSTnU6)",
  },
  // RH / Paie
  {
    keywords: ["rh", "paie", "sirh", "ressources humaines", "congé", "salaire", "bulletin", "personnel", "employé", "contrat", "carrière"],
    response: "Nos solutions RH couvrent tous vos besoins ! 👥\n\n🔹 **Factorial** — SIRH complet (congés, pointage, recrutement)\n🔹 **Sage 100 Paie & RH** — Gestion de la paie conforme CNSS/AMO\n🔹 **Sage Espace Employés** — Self-service collaborateurs\n🔹 **Démat RH** — Dématérialisation des dossiers RH\n\n[Solutions RH](/metiers/paie-rh)",
  },
  // GPEC / compétences
  {
    keywords: ["gpec", "compétence", "formation rh", "plan de formation", "évaluation"],
    response: "Notre module **SIRH** intègre la gestion des compétences et la GPEC ! 🎯\n\n• Plans de formation et suivi des compétences\n• Évaluations et entretiens annuels\n• Gestion prévisionnelle des emplois\n\n[Découvrir le SIRH](/metiers/sirh)",
  },
  // Démat RH
  {
    keywords: ["dématérialisation rh", "demat rh", "coffre-fort", "bulletin numérique", "coffre fort"],
    response: "Notre module **Dématérialisation RH** digitalise vos processus RH ! 📄\n\n• Coffre-fort numérique pour bulletins et documents\n• Signature électronique des contrats\n• Archivage légal sécurisé\n\n[En savoir plus](/metiers/demat-rh)",
  },
  // Industrie / production
  {
    keywords: ["industrie", "production", "fabrication", "manufacturin", "gpao", "ordre de fabrication", "nomenclature", "atelier"],
    response: "Pour le secteur industriel, nous recommandons :\n\n⚙️ **Sage X3** — ERP industrie complet (production, MRP, traçabilité)\n🔧 **DimoMaint GMAO** — Gestion de maintenance\n\n[Gestion de Production](/metiers/gestion-production) | [Secteur Industrie](/secteurs/industrie)",
  },
  // Gestion de la chaîne d'approvisionnement
  {
    keywords: ["supply chain", "approvisionnement", "achat", "fournisseur", "stock", "entrepôt", "logistique", "inventaire"],
    response: "Notre module **Gestion de la Chaîne d'Approvisionnement** couvre : 📦\n\n• Achats et gestion fournisseurs\n• Stocks multi-sites et réapprovisionnement\n• Entrepôts et logistique\n• Prévision de la demande\n\n[En savoir plus](/metiers/gestion-chaine-approvisionnement)",
  },
  // Formation
  {
    keywords: ["formation", "former", "apprendre", "formateur", "stage", "certifi"],
    response: "Nous proposons des formations complètes ! 🎓\n\n✅ Formations sur site à Casablanca et partout au Maroc et en Afrique\n✅ Sessions adaptées à chaque profil utilisateur\n✅ Support post-formation inclus\n\n[Formation Utilisateurs](/services/formation-utilisateurs)",
  },
  // Sage 100
  {
    keywords: ["sage 100", "sage100", "gestion commerciale"],
    response: "**Sage 100** est notre solution phare pour les PME ! 📊\n\nElle couvre :\n• Comptabilité & finance\n• Gestion commerciale\n• Paie & RH\n• Trésorerie\n\nIdéale pour les entreprises de 10 à 250 collaborateurs.\n\n[En savoir plus sur Sage 100](/solutions/sage-100)",
  },
  // Sage 100 Paie
  {
    keywords: ["sage 100 paie", "paie rh sage"],
    response: "**Sage 100 Paie & RH** couvre la gestion complète de la paie pour les PME :\n\n• Moteur de paie conforme IR & CNSS Maroc\n• Gestion des congés et absences\n• Déclarations sociales automatisées\n\n[En savoir plus](/solutions/sage-100-paie-rh)",
  },
  // Sage Espace Employés
  {
    keywords: ["espace employés", "espace employes", "self service", "portail rh"],
    response: "**Sage Espace Employés** offre un portail self-service à vos collaborateurs ! 🧑‍💼\n\n• Consultation des bulletins de paie\n• Demandes de congés en ligne\n• Mise à jour des informations personnelles\n\n[En savoir plus](/solutions/sage-espace-employes)",
  },
  // Facturation électronique
  {
    keywords: ["facturation", "facture", "electronique", "e-facture", "dgi", "simpl"],
    response: "La **facturation électronique** devient obligatoire au Maroc ! 📋\n\nThalès Informatique vous accompagne dans cette transition avec :\n• Intégration native dans Sage\n• Conformité DGI garantie\n• Archivage légal des factures\n\n[Lire l'article](/ressources/blog/facturation-electronique-maroc)",
  },
  // États comptables / liasse fiscale
  {
    keywords: ["liasse fiscale", "états comptables", "bilan", "cpc", "edi", "simpl-is"],
    response: "Notre module **États Comptables & Fiscaux** automatise vos obligations fiscales ! 🧾\n\n• Production de la liasse fiscale\n• Télédéclaration EDI Simpl-IS\n• États de synthèse (bilan, CPC, ESG)\n\n[En savoir plus](/metiers/etats-comptables-fiscaux)",
  },
  // Sage FRP 1000
  {
    keywords: ["sage frp", "frp 1000", "frp1000", "consolidation", "multi-sociétés", "groupe"],
    response: "**Sage FRP 1000** est notre solution de référence pour la finance des groupes ! 💼\n\n• Comptabilité multi-sociétés et multi-devises\n• Consolidation et reporting financier\n• Gestion budgétaire avancée\n\n[Découvrir Sage FRP 1000](/solutions/sage-frp-1000)",
  },
  // DimoMaint GMAO
  {
    keywords: ["dimomaint", "gmao", "maintenance", "équipement", "préventif", "curatif", "intervention"],
    response: "**DimoMaint GMAO** optimise la gestion de votre maintenance industrielle ! 🔧\n\n• Suivi des interventions et équipements\n• Maintenance préventive et curative\n• Réduction des temps d'arrêt\n\n[En savoir plus sur DimoMaint GMAO](/solutions/dimomaint-gmao)",
  },
  // Eloficash / Trésorerie
  {
    keywords: ["eloficash", "trésorerie", "tresorerie", "cash", "flux financier", "prévisionnel", "rapprochement bancaire"],
    response: "**Eloficash** est notre solution de gestion de trésorerie nouvelle génération ! 💰\n\n• Connexion directe aux banques\n• Prévisionnel de trésorerie\n• Gestion centralisée multi-comptes\n\n[Découvrir Eloficash](/solutions/eloficash) | [Métier Trésorerie](/metiers/tresorerie)",
  },
  // Factorial
  {
    keywords: ["factorial", "recrutement", "pointage", "absence", "onboarding", "temps de travail"],
    response: "**Factorial** est notre SIRH moderne pour piloter vos ressources humaines ! 👥\n\n• Gestion des congés et absences\n• Suivi du temps et pointage\n• Recrutement et onboarding digital\n\n[Découvrir Factorial](/solutions/factorial)",
  },
  // Gestion financière
  {
    keywords: ["gestion financière", "finance", "comptabilité", "analytique", "budgétaire", "grand livre"],
    response: "Nos solutions de **Gestion Financière** couvrent l'ensemble de vos besoins comptables ! 📊\n\n• Comptabilité générale, analytique et budgétaire\n• Rapprochements bancaires automatisés\n• Clôtures accélérées\n\n[Solutions de Gestion Financière](/solutions/gestion-financiere) | [Comptabilité & Finance](/metiers/comptabilite-finance)",
  },
  // Reporting / BI
  {
    keywords: ["reporting", "tableau de bord", "indicateur", "kpi", "pilotage", "bi", "business intelligence", "décisionnel", "excel"],
    response: "Nos outils de **Reporting & Pilotage** vous donnent une vision claire de votre activité ! 📈\n\n• Tableaux de bord personnalisables\n• Indicateurs de performance en temps réel\n• Intégration Excel et connecteurs BI\n\n[Reporting Pilotage](/solutions/reporting-pilotage) | [Métier Reporting](/metiers/reporting)",
  },
  // Immobilisations
  {
    keywords: ["immobilisation", "amortissement", "actif", "patrimoine", "dotation"],
    response: "Notre module **Immobilisations** simplifie la gestion de vos actifs ! 🏗️\n\n• Suivi des immobilisations et amortissements\n• Conformité fiscale et comptable\n• Inventaires et valorisation du patrimoine\n\n[En savoir plus](/metiers/immobilisations)",
  },
  // TVA
  {
    keywords: ["tva", "déclaration tva", "taxe", "impôt", "déclaration fiscale"],
    response: "Nos solutions facilitent la gestion de la **TVA** et vos obligations fiscales ! 🧾\n\n• Calcul et déclaration de TVA automatisés\n• TVA sur encaissements et débits\n• Conformité avec la réglementation marocaine\n\n[En savoir plus](/metiers/tva)",
  },
  // Expertise comptable
  {
    keywords: ["expertise comptable", "cabinet comptable", "expert-comptable", "cabinet", "expert comptable"],
    response: "Nous accompagnons les **cabinets d'expertise comptable** avec des outils adaptés ! 📚\n\n• Gestion multi-dossiers clients\n• Production des états comptables et fiscaux\n• Gain de temps et fiabilité accrue\n\n[En savoir plus](/metiers/expertise-comptable)",
  },
  // CRM
  {
    keywords: ["crm", "relation client", "vente", "commercial", "prospect", "opportunité", "pipeline", "sav", "service après-vente"],
    response: "Nos solutions **CRM** vous aident à mieux gérer la relation client ! 🤝\n\n• Suivi des prospects et opportunités\n• Pilotage de l'activité commerciale\n• Gestion SAV intégrée à l'ERP\n\n[Découvrir nos solutions CRM](/metiers/crm)",
  },
  // Audit & Conseil
  {
    keywords: ["audit", "conseil", "diagnostic", "schéma directeur", "stratégie it", "accompagnement"],
    response: "Notre offre **Audit & Conseil** vous aide à faire les bons choix technologiques ! 🔍\n\n• Diagnostic de votre système d'information\n• Recommandations stratégiques personnalisées\n• Accompagnement au changement\n\n[En savoir plus](/services/audit-conseil)",
  },
  // Intégration ERP
  {
    keywords: ["intégration", "déploiement", "implémentation", "mise en place", "projet erp", "paramétrage", "migration"],
    response: "Notre service **Intégration ERP** garantit le succès de votre projet de transformation digitale ! 🚀\n\n• Analyse de vos besoins métiers\n• Paramétrage et configuration sur mesure\n• Migration de données et formation\n\n[Découvrir notre méthodologie](/services/integration-erp)",
  },
  // Infogérance
  {
    keywords: ["infogérance", "infogerance", "supervision", "infrastructure", "monitoring", "réseau", "parc informatique", "msp"],
    response: "Notre service **Infogérance** prend en charge la gestion proactive de votre informatique ! 🖥️\n\n• Audit et supervision de votre infrastructure\n• Surveillance continue et alertes\n• Assistance utilisateurs incluse\n\n[En savoir plus sur l'Infogérance](/services/infogerance)",
  },
  // Cybersécurité
  {
    keywords: ["cybersécurité", "cybersecurite", "sécurité", "securite", "ransomware", "virus", "firewall", "sauvegarde", "backup", "données"],
    response: "Nos services de **Cybersécurité** protègent votre système d'information ! 🔐\n\n• Audit de sécurité et tests d'intrusion\n• Protection contre les ransomwares\n• Sauvegarde et reprise d'activité\n\n[Cybersécurité](/services/infogerance/cybersecurite) | [Sauvegarde & Reprise](/services/infogerance/sauvegarde-reprise-activite)",
  },
  // Support maintenance
  {
    keywords: ["maintenance logicielle", "maintenance applicative", "mise à jour", "upgrade", "version"],
    response: "Notre service **Support & Maintenance** assure la pérennité de vos solutions ! 🔄\n\n• Mises à jour et évolutions des logiciels\n• Suivi des correctifs et des versions\n• Contrats de maintenance adaptés à vos besoins\n\n[En savoir plus](/services/support-maintenance)",
  },
  // Assistance utilisateurs
  {
    keywords: ["assistance utilisateur", "helpdesk", "help desk", "ticket", "incident utilisateur"],
    response: "Notre **Assistance Utilisateurs** accompagne vos équipes au quotidien ! 🎧\n\n• Support technique réactif et personnalisé\n• Résolution rapide des incidents\n• Suivi des tickets et satisfaction\n\n[En savoir plus](/services/assistance-utilisateurs)",
  },
  // Secteur Négoce & Distribution
  {
    keywords: ["négoce", "negoce", "distribution", "grossiste", "distributeur", "revendeur"],
    response: "Pour le secteur **Négoce & Distribution**, nos solutions optimisent vos flux commerciaux ! 📦\n\n• Gestion des stocks multi-sites\n• Optimisation des achats et ventes\n• Traçabilité de bout en bout\n\n[Découvrir nos solutions](/secteurs/negoce-distribution)",
  },
  // Secteur BTP
  {
    keywords: ["btp", "construction", "chantier", "bâtiment", "travaux", "génie civil"],
    response: "Pour le secteur **BTP & Construction**, nous accompagnons les entreprises de construction avec des outils de gestion de chantiers et de projets ! 🏗️\n\n• Suivi des coûts de chantier\n• Gestion des ressources et du matériel\n• Reporting projet\n\n[Découvrir nos solutions BTP](/secteurs/btp)",
  },
  // Secteur Agroalimentaire
  {
    keywords: ["agroalimentaire", "agroalim", "agro", "alimentaire", "haccp", "onssa", "traçabilité", "lot"],
    response: "Pour le secteur **Agroalimentaire**, nos solutions garantissent traçabilité et conformité ! 🌾\n\n• Gestion des lots et DLC/DLUO\n• Traçabilité HACCP\n• Conformité normes ONSSA\n\n[Découvrir nos solutions Agroalimentaire](/secteurs/agroalimentaire)",
  },
  // Secteur Chimie
  {
    keywords: ["chimie", "industrie chimique", "pharmaceutique", "laboratoire"],
    response: "Pour le secteur **Chimie & Industrie**, nos solutions intègrent gestion de production et traçabilité des produits ! ⚗️\n\n[Découvrir nos solutions Chimie](/secteurs/chimie)",
  },
  // Secteur Logistique
  {
    keywords: ["logistique", "transport", "livraison", "entrepôt", "wms", "expédition"],
    response: "Pour le secteur **Logistique & Transport**, nous proposons des outils de gestion d'entrepôts et d'optimisation des flux ! 🚛\n\n[Découvrir nos solutions Logistique](/secteurs/logistique)",
  },
  // Secteur Banque / Assurance
  {
    keywords: ["banque", "assurance", "mutuelle", "finance", "fintech"],
    response: "Pour le secteur **Banque, Assurance & Mutuelle**, nos solutions couvrent la gestion financière et la conformité réglementaire ! 🏦\n\n[Découvrir nos solutions](/secteurs/banque-assurance-mutuelle)",
  },
  // Secteur Association
  {
    keywords: ["association", "ong", "fondation", "non profit", "asbl"],
    response: "Nous accompagnons également les **associations et ONG** avec des solutions adaptées à leur gestion administrative et financière ! 🤲\n\n[Découvrir nos solutions Association](/secteurs/association)",
  },
  // Secteur Services
  {
    keywords: ["services", "prestataire", "conseil", "agence", "cabinet"],
    response: "Pour le secteur **Services**, nos solutions ERP et CRM vous aident à piloter vos missions et votre relation client ! 💼\n\n[Découvrir nos solutions Services](/secteurs/services)",
  },
  // Nos secteurs en général
  {
    keywords: ["secteur", "domaine", "activité", "métier", "industrie"],
    response: "Nous accompagnons des entreprises dans de nombreux secteurs : 🏭\n\n🔹 **Industrie** | 🔹 **Négoce & Distribution**\n🔹 **BTP** | 🔹 **Agroalimentaire**\n🔹 **Chimie** | 🔹 **Logistique**\n🔹 **Banque & Assurance** | 🔹 **Association**\n\nQuel est votre secteur ?",
  },
  // Événements
  {
    keywords: ["événement", "evenement", "webinaire", "webinar", "salon", "conférence", "gitex", "forum"],
    response: "Retrouvez toutes nos prochaines rencontres dans notre rubrique **Événements & Webinaires** ! 🎤\n\n• Webinaires sur l'ERP et la transformation digitale\n• Salons professionnels (GITEX Africa, Forum ERP…)\n• Sessions de démonstration en direct\n\n[Voir nos événements](/evenements)",
  },
  // Blog / Ressources
  {
    keywords: ["blog", "actualité", "actualites", "article", "ressource", "guide", "faq", "livre blanc"],
    response: "Découvrez nos contenus pour aller plus loin ! 📰\n\n🔹 [Blog Décisionnel](/ressources/blog)\n🔹 [Guides ERP](/ressources/guides-erp)\n🔹 [Actualités](/ressources/actualites)\n🔹 [FAQ](/ressources/faq)",
  },
  // Références / Clients
  {
    keywords: ["référence", "reference", "témoignage", "temoignage", "étude de cas", "cas client", "confiance", "portfolio"],
    response: "Nous sommes fiers de la confiance de nos clients ! 🌟\n\n🔹 [Nos Clients](/references/clients)\n🔹 [Études de cas](/references/etudes-de-cas)\n🔹 [Témoignages](/references/temoignages)\n\nDes entreprises de tous secteurs nous font confiance pour leur transformation digitale.",
  },
  // À propos
  {
    keywords: ["à propos", "a propos", "qui êtes-vous", "qui etes vous", "histoire", "présentation", "fondé", "1996", "thalès", "thales informatique", "équipe"],
    response: "**Thalès Informatique** accompagne les entreprises en Afrique et à l'international depuis **1996** ! 🏢\n\nBasés à Casablanca, nous sommes spécialisés dans :\n• Intégration ERP, CRM et RH (Sage, DimoMaint, Eloficash, Factorial)\n• Conseil, formation et infogérance\n\n[En savoir plus sur nous](/a-propos)",
  },
  // Horaires
  {
    keywords: ["horaire", "ouvert", "ouverture", "heure", "fermeture", "disponible", "quand"],
    response: "Nos horaires d'ouverture : 🕐\n\n**Lundi – Vendredi : 8h30 – 17h30**\n\nNotre équipe est à votre écoute par téléphone, email ou WhatsApp durant ces horaires.",
  },
  // WhatsApp
  {
    keywords: ["whatsapp", "wtsap", "what's app", "wha"],
    response: "Vous pouvez nous contacter directement sur **WhatsApp** ! 💬\n\n📱 **+212 6 61 16 83 54**\n\nNotre équipe vous répond rapidement pour toute question.",
  },
  // Localisation
  {
    keywords: ["localisation", "où", "adresse", "casablanca", "siège", "plan", "carte", "maps", "itinéraire"],
    response: "Nous sommes situés au cœur de **Casablanca** 📍\n\n🏢 **310 Rue Hadj Omar Riffi, Casablanca 20120**\n\n[Voir l'itinéraire sur Google Maps](https://maps.app.goo.gl/XK8BzRFH58aUSTnU6)",
  },
  // Maroc / Afrique / International
  {
    keywords: ["maroc", "afrique", "international", "pays", "région", "zone"],
    response: "Thalès Informatique accompagne des entreprises au **Maroc, en Afrique et à l'international** ! 🌍\n\nBasés à Casablanca, nous intervenons à distance ou sur site dans toutes les régions.\n\n[Contactez-nous](/contact) pour discuter de votre projet.",
  },
  // PME / ETI / Groupe
  {
    keywords: ["pme", "eti", "grande entreprise", "tpe", "startup", "taille"],
    response: "Nous accompagnons des entreprises de toutes tailles ! 🏢\n\n• **TPE / PME** → Sage 100\n• **ETI / Industries** → Sage X3\n• **Groupes** → Sage FRP 1000\n• **Toutes tailles (RH)** → Factorial, Sage 100 Paie\n\nQuelle est la taille de votre entreprise ?",
  },
  // Transformation digitale / Cloud
  {
    keywords: ["transformation digitale", "digital", "cloud", "saas", "hébergement", "numérique"],
    response: "Thalès Informatique vous accompagne dans votre **transformation digitale** ! ☁️\n\n• Solutions disponibles en Cloud (SaaS) ou On-Premise\n• Accompagnement au changement et formation\n• Intégration avec vos outils existants\n\n[Nos services](/services)",
  },
  // Remerciements
  {
    keywords: ["merci", "super", "parfait", "génial", "excellent", "bravo", "bien", "top", "bonne réponse"],
    response: "Avec plaisir ! 😊 N'hésitez pas si vous avez d'autres questions. Nous sommes là pour vous accompagner dans votre projet de transformation digitale !",
  },
  // Au revoir
  {
    keywords: ["au revoir", "bye", "à bientôt", "a bientot", "ciao", "bonne journée", "bonne soirée", "goodbye"],
    response: "Au revoir et à bientôt ! 👋 N'hésitez pas à revenir si vous avez besoin d'informations supplémentaires. Bonne continuation !",
  },
];

const defaultResponse =
  "Je ne suis pas sûr d'avoir compris votre question. 🤔\n\nVous pouvez me demander des informations sur :\n• Nos **solutions ERP** (Sage X3, Sage 100, FRP 1000…)\n• Nos **services** (Intégration, Formation, Support, Infogérance)\n• Nos **secteurs d'activité**\n• Nos **tarifs** ou une **démo gratuite**\n• Nos **coordonnées**\n\n📞 **+212 5 22 54 87 80** — Lun–Ven 8h30–17h30";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['']/g, " ");
}

function getResponse(input: string): string {
  const lower = normalize(input);
  // Score-based matching: prefer entries with the most keyword hits
  let bestScore = 0;
  let bestResponse = defaultResponse;
  for (const entry of botResponses) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (lower.includes(normalize(kw))) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestResponse = entry.response;
    }
  }
  return bestResponse;
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
  const [hidden, setHidden] = useState(false);
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

  useLayoutEffect(() => {
    setHidden(!!document.querySelector("[data-maintenance-page]"));
  }, []);

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

  if (hidden) return null;

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
