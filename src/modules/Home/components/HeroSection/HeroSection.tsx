import AgrivoltaicsSVG from "../../../../assets/AgrivoltaicsSVG";
import EnergyUtilitiesSVG from "../../../../assets/EnergyUtilitiesSVG";
import EnterpriseRetailSVG from "../../../../assets/EnterpriseRetailSVG";
import TelecomSVG from "../../../../assets/TelecomSVG";
import CircularSlickSlider from "./CircularSlickSlider/CircularSlickSlider";

const tabs = [
  {
    id: 1,
    title: "Telecom",
    description: "Your Trusted Partner for Comprehensive Network Solutions",
    icon: TelecomSVG,
    images: ["/telecom/1.png", "/telecom/2.png", "/telecom/3.png"],
  },
  {
    id: 2,
    title: "Energy & Utilities",
    description: "Your Trusted Partner for Comprehensive Network Solutions",
    icon: EnergyUtilitiesSVG,
    images: [
      "/energyUtilities/1.png",
      "/energyUtilities/2.png",
      "/energyUtilities/3.png",
    ],
  },
  {
    id: 3,
    title: "Enterprise & Retail",
    description: "Your Trusted Partner for Comprehensive Network Solutions",
    icon: EnterpriseRetailSVG,
    images: [
      "/enterpriseRetail/1.png",
      "/enterpriseRetail/2.png",
      "/enterpriseRetail/3.png",
    ],
  },
  {
    id: 4,
    title: "Agrivoltaics",
    description: "Your Trusted Partner for Comprehensive Network Solutions",
    icon: AgrivoltaicsSVG,
    images: [
      "/agrivoltaics/1.png",
      "/agrivoltaics/2.png",
      "/agrivoltaics/3.png",
    ],
  },
];

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-130px)] bg-white flex w-full md:items-center">
      <CircularSlickSlider tabs={[...tabs, ...tabs]} />
    </div>
  );
};

export default HeroSection;
