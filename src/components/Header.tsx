import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // On non-home pages, always use scrolled styling
  const useScrolledStyle = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features", isHash: true },
    { name: "About", href: "/about", isHash: false },
    { name: "Pricing", href: "/pricing", isHash: false },
    { name: "Contact", href: "/contact", isHash: false },
  ];

  const handleHashNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (isHomePage) {
        // Already on home, just scroll
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
      // If not on home, Link will navigate, then scroll happens via browser
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useScrolledStyle
          ? "glass shadow-premium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-accent-foreground font-bold text-lg">F</span>
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${useScrolledStyle ? "text-foreground" : "text-primary-foreground"}`}>
              FocusMembers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isHash ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleHashNavigation(link.href)}
                  className={`transition-colors duration-200 text-sm font-medium animated-underline ${
                    useScrolledStyle 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-200 text-sm font-medium animated-underline ${
                    useScrolledStyle 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={useScrolledStyle ? "text-muted-foreground" : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"}
              asChild
            >
              <Link to="/contact">Contact</Link>
            </Button>
            <Button variant="accent" size="sm">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${useScrolledStyle ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in bg-background rounded-xl p-4 shadow-lg border border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleHashNavigation(link.href)}
                  className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start text-foreground" asChild>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </Button>
                <Button variant="accent" size="sm">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
