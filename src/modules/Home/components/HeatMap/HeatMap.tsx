const HeatMap = () => {
  return (
    <div
      className="font-Lato relative h-[110vh] bg-[#002235] bg-[length:100%] bg-[position:top_38%_left_40%] bg-no-repeat text-white sm:bg-[length:500px] md:h-[100vh] md:bg-[length:600px] md:bg-[position:top_60%_left_50%] lg:bg-[length:620px] lg:bg-[position:top_52%_left_50%] xl:bg-[length:820px] xl:bg-[position:top_68%_left_50%]"
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
      <div className="absolute bottom-[8%] flex w-full flex-col justify-between gap-6 px-10 sm:flex-row md:bottom-[8%] md:px-20 xl:bottom-[16%]">
        <div className="w-[180px]">
          <div className="flex w-full flex-row items-center justify-between gap-4">
            <div className="text-secondary text-[40px] font-extrabold">160</div>
            <div className="flex flex-col items-start tracking-[2px]">
              <div>OSP/ISP</div>
              <div>Engineers</div>
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between">
            <div className="text-secondary text-right text-[40px] font-extrabold">
              <span>&#32;42</span>
            </div>
            <div className="flex flex-col items-start tracking-[2px]">
              <div>OSP/ISP</div>
              <div>Engineers</div>
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
  );
};

export default HeatMap;
