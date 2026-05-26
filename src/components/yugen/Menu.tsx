import { useState } from "react";
import nigiri from "@/assets/dish-nigiri.jpg";
import ramen from "@/assets/dish-ramen.jpg";
import wagyu from "@/assets/dish-wagyu.jpg";
import sashimi from "@/assets/gallery-sashimi.jpg";
import matcha from "@/assets/gallery-matcha.jpg";
import yakitori from "@/assets/gallery-yakitori.jpg";

const categories = [
  { name: "Sushi", jp: "寿司", count: 1, image: nigiri },
  { name: "Ramen", jp: "ラーメン", count: 2, image: ramen },
  { name: "Yakitori", jp: "焼き鳥", count: 3, image: yakitori },
  { name: "Sashimi", jp: "刺身", count: 4, image: sashimi },
  { name: "Wagyu", jp: "和牛", count: 5, image: wagyu },
  { name: "Dessert", jp: "デザート", count: 6, image: matcha },
];

export function Menu() {
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <section id="menu" className="section-y bg-surface overflow-hidden">
      <div className="container-y">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 reveal">
          <div>
            <p className="label-caps text-primary">Authentic Menu / お品書き</p>
            <h2 className="text-section mt-4">AUTHENTIC<br />MENU</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Six categories, one philosophy — every plate a quiet study in restraint and season.
            Hover any category to glimpse the table.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 reveal reveal-right delay-200">
            <ul className="border-t border-border">
              {categories.map((c, i) => {
                const isActive = i === active;
                return (
                  <li key={c.name}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`group flex w-full items-center justify-between gap-6 border-b border-border py-6 text-left transition-colors ${
                        isActive ? "bg-primary text-primary-foreground px-6" : "hover:px-6 hover:bg-primary/5"
                      }`}
                    >
                      <span className={`label-caps ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        ({String(c.count).padStart(2, "0")})
                      </span>
                      <span className="flex-1">
                        <span className="font-display text-3xl tracking-wide md:text-4xl">
                          {c.name.toUpperCase()}
                        </span>
                        <span className={`ml-3 font-jp text-base ${isActive ? "text-gold" : "text-primary/70"}`}>
                          {c.jp}
                        </span>
                      </span>
                      <span className="text-xl">↗</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href="#"
              className="mt-10 inline-block rounded-full border border-foreground/30 px-6 py-3 label-caps transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              See Full Menu ↗
            </a>
          </div>

          <div className="md:col-span-7 reveal reveal-left delay-300">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-dark">
              {categories.map((c, i) => (
                <img
                  key={c.name}
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="label-caps text-gold">Featured</p>
                  <p className="font-serif text-2xl italic text-dark-foreground">
                    {current.name} · <span className="font-jp not-italic">{current.jp}</span>
                  </p>
                </div>
                <span className="font-display text-5xl text-dark-foreground/80">
                  0{active + 1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
