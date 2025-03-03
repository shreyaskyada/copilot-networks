/* eslint-disable no-constant-condition */
/* eslint-disable no-constant-binary-expression */
import Slider from "react-slick";
import { testimonials } from "./data";
import { ITestimonial } from "./types";
import useTestimonial from "./useTestimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const { columns, isMobile, showAllMobile, setShowAllMobile, slickSettings } =
    useTestimonial();

  return (
    <div
      className="container mx-auto overflow-hidden p-4 px-0 py-8 md:py-20"
      id="testimonials"
    >
      <div className="mx-auto w-[90%] max-w-6xl">
        <h1 className="font-Lato my-10 w-[90%] px-[30px] text-[24px] leading-[32px] font-medium md:my-10 md:mb-16 md:px-[10px] md:text-[40px] md:leading-[55px]">
          What partnership means to us
        </h1>
      </div>

      <div className="relative mx-auto hidden w-[90%] max-w-6xl flex-col gap-4 sm:flex md:flex-row">
        {columns.map((column, colIndex) => (
          <div key={`col-${colIndex}`} className="flex flex-1 flex-col gap-4">
            {column.map((testimonial: ITestimonial, index) => (
              <div
                key={testimonial.id + index}
                className={`font-Lato relative overflow-hidden rounded-[32px] border border-[#CFE1E8] bg-[#F3F7F9] ${
                  false &&
                  isMobile &&
                  !showAllMobile &&
                  index === column.length - 1 &&
                  testimonial.id === 2
                    ? "after:absolute after:right-0 after:bottom-0 after:left-0 after:h-32 after:bg-gradient-to-t after:from-white after:to-transparent after:content-['']"
                    : ""
                }`}
              >
                {/* Header with logo and title/subtitle */}
                <div className="flex items-start gap-4 p-[26px]">
                  {/* Logo on the left */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <img src={testimonial.logo} alt={testimonial.title} />
                  </div>

                  {/* Title and subtitle in column on the right */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#013D55]">
                      {testimonial.title}
                    </h3>
                    <p className="text-sm text-[#6AA5BD]">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>

                {/* Year */}
                <div className="px-[26px] text-sm font-bold text-[#6AA5BD]">
                  {testimonial.year}
                </div>

                {/* Description */}
                <div className="px-[26px] pt-2 pb-4">
                  <p className="text-lg leading-[28px] text-[#013D55] md:text-[20px] md:leading-[32px]">
                    {testimonial.description}
                  </p>
                </div>

                {/* Mileage */}
                <div className="px-[26px] pb-2">
                  <p className="text-sm font-bold text-[#6AA5BD]">
                    MILEAGE:{" "}
                    <span className="font-normal text-[#6AA5BD]">
                      {testimonial.mileage}
                    </span>
                  </p>
                </div>

                {/* Scope */}
                <div className="px-[26px] pb-4">
                  <p className="text-sm font-bold text-[#6AA5BD]">
                    SCOPE:{" "}
                    <span className="font-normal text-[#6AA5BD]">
                      {testimonial.scope}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Overlay blur effect */}
        {false && isMobile && !showAllMobile && testimonials.length > 2 && (
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      <div className="relative flex w-[100%] max-w-6xl flex-col pb-10 sm:flex md:hidden">
        <Slider {...slickSettings}>
          {testimonials.map((testimonial: ITestimonial, index) => (
            <div className="w-full px-2" key={index}>
              <div
                key={testimonial.id}
                className={`font-Lato relative h-[428px] overflow-hidden rounded-[32px] border border-[#CFE1E8] bg-[#F3F7F9]`}
              >
                {/* Header with logo and title/subtitle */}
                <div className="flex items-start gap-4 p-[26px]">
                  {/* Logo on the left */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <img src={testimonial.logo} alt={testimonial.title} />
                  </div>

                  {/* Title and subtitle in column on the right */}
                  <div className="flex-1">
                    <h3 className="text-[17px] font-bold text-[#013D55]">
                      {testimonial.title}
                    </h3>
                    <p className="text-[17px] text-[#6AA5BD]">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>

                {/* Year */}
                <div className="px-[26px] text-sm font-bold text-[#6AA5BD]">
                  {testimonial.year}
                </div>

                {/* Description */}
                <div className="px-[26px] pt-2 pb-4">
                  <p className="line-clamp-7 text-[15px] leading-[28px] text-[#013D55] sm:text-lg md:text-[20px] md:leading-[32px]">
                    {testimonial.description}
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 left-0">
                  {/* Mileage */}
                  <div className="px-[26px] pb-2">
                    <p className="text-sm font-bold text-[#6AA5BD]">
                      MILEAGE:{" "}
                      <span className="font-normal text-[#6AA5BD]">
                        {testimonial.mileage}
                      </span>
                    </p>
                  </div>

                  {/* Scope */}
                  <div className="px-[26px] pb-4">
                    <p className="text-sm font-bold text-[#6AA5BD]">
                      SCOPE:{" "}
                      <span className="font-normal text-[#6AA5BD]">
                        {testimonial.scope}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Overlay blur effect */}
        {false && isMobile && !showAllMobile && testimonials.length > 2 && (
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      {/* Show More button (only visible on mobile when not all testimonials are shown) */}
      {false && isMobile && !showAllMobile && testimonials.length > 2 && (
        <div className="relative z-10 mx-auto mt-4 flex w-[90%] justify-center">
          <button
            onClick={() => setShowAllMobile(true)}
            className="rounded-full bg-[#013D55] px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-[#025475]"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
