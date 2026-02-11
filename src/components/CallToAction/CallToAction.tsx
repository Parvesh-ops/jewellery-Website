import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const CallToAction = () => {
    return (
        <section className="relative py-9 px-6">

            <div className="relative max-w-5xl mx-auto text-center text-black">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    ✨ Find Jewellery That Tells <span className="text-yellow-500">Your Story</span>
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    Shop trusted Nepali gold, silver & diamond jewellery crafted with
                    purity, tradition, and timeless elegance.
                </p>

                <div className="flex flex-col sm:flex-row justify-center mt-4 gap-4">
                    {/* Primary CTA */}
                    <Link
                        to="/products"
                        className="group inline-flex items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
                    >
                        Explore Collection
                        <HiArrowNarrowRight className="text-xl transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>


                    {/* Secondary CTA */}
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 border border-yellow-500 px-4 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition"
                    >
                        Visit Our Store
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
