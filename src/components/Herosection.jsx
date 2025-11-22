import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Herosection() {
  const [course, setCourse] = useState("");

  const specializationOptions = {
    "B.Des": [
      "B.Des in Fashion & Lifestyle Design",
      "B.Des in Space & Interior Design",
      "B.Des in Communication Design",
      "B.Des in Product Design",
    ],
    "M.Sc": ["M.Sc in Fashion & Apparel Design", "M.Sc in Beauty Cosmetology"],
    "B.Sc": [
      "B.Sc in Fashion & Apparel Design",
      "B.Sc in Interior Design & Decoration",
      "B.Sc in Beauty Cosmetology",
    ],
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans flex justify-center items-center">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/herosection/bghero.png')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/50" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-3 sm:px-6 md:px-8 grid lg:grid-cols-12 gap-6 sm:gap-10 items-center">
        
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 col-span-12 pt-4 2xl:scale-[1.15] 2xl:translate-x-6"
        >
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0 px-1">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-snug drop-shadow-xl text-white mb-2">
              Start Your Creative Journey at
            </h1>

            <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent tracking-wide drop-shadow-[0_4px_15px_rgba(0,0,0,0.7)] mb-1 block">
              Sandip University
            </span>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-2 mb-6"
            >
              <span className="text-2xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-white bg-clip-text text-transparent tracking-wide drop-shadow-[0_4px_15px_rgba(0,0,0,0.7)]">
                School of Design
              </span>

              <div className="h-[2px] sm:h-[4px] w-[10rem] sm:w-[18rem] md:w-[32rem] mt-3 mx-auto lg:mx-0 bg-gradient-to-r from-blue-600 to-red-300 rounded-full shadow-lg" />
            </motion.div>

            <p className="text-[11px] sm:text-sm md:text-xl text-gray-200 mt-4 leading-relaxed drop-shadow-lg">
              Applications Invited for <span className="font-semibold text-blue-300">SU-DAT 2026</span> <br />
              <span className="text-xs sm:text-base md:text-2xl">Entrance Exam Required for Bachelor of Design (B.Des.) Admissions.</span>
            </p>

            <div className="mt-5 flex items-center justify-center gap-6 sm:gap-10 bg-black/40 backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-3 rounded-2xl shadow-xl text-white w-full max-w-xs sm:max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <p className="text-[10px] sm:text-[15px] text-gray-100">Last Date to Apply</p>
                <h3 className="text-sm sm:text-base font-bold">29 Jan 2026</h3>
              </div>

              <span className="text-gray-400 text-base sm:text-lg font-light">|</span>

              <div className="text-center">
                <p className="text-[10px] sm:text-[16px] text-gray-100">SU-DAT Exam</p>
                <h3 className="text-sm sm:text-base font-bold">31 Jan 2026</h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 col-span-12 w-full flex justify-center lg:justify-end items-center 2xl:scale-[1.15] 2xl:translate-x-[-10px]"
        >
          <div className="bg-white/20 backdrop-blur-xl shadow-2xl rounded-2xl p-4 sm:p-6 w-full max-w-xs sm:max-w-md border border-white/10">
            <h2 className="text-base sm:text-xl font-semibold text-white text-center mb-4 animate-pulse">Apply Now</h2>

            <form className="grid grid-cols-1 gap-3 text-sm">
              <input className="hero-input" placeholder="Full Name *" />
              <input className="hero-input" placeholder="Email Address *" />
              <input className="hero-input" placeholder="Mobile Number *" />

              <select className="hero-input"><option>Select State *</option></select>
              <select className="hero-input"><option>Select City *</option></select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select className="hero-input" value={course} onChange={(e) => setCourse(e.target.value)}>
                  <option value="">Select Course *</option>
                  <option value="B.Des">Bachelor of Design (B.DES)</option>
                  <option value="M.Sc">Master of Science (MSC)</option>
                  <option value="B.Sc">Bachelor of Science (BSC)</option>
                </select>

                <select className="hero-input">
                  <option value="">Specialization *</option>
                  {course && specializationOptions[course].map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <div className="bg-white px-3 py-2 rounded-md text-gray-900 font-bold tracking-wider text-xs shadow">9F63A</div>
                <input className="hero-input flex-1" placeholder="Captcha *" />
              </div>

              <label className="flex items-start gap-2 text-[10px] sm:text-[11px] text-gray-200">
                <input type="checkbox" className="mt-0.5" /> I agree to receive admission updates.
              </label>

              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-md text-sm shadow-md">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
