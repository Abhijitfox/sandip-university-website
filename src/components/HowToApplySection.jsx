import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faFileSignature,
  faBookOpen,
  faUpload,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export default function HowToApplySection() {
  const steps = [
    {
      number: "01",
      title: "Visit Online Admission Portal",
      desc: "Visit the online portal to start your admission process.",
      icon: faLaptop,
      color: "from-blue-500 to-indigo-500",
    },
    {
      number: "02",
      title: "Fillup Online Registration Form",
      desc: "Fill out the registration form with your basic details.",
      icon: faFileSignature,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "03",
      title: "Select a Course",
      desc: "Choose the course you wish to apply for.",
      icon: faBookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      title: "Upload Educational Documents",
      desc: "Upload the required educational documents.",
      icon: faUpload,
      color: "from-orange-500 to-red-500",
    },
    {
      number: "05",
      title: "Pay Online",
      desc: "Complete your application by making the online payment.",
      icon: faCreditCard,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-left text-gray-800"
        >
          How To Apply?
        </motion.h2>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="
                bg-white bg-opacity-70 backdrop-blur-xl 
                shadow-xl border border-gray-200 rounded-3xl 
                p-8 w-full max-w-sm relative 
                hover:-translate-y-2 hover:shadow-2xl 
                transition-all duration-300
              "
            >
              {/* Gradient Floating Icon */}
              <div
                className={`
                  w-16 h-16 rounded-2xl shadow-lg mx-auto 
                  flex items-center justify-center text-white text-3xl
                  bg-gradient-to-br ${step.color} mb-6
                `}
              >
                <FontAwesomeIcon icon={step.icon} />
              </div>

              {/* Step Number */}
              <h3 className="text-5xl font-bold text-gray-200 absolute top-4 right-6 opacity-50 select-none">
                {step.number}
              </h3>

              {/* Title */}
              <h4 className="text-xl font-bold text-gray-800 text-center">
                {step.title}
              </h4>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-center leading-relaxed">
                {step.desc}
              </p>

              {/* Connector Line Animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1 }}
                className={`mt-6 h-1 rounded-full bg-gradient-to-r ${step.color}`}
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
