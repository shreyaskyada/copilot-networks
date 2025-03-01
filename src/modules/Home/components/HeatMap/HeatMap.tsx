const HeatMap = () => {
  return (
    <div
      className="relative h-[110vh] md:h-[100vh] bg-[#002235] text-white font-Lato bg-no-repeat  bg-[length:100%] sm:bg-[length:500px] md:bg-[length:600px] lg:bg-[length:620px] xl:bg-[length:820px] bg-[position:top_38%_left_40%]  md:bg-[position:top_60%_left_50%] lg:bg-[position:top_52%_left_50%] xl:bg-[position:top_68%_left_50%]"
      style={{
        backgroundImage: "url('/heatMap.png')",
      }}
    >
      <div className="flex flex-col items-center pt-[40px] md:pt-[80px]">
        <h1 className="text-[40px] font-Lato font-bold">Project Heat Map</h1>
        <div className="flex item-center gap-2 mt-4">
          <h3 className="text-[20px] font-light">Headquarters</h3>
          <h3 className="text-[20px] font-semibold">- Dallas, TX</h3>
        </div>
        <h6 className="text-secondary text-[11px]">
          (Local Presence in every region of the US)
        </h6>
      </div>
      <div className="absolute flex flex-col sm:flex-row justify-between w-full bottom-[8%] md:bottom-[8%] xl:bottom-[16%] px-10 md:px-20 gap-6 ">
        <div className="w-[180px]">
          <div className="flex flex-row gap-4 items-center justify-between w-full">
            <div className="text-[40px] font-extrabold text-secondary">160</div>
            <div className="flex flex-col items-start tracking-[2px]">
              <div>OSP/ISP</div>
              <div>Engineers</div>
            </div>
          </div>
          <div className="flex flex-row  items-center justify-between w-full">
            <div className="text-[40px] font-extrabold text-secondary text-right">
              <span>&#32;42</span>
            </div>
            <div className="flex flex-col items-start tracking-[2px]">
              <div>OSP/ISP</div>
              <div>Engineers</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-4 items-start justify-between w-full">
            <h3 className="text-secondary text-[20px] font-Lato uppercase tracking-[2px]">
              Proficiencies
            </h3>
            <div className="text-[12px] ml-[10px] flex flex-col gap-2">
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
