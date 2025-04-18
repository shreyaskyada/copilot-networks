const HeatMap2 = () => {
  return (
    <div
      className={
        "font-Lato md:pb-[20 0px] relative bg-[#E8F3EB] py-[40px] text-[#286E3A] md:py-[80px]"
      }
    >
      <div className="flex flex-col items-center">
        <h1 className="font-Lato text-[24px] font-bold md:text-[40px]">
          Project Heat Map
        </h1>
        <div className="item-center mt-4 flex gap-2 text-[20px]">
          <h3 className="text-[20px] font-light">Headquarters</h3>
          <h3 className="text-[20px] font-semibold">- Dallas, TX</h3>
        </div>
        <h6 className="text-[11px]">
          (Local Presence in every region of the US)
        </h6>
      </div>
      <div className="my-12">
        <img
          src="/heatMaps/heatMap4.svg"
          alt="Heat Map"
          className="xl-bg-[820px] inset-0 mx-auto w-[90%] object-cover sm:w-[500px] md:w-[600px] lg:w-[620px] xl:w-[820px]"
        />
      </div>
      {/* <div className="absolute md:bottom-[18%]"> */}
      <div className="w-full max-md:px-5 md:bottom-[0%] xl:absolute xl:bottom-[8%]">
        <div className="mx-auto flex w-[90%] max-w-6xl flex-col justify-between gap-6 sm:flex-row">
          <div className="flex w-fit flex-col gap-[20px]">
            <div className="flex w-full flex-row items-center gap-4 uppercase">
              <div className="relative text-[32px] font-extrabold md:text-[35px]">
                <sup className="absolute top-0 left-[20px] text-[10px] font-normal">
                  UPTO
                </sup>
                <span className="text-[#E8F3EB]">0</span>
                40%
              </div>
              <div className="flex flex-col text-[14px]">
                <div>
                  Higher <br /> efficiency
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-row items-start gap-4 uppercase">
              <div className="text-[32px] font-extrabold md:text-[35px]">
                <sup className="absolute top-0 left-[20px] text-[10px] font-normal">
                  UPTO
                </sup>
                <span className="text-[#E8F3EB]">0</span>
                <span>70%</span>
              </div>
              <div className="relative flex translate-y-[10px] flex-col text-[14px]">
                <div>
                  cost reduction <br /> Annually
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-row items-start gap-4 uppercase">
              <sup className="absolute top-0 text-[10px] font-normal">UPTO</sup>
              <div className="text-[32px] font-extrabold md:text-[35px]">
                <span>100%</span>
              </div>
              <div className="relative flex translate-y-[5px] flex-col text-[14px]">
                <div>
                  off Grid <br /> Solutions
                </div>
              </div>
            </div>
          </div>

          <div className="xl:translate-x-10">
            <div className="flex w-full flex-col items-start justify-between gap-4">
              <h3 className="font-Lato text-[20px] tracking-[2px] text-[#286E3A] uppercase">
                Proficiencies
              </h3>
              <div className="ml-[10px] flex flex-col gap-2 text-[12px]">
                <ul className="list-disc">
                  <div className="flex flex-col gap-1 tracking-[2px]">
                    <li>High Efficiency Power Generation</li>
                    <li>Custom Hybrid Solutions Strategy</li>
                    <li>Low Cost Production</li>
                    <li>Urban Friendly Solutions</li>
                    <li>High Sustainably Solutions</li>
                    <li>Omni-Directional Wind turbine</li>
                    <li>Silent Turbine Solution</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap2;
