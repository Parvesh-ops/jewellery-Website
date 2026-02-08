import WhyChooseUs from "../components/WhyChooseUs/WhyChoseUs";
import founderImg from "../assets/founderImg.jpg";

const About = () => {
  return (
    <section className="bg-[#faf7f2] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6">
          <h4 className="text-yellow-600 font-semibold tracking-widest uppercase">
            About Us
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Binod Jewellers – Trusted Nepali Craftsmanship
          </h2>

            {/* Founder Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <img
              src={founderImg}
              alt="Binod Chaudhary"
              className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-yellow-500"
            />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-900">Binod Chaudhary</p>
              <p className="text-gray-600 text-sm">Founder</p>
            </div>
          </div>
          

          <p className="text-gray-700 leading-relaxed">
            Founded by <span className="font-semibold">Binod Chaudhary</span> in Gramtha-6, Netachowk, Morang, Binod Jewellers has been serving families across Nepal with authentic gold, silver, and diamond jewellery. Every piece is handcrafted with precision, reflecting our dedication to purity, tradition, and elegance.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Here, you can <span className="font-semibold">buy or sell jewellery</span> according to your needs. We also create custom ornaments based on your order. Our collections cater to every occasion—from weddings and festivals to everyday elegance.
          </p>

          <p className="text-gray-700 leading-relaxed">
            For your safety and peace of mind, we track all jewellery records using <span className="font-semibold">Excel and Power BI</span>, ensuring accurate documentation and transparency.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With nationwide delivery, custom designs on request, and transparent pricing, we make premium jewellery accessible and trustworthy for all Nepali families.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
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
        <div className="relative mt-8 md:mt-0">
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

      {/* Why Choose Us Section */}
      <div className="mt-12">
        <WhyChooseUs />
      </div>
    </section>
  );
};

export default About;
