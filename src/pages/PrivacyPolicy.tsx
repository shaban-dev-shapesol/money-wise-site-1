import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/motion";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy - How We Protect Your Data"
        description="Learn how MoneyWizee collects, uses, and protects your personal information. Your privacy and data security are our top priority."
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
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
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support. This may include your name, email address, 
                  payment information, and any other information you choose to provide.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.2}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, send you technical notices and support messages, and respond 
                  to your comments and questions.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.25}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties. 
                  This does not include trusted third parties who assist us in operating our website, 
                  conducting our business, or servicing you, as long as those parties agree to keep 
                  this information confidential.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.3}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the Internet is 100% secure.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.35}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to access, update, or delete your personal information at any time. 
                  You can do this by logging into your account or by contacting us directly.
                </p>
              </section>
            </FadeUp>

            <FadeUp delay={0.4}>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;
