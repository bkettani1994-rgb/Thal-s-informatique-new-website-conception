"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight as ChevronRightIcon, Camera, ZoomIn, ImagePlus } from "lucide-react";

export type GalleryImage = {
  src?: string;
  alt: string;
  caption?: string;
};

export default function EventGallery({
  images,
  title = "Notre présence en images",
  subtitle,
}: {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <section className="py-20 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 text-cta text-sm font-semibold uppercase tracking-widest">
            <Camera size={16} /> Galerie
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2">{title}</h2>
          {subtitle && <p className="text-secondary mt-2 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.06 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer border border-border bg-white ${
                i % 5 === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              {img.src ? (
                <>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-semibold line-clamp-1">{img.caption ?? img.alt}</span>
                    <ZoomIn size={16} />
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-50 to-blue-50 text-slate-400 group-hover:text-cta transition-colors duration-300">
                  <ImagePlus size={28} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-medium text-center px-2">{img.caption ?? img.alt}</span>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
            onClick={close}
          >
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X size={28} />
            </button>
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-3 md:left-6 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Précédent"
                >
                  <ChevronLeft size={36} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-3 md:right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Suivant"
                >
                  <ChevronRightIcon size={36} />
                </button>
              </>
            )}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              {active.src ? (
                <img
                  src={active.src}
                  alt={active.alt}
                  className="w-full max-h-[80vh] object-contain rounded-xl mx-auto"
                />
              ) : (
                <div className="w-full aspect-video max-h-[80vh] rounded-xl bg-gradient-to-br from-slate-800 to-primary flex flex-col items-center justify-center gap-3 text-white/60">
                  <ImagePlus size={40} />
                  <span className="text-sm">{active.caption ?? active.alt}</span>
                </div>
              )}
              <p className="text-white/70 text-center text-sm mt-4">{active.caption ?? active.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
