"use client";

import { motion } from "framer-motion";

const clients = [
  // Banques & Assurances
  { name: "Crédit Agricole",       abbr: "CA",  logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/10_fu6rms.png" },
  { name: "Chaabi",                abbr: "CHB", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/8_odr2fc.png" },
  { name: "Saham",                 abbr: "SAH", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/9_ehas1y.png" },
  { name: "Bourse de Casablanca",  abbr: "BDC", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907848/7_lronef.png" },
  { name: "CDG",                   abbr: "CDG", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/1_cqrp5u.png" },
  // Services & Autres
  { name: "Deloitte",              abbr: "DLT", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/2_a3jrva.png" },
  { name: "EY",                    abbr: "EY",  logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/3_urfjbo.png" },
  { name: "Novec",                 abbr: "NVC", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907848/4_hnzcvk.png" },
  { name: "Sapress",               abbr: "SPR", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/5_dwolfq.png" },
  { name: "Air France",            abbr: "AF",  logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907848/6_k7xsc0.png" },
  { name: "Brinks",                abbr: "BRK" },
  { name: "Maroc Clear",           abbr: "MC"  },
  // Secteur public
  { name: "CNSS",                  abbr: "CNS" },
  { name: "MAP",                   abbr: "MAP" },
  { name: "SOREC",                 abbr: "SRC" },
  { name: "AMDIE",                 abbr: "AMD" },
  { name: "Marsa Maroc",           abbr: "MM"  },
  { name: "Morocco Foodex",        abbr: "MFX" },
  { name: "ONSSA",                 abbr: "ONS" },
  // Industrie
  { name: "Saint-Gobain",          abbr: "SG"  },
  { name: "Safran",                abbr: "SFR" },
  { name: "Atlas",                 abbr: "ATL" },
  { name: "Hikma",                 abbr: "HKM" },
  { name: "AVON",                  abbr: "AVN" },
  { name: "Triumph",               abbr: "TRI" },
  // Education & Santé
  { name: "UEMF",                  abbr: "UEM" },
  { name: "HEM",                   abbr: "HEM" },
  { name: "IMA",                   abbr: "IMA" },
  // Holding
  { name: "Al Mada",               abbr: "ALM" },
  { name: "Soremar",               abbr: "SRM" },
  { name: "Zinelec Group",         abbr: "ZIN" },
  { name: "ARMA",                  abbr: "ARM" },
  // Négoce
  { name: "Beko",                  abbr: "BKO" },
  { name: "Label Vie",             abbr: "LBV" },
  { name: "Legrand",               abbr: "LGR" },
  { name: "MAN",                   abbr: "MAN" },
  { name: "CASEM",                 abbr: "CSM" },
  { name: "Alumetaux",             abbr: "ALX" },
  { name: "McDonald's",            abbr: "MCD", logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/11_hdgv43.png" },
];

function LogoCard({ name, abbr, logo }: { name: string; abbr: string; logo?: string }) {
  if (logo) {
    return (
      <div className="flex-shrink-0 w-36 h-14 mx-4 flex items-center justify-center bg-white border border-border rounded-xl shadow-sm grayscale hover:grayscale-0 hover:border-cta/30 hover:shadow-md transition-all duration-300 cursor-default p-3">
        <img
          src={logo}
          alt={name}
          className="max-w-full max-h-full w-auto h-auto object-contain"
          loading="lazy"
          draggable={false}
        />
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-36 h-14 mx-4 flex items-center justify-center bg-white border border-border rounded-xl shadow-sm grayscale hover:grayscale-0 hover:border-cta/30 hover:shadow-md transition-all duration-300 cursor-default group">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-slate-100 group-hover:bg-cta/10 rounded-md flex items-center justify-center transition-colors duration-300">
          <span className="text-[9px] font-bold text-secondary group-hover:text-cta transition-colors duration-300 tracking-wider">
            {abbr}
          </span>
        </div>
        <span className="text-xs font-semibold text-secondary group-hover:text-primary transition-colors duration-300 leading-tight max-w-[70px]">
          {name}
        </span>
      </div>
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
      </div>

      <div className="marquee-container relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {doubled.map((client, i) => (
            <LogoCard key={`${client.abbr}-${i}`} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
