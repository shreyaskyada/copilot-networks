import Card from "./Card";

const ConstructionSoftware = () => {
  return (
    <section className="relative overflow-hidden md:py-20 lg:px-24">
      <div className="mx-auto w-[90%] max-w-6xl p-4 px-0 py-8">
        <h2 className="text-navy-900 mb-12 text-3xl font-bold md:text-4xl">
          Construction Softwares
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card
            imageSrc="/constructoin_softwares/rus2bill.jpeg"
            altText="Construction workers using RUS2BILL software"
            buttonClassName="self-start !bg-[#14A756]"
          />

          <Card
            imageSrc="/constructoin_softwares/fiber_oss.png"
            altText="Fiber OSS Dashboard"
            buttonClassName="self-start"
          />

          <Card
            imageSrc="/constructoin_softwares/permit_dashboard.png"
            altText="Permit Tracking Dashboard"
            isButtonVisible={false}
            buttonClassName=""
          />

          <div className="flex items-center justify-center rounded-2xl  p-8">
            {/* <p className="text-xl font-medium text-sky-600">
              + More Upcoming Softwares
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSoftware;
