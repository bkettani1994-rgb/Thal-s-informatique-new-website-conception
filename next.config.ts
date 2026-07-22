import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      // ── Anciennes pages "carrières" (aucun équivalent : redirection vers /contact) ──
      { source: "/carrieres", destination: "/contact", permanent: true },
      { source: "/carrieres/offres-emploi", destination: "/contact", permanent: true },

      // ── Anciennes rubriques structurelles ──
      { source: "/infrastructure", destination: "/services/infogerance", permanent: true },
      { source: "/infrastructure/infogerance", destination: "/services/infogerance", permanent: true },
      { source: "/nproject", destination: "/references/etudes-de-cas", permanent: true },
      { source: "/category/evenements", destination: "/evenements", permanent: true },
      { source: "/news-blog", destination: "/ressources/blog", permanent: true },
      { source: "/solutions-secteurs-activite", destination: "/secteurs", permanent: true },
      { source: "/solutions-domaines-activite/see", destination: "/metiers", permanent: true },
      { source: "/solutions-domaines-activite/demat-rh", destination: "/metiers/demat-rh", permanent: true },

      // ── Intégration / partenaire Sage ──
      { source: "/integrateur-sage", destination: "/services/integration-erp", permanent: true },
      { source: "/integrateur-sage-au-maroc-une-expertise-au-service-de-votre-performance", destination: "/services/integration-erp", permanent: true },
      { source: "/revendeur-sage", destination: "/solutions", permanent: true },
      { source: "/sage-erp", destination: "/solutions", permanent: true },
      { source: "/sage-un-logiciel-de-reference-pour-mieux-gerer-son-entreprise", destination: "/solutions", permanent: true },
      { source: "/solutions-sage-pour-entreprises-au-maroc-optimisez-votre-gestion", destination: "/solutions", permanent: true },
      { source: "/thales-informatique-leader-des-solutions-erp-sage-au-maroc", destination: "/solutions", permanent: true },

      // ── Sage X3 ──
      { source: "/sage-x3-maroc-lerp-de-reference-pour-les-grandes-entreprises-avec-thales-informatique", destination: "/solutions/sage-x3", permanent: true },
      { source: "/sage-x3-maroc-un-erp-puissant-et-evolutif", destination: "/solutions/sage-x3", permanent: true },
      { source: "/sage-x3-lerp-polyvalent-pour-la-croissance-de-votre-entreprise", destination: "/solutions/sage-x3", permanent: true },
      { source: "/thales-informatique-maximizing-business-efficiency-with-erp-sage-x3", destination: "/solutions/sage-x3", permanent: true },

      // ── Sage 100 ──
      { source: "/erp-sage-au-maroc-un-outil-puissant-pour-les-pme", destination: "/solutions/sage-100", permanent: true },
      { source: "/sage-100-erp-la-solution-ideale-pour-les-pme-ambitieuses", destination: "/solutions/sage-100", permanent: true },

      // ── Sage 100 Paie & RH / SIRH / Démat RH ──
      { source: "/optimisez-la-gestion-de-vos-ressources-humaines-avec-sage-100-paie-rh", destination: "/solutions/sage-100-paie-rh", permanent: true },
      { source: "/5-bonnes-raisons-de-vous-doter-dun-sirh", destination: "/metiers/sirh", permanent: true },
      { source: "/5-bonnes-raisons-de-vous-doter-dun-sirh/sans-titre-26", destination: "/metiers/sirh", permanent: true },

      // ── ERP générique (métier) ──
      { source: "/erp-sage-au-maroc-une-gestion-integree-pour-votre-performance", destination: "/metiers/erp", permanent: true },

      // ── Infogérance ──
      { source: "/linfogerance-informatique-au-service-de-la-transformation-digitale", destination: "/services/infogerance", permanent: true },

      // ── Secteur agroalimentaire ──
      { source: "/boostez-la-performance-de-votre-entreprise-agroalimentaire-grace-aux-erp-sage", destination: "/secteurs/agroalimentaire", permanent: true },

      // ── Pages "à propos" / présentation entreprise ──
      { source: "/entreprise-de-developpement-informatique-a-casablanca", destination: "/a-propos", permanent: true },
      { source: "/pourquoi-faire-confiance-a-thales-informatique-pour-vos-erp-sage-au-maroc", destination: "/a-propos", permanent: true },
      { source: "/thales-informatique-votre-partenaire-pour-des-solutions-informatiques-efficaces", destination: "/a-propos", permanent: true },
      { source: "/thales-informatique-votre-partenaire-en-services-informatiques-au-maroc", destination: "/a-propos", permanent: true },

      // ── Article blog générique (transformation digitale) ──
      { source: "/digitalisation-des-entreprises-au-maroc-avec-les-solutions-sage", destination: "/ressources/blog", permanent: true },
    ];
  },
};

export default nextConfig;
