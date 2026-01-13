import React from "react";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import Services from "../components/Services";
import Products from "../components/Products";

function Home() {
  return (
    <div className="bg-[#0B0F1A]">
      <Hero />
      <About />
      <Services />
      <Products />
    </div>
  );
}

export default Home;
