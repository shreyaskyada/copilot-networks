import Header from "../../components/Header/Header";
import HeatMap from "./components/HeatMap/HeatMap";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Footer from "../../components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import HeroSection from "./components/HeroSection/HeroSection";
import { LinkedInFeed } from "./components/LinkedInFeed";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <Header />
      <HeroSection setActiveTab={setActiveTab} />
      <HeatMap />
      {activeTab === 1 && <Testimonial />}
      {(activeTab === 1 || activeTab === 2) && (
        <TrustedBy activeTab={activeTab} />
      )}
      <LinkedInFeed />
      <Footer />
    </div>
  );
};

export default Home;
