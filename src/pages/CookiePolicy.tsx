import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/motion";
import SEO from "@/components/SEO";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie Policy - How We Use Cookies"
        description="Learn about the cookies MoneyWizee uses to improve your experience. Understand cookie types, purposes, and how to manage your preferences."
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Cookie Policy
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-muted-foreground mb-8">
              Last updated: January 8, 2026
            </p>
          </FadeUp>

          <div className="prose prose-lg max-w-none">
            <FadeUp delay={0.15}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. What Are Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when 
                  you visit a website. They are widely used to make websites work more efficiently and 
                  provide information to the owners of the site.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.2}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies to understand how you use our website, remember your preferences, 
                  and improve your overall experience. We also use cookies to analyze site traffic 
                  and personalize content.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.25}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Types of Cookies We Use
                </h2>
                <div className="text-muted-foreground leading-relaxed mb-4">
                  <p className="mb-3"><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly.</p>
                  <p className="mb-3"><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website.</p>
                  <p className="mb-3"><strong className="text-foreground">Functional Cookies:</strong> Remember your preferences and settings.</p>
                  <p><strong className="text-foreground">Marketing Cookies:</strong> Used to deliver relevant advertisements.</p>
                </div>
              </section>
            </FadeUp>

            <FadeUp delay={0.3}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Managing Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can set 
                  your browser to refuse cookies or delete certain cookies. However, if you block 
                  cookies, some features of our website may not function properly.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.35}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Third-Party Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use third-party services that place cookies on your device. These third parties 
                  have their own privacy policies and we encourage you to read them.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.4}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Updates to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page with an updated revision date.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.45}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our use of cookies, please contact us at{" "}
                  <a href="mailto:support@moneywise.com" className="text-accent hover:underline">
                    support@moneywise.com
                  </a>
                </p>
              </section>
            </FadeUp>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
