interface WhatWeDoProps {
  activeTab: number
}

const energyUtilityData = {
  content: "Copilot Networks provides a comprehensive range of innovative solutions, including access chambers, cable protection systems, O-Turbines, Archimedes Turbines, Glass Solar panels, and more. Our products are designed to meet the evolving needs of modern energy infrastructure projects, combining sustainability, cutting-edge technology, and high-performance capabilities. With a focus on product development, manufacturing, and distribution, we are committed to driving a greener, more efficient tomorrow."
}

const enterpriceRetail = {
  content: "We power you with niche and specialized software solutions tailored to ensure the future success of our clients. Unlike typical MSPs, we focus on addressing unique challenges with customized solutions that are often overlooked or hard to find. Our expertise lies in adapting and enhancing existing technologies to provide best-in-class solutions, giving our clients a competitive edge and unmatched value."
} 

const WhatWeDo: React.FC<WhatWeDoProps> = ({activeTab}) => {
  return (
    <div className="relative container mx-auto overflow-hidden px-0 pt-8 md:pt-20">
      <div className="mx-auto w-[90%] max-w-6xl">
        <section className="rounded-[10px] border border-[#CFE1E8] bg-[#F3F7F9] py-[50px] md:py-[50px]">
          <div className="max-w-7xl px-4 md:px-[50px]">
            {/* <h2 className="mb-8 text-4xl font-bold text-gray-900 md:mb-12 md:text-5xl">
              What we do?
            </h2> */}
            <p className="text-lg leading-relaxed text-gray-700 md:text-[24px]">
            {activeTab === 2 ? energyUtilityData.content : enterpriceRetail.content}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatWeDo;
