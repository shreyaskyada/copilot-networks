import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import HeatMap from "./components/HeatMap/HeatMap";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HeatMap />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default Home;
