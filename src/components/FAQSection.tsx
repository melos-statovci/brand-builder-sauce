import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the difference between Mild and Spicy?",
    a: "Both share the same rich tomato and garlic base. The Mild is smooth and balanced — perfect for everyday cooking. The Spicy adds a kick of chili heat for those who like bold, fiery flavor.",
  },
  {
    q: "How can I order?",
    a: "Simply select your product and quantity on this page, click Buy Now, and you'll be connected directly with us on WhatsApp to complete your order.",
  },
  {
    q: "Do you deliver?",
    a: "Yes! We deliver across Prishtinë and surrounding areas. Delivery details and fees will be confirmed on WhatsApp when you place your order.",
  },
  {
    q: "Where is The Sauce made?",
    a: "Every jar is handcrafted in small batches in our kitchen in Prishtinë, Kosovo. We use locally sourced ingredients whenever possible.",
  },
  {
    q: "How do I contact you?",
    a: "You can reach us anytime via WhatsApp or Instagram DM @thesauce.ks. We're always happy to chat!",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-4">
            GOT <span className="text-primary">QUESTIONS</span>?
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
              <AccordionTrigger className="font-body font-semibold text-left text-foreground py-6 text-base hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
