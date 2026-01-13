import {
  BadgeCheck,
  Truck,
  Headset,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface ServiceCard {
  heading: string;
  description: string;
  Icon: LucideIcon;
}

const serviceCards: ServiceCard[] = [
  {
    heading: "Premium Quality",
    description:
      "Crafted with high-quality materials to deliver lasting comfort, durability, and style for every step.",
    Icon: BadgeCheck,
  },
  {
    heading: "Free Delivery",
    description:
      "Enjoy fast and free nationwide shipping on all orders, with no hidden charges.",
    Icon: Truck,
  },
  {
    heading: "24/7 Online Support",
    description:
      "Our dedicated support team is available around the clock to assist you anytime.",
    Icon: Headset,
  },
  {
    heading: "Easy Returns",
    description:
      "Not satisfied? Return your order quickly and receive a full refund with ease.",
    Icon: Wallet,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Services() {
  return (
    <div className="w-full py-20 px-6 md:px-20" id="services">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {serviceCards.map((card) => (
          <motion.div
            variants={cardVariants}
            key={card.heading}
            className="group bg-[#111827]/80 border border-white/10 text-white
            p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 c"
          >
            {/* Icon */}
            <div className="mb-4 inline-flex items-center justify-center  w-12  h-12 rounded-xl bg-(--color-primary)/10 text-(--color-primary) group-hover:bg-(--color-primary) group-hover:text-black transition-colors duration-300">
              <card.Icon size={22} />
            </div>

            {/* Heading */}
            <h3 className="text-lg font-semibold mb-2 tracking-wide">
              {card.heading}
            </h3>

            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
