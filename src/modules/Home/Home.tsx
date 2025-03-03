import Header from "../../components/Header/Header";
import HeatMap from "./components/HeatMap/HeatMap";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Footer from "../../components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import HeroSection from "./components/HeroSection/HeroSection";
import { LinkedInFeed } from "./components/LinkedInFeed";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HeatMap />
      <Testimonial />
      <TrustedBy />
      <LinkedInFeed />
      <Footer />
    </div>
  );
};

export default Home;
