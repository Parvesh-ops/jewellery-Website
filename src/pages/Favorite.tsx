
import { useFavorite } from "../context/FavoriteContext";
import { MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
    const { favorites, removeFromFavorites } = useFavorite();
    const navigate = useNavigate();

    if (favorites.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
                <MdOutlineFavorite size={60} className="text-gray-400 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    No Wishlist Items Yet 💍
                </h2>
                <p className="text-gray-600 mb-4">
                    Your favorite jewellery will appear here. Explore our gold, silver & diamond collections crafted for Nepali families.
                </p>
                <button
                    onClick={() => navigate("/products")}
                    className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
                >
                    Browse Jewellery
                </button>
            </div>
        );
    }

    return (
        <section className="bg-[#faf7f2] py-6 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                    Your Wishlist 💖
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favorites.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                        >
                            {/* Product Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />

                            {/* Product Details */}
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 mb-2">{item.description}</p>
                                <p className="font-bold text-gray-900 mb-4">
                                    NPR {item.price.toLocaleString()}
                                </p>

                                {/* Action Buttons */}
                                <div className="mt-auto flex justify-between items-center">
                                    <button
                                        onClick={() => removeFromFavorites(item.id)}
                                        className="flex items-center gap-2 text-red-500 font-semibold hover:text-red-600 transition"
                                    >
                                        <MdOutlineFavorite size={20} />
                                        Remove
                                    </button>

                                    <button
                                        onClick={() => navigate(`/products/${item.id}`)}
                                        className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
                                    >
                                        View Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Favorite;
