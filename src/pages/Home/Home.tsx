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
import { IntegratedWith } from "./components/IntegratedWith";
import { WhatWeDo } from "./components/WhatWeDo";
import { Products } from "./components/Products";
import { EnterpriseSoftwares } from "./components/EnterpriseSoftwares";
import { AgrivoltaicsServices } from "./components/AgrivoltaicsServices";

const Home: React.FC<HomeProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <HeroSection setActiveTab={setActiveTab} />
      <HeatMap activeTab={activeTab} />
      {(activeTab === 2 || activeTab === 3) && <WhatWeDo activeTab={activeTab} />}
      {activeTab === 4 && <AgrivoltaicsServices />}
      <Services activeTab={activeTab} />
      {/* {activeTab === 3 && <OurMission />} */}
      {activeTab === 3 && <EnterpriseSoftwares />}
      {(activeTab === 2 || activeTab === 4) && <Products activeTab={activeTab} />}
      {activeTab === 1 && (
        <>
          <TelecomProducts />
          <ConstructionSoftware />
        </>
      )}
      {activeTab === 1 && <IntegratedWith />}
      {activeTab === 1 && <Testimonial />}
      {(activeTab === 1 || activeTab === 2 || activeTab === 4) && (
        <TrustedBy activeTab={activeTab} />
      )}
      {(activeTab === 2) && <UtilityConstruction />}
      <LinkedInFeed />
    </div>
  );
};

export default Home;
