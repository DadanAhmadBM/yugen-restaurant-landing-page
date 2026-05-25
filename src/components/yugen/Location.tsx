import exterior from "@/assets/exterior.jpg";
import { MapPin, Phone } from "lucide-react";

const hours = [
  ["Mon – Thu", "11:00 – 22:00"],
  ["Fri – Sat", "11:00 – 23:00"],
  ["Sunday", "12:00 – 21:00"],
];

export function Location() {
  return (
    <section id="location" className="relative overflow-hidden">
      <img
        src={exterior}
        alt="Yūgen exterior at dusk"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-dark/70" />

      <div className="container-y relative z-10 section-y">
        <div className="ml-auto max-w-lg rounded-md border border-gold/30 bg-background/95 p-8 backdrop-blur-md md:p-10">
          <p className="label-caps text-primary">Find Us / アクセス</p>
          <h2 className="text-section mt-4 leading-none">VISIT<br />YŪGEN</h2>

          <p className="mt-8 font-serif italic text-lg text-foreground">
            4-2-1 Nishiazabu, Minato City<br />
            Tokyo, Japan
          </p>

          <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-sm border border-border">
            <iframe
              title="Yūgen location"
              src="https://www.google.com/maps?q=Nishiazabu%20Tokyo&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>

          <dl className="mt-8 space-y-3 border-t border-border pt-6">
            {hours.map(([day, t]) => (
              <div key={day} className="flex justify-between text-sm">
                <dt className="label-caps text-muted-foreground">{day}</dt>
                <dd className="font-serif text-foreground">{t}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=Nishiazabu+Tokyo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 label-caps text-primary-foreground transition-colors hover:bg-secondary"
            >
              <MapPin size={14} /> Get Directions
            </a>
            <a
              href="tel:+81312345678"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-3 label-caps text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone size={14} /> +81 3-1234-5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
