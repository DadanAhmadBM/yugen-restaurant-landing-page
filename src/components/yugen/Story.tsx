import interior from "@/assets/interior-1.jpg";
import chef from "@/assets/chef.jpg";

export function Story() {
  return (
    <section id="story" className="section-y bg-background">
      <div className="container-y">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 reveal reveal-right">
            <p className="label-caps text-primary">Our Story / 私たちの物語</p>
            <h2 className="text-section mt-6 text-foreground">
              A HUMBLE BEGINNING, AN ENDLESS PURSUIT OF FLAVOR.
            </h2>
            <a
              href="#"
              className="mt-10 inline-block rounded-full border border-foreground/30 px-6 py-3 label-caps text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              Read More →
            </a>
          </div>

          <div className="md:col-span-7 reveal reveal-left delay-200">
            <p className="font-serif text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Yūgen began as a single counter beneath a paper lantern in a quiet alley.
              Three generations later, our kitchen still moves to the same unhurried rhythm —
              guided by season, restraint, and the belief that every plate carries a quiet story.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We source what is best each morning, refine techniques passed down through decades,
              and serve with the spirit of <em>omotenashi</em> — the art of selfless,
              anticipatory care.
            </p>

            <div className="relative mt-12 h-[480px] reveal reveal-scale delay-400">
              <img
                src={interior}
                alt="Dining room"
                loading="lazy"
                className="absolute left-0 top-8 h-[380px] w-[68%] object-cover rounded-sm shadow-2xl"
              />
              <img
                src={chef}
                alt="Chef preparing fish"
                loading="lazy"
                className="absolute right-0 top-0 h-[260px] w-[42%] object-cover rounded-sm shadow-2xl ring-1 ring-border"
              />
            </div>
          </div>
        </div>

        {/* Squiggle divider */}
        <svg viewBox="0 0 1200 60" className="mt-20 w-full text-primary" fill="none">
          <path
            d="M0,30 Q150,0 300,30 T600,30 T900,30 T1200,30"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2000"
            strokeDashoffset="2000"
            style={{ animation: "draw 3s ease-out forwards" }}
          />
        </svg>
      </div>
    </section>
  );
}
