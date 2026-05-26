import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div className="bg-surface section-y">
        <div className="container-y grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl">YŪGEN <span className="font-jp text-primary text-xl">幽玄</span></p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A traditional Japanese kitchen guided by season, restraint, and the
              quiet art of <em>omotenashi</em>.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook, Twitter].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="label-caps text-primary">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {["Home", "Menu", "About", "Gallery", "Reservations"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps text-primary">Cuisine</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {["Sushi", "Ramen", "Yakitori", "Omakase", "Beverages"].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps text-primary">Newsletter</p>
            <form className="mt-4 flex border-b border-foreground/30 pb-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="text-primary" aria-label="Subscribe">→</button>
            </form>
            <p className="mt-6 text-xs text-muted-foreground">
              4-2-1 Nishiazabu, Minato City<br />
              Tokyo, Japan<br />
              Daily · 11:00 – 22:00
            </p>
          </div>
        </div>
      </div>

      {/* Massive closer */}
      <div className="relative overflow-hidden bg-primary py-18">
        <p className="text-massive whitespace-nowrap text-center text-primary-foreground/95 px-4">
          YŪGEN · 幽玄
        </p>
        <p className="container-y mt-6 text-center text-xs text-primary-foreground/70">
          © 2025 Yūgen Restaurant. All Rights Reserved. · Made by Movement.
        </p>
      </div>
    </footer>
  );
}
