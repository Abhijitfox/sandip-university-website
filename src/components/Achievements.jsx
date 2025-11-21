import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaUniversity, FaSchool, FaUsers, FaHandshake } from "react-icons/fa";

// --- Smart Counter Component ---
function Counter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // Trigger when 50px in view
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, motionValue, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const achievements = [
  { 
    icon: <FaUniversity size={28} />, 
    number: 250, 
    suffix: "+", 
    label: "Acres Green Campus",
    color: "text-emerald-600",
    bg: "bg-emerald-100"
  },
  { 
    icon: <FaSchool size={28} />, 
    number: 6, 
    suffix: "+", 
    label: "Specialised Schools",
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  { 
    icon: <FaUsers size={28} />, 
    number: 10000, 
    suffix: "+", 
    label: "Alumni Students",
    color: "text-orange-600",
    bg: "bg-orange-100"
  },
  { 
    icon: <FaHandshake size={28} />, 
    number: 150, 
    suffix: "+", 
    label: "Industry Partners",
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
];

export default function Achievements() {
  return (
    <section className="py-4 bg-slate-50 relative overflow-hidden">
      {/* Background Decor elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
         <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-3xl font-semibold tracking-wide text-center text-slate-700 mb-12"
        >
           Our Achievements & Growth
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-white shadow-xl rounded-2xl  border border-slate-100 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Gradient Border Effect */}
              {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" /> */}

              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${item.bg} ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                  {item.icon}
                </div>

                {/* Number */}
                <h3 className="text-4xl md:text-3xl font-extrabold text-slate-600 mb-2 font-sans">
                  <Counter value={item.number} />
                  <span className="text-blue-600">{item.suffix}</span>
                </h3>

                {/* Label */}
                <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}