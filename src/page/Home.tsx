import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#070013]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer/>
    </div>
  );
}

export default Home;
