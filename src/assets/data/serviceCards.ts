import {
  BadgeCheck,
  Truck,
  Headset,
  Wallet,
  type LucideIcon,
} from "lucide-react";

interface ServiceCard {
  heading: string;
  description: string;
  Icon: LucideIcon;
}

export const serviceCards: ServiceCard[] = [
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
