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
            {/* White Card Logo Box */}
            <div className="bg-white p-4 rounded-xl shadow-md w-[150px]">
              <img
                src="/logo/sunlogo.png"
                alt="Logo"
                className="w-full object-contain"
              />
            </div>

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

          {/* QUICK LINKS (Navbar Links) */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">Home</li>
              <li className="hover:text-white transition cursor-pointer">About Us</li>
              <li className="hover:text-white transition cursor-pointer">Course</li>
              <li className="hover:text-white transition cursor-pointer">Recruiters</li>
              <li className="hover:text-white transition cursor-pointer">Campus Life</li>
              <li className="hover:text-white transition cursor-pointer">WhyUs</li>
            </ul>
          </div>

          {/* PROGRAMS (From Course section) */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition cursor-pointer">B.DES Programs</li>
              <li className="hover:text-white transition cursor-pointer">MSC Programs</li>
              <li className="hover:text-white transition cursor-pointer">BSC Programs</li>
              <li className="hover:text-white transition cursor-pointer">MBA / Management</li>
              <li className="hover:text-white transition cursor-pointer">Arts & Commerce</li>
              <li className="hover:text-white transition cursor-pointer">Science Programs</li>
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
