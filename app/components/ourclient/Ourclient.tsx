"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  { name: "Protostarter", logo: "/logo3.png" },
  { name: "SYR Games", logo: "/logo3.png" },
  { name: "Socruyan", logo: "/logo3.png" },
  { name: "Angry Buchi", logo: "/logo2.png" },
  { name: "Experione", logo: "/logo2.png" },
  { name: "Client 6", logo: "/logo2.png" },
  { name: "Client 7", logo: "/logo2.png" },
  { name: "Client 8", logo: "/logo2.png" },
  { name: "Client 9", logo: "/logo2.png" },
  { name: "Client 10", logo: "/logo2.png" },
];

export default function OurClients() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
        Our Students<span className="text-teal-600">!</span>
      </h2>

      <div className="relative mt-10 overflow-hidden">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow hover:bg-gray-100 z-10"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-16"
          style={{
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36 transition-all duration-300 relative"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-24 sm:h-28 md:h-32 mx-auto object-contain transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow hover:bg-gray-100 z-10"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
