import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, BookOpen, MessageCircle, CreditCard, Settings, Shield, HelpCircle } from "lucide-react";
import SEO from "@/components/SEO";

const helpCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of using Money Wise",
    articles: ["Creating your account", "Setting up your first budget", "Connecting your goals"],
  },
  {
    icon: CreditCard,
    title: "Billing & Subscription",
    description: "Manage your subscription and payments",
    articles: ["Subscription plans", "Payment methods", "Cancellation policy"],
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Customize your Money Wise experience",
    articles: ["Profile settings", "Notification preferences", "Data export"],
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Keep your account and data safe",
    articles: ["Two-factor authentication", "Password security", "Data protection"],
  },
];

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Help Center - FAQs & Support Articles"
        description="Find answers to common questions about Money Wise. Browse help articles on getting started, billing, account settings, security, and more."
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <FadeUp>
              <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
                Help Center
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How can we help you?
              </h1>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Find answers to common questions or get in touch with our support team.
              </p>
            </FadeUp>

            {/* Search Bar */}
            <FadeUp delay={0.2}>
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
            </FadeUp>
          </div>

          {/* Help Categories */}
          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16" staggerDelay={0.1}>
            {helpCategories.map((category) => (
              <StaggerItem key={category.title}>
                <div className="premium-card h-full group hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <category.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {category.description}
                      </p>
                      <ul className="space-y-2">
                        {category.articles.map((article) => (
                          <li key={article}>
                            <button className="text-sm text-accent hover:underline text-left">
                              {article}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Contact Support */}
          <FadeUp delay={0.3}>
            <div className="text-center bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Still need help?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our support team is here to help you with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/#faq">View FAQ</Link>
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
