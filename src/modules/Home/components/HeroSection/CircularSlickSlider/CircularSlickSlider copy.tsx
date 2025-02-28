import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TabItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode | React.ReactElement;
}

interface CircularSliderProps {
  tabs: TabItem[];
}

const CircularSlider: React.FC<CircularSliderProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % tabs.length;
    setActiveIndex(newIndex);
    setRotation(rotation - 360 / tabs.length);
  };

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + tabs.length) % tabs.length;
    setActiveIndex(newIndex);
    setRotation(rotation + 360 / tabs.length);
  };

  const handleTabClick = (index: number) => {
    const diff = index - activeIndex;
    const rotationChange = -diff * (360 / tabs.length);
    console.log("rotationChange", rotation + rotationChange);
    setActiveIndex(index);
    setRotation(rotation + rotationChange);
  };

  return (
    <div className="relative w-full">
      <div className="flex">
        {/* Circular tabs container */}
        <div className="relative h-96 w-96 bg-red-200 ">
          <div
            className="absolute inset-0 rounded-full border border-[#DDECF4]"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: "center",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {tabs.map((tab, index) => {
              const angle = (index * 360) / tabs.length - 25;
              const radians = (angle * Math.PI) / 180;
              const radius = 192; // Distance from center
              const x = radius * Math.cos(radians);
              const y = radius * Math.sin(radians);

              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`absolute rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-300 rotate-0 size-[12px] bg-[#77A3BA] ${
                    ""
                    // activeIndex === index
                    // ? 'bg-blue-600 text-white scale-110 z-10'
                    // : ''
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  {/* {tab.title} */}
                </button>
              );
            })}
          </div>
        </div>
        <div>Content</div>
      </div>
    </div>
  );
};

export default CircularSlider;

// {/* Content area (outside the circle) */}
// <div className="mt-12 w-full max-w-md bg-white rounded-xl shadow-lg p-6 transition-all duration-300">
//   {tabs[activeIndex].description}
// </div>

// {/* Navigation buttons */}
// <div className="flex justify-center mt-8 space-x-4">
//   <button
//     onClick={handlePrev}
//     className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
//   >
//     <ChevronLeft size={24} />
//   </button>
//   <button
//     onClick={handleNext}
//     className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
//   >
//     <ChevronRight size={24} />
//   </button>
// </div>
