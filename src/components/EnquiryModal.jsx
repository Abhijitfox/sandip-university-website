import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function EnquiryModal({ open, onClose }) {
  const [course, setCourse] = useState("");

  if (!open) return null;

  const specializationOptions = {
    "B.Des": [
      "B.Des in Fashion & Lifestyle Design",
      "B.Des in Space & Interior Design",
      "B.Des in Communication Design",
      "B.Des in Product Design",
    ],
    "M.Sc": [
      "M.Sc in Fashion & Apparel Design",
      "M.Sc in Beauty Cosmetology",
    ],
    "B.Sc": [
      "B.Sc in Fashion & Apparel Design",
      "B.Sc in Interior Design & Decoration",
      "B.Sc in Beauty Cosmetology",
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-md z-[999] 
                 flex justify-center items-center px-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Enquiry Form
        </h2>

        {/* FORM */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">

          <input className="google-input" placeholder="Full Name *" />
          <input className="google-input" placeholder="Email Address *" />

          <input className="google-input" placeholder="Mobile Number *" />
    <select className="google-input">
            <option>Select State *</option>
          </select>

          <select className="google-input">
            <option>Select City *</option>
          </select>

          {/* Course Dropdown */}
          <select
            className="google-input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course *</option>
            <option value="B.Des">Bachelor of Design (B.DES)</option>
            <option value="M.Sc">Master of Science (MSC)</option>
            <option value="B.Sc">Bachelor of Science (BSC)</option>
          </select>

          {/* Specialization Dropdown */}
          <select className="google-input">
            <option value="">Select Specialization *</option>
            {course &&
              specializationOptions[course].map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>

      
          {/* Captcha */}
          <div className="flex items-center gap-3 md:col-span-2">
            <div
              className="bg-gray-100 px-3 py-2 rounded-md 
                         text-gray-800 font-bold tracking-wider text-xs shadow-sm"
            >
              9F63A
            </div>
            <input className="google-input flex-1" placeholder="Enter Captcha *" />
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-2 text-xs text-gray-600 mt-1 md:col-span-2">
            <input type="checkbox" className="mt-0.5" />
            I agree to receive admission updates and communication.
          </label>

          {/* Submit */}
          <button
            className="w-full py-3 md:col-span-2 bg-blue-600 hover:bg-blue-700
                     transition text-white font-semibold 
                     rounded-lg text-sm shadow-md mt-2"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
