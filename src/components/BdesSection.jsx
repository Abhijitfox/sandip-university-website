import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BdesSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f7f7f7] to-[#ffffff] py-20 px-5 md:px-14">
          <h4 className="text-3xl md:text-4xl font-extrabold text-slate-700 mb-4 text-left leading-tight">
            Programs Offered
</h4>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-star mt-16">

        {/* LEFT MODERN IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-200 bg-white">
            <img
              src="https://mywebsite.blog/sandipuniversity/02/assets/images/SKP07251.jpg"
              alt="B.DES Course"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Decorative Gradient Glow */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-2xl md:text-2xl font-extrabold text-[#0E1B50] mb-4 leading-tight">
            Bachelor of Design  
          </h4>
          <p className="text-xl text-gray-600 font-medium mb-10">
            (4 Years | Full-Time Professional Program)
          </p>

          {/* Course Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {[
              "Fashion & Lifestyle Design",
              "Space & Interior Design",
              "Communication Design",
              "Product Design",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-3 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-lg font-semibold text-gray-800">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Eligibility Block */}
          <div className="p-8 rounded-3xl bg-white bg-opacity-80 backdrop-blur-lg border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.1)] mb-10">
            <h3 className="text-2xl font-bold text-[#0E1B50] mb-4">Eligibility Criteria</h3>

            <p className="text-gray-700 leading-relaxed mb-3">
              ✔ Passed 10+2 or equivalent examination with minimum 45% marks  
              (40% for reserved category) from any recognized Board/University.
            </p>

            <p className="text-gray-700 leading-relaxed">
              ✔ Or completed a 10th + Diploma in any relevant stream from a recognized institute.
            </p>
          </div>

          {/* Button */}
         <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold shadow hover:scale-[1.02] transition flex items-center gap-2">
                            Enquire Now 

                <FontAwesomeIcon icon={faArrowRight} />
              </button>
        </motion.div>
      </div>
    </section>
  );
}
