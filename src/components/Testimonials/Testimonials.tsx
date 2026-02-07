import { FaStar } from "react-icons/fa";
import { useData } from "../../context/DataContext";

const CustomerTestimonials = () => {
  const { data } = useData();

  const allReviews = data.flatMap((product) =>
    product.reviews.map((review) => ({
      ...review,
      rating: product.rating, 
    }))
  );

  const reviewsToShow = allReviews.slice(0, 6);

  return (
    <section className="bg-[#fff8f0] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold ">What Our Customers Say</h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Trusted by families across Nepal — here's what our happy customers have to say.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviewsToShow.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            {/* Stars */}
            <div className="flex mb-2">
              {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>

            {/* Review comment */}
            <p className="text-gray-700 mb-4">"{review.comment}"</p>

            {/* Reviewer info */}
            <p className="font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
