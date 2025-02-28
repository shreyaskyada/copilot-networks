import React, { useState } from "react";
import AgrivoltaicsSVG from "../../../../../assets/AgrivoltaicsSVG";
import clsx from "clsx";

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
  const [fade, setFade] = useState(true);

  // const handleNext = () => {
  //   const newIndex = (activeIndex + 1) % tabs.length;
  //   setActiveIndex(newIndex);
  //   setRotation(rotation - 360 / tabs.length);
  //   triggerFade();
  // };

  // const handlePrev = () => {
  //   const newIndex = (activeIndex - 1 + tabs.length) % tabs.length;
  //   setActiveIndex(newIndex);
  //   setRotation(rotation + 360 / tabs.length);
  //   triggerFade();
  // };

  const handleTabClick = (index: number) => {
    let steps = index - activeIndex;
    if (steps < 0) {
      steps += tabs.length; // Ensure forward movement only
    }
    setActiveIndex(index);
    setRotation(rotation - steps * (360 / tabs.length)); // Always rotate clockwise
    triggerFade();
  };

  const triggerFade = () => {
    setFade(false);
    setTimeout(() => setFade(true), 200);
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="relative w-full flex items-center gap-8 flex-1">
        <div className="relative min-h-[400px] min-w-96 flex-1">
          {/* <div className="w-[50%] bg-red-400 h-full relative overflow-hidden"> */}
          <div
            className="absolute size-[430px] inset-0 rounded-full border border-[#DDECF4] -translate-x-1/2"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: "center",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {tabs.map((tab, index) => {
              const angle = (index * 360) / tabs.length - 25;
              const radians = (angle * Math.PI) / 180;
              const radius = 215;
              const x = radius * Math.cos(radians);
              const y = radius * Math.sin(radians);
              const isActiveIndex = activeIndex === index;

              const isVisible =
                (index >= activeIndex - 1 && index <= activeIndex + 2) ||
                (activeIndex < 2 &&
                  (index < 2 || index >= tabs.length - (1 - activeIndex))) ||
                (activeIndex > tabs.length - 3 &&
                  (index > tabs.length - 3 ||
                    index <= (activeIndex + 2) % tabs.length));

              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`absolute rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-300 bg-[#77A3BA] size-[12px] ${
                    activeIndex === index
                      ? "border border-[#DDECF4] size-[32px] bg-white scale-110"
                      : ""
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `rotate(${-rotation}deg) ${
                      activeIndex + 1 === index ? "translate(-10px, 20px)" : ""
                    }`,
                  }}
                >
                  {isActiveIndex && (
                    <span className="inline-block size-[12px] bg-[#77A3BA] rounded-full"></span>
                  )}

                  {isVisible && (
                    <div
                      className={`absolute left-[40px] w-full cursor-pointer`}
                    >
                      <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2">
                          <AgrivoltaicsSVG
                            className={clsx(isActiveIndex && "text-[#002235]")}
                          />
                          {!isActiveIndex && (
                            <p className="text-[#77A3BA] text-nowrap">
                              {tab.title}
                            </p>
                          )}
                        </div>
                        {/* <div className="flex flex-col">
                          <p
                            className={clsx(
                              isActiveIndex && "text-[50px] text-left"
                            )}
                          >
                            {tab.title}
                          </p>
                          {isActiveIndex && (
                            <p
                              className={clsx(
                                isActiveIndex && "text-[28px] text-nowrap"
                              )}
                            >
                              {tab.description}
                            </p>
                          )}
                        </div> */}
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          {/* </div> */}
        </div>

        <div
          className={`flex gap-4 relative bg-white rounded-md transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col h-fit translate-y-[68px] -translate-x-[125px]">
            <p className={"text-[50px] text-left font-bold"}>
              {tabs[activeIndex].title}
            </p>
            {/* {isActiveIndex && ( */}
            <p className={"text-[28px]"}>{tabs[activeIndex].description}</p>
            {/* -147px 52px */}
            {/* )} */}
          </div>
          <div className="relative flex items-center pr-[120px]">
            <img src="/telecom/1.png" />
            <div className="relative flex flex-col gap-5 -left-8">
              <img src="/telecom/2.png" className="w-[200px]" />
              <img
                src="/telecom/3.png"
                className="w-[230px] relative -left-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularSlider;
