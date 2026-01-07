import { BookOpen, Gift, HeadphonesIcon, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const features = [
  {
    icon: BookOpen,
    title: "Explore the Magazine",
    description: "Get instant access to our monthly e-mag filled with planners, trackers, checklists, challenges, and practical tools designed to help you manage your month with confidence.",
    cta: "Free Trial",
    href: "#",
  },
  {
    icon: Gift,
    title: "Unlock Exclusive Promotions",
    description: "Enjoy handpicked discount codes, freebies, and early deals across groceries, fashion, home and lifestyle updated every month.",
    cta: "Latest Promotions",
    href: "#",
  },
  {
    icon: HeadphonesIcon,
    title: "Need Help? We're Here.",
    description: "Get quick support for anything related to your membership or dashboard access.",
    cta: "Contact Us",
    href: "#",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Features
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need to Stay in Control
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple, practical monthly tools to help you manage your spending and enjoy exclusive savings.
            </p>
          </FadeUp>
        </div>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="premium-card group cursor-pointer h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:shadow-glow">
                  <feature.icon className="w-7 h-7 text-accent transition-colors duration-300 group-hover:text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA Link */}
                <a
                  href={feature.href}
                  className="inline-flex items-center text-accent font-semibold group/link"
                >
                  {feature.cta}
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Features;
