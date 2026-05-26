import nigiri from "@/assets/dish-nigiri.jpg";
import ramen from "@/assets/dish-ramen.jpg";
import wagyu from "@/assets/dish-wagyu.jpg";

const dishes = [
  {
    img: nigiri,
    name: "Omakase Nigiri Selection",
    jp: "お任せ握り",
    desc: "An eight-piece tasting chosen by the itamae each morning — the day's catch shaped over warm rice, finished with a single brushstroke of soy.",
    price: "¥ 4,800",
  },
  {
    img: ramen,
    name: "Tonkotsu Yūgen Ramen",
    jp: "豚骨湯玄ラーメン",
    desc: "Twenty-hour pork bone broth, hand-cut noodles, slow-cured chashu and a marinated egg with a still-molten heart.",
    price: "¥ 1,950",
  },
  {
    img: wagyu,
    name: "A5 Wagyu Sukiyaki",
    jp: "和牛すき焼き",
    desc: "Snow-marbled A5 wagyu seared at the table over warm cast iron, finished in a sweet shoyu broth and a barely-set yolk.",
    price: "¥ 8,200",
  },
];

export function Signature() {
  return (
    <section className="bg-background overflow-hidden">
      {dishes.map((d, i) => {
        const reverse = i % 2 === 1;
        return (
          <article
            key={d.name}
            className="grid min-h-[80vh] grid-cols-1 md:grid-cols-2"
          >
            <div className={`relative aspect-[4/5] md:aspect-auto reveal ${reverse ? "reveal-left md:order-2" : "reveal-right"}`}>
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className={`flex items-center bg-background reveal ${reverse ? "reveal-right md:order-1" : "reveal-left"} delay-200`}>
              <div className="container-y w-full py-16 md:py-24">
                <p className="label-caps text-primary">Signature Dish · 看板料理</p>
                <h3 className="text-section mt-6">{d.name.toUpperCase()}</h3>
                <p className="mt-3 font-serif italic text-xl text-muted-foreground">
                  <span className="font-jp not-italic mr-2">{d.jp}</span>
                </p>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {d.desc}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <span className="font-display text-4xl text-primary">{d.price}</span>
                  <a
                    href="#book"
                    className="rounded-full bg-foreground px-6 py-3 label-caps text-background transition-colors hover:bg-primary"
                  >
                    Try the Signature →
                  </a>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
