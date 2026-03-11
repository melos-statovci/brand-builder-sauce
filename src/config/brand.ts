export const BRAND = {
  name: "The Sauce",
  tagline: "freshly made",
  whatsappNumber: "+38343846351",
  instagramUrl: "https://www.instagram.com/thesauce.ks",
  email: "hello@thesauce.ks",
  location: "Prishtinë, Kosovo",
};

export interface Product {
  id: string;
  name: string;
  variant: string;
  description: string;
  price: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "mild",
    name: "The Sauce",
    variant: "Mild",
    description: "A smooth, rich tomato sauce with garlic and fresh basil. Perfect for pasta, pizza, and everything in between.",
    price: "€4.50",
    image: "mild",
  },
  {
    id: "spicy",
    name: "The Sauce",
    variant: "Spicy",
    description: "The same rich base with a fiery kick of chili. For those who like it hot. Bold, intense, unforgettable.",
    price: "€4.50",
    image: "spicy",
  },
];

export function getWhatsAppPhoneForUrl(): string {
  return BRAND.whatsappNumber.replace(/\D/g, "");
}

export function buildWhatsAppUrl(productName: string, quantity: number): string {
  const message = encodeURIComponent(
    `Hello, I would like to order ${quantity} x ${productName}.`
  );
  return `https://wa.me/${getWhatsAppPhoneForUrl()}?text=${message}`;
}
