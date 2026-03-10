import { BRAND } from "@/config/brand";

const ContactSection = () => {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent("Hello! I have a question about The Sauce.")}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-2xl text-center">
        <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-4">
          GET IN <span className="text-primary">TOUCH</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-10">
          Questions, orders, or just want to say hi? We'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-heading text-sm uppercase px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Message on WhatsApp
          </a>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-foreground text-foreground font-heading text-sm uppercase px-8 py-4 rounded-md hover:bg-foreground hover:text-background transition-colors"
          >
            DM on Instagram
          </a>
        </div>

        <p className="font-body text-sm text-muted-foreground">
          {BRAND.email} · {BRAND.location}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
