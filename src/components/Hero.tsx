import React from "react";
import bgImage from "../assets/bg-image.png";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* Content container */}
      <div className="flex h-full items-center">
        <div className="container mx-auto px-6">
          {/* Left side intentionally empty (design choice) */}
          {/* Right side content can be added later */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
