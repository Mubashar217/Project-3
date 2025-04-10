"use client";

import { useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaUsers,
  FaChartLine,
  FaCog,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div
        className={`lg:relative fixed inset-0 bg-black opacity-50 z-10 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`lg:block fixed inset-y-0 left-0 z-20 bg-gray-800 w-64 p-6 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-64`}
      >
        <div className="text-white text-3xl font-bold mb-8">Dashboard</div>
        <nav className="space-y-4">
          <a href="#" className="text-white flex items-center space-x-3">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </a>
          <a href="#" className="text-white flex items-center space-x-3">
            <FaUsers />
            <span>Users</span>
          </a>
          <a href="#" className="text-white flex items-center space-x-3">
            <FaChartLine />
            <span>Analytics</span>
          </a>
          <a href="#" className="text-white flex items-center space-x-3">
            <FaCog />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div className="flex-grow flex flex-col">
        <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
          <button onClick={toggleSidebar} className="lg:hidden text-2xl">
            <FaBars />
          </button>
          <div className="text-xl">Zain Online Quran</div>
          <button className="text-sm bg-blue-600 px-4 py-2 rounded-md">
            <a href="/"> Log Out</a>
          </button>
        </header>

        <main className="flex-grow p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-3xl font-bold mt-2">250</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-3xl font-bold mt-2">$45,320</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">New Signups</h3>
              <p className="text-3xl font-bold mt-2">35</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Analytics Overview</h3>
            <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
              <p className="text-center">Zm Tech Official</p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="mt-8 space-y-4">
            <div className="flex justify-center">
              <a
                href="/quran" 
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 shadow-lg transform active:scale-95 w-full sm:w-auto"
              >
                Class Start
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="/" 
                className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:from-red-600 hover:via-pink-600 hover:to-purple-600 shadow-lg transform active:scale-95 w-full sm:w-auto"
              >
                Log Out
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
