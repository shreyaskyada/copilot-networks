import React, { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useBreakpoint } from "../../../../../hooks/useBreakpoint";

interface TabItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  images: string[];
}

interface CircularSliderProps {
  tabs: TabItem[];
}

const CircularSlider: React.FC<CircularSliderProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [titlePadding, setTitlePadding] = useState(0);
  const [radius, setRadius] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [fade, setFade] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);
  const circularDivRef = useRef<HTMLDivElement>(null);
  const activeTabDivRef = useRef<HTMLDivElement>(null);
  const isMd = useBreakpoint("md");

  const newTabs = useMemo(() => {
    const tabLength = tabs.length;
    if (isMd) {
      return [...tabs, tabs[tabLength - 2], tabs[tabLength - 3]];
    }
    return [
      ...tabs,
      tabs[tabLength - 1],
      tabs[tabLength - 2],
      tabs[tabLength - 3],
    ];
  }, [tabs, isMd]);

  useEffect(() => {
    const calculateRadius = () => {
      if (activeTabDivRef.current) {
        const rect = activeTabDivRef.current.getBoundingClientRect();
        const position = {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        };

        console.log("scorll", position);
      }
    };

    calculateRadius(); // Initial calculation
    window.addEventListener("resize", calculateRadius);

    return () => window.removeEventListener("resize", calculateRadius);
  }, []);

  useEffect(() => {
    const calculateRadius = () => {
      if (divRef.current) {
        const height = divRef.current.offsetHeight;
        setRadius(height / 2);
      }
    };

    calculateRadius(); // Initial calculation
    window.addEventListener("resize", calculateRadius);

    return () => window.removeEventListener("resize", calculateRadius);
  }, []);

  useEffect(() => {
    const calculateRadius = () => {
      if (circularDivRef.current) {
        const height = circularDivRef.current.offsetHeight;
        setTitlePadding(height / 2 + 10);
      }
    };

    calculateRadius(); // Initial calculation
    window.addEventListener("resize", calculateRadius);

    return () => window.removeEventListener("resize", calculateRadius);
  }, []);

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
    const totalTabs = newTabs.length;
    const forwardSteps = (index - activeIndex + totalTabs) % totalTabs;
    const backwardSteps = (activeIndex - index + totalTabs) % totalTabs;

    const shortestSteps =
      forwardSteps <= backwardSteps ? forwardSteps : -backwardSteps;

    setActiveIndex(index);
    setRotation(rotation - shortestSteps * (360 / totalTabs));
    triggerFade();
  };

  const triggerFade = () => {
    setFade(false);
    setTimeout(() => setFade(true), 200);
  };

  const getXAndYCordinates = (index: number, angleOffset = 0) => {
    const angle = (index * 360) / newTabs.length + angleOffset;
    const radians = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);

    return { x, y };
  };

  const getTop = () => {
    const angle = 360 / newTabs.length;
    const radians = (angle * Math.PI) / 180;

    return radius * Math.sin(radians) - 10;
  };

  return (
    <div className="flex h-full w-full max-w-screen max-md:overflow-hidden md:items-center md:-translate-y-[40px] max-md:pb-10">
      <div className="relative w-full flex items-center gap-8 flex-1 flex-col md:flex-row md:justify-center">
        {/* Left section */}
        <div className="relative w-screen md:h-[60vh] min-w-96 flex-1 flex flex-col md:w-full md:flex-row">
          <div
            style={{ height: `${titlePadding}px` }}
            className="md:hidden"
          ></div>
          {/* <div className="w-[30vh] rotate-90 overflow-hidden"> */}
          <div
            className="absolute md:relative md:w-[30vh] max-md:rotate-90 max-w-md:overflow-hidden w-[100vw] left-0 z-50"
            ref={circularDivRef}
          >
            <div
              className="flex-1 relative size-[120vw] md:size-[60vh] inset-0 rounded-full border border-[#DDECF4] -translate-x-[75%]"
              ref={divRef}
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "center",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {newTabs.map((tab, index) => {
                const { x, y } = getXAndYCordinates(index, isMd ? 0 : -20);
                const isActiveIndex = activeIndex === index;
                const Icon = tab.icon;

                let isVisible = false;

                if (isMd) {
                  isVisible =
                    index === activeIndex || // Active tab
                    index ===
                      (activeIndex - 1 + newTabs.length) % newTabs.length || // Previous tab
                    index === (activeIndex + 1) % newTabs.length; // Next tab
                } else {
                  isVisible =
                    (index >= activeIndex - 1 && index <= activeIndex + 2) ||
                    (activeIndex < 2 &&
                      (index < 2 ||
                        index >= newTabs.length - (1 - activeIndex))) ||
                    (activeIndex > newTabs.length - 3 &&
                      (index > newTabs.length - 3 ||
                        index <= (activeIndex + 2) % newTabs.length));
                }

                return (
                  <div
                    className={clsx(
                      "-translate-x-1/2 -translate-y-1/2 transition-all duration-300 size-[0] relative"
                    )}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `rotate(${-rotation}deg)`,
                    }}
                    onClick={() => handleTabClick(index)}
                    ref={activeTabDivRef}
                  >
                    <button
                      key={index}
                      onClick={() => handleTabClick(index)}
                      className={clsx(
                        "absolute rounded-full bg-[#77A3BA] w-[12px] h-[12px] -translate-x-1/2 -translate-y-1/2",
                        activeIndex === index &&
                          "border border-[#DDECF4] w-[32px] h-[32px] bg-white scale-110"
                      )}
                    >
                      {isActiveIndex && (
                        <span className="inline-block w-[12px] h-[12px] bg-[#77A3BA] rounded-full"></span>
                      )}
                    </button>
                    {isVisible && (
                      <div
                        role="button"
                        onClick={() => handleTabClick(index)}
                        className={clsx(
                          "max-md:-rotate-90 bottom-0 -translate-y-[50%] md:translate-x-[30px] translate-x-[10px] w-[80px] md:w-[190px] flex items-center max-md:justify-center"
                        )}
                      >
                        <div className="flex gap-0 md:gap-6 items-center">
                          <div className="flex items-center gap-0 md:gap-2 max-md:flex-col">
                            <Icon
                              className={clsx(
                                isActiveIndex && "text-[#002235] scale-[120%]",
                                !isActiveIndex && "scale-[70%] md:scale-[100%]"
                              )}
                            />
                            {!isActiveIndex && (
                              <p
                                className={clsx(
                                  "text-[#77A3BA] text-nowrap text-center",
                                  !isActiveIndex &&
                                    "text-[14px] md:text-[16px] lg:text-[18px] text-wrap"
                                )}
                              >
                                {tab.title}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="flex flex-col h-fit relative max-md:-translate-y-[10px] max-md:items-center w-fit md:-translate-x-[90px] max-md:mx-auto"
            style={{
              ...(!isMd && { top: `${getTop()}px` }),
            }}
          >
            <p
              className={
                "text-[28px] md:text-[50px] text-left font-bold md:w-[calc(100%+66px)]"
              }
            >
              {newTabs[activeIndex].title}
            </p>
            <p
              className={
                "text-[16px] md:text-[28px] md:w-[calc(100%+66px)] max-md:text-center"
              }
            >
              {newTabs[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Right section */}
        <div
          className={`flex relative h-[40vh] md:h-[50vh] rounded-[15px] transition-opacity duration-300 flex-1 max-md:pl-8 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left - Primary Large Image */}
          <div className="flex-1 w-[70%]">
            <img
              src={newTabs[activeIndex].images[0]}
              className="w-full h-full object-cover rounded-[15px]"
              alt="Primary Image"
            />
          </div>

          {/* Right - Two Stacked Smaller Images */}
          <div className="flex flex-col gap-14 w-[40%] py-10 relative md:-translate-x-[50px] justify-center -translate-x-[20%]">
            <img
              src={newTabs[activeIndex].images[1]}
              className="w-auto h-[40%] object-cover rounded-[15px]"
              alt="Secondary Image"
            />
            <img
              src={newTabs[activeIndex].images[2]}
              className="w-auto h-[40%] object-cover rounded-[15px] relative scale-[110%] md:-translate-x-[5%]"
              alt="Tertiary Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularSlider;
