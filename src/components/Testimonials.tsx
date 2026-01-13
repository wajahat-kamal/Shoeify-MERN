import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../assets/data/testimonialsData.ts";

const Testimonials = () => {
  return (
    <section className="w-full pb-20 pt-5 px-6 md:px-20" id="testimonials">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          What Our Customers Say
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Real reviews from real customers who trust Shoeify for comfort,
          quality, and style.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-[#111827]/80 border border-white/10 rounded-2xl p-6
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
