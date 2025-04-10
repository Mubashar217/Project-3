import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
      <div className="text-center mb-12">
        <p className="uppercase tracking-widest text-sm text-gray-500">Contact</p>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-2">
          Necessitatibus Eius Consequatur
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 sm:grid-cols-1">
        {/* Contact Info Cards */}
        <div className="grid gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="text-orange-500 text-2xl mb-2">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-sm">A108 Adam Street, Faisalabad, Pakistan</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="text-orange-500 text-2xl mb-2">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-sm">+92 3256586985</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="text-orange-500 text-2xl mb-2">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-sm">onlinequranademy@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="text-sm border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="text-sm border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="text-sm border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Message"
            className="text-sm border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <div className="text-right">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
