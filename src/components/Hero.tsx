import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, Shield } from "lucide-react";
import { motion } from "framer-motion";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import CountUpStat from "@/components/CountUpStat";
const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" style={{ background: 'var(--hero-gradient)' }}>
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <Users size={16} className="text-accent" />
            <span className="text-accent text-sm font-medium">Join <CountUpStat end={45000} suffix="+" duration={2000} /> Members</span>
          </motion.div>
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6"
          >
            Smarter Money Management Made Simple
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8"
          >
            Get monthly money-management tools, exclusive deals, and member-only perks that help you stay organised, save smarter, and plan better.
          </motion.p>

          {/* Price Tag */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-10"
          >
            <span className="text-primary-foreground font-bold text-2xl">From £3.99/month</span>
            <span className="text-primary-foreground/60">•</span>
            <span className="text-accent font-semibold">Try 1 month free</span>
            <span className="text-primary-foreground/60">•</span>
            <span className="text-primary-foreground/70 italic">Cancel anytime</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="accent" size="lg" className="w-full sm:w-auto group">
              Start Your Free Trial
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-16"
          >
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Shield size={20} className="text-accent" />
              <span className="text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Star size={20} className="text-accent" />
              <span className="text-sm"><CountUpStat end={4.9} decimals={1} duration={2000} />/5 Member Rating</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Users size={20} className="text-accent" />
              <span className="text-sm"><CountUpStat end={45000} suffix="+" duration={2000} /> Active Members</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
            
            {/* Dashboard Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
              <img 
                src={dashboardMockup} 
                alt="Money Wise Dashboard - Budget tracker, discount codes, planner and savings goals" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="relative z-10 -mt-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
