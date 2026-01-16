import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/motion";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service - User Agreement"
        description="Read MoneyWizee terms of service. Understand your rights, subscription terms, billing policies, and our commitment to providing quality financial tools."
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms of Service
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
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By accessing and using MoneyWizee services, you accept and agree to be bound by the 
                  terms and provisions of this agreement. If you do not agree to abide by these terms, 
                  please do not use our services.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.2}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Description of Service
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MoneyWizee provides financial planning tools, budget trackers, and exclusive member 
                  discounts to help you manage your personal finances more effectively. Our services 
                  are available through our website and mobile applications.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.25}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. User Accounts
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You are responsible for maintaining the confidentiality of your account and password. 
                  You agree to accept responsibility for all activities that occur under your account. 
                  You must notify us immediately of any unauthorized use of your account.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.3}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Subscription and Billing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our subscription service is billed monthly at £3.99. You may cancel your subscription 
                  at any time. New members receive a free 1-month trial. We will notify you before 
                  charging your payment method at the end of the trial period.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.35}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, features, and functionality of our services are owned by MoneyWizee and 
                  are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.4}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MoneyWizee shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of or inability to use our services.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.45}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions regarding these Terms of Service, please contact us at{" "}
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

export default TermsOfService;
