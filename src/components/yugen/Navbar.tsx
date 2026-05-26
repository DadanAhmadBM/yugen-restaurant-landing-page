import { useEffect, useState } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-y flex h-20 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-3">
          <span className={`font-display text-3xl tracking-wider transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}>
            YŪGEN
          </span>
          <span className={`font-jp text-base transition-colors ${
            scrolled ? "text-primary" : "text-primary-foreground/80"
          }`}>
            幽玄
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`label-caps transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#book"
            className={`rounded-full border px-5 py-2 label-caps transition-colors ${
              scrolled
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                : "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            }`}
          >
            Reservations
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className={`md:hidden relative h-10 w-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setOpen((s) => !s)}
        >
          <span
            className={`h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-y flex flex-col gap-6 py-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-primary px-5 py-3 text-center label-caps text-primary"
            >
              Reservations
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
