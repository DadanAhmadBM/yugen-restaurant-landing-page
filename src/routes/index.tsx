import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/yugen/Navbar";
import { Hero } from "@/components/yugen/Hero";
import { Story } from "@/components/yugen/Story";
import { WhyChoose } from "@/components/yugen/WhyChoose";
import { Menu } from "@/components/yugen/Menu";
import { Signature } from "@/components/yugen/Signature";
import { ChefQuote } from "@/components/yugen/Gallery";
import { Testimonials } from "@/components/yugen/Testimonials";
import { Location } from "@/components/yugen/Location";
import { Footer } from "@/components/yugen/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yūgen 幽玄 — Traditional Japanese Restaurant" },
      {
        name: "description",
        content:
          "Yūgen — where every dish tells a story in silence. Traditional Japanese cuisine, omakase, and seasonal craftsmanship in Tokyo.",
      },
      { property: "og:title", content: "Yūgen 幽玄 — Traditional Japanese Restaurant" },
      {
        property: "og:description",
        content: "An unhurried Japanese kitchen guided by season, restraint, and the art of omotenashi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Story />
      <WhyChoose />
      <Menu />
      <Signature />
      <ChefQuote />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
