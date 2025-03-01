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
    <section className="py-16 px-4 bg-[#F3F7F9]">
      <h2 className="text-4xl font-Lato text-center text-slate-800 mb-16">
        Trusted by:
      </h2>

      <div className="grid grid-cols-4 gap-4 md:gap-4 w-[90%] md:w-[80%] mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2 md:p-4"
          >
            <div className="relative w-full h-10 md:h-16 flex justify-center items-center">
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
