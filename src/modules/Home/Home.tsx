import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import HeatMap from "./components/HeatMap/HeatMap";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Footer from "../../components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <HeroSection /> */}
      <HeatMap />
      <Testimonial />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default Home;
