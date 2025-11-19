import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faGlobe,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

export default function StatsSection() {
  const stats = [
    {
      icon: faHandshake,
      value: "100%",
      label: "Placement Assistance",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: faGlobe,
      value: "100+",
      label: "Global Recruitment Partners",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: faBuildingColumns,
      value: "10+",
      label: "Annual Campus Placement Drives",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION TITLE */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 text-center">
          Why Choose Our University?
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Industry-focused education with strong placement support.
        </p>

        {/* 3 VERTICAL CARDS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
                group p-8 rounded-3xl shadow-xl 
                bg-white backdrop-blur-xl border border-gray-200
                hover:shadow-2xl hover:-translate-y-2 transition-all
              "
            >
              {/* ICON WRAPPER */}
              <div
                className={`
                  w-16 h-16 mx-auto flex items-center justify-center rounded-2xl 
                  bg-gradient-to-br ${item.color} text-white shadow-lg
                  group-hover:scale-110 transition-transform
                `}
              >
                <FontAwesomeIcon icon={item.icon} className="text-3xl" />
              </div>

              {/* VALUE */}
              <h3 className="text-4xl font-extrabold text-gray-800 mt-6 text-center">
                {item.value}
              </h3>

              {/* LABEL */}
              <p className="text-center text-gray-600 text-sm mt-2">
                {item.label}
              </p>

              {/* PROGRESS BAR ANIMATION */}
              <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${item.color}`}
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
