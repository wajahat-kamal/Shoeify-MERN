import { BadgeCheck, Headset, Truck, Wallet } from "lucide-react";


const servicesCards = [
    {
      heading: "Premium Quality",
      para: "We provide only the best shoes for every lifestyle.",
      Icon: BadgeCheck,
    },
    {
      heading: "Free Delivery",
      para: "Enjoy free shipping on all orders across the country.",
      Icon: Truck,
    },
    {
      heading: "ONLINE SUPPORT 24/7",
      para: "24/7 friendly support for any questions or issues.",
      Icon: Headset,
    },
    {
      heading: "MONEY RETURN",
      para: "Quick and easy returns with full money back.",
      Icon: Wallet,
    },
  ];

function Services() { 

  return (
    <div className="w-full p-6 md:px-20" id="services">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 4 */}
        <div className="bg-[#1E2939] text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2 flex flex-row gap-2">
            <Wallet />
            MONEY RETURN
          </h3>
          <p>Quick and easy returns with full money back.</p>
        </div>

          {servicesCards.map(())}
        
      </div>
    </div>
  );
}

export default Services;
