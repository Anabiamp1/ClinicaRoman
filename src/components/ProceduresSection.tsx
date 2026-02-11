import { motion } from "framer-motion";
import { Sparkles, Droplets, Scissors, Zap, ArrowUpRight, Syringe } from "lucide-react";
import { Link } from "react-router-dom";

const procedures = [
  {
    icon: Syringe,
    title: "Botox",
    slug: "botox",
    desc: "Suaviza linhas de expressão e rugas, proporcionando um aspecto jovem e natural ao rosto.",
  },
  {
    icon: Droplets,
    title: "Preenchimento Labial",
    slug: "preenchimento-labial",
    desc: "Volume e contorno labial com ácido hialurônico para lábios harmoniosos e naturais.",
  },
  {
    icon: Scissors,
    title: "Lipo de Papada",
    slug: "lipo-de-papada",
    desc: "Reduz a gordura localizada abaixo do queixo, definindo o contorno facial.",
  },
  {
    icon: Zap,
    title: "Bioestimuladores de Colágeno",
    slug: "bioestimuladores-de-colageno",
    desc: "Estimulam a produção natural de colágeno, devolvendo firmeza e viçosidade à pele.",
  },
  {
    icon: ArrowUpRight,
    title: "Fios de PDO",
    slug: "fios-de-pdo",
    desc: "Reposiciona tecidos e promove sustentação facial imediata, estimulando colágeno e melhorando a flacidez.",
  },
  {
    icon: Sparkles,
    title: "Skinbooster",
    slug: "skinbooster",
    desc: "Hidratação profunda da pele com microinjeções de ácido hialurônico para luminosidade.",
  },
];

const ProceduresSection = () => {
  return (
    <section id="procedimentos" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Tratamentos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Nossos Procedimentos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((proc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link
                to={`/procedimento/${proc.slug}`}
                className="block bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <proc.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {proc.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {proc.desc}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs tracking-wider uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <ArrowUpRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
