import { BRAND } from "@/config/brand";
import heroImg from "@/assets/hero-sauce.jpg";
import aboutImg from "@/assets/about-pasta.jpg";
import mildImg from "@/assets/sauce-mild.jpg";
import spicyImg from "@/assets/sauce-spicy.jpg";
import tomatoImg from "@/assets/ingredient-tomatoes.jpg";
import chiliImg from "@/assets/ingredient-chili.jpg";

const gridImages = [heroImg, mildImg, aboutImg, spicyImg, tomatoImg, chiliImg];

const InstagramSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase text-foreground mb-4">
          FOLLOW <span className="text-primary">THE SAUCE</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground">
          @thesauce.ks — Fresh content, bold flavors.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 max-w-5xl mx-auto px-4">
        {gridImages.map((img, i) => (
          <a
            key={i}
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden aspect-square group"
          >
            <img
              src={img}
              alt={`The Sauce Instagram post ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </a>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-foreground text-foreground font-heading text-sm uppercase px-8 py-4 rounded-md hover:bg-foreground hover:text-background transition-colors"
        >
          Follow Us on Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
