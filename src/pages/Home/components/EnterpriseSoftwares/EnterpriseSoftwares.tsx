import EnterpriseSoftwaresCard from "./EnterpriseSoftwaresCard/EnterpriseSoftwaresCard";

const enterpriseSoftwareData = [
  {
    title: "Private Networks",
    description:
      "Don't get caught up with any one OEM. We provide long term solutions for the application of AI and Smart Tech to minimize time to market and provide actual Return on Investment Targets.",
  },
  {
    title: "Graphiant",
    description:
      "Make way for the future of Private Networks. MPLS and SD-Wan are out and Graphiant is in. Free up 60% of your annual MPLS and SD-WAN Budget NOW!",
  },
  {
    title: "Cyber Security",
    description:
      "Secure is never Secure enough. Tempered Airwall is a key bolt on security solution for any major business. Cut off threats from accessing critical infrastructure within your business.",
  },
];

const EnterpriseSoftwares = () => {
  return (
    <div className="relative container mx-auto overflow-hidden p-4 px-0 py-8 md:py-20">
      <div className="mx-auto w-[90%] max-w-6xl">
        <h1 className="mb-1.5 text-2xl font-bold sm:text-[28px] md:text-[32px] lg:text-[40px]">
          Softwares
        </h1>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {enterpriseSoftwareData.map((software, index) => (
            <EnterpriseSoftwaresCard
              key={index}
              title={software.title}
              description={software.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSoftwares;
