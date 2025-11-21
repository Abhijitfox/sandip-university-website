import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowRight, 
  faCheckCircle, 
  faGraduationCap, 
  faBriefcase 
} from "@fortawesome/free-solid-svg-icons";
import EnquiryModal from "./EnquiryModal";

const courseData = {
  "B.Des": {
    title: "Bachelor of Design (B.Des)",
    duration: "4 Years | Full-Time",
    image: "/herosection/bghero.png", // Ensure this path is correct
    specializations: {
      "Fashion & Lifestyle": [
        "Fashion Designer", "Fashion Illustrator", "Stylist", "Textile Designer", 
        "Merchandiser", "Accessory Designer"
      ],
      "Space & Interior": [
        "Interior Designer", "Exhibition Designer", "Lighting Designer", 
        "Set Designer", "Furniture Designer"
      ],
      "Communication Design": [
        "Graphic Designer", "UI/UX Designer", "Art Director", 
        "Brand Strategist", "Digital Media Designer"
      ],
      "Product Design": [
        "Product Designer", "Industrial Designer", "UX Designer", 
        "Design Strategist"
      ],
    },
    eligibility: [
      "Passed 10+2 with 45% (40% for reserved category)",
      "OR 10th + Diploma in any stream",
    ],
  },
  "B.Sc": {
    title: "Bachelor of Science (B.Sc)",
    duration: "3 Years | Full-Time",
    image: "/herosection/cource3.png",
    specializations: {
      "Fashion & Apparel": [
        "Costume Designer", "Apparel Designer", "Textile Designer", 
        "Garment Technologist"
      ],
      "Interior Design": [
        "Interior Designer", "3D Visualizer", "Interior Stylist", 
        "Set Designer", "Design Consultant"
      ],
      "Beauty Cosmetology": [
        "Cosmetologist", "Hair Stylist", "Makeup Artist", 
        "Beauty Therapist", "Skin Care Specialist"
      ],
    },
    eligibility: [
      "Passed 10+2 with 45% marks (40% reserved)",
      "OR 12th + Diploma in Pharmacy",
    ],
  },
  "M.Sc": {
    title: "Master of Science (M.Sc)",
    duration: "2 Years | Full-Time",
    image: "/herosection/mcsimg.png",
    specializations: {
      "Fashion & Apparel": [
        "Fashion Designer", "Production Manager", "Fashion Merchandiser", 
        "Fashion Stylist"
      ],
      "Beauty Cosmetology": [
        "Makeup Artist", "Cosmetologist", "Skin Specialist", 
        "Salon Manager", "Product Trainer"
      ],
    },
    eligibility: [
      "Graduation with minimum 50% (45% reserved category)",
      "From any recognized university",
    ],
  },
};

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("B.Des");
  const [activeSpec, setActiveSpec] = useState(
    Object.keys(courseData["B.Des"].specializations)[0]
  );
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className=" w-full py-5 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
          <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-3xl font-semibold tracking-wide text-center text-slate-700 mb-8"
        >
          Programs Offered
        </motion.h2>
      <div className="absolute -bottom-10 left-[30%] w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>

        {/* MAIN TABS (Sliding Pill Design) */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex relative">
            {Object.keys(courseData).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveSpec(Object.keys(courseData[tab].specializations)[0]);
                }}
                className={`relative px-4 py-1 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 z-10  ${
                  activeTab === tab ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-[#0E1B50] rounded-full shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Image (4 cols) */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] w-full"
              >
                <img
                  src={courseData[activeTab].image}
                  alt={courseData[activeTab].title}
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 text-white">
                  {/* <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-lg inline-block mb-2 border border-white/30">
                    <span className="text-xs font-bold uppercase tracking-wider">Top Choice</span>
                  </div> */}
                  <h3 className="text-2xl font-bold">{activeTab} Program</h3>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Decorative Offset Border behind image */}
            <div className="absolute -z-10 top-6 -left-6 w-full h-full rounded-3xl border-2 border-[#0E1B50]/10 hidden md:block"></div>
          </div>

          {/* RIGHT COLUMN: Details (8 cols) */}
          <div className="lg:col-span-7 space-y-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-content"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="mb-3">
                  <h3 className="text-3xl font-bold text-[#0E1B50] mb-2">
                    {courseData[activeTab].title}
                  </h3>
                  <div className="flex items-center gap-4 text-slate-500 font-medium">
                    <FontAwesomeIcon icon={faBriefcase} className="text-sky-500" />
                    {courseData[activeTab].duration}
                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Choose Specialization
                  </h4>
                  </div>
                  
                </div>

                {/* Specialization Chips */}
                <div className="mb-3">
            
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(courseData[activeTab].specializations).map((spec) => (
                      <button
                        key={spec}
                        onClick={() => setActiveSpec(spec)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                          activeSpec === spec
                            ? "bg-sky-50 border-sky-200 text-[#0E1B50] shadow-sm ring-1 ring-sky-200"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {spec}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Content Box */}
                <div className="bg-white border border-slate-100 rounded-2xl p-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSpec}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Career Scope */}
                      <div className="mb-3">
                        <h4 className="font-bold text-[#0E1B50] flex items-center gap-2 mb-4">
                          <span className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                             <FontAwesomeIcon icon={faBriefcase} size="sm" />
                          </span>
                          Career Opportunities
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {courseData[activeTab].specializations[activeSpec].map((career, i) => (
                            <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400" />
                              {career}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="h-px w-full bg-slate-100 mb-3"></div>

                      {/* Eligibility */}
                      <div>
                         <h4 className="font-bold text-[#0E1B50] flex items-center gap-2 mb-4">
                          <span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                             <FontAwesomeIcon icon={faGraduationCap} size="sm" />
                          </span>
                          Eligibility
                        </h4>
                        <ul className="space-y-2">
                          {courseData[activeTab].eligibility.map((e, i) => (
                            <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* CTA Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                                onClick={() => setOpenModal(true)}

                  className="mt-8 w-full sm:w-auto px-8 py-4 bg-[#0E1B50] text-white rounded-xl font-semibold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all flex items-center justify-center gap-2"
                >
                  Download Brochure
                  <FontAwesomeIcon icon={faArrowRight} className="text-sky-400" />
                </motion.button>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
            <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />
      
    </section>
  );
}