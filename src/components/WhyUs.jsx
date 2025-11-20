import React from "react";
import { motion } from "framer-motion";

export default function WhyUs() {
  // WHY US DATA (with icons from Icons8)
  const whyUsData = [
    {
      value: "250+",
      label: "ACRES WI-FI ENABLED CAMPUS",
      icon: "https://img.icons8.com/ios-filled/100/4b5563/wifi.png",
    },
    {
      value: "120+",
      label: "CUTTING-EDGE PROGRAM OFFERED",
      icon: "https://img.icons8.com/ios-filled/100/4b5563/book.png",
    },
    {
      value: "6+",
      label: "SPECIALISED SCHOOLS",
      icon: "https://img.icons8.com/ios-filled/100/4b5563/university.png",
    },
    {
      value: "150+",
      label: "GLOBAL INDUSTRY PARTNERS",
      icon: "https://img.icons8.com/ios-filled/100/4b5563/organization.png",
    },
    {
      value: "",
      label: "CURRICULUM ENHANCED WITH VALUE ADDITION PROGRAMS",
      icon: "https://img.icons8.com/ios-filled/100/4b5563/training.png",
    },
    {
      value: "200+",
      label: "PLACEMENT PARTNERS",
      icon: "https://img.icons8.com/ios-filled/100/4b5563/handshake.png",
    },
    {
      value: "100%",
      label: "PLACEMENT ASSISTANCE",
      icon: "https://img.icons8.com/ios-filled/100/4b5563/goal.png",
    },
    {
      value: "50+",
      label: "HIGH-TECH RESEARCH LABS",
      icon: "https://img.icons8.com/ios-filled/100/4b5563/microscope.png",
    },
    {
      value: "10,000+",
      label: "INTERNATIONAL ALUMNI NETWORK",
      icon: "https://img.icons8.com/ios-filled/100/4b5563/conference.png",
    },
  ];

  const sliderData = [...whyUsData, ...whyUsData];

  return (
    <div className="relative w-full bg-white pt-2 pb-20 overflow-hidden max-w-7xl mx-auto">
      {/* Glowing Animated Dot */}
      {/* <motion.div
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-0 w-4 h-4 z-30"
        style={{
          offsetPath: "path('M 0 150 Q 500 0 1100 150 T 2200 150')",
          background: "#6366f1",
          borderRadius: "50%",
          boxShadow: "0 0 15px #6366f1",
        }}
      /> */}

      {/* Curved Path */}
      <svg width="100%" height="300" className="absolute top-1/3 left-0">
        <path
          d="M 0 150 Q 500 0 1100 150 T 2200 150"
          stroke="#c7d2fe"
          strokeWidth="5"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
      </svg>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto mt-5">
        <h4 className="text-3xl md:text-4xl font-extrabold text-slate-700 mb-4 text-left leading-tight">
          Why Us?
        </h4>

        {/* Slider */}
        <div className="mt-10 overflow-hidden relative">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {sliderData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="min-w-[260px] md:min-w-[300px] bg-gray-50 shadow-md hover:shadow-xl rounded-2xl p-7 border border-indigo-100 transition-all duration-500 hover:scale-105 relative"
              >
                {/* Floating Icon */}
                <motion.img
                  src={item.icon}
                  alt="icon"
                  className="w-16 h-16 mx-auto mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Number */}
                {item.value && (
                  <h3 className="text-4xl font-extrabold text-gray-600 text-center tracking-wide">
                    {item.value}
                  </h3>
                )}

                {/* Label */}
                <h4 className="mt-3 text-base font-semibold text-gray-500 uppercase text-center leading-snug">
                  {item.label}
                </h4>

                {/* Dot on Path */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="w-5 h-5 bg-indigo-500 rounded-full shadow shadow-indigo-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
