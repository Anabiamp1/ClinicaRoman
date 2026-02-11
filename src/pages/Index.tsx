import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ProceduresSection from "@/components/ProceduresSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <ProceduresSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
