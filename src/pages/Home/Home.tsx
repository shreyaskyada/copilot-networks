import HeatMap from "./components/HeatMap/HeatMap";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Testimonial from "./components/Testimonial/Testimonial";
import HeroSection from "./components/HeroSection/HeroSection";
import { LinkedInFeed } from "./components/LinkedInFeed";

import { HomeProps } from "./types";
import { Services } from "./components/Services";
import { TelecomProducts } from "./components/TelecomProducts";
import { ConstructionSoftware } from "./components/ConstructionSoftware";
import { UtilityConstruction } from "./components/UtilityConstruction";

const Home: React.FC<HomeProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <HeroSection setActiveTab={setActiveTab} />
      <HeatMap activeTab={activeTab} />
      <Services activeTab={activeTab} />
      {activeTab === 1 && (
        <>
          <TelecomProducts />
          <ConstructionSoftware />
        </>
      )}
      {activeTab === 1 && <Testimonial />}
      {(activeTab === 1 || activeTab === 2) && (
        <TrustedBy activeTab={activeTab} />
      )}
      {(activeTab === 2 || activeTab === 4) && <UtilityConstruction />}
      <LinkedInFeed />
    </div>
  );
};

export default Home;
