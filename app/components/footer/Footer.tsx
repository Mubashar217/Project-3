import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 Zm Tech. All rights reserved.</p>

        <div className="mt-4">
          <a
            href="/about"
            className="text-gray-400 hover:text-white mx-4 text-sm"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white mx-4 text-sm"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white mx-4 text-sm"
          >
            Privacy Policy
          </a>
        </div>

        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <div className="mt-4">
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-white flex items-center justify-center text-sm"
          >
            <FaEnvelope size={18} className="mr-2" />
            onlinequran@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
