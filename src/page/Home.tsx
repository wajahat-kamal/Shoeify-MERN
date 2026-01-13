import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import Services from "../components/Services";

function Home() {
  return (
    <div className="bg-[#0A080D]">
      <Navbar />
      <Hero />
      <About />
      <Services/>
    </div>
  );
}

export default Home;
