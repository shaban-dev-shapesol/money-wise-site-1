import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Check } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/ui/motion";

const SpecialOffer = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
                <Sparkles size={16} className="text-accent" />
                <span className="text-accent text-sm font-semibold">Limited Time Offer</span>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Special Member Offer
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
                Unlock exclusive member-only discount vouchers, limited-time deals, and monthly freebies — available only inside your FocusMembers dashboard.
              </p>
            </FadeUp>

            {/* Price */}
            <ScaleIn delay={0.3}>
              <div className="flex flex-col items-center gap-2 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary-foreground">£3.99</span>
                  <span className="text-primary-foreground/60">/month</span>
                </div>
                <span className="text-accent font-semibold">after a free 1-month trial</span>
              </div>
            </ScaleIn>

            {/* Benefits */}
            <FadeUp delay={0.4}>
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  "50% off when you subscribe today",
                  "Expert-level content",
                  "Cancel anytime",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10"
                  >
                    <Check size={16} className="text-accent" />
                    <span className="text-primary-foreground/80 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Urgency */}
            <FadeUp delay={0.5}>
              <div className="flex items-center justify-center gap-2 mb-8">
                <Clock size={18} className="text-accent" />
                <span className="text-accent font-medium">Offer ends soon — secure your discount now!</span>
              </div>
            </FadeUp>

            {/* CTA */}
            <FadeUp delay={0.6}>
              <Button variant="accent" size="xl" className="group">
                Start Your Free Trial
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
