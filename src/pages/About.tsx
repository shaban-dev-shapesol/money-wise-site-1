import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Users, Heart } from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/ui/motion";
import CountUpStat from "@/components/CountUpStat";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower individuals to take control of their finances with simple, practical tools that make budgeting accessible to everyone.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A world where financial stress is minimized and everyone has the knowledge and tools to build a secure future.",
    },
    {
      icon: Users,
      title: "Our Community",
      description:
        "We're building a community of like-minded individuals who support each other on their financial journey.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Transparency, simplicity, and genuine care for our members' success drive everything we do.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Money Wise</h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to make financial planning simple, accessible, and rewarding for everyone.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {values.map((value, index) => (
              <FadeUp key={value.title} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why We Started</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Money Wise was born from a simple observation: managing money shouldn't be complicated. Yet, for
                    many people, it feels overwhelming and stressful.
                  </p>
                  <p>
                    We created a membership that combines practical budgeting tools with exclusive savings
                    opportunities, making it easier than ever to stay on top of your finances.
                  </p>
                  <p>
                    Our goal is to help you spend less time worrying about money and more time enjoying life, knowing
                    you're in control.
                  </p>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="bg-primary rounded-2xl p-10 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">
                      <CountUpStat end={45} suffix="K+" duration={2000} />
                    </div>
                    <div className="text-primary-foreground/70">Active Members</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">
                      <CountUpStat end={2} prefix="£" suffix="M" duration={2000} />
                    </div>
                    <div className="text-primary-foreground/70">Member Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">
                      <CountUpStat end={4.9} decimals={1} duration={2000} />
                      /5
                    </div>
                    <div className="text-primary-foreground/70">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">
                      <CountUpStat end={50} suffix="+" duration={2000} />
                    </div>
                    <div className="text-primary-foreground/70">Partner Brands</div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
