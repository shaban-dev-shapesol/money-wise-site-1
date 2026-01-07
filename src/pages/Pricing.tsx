import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/ui/motion";

const Pricing = () => {
  const features = [
    "Monthly Budget Planner",
    "Exclusive Member Discounts",
    "Savings Goal Tracker",
    "Financial Tips & Guides",
    "Priority Support",
    "Cancel Anytime",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-muted-foreground">
                One plan, everything included. Start with a free trial and cancel anytime.
              </p>
            </div>
          </FadeUp>

          <ScaleIn delay={0.2}>
            <div className="max-w-md mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-premium">
                <div className="text-center mb-8">
                  <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Most Popular
                  </span>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    FocusMembers Pro
                  </h2>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-foreground">£3.99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Billed monthly • Free 1-month trial
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check size={12} className="text-accent" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="accent" size="xl" className="w-full">
                  Start Free Trial
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  No credit card required
                </p>
              </div>
            </div>
          </ScaleIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
