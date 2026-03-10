import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-heading text-xl md:text-2xl uppercase tracking-tight text-foreground">
          {BRAND.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#shop"
            className="bg-primary text-primary-foreground font-heading text-sm uppercase px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container flex flex-col py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-lg uppercase text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-primary-foreground font-heading text-center text-sm uppercase px-6 py-3 rounded-md mt-2"
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
