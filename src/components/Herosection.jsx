import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Herosection() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans">

{/* 🔵 PERFECT FULL-SCREEN BACKGROUND IMAGE */}
<motion.div
  initial={{ scale: 1 }}
  animate={{ scale: 1.06 }}
  transition={{
    duration: 12,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  }}
  className="
    absolute inset-0 
    w-full h-full 
    bg-cover bg-center bg-no-repeat
  "
  style={{
    backgroundImage: "url('/herosection/bghero.png')",
    backgroundSize: "cover",       // Ensures full-screen coverage
    backgroundPosition: "center",  // Keeps subject centered
    backgroundRepeat: "no-repeat", // Prevents tiling
  }}
/>



      {/* DARK GRADIENT OVERLAY FOR TEXT VISIBILITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/30" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 
                      grid lg:grid-cols-12 gap-10 items-center pt-32 pb-20">

        {/* LEFT SECTION */}
      <motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="lg:col-span-7 col-span-12"
>
  <div className="
  max-w-xl
  ">
    
    {/* Subtle Blue Glow Behind */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-40 rounded-3xl" />

    {/* Content */}
    <div className="relative z-10 text-white">

  {/* Heading */}
  <h1 className="text-4xl md:text-5xl font-extrabold leading-snug drop-shadow-xl">
    Start Your Creative Journey at

    <span
      className="block mt-2 text-5xl md:text-6xl 
      bg-gradient-to-r from-blue-600 to-blue-100 
      bg-clip-text text-transparent 
      drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
    >
      Sandip University
    </span>

    {/* NEW: Design School Line */}
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="block text-2xl md:text-3xl 
      font-light tracking-wide 
       drop-shadow-2xl mt-1"
    >
      School of Design
    </motion.span>
  </h1>

  {/* Description */}
  <p className="text-sm md:text-lg text-gray-200 mt-4 leading-relaxed drop-shadow-lg">
    Apply for the B.Design Programme focused on creativity, innovation &
    hands-on practical training to shape your future in design excellence.
  </p>

  {/* Info Bar */}
  <div
    className="
      mt-6 flex items-center gap-5
      bg-black/30 backdrop-blur-xl 
      border border-white/10
      px-6 py-3 rounded-2xl shadow-lg
    "
  >
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faBookOpen} className="text-blue-300 text-lg" />
      <span className="text-white font-medium">4-Year Programme</span>
    </div>

    <span className="text-gray-100">|</span>

    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faClock} className="text-blue-300 text-lg" />
      <span className="text-white">
        SUDAT-Date:{" "}
        <span className="text-blue-100 font-semibold">31 Jan 2026</span>
      </span>
    </div>
  </div>

</div>

  </div>
</motion.div>

        {/* RIGHT SECTION — FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 col-span-12 w-full flex justify-end"
        >
          <div className="bg-white/20 backdrop-blur-xl borde
                          shadow-2xl rounded-2xl p-6 w-full max-w-md">
   <h2
      className="
        text-xl font-semibold text-white text-center mb-4
        animate-pulse
      "
    >
      Apply Now
    </h2>

            <form className="grid grid-cols-1 gap-3 text-sm">
              <input className="hero-input" placeholder="Full Name *" />
              <input className="hero-input" placeholder="Email Address *" />
              <input className="hero-input" placeholder="Mobile Number *" />

              <select className="hero-input"><option>Select State *</option></select>
              <select className="hero-input"><option>Select City *</option></select>
              <select className="hero-input"><option>Select Course *</option></select>
{/* 
              <div className="flex items-center gap-3">
                <div className="bg-white px-3 py-2 rounded-md 
                                text-gray-900 font-bold tracking-wider text-xs shadow">
                  9F63A
                </div>
                <input className="hero-input flex-1" placeholder="Captcha *" />
              </div> */}

              <label className="flex items-start gap-2 text-[11px] text-gray-200 mt-1">
                <input type="checkbox" className="mt-0.5" />
                I agree to receive admission updates.
              </label>

              <button className="w-full py-2.5 mt-1 bg-blue-600 hover:bg-blue-700 
                                 transition text-white font-semibold 
                                 rounded-md text-sm shadow-md">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
