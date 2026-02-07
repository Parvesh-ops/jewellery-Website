import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaEnvelope,
    FaClock,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section className="bg-[#faf7f2] py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h4 className="text-yellow-600 font-semibold tracking-widest uppercase mb-2">
                        Contact Us
                    </h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Get in Touch with Binod Jewellers
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Visit our showroom in Morang or contact us anytime for buying,
                        selling, or custom jewellery orders.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* LEFT SECTION */}
                    <div className="space-y-8">

                        {/* Store */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4
                            transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                            <FaMapMarkerAlt className="text-yellow-600 text-2xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg text-gray-900">Our Store</h4>
                                <p className="text-gray-700">
                                    Gramtha-6, Netachowk <br />
                                    Morang, Nepal
                                </p>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4
                            transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                            <FaClock className="text-yellow-600 text-2xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg text-gray-900">
                                    Store Opening Hours
                                </h4>
                                <ul className="text-gray-700">
                                    <li>Sunday – Friday: 9:00 AM – 7:00 PM</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4
                            transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                            <FaPhoneAlt className="text-yellow-600 text-2xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg text-gray-900">Call Us</h4>
                                <p className="text-gray-700">+977 98XXXXXXXX</p>
                                <p className="text-sm text-gray-500">24×7 Customer Support</p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4
                            transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                            <FaWhatsapp className="text-yellow-600 text-2xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg text-gray-900">
                                    WhatsApp Support
                                </h4>
                                <p className="text-gray-700">
                                    Quick replies for orders & enquiries
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4
                            transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
                            <FaEnvelope className="text-yellow-600 text-2xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg text-gray-900">Email</h4>
                                <p className="text-gray-700">binodjewellers@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="space-y-10">

                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl shadow-xl p-8
                            transition-all duration-300  hover:shadow-2xl">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                                Send Us a Message
                            </h3>

                            <form className="space-y-5">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                                />

                                <textarea
                                    rows={4}
                                    placeholder="Your message or jewellery requirement..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 text-black py-3 rounded-full font-semibold
                             transition duration-300 hover:bg-yellow-600 hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Google Map */}
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-yellow-100
                            transition-all  hover:shadow-2xl">
                            <iframe
                                title="Binod Jewellers Location"
                                src="https://www.google.com/maps?q=Netachowk,Morang,Nepal&output=embed"
                                className="w-full h-72 md:h-80"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
