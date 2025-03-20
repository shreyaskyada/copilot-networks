import { useEffect } from "react";
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
    images: "/dashboard/telecom.png",
  },
  {
    id: 2,
    title: "Energy & Utilities",
    description: "",
    icon: EnergyUtilitiesSVG,
    images: "/dashboard/energy.png",
  },
  {
    id: 3,
    title: "Enterprise & Retail",
    description: "",
    icon: EnterpriseRetailSVG,
    images: "/dashboard/enterprise_retail.png",
  },
  {
    id: 4,
    title: "Agrivoltaics",
    description: "",
    icon: AgrivoltaicsSVG,
    images: "dashboard/agrivoltaics.png",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  useEffect(() => {
    setActiveTab(1);
  }, []);

  return (
    <div
      className="flex w-full bg-white max-md:min-h-[70vh] md:min-h-[calc(100vh-130px)] md:items-center"
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
