const AgroCareOSS = () => {
  return (
    <>
      <h1 className="pb-[10px] text-[28px] font-bold max-lg:pl-6 md:pb-[30px] md:text-[40px] lg:pl-[6%] xl:pl-[10%]">
        Software
      </h1>
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-7 max-lg:pl-6 lg:pt-[61px] lg:pl-[6%] xl:pl-[10%]"
        style={{
          backgroundImage: "url('/agrivoltaic/solarBackground.png')", // Ensure this image exists
          backgroundPosition: "top",
        }}
      >
        <div className="relative z-10 mx-auto flex flex-col justify-between gap-30 md:flex-row md:gap-20">
          {/* Left Text Content */}
          <div className="lg:w-[60%] xl:w-[40%] 2xl:mt-[50px]">
            <h2 className="mb-2 text-[30px] font-extrabold lg:text-[35px] xl:mb-6 xl:text-[56px]">
              AgroCare OSS
            </h2>
            <p className="text-[14px] leading-[22px] text-[#012D4C] md:text-lg md:leading-[28px] lg:mt-[10px] xl:mt-[27px]">
              A smart ticketing platform designed to streamline operations in
              agrivoltaics projects. It enables real-time issue tracking, task
              delegation, and resolution workflows to ensure optimal system
              performance and efficient field management.
            </p>
          </div>

          {/* Right Laptop Image */}
          <div className="flex h-auto w-[100%] justify-end">
            <img
              src="/agrivoltaic/laptopImage.png"
              alt="AgroCare OSS Interface"
              className="h-auto w-full max-w-[900px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AgroCareOSS;
