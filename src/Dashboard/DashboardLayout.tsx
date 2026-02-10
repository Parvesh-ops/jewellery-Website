import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { HiMenu } from "react-icons/hi";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-auto">

        {/* Navbar */}
        <div className="relative md:hidden">
          <Navbar />
          <button
            className="absolute top-4 left-4 text-gray-700 p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setSidebarOpen(true)}
          >
            <HiMenu size={24} />
          </button>
        </div>

        {/* Main Content */}
        <main className="p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
