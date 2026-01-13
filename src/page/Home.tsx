import React from "react";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import Services from "../components/Services";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <div className="bg-[#0B0F1A]">
      <Hero />
      <About />
      <Services />
      <FeaturedProducts/>
      <Footer/>
    </div>
  );
}

export default Home;
