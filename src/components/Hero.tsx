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
          <div className="max-w-xl">
            <span className="inline-block mb-4 rounded-full bg-yellow-400/10 px-4 py-1 text-sm font-semibold tracking-wide text-yellow-400">
              New Collection 2026
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Step Into <span className="text-yellow-400">Style</span> <br />
              With Shoeify
            </h1>

            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
              Discover premium sneakers designed for comfort, performance, and
              everyday confidence. Elevate your walk—one step at a time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#shopping"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-yellow-300 hover:scale-105"
              >
                Shop Now
              </a>

              <a
                href="#about-us"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
