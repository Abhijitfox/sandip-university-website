import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    q: "What is the eligibility criteria for B.Des admission?",
    a: "Candidates must have completed 10+2 (any stream) from a recognized board with the required minimum percentage (varies by institute). Some universities may also consider national or university-level entrance exam scores.",
  },
  {
    q: "Do I need to appear for any entrance exam or portfolio evaluation?",
    a: "Some universities require entrance exams like NID, UCEED, NIFT, or their own tests. Portfolio evaluation may also be required.",
  },
  {
    q: "Is prior drawing or art knowledge compulsory?",
    a: "No, it is not compulsory. Creativity and design thinking ability are more important.",
  },
  {
    q: "Are internships included in the curriculum?",
    a: "Yes, most universities include internships during later semesters.",
  },
  {
    q: "Can I switch my design specialization after admission?",
    a: "Some institutes allow switching specialization in the first year depending on seat availability.",
  },
  {
    q: "What is the duration and total credits of the B.Des program?",
    a: "The B.Des program is 4 years (8 semesters) with approximately 160–200 credits.",
  },
  {
    q: "What is the average salary package for design graduates?",
    a: "Average packages range from ₹4 LPA to ₹12 LPA depending on skills & portfolio.",
  },
  {
    q: "Is hostel accommodation available for design students?",
    a: "Yes, most institutes provide hostel facilities for male and female students.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-4xl font-bold text-left text-[#0d253f] mb-12">
          FAQ's
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="w-full">
              
              {/* FAQ HEADER */}
              <button
                className="w-full bg-[#f5f7fa] px-6 py-2 rounded-md flex justify-between items-center"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-medium text-[#1f2c40]">
                  {item.q}
                </span>

                <span className="text-[#1f3b5f]">
                  {openIndex === index ? (
                    <FaMinus size={18} />
                  ) : (
                    <FaPlus size={18} />
                  )}
                </span>
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-[#34445c] text-base leading-relaxed">
                  {item.a}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
