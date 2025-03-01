/* eslint-disable no-constant-condition */
/* eslint-disable no-constant-binary-expression */
import { testimonials } from "./data";
import { ITestimonial } from "./types";
import useTestimonial from "./useTestimonial";

const Testimonial = () => {
  const { columns, isMobile, showAllMobile, setShowAllMobile } =
    useTestimonial();

  return (
    <div className="container mx-auto p-4 py-8 md:py-20">
      <div className="w-[90%] md:w-[90%] lg:w-[80%] mx-auto">
        <h1 className="text-[24px] md:text-[40px] font-Lato font-medium my-6 md:my-10 md:mb-16 leading-[32px] md:leading-[55px] w-[70%]">
          What partnership means to us
        </h1>
      </div>

      <div className="relative flex flex-col md:flex-row gap-4 w-[90%] md:w-[90%] lg:w-[80%] mx-auto">
        {columns.map((column, colIndex) => (
          <div key={`col-${colIndex}`} className="flex-1 flex flex-col gap-4">
            {column.map((testimonial: ITestimonial, index) => (
              <div
                key={testimonial.id}
                className={`rounded-[32px] overflow-hidden bg-[#F3F7F9] border border-[#CFE1E8] font-Lato relative ${
                  false &&
                  isMobile &&
                  !showAllMobile &&
                  index === column.length - 1 &&
                  testimonial.id === 2
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-gradient-to-t after:from-white after:to-transparent"
                    : ""
                }`}
              >
                {/* Header with logo and title/subtitle */}
                <div className="p-[26px] flex items-start gap-4">
                  {/* Logo on the left */}
                  <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
                    <span className="text-sm text-gray-600">
                      {testimonial.logo
                        ? testimonial.logo.substring(0, 2)
                        : testimonial.title.substring(0, 2)}
                    </span>
                  </div>

                  {/* Title and subtitle in column on the right */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#013D55]">
                      {testimonial.title}
                    </h3>
                    <p className="text-sm text-[#6AA5BD]">
                      {testimonial.subtitle}
                    </p>
                  </div>
                </div>

                {/* Year */}
                <div className="px-[26px] text-sm text-[#6AA5BD] font-bold">
                  {testimonial.year}
                </div>

                {/* Description */}
                <div className="px-[26px] pt-2 pb-4">
                  <p className="text-[#013D55] text-lg md:text-[20px] leading-[28px] md:leading-[32px]">
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
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      {/* Show More button (only visible on mobile when not all testimonials are shown) */}
      {false && isMobile && !showAllMobile && testimonials.length > 2 && (
        <div className="w-[90%] mx-auto mt-4 flex justify-center relative z-10">
          <button
            onClick={() => setShowAllMobile(true)}
            className="bg-[#013D55] text-white py-3 px-6 rounded-full font-medium hover:bg-[#025475] transition-colors shadow-lg"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
