const HeatMap = () => {
  return (
    <div
      className="font-Lato relative h-[740px] bg-[#002235] bg-[length:90%] bg-[position:top_38%_left_40%] bg-no-repeat text-white sm:h-[800px] sm:bg-[length:500px] md:h-[800px] md:bg-[length:600px] md:bg-[position:top_50%_left_50%] lg:bg-[length:620px] lg:bg-[position:top_52%_left_50%] xl:bg-[length:820px] xl:bg-[position:top_60%_left_50%] 2xl:h-[900px] 2xl:bg-[position:top_50%_left_50%]"
      style={{
        backgroundImage: "url('/heatMap.png')",
      }}
    >
      <div className="flex flex-col items-center pt-[40px] md:pt-[80px]">
        <h1 className="font-Lato text-[40px] font-bold">Project Heat Map</h1>
        <div className="item-center mt-4 flex gap-2">
          <h3 className="text-[20px] font-light">Headquarters</h3>
          <h3 className="text-[20px] font-semibold">- Dallas, TX</h3>
        </div>
        <h6 className="text-secondary text-[11px]">
          (Local Presence in every region of the US)
        </h6>
      </div>
      <div className="absolute bottom-[8%] w-full md:bottom-[8%] xl:bottom-[16%]">
        <div className="mx-auto flex w-[90%] max-w-6xl flex-col justify-between gap-6 sm:flex-row">
          <div className="w-fit">
            <div className="flex w-full flex-row items-center gap-4">
              <div className="text-secondary text-[32px] font-extrabold md:text-[40px]">
                160
              </div>
              <div className="flex flex-col text-[14px]">
                <div>OSP/ISP</div>
                <div>Engineers</div>
              </div>
            </div>
            <div className="flex w-full flex-row items-start gap-4">
              <div className="text-secondary text-[32px] font-extrabold md:text-[40px]">
                <span className="text-[#002235]">0</span>
                <span>42</span>
              </div>
              <div className="relative flex translate-y-[10px] flex-col text-[14px]">
                <div>OSP/ISP Field</div>
                <div>
                  Engineer & <br /> Inspectors
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex w-full flex-col items-start justify-between gap-4">
              <h3 className="text-secondary font-Lato text-[20px] tracking-[2px] uppercase">
                Proficiencies
              </h3>
              <div className="ml-[10px] flex flex-col gap-2 text-[12px]">
                <ul className="list-disc">
                  <div className="flex flex-row gap-8 tracking-[2px]">
                    <li>AutoCAD</li>
                    <li>SPIDA CALC</li>
                    <li>3-GIS</li>
                  </div>
                </ul>
                <ul className="list-disc">
                  <div className="flex flex-row gap-8 tracking-[2px]">
                    <li>GE SMALL WORLD</li>
                    <li>QGIS</li>
                  </div>
                </ul>
                <ul className="list-disc">
                  <div className="flex flex-row gap-8 tracking-[2px]">
                    <li>ARAMIS DT</li>
                    <li>Bentley</li>
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

export default HeatMap;
