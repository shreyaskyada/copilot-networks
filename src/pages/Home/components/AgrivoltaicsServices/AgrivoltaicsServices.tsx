import { AgrivoltaicCard } from "./AgrivoltaicCard";

const agrivoltaicsData = [
  {
    id: 1,
    imageUrl: "/agrivoltaic/food.svg",
    title: "Food",
    description:
      "Ensuring agricultural lands remain productive while providing access to sustainable and nutritious food for communities.",
  },
  {
    id: 2,
    imageUrl: "/agrivoltaic/energy.svg",
    title: "Energy",
    description:
      "Meeting the growing demand for renewable energy in both urban and rural areas around the world.",
  },
  {
    id: 3,
    imageUrl: "/agrivoltaic/water.svg",
    title: "Water",
    description:
      "Minimizing water consumption and ensuring clean water access for a rapidly expanding global population.",
  },
];

const AgrivoltaicsServices = () => {
  return (
    <section className="mt-[30px] bg-white px-4 py-12 md:mt-[60px] md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[10px] border border-[#CFE1E8] bg-[#F3F7F9] py-[50px] md:py-[50px]">
          <div className="max-w-7xl px-4 md:px-[50px]">
            <p className="text-lg leading-relaxed text-gray-700 md:text-[24px]">
              Agrivoltaics blends solar technology with farming practices that
              are customized for each region’s climate. This approach creates a
              natural balance where both solar energy and agriculture can
              thrive, making the best use of the land. Agrivoltaics is already
              being used in innovative ways across the globe. Farmers are
              benefitting from large Scale Solar Projects because agriculture
              activities are undisturbed. While it’s a well-established
              technology in some places, it’s still a relatively new concept in
              the United States, with only a few projects so far.
            </p>
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {agrivoltaicsData.map((agrivoltaic, index) => {
            return <AgrivoltaicCard key={index} {...agrivoltaic} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AgrivoltaicsServices;
