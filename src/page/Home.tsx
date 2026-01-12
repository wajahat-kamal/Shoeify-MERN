import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutUs";

function Home() {
  return (
    <div className="bg-[#0A080D]">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default Home;
