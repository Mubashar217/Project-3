"use client";

import React, { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Branding");

  const portfolioItems = [
    { src: "/7.jpg", alt: "Branding 1", category: "Branding" },
    { src: "/5.jpg", alt: "Branding 2", category: "Branding" },
    { src: "/5.jpg", alt: "Branding 3", category: "Branding" },
    { src: "/10996.jpg", alt: "App 1", category: "App" },
    { src: "/10997.jpg", alt: "Product 1", category: "Product" },
    { src: "/10996.jpg", alt: "Book 1", category: "Books" },
  ];

  const categories = ["All", "App", "Product", "Branding", "Books"];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto text-center">
      <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-2">Portfolio</h2>
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        CHECK OUR <span className="text-gray-900">PORTFOLIO</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600 hover:text-black"
            } pb-1 transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="rounded-2xl shadow-md w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
