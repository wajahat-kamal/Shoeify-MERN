import React from "react";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import Services from "../components/Services";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="bg-[#0B0F1A]">
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials/>
    </div>
  );
}

export default Home;
