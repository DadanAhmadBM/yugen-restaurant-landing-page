import chef from "@/assets/chef.jpg";
import sashimi from "@/assets/gallery-sashimi.jpg";
import matcha from "@/assets/gallery-matcha.jpg";
import yakitori from "@/assets/gallery-yakitori.jpg";
import interior from "@/assets/interior-1.jpg";
import nigiri from "@/assets/dish-nigiri.jpg";
import ramen from "@/assets/dish-ramen.jpg";

const photos = [
  { src: sashimi, alt: "Sashimi", h: "tall" },
  { src: interior, alt: "Interior", h: "short" },
  { src: yakitori, alt: "Yakitori", h: "tall" },
  { src: matcha, alt: "Matcha dessert", h: "short" },
  { src: ramen, alt: "Ramen", h: "tall" },
  { src: nigiri, alt: "Nigiri", h: "short" },
];

export function ChefQuote() {
  return (
    <section id="gallery" className="section-y bg-surface">
      <div className="container-y">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src={chef}
            alt="Head Itamae"
            loading="lazy"
            className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-gold/40"
          />
          <p className="label-caps mt-6 text-primary">Head Itamae · 板前</p>
          <p className="mt-2 font-serif italic text-muted-foreground">Chef Haruki Tanaka</p>

          <blockquote className="mt-10 font-display text-4xl leading-tight tracking-wide text-foreground md:text-6xl">
            "EVERY INGREDIENT IS A WORD.<br />
            <span className="text-primary">EVERY DISH</span> IS A POEM."
          </blockquote>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {photos.map((p, i) => (
            <a
              key={i}
              href={p.src}
              className={`group relative overflow-hidden rounded-sm ${
                p.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors duration-300 group-hover:bg-primary/60">
                <span className="text-3xl text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  +
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
