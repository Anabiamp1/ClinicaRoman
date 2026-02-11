import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-3">
            Fale Conosco
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Contato &amp; Localização
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Entre em contato
              </h3>

              <div className="space-y-5">
                <a
                  href="https://wa.me/5511920651931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-muted-foreground/70">
                      WhatsApp
                    </p>
                    <p className="text-foreground font-light">
                      +55 (11) 92065-1931
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:clinicaromanalphaville@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-muted-foreground/70">
                      E-mail
                    </p>
                    <p className="text-foreground font-light">
                      clinicaromanalphaville@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/clinicaroman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-muted-foreground/70">
                      Instagram
                    </p>
                    <p className="text-foreground font-light">
                      @clinicaroman
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-muted-foreground/70">
                      Endereço
                    </p>
                    <p className="text-foreground font-light">
                      Alameda Rio Negro, nº 967 - Sala 128
                      <br />
                      Barueri, SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                Agendar pelo WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* MAPA GOOGLE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.982353323948!2d-46.8490055!3d-23.497145099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0341221fd6f9%3A0x12aaed5f009df1de!2sCl%C3%ADnica%20Roman!5e0!3m2!1spt-BR!2sbr!4v1770843750073!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
