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

export function App() {
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
