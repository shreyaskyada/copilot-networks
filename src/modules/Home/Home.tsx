import HeatMap from "./components/HeatMap/HeatMap";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Testimonial from "./components/Testimonial/Testimonial";
import HeroSection from "./components/HeroSection/HeroSection";
import { LinkedInFeed } from "./components/LinkedInFeed";

import { HomeProps } from "./types";

const Home: React.FC<HomeProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <HeroSection setActiveTab={setActiveTab} />
      <HeatMap />
      {activeTab === 0 && <Testimonial />}
      {(activeTab === 0 || activeTab === 1) && (
        <TrustedBy activeTab={activeTab} />
      )}
      <LinkedInFeed />
    </div>
  );
};

export default Home;
