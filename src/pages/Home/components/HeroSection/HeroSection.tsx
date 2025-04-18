import { useEffect } from "react";
import AgrivoltaicsSVG from "../../../../assets/AgrivoltaicsSVG";
import EnergyUtilitiesSVG from "../../../../assets/EnergyUtilitiesSVG";
import EnterpriseRetailSVG from "../../../../assets/EnterpriseRetailSVG";
import TelecomSVG from "../../../../assets/TelecomSVG";
import CircularSlickSlider from "./CircularSlickSlider/CircularSlickSlider";
import { HeroSectionProps } from "./types";
import RealEstateDevelopmentSVG from "../../../../assets/RealEstateDevelopmentSVG";

const tabs = [
  {
    id: 5,
    title: "Real Estate & Development",
    description: "",
    icon: RealEstateDevelopmentSVG,
    isUnderConstruction: true,
    combinedImage: "/dashboard/telecom/telecom_combined.png",
    otherImages: [
      "/dashboard/realEstateDevelopment/image1.png",
      "/dashboard/realEstateDevelopment/image2.png",
      "/dashboard/realEstateDevelopment/image3.png",
    ],
  },
  {
    id: 1,
    title: "Telecom",
    description: "",
    icon: TelecomSVG,
    isUnderConstruction: false,
    combinedImage: "/dashboard/telecom/telecom_combined.png",
    otherImages: [
      "/dashboard/telecom/image1.jpg",
      "/dashboard/telecom/image2.jpg",
      "/dashboard/telecom/image3.png",
    ],
  },
  {
    id: 2,
    title: "Energy & Utilities",
    description: "",
    icon: EnergyUtilitiesSVG,
    isUnderConstruction: false,
    combinedImage: "/dashboard/energy_utilities/energy_combined.png",
    otherImages: [
      "/dashboard/energy_utilities/image1.png",
      "/dashboard/energy_utilities/image2.png",
      "/dashboard/energy_utilities/image3.png",
    ],
  },
  {
    id: 3,
    title: "Enterprise & Retail",
    description: "",
    icon: EnterpriseRetailSVG,
    isUnderConstruction: true,
    combinedImage:
      "/dashboard/enterprise_retail/enterprise_retail_combined.png",
    otherImages: [
      "/dashboard/enterprise_retail/image1.png",
      "/dashboard/enterprise_retail/image2.png",
      "/dashboard/enterprise_retail/image3.png",
    ],
  },
  {
    id: 4,
    title: "Agrivoltaics",
    description: "",
    icon: AgrivoltaicsSVG,
    isUnderConstruction: true,
    combinedImage: "dashboard/agrivoltaics/agrivoltaics_combined.png",
    otherImages: [
      "/dashboard/agrivoltaics/image1.png",
      "/dashboard/agrivoltaics/image2.png",
      "/dashboard/agrivoltaics/image3.png",
    ],
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  useEffect(() => {
    setActiveTab(1);
  }, []);

  return (
    <div
      className="flex w-full bg-white"
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
