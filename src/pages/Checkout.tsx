import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingBag, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    district: "",
    landmark: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"cash" | "esewa">("cash");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const deliveryCharge = 500;
  const grandTotal = totalPrice + deliveryCharge;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.trim()))
      newErrors.phone = "Phone number must be 10 digits";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.district.trim()) newErrors.district = "District is required";
    if (!form.landmark.trim()) newErrors.landmark = "Landmark is required";
    if (!form.address.trim()) newErrors.address = "Full address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    alert(
      `🎉 Order placed successfully! Payment method: ${paymentMethod === "cash" ? "Cash on Delivery" : "eSewa"
      }`
    );
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <p className="text-lg text-gray-600">Your cart is empty.</p>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 px-6 py-2 rounded-full bg-yellow-500 text-black hover:bg-yellow-600 transition"
        >
          Browse Jewellery
        </button>
      </div>
    );
  }

  const inputClass = "border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400";

  return (
    <section className="bg-[#faf7f2] py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE: Form */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 1. General Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold mb-2">1. General Info</h3>
            <div className="grid md:grid-cols-2 gap-4">

              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium mb-1">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className={`${inputClass} ${errors.name ? "border-red-500" : ""}`}
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-bold mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col md:col-span-2">
                <label htmlFor="phone" className="text-sm font-bold mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  className={`${inputClass} ${errors.phone ? "border-red-500" : ""}`}
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* 2. Address */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold mb-2">2. Address</h3>
            <div className="grid md:grid-cols-2 gap-4">

              <div className="flex flex-col">
                <label htmlFor="city" className="text-sm font-bold mb-1">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  className={`${inputClass} ${errors.city ? "border-red-500" : ""}`}
                  value={form.city}
                  onChange={handleChange}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="district" className="text-sm font-bold mb-1">District</label>
                <input
                  id="district"
                  type="text"
                  name="district"
                  placeholder="Enter district"
                  className={`${inputClass} ${errors.district ? "border-red-500" : ""}`}
                  value={form.district}
                  onChange={handleChange}
                />
                {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="landmark" className="text-sm font-bold mb-1">Landmark</label>
                <input
                  id="landmark"
                  type="text"
                  name="landmark"
                  placeholder="Enter landmark"
                  className={`${inputClass} ${errors.landmark ? "border-red-500" : ""}`}
                  value={form.landmark}
                  onChange={handleChange}
                />
                {errors.landmark && <p className="text-red-500 text-xs mt-1">{errors.landmark}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="address" className="text-sm font-bold mb-1">Full Address</label>
                <input
                  id="address"
                  name="address"
                  placeholder="Enter your full address"
                  className={`${inputClass} ${errors.address ? "border-red-500" : ""}`}
                  value={form.address}
                  onChange={handleChange}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
            </div>
          </div>

          {/* 3. Payment Method */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold mb-2">3. Payment Method</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                Cash on Delivery
              </label>
              
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "esewa"}
                  onChange={() => setPaymentMethod("esewa")}
                />
                e-Sewa
              </label>
            </div>
          </div>
        </div>

        {/*  Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaShoppingBag className="text-yellow-500" /> Order Summary
          </h3>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-gray-700 gap-2">
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md border border-gray-300"
              />

              {/* Product Name & Quantity */}
              <div className="flex-1 ml-2">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">x {item.quantity}</p>
              </div>

              {/* Price */}
              <span className="font-medium">NPR {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}

          <hr className="my-2" />

          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>NPR {totalPrice.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-gray-700">
            <span>Delivery Charge</span>
            <span>NPR {deliveryCharge}</span>
          </div>

          <div className="flex justify-between font-bold text-gray-900 text-lg">
            <span>Total</span>
            <span>NPR {grandTotal.toLocaleString()}</span>
          </div>
          

          {/* Buttons */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            {paymentMethod === "esewa" ? "Pay with eSewa" : "Place Order (COD)"}
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="w-full text-sm underline text-gray-600 hover:text-black"
          >
            Back to Cart
          </button>

          <div className="text-sm text-gray-500 mt-2">
            <p className="flex items-center gap-1">
              <FaLock className="text-green-600" /> Secure Payment Guaranteed
            </p>
            <p>✔ Trusted Nepali Jewellery Store</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Checkout;
