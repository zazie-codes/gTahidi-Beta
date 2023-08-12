import { HDIW } from "@/components/HDIW";
import { Nav } from "@/components/Nav";
import { Welcome } from "@/components/Welcome";
import Why from "@/components/Why";
import React from "react";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { SocialsSection } from "@/components/SocialsSection";
import { Footer } from "@/components/Footer";
import { StartCreating } from "@/components/StartCreating";

const page = () => {
  return (
    <>
      <Nav />
      <main>
        <Welcome />
        <SocialsSection />
        <Why />
        <div className="bg-gtahidiCream p-[3%]" />
        <HDIW />
        <Testimonials />
        <Pricing />
        <StartCreating />
        <Footer />
      </main>
    </>
  );
};

export default page;
