import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Sparkles, Droplets, Scissors, Zap, ArrowUpRight, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";
import RomanPillar from "@/components/RomanPillar";

const proceduresData: Record<string, {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  duration: string;
  recovery: string;
}> = {
  botox: {
    icon: Syringe,
    title: "Botox",
    subtitle: "Toxina Botulínica",
    description: "O Botox é um dos procedimentos estéticos mais populares e seguros do mundo. Consiste na aplicação de toxina botulínica em pontos estratégicos do rosto para suavizar linhas de expressão e rugas dinâmicas, como as da testa, entre as sobrancelhas e ao redor dos olhos (pés de galinha). O resultado é um aspecto rejuvenescido, natural e harmonioso.",
    benefits: ["Redução de rugas e linhas de expressão", "Prevenção do envelhecimento precoce", "Resultado natural e discreto", "Procedimento rápido e indolor"],
    duration: "15 a 30 minutos",
    recovery: "Sem necessidade de repouso",
  },
  "preenchimento-labial": {
    icon: Droplets,
    title: "Preenchimento Labial",
    subtitle: "Ácido Hialurônico",
    description: "O preenchimento labial com ácido hialurônico é ideal para quem deseja lábios mais volumosos, definidos e hidratados. O procedimento é feito com cânulas ou agulhas ultrafinas, garantindo conforto e precisão. O ácido hialurônico é uma substância naturalmente presente no corpo, proporcionando resultados seguros e reversíveis.",
    benefits: ["Volume e contorno labial definido", "Hidratação profunda dos lábios", "Resultado imediato e natural", "Procedimento seguro e reversível"],
    duration: "20 a 40 minutos",
    recovery: "1 a 3 dias de leve inchaço",
  },
  "lipo-de-papada": {
    icon: Scissors,
    title: "Lipo de Papada",
    subtitle: "Redução de Gordura Submentoniana",
    description: "A lipo enzimática de papada é um procedimento minimamente invasivo que reduz a gordura localizada abaixo do queixo, definindo o contorno facial e melhorando o perfil. Utiliza enzimas que dissolvem as células de gordura de forma gradual e segura, sem necessidade de cirurgia.",
    benefits: ["Definição do contorno facial", "Redução da papada sem cirurgia", "Resultado progressivo e natural", "Melhora do perfil e autoestima"],
    duration: "30 a 45 minutos",
    recovery: "3 a 5 dias de inchaço leve",
  },
  "bioestimuladores-de-colageno": {
    icon: Zap,
    title: "Bioestimuladores de Colágeno",
    subtitle: "Rejuvenescimento Profundo",
    description: "Os bioestimuladores de colágeno são substâncias injetáveis que estimulam a produção natural de colágeno pelo organismo. O tratamento é indicado para combater a flacidez, melhorar a textura da pele e restaurar o volume facial perdido com o envelhecimento. Os resultados são progressivos e duradouros.",
    benefits: ["Estímulo natural do colágeno", "Melhora da firmeza e elasticidade", "Efeito lifting gradual", "Resultados duradouros (até 2 anos)"],
    duration: "30 a 60 minutos",
    recovery: "2 a 5 dias de inchaço moderado",
  },
  "fios-de-pdo": {
    icon: ArrowUpRight,
    title: "Fios de PDO",
    subtitle: "Lifting Não Cirúrgico",
    description: "Os fios de PDO (Polidioxanona) são fios absorvíveis inseridos na pele para promover sustentação e reposicionamento dos tecidos faciais. Ao longo do tempo, estimula a produção de colágeno, melhorando a qualidade da pele e flacidez.",
    benefits: ["Estímulo de colágeno a longo prazo", "Sem cicatrizes", "Resultados naturais e harmoniosos"],
    duration: "30 a 60 minutos",
    recovery: "3 a 7 dias",
  },
  skinbooster: {
    icon: Sparkles,
    title: "Skinbooster",
    subtitle: "Hidratação Profunda",
    description: "O Skinbooster é um tratamento de hidratação profunda da pele realizado com microinjeções de ácido hialurônico de baixa concentração. O procedimento melhora a qualidade, textura e luminosidade da pele, sendo ideal para quem busca um aspecto saudável e viçoso.",
    benefits: ["Hidratação profunda e duradoura", "Melhora da textura e luminosidade", "Redução de linhas finas", "Pele mais saudável e radiante"],
    duration: "20 a 40 minutos",
    recovery: "1 a 2 dias",
  },
};

const ProcedurePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const procedure = slug ? proceduresData[slug] : null;

  if (!procedure) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Procedimento não encontrado</h1>
          <Link to="/" className="text-primary hover:underline">Voltar ao início</Link>
        </div>
      </div>
    );
  }

  const Icon = procedure.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-2xl font-semibold text-foreground tracking-wide">
            Roman
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-16">
        <section className="relative py-24 bg-gradient-to-b from-secondary to-background overflow-hidden">
          {/* Decorative pillars */}
          <RomanPillar className="absolute left-4 md:left-12 top-8 w-10 md:w-14 h-auto text-primary" side="left" />
          <RomanPillar className="absolute right-4 md:right-12 top-8 w-10 md:w-14 h-auto text-primary" side="right" />

          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon size={28} className="text-primary" />
              </div>
              <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
                {procedure.subtitle}
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground">
                {procedure.title}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-light text-lg leading-relaxed text-center mb-16"
            >
              {procedure.description}
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="font-serif text-2xl text-foreground mb-6">Benefícios</h3>
                <ul className="space-y-3">
                  {procedure.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                      <Sparkles size={14} className="text-primary mt-1 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <h3 className="font-serif text-2xl text-foreground mb-6">Informações</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs tracking-wider uppercase text-muted-foreground/70 mb-1">Duração</p>
                    <p className="text-foreground font-light">{procedure.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-muted-foreground/70 mb-1">Recuperação</p>
                    <p className="text-foreground font-light">{procedure.recovery}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 gap-2 text-sm tracking-wider uppercase bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="https://wa.me/5511920651931" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  Agendar este procedimento
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProcedurePage;
