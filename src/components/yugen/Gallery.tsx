import chef from "@/assets/chef.jpg";
import sashimi from "@/assets/gallery-sashimi.jpg";
import matcha from "@/assets/gallery-matcha.jpg";
import yakitori from "@/assets/gallery-yakitori.jpg";
import interior from "@/assets/interior-1.jpg";
import nigiri from "@/assets/dish-nigiri.jpg";
import ramen from "@/assets/dish-ramen.jpg";

const photos = [
  { src: sashimi, alt: "Sashimi", bento: "sm:col-span-2 md:col-span-2 md:row-span-1 aspect-[2/1] md:aspect-auto h-full" },
  { src: interior, alt: "Interior", bento: "sm:col-span-1 md:col-span-1 md:row-span-1 aspect-square md:aspect-auto h-full" },
  { src: yakitori, alt: "Yakitori", bento: "sm:col-span-1 md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto h-full" },
  { src: matcha, alt: "Matcha dessert", bento: "sm:col-span-1 md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto h-full" },
  { src: ramen, alt: "Ramen", bento: "sm:col-span-1 md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto h-full" },
  { src: nigiri, alt: "Nigiri", bento: "sm:col-span-1 md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-auto h-full" },
];

export function ChefQuote() {
  return (
    <section id="gallery" className="section-y bg-surface overflow-hidden">
      <div className="container-y">
        <div className="mx-auto max-w-3xl text-center reveal reveal-scale">
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

        <div className="mt-24 mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[350px_213px_213px] gap-4 md:gap-6 reveal-stagger">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl reveal reveal-scale ${p.bento}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
