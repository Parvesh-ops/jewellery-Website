import { ShieldCheck, Gem, HandCoins, Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Why Choose <span className="text-yellow-500">Binod Jewellers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by families for purity, craftsmanship, and timeless Nepali jewellery.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className=" border border-yellow-500 p-6 rounded-xl text-center hover:scale-105 transition">
            <ShieldCheck className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Certified Purity</h3>
            <p className="text-gray-400 text-sm">
              100% hallmarked gold and certified silver you can trust.
            </p>
          </div>

          {/* Card 2 */}
          <div className=" border border-yellow-500 p-6 rounded-xl text-center hover:scale-105 transition">
            <Gem className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Expert Craftsmanship</h3>
            <p className="text-gray-400 text-sm">
              Designed by skilled Nepali artisans with attention to detail.
            </p>
          </div>

          {/* Card 3 */}
          <div className=" border border-yellow-500 p-6 rounded-xl text-center hover:scale-105 transition">
            <HandCoins className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fair Pricing</h3>
            <p className="text-gray-400 text-sm">
              Transparent pricing with no hidden charges.
            </p>
          </div>

          {/* Card 4 */}
          <div className=" border border-yellow-500 p-6 rounded-xl text-center hover:scale-105 transition">
            <Users className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Trusted by Families</h3>
            <p className="text-gray-400 text-sm">
              Serving generations with honesty, quality, and trust.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
