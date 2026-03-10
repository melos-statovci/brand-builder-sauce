import heroImage from "@/assets/hero-sauce.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 md:py-0">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] text-foreground mb-6">
            BOLD<br />
            FLAVOR,<br />
            <span className="text-primary">FRESHLY</span><br />
            MADE.
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0 mb-8">
            Premium handcrafted sauce from Prishtinë. Made with real ingredients, real passion, and zero compromise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#shop"
              className="bg-primary text-primary-foreground font-heading text-sm uppercase px-8 py-4 rounded-md hover:opacity-90 transition-opacity inline-block text-center"
            >
              Buy Now
            </a>
            <a
              href="#shop"
              className="border-2 border-foreground text-foreground font-heading text-sm uppercase px-8 py-4 rounded-md hover:bg-foreground hover:text-background transition-colors inline-block text-center"
            >
              View Products
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={heroImage}
            alt="The Sauce premium handcrafted tomato sauce jar surrounded by fresh tomatoes, chili peppers, garlic and basil"
            className="w-full h-auto rounded-lg"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
