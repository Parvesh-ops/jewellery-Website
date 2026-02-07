import WhyChooseUs from "../components/WhyChooseUs/WhyChoseUs";

const About = () => {
  return (
    <section className="bg-[#faf7f2] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div>
          <h4 className="text-yellow-600 font-semibold tracking-widest uppercase mb-2">
            About Us
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Binod Jewellers – Trusted Nepali Craftsmanship
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Founded by <span className="font-semibold">Binod Chaudhary</span> in Gramtha-6, Netachowk, Morang, Binod Jewellers has been serving families across Nepal with authentic gold, silver, and diamond jewellery. Every piece is handcrafted with precision, reflecting our dedication to purity, tradition, and elegance.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Here, you can <span className="font-semibold">buy or sell jewellery</span> according to your needs. We also create custom ornaments based on your order. Our collections cater to every occasion—from weddings and festivals to everyday elegance.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            For your safety and peace of mind, we track all jewellery records using <span className="font-semibold">Excel and Power BI</span>, ensuring accurate documentation and transparency.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            With nationwide delivery, custom designs on request, and transparent pricing, we make premium jewellery accessible and trustworthy for all Nepali families.
          </p>

          <div className="flex gap-4 mt-4">
            <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
               Custom Jewellery on Request
            </span>
            <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
              24*7 Support
            </span>
            <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
              Delivery All Over Nepal
            </span>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-yellow-100 hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-5 text-gray-900">
              Why Customers Trust Us
            </h3>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li>✔ 100% Hallmarked Gold & Certified Purity</li>
              <li>✔ Traditional & Modern Designs</li>
              <li>✔ Custom Jewellery on Request</li>
              <li>✔ Buy & Sell Jewellery Safely</li>
              <li>✔ Fair & Transparent Pricing</li>
              <li>✔ Secure Payment Methods</li>
              <li>✔ 24*7 Customer Support</li>
              <li>✔ Delivered All Over Nepal</li>
              <li>✔ Jewellery Records Tracked with Excel & Power BI</li>
              <li>✔ Trusted by Nepali Families for Generations</li>
              <li>✔ Expert Guidance by Owner Binod Chaudhary</li>
            </ul>

          </div>

          {/* Highlight Badge */}
          <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg text-sm">
            #1 Trusted Jeweller in Morang
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </section>
  );
};

export default About;
