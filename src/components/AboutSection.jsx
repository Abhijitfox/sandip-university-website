import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faTools,
  faGlobe,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50 to-indigo-50 shadow-lg">

            <h4 className="section-heading">About Sandip University</h4>

            {/* Decorative Dots */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-teal-500"></span>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                A Global Hub of Innovation & Technology
              </p>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Sandip University is a premier educational institution dedicated
              to nurturing leaders, innovators, creators, and professionals.
              With world-class infrastructure and industry-driven programs, the
              university cultivates future-ready talent capable of solving
              real-world challenges through research, design thinking, and
              advanced technology.
            </p>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-md">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-600 text-lg" />
                </span>
                <span>
                  <strong className="font-semibold">AICTE-approved</strong> Bachelor of Design
                  with multiple specializations.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-md">
                  <FontAwesomeIcon icon={faTools} className="text-indigo-600 text-lg" />
                </span>
                <span>State-of-the-art labs & expert-led workshops.</span>
              </li>

              <li className="flex gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-white shadow rounded-md">
                  <FontAwesomeIcon icon={faGlobe} className="text-indigo-600 text-lg" />
                </span>
                <span>
                  Cross-disciplinary learning for global & local impact.
                </span>
              </li>
            </ul>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold shadow hover:scale-[1.02] transition flex items-center justify-center gap-2">
                Explore Programs
                <FontAwesomeIcon icon={faArrowRight} />
              </button>

              <button className="px-4 py-3 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 transition flex items-center justify-center gap-2">
                Request Brochure
                <FontAwesomeIcon icon={faArrowRight} />
              </button>

            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">

            <img
              src="herosection/aboutus.jpg"
              alt="students crafting"
              className="w-full h-80 sm:h-80 md:h-96 lg:h-[580px] object-cover"
            />

            {/* Footer Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 
                            bg-gradient-to-t from-black/50 to-transparent text-white">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

                <div>
                  <p className="text-sm uppercase tracking-wide">
                    Workshop: Textile Embroidery
                  </p>
                  <p className="text-xs opacity-80">
                    Mentor-led Studio Session · Pune Campus
                  </p>
                </div>

                <button className="px-3 py-2 bg-white/20 rounded hover:bg-white/30 transition text-sm flex items-center gap-2 w-fit">
                  View Gallery
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
