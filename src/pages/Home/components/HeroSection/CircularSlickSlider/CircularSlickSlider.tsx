import React, { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useBreakpoint } from "../../../../../hooks/useBreakpoint";
import ArrowIcon from "../../../../../assets/ArrowIcon";
import "./CircularSlickSlider.css";
import { useLocation, useNavigate } from "react-router";
import { UnderConstructionCard } from "./UnderConstructionCard";

export interface TabItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  combinedImage: string;
  otherImages: string[];
  isUnderConstruction: boolean;
}

interface CircularSliderProps {
  tabs: TabItem[];
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const CircularSlider: React.FC<CircularSliderProps> = ({
  tabs,
  setActiveTab,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const activeTabDivRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isMd = useBreakpoint("md");
  const { state } = location;

  useEffect(() => {
    if (state?.navActiveTab >= 0) {
      handleTabClick(state.navActiveTab);
      navigate(location.pathname, { replace: true });
    }
  }, [state]);

  const newTabs = useMemo(() => {
    const tabLength = tabs.length;
    if (isMd) {
      return [...tabs, tabs[tabLength - 3], tabs[tabLength - 2]];
    }
    return [
      ...tabs,
      ...tabs,
      tabs[tabLength - 5],
      tabs[tabLength - 4],
      tabs[tabLength - 3],
      tabs[tabLength - 2],
      tabs[tabLength - 1],
    ];
  }, [tabs, isMd]);

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

  const handleAnimation = (newIndex: number, newRotation: number) => {
    setIsAnimating(true);

    // Start the rotation animation
    setRotation(newRotation);

    // After rotation starts, update the active index with a small delay
    // This prevents flickering by ensuring the rotation has visibly started
    setTimeout(() => {
      setActiveIndex(newIndex);
      setActiveTab(newTabs[newIndex].id);

      // End the animation state after rotation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 150);
  };

  const handleNext = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    const newIndex = (activeIndex + 1) % newTabs.length;
    const newRotation = rotation - 360 / newTabs.length;
    handleAnimation(newIndex, newRotation);
  };

  const handlePrev = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    const newIndex = (activeIndex - 1 + newTabs.length) % newTabs.length;
    const newRotation = rotation + 360 / newTabs.length;
    handleAnimation(newIndex, newRotation);
  };

  const handleTabClick = (index: number) => {
    if (isAnimating || index === activeIndex) return; // Prevent clicks during animation or on the active tab

    const totalTabs = newTabs.length;
    const forwardSteps = (index - activeIndex + totalTabs) % totalTabs;
    const backwardSteps = (activeIndex - index + totalTabs) % totalTabs;

    const shortestSteps =
      forwardSteps <= backwardSteps ? forwardSteps : -backwardSteps;

    const newRotation = rotation - shortestSteps * (360 / totalTabs);
    handleAnimation(index, newRotation);
  };

  const getXAndYCordinates = (index: number, angleOffset = 0) => {
    const angle = (index * 360) / newTabs.length + angleOffset + 90;
    const radians = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);

    return { x, y };
  };

  // const getTop = () => {
  //   const angle = 360 / newTabs.length;
  //   const radians = (angle * Math.PI) / 180;

  //   return radius * Math.sin(radians) - 0;
  // };

  return (
    <div className="flex h-fit w-full">
      <div className="mx-auto w-full">
        {/* Arrow */}

        {/* Top section */}
        <div className="relative">
          <div
            className="relative overflow-hidden"
            style={{
              height: isMd
                ? `${radius * 0.4 + 80}px`
                : `${radius * 0.2 + 110}px`,
            }}
          >
            <div className="absolute top-[13%] left-[50%] z-[60] flex -translate-x-[50%] cursor-pointer gap-8 md:top-[20%]">
              <ArrowIcon
                className={`-rotate-90 transition-transform duration-300 hover:scale-125 md:size-[30px] ${isAnimating ? "pointer-events-none opacity-70" : ""}`}
                onClick={() => handleNext()}
              />
              <ArrowIcon
                className={`rotate-90 transition-transform duration-300 hover:scale-125 md:size-[30px] ${isAnimating ? "pointer-events-none opacity-70" : ""}`}
                onClick={() => handlePrev()}
              />
            </div>
            <div
              className="absolute inset-0 top-0 left-1/2 min-h-[120vw] min-w-[120vw] -translate-x-1/2 -translate-y-[80%] rounded-full border border-[#DDECF4] md:min-h-[110vw] md:min-w-[110vw] md:-translate-y-[90%]"
              ref={divRef}
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "center",
                transition: "transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {newTabs.map((tab, index) => {
                const { x, y } = getXAndYCordinates(index, 0);
                const isActiveIndex = activeIndex === index;
                const Icon = tab.icon;

                let isVisible = true;

                const mod = (n: number, m: number) => ((n % m) + m) % m;

                if (isMd) {
                  isVisible =
                    index === activeIndex || // Active tab
                    index ===
                      (activeIndex - 1 + newTabs.length) % newTabs.length || // Previous tab
                    index === (activeIndex + 1) % newTabs.length; // Next tab
                } else {
                  isVisible = [...Array(5)].some((_, i) => {
                    const offset = i - 2; // [-2, -1, 0, 1, 2]
                    return mod(activeIndex + offset, newTabs.length) === index;
                  });

                  // isVisible =
                  //   (index >= activeIndex - 2 && index <= activeIndex + 2) ||
                  //   (activeIndex < 2 &&
                  //     (index <= 4 ||
                  //       index >= newTabs.length - (2 - activeIndex))) ||
                  //   (activeIndex > newTabs.length - 3 &&
                  //     (index >= newTabs.length - 5 ||
                  //       index <= (activeIndex + 2) % newTabs.length));
                }

                return (
                  <div
                    className={clsx(
                      "relative size-[0] transition-none duration-300",
                    )}
                    key={index}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `rotate(${-rotation}deg)`,
                    }}
                    onClick={() => handleTabClick(index)}
                    ref={isActiveIndex ? activeTabDivRef : null}
                  >
                    <button
                      key={index}
                      onClick={() => handleTabClick(index)}
                      className={clsx(
                        "absolute h-[12px] w-[12px] origin-top -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#77A3BA] transition-all duration-300",
                        activeIndex === index &&
                          "h-[32px] w-[32px] scale-110 border border-[#DDECF4] bg-white max-md:-translate-x-[16px]",
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
                          "top-0 flex w-[80px] -translate-x-[50%] translate-y-[30%] cursor-pointer items-center justify-center transition-all duration-300 md:w-[190px]",
                          isActiveIndex &&
                            "translate-y-[30px] md:translate-y-[50px]",
                        )}
                      >
                        <div className="flex items-center gap-0 md:gap-6">
                          <div className="flex flex-col items-center gap-0 md:gap-2">
                            <Icon
                              className={clsx(
                                "transition-all duration-300",
                                !isActiveIndex && "scale-[70%] md:scale-[100%]",
                                !isMd &&
                                  tab.id === 1 &&
                                  isActiveIndex &&
                                  "scale-[130%] 2xl:scale-[150%]",
                                !isMd &&
                                  tab.id === 2 &&
                                  isActiveIndex &&
                                  "scale-[200%]",
                                !isMd &&
                                  tab.id === 3 &&
                                  isActiveIndex &&
                                  "scale-[200%]",
                                !isMd &&
                                  tab.id === 4 &&
                                  isActiveIndex &&
                                  "scale-[150%]",
                                !isMd &&
                                  tab.id === 5 &&
                                  isActiveIndex &&
                                  "scale-[150%]",
                                isActiveIndex && "w-fit text-[#002235]",
                              )}
                            />
                            {!isActiveIndex && (
                              <p
                                className={clsx(
                                  "text-center text-nowrap text-[#77A3BA] select-none",
                                  !isActiveIndex &&
                                    "text-[14px] text-wrap md:text-[16px] lg:text-[18px]",
                                )}
                              >
                                {tab?.title}
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
          {/* Title and Description Section - No animation */}
          <div className="relative flex h-fit w-full flex-col items-center justify-center text-center max-md:mx-auto">
            <p className="text-left text-[28px] font-bold max-md:mt-2 max-md:w-[90vw] max-md:text-center max-md:text-[24px] md:text-[50px]">
              {newTabs[activeIndex]?.title}
            </p>
          </div>
        </div>

        <div className="relative mt-[85px] p-5">
          {newTabs[activeIndex].isUnderConstruction && (
            <div className="left-1/2 -translate-y-[40%] md:absolute md:-translate-x-1/2 md:-translate-y-[65%]">
              <UnderConstructionCard />
            </div>
          )}
          {isMd ? (
            <div className="">
              <img
                src={newTabs[activeIndex].combinedImage}
                className="h-fit w-auto object-cover"
              />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              <img
                src={newTabs[activeIndex].otherImages[0]}
                className="h-[400px] w-full rounded-md object-cover shadow"
                alt="Image 1"
              />
              <img
                src={newTabs[activeIndex].otherImages[1]}
                className="h-[400px] w-full rounded-md object-cover shadow"
                alt="Image 2"
              />
              <img
                src={newTabs[activeIndex].otherImages[2]}
                className="h-[400px] w-full rounded-md object-cover shadow"
                alt="Image 3"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircularSlider;
