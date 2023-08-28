import { HDIW } from "@/components/HDIW";
import { Nav } from "@/components/Nav";
import { Welcome } from "@/components/Welcome";
import Why from "@/components/Why";
import React from "react";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { StartCreating } from "@/components/StartCreating";
import { Footer } from "@/components/Footer";

const page = () => {
  return (
    <main>
      <section className="bg-gradient-to-b from-linearGradientPurple to-linearGradientPink">
        <Nav />
        <Welcome />
      </section>
      {/* <SocialsSection /> */}
      <Why />
      {/* <div className="bg-gtahidiCream p-[3%]" /> */}
      <HDIW />
      <Testimonials />
      <Pricing />
      <StartCreating />
      <Footer />
    </main>
  );
};

export default page;
