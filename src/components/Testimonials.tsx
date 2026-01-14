import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../assets/data/testimonialsData.ts";

const Testimonials = () => {
  return (
    <section
      className="w-full pb-20 pt-5 px-6 md:px-20 overflow-hidden"
      id="testimonials"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          What Our Customers Say
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Real reviews from real customers who trust Shoeify for comfort,
          quality, and style.
        </p>
      </div>

      {/* Infinite Scroll Wrapper */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="min-w-[280px] md:min-w-[320px] bg-[#111827]/80
              border border-white/10 rounded-2xl p-6
              hover:border-(--primary) transition-all duration-300"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-(--primary) text-(--primary)"
                />
              ))}
            </div>

            {/* Message */}
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              “{item.message}”
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white text-sm font-semibold">
                  {item.name}
                </h4>
                <p className="text-xs text-zinc-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
