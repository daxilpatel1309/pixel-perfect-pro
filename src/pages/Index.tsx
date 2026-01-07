import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LogoMarquee />
      <Features />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <MarqueeStrip />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
