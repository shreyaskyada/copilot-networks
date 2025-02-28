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
    icon: <TelecomSVG />,
  },
  {
    id: 2,
    title: "Energy & Utilities",
    description: "Your Trusted Partner for Comprehensive Network Solutions",
    icon: <EnergyUtilitiesSVG />,
  },
  {
    id: 3,
    title: "Enterprise & Retail",
    description: "Your Trusted Partner for Comprehensive Network Solutions",
    icon: <EnterpriseRetailSVG />,
  },
  {
    id: 4,
    title: "Agrivoltaics",
    description: "Your Trusted Partner for Comprehensive Network Solutions",
    icon: <AgrivoltaicsSVG />,
  },
];

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-130px)] bg-white flex items-center justify-between w-full">
      <CircularSlickSlider tabs={[...tabs, ...tabs]} />
    </div>
  );
};

export default HeroSection;
