import React, { useState } from "react";
import { motion } from "framer-motion";

// FontAwesome (npm)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "Key Highlights",
    "About Us",
    "Course",
    "Campus Life",
    "FAQ's",
    "Contact Us",
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 
                    bg-white backdrop-blur-xl shadow-sm 
                    border-b border-white/20 transition">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 h-[80px]">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="logo/sunlogo.png"
            alt="Logo"
            className="h-20 object-contain drop-shadow-md"
          />
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
  <button className=" px-3 py-2 text-sm shadow-md rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold hover:scale-[1.02] transition flex items-center gap-2">
                            Enquire Now 

                <FontAwesomeIcon icon={faArrowRight} />
              </button>
       
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FontAwesomeIcon icon={faTimes} className="text-white text-2xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-black/60 backdrop-blur-xl border-t border-white/20"
        >
          <div className="flex flex-col px-4 py-4 text-white text-sm font-medium gap-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.replace(/\s+/g, "-")}`}
                className="hover:text-blue-300 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <button className="bg-blue-600 hover:bg-blue-700 transition w-full text-white px-4 py-2 rounded-md text-sm shadow-md mt-2">
              Enquiry Now
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
