"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Crédit Agricole",       logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/10_fu6rms.png" },
  { name: "Chaabi",                logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/8_odr2fc.png" },
  { name: "Saham",                 logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/9_ehas1y.png" },
  { name: "Bourse de Casablanca",  logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907848/7_lronef.png" },
  { name: "CDG",                   logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/1_cqrp5u.png" },
  { name: "Deloitte",              logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/2_a3jrva.png" },
  { name: "EY",                    logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/3_urfjbo.png" },
  { name: "Novec",                 logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907848/4_hnzcvk.png" },
  { name: "Sapress",               logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/5_dwolfq.png" },
  { name: "Air France",            logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907848/6_k7xsc0.png" },
  { name: "McDonald's",            logo: "https://res.cloudinary.com/dmutnjgp8/image/upload/v1780907847/11_hdgv43.png" },
];

function LogoCard({ name, logo }: { name: string; logo: string }) {
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
            <LogoCard key={`${client.name}-${i}`} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
}
