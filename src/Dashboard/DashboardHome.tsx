import { FaBoxOpen, FaShoppingCart, FaUsers, FaMoneyBillWave, FaPlus, FaGift } from "react-icons/fa";

const DashboardHome = () => {
  
  const totalProducts = 120;
  const totalOrders = 85;
  const totalCustomers = 200;
  const totalRevenue = 1250000; // in NPR

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-yellow-500 text-white rounded-2xl p-6 flex flex-col md:flex-row md:justify-between md:items-center shadow-lg">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome, Admin!
          </h1>
          <p className="text-yellow-100 text-lg">
            Manage Binod Jewellers inventory, orders, and customers efficiently.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <button className="bg-white text-yellow-500 px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-100 transition">
            <FaPlus /> Add Product
          </button>
          <button className="bg-white text-yellow-500 px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-100 transition">
            <FaGift /> Create Offer
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Products */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
            <FaBoxOpen size={24} />
          </div>
          <div>
            <p className="text-gray-500 font-semibold text-sm">Total Products</p>
            <p className="text-gray-900 font-bold text-xl">{totalProducts}</p>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
            <FaShoppingCart size={24} />
          </div>
          <div>
            <p className="text-gray-500 font-semibold text-sm">Total Orders</p>
            <p className="text-gray-900 font-bold text-xl">{totalOrders}</p>
          </div>
        </div>

        {/* Customers */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
            <FaUsers size={24} />
          </div>
          <div>
            <p className="text-gray-500 font-semibold text-sm">Total Customers</p>
            <p className="text-gray-900 font-bold text-xl">{totalCustomers}</p>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
            <FaMoneyBillWave size={24} />
          </div>
          <div>
            <p className="text-gray-500 font-semibold text-sm">Total Revenue</p>
            <p className="text-gray-900 font-bold text-xl">NPR {totalRevenue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-yellow-50">
                <th className="text-left p-3 font-semibold text-gray-700">Order ID</th>
                <th className="text-left p-3 font-semibold text-gray-700">Customer</th>
                <th className="text-left p-3 font-semibold text-gray-700">Product</th>
                <th className="text-left p-3 font-semibold text-gray-700">Amount</th>
                <th className="text-left p-3 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 text-gray-700">#1023</td>
                <td className="p-3 text-gray-700">Suman Shrestha</td>
                <td className="p-3 text-gray-700">Gold Necklace</td>
                <td className="p-3 text-gray-700">NPR 65,000</td>
                <td className="p-3 text-green-600 font-semibold">Delivered</td>
              </tr>
              <tr>
                <td className="p-3 text-gray-700">#1024</td>
                <td className="p-3 text-gray-700">Anita Rai</td>
                <td className="p-3 text-gray-700">Diamond Ring</td>
                <td className="p-3 text-gray-700">NPR 120,000</td>
                <td className="p-3 text-yellow-600 font-semibold">Pending</td>
              </tr>
              <tr>
                <td className="p-3 text-gray-700">#1025</td>
                <td className="p-3 text-gray-700">Ramesh Thapa</td>
                <td className="p-3 text-gray-700">Silver Bracelet</td>
                <td className="p-3 text-gray-700">NPR 25,000</td>
                <td className="p-3 text-blue-600 font-semibold">Processing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl p-4 flex flex-col items-center gap-2 font-semibold transition shadow">
          <FaBoxOpen size={24} />
          Add Product
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl p-4 flex flex-col items-center gap-2 font-semibold transition shadow">
          <FaShoppingCart size={24} />
          Manage Orders
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl p-4 flex flex-col items-center gap-2 font-semibold transition shadow">
          <FaUsers size={24} />
          Manage Customers
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl p-4 flex flex-col items-center gap-2 font-semibold transition shadow">
          <FaMoneyBillWave size={24} />
          Revenue Report
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;
