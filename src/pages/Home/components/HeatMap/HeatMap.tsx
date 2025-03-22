import HeatMap1 from "./HeatMap1/HeatMap1";
import HeatMap2 from "./HeatMap2/HeatMap2";
import HeatMap3 from "./HeatMap3/HeatMap3";
import HeatMap4 from "./HeatMap4/HeatMap4";

interface HeatMapProps {
  activeTab: number;
}

const HeatMap: React.FC<HeatMapProps> = ({ activeTab }) => {
  return (
    <div>
      {activeTab === 1 && <HeatMap1 />}
      {activeTab === 2 && <HeatMap2 />}
      {activeTab === 3 && <HeatMap3 />}
      {activeTab === 4 && <HeatMap4 />}
    </div>
  );
};

export default HeatMap;
