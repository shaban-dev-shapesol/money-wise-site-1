import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/ui/motion";
import SEO from "@/components/SEO";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "support@moneywise.com",
      detail: "We'll respond within 24 hours",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Available in your dashboard",
      detail: "For members only",
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Mon - Fri, 9am - 6pm GMT",
      detail: "Weekend support via email",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us - Get Support & Help"
        description="Have questions about Money Wise? Contact our friendly support team. We respond within 24 hours. Email, live chat, and help center available."
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16">
            <SlideInLeft>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      rows={5}
                    />
                  </div>
                  <Button variant="accent" size="xl" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Other Ways to Reach Us
                </h2>
                {contactInfo.map((info) => (
                  <div 
                    key={info.title}
                    className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-foreground">{info.description}</p>
                      <p className="text-sm text-muted-foreground">{info.detail}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-primary rounded-2xl p-8 text-primary-foreground mt-8">
                  <h3 className="text-xl font-bold mb-3">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-primary-foreground/70 mb-4">
                    Find quick answers to common questions in our FAQ section.
                  </p>
                  <Button 
                    variant="secondary"
                    asChild
                  >
                    <a href="/#faq">View FAQ</a>
                  </Button>
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

export default Contact;
