import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types/product";
import { products as productData } from "../data/products";
import { IoCartOutline } from "react-icons/io5";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
    const { id } = useParams<string>(); // for single product 
    const [singleProduct, setSingleProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const {addToCart} = useCart();
    useEffect(() => {
        if (id) {
            const foundProduct = productData.find(
                (product) => product.id.toString() === id
            );
            setSingleProduct(foundProduct || null);
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="font-bold text-red-600">Loading...</h1>
            </div>
        );
    }

    if (!singleProduct) {
        return (
            <div className="flex items-center justify-center h-screen text-xl text-gray-600">
                Product not found
            </div>
        );
    }


    return (
        <div className="px-4 sm:px-6 md:px-0 pb-8">
            <Breadcrums name={singleProduct.name} />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {/* IMAGE */}
                <div className="flex justify-center">
                    <img
                        src={singleProduct.image}
                        alt={singleProduct.name}
                        className="rounded-2xl w-80 object-contain border border-yellow-100"
                    />
                </div>

                {/* DETAILS */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {singleProduct.name}
                    </h1>
                    <p className="text-xs font-semibold uppercase text-gray-500 mb-1">
                        {singleProduct.type} {/* Gold / Silver / Platinum */}
                    </p>


                    <p className="uppercase text-sm text-gray-500">
                        {singleProduct.category}
                    </p>

                    {/* RATING */}
                    <div className="flex items-center gap-2 mt-2">
                        <div className="text-yellow-400 text-lg">
                            {"★".repeat(Math.round(singleProduct.rating))}
                            <span className="text-gray-300">
                                {"★".repeat(5 - Math.round(singleProduct.rating))}
                            </span>
                        </div>
                    </div>

                    {/* PRICE */}
                    <p className="text-2xl font-bold text-yellow-500 mt-2">
                        NRP {singleProduct.price}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 mt-3">
                        {singleProduct.description}
                    </p>

                    {/* QUANTITY + FAVORITE */}
                    <div className="flex items-center gap-4 mt-4">
                        <input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-20 border rounded-lg px-2 py-1"
                        />

                    </div>

                    {/* ACTIONS */}
                    <div className="flex gap-3 mt-5">
                        <button
                        onClick={()=> addToCart(singleProduct)}
                            className="flex items-center gap-2 text-sm bg-yellow-500 text-black px-3 py-1.5 rounded-full hover:bg-yellow-600 transition"
                        >
                            <IoCartOutline /> Add to Cart
                        </button>

                        <button
                            className="flex items-center gap-2 text-sm bg-yellow-500 text-black px-3 py-1.5 rounded-full hover:bg-yellow-600 transition">
                            💳 Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;