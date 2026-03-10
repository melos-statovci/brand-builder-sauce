import { useState } from "react";
import { PRODUCTS, buildWhatsAppUrl, type Product } from "@/config/brand";
import ProductCard from "./ProductCard";
import OrderModal from "./OrderModal";

const ShopSection = () => {
  const [modalData, setModalData] = useState<{ product: Product; quantity: number } | null>(null);

  const handleBuyClick = (product: Product, quantity: number) => {
    setModalData({ product, quantity });
  };

  return (
    <section id="shop" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase text-foreground mb-4">
            CHOOSE YOUR <span className="text-primary">HEAT</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Mild or Spicy — get the sauce.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuyClick={handleBuyClick}
            />
          ))}
        </div>
      </div>

      {modalData && (
        <OrderModal
          product={modalData.product}
          quantity={modalData.quantity}
          onClose={() => setModalData(null)}
        />
      )}
    </section>
  );
};

export default ShopSection;
