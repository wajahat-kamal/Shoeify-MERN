import React from "react";
import bgImage from "../assets/bg-image.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Content container */}
      <div className="flex h-full items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="max-w-xl">
            <span className="inline-block mb-4 rounded-full bg-(--color-primary) px-4 py-1 text-sm  tracking-wide text-white">
              New Collection 2026
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Step Into Style
              <br />
              With <span className="text-(--primary)">SHOEIFY</span>{" "}
            </h1>

            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
              Discover premium sneakers designed for comfort, performance, and
              everyday confidence. Elevate your walk—one step at a time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#shopping"
                className="inline-flex items-center justify-center rounded-full bg-(--color-primary) px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-(--color-primary)/50 hover:scale-105"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
