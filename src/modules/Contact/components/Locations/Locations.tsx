const LocationsData = [
  {
    country: "USA",
    location: "Headquarters",
    address: "955 Garden Park Drive, #220, Allen, Texas, 75013",
  },
  {
    country: "India",
    location: "Copilot networks India",
    address:
      "Procapitus Business Park, D-247/4A, Sector 63,Noida, Uttar Pradesh, India -201301",
  },
  {
    country: "Ireland",
    location: "Copilot Europe",
    address: "239 Kensington High ST, London W8 6SN",
  },
  {
    country: "Caribbean",
    location: "Copilot networks Caribbean",
    address: "239 Kensington High ST, London W8 6SN",
  },
];

const Locations = () => {
  return (
    <div>
      <div className="mx-auto my-20 grid w-[90%] max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-20 md:grid-cols-2 lg:grid-cols-4">
        {LocationsData.map(({ address, country, location }) => {
          return (
            <div className="space-y-2">
              <div className="text-[20px] font-bold uppercase">{country}</div>
              <div className="text-[15px] text-[#77A3BA]">{location}</div>
              <div className="ml-4">
                <ul className="list-disc">
                  <li className="text-[16px]">{address}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;
