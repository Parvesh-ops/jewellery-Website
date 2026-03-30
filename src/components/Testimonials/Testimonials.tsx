import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useData } from "../../context/DataContext";

const CustomerTestimonials = () => {
  const { data } = useData();

  const allReviews = data.flatMap((product) =>
    product.reviews.map((review) => ({
      ...review,
      rating: product.rating,
    }))
  );

  const reviewsToShow = allReviews.slice(0, 3);

  const avatarColors = [
    "bg-orange-100 text-orange-600",
    "bg-amber-100 text-amber-600",
    "bg-yellow-100 text-yellow-700",
  ];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <section className="bg-gradient-to-b from-[#fff8f0] to-[#fff3e6] py-20 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          Customer Reviews
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base leading-relaxed">
          Trusted by families across Nepal — here's what our happy customers have to say.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsToShow.map((review, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl p-7 shadow-sm border border-orange-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-7 text-orange-100">
              <FaQuoteLeft size={36} />
            </div>

            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  size={16}
                  className={
                    i < Math.floor(review.rating)
                      ? "text-amber-400"
                      : "text-gray-200"
                  }
                />
              ))}
              <span className="ml-2 text-xs font-semibold text-amber-500">
                {review.rating.toFixed(1)}
              </span>
            </div>

            {/* Comment */}
            <p className="text-gray-600 text-sm leading-relaxed flex-1">
              "{review.comment}"
            </p>

            {/* Divider */}
            <div className="border-t border-orange-50" />

            {/* Reviewer */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                  avatarColors[index % avatarColors.length]
                }`}
              >
                {getInitials(review.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 leading-tight">
                  {review.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
              </div>
              {/* Verified badge */}
              <span className="ml-auto text-xs bg-green-50 text-green-600 font-medium px-2.5 py-1 rounded-full">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;