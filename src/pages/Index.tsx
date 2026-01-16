import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import SpecialOffer from "@/components/SpecialOffer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="MoneyWizee | Budget Tools & Exclusive Member Savings"
        description="Join 45,000+ members saving smarter. Get monthly budget planners, expense trackers, exclusive discount codes & member-only perks. Start free trial today."
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <SpecialOffer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
