import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import Services from "../components/Services";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <div className="bg-[#0B0F1A]">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <FeaturedProducts/>
      <Footer/>
    </div>
  );
}

export default Home;
