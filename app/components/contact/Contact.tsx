import React from "react";

export default function Contact() {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="text-center mb-12">
        <p className="uppercase tracking-widest text-sm text-gray-500">
          Contact
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-2">
          Necessitatibus Eius Consequatur
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-2 bg-white shadow-lg rounded-2xl p-6 text-center">
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
            <p className="text-sm">+1 5589 55488 55</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <div className="text-orange-500 text-2xl mb-2">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-sm">onlinequranademy@gmail.com</p>
          </div>
        </div>

        <form className="bg-white shadow-lg rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="text-sm border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="text-sm border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="text-sm border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="text-sm border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
