import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/ui/motion";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <ScaleIn>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent/80" />
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
              <FadeUp>
                <span className="inline-block text-accent-foreground/80 text-sm font-semibold tracking-wider uppercase mb-4">
                  Become a Member
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-foreground mb-6 max-w-3xl mx-auto">
                  Discover Smarter Tools & Exclusive Offers
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-accent-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                  Join thousands of members who are taking control of their finances with monthly resources that keep you on track.
                </p>
              </FadeUp>

              {/* Price */}
              <FadeUp delay={0.3}>
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                  <span className="text-accent-foreground font-bold text-xl">£3.99/month</span>
                  <span className="text-accent-foreground/60">•</span>
                  <span className="text-accent-foreground/80">Free 1-Month Trial</span>
                  <span className="text-accent-foreground/60">•</span>
                  <span className="text-accent-foreground/80">Cancel Anytime</span>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <Button variant="cta-inverse" size="xl" className="group">
                  Join Now
                  <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </FadeUp>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default FinalCTA;
