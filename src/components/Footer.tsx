import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import logoWhite from "@/assets/moneywise-logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about", isExternal: false },
      { name: "Pricing", href: "/pricing", isExternal: false },
      { name: "Reviews", href: "/#reviews", isExternal: false },
    ],
    Support: [
      { name: "Contact Us", href: "/contact", isExternal: false },
      { name: "FAQ", href: "/#faq", isExternal: false },
      { name: "Help Center", href: "/help", isExternal: false },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy", isExternal: false },
      { name: "Terms of Service", href: "/terms", isExternal: false },
      { name: "Cookie Policy", href: "/cookies", isExternal: false },
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
              <Link to="/" className="flex items-center mb-4">
                <img src={logoWhite} alt="Moneywise" className="h-[3rem]" />
              </Link>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6 max-w-sm">
                Simple, practical monthly tools to help you stay in control of your spending, plan ahead, and enjoy
                exclusive member savings.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:support@moneywise.com"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  <Mail size={16} />
                  support@moneywise.com
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
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">© {currentYear} Money Wise. All rights reserved.</p>
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
