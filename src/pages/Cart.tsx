import { FaMinus, FaPlus, FaRegTrashAlt, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { FaShoppingBag, FaTruck, FaTools, FaLock, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const { cartItems, increaseQty, decreaseQty, removeFromCart, totalPrice, totalQuantity, clearCart, } = useCart();
    const navigate = useNavigate()

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Your Jewellery Cart is Empty 💍
                </h2>
                <p className="text-gray-600">
                    Explore our gold, silver & diamond collections crafted for Nepali families.
                </p>
                <button
                    onClick={() => navigate("/products")}
                    className="bg-yellow-500  mt-6 px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-yellow-600"
                >
                    Browse Jewellery
                </button>
            </div>
        );
    }

    return (
        <section className="bg-[#faf7f2] py-8 px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Shopping Cart ({totalQuantity} items)
                    </h2>

                    <hr className="mb-4" />

                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row gap-4"
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                onClick={() => navigate(`/products/${item.id}`)}
                                className="w-full sm:w-15 h-18 object-cover rounded-xl cursor-pointer border border-yellow-500 "
                            />

                            {/* Details */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 text-lg">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    NPR {item.price.toLocaleString()}
                                </p>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3 mt-3">
                                    <button
                                        onClick={() => decreaseQty(item.id)}
                                        className="p-2 rounded-full border hover:bg-gray-100"
                                    >
                                        <FaMinus size={12} />
                                    </button>

                                    <span className="font-semibold">{item.quantity}</span>

                                    <button
                                        onClick={() => increaseQty(item.id)}
                                        className="p-2 rounded-full border hover:bg-gray-100"
                                    >
                                        <FaPlus size={12} />
                                    </button>
                                </div>
                            </div>

                            {/* Price & Remove */}
                            <div className="flex sm:flex-col justify-between items-end">
                                <p className="font-bold text-gray-900">
                                    NPR {(item.price * item.quantity).toLocaleString()}
                                </p>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-600 mt-2"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
                    <h3 className="text-xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
                        <FaShoppingBag className="text-yellow-500" />
                        Order Summary
                    </h3>

                    {/* Subtotal */}
                    <div className="flex justify-between items-center text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                            <FaShoppingBag className="text-gray-400" />
                            Sub Total ({totalQuantity} product{totalQuantity > 1 ? "s" : ""})
                        </span>
                        <span className="font-medium">
                            NPR {totalPrice.toLocaleString()}
                        </span>
                    </div>

                    {/* Delivery */}
                    <div className="flex justify-between items-center text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                            <FaTruck className="text-gray-400" />
                            Delivery
                        </span>
                        <span className="text-green-600 font-semibold">FREE</span>
                    </div>

                    {/* Handling Fee */}
                    <div className="flex justify-between items-center text-gray-700 mb-4">
                        <span className="flex items-center gap-2">
                            <FaTools className="text-gray-400" />
                            Handling Fee
                        </span>
                        <span>NPR 500</span>
                    </div>

                    <hr className="mb-4" />

                    {/* Total */}
                    <div className="flex justify-between items-center text-lg font-bold text-gray-900 mb-5">
                        <span>Total</span>
                        <span>
                            NPR {(totalPrice + 500).toLocaleString()}
                        </span>
                    </div>

                    {/* Trust Badges */}
                    <div className="text-sm text-gray-600 space-y-2 mb-6">
                        <p className="flex items-center gap-2">
                            <FaLock className="text-green-600" />
                            Secure Payment
                        </p>
                        <p className="flex items-center gap-2">
                            <FaHeadset className="text-blue-600" />
                            24×7 Customer Support
                        </p>
                    </div>

                    {/* Checkout */}
                    <button 
                    onClick={()=> navigate('/checkout')}
                    className="w-full bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
                        Proceed to Checkout
                    </button>

                    {/* Continue Shopping */}
                    <button
                        onClick={() => navigate('/products')}
                        className="w-full mt-3 text-sm text-gray-700 hover:text-black underline text-center">
                        Continue Shopping
                    </button>

                    {/* Clear Cart */}
                    <button
                        onClick={() => {
                            if (window.confirm("Are you sure you want to clear your jewellery cart?")) {
                                clearCart();
                            }
                        }}
                        className="w-full mt-4 flex items-center justify-center gap-2 text-sm text-red-600 hover:text-red-700 transition"
                    >
                        <FaRegTrashAlt className="text-red-500" />
                        Clear Cart
                    </button>

                </div>

            </div>
        </section>
    );
};

export default Cart;
