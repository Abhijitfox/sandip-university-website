import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaMobileAlt } from "react-icons/fa";

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
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Home">Home</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#About-Us">About Us</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Course">Course</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Recruiters">Recruiters</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Campus-Life">Campus Life</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#WhyUs">WhyUs</a>
  </li>
</ul>


          </div>

          {/* PROGRAMS (From Course section) */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
             <ul className="space-y-3 text-gray-400 text-sm">
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Course">B.DES Programs</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Course">MSC Programs</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Course">BSC Programs</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Course">MBA / Management</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Course">Arts & Commerce</a>
  </li>
  <li className="hover:text-white transition cursor-pointer">
    <a href="#Course">Science Programs</a>
  </li>
</ul>

            </ul>
          </div>

  {/* CONTACT */}
<div>
  <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>

  <ul className="space-y-4 text-gray-300 text-sm">

    {/* Address */}
    <li className="flex gap-3">
      <FaMapMarkerAlt className="text-blue-400 text-lg mt-1" />
      <div className="leading-relaxed">
        <p className="font-medium text-white">Address:</p>
        <p className="text-gray-300">
          Trimbak Road, Nashik, Maharashtra, India
        </p>
      </div>
    </li>

    {/* Email */}
    <li className="flex gap-3">
      <FaEnvelope className="text-blue-400 text-lg mt-1" />
      <div className="leading-relaxed">
        <p className="font-medium text-white">Email:</p>
        <a
          href="mailto:info@sandipuniversity.edu.in"
          className=" decoration-blue-400"
        >
          info@sandipuniversity.edu.in
        </a>
      </div>
    </li>

    {/* Toll-Free Number */}
    <li className="flex gap-3">
      <FaPhoneAlt className="text-blue-400 text-lg mt-1" />
      <div className="leading-relaxed">
        <p className="font-medium text-white">Toll-Free Number:</p>
        <a
          href="tel:18002122714"
          className=" decoration-blue-400"
        >
          1800-212-2714
        </a>
      </div>
    </li>

    {/* Mobile Number */}
    <li className="flex gap-3">
      <FaMobileAlt className="text-blue-400 text-lg mt-1" />
      <div className="leading-relaxed">
        <p className="font-medium text-white">Mobile Number:</p>
        <a
          href="tel:+919545453092"
          className=" decoration-blue-400"
        >
          +91 9545453092
        </a>
      </div>
    </li>

  </ul>
</div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-4 pt-2 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
