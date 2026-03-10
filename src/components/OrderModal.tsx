import { X } from "lucide-react";
import { type Product, buildWhatsAppUrl } from "@/config/brand";
import sauceMild from "@/assets/sauce-mild.jpg";
import sauceSpicy from "@/assets/sauce-spicy.jpg";

const imageMap: Record<string, string> = {
  mild: sauceMild,
  spicy: sauceSpicy,
};

interface OrderModalProps {
  product: Product;
  quantity: number;
  onClose: () => void;
}

const OrderModal = ({ product, quantity, onClose }: OrderModalProps) => {
  const fullName = `${product.name} ${product.variant}`;
  const whatsappUrl = buildWhatsAppUrl(fullName, quantity);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background rounded-lg max-w-md w-full overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1 rounded-full bg-background/80 text-foreground hover:bg-secondary transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <img
          src={imageMap[product.image]}
          alt={fullName}
          className="w-full h-56 object-cover"
        />

        <div className="p-8 text-center">
          <h3 className="font-heading text-2xl uppercase text-foreground mb-2">
            YOUR ORDER
          </h3>
          <p className="font-body text-lg text-muted-foreground mb-8">
            {quantity} × {fullName}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-primary text-primary-foreground font-heading text-sm uppercase py-4 rounded-md hover:opacity-90 transition-opacity text-center"
          >
            ORDER ON WHATSAPP
          </a>

          <button
            onClick={onClose}
            className="mt-4 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
