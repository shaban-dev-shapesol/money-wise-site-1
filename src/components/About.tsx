import { Target, Eye } from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/ui/motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <SlideInLeft>
            <div>
              <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                MoneyWizee
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                MoneyWizee delivers simple, practical monthly tools to help you stay in control of your spending, plan ahead, and enjoy exclusive member savings — all in one place.
              </p>

              {/* Mission & Vision Cards */}
              <div className="space-y-4">
                <div className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-premium-lg hover:border-accent/20">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-accent">
                    <Target className="w-6 h-6 text-accent transition-colors duration-300 group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Our Mission</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To make everyday money-management easier through helpful tools and curated monthly perks.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-premium-lg hover:border-accent/20">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-accent">
                    <Eye className="w-6 h-6 text-accent transition-colors duration-300 group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Our Vision</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A community empowered with clarity, smart habits, and confidence in their financial decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideInLeft>

          {/* Right Visual */}
          <SlideInRight>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-premium-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                      <span className="text-accent text-4xl font-bold">M</span>
                    </div>
                    <h3 className="text-primary-foreground text-2xl font-bold mb-2">MoneyWizee</h3>
                    <p className="text-primary-foreground/70">Your Financial Companion</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default About;
