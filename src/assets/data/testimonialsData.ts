export interface Testimonial {
    id: number;
    name: string;
    role?: string;
    message: string;
    rating: number;
    avatar: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ali Khan",
      role: "Verified Buyer",
      message:
        "The quality of the shoes exceeded my expectations. Very comfortable and stylish. Highly recommended!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Ayesha Malik",
      role: "Fashion Enthusiast",
      message:
        "Shoeify has an amazing collection. The delivery was fast and the packaging was premium.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Usman Tariq",
      role: "Athlete",
      message:
        "Perfect for daily wear and workouts. Great grip and comfort. I will definitely order again.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 4,
      name: "Sara Ahmed",
      role: "Online Shopper",
      message:
        "Customer support was very helpful and the return process was smooth. Loved the experience!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];
  