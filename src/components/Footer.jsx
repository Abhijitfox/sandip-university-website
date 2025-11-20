import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              YourBrand
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Creating world-class digital experiences with modern design,
              technology, and strategy.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white" />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white" />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
              </a>

              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition">Home</li>
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Courses</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

          {/* COURSES */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition">Engineering</li>
              <li className="hover:text-white transition">Management</li>
              <li className="hover:text-white transition">Arts & Commerce</li>
              <li className="hover:text-white transition">Science Programs</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>📍 Pune, Maharashtra, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ contact@yourbrand.com</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
