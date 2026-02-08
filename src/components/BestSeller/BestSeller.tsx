
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { useData } from "../../context/DataContext";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useCart } from "../../context/CartContext";
import { useFavorite } from "../../context/FavoriteContext";
import { useToast } from "../../context/ToastContext";

const BestSeller = () => {
    const { data } = useData();
    const { addToCart } = useCart();
    const { addToFavorites } = useFavorite()
    const { showToast } = useToast();

    const bestSellers = data.slice(0, 4);



    return (
        <section className="py-16 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl  font-bold mb-3">
                        Best Selling Jewellery
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Discover our most loved jewellery pieces, trusted by families for
                        quality, purity, and timeless beauty.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {bestSellers.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden group"
                        >
                            {/* Image */}
                            <Link to={`/products/${product.id}`} className="block relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                                />
                            </Link>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-sm md:text-base font-semibold mb-1 truncate">
                                    {product.name}
                                </h3>

                                <p className="text-yellow-600 font-bold mb-3">
                                    NRP {product.price.toLocaleString()}
                                </p>

                                {/* Actions */}
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => {
                                            addToCart(product);
                                            showToast(`✔ added to cart!!`);
                                        }}

                                        className="flex items-center gap-2 text-sm bg-yellow-500 text-black px-3 py-1.5 rounded-full hover:bg-yellow-600 transition"
                                    >
                                        <IoCartOutline />
                                        Add
                                    </button>

                                    <button
                                        onClick={() => addToFavorites(product)}
                                        className="text-gray-600 hover:text-red-500 transition">
                                        <GrFavorite />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All */}
                <div className="text-center mt-10">
                    <Link
                        to="/products"
                        className="group inline-flex items-center gap-2 border border-yellow-500 text-yellow-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition"
                    >
                        View All Jewellery
                        <HiArrowNarrowRight
                            className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BestSeller;
