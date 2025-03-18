import AgrivoltaicsSVG from "../../../../assets/AgrivoltaicsSVG";
import EnergyUtilitiesSVG from "../../../../assets/EnergyUtilitiesSVG";
import EnterpriseRetailSVG from "../../../../assets/EnterpriseRetailSVG";
import TelecomSVG from "../../../../assets/TelecomSVG";
import CircularSlickSlider from "./CircularSlickSlider/CircularSlickSlider";
import { HeroSectionProps } from "./types";

const tabs = [
  {
    id: 1,
    title: "Telecom",
    description: "",
    icon: TelecomSVG,
    images: ["/telecom/1.png", "/telecom/2.png", "/telecom/3.png"],
  },
  {
    id: 2,
    title: "Energy & Utilities",
    description: "",
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
    description: "",
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
    description: "",
    icon: AgrivoltaicsSVG,
    images: [
      "/agrivoltaics/1.png",
      "/agrivoltaics/2.png",
      "/agrivoltaics/3.png",
    ],
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  return (
    <div
      className="flex min-h-[calc(100vh-130px)] w-full bg-white md:items-center"
      style={{
        background:
          "linear-gradient(315deg, #DEF1FD 12.88%, #FFFFFF 66.22%, rgba(255, 255, 255, 0) 96.1%)",
      }}
    >
      <CircularSlickSlider
        tabs={[...tabs, ...tabs]}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default HeroSection;
