import React from "react";

const HeatMap = () => {
  return (
    <div className="relative min-h-screen bg-[#002235] text-white p-20">
      <div className=" flex flex-col items-center">
        <h1 className="text-[40px] font-Lato">Project Heat Map</h1>
        <div className="flex item-center gap-2 mt-4">
          <h3 className="text-[20px] font-light">Headquarters</h3>
          <h3 className="text-[20px] font-semibold">- Dallas, TX</h3>
        </div>
        <h6 className="text-secondary">
          (Local Presence in every region of the US)
        </h6>
      </div>
      <div className="absolute bottom-[16%] left-[10%] w-[160px]">
        <div className="flex flex-row gap-4 items-center justify-between w-full">
          <div className="text-[40px] font-extrabold text-secondary">160</div>
          <div className="flex flex-col items-end">
            <div>OSP/ISP</div>
            <div>Engineers</div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-between w-full">
          <div className="text-[40px] font-extrabold text-secondary">42</div>
          <div className="flex flex-col items-end">
            <div>OSP/ISP</div>
            <div>Engineers</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[16%] right-[10%] w-[160px]">
        <div className="flex flex-row gap-4 items-center justify-between w-full">
          <h3 className="text-secondary">Proficiencies</h3>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
