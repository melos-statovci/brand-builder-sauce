import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/config/brand";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm transition-colors duration-300 ${
        isScrolled ? "bg-primary/95 border-primary/70 shadow-md" : "bg-background/95 border-border"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          className={`font-heading text-xl md:text-2xl uppercase tracking-tight transition-colors ${
            isScrolled ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {BRAND.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-semibold uppercase tracking-widest transition-colors ${
                isScrolled
                  ? "text-primary-foreground/85 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#shop"
            className={`font-heading text-sm uppercase px-6 py-2.5 rounded-md transition-colors ${
              isScrolled
                ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                : "bg-primary text-primary-foreground hover:opacity-90"
            }`}
          >
            Order Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? "text-primary-foreground" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className={`md:hidden border-t ${isScrolled ? "bg-primary border-primary/70" : "bg-background border-border"}`}>
          <nav className="container flex flex-col py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-lg uppercase transition-colors ${
                  isScrolled ? "text-primary-foreground/90 hover:text-primary-foreground" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setMobileOpen(false)}
              className={`font-heading text-center text-sm uppercase px-6 py-3 rounded-md mt-2 transition-colors ${
                isScrolled
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
