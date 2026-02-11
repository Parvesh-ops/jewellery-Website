import { useState, type JSX } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,} from "react-icons/fa";

interface ContactForm {
  name: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;

    console.log("Jewellery enquiry:", form);
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", message: "" });
    }, 2500);
  };

  return (
    <section className="bg-[#faf7f2] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h4 className="text-yellow-600 font-semibold tracking-widest uppercase mb-2">
            Contact Us
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Binod Jewellers
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Buy, sell, or order custom jewellery with complete trust and
            transparency. We are always here to help you.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT – Info */}
          <div className="space-y-6">

            <InfoCard icon={<FaMapMarkerAlt />} title="Our Store">
              Gramtha-6, Netachowk <br /> Morang, Nepal
            </InfoCard>

            <InfoCard icon={<FaClock />} title="Opening Hours">
              Sunday – Friday <br /> 9:00 AM – 7:00 PM
            </InfoCard>

            <InfoCard icon={<FaPhoneAlt />} title="Call Us">
              +977 98XXXXXXXX <br />
              <span className="text-sm text-gray-500">24×7 Support</span>
            </InfoCard>

            <InfoCard icon={<FaEnvelope />} title="Email">
              binodjewellers@gmail.com
            </InfoCard>
          </div>

          {/* RIGHT – Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8
                          transition-all ">

            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Jewellery Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:ring-2 focus:ring-yellow-500 outline-none"
              />

              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about the jewellery you want..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3
                           focus:ring-2 focus:ring-yellow-500 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-full
                           font-semibold hover:bg-yellow-600 transition"
              >
                Send Enquiry
              </button>

              {sent && (
                <div className="text-green-600 text-center font-medium">
                  ✓ Your message has been sent successfully
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-xl
                        transition-all duration-300 hover:scale-[1.02]">
          <iframe
            title="Binod Jewellers Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d585.0402470449784!2d87.36330023733184!3d26.58881127360776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6f81ed17e795%3A0x194cb6001a33a819!2sOm%20new%20Shree%20mahalaxmi%20jewellery!5e0!3m2!1sen!2snp!4v1770818087645!5m2!1sen!2snp" 
            className="w-full h-72 md:h-96"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

/* Reusable Info Card */
const InfoCard = ({
  icon,
  title,
  children,
}: {
  icon: JSX.Element;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4
                  transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="text-yellow-600 text-2xl mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
      <p className="text-gray-700">{children}</p>
    </div>
  </div>
);

export default Contact;
