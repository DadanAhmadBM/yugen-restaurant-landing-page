import heroImg from "@/assets/hero-interior.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-svh w-full overflow-hidden bg-dark">
      <img
        src={heroImg}
        alt="Yūgen restaurant interior at night"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/90" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(28,20,16,0.45) 80%)",
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex reveal delay-300">
        <span
          className="label-caps text-primary-foreground/70"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Scroll
        </span>
        <span className="h-24 w-px bg-primary" />
      </div>

      <div className="container-y relative z-10 flex min-h-svh flex-col justify-end pb-16 pt-32 md:pb-24">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="label-caps mb-8 text-gold reveal">Authentic Japanese · Est. 2018</p>
            <h1 className="text-hero text-dark-foreground -ml-1 reveal delay-100">YŪGEN</h1>
            <div className="mt-4 flex flex-wrap items-baseline gap-4 reveal delay-200">
              <span className="font-jp text-2xl text-gold md:text-3xl">幽玄</span>
              <p className="font-serif italic text-xl text-dark-foreground/85 md:text-2xl">
                Where every dish tells a story in silence.
              </p>
            </div>
          </div>

          {/* Booking form */}
          <div id="book" className="hidden w-full max-w-md shrink-0 rounded-md border border-primary/40 bg-background/95 p-6 backdrop-blur-md lg:block reveal delay-300">
            <p className="label-caps mb-4 text-primary">Reserve a Table</p>
            <BookingForm />
          </div>
        </div>

        <div className="mt-10 lg:hidden reveal delay-300">
          <div className="rounded-md border border-primary/40 bg-background/95 p-6 backdrop-blur-md">
            <p className="label-caps mb-4 text-primary">Reserve a Table</p>
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Rotating stamp badge */}
      <a
        href="#book"
        className="absolute bottom-8 right-6 z-10 hidden h-32 w-32 items-center justify-center md:flex reveal delay-500"
        aria-label="Reserve"
      >
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
          <defs>
            <path
              id="circle"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text fill="currentColor" className="fill-gold font-display" style={{ fontSize: "24px", letterSpacing: "6px" }}>
            <textPath href="#circle">YŪGEN · 幽玄 · AUTHENTIC JAPANESE · </textPath>
          </text>
        </svg>
        <span className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full bg-primary text-primary-foreground label-caps">
          Reserve
        </span>
      </a>
    </section>
  );
}

function BookingForm() {
  return (
    <form className="grid grid-cols-1 gap-3 sm:grid-cols-12" onSubmit={(e) => e.preventDefault()}>
      <label className="flex flex-col gap-1 sm:col-span-3">
        <span className="label-caps text-muted-foreground">Guests</span>
        <select className="h-11 rounded-sm border border-input bg-surface px-3 text-foreground focus:border-primary focus:outline-none">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
          ))}
          <option value="10+">10+</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 sm:col-span-5">
        <span className="label-caps text-muted-foreground">Date</span>
        <input
          type="date"
          className="h-11 rounded-sm border border-input bg-surface px-3 text-foreground focus:border-primary focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 sm:col-span-4">
        <span className="label-caps text-muted-foreground">Time</span>
        <input
          type="time"
          className="h-11 rounded-sm border border-input bg-surface px-3 text-foreground focus:border-primary focus:outline-none"
        />
      </label>
      <button className="sm:col-span-12 h-11 rounded-sm bg-primary text-primary-foreground label-caps transition-colors hover:bg-secondary">
        Book a Table →
      </button>
    </form>
  );
}
