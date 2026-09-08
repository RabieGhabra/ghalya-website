"use client";
import { JSX } from "react";

import HeroSection from "../components/sections/home/Hero";
import AboutSection from "../components/sections/home/About";
import WhyJoin from "../components/sections/home/WhyJoin";
import Testimonials from "../components/sections/home/Testimonials";
import EarnRedeem from "../components/sections/home/EarnRedeem";
import FAQ from "../components/sections/home/FAQ";
import Footer from "../components/layout/Footer";

export default function Home(): JSX.Element {
  return (
    <main className="relative w-full overflow-x-hidden bg-crisp-white">

      {/* 🔥 IMPORTANT: Force normal document flow */}
      
      <div className="flex flex-col w-full items-stretch">
        <HeroSection />
        <AboutSection />
        <WhyJoin />
        <Testimonials />
        <EarnRedeem />
        <FAQ showTitle={true} showCTA={true} />
      </div>

      <Footer />

    </main>
  );
}