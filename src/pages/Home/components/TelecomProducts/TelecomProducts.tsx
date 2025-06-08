interface ProductCard {
  image: string;
  title: string;
  redirectURL: string;
}

const productCards: ProductCard[] = [
  {
    image: "/telecomProducts/fibre_optic_cables.png",
    title: "Fibre Optic cables",
    redirectURL:
      "https://www.copilotnet.com/products/category/fiber-optic-cables",
  },
  {
    image: "/telecomProducts/microducts_n_accessories.png",
    title: "Microducts and Accessories",
    redirectURL:
      "https://www.copilotnet.com/products/category/microducts-and-accessories",
  },
  {
    image: "/telecomProducts/fiber_optic_assemblies.png",
    title: "Fiber Optic Assemblies",
    redirectURL:
      "https://www.copilotnet.com/products/category/fiber-optic-assemblies",
  },
  {
    image: "/telecomProducts/fiber_optic_termination.png",
    title: "Fiber Optic Termination Accessories",
    redirectURL:
      "https://www.copilotnet.com/products/category/fiber-optic-termination-accessories",
  },
];

const TelecomProducts = () => {
  return (
    <section className="relative overflow-hidden bg-[#002B3F] text-white md:py-20 lg:px-24">
      <div className="p-4 px-0 py-8">
        <div className="mx-auto w-[90%] max-w-6xl">
          <h2 className="mb-8 text-4xl">Products</h2>
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCards.map((card, index) => (
              <a key={index} href={card.redirectURL}>
                <div className="transform cursor-pointer overflow-hidden transition-transform hover:-translate-y-1">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-[200px] w-full rounded-lg object-cover"
                  />
                  <h3 className="p-4 text-lg">{card.title}</h3>
                </div>
              </a>
            ))}
          </div>
          <a
            href="https://www.copilotnet.com/products"
            className="flex w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-[#002B3F] transition-colors hover:bg-gray-100"
          >
            View all <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TelecomProducts;
