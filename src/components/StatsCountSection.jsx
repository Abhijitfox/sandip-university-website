import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsCountSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 250, suffix: "+", label: "Acres Wi-Fi enabled campus" },
    { number: 10000, suffix: "+", label: "International alumni network" },
    { number: 100, suffix: "%", label: "Placement assistance" },
    { number: 150, suffix: "+", label: "Global Industry partners" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('herosection/bghero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-white">

          {stats.map((item, index) => (
            <div key={index} className="space-y-2">
              {/* Count up number */}
              <h3 className="text-5xl font-extrabold">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2}
                    separator=","
                  />
                ) : (
                  "0"
                )}
                <span className="text-white">{item.suffix}</span>
              </h3>

              {/* Label */}
              <p className="text-gray-300 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
