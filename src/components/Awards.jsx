import { motion } from "framer-motion";

export default function Awards() {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#1e2a38] to-[#2c3b4e] py-24 overflow-hidden">

      {/* Glowing Animated Moving Arrow */}
      <motion.div
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-0 w-4 h-4 z-30"
        style={{
          offsetPath: "path('M 0 150 Q 500 0 1100 150 T 2200 150')",
          background: "#6d77ff",
          borderRadius: "50%",
          boxShadow: "0 0 15px #8790ff",
        }}
      />

      {/* Curved Path */}
      <svg width="100%" height="350" className="absolute top-[35%] left-0 opacity-80">
        <path
          d="M 0 180 Q 500 40 1100 180 T 2200 180"
          stroke="#aab8ff"
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray="14 12"
        />
      </svg>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Title */}
        <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-14 text-center tracking-wide drop-shadow-lg">
          Awards & Rankings
        </h4>

        {/* Award Image Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="
            bg-white/10 backdrop-blur-md 
            rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]
            p-6 md:p-10 
            border border-white/20 max-w-6xl w-full
          ">
            <img
              src="/herosection/ranking.png"
              alt="Awards Ranking"
              className="w-full object-contain drop-shadow-2xl rounded-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-300/20 blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-[150px]"></div>

    </div>
  );
}
