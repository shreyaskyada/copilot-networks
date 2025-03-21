import { useMemo } from "react";
import {
  agrivoltaics,
  energyUtilitiesServices,
  enterpriseRetail,
  telecomServices,
} from "./constant";
import ServiceCard from "./ServiceCard/ServiceCard";
import clsx from "clsx";

interface ServicesProps {
  activeTab: number;
}

const Services: React.FC<ServicesProps> = ({ activeTab }) => {
  const services = useMemo(() => {
    if (activeTab === 1) {
      return telecomServices;
    } else if (activeTab === 2) {
      return energyUtilitiesServices;
    } else if (activeTab === 3) {
      return enterpriseRetail;
    } else if (activeTab === 4) {
      return agrivoltaics;
    }
    return telecomServices;
  }, [activeTab]);

  return (
    <div className="relative container mx-auto overflow-hidden p-4 px-0 py-8 md:py-20">
      <div className="mx-auto w-[90%] max-w-6xl">
        <h1 className="text-[28px] font-bold md:text-[32px] lg:text-[40px]">
          {services.page}
        </h1>
        <div>
          {Object.values(services.sections).map((section, index) => {
            return (
              <div className="mt-[30px] md:mt-[42px]">
                <h1
                  className={clsx(
                    "text-[20px] font-bold md:text-[24px]",
                    index === 0 && "mb-[20px]",
                    index === 1 && "mb-[10px]",
                  )}
                >
                  {section.title}
                </h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
                  {section.items.map((item, index) => (
                    <ServiceCard key={index} {...item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
