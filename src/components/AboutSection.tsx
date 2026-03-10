import aboutImage from "@/assets/about-pasta.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="overflow-hidden rounded-lg">
          <img
            src={aboutImage}
            alt="Pasta with rich tomato sauce"
            className="w-full h-[400px] md:h-[560px] object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] text-foreground mb-6">
            CRAFTED<br />
            WITH <span className="text-primary">PASSION</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
            The Sauce was born in a Prishtinë kitchen, from a simple belief: great food starts with great sauce. Every jar is handcrafted in small batches using sun-ripened tomatoes, fresh garlic, aromatic basil, and the finest chili peppers.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            No preservatives. No shortcuts. Just real ingredients, slow-cooked to perfection. This isn't factory-made — it's made with love, for people who taste the difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
