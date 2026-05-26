import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "From the moment I walked in, everything felt perfect — the aroma, the presentation, and the taste. A meal I'll quietly remember for years.",
    name: "Aiko Tanaka",
    desc: "Food Critic, Tokyo Eats",
  },
  {
    quote:
      "Yūgen does not perform — it whispers. Each course felt like turning a page in a book you didn't know you needed to read.",
    name: "Marcus Hale",
    desc: "Returning Guest",
  },
  {
    quote:
      "The omakase here is a meditation. The chef's restraint with each piece left me thinking about flavor for days after.",
    name: "Sofia Yamamoto",
    desc: "Travel Writer",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const review = reviews[i];

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section-y bg-background reveal">
      <div className="container-y">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-caps text-primary">Guest Voices / お客様の声</p>
          <div className="mt-8 flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} size={18} fill="currentColor" strokeWidth={0} />
            ))}
          </div>

          <blockquote className="mt-8 min-h-[200px] font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
            "{review.quote}"
          </blockquote>

          <div className="mt-10">
            <p className="font-display text-2xl text-foreground">{review.name}</p>
            <p className="label-caps text-muted-foreground">{review.desc}</p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
              className="rounded-full border border-border p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Review ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((v) => (v + 1) % reviews.length)}
              className="rounded-full border border-border p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
