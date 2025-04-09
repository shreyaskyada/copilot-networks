// Define the interface for team member data
interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  linkedIn: string;
}

// Sample data array of team members
const teamMembers: TeamMember[] = [
  {
    id: "aasim",
    name: "Aasim Ahmad",
    title: "PRESIDENT",
    description:
      "Aasim Ahmad is a Telecom Executive with over 15 years of experience delivering successful telecom projects. He also has 10 years of experience working for Ericsson and Fujitsu. Aasim understands the continuing needs of Telecom Providers as critical infrastructure and responded by establishing Copilot Networks. He makes himself available to all Copilot clients, truly putting the customer first.",
    image: "/teams/aasim-img.png",
    linkedIn: "https://www.linkedin.com/in/aasim-ahmad-84947a4a/",
  },
  {
    id: "shakti",
    name: "Shakti Dash",
    title: "HEAD OF OFFSHORE OPERATIONS",
    description:
      'Shakti Dash is the Head of Offshore Operations, responsible for all service delivery, engineering, and deployment support activities. With over 25 years of experience in various global telcos, Shakti brings his expertise in building teams, driving projects, delivering engineering services, and, importantly, driving process improvements through automation and digitization. Shakti and his team consistently outperform customer expectations by following: "Do your best, do a little better than you are."',
    image: "/teams/shakti-img.png",
    linkedIn: "https://www.linkedin.com/in/shakti-dash-10a08825/",
  },
  {
    id: "yadveer",
    name: "Yadveer Singh",
    title: "VICE PRESIDENT OF GIS",
    description:
      "Yadveer Singh leads Copilot's GIS team successfully adapting to any number of software and schema used by our customers. He brings more than 15 years of experience in some of the most reputed organizations that deliver outside plant design services in the USA and the Middle East.",
    image: "/teams/yadveer-img.png",
    linkedIn: "https://www.linkedin.com/in/yadveer-singh-a98b3822/",
  },
  {
    id: "patrick",
    name: "Patrick Siddle",
    title: "HEAD OF DOMESTIC FIELD OPERATIONS",
    description:
      "Patrick Siddle, a proud US Army Veteran, has a lifetime of experience building, managing, and maintaining Copper and Optical Networks. He has spliced, drilled, and managed projects all over the nation. Pat has led teams in Fortune 500 companies like Ericsson and has worked on projects for Google Fiber, ATT, Verizon, Lumen, and TDS Telecom. Today, Pat's team specializes in making efficient and accurate network design decisions in the field. His team has helped reduce the cost and time to build our customers' projects.",
    image: "/teams/patrick-img.png",
    linkedIn: "https://www.linkedin.com/company/copilot-net-llc/mycompany",
  },
  {
    id: "shayne",
    name: "Shayne Rouse",
    title: "HEAD OF PERMITTING, RIGHT OF WAY, AND COLOCATION",
    description:
      "Shayne Rouse has a decade of experience with engineering and permitting for both Aerial and Underground facilities. He brings to Copilot a vast knowledge of city/county, state, and federal compliance having supported projects in over 33 of the domestic 48 states in the US.",
    image: "/teams/shayne-img.png",
    linkedIn: "https://www.linkedin.com/in/shaynerouse/",
  },
  {
    id: "travis",
    name: "Travis Heidle",
    title: "VICE PRESIDENT OF FIELD OPERATIONS",
    description:
      "As Vice President of Field Operations, Travis Heidle brings over 25 years of industry experience. He specializes in inside wiring, OSPC splicing, aerial and buried OSPE, and project management. With a proven record of building thousands of miles of fiber infrastructure across the Southeastern United States, Travis is dedicated to delivering excellence for our team.",
    image: "/teams/travis.png",
    linkedIn: "https://www.linkedin.com/company/copilot-net-llc/mycompany",
  },
  {
    id: "christer",
    name: "Christer Karlsson",
    title: "MANAGING PARTNER AND CHAIRMAN",
    description:
      "As Managing Partner and Chairman, Christer Karlsson brings over 30 years of experience in the Nordic and European markets. A prominent leader in the FTTx revolution since the early 2000s, he specializes in transforming service production and adopting new technologies. Christer's expertise will be instrumental in advancing our mission to innovate and enhance FTTx network deployment and operations.",
    image: "/teams/christer.png",
    linkedIn: "https://www.linkedin.com/company/copilot-net-llc/mycompany",
  },
  // {
  //   id: "karlReynold",
  //   name: "Karl Reynold",
  //   title: "VP ENGINEERING",
  //   description:
  //     "Karl Reynolds brings to the table engineering growth and efficiency strategies to infrastructure deployments for fiber networks specializing in technical FTTX integrations in cooperation with multiple parties. He brings to Copilot 15+ years of international corporate engineering experience from several large organizations spanning three continents from the UK to Australia and the USA.",
  //   image: "/teams/Karl-Reynold.png",
  //   linkedIn: "https://www.linkedin.com/in/karl-reynolds-622b7562",
  // },
];

const Members = () => {
  return (
    <section className="mx-auto max-w-5xl py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">Led By Experts</h2>

        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`overflow-hidden rounded-2xl ${index % 2 === 0 ? "bg-[linear-gradient(251deg,#DDEDFA_0%,#F4FAFF_100%)]" : "bg-[linear-gradient(258deg,#8FBEDC_0%,#FDFEFE_98%,#FFFFFF_100%)]"}`}
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}
              >
                <div
                  className={`w-full p-6 md:w-5/12 ${index % 2 === 0 ? "md:pr-0" : "md:pl-0"}`}
                >
                  <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="w-[200px] md:hidden">
                      <a href={member.linkedIn}>
                        <img
                          src="/linkdin-button.svg"
                          alt="linkedin"
                          className="lnk-icon123 absolute bottom-4 left-4"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex w-full items-start p-8 md:w-7/12">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="mb-4 font-medium text-gray-600">
                      {member.title}
                    </p>

                    <p className="mb-6 text-gray-700">{member.description}</p>
                    <div className="hidden w-[200px] md:block">
                      <a href={member.linkedIn} target="_blank">
                        <img
                          src="/linkdin-button.svg"
                          alt="linkedin"
                          className="lnk-icon123"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
