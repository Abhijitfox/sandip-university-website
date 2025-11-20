import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import EnquiryModal from "./EnquiryModal";

export default function Cource3() {
    const [openModal, setOpenModal] = useState(false);

  return (
        <>

    <section className="w-full bg-gradient-to-br from-[#f7f7f7] to-[#ffffff] py-10 px-4 sm:px-5 md:px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-5">

        {/* LEFT MODERN IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full"
        >
          <div className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-200 bg-white">
            <img
              src="/herosection/cource3.png"
              alt="B.DES Course"
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[450px] object-cover"
            />
          </div>

          {/* Decorative Glow */}
          <div className="absolute -bottom-8 sm:-bottom-10 -left-6 sm:-left-10 w-28 h-28 sm:w-40 sm:h-40 bg-red-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <h4 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-[#0E1B50] mb-3 sm:mb-4 leading-tight">
            Bachelor of Science
          </h4>

          <p className="text-lg sm:text-xl text-gray-600 font-medium mb-6 sm:mb-10">
            (3 Years | Full-Time Professional Program)
          </p>

          {/* Course Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-12">
            {[
              "Fashion & Apparel Design",
              "Interior Design & Decoration",
              "in Beauty Cosmetology",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-3 sm:p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-base sm:text-lg font-semibold text-gray-800">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Eligibility Block */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white bg-opacity-80 backdrop-blur-lg border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.1)] mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E1B50] mb-3 sm:mb-4">
              Eligibility Criteria
            </h3>

            <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
              ✔ Passed 10+2 or equivalent examination with minimum 45% marks
              (40% for reserved category) from any recognized Board/University.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              ✔ Or completed a 10th + Diploma in any relevant stream from a recognized institute.
            </p>
          </div>

          {/* Button */}
          <button 
                        onClick={() => setOpenModal(true)}

          className="px-5 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold shadow hover:scale-[1.02] transition flex items-center gap-2 text-sm sm:text-base">
            Enquire Now
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </motion.div>
      </div>
    </section>
          <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />

        </>

  );
}
