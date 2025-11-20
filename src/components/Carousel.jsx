import React, { useState, useEffect, useRef } from "react";

const items = [
  {
    id: 1,
    img: "herosection/campus-1.jpg",
    title: "Vibrant Campus Atmosphere",
    desc: "Experience an energetic campus filled with learning, culture, and creativity.",
  },
  {
    id: 2,
    img: "herosection/classroom-1.jpg",
    title: "Modern Classrooms",
    desc: "Well-equipped digital classrooms designed for interactive learning.",
  },
  {
    id: 3,
    img: "herosection/labimg.jpg",
    title: "Advanced Labs",
    desc: "State-of-the-art laboratories for hands-on experiments and innovation.",
  },
  {
    id: 4,
    img: "herosection/studentActivities.jpg",
    title: "Student Activities",
    desc: "Cultural festivals, sports, clubs, and various student-led initiatives.",
  },
  {
    id: 5,
    img: "herosection/library.jpg",
    title: "Library & Research Center",
    desc: "A huge digital + physical library supporting academic and research needs.",
  },
  {
    id: 6,
    img: "herosection/hostel.jpg",
    title: "Hostel & Accommodation",
    desc: "Comfortable, secure hostel facilities that feel like a second home.",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const timerRef = useRef(null);

  const cardsToShow = 2;

  const nextSlide = () => {
    setDirection("next");
    setIndex((prev) => (prev + cardsToShow) % items.length);
    resetTimer();
  };

  const prevSlide = () => {
    setDirection("prev");
    setIndex((prev) => (prev - cardsToShow + items.length) % items.length);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const visibleCards = [
    items[index],
    items[(index + 1) % items.length],
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto py-10">
      <h4 className="text-3xl md:text-4xl font-extrabold text-slate-700 mb-10">
        Campus Life
      </h4>

      <div className="overflow-hidden relative">

        {/* Smooth Slide Animation */}
        <div
          className={`
            grid grid-cols-1 sm:grid-cols-2 gap-6 
            transition-transform duration-500 ease-out
            ${direction === "next" ? "translate-x-0" : "translate-x-0"}
          `}
          style={{
            transform:
              direction === "next"
                ? "translateX(0)"
                : "translateX(0)",
          }}
        >
          {visibleCards.map((item, i) => (
            <div
              key={item.id}
              className={`
                bg-white rounded-2xl shadow-xl overflow-hidden 
                transition-all duration-500 
                ${direction === "next" ? "animate-slideNext" : "animate-slidePrev"}
              `}
            >
              <img
                src={item.img}
                className="h-80 w-full object-cover"
                alt="slide"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons (optional) */}
      {/* 
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button> 
      */}
    </div>
  );
}
