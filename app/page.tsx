"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <CTASection />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}
