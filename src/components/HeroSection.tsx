import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import RomanPillar from "@/components/RomanPillar";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/15" />

      {/* Roman pillars */}
      <RomanPillar className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 w-10 md:w-14 h-auto text-primary" side="left" />
      <RomanPillar className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 w-10 md:w-14 h-auto text-primary" side="right" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl font-light mb-4"
        >
          <span className="text-foreground">Clínica </span><span className="text-primary">Roman</span>
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-5xl md:text-7xl font-light text-foreground leading-tight mb-6"
        >
          Realce sua{" "}
          <span className="italic text-primary">beleza natural</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground font-light text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          Tratamentos estéticos com técnica, delicadeza e resultados que
          valorizam o que você tem de mais bonito.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 gap-2 text-sm tracking-wider uppercase bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a
              href="https://wa.me/5511920651931"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Agende sua consulta
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
