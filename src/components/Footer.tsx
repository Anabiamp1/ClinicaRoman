import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl font-light mb-1">
              <span className="text-background">Clínica </span><span className="text-gold-light">Roman</span>
            </p>
            <p className="text-xs tracking-wider uppercase text-background/50">
              Harmonização Orofacial
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5511920651931"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://instagram.com/clinicaroman"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:clinicaromanalphaville@gmail.com"
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-gold-light hover:text-gold-light transition-colors"
              aria-label="E-mail"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Roman. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
