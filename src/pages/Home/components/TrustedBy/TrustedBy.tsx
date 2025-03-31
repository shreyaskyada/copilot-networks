import clsx from "clsx";
import { useMemo } from "react";
import Marquee from "react-fast-marquee";

type Partner = {
  name: string;
  logo: string;
  className?: string;
};

const firstSectionIcons = [
  { name: "LUMA", logo: "/trustedBy/luma.svg" },
  { name: "TDS", logo: "/trustedBy/tds.svg" },
  { name: "AT&T", logo: "/trustedBy/at&t.svg" },
  { name: "Verizon", logo: "/trustedBy/Verizon_2015.svg" },
  {
    name: "All Points Broadband",
    logo: "/trustedBy/allpoints.svg",
  },
  { name: "WOW!", logo: "/trustedBy/wow.svg" },
  { name: "Comcast", logo: "/trustedBy/Comcast.svg" },
  { name: "Xfinity", logo: "/trustedBy/Xfinity.svg" },
  { name: "Glo Fiber", logo: "/trustedBy/glo-fiber.svg" },
  { name: "COX", logo: "/trustedBy/Cox_Communications.svg" },
  {
    name: "American Electric Power",
    logo: "/trustedBy/AEP_logo.svg",
  },
  { name: "Rise Broadband", logo: "/trustedBy/rise-broadband.svg" },
  {
    name: "Southern California Edison",
    logo: "/trustedBy/edison.svg",
    className: "!h-[80px]",
  },
  { name: "Brightspeed", logo: "/trustedBy/brightspped.svg" },
  { name: "Ziply", logo: "/trustedBy/ziply.svg" },
  { name: "Spectrum", logo: "/trustedBy/Charter_Spectrum_logo.svg" },
  { name: "Dragonfly", logo: "/trustedBy/dragonfly.png" },
  { name: "123 net", logo: "/trustedBy/123Net_logo.png" },
];

const secondSectionIcons = [
  { name: "LUMA", logo: "/trustedBy/luma.svg" },
  { name: "American Electric Power", logo: "/trustedBy/AEP_logo.svg" },
  { name: "Southern California Edison", logo: "/trustedBy/edison.svg" },
  { name: "DTE", logo: "/trustedBy/DTE.png" },
  { name: "Next Era Energy", logo: "/trustedBy/NextEraEnergy.png" },
  { name: "oneAsplundh", logo: "/trustedBy/oneAsplundh.png" },
  { name: "lecom", logo: "/trustedBy/lecom.png" },
  { name: "thayer", logo: "/trustedBy/thayer.png" },
];

const TrustedBy = ({ activeTab }: { activeTab: number }) => {
  const partners: Partner[] = useMemo(
    () => (activeTab === 1 ? firstSectionIcons : secondSectionIcons),
    [activeTab],
  );

  return (
    <section className="bg-[#F3F7F9] py-10 md:py-16">
      <h2 className="font-Lato mb-10 text-center text-[24px] font-medium text-[#223354] md:mb-16 md:text-[40px]">
        Trusted by:
      </h2>

      <div className="relative h-fit">
        <Marquee>
          <div className="flex whitespace-nowrap">
            {/* First set of partners */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center px-6 md:px-8"
              >
                <div className="relative flex h-auto items-center justify-center md:h-[95px]">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className={clsx(
                      "h-[35px] w-auto object-contain md:h-[40px]",
                      partner.className,
                    )}
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

export default TrustedBy;
