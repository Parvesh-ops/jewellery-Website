import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaMapMarkerAlt, FaMoneyBillWave, FaCreditCard, FaMobileAlt, FaLock, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalPrice, totalQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  const handlingFee = 500;
  const grandTotal = totalPrice + handlingFee;

  const handlePlaceOrder = () => {
    alert("🎉 Order placed successfully! Our team will contact you shortly.");
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <section className="bg-[#faf7f2] py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT – Address & Payment */}
        <div className="lg:col-span-2 space-y-8">

          {/* Address */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" />
              Delivery Address
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="input"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input"
              />
              <input
                type="text"
                placeholder="City / District"
                className="input"
              />
              <input
                type="text"
                placeholder="Ward / Tole"
                className="input"
              />
              <textarea
                placeholder="Full Address"
                rows={1}
                className="input md:col-span-2"
              />
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaMoneyBillWave className="text-yellow-500" />
              Payment Method
            </h3>

            <div className="space-y-3">
              <label className="payment-option">
                <input
                  type="radio"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                <FaMoneyBillWave />
                Cash on Delivery
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  checked={paymentMethod === "esewa"}
                  onChange={() => setPaymentMethod("esewa")}
                />
                <FaMobileAlt />
                eSewa / Khalti
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <FaCreditCard />
                Debit / Credit Card
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT – Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
          <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
            <FaShoppingBag className="text-yellow-500" />
            Order Summary
          </h3>

          <div className="flex justify-between mb-2 text-gray-700">
            <span>Sub Total ({totalQuantity} items)</span>
            <span>NPR {totalPrice.toLocaleString()}</span>
          </div>

          <div className="flex justify-between mb-2 text-gray-700">
            <span>Delivery</span>
            <span className="text-green-600 font-semibold">FREE</span>
          </div>

          <div className="flex justify-between mb-4 text-gray-700">
            <span>Handling Fee</span>
            <span>NPR {handlingFee}</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between text-lg font-bold mb-5">
            <span>Total</span>
            <span>NPR {grandTotal.toLocaleString()}</span>
          </div>

          {/* Trust */}
          <div className="text-sm text-gray-600 mb-5 space-y-2">
            <p className="flex items-center gap-2">
              <FaLock className="text-green-600" />
              Secure Payment Guaranteed
            </p>
            <p>✔ Trusted Nepali Jewellery Store</p>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            Place Order
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="w-full mt-3 text-sm underline text-gray-600 hover:text-black"
          >
            Back to Cart
          </button>
        </div>
      </div>

      {/* Tailwind helpers */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            outline: none;
          }
          .input:focus {
            border-color: #eab308;
          }
          .payment-option {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            cursor: pointer;
          }
          .payment-option input {
            accent-color: #eab308;
          }
        `}
      </style>
    </section>
  );
};

export default Checkout;
