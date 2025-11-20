import React from "react";
import { motion } from "framer-motion";
const logos = [
  "/recruiters/10001.png",
  "/recruiters/10002.png",
  "/recruiters/10004.jpg",
  "/recruiters/10005.png",
  "/recruiters/10007.png",
  "/recruiters/10008.png",
  "/recruiters/10009.png",
  "/recruiters/10010.png",
  "/recruiters/10011.png",
  "/recruiters/10012.webp",
  "/recruiters/10013.png",
  "/recruiters/10014.webp",
  "/recruiters/10015.png",
  "/recruiters/10017.png",
  "/recruiters/10018.png",
];

const doubledLogos = [...logos, ...logos];

export default function RecruiterSlider() {
  return (
    <div className="relative w-full bg-white py-10 overflow-hidden max-w-7xl mx-auto">
  <h4 className="text-3xl md:text-4xl font-extrabold text-slate-700 mb-10">
        Our Recruiters
        </h4>
      {/* 🔥 Background Blurred Shape */}
      <div className="absolute -bottom-10 left-[30%] w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>

      {/* (Optional) second blur for better design */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {doubledLogos.map((logo, index) => (
        <div
  key={index}
  className="min-w-[220px] h-[160px] flex items-center justify-center  cursor-pointer
             bg-white/60 backdrop-blur-xl border border-slate-200 
             rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]
             hover:shadow-[0_6px_25px_rgba(0,0,0,0.1)]
             transition-all duration-300 px-6"
>
  <img
    src={logo}
    alt="recruiter logo"
    className="max-h-[80px] w-auto object-contain opacity-80 hover:opacity-100 transition"
  />
</div>

          ))}
        </motion.div>
      </div>
    </div>
  );
}
