import { Mail } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Reviews", href: "/#reviews" },
    ],
    Support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/#faq" },
      { name: "Help Center", href: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer */}
        <FadeUp>
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">F</span>
                </div>
                <span className="font-bold text-xl">
                  FocusMembers
                </span>
              </a>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6 max-w-sm">
                Simple, practical monthly tools to help you stay in control of your spending, plan ahead, and enjoy exclusive member savings.
              </p>
              <div className="space-y-2">
                <a href="mailto:support@focusmembers.com" className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  <Mail size={16} />
                  support@focusmembers.com
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {currentYear} FocusMembers. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/40 text-sm">
              £3.99/month • Cancel Anytime • Free 1-Month Trial
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
