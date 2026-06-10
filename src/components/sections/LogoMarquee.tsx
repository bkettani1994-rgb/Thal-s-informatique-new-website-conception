"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Holding Al Mada",             logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993202/1_zj74sw.png" },
  { name: "Raja Club Athletic",          logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993202/2_stdrvx.png" },
  { name: "Saham Paiement",             logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993202/3_ol6ctk.png" },
  { name: "Deloitte",                    logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993202/4_ktdrje.png" },
  { name: "OCP Fertinagro",             logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993204/20_cl3y8r.png" },
  { name: "EY",                          logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993202/5_qhuo2n.png" },
  { name: "ONMT",                        logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993203/6_c9rrzv.png" },
  { name: "Les Eaux Minérales d'Oulmès", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993203/15_tkcfbh.png" },
  { name: "ANGSPE",                      logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993203/7_rprmhe.png" },
  { name: "Saint-Gobain",                logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993203/8_icnnpi.png" },
  { name: "Attijariwafa Bank",           logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993202/10_b6krpz.png" },
  { name: "Bourse de Casablanca",        logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993203/12_e95w9h.png" },
  { name: "Safran",                      logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993203/13_wivyxy.png" },
  { name: "UIC",                         logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993203/14_xvjdgw.png" },
  { name: "Africa First Assist",         logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993203/11_sjjdk3.png" },
  { name: "Supratours",                  logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993204/16_cqrq0u.png" },
  { name: "Fath Union Sport",            logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993204/17_npqiyo.png" },
  { name: "ONSSA",                       logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993204/18_hn2wlj.png" },
  { name: "Saham Bank",                 logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993202/9_af1zfd.png" },
  { name: "SMIT",                        logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993204/19_shgmar.png" },
  { name: "Maroc Modis",               logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993386/Design_sans_titre_36_tux6b9.png" },
  { name: "Groupe Sapress",              logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780993204/21_qqzucq.png" },
];

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex-shrink-0 w-36 h-14 mx-4 flex items-center justify-center bg-white border border-border rounded-xl shadow-sm hover:border-cta/30 hover:shadow-md transition-all duration-300 cursor-default overflow-hidden">
      <img
        src={logo}
        alt={name}
        className="w-full h-full object-cover rounded-xl"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

export default function LogoMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 bg-white border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold text-secondary/60 uppercase tracking-widest"
        >
          Ils nous font confiance
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-xs text-secondary/40 mt-2"
        >
          Un échantillon de nos success stories.
        </motion.p>
      </div>

      <div className="marquee-container relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {doubled.map((client, i) => (
            <LogoCard key={`${client.name}-${i}`} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
