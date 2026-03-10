import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { type Product, buildWhatsAppUrl } from "@/config/brand";
import sauceMild from "@/assets/sauce-mild.jpg";
import sauceSpicy from "@/assets/sauce-spicy.jpg";

const imageMap: Record<string, string> = {
  mild: sauceMild,
  spicy: sauceSpicy,
};

interface ProductCardProps {
  product: Product;
  onBuyClick: (product: Product, quantity: number) => void;
}

const ProductCard = ({ product, onBuyClick }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const fullName = `${product.name} ${product.variant}`;

  return (
    <div className="bg-background rounded-lg border border-border overflow-hidden flex flex-col h-full group">
      <div className="overflow-hidden">
        <img
          src={imageMap[product.image]}
          alt={`${fullName} sauce jar`}
          className="w-full h-80 md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-heading text-2xl uppercase text-foreground">
              {product.name}
            </h3>
            <span className="font-heading text-lg uppercase text-primary">
              {product.variant}
            </span>
          </div>
          <span className="font-heading text-2xl text-foreground">
            {product.price}
          </span>
        </div>
        <p className="font-body text-muted-foreground mb-6 flex-1">
          {product.description}
        </p>

        {/* Quantity selector */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Qty
          </span>
          <div className="flex items-center border border-border rounded-md">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="w-12 text-center font-body font-semibold text-foreground">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <button
          onClick={() => onBuyClick(product, quantity)}
          className={`w-full bg-primary text-primary-foreground font-heading text-sm uppercase py-4 rounded-md hover:opacity-90 transition-all ${quantity > 1 ? "animate-pulse-glow" : ""}`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
