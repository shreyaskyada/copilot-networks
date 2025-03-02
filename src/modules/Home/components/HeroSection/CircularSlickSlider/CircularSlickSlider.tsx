import React, { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useBreakpoint } from "../../../../../hooks/useBreakpoint";
import ArrowIcon from "../../../../../assets/ArrowIcon";

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
      tabs[tabLength - 3],
      tabs[tabLength - 2],
      tabs[tabLength - 1],
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

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % newTabs.length;
    setActiveIndex(newIndex);
    setRotation(rotation - 360 / newTabs.length);
    triggerFade();
  };

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + newTabs.length) % newTabs.length;
    setActiveIndex(newIndex);
    setRotation(rotation + 360 / newTabs.length);
    triggerFade();
  };

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
    <div className="flex h-full w-full max-w-screen max-md:overflow-hidden max-md:pb-10 md:-translate-y-[40px] md:items-center">
      <div className="relative flex w-full flex-1 flex-col items-center gap-10 md:flex-row md:justify-center">
        {/* Arrow */}
        <div className="absolute top-[20px] left-[50%] z-[60] flex -translate-x-[50%] cursor-pointer gap-8 md:top-[50%] md:left-5 md:-translate-y-[50%] md:flex-col">
          <ArrowIcon
            className="hover:scale-125 max-md:-rotate-90"
            onClick={() => handlePrev()}
          />
          <ArrowIcon
            className="rotate-90 hover:scale-125 md:rotate-180"
            onClick={() => handleNext()}
          />
        </div>
        {/* Left section */}
        <div className="relative flex w-screen min-w-96 flex-1 flex-col md:h-[60vh] md:w-full md:flex-row">
          <div
            style={{ height: `${titlePadding}px` }}
            className="md:hidden"
          ></div>

          <div
            className="max-w-md:overflow-hidden absolute left-0 z-50 w-[100vw] max-md:rotate-90 md:relative md:w-[30vh]"
            ref={circularDivRef}
          >
            <div
              className="relative inset-0 size-[120vw] flex-1 -translate-x-[75%] rounded-full border border-[#DDECF4] md:size-[60vh]"
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
                      "relative size-[0] -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
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
                        "absolute h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#77A3BA]",
                        activeIndex === index &&
                          "h-[32px] w-[32px] scale-110 border border-[#DDECF4] bg-white",
                      )}
                    >
                      {isActiveIndex && (
                        <span className="inline-block h-[12px] w-[12px] rounded-full bg-[#77A3BA]"></span>
                      )}
                    </button>
                    {isVisible && (
                      <div
                        role="button"
                        onClick={() => handleTabClick(index)}
                        className={clsx(
                          "bottom-0 flex w-[80px] translate-x-[10px] -translate-y-[50%] cursor-pointer items-center max-md:-rotate-90 max-md:justify-center md:w-[190px] md:translate-x-[30px]",
                        )}
                      >
                        <div className="flex items-center gap-0 md:gap-6">
                          <div className="flex items-center gap-0 max-md:flex-col md:gap-2">
                            <Icon
                              className={clsx(
                                isActiveIndex && "scale-[120%] text-[#002235]",
                                !isActiveIndex && "scale-[70%] md:scale-[100%]",
                              )}
                            />
                            {!isActiveIndex && (
                              <p
                                className={clsx(
                                  "text-center text-nowrap text-[#77A3BA]",
                                  !isActiveIndex &&
                                    "text-[14px] text-wrap md:text-[16px] lg:text-[18px]",
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
            className="relative flex h-fit w-fit flex-col max-md:mx-auto max-md:-translate-y-[10px] max-md:items-center md:-translate-x-[40px]"
            style={{
              ...(!isMd && { top: `${getTop()}px` }),
            }}
          >
            <p
              className={
                "text-left text-[28px] font-bold md:w-[calc(100%+66px)] md:text-[50px]"
              }
            >
              {newTabs[activeIndex].title}
            </p>
            <p
              className={
                "text-[16px] max-md:px-[50px] max-md:text-center md:w-[calc(100%+66px)] md:text-[28px]"
              }
            >
              {newTabs[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Right section */}
        <div
          className={`relative flex h-[40vh] flex-1 rounded-[15px] transition-opacity duration-300 max-md:pl-8 md:h-[60vh] md:max-w-[40vw] ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left - Primary Large Image */}
          <div className="w-[70%] flex-1">
            <img
              src={newTabs[activeIndex].images[0]}
              className="h-full w-full rounded-[15px] object-cover"
              alt="Primary Image"
            />
          </div>

          {/* Right - Two Stacked Smaller Images */}
          <div className="relative flex w-[40%] -translate-x-[20%] flex-col justify-center gap-14 py-10 md:-translate-x-[50px]">
            <img
              src={newTabs[activeIndex].images[1]}
              className="h-[40%] w-auto rounded-[15px] object-cover"
              alt="Secondary Image"
            />
            <img
              src={newTabs[activeIndex].images[2]}
              className="relative h-[40%] w-auto scale-[110%] rounded-[15px] object-cover md:-translate-x-[5%]"
              alt="Tertiary Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularSlider;
