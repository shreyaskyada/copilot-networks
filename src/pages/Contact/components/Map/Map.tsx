const Map = () => {
  return (
    <div className="relative h-[400px] overflow-hidden bg-[#011929] sm:h-[600px] md:h-[600px]">
      <div className="absolute h-full w-full">
        <div className="mx-auto w-[90%] max-w-6xl pt-8 text-[26px] text-white md:p-10 md:text-[36px]">
          Our Global Presence
        </div>
      </div>
      <div className="mx-auto flex h-[100%] w-[90%] items-center justify-center text-4xl text-white">
        <img src="/contact/map.svg" alt="map" />
      </div>
    </div>
  );
};

export default Map;
