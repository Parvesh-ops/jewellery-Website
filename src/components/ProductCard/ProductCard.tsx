
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import type { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useFavorite } from "../../context/FavoriteContext";
import { useToast } from "../../context/ToastContext";

interface ProductProps {
    product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
    const navigate = useNavigate() // for singleProduct

    const { addToCart } = useCart();
    const { showToast } = useToast();
    const { favorites, addToFavorites, removeFromFavorites } = useFavorite();
    const isFavorite = favorites.find(
        (item) => item.id === product?.id
    );
    return (
        <div className="border rounded-lg cursor-pointer border-gray-300 hover:scale-105 hover:shadow-xl transition-transform duration-300 bg-white overflow-hidden">
            {/* Image */}
            <img
                src={product.image}
                alt={product.name}
                onClick={() => navigate(`/products/${product.id}`)}  // for singleProduc
                className="w-full h-40 sm:h-48 object-cover transition duration-300"
            />

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
                            addToCart(product)
                            showToast(`✔ added to cart!!`);
                        }}
                        className="flex items-center gap-1 text-xs sm:text-sm 
                         bg-yellow-500 text-black px-2 sm:px-3 py-1.5 
                          rounded-full hover:bg-yellow-600 transition"
                    >
                        <IoCartOutline />
                        Add
                    </button>


                        <button
                            onClick={() => {
                                if (isFavorite) {
                                    removeFromFavorites(product.id);
                                    showToast(` removed from wishlist!`);
                                } else {
                                    addToFavorites(product);
                                    showToast(`✔added to wishlist!`);
                                }
                            }}
                            className={`transition text-xl ${isFavorite ? "text-red-500" : "text-gray-600 hover:text-red-500"
                                }`}
                        >
                            <GrFavorite />
                        </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
