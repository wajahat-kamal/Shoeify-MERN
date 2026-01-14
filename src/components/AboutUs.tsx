import React from "react";
import aboutImage from "../assets/about-image.jpg";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about-us" className="w-full pt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src={aboutImage}
            alt="Shoeify premium shoes"
            className="w-full h-110 rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="flex-1 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-(--primary)">
            About Shoeify
          </h2>

          <p className="text-zinc-300 mb-4 text-lg leading-relaxed">
            At <span style={{ color: "var(--primary)" }}>Shoeify</span>, we
            believe every step should feel effortless and stylish. Our
            collection blends cutting-edge design with superior comfort,
            ensuring that you look good and feel great, whether you’re hitting
            the streets, the gym, or just relaxing.
          </p>

          <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
            From sleek everyday sneakers to high-performance athletic shoes,
            each pair is crafted with attention to detail, premium materials,
            and durability that lasts. We’re committed to providing footwear
            that matches your lifestyle and keeps you moving forward with
            confidence.
          </p>

          <a href="/shopping" className="px-8 py-3 rounded-full font-semibold text-black transition-all hover:brightness-70 bg-(--primary)">
            Explore Our Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
