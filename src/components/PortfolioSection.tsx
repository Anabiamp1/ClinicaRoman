import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/portfolio1.jpg",
  "/portfolio2.jpg",
  "/portfolio3.jpg",
  "/portfolio4.jpg",
  "/portfolio5.jpg",
  "/portfolio6.jpg",
];

const PortfolioSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const goTo = (dir: -1 | 1) => {
    if (selected === null) return;
    const next = (selected + dir + images.length) % images.length;
    setSelected(next);
  };

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Nossos Resultados
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Portfólio
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className="aspect-[4/5] rounded-xl overflow-hidden border border-border cursor-pointer hover:border-primary/30 transition-all duration-300 group"
            >
              <img
                src={src}
                alt={`Resultado ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(-1);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(1);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={selected}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full rounded-2xl overflow-hidden"
            >
              <img
                src={images[selected]}
                alt="Imagem ampliada"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
