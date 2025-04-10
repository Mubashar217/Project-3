"use client";

import React, { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const portfolioItems = [
    { src: "boys1.jpg", alt: "Boy 1", category: "Boys" },
    { src: "boys2.jpg", alt: "Boy 2", category: "Boys" },
    { src: "boys3.jpg", alt: "Boy 3", category: "Boys" },
    { src: "girl1.jpg", alt: "Girl 1", category: "Girls" },
    { src: "girl2.jpg", alt: "Girl 2", category: "Girls" },
    { src: "both1.jpg", alt: "Both 1", category: "Both" },
    // { src: "/10996.jpg", alt: "Book 1", category: "Books" },
  ];

  const categories = ["All", "Boys", "Girls", "Both", "Books"];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div id="about" className="px-4 py-10 max-w-7xl mx-auto text-center">
      <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-2">
        Portfolio
      </h2>
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        CHECK OUR <span className="text-orange-500">PORTFOLIO</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`pb-1 transition duration-300 ${
              activeCategory === category
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600 hover:text-black"
            }`}
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
            className="rounded-2xl shadow-md w-full object-cover h-72 hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
