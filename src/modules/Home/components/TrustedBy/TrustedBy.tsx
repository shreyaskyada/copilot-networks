const partners = [
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
  },
  { name: "Brightspeed", logo: "/trustedBy/brightspped.svg" },
];

const TrustedBy = () => {
  return (
    <section className="bg-[#F3F7F9] px-4 py-8 md:py-16">
      <h2 className="font-Lato mb-8 text-center text-[24px] font-medium text-[#223354] md:mb-16 md:text-[40px]">
        Trusted by:
      </h2>

      <div className="mx-auto grid w-[90%] max-w-6xl grid-cols-4 gap-4 md:gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2 md:p-4"
          >
            <div className="relative flex h-10 w-full items-center justify-center md:h-16">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="object-contain"
                sizes="(max-width: 768px) 25vw, 20vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
