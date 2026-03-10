import tomatoesImg from "@/assets/ingredient-tomatoes.jpg";
import garlicImg from "@/assets/ingredient-garlic.jpg";
import chiliImg from "@/assets/ingredient-chili.jpg";

const ingredients = [
  {
    title: "FRESH TOMATOES",
    description: "Sun-ripened, hand-selected tomatoes form the rich, velvety base of every jar.",
    image: tomatoesImg,
    alt: "Fresh ripe tomatoes with water droplets",
  },
  {
    title: "RICH GARLIC",
    description: "Aromatic garlic slow-cooked to release deep, savory flavor in every spoonful.",
    image: garlicImg,
    alt: "Fresh garlic cloves",
  },
  {
    title: "BOLD CHILI",
    description: "Carefully selected chili peppers bring the heat — from a gentle warmth to a fiery kick.",
    image: chiliImg,
    alt: "Fresh red chili peppers",
  },
];

const IngredientsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase text-foreground mb-4">
            REAL <span className="text-primary">INGREDIENTS</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto">
            No artificial anything. Just the freshest ingredients, sourced locally and prepared with care.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((item) => (
            <div key={item.title} className="group">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl uppercase text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
