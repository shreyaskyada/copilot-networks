import Marquee from "react-fast-marquee";

const integratedWithLogos = [
  {
    name: "Aramis-DT",
    logo: "/integratedWith/aramisDT.png",
  },
  {
    name: "o-calcPro",
    logo: "/integratedWith/oCalcPro.png",
  },
  {
    name: "bentley",
    logo: "/integratedWith/bentleyMicroStation.png",
  },
  {
    name: "ArcGIS",
    logo: "/integratedWith/arcGIS.png",
  },
  {
    name: "QGIS",
    logo: "/integratedWith/qGIS.png",
  },
  {
    name: "3GIS",
    logo: "/integratedWith/3GIS.png",
  },
  {
    name: "crescentLink",
    logo: "/integratedWith/crescentLink.png",
  },
  {
    name: "iQGeo",
    logo: "/integratedWith/iQGeo.png",
  },
  {
    name: "smallWorld",
    logo: "/integratedWith/smallWorld.png",
  },
  {
    name: "autoDeskAutoCAD",
    logo: "/integratedWith/autoDeskAutoCAD.png",
  },
  {
    name: "fiberPlanIT",
    logo: "/integratedWith/fiberPlanIT.png",
  },
];

const IntegratedWith = () => {
  const integratedWith = integratedWithLogos;

  return (
    <section className="bg-[#F3F7F9] py-10 md:py-16">
      <h2 className="font-Lato mb-10 text-center text-[24px] font-medium text-[#223354] md:mb-16 md:text-[40px]">
        Integrated with
      </h2>

      <div className="relative h-fit">
        <Marquee>
          <div className="flex whitespace-nowrap">
            {/* First set of partners */}
            {[...integratedWith, ...integratedWith].map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center px-6 md:px-8"
              >
                <div className="relative flex h-auto items-center justify-center md:h-[95px]">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="h-[65px] w-auto object-contain md:h-[80px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default IntegratedWith;
