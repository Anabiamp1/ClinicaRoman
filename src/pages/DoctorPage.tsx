import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MessageCircle,
  GraduationCap,
  Award,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import RomanPillar from "@/components/RomanPillar";

const doctorsData: Record<
  string,
  {
    name: string;
    cro: string;
    specialty: string;
    bio: string;
    formation: string[];
    expertise: string[];
    philosophy: string;
    image: string;
  }
> = {
  "doutora-1": {
    name: "Dra. Heloisa Miranda",
    cro: "CRO-SP 144.922",
    specialty: "Especialista em Harmonização Facial",
    bio: "Com experiência na área de harmonização orofacial, dedica-se a realçar a beleza natural de cada paciente com técnicas modernas e resultados harmoniosos. Sua abordagem combina ciência avançada com um olhar artístico apurado, garantindo resultados únicos e personalizados.",
    formation: [
      "Graduação em Odontologia — Universidade Nove de Julho",
      "Especialização em IOA - Instituto de Orofacial das Américas",
    ],
    expertise: [
      "Botox",
      "Preenchimento Labial",
      "Bioestimuladores de Colágeno",
      "Fios de PDO",
      "Rinomodelação",
      "Full Face",
    ],
    philosophy:
      "Acredito que a verdadeira beleza está na harmonia. Meu objetivo é valorizar o que cada paciente tem de mais bonito, com resultados naturais e que respeitem a individualidade de cada rosto.",
    image: "/helo1.jpg",
  },

  "doutora-2": {
    name: "Dra. Gabrielle Stumpp",
    cro: "CRO-SP 154.596",
    specialty: "Cirurgiã Dentista",
    bio: "Apaixonada por estética facial, combina ciência e arte para entregar resultados delicados e personalizados a cada paciente. Com formação contínua nas mais avançadas técnicas de harmonização, busca sempre a excelência e o cuidado humanizado em cada atendimento.",
    formation: [
      "Graduação em Odontologia — Universidade Nove de Julho",
      "Referência em Harmonização Facial",
    ],
    expertise: [
      "Botox",
      "Preenchimento Labial",
      "Bioestimuladores de Colágeno",
      "Fios de PDO",
      "Rinomodelação",
      "Full Face",
    ],
    philosophy:
      "Realçando sua beleza sem exageros, acredito que a harmonização facial deve ser personalizada, respeitando a essência de cada pessoa. Meu compromisso é entregar resultados naturais que realcem o melhor de cada paciente.",
    image: "/gabi1.jpg",
  },
};

const DoctorPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const doctor = slug ? doctorsData[slug] : null;

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">
            Profissional não encontrada
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-serif text-2xl font-semibold text-foreground tracking-wide"
          >
            Roman
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>
      </nav>

      <main className="pt-16">
        <section className="relative py-24 bg-gradient-to-b from-secondary to-background overflow-hidden">
          <RomanPillar
            className="absolute left-4 md:left-12 top-8 w-10 md:w-14 h-auto text-primary"
            side="left"
          />
          <RomanPillar
            className="absolute right-4 md:right-12 top-8 w-10 md:w-14 h-auto text-primary"
            side="right"
          />

          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              {/* FOTO */}
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-muted border-2 border-primary/20 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-2">
                {doctor.name}
              </h1>

              <p className="text-xs tracking-widest uppercase text-primary mb-1">
                {doctor.cro}
              </p>

              <p className="text-sm font-medium text-muted-foreground">
                {doctor.specialty}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-light text-lg leading-relaxed text-center mb-16"
            >
              {doctor.bio}
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap size={20} className="text-primary" />
                  <h3 className="font-serif text-2xl text-foreground">
                    Formação
                  </h3>
                </div>

                <ul className="space-y-3">
                  {doctor.formation.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground font-light"
                    >
                      <Award
                        size={14}
                        className="text-primary mt-1 shrink-0"
                      />
                      {item}
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
                <div className="flex items-center gap-3 mb-6">
                  <Award size={20} className="text-primary" />
                  <h3 className="font-serif text-2xl text-foreground">
                    Especialidades
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card rounded-2xl p-8 border border-border mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart size={20} className="text-primary" />
                <h3 className="font-serif text-2xl text-foreground">
                  Filosofia
                </h3>
              </div>

              <p className="text-muted-foreground font-light italic leading-relaxed">
                "{doctor.philosophy}"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
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
                  Agendar com {doctor.name.split(" ")[0]}{" "}
                  {doctor.name.split(" ")[1]}
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DoctorPage;
