"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Users, Clock, ThumbsUp, Layers, Building2, ShoppingCart, Briefcase, HardHat, Wheat } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const stats = [
  { value: "500+", label: "Clients actifs", icon: Users },
  { value: "30+",  label: "Ans d'expertise", icon: Clock },
  { value: "7",    label: "Secteurs couverts", icon: Layers },
  { value: "92%",  label: "Taux de fidélisation", icon: ThumbsUp },
];

const clientsByCategory = [
  {
    category: "Banques & Assurances",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    dot: "bg-blue-500",
    clients: [
      "Crédit Agricole", "Chaabi", "Attijari", "Saham",
      "Saham Bank", "Bourse de Casablanca", "CDG", "Africa",
    ],
    logos: [
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783504280/15_f0ear9.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783504279/20_lgg4it.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783504280/14_hl1xqm.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783504279/13_anlssa.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783504280/18_jxwd3r.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783504320/17_tfe1r0.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783504286/16_w9oj7q.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783504280/19_f4xuav.png",
    ],
  },
  {
    category: "Services & Autres",
    color: "bg-violet-50 border-violet-200 text-violet-800",
    dot: "bg-violet-500",
    clients: [
      "Deloitte", "EY", "SCOMM by Rostal", "Novec",
      "Moqadir", "Sapress", "Air France", "Cap Advisory",
      "Maroc Clear", "Brinks", "Polluclean",
    ],
    logos: [
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505251/22_wvsjps.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505441/logos_they_trust_us_500_x_500_px_1_wb6pm8.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505252/24_pagql6.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505252/28_lshfiu.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505252/29_u0j1e6.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505253/26_yp6ogd.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505253/21_rxucpz.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505253/23_qcsmtl.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505253/30_oblb1b.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505254/25_l16xzq.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783505254/27_t2rvzy.png",
    ],
  },
  {
    category: "Secteur public",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    dot: "bg-emerald-500",
    clients: [
      "CNSS", "MAP", "onMt", "SDTM",
      "Fonds Mondial", "SOREC", "AMDIE", "Morocco Foodex",
      "Marsa Maroc", "ONSSA", "Client 11",
    ],
    logos: [
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506438/41_dcfivi.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506437/40_vfftg6.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506436/39_agqwj5.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506436/38_o9izs7.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506436/37_q954fs.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506418/36_x05pxa.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506418/35_rbvwrv.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506417/33_wp3eyu.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506415/32_ujudyy.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506415/31_cfqiop.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783506414/34_bielfa.png",
    ],
  },
  {
    category: "Industrie",
    color: "bg-orange-50 border-orange-200 text-orange-800",
    dot: "bg-orange-500",
    clients: [
      "1","2","3","4","5","6","7","8","9","10",
      "11","12","13","14","15","16","17","18","19","20",
    ],
    logos: [
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507170/logos_they_trust_us_500_x_500_px_2_olvpfk.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507169/logos_they_trust_us_500_x_500_px_3_srenjw.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507160/42_pzxbab.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507159/59_ke2bdo.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507158/58_ouf6ym.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507158/57_dgwilu.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507157/56_vwubby.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507156/55_uueuld.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507156/54_sjdckm.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507155/53_pfdxol.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507155/52_pjih1r.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507153/51_plh3vw.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507152/50_jtoxob.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507151/49_smcnlj.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507151/48_ze8bos.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507150/47_b7qcgt.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507149/46_ubv3vk.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507149/45_rfpgs7.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507148/44_xnjqvf.png",
      "https://res.cloudinary.com/dmutnjgp8/image/upload/v1783507147/43_qpnvhq.png",
    ],
  },
  {
    category: "Éducation & Santé",
    color: "bg-pink-50 border-pink-200 text-pink-800",
    dot: "bg-pink-500",
    clients: [
      "UEMF", "Université Internationale de Casablanca",
      "UR", "Groupe Test", "HEM", "IMA",
    ],
  },
  {
    category: "Holding",
    color: "bg-slate-50 border-slate-200 text-slate-800",
    dot: "bg-slate-500",
    clients: [
      "Al Mada", "Soremar Group", "Holding C",
      "Zinelec Group", "ARMA",
    ],
  },
  {
    category: "Négoce & Distribution",
    color: "bg-amber-50 border-amber-200 text-amber-800",
    dot: "bg-amber-500",
    clients: [
      "Bodor", "Beko", "Label Vie", "General Tech",
      "CASEM", "Alumetaux", "Legrand", "ARCOL",
      "Suptours", "MAN", "TAREC", "McDonald's",
      "Umuluf", "Le Comptoir",
    ],
  },
];

const sectors = [
  { name: "Industrie", count: "150+", icon: Building2, color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "Négoce & Distribution", count: "120+", icon: ShoppingCart, color: "bg-violet-50 text-violet-700 border-violet-200" },
  { name: "Services & Conseil", count: "100+", icon: Briefcase, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { name: "BTP & Construction", count: "80+", icon: HardHat, color: "bg-orange-50 text-orange-700 border-orange-200" },
  { name: "Agroalimentaire", count: "50+", icon: Wheat, color: "bg-amber-50 text-amber-700 border-amber-200" },
];

export default function ClientsClient() {
  const statsRef = useRef(null);
  const gridRef = useRef(null);
  const sectorsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const sectorsInView = useInView(sectorsRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-cta rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
              <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
              <ChevronRight size={14} />
              <Link href="/references" className="hover:text-accent transition-colors">Références</Link>
              <ChevronRight size={14} />
              <span className="text-accent">Nos Clients</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos <span className="text-accent">Clients</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Plus de 500 entreprises en Afrique et à l'international nous font confiance pour piloter leur croissance avec les meilleures solutions ERP du marché.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-12 bg-white border-b border-border">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon size={28} className="text-cta mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-secondary text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client grid by category */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Ils nous font confiance</h2>
            <p className="text-secondary max-w-xl mx-auto">Des leaders de chaque secteur de l&apos;économie marocaine ont choisi Thalès Informatique.</p>
          </motion.div>
          <div ref={gridRef} className="space-y-10">
            {clientsByCategory.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${cat.dot} flex-shrink-0`} />
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest">{cat.category}</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {cat.clients.map((client, i) => {
                    const logo = (cat as { logos?: string[] }).logos?.[i];
                    return (
                      <motion.div
                        key={client}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.35, delay: ci * 0.06 + i * 0.03 }}
                                                className={`rounded-xl border overflow-hidden hover:shadow-md transition-all duration-200 cursor-default ${logo ? "bg-white border-border h-[52px] p-1" : "px-3 py-3.5 flex items-center justify-center " + cat.color}`}
                      >
                        {logo ? (
                          <img
                            src={logo}
                            alt={client}
                            loading="lazy"
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-xs font-semibold leading-tight block blur-sm select-none">{client}</span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Présence par secteur</h2>
            <p className="text-secondary max-w-xl mx-auto">Notre expertise couvre l&apos;ensemble des secteurs clés de l&apos;économie marocaine.</p>
          </motion.div>
          <div ref={sectorsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 30 }}
                animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-6 text-center ${sector.color}`}
              >
                <sector.icon size={30} className="mx-auto mb-3 opacity-80" />
                <div className="text-2xl font-bold mb-1">{sector.count}</div>
                <div className="text-sm font-medium">{sector.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Rejoindre nos clients</h2>
            <p className="text-slate-300 mb-8">Prêt à rejoindre les 500+ entreprises qui ont fait confiance à Thalès Informatique pour leur transformation digitale ?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-xl hover:bg-white transition-colors duration-200 shadow-lg"
            >
              Rejoindre nos clients <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
