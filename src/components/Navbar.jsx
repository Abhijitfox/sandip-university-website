import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import EnquiryModal from "./EnquiryModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navLinks = [
    "Home",
    "About Us",
    "Course",
    "Recruiters",
    "Campus Life",
    "WhyUs",
  ];

  return (
  <>
    {/* NAVBAR CONTAINER */}
    <div
      className="sticky top-0 left-0 w-full z-50 
                 bg-white backdrop-blur-xl shadow-sm 
                 border-b border-white/20 transition"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 h-[80px]">
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <a href="#Home">
            <img
            src="logo/sunlogo.png"
            alt="Logo"
            className="h-20 object-contain drop-shadow-md"
          />
            </a>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-slate-700 text-sm font-medium drop-shadow-lg">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.replace(/\s+/g, "-")}`}
              className="hover:text-blue-300 transition"
            >
              {item}
            </a>
          ))}

          <button
            onClick={() => setOpenModal(true)}
            className="px-3 py-2 text-sm shadow-md rounded-lg 
                       bg-gradient-to-r from-sky-500 to-teal-400 text-white 
                       font-semibold hover:scale-[1.02] transition flex items-center gap-2"
          >
            Enquire Now
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        {/* MOBILE ICON */}
        <button className="lg:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? (
            <FontAwesomeIcon icon={faTimes} className="text-black text-2xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-black text-2xl" />
          )}
        </button>
      </div>
    </div>

    {/* MOBILE DROPDOWN OVER HERO SECTION */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="lg:hidden fixed top-[80px] left-0 w-full z-[999]
                 bg-orange-50 backdrop-blur-xl border-t border-white/10"
    >
      <div className="flex flex-col px-5 py-4 text-gray-600 text-[15px] font-medium gap-4">
        {navLinks.map((item) => (
          <a
            key={item}
                          href={`#${item.replace(/\s+/g, "-")}`}

            onClick={() => setOpen(false)}
            className="text-left w-full hover:text-blue-300 transition py-1"
          >
            {item}
          </a>
        ))}

        <button
          onClick={() => {
            setOpen(false);
            setOpenModal(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 transition w-full 
                     text-white px-4 py-2 rounded-md text-sm shadow-md mt-2"
        >
          Enquiry Now
        </button>
      </div>
    </motion.div>

    <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />
  </>
);

}
