import HeatMap from "./components/HeatMap/HeatMap";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Testimonial from "./components/Testimonial/Testimonial";
import HeroSection from "./components/HeroSection/HeroSection";
import { LinkedInFeed } from "./components/LinkedInFeed";

import { HomeProps } from "./types";
import { Services } from "./components/Services";

const Home: React.FC<HomeProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <HeroSection setActiveTab={setActiveTab} />
      <HeatMap />
      <Services activeTab={activeTab} />
      {activeTab === 1 && <Testimonial />}
      {(activeTab === 1 || activeTab === 2) && (
        <TrustedBy activeTab={activeTab} />
      )}
      <LinkedInFeed />
    </div>
  );
};

export default Home;
