import { useEffect } from "react";
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            // Stop observing once revealed to retain visible state
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
