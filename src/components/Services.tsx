import { BadgeCheck, Headset, Truck, Wallet } from "lucide-react";

function Services() {
  return (
    <div className="w-full pt-25  p-6 md:px-20" id="services">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-[#1E2939] text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2 flex flex-row gap-2">
            <BadgeCheck /> Premium Quality
          </h3>
          <p>We provide only the best shoes for every lifestyle.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1E2939] text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2 flex flex-row gap-2">
            <Truck />
            Free Delivery
          </h3>
          <p>Enjoy free shipping on all orders across the country.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1E2939] text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2 flex flex-row gap-2">
            <Headset />
            ONLINE SUPPORT 24/7
          </h3>
          <p>24/7 friendly support for any questions or issues.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#1E2939] text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-2 flex flex-row gap-2">
            <Wallet />
            MONEY RETURN
          </h3>
          <p>Quick and easy returns with full money back.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
