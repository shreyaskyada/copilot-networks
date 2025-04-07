import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Glass Solar",
    description:
      "Glass Solar offers a range of benefits, including significant cost savings by reducing energy bills and operational expenses. It is reliable, low-maintenance power source. It allows businesses to meet their energy needs, boosts brand reputation, promoting energy independence and access to government incentives.",
    imageUrl: "/products/glassSolar.png",
  },
  {
    id: 2,
    title: "Conical Solar Panel",
    description:
      "Conical Solar Panels offer high efficiency with a compact design, making them perfect for limited spaces. They reduce energy costs, require minimal maintenance, and help lower your carbon footprint. Scalable and easy to integrate with the grid, they provide long-term energy savings and potential income from excess energy.",
    imageUrl: "/products/conicalSolarPanel.png",
  },
  {
    id: 3,
    title: "Archimedes Turbine",
    description:
      "The Archimedes Turbine is an efficient, low-maintenance solution for generating energy from water flow. It harnesses renewable energy to reduce operational costs and promote sustainability. Its compact design ensures easy installation, while its durability and minimal upkeep offer long-term, reliable performance. The turbine can be integrated into existing systems, providing a continuous high efficiency power source.",
    imageUrl: "/products/archimedesTurbine.png",
  },
  {
    id: 4,
    title: "Perovskite Solar Panel",
    description:
      "Perovskite Solar Panels offer high efficiency and cost-effectiveness with a lightweight, flexible design. These panels can be  integrated into a variety of surfaces. Their scalability makes them a versatile option for businesses.",
    imageUrl: "/products/perovskiteSolarPanel.png",
  },
  {
    id: 5,
    title: "O-Wind Turbine",
    description:
      "O-Wind Turbines are a cutting-edge solution for harnessing wind energy in urban and offshore environments. Their unique design allows for effective energy generation in low-wind conditions, making them ideal for cities and areas with variable wind patterns. Compact and quiet, O-Wind Turbines require minimal space and maintenance. They provide buisnesses a reliable, sustainable energy source that contribute to long-term energy independence.",
    imageUrl: "/products/oWindTurbine.png",
  },
  // {
  //   id: 6,
  //   title: "STAKKAbox",
  //   description:
  //     "The next generation of network chamber access systems is designed for various applications and sectors, including jointing, bending, and pulling utilities. This fully modular solution can be customized to meet specific site requirements, offering a range of connectable components and accessories. By reducing in-situ construction time, it significantly lowers costs and enhances efficiency.",
  //   imageUrl: "/products/sTAKKAbox.png",
  // },
  // {
  //   id: 7,
  //   title: "MULTIduct",
  //   description:
  //     "MULTIduct™ is a cutting-edge, lightweight, and durable multi-duct cable protection system, providing a modern alternative to conventional cable ducting solutions.",
  //   imageUrl: "/products/multiDuct.png",
  // },
  // {
  //   id: 8,
  //   title: "PROtrough",
  //   description:
  //     "PROtrough is a groundbreaking, lightweight, fire-retardant cable trough system, providing a modern alternative to traditional concrete troughs for the rail, light rail, and power industries.",
  //   imageUrl: "/products/PROtrough.png",
  // },
  // {
  //   id: 9,
  //   title: "Plastibeton",
  //   description:
  //     "Plastibeton is a durable, lightweight composite combining concrete and plastic, offering superior resistance to weathering, corrosion, and impact. Ideal for manhole covers, drainage systems, and infrastructure components, it provides a cost-effective and sustainable solution for various industries.",
  //   imageUrl: "/products/Plastibeton.png",
  // },
  // {
  //   id: 10,
  //   title: "Composite",
  //   description:
  //     "Composite covers provide a lightweight solution without compromising loading performance. A variety of sizes can be produced using multi-cover frames, and custom badging options are available to meet specific customer requirements.",
  //   imageUrl: "/products/Composite.png",
  // },
  // {
  //   id: 11,
  //   title: "Ductile",
  //   description:
  //     "Ductile iron manhole access covers are a durable, high-performance solution designed for areas with up to D400 loadings. Featuring a range of specialized benefits, they ensure safe and secure access to underground utilities, making them perfect for high-traffic environments.",
  //   imageUrl: "/products/Ductile.png",
  // },
  // {
  //   id: 12,
  //   title: "Concrete",
  //   description:
  //     "Concrete infill covers provide versatile sizing and design options. Various sizes can be produced using multi-cover frames, with custom badging available to suit customer needs. Additionally, these covers can be equipped with a variety of locking features for enhanced security.",
  //   imageUrl: "/products/Concrete.png",
  // },
];

const Products = () => {
  return (
    <div className="bg-[#F3F7F9]">
      <div className="relative container mx-auto overflow-hidden p-4 px-0 py-8 md:py-20">
        <div className="mx-auto w-[90%] max-w-6xl">
          <h1 className="mb-[20px] text-[28px] font-bold md:text-[32px] lg:text-[40px]">
            Products
          </h1>
          <div className="no-scrollbar flex gap-6 overflow-x-auto pb-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
