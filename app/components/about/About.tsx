import React from "react";

const courses = [
  {
    title: "📖 Basic Quran Reading",
    description:
      "Perfect for beginners to learn Noorani Qaida and basic Arabic reading.",
    price: "$25/month",
  },
  {
    title: "🎙️ Tajweed Course",
    description:
      "Master proper pronunciation, articulation, and Tajweed rules step-by-step.",
    price: "$35/month",
  },
  {
    title: "🧠 Hifz Program",
    description:
      "Memorize the Holy Quran with expert guidance, regular tests, and revision plans.",
    price: "$50/month",
  },
  {
    title: "🌐 Quran with Translation",
    description:
      "Understand the Quran through English or Urdu translation with tafsir insights.",
    price: "$30/month",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Our Online Quran Courses
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Learn from certified tutors with personalized, flexible classes
          designed for all levels — kids and adults alike.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 lg:grid-cols-2  gap-20">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-purple-300 hover:bg-orange-300 cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full font-medium">
                  {course.price}
                </span>
                <button className="text-green-600 hover:underline text-sm font-medium">
                  Join Course →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
