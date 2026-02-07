const About = () => {
  return (
    <section className="bg-[#faf7f2] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div>
          <h4 className="text-yellow-600 font-semibold tracking-widest uppercase mb-2">
            About Us
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            A Name Trusted in Nepali Jewellery
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Binod Jewellers has been serving families with authentic Nepali gold and silver
            jewellery, crafted with purity, precision, and care. Rooted in tradition, we
            believe jewellery is not just an ornament, but a symbol of culture and emotion.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            From weddings and festivals to everyday elegance, our collections reflect
            timeless craftsmanship and transparent pricing trusted by generations.
          </p>

          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
            Learn More
          </button>
        </div>

        {/* Image / Highlight Card */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Why Customers Trust Us
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ 100% Hallmarked Gold & Certified Purity</li>
              <li>✔ Traditional & Modern Designs</li>
              <li>✔ Fair & Transparent Pricing</li>
              <li>✔ Custom Jewellery on Request</li>
              <li>✔ Trusted by Nepali Families</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
