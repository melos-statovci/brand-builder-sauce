import { BRAND } from "@/config/brand";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-heading text-xl uppercase text-foreground">
              {BRAND.name}
            </span>
            <p className="font-body text-sm text-muted-foreground mt-1">
              {BRAND.tagline} · {BRAND.location}
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#home" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#shop" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Shop</a>
            <a href="#faq" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
