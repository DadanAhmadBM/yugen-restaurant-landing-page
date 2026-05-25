import { Leaf, Award, ChefHat, Heart } from "lucide-react";
import bg from "@/assets/hero-interior.jpg";

const values = [
  { Icon: Leaf, title: "Freshness", desc: "Ingredients sourced fresh daily from trusted suppliers across markets." },
  { Icon: Award, title: "Authenticity", desc: "Traditional techniques passed down through generations of masters." },
  { Icon: ChefHat, title: "Craftsmanship", desc: "Every dish prepared with obsessive attention to the smallest detail." },
  { Icon: Heart, title: "Hospitality", desc: "Omotenashi — the art of selfless, anticipatory service to every guest." },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <img src={bg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-dark/80" />

      <div className="container-y relative z-10 section-y">
        <div className="mb-16 max-w-2xl">
          <p className="label-caps text-gold">Why Yūgen / 選ばれる理由</p>
          <h2 className="text-section mt-4 text-dark-foreground">Why Yūgen?</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ Icon, title, desc }) => (
            <div key={title} className="group">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors group-hover:bg-gold group-hover:text-dark">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-3xl text-dark-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-foreground/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
