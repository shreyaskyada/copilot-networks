import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LocationsData = [
  {
    country: "USA",
    location: "Headquarters",
    address: "955 Garden Park Drive, #220, Allen, Texas, 75013",
  },
  {
    country: "India",
    location: "Copilot Networks India",
    address:
      "Procapitus Business Park, D-247/4A, Sector 63, Noida, Uttar Pradesh, India -201301",
  },
  {
    country: "UK",
    location: "Copilot Networks Europe",
    address: "239 Kensington High ST, London W8 6SN",
  },
  {
    country: "GERMANY",
    location: "Copilot Networks Europe",
    address: "Zeltnerstraße 1-3, 90443 Nürnberg",
  },
  {
    country: "SPAIN",
    location: "Copilot Networks Spain",
    address: "Calle de Mendez Alvaro, 20, Madrid, 28045",
  },
  {
    country: "Caribbean",
    location: "Copilot Networks Caribbean",
    address:
      "Av. Gustavo Mejía Ricart 81, Santo Domingo 10132, Dominican Republic",
  },
];

const Locations = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "40px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };

  return (
    <div className="mx-auto my-20 w-[100%] max-w-5xl overflow-hidden sm:w-[90%]">
      {/* Show Slider in Mobile View */}
      <div className="mb-10 block sm:hidden">
        <Slider {...settings}>
          {LocationsData.map(({ address, country, location }, index) => (
            <div key={index} className="p-4">
              <div className="h-[200px] space-y-2 rounded-xl bg-white p-5 shadow-lg">
                <div className="text-[20px] font-bold uppercase">{country}</div>
                <div className="text-[15px] text-[#77A3BA]">{location}</div>
                <div className="ml-4">
                  <span className="text-[16px]">{address}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Show Grid in Larger Screens */}
      <div className="hidden grid-cols-1 gap-2 sm:grid sm:grid-cols-2 sm:gap-10 md:grid-cols-2 md:gap-x-[120px] md:gap-y-[60px] lg:grid-cols-3">
        {LocationsData.map(({ address, country, location }, index) => (
          <div key={index} className="space-y-2">
            <div className="text-[20px] font-bold uppercase">{country}</div>
            <div className="text-[15px] text-[#77A3BA]">{location}</div>
            <div className="">
              <span className="text-[16px]">{address}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
