
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import type { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";

interface ProductProps {
    product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
        const navigate = useNavigate() // for singleProduct
    return (
        <div className="border rounded-lg cursor-pointer border-gray-300 hover:scale-105 hover:shadow-xl transition-transform duration-300 bg-white overflow-hidden">
            {/* Image */}
            <img
                src={product.image}
                alt={product.name}
                onClick={() => navigate(`/products/${product.id}`)}  // for singleProduc
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Content */}
            <div className="p-4">
                <h3 className="text-sm md:text-base font-semibold mb-1 truncate">
                    {product.name}
                </h3>

                <p className="text-yellow-600 font-bold mb-3">
                    {product.price.toLocaleString()}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-sm bg-yellow-500 text-black px-3 py-1.5 rounded-full hover:bg-yellow-600 transition">
                        <IoCartOutline />
                        Add
                    </button>

                    <button className="text-gray-600 hover:text-red-500 transition">
                        <GrFavorite />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
