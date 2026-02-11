import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const doctors = [
  {
    slug: "doutora-1",
    name: "Dra. Heloisa Miranda",
    cro: "CRO-SP 144.922",
    specialty: "Especialista em Harmonização Orofacial",
    bio: "Dedica-se a realçar a beleza natural de cada paciente com técnicas modernas e resultados harmoniosos.",
    image: "/helo1.jpg",
  },
  {
    slug: "doutora-2",
    name: "Dra. Gabrielle Stumpp",
    cro: "CRO-SP 154.596",
    specialty: "Especialista em Harmonização Orofacial",
    bio: "Apaixonada por estética facial, combina ciência e arte para entregar resultados delicados e personalizados a cada paciente.",
    image: "/gabi1.jpg",
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Conheça
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Nossa Equipe
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center group"
            >
              <Link to={`/equipe/${doc.slug}`}>
                <div className="w-56 h-56 mx-auto mb-6 rounded-full bg-muted border-2 border-primary/20 overflow-hidden group-hover:border-primary/40 transition-colors cursor-pointer">
                  {/* Imagem */}
                  {doc.image ? (
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // se der erro, esconde a img e deixa o fallback aparecer
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : null}

                  {/* Fallback (aparece se não tiver image OU se a img der erro e sumir) */}
                  <div className="w-full h-full flex items-center justify-center">
                    <User size={64} className="text-muted-foreground/40" />
                  </div>
                </div>
              </Link>

              <Link
                to={`/equipe/${doc.slug}`}
                className="hover:text-primary transition-colors"
              >
                <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors mb-1">
                  {doc.name}
                </h3>
              </Link>

              <p className="text-xs tracking-widest uppercase text-primary mb-1">
                {doc.cro}
              </p>

              <p className="text-sm font-medium text-muted-foreground mb-3">
                {doc.specialty}
              </p>

              <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {doc.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
